from rest_framework import routers
from django.urls import path, include
from . import views

router = routers.DefaultRouter()
router.register(r'api/contact', views.ContactMessageViewSet, basename='contactmessage')

urlpatterns = [
    path('', include(router.urls)),
    path('api/message/', views.index, name='contact-index'),
]