from .models import Project, Feature
from rest_framework import serializers

class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = '__all__'