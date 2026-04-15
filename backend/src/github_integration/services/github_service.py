# github_integration/services/github_service.py
import requests

GITHUB_API_URL = "https://api.github.com"
GITHUB_GRAPHQL_URL = "https://api.github.com/graphql"

def get_user_repos(username):
    url = f"{GITHUB_API_URL}/users/{username}/repos"
    
    response = requests.get(url, timeout=10)

    if response.status_code != 200:
        return []

    return response.json()


def get_contributions(username, token):
    if not token:
        return {"error": "GITHUB_TOKEN not configured"}

    query = """
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
    """

    try:
        response = requests.post(
            GITHUB_GRAPHQL_URL,
            json={"query": query, "variables": {"username": username}},
            headers={"Authorization": f"Bearer {token}"},
            timeout=10,
        )

        data = response.json()

        if "errors" in data:
            return {"error": "GraphQL Error", "details": data["errors"]}

        return data
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}
