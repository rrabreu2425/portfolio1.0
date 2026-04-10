from .models.skills import Skill
from .models.category import Category
from .serializers import CategorySerializer, SkillSerializer
from django.shortcuts import get_object_or_404, render
from rest_framework import permissions, viewsets


def index(request):
    skills = Skill.objects.all()
    return render(request, 'skills/index.html', {'skills': skills}) 

def detail(request, skill_id):
    skill = get_object_or_404(Skill, id=skill_id)
    return render(request, 'skills/detail.html', {'skill': skill})


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.select_related('category').all()
    serializer_class = SkillSerializer
    permission_classes = [permissions.IsAuthenticated]


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]