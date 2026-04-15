# github_integration/services/github_service.py
import requests

GITHUB_API_URL = "https://api.github.com"

def get_user_repos(username):
    url = f"{GITHUB_API_URL}/users/{username}/repos"
    
    response = requests.get(url, timeout=10)

    if response.status_code != 200:
        return []

    return response.json()