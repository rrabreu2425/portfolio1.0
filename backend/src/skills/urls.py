from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('api/skills', views.SkillViewSet, basename='api-skills')
router.register('api/categories', views.CategoryViewSet, basename='api-categories')

urlpatterns = [
    path('skills/', views.index, name='index'),
    path('skills/<int:skill_id>/', views.detail, name='detail'),
]

urlpatterns += router.urls