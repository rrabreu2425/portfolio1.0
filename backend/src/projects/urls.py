from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('api/projects', views.ProjectViewSet, basename='api-projects')
router.register('api/features', views.FeatureViewSet, basename='api-features')

urlpatterns = []
urlpatterns += router.urls