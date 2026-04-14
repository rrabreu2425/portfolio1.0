from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.core.mail import send_mail
from rest_framework.decorators import api_view, permission_classes as drf_permission_classes, authentication_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.IsAuthenticated]

@api_view(['POST'])
@authentication_classes([])
@drf_permission_classes([AllowAny])
def index(request):
    name = request.data.get('name')
    email = request.data.get('email')
    subject = request.data.get('subject')
    message = request.data.get('message')
    send_mail(
        subject,
        f"Message from {name} ({email}): {message}",
        email,
        ['your_email@example.com'],
        fail_silently=False,
    )
    return Response({'detail': 'Message sent successfully.'}, status=201)