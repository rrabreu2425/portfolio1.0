from django.db import models

class Skill(models.Model):
    LEVEL_CHOICES = [
        (1, 'Beginner'),
        (2, 'Basic'),
        (3, 'Intermediate'),
        (4, 'Advanced'),
        (5, 'Expert'),
    ]
    name = models.CharField(max_length=100, unique=True)
    level = models.IntegerField(choices=LEVEL_CHOICES)
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='skills')
    icon = models.ImageField(upload_to='skills/icons/', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'name']
        unique_together = ['name', 'category']

    def __str__(self):
        return self.name

