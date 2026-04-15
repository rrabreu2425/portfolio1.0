from django.urls import path, include
from .views import github_contributions, github_repos

urlpatterns = [
    path('api/github-repos/', github_repos, name='github-repos'),
    path('api/github-contributions/', github_contributions, name='github-contributions'),
]