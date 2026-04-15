import os

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .services.github_service import get_user_repos, get_contributions

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def github_repos(request):
    username = request.query_params.get("username", "").strip()

    if not username:
        return Response(
            {"detail": "username is required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    repos = get_user_repos(username)
    data = [
        {
            "name": repo.get("name"),
            "description": repo.get("description"),
            "url": repo.get("html_url"),
            "stars": repo.get("stargazers_count"),
            "language": repo.get("language"),
        }
        for repo in repos
    ]

    return Response(data)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def github_contributions(request):
    username = request.query_params.get("username", "").strip()
    
    if not username:
        return Response(
            {"detail": "username is required"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    token = os.getenv("GITHUB_TOKEN")
    data = get_contributions(username, token)

    if not isinstance(data, dict):
        return Response(
            {"detail": "Unexpected response type from GitHub service"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
    # Handle errors from the service
    if "error" in data:
        return Response(
            {"detail": data["error"], "details": data.get("details")},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Check if data structure is as expected
    try:
        contribution_calendar = data["data"]["user"]["contributionsCollection"]["contributionCalendar"]
        return Response(contribution_calendar)
    except (KeyError, TypeError) as e:
        return Response(
            {"detail": "Unexpected response structure from GitHub API", "error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )