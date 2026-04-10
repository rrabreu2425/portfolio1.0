from django.contrib import admin

from .models.skills import Skill
from .models.category import Category
    

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'level', 'category', 'is_featured', 'order')
    search_fields = ('name', 'category__name')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug', 'order')
    search_fields = ('name', 'slug', 'description')

# Register your models here.
