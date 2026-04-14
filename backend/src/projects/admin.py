from django.contrib import admin
from .models import Project
from .models import Feature

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'live_url', 'image', 'order')
    search_fields = ('title', 'description')

@admin.register(Feature)
class FeatureAdmin(admin.ModelAdmin):
    list_display = ('id', 'project', 'title', 'description')
    search_fields = ('title', 'description', 'project_title')
