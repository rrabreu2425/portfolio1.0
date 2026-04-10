from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from .models import *
from .serializers import *
from rest_framework.response import Response
from django.contrib.auth import get_user_model, authenticate
from knox.models import AuthToken
from knox.views import LogoutView as KnoxLogoutView, LogoutAllView as KnoxLogoutAllView

User = get_user_model()

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer

    def get(self, request):
        return Response(
            {'detail': 'Use POST to login with email and password.'},
            status=status.HTTP_200_OK,
        )

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        print(serializer.initial_data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, email=email, password=password)
            if user is not None:
                _, token = AuthToken.objects.create(user)
                return Response({'token': token, 'user': RegisterSerializer(user).data}, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        return Response(
            {'detail': 'Use POST to register a new user.'},
            status=status.HTTP_200_OK,
        )

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            _, token = AuthToken.objects.create(user)
            return Response({'message': 'User registered successfully', 'token': token, 'user': RegisterSerializer(user).data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(KnoxLogoutView):
    permission_classes = [permissions.IsAuthenticated]


class LogoutAllView(KnoxLogoutAllView):
    permission_classes = [permissions.IsAuthenticated]


class UserViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    
    def list(self, request):
        queryset = User.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data) 


# Create your views here.
