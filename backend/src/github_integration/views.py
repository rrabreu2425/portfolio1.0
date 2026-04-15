from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .services.github_service import get_user_repos

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