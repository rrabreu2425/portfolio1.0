from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import LoginView, RegisterView, LogoutView, LogoutAllView, UserViewSet

router = DefaultRouter()
router.register(r'api/users', UserViewSet, basename='users')

urlpatterns = [
	path('api/login/', LoginView.as_view(), name='login'),
	path('api/register/', RegisterView.as_view(), name='register'),
	path('api/logout/', LogoutView.as_view(), name='logout'),
	path('api/logout/all/', LogoutAllView.as_view(), name='logout-all'),
] + router.urls