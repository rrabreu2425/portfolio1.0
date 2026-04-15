"""
URL configuration for src project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import RedirectView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.reverse import reverse


@api_view(['GET'])
@permission_classes([AllowAny])
def api_root(request, format=None):
    return Response({
        'skills': reverse('api-skills-list', request=request, format=format),
        'categories': reverse('api-categories-list', request=request, format=format),
        'projects': reverse('api-projects-list', request=request, format=format),
        'features': reverse('api-features-list', request=request, format=format),
        'users': reverse('users-list', request=request, format=format),
        'login': reverse('login', request=request, format=format),
        'register': reverse('register', request=request, format=format),
        'contact': reverse('contactmessage-list', request=request, format=format),
    })

urlpatterns = [
    path('', api_root, name='api-root'),
    path('admin/', admin.site.urls),
    path('api/', RedirectView.as_view(url='/api/skills/', permanent=False)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include('src.skills.urls')),
    path('', include('src.users.urls')),
    path('', include('src.projects.urls')),
    path('', include('src.contact.urls')),
    path('', include('src.github_integration.urls')),
]
