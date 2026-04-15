from django.urls import path, include
from .views import github_repos

urlpatterns = [
    path('api/github-repos/', github_repos, name='github-repos'),
]