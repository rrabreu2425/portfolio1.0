from django.shortcuts import render
from rest_framework import permissions, viewsets
from .models import Project, Feature
from .serializers import ProjectSerializer, FeatureSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.prefetch_related('features').all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

class FeatureViewSet(viewsets.ModelViewSet):
    queryset = Feature.objects.select_related('project').all()
    serializer_class = FeatureSerializer
    permission_classes = [permissions.IsAuthenticated]