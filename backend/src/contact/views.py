from django.core.mail import send_mail
from django.conf import settings
from smtplib import SMTPAuthenticationError, SMTPException
from rest_framework import status, viewsets, permissions
from rest_framework.decorators import api_view, permission_classes as drf_permission_classes, authentication_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import ContactMessage
from .serializers import ContactMessageSerializer


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

    if not all([name, email, subject, message]):
        return Response(
            {'detail': 'name, email, subject and message are required.'},
            status=status.HTTP_400_BAD_REQUEST,
        )

    from_email = getattr(settings, 'DEFAULT_FROM_EMAIL', '') or settings.EMAIL_HOST_USER
    recipient = getattr(settings, 'CONTACT_RECIPIENT_EMAIL', '') or settings.EMAIL_HOST_USER

    if not from_email or not recipient:
        return Response(
            {'detail': 'Email service is not configured.'},
            status=status.HTTP_503_SERVICE_UNAVAILABLE,
        )

    try:
        send_mail(
            subject,
            f"Message from {name} ({email}): {message}",
            from_email,
            [recipient],
            fail_silently=False,
        )
    except SMTPAuthenticationError:
        return Response(
            {'detail': 'SMTP authentication failed. Check EMAIL_HOST_USER and EMAIL_HOST_PASSWORD.'},
            status=status.HTTP_502_BAD_GATEWAY,
        )
    except SMTPException:
        return Response(
            {'detail': 'Unable to send email at this time.'},
            status=status.HTTP_502_BAD_GATEWAY,
        )

    return Response({'detail': 'Message sent successfully.'}, status=status.HTTP_201_CREATED)