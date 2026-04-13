from django.db import models
from .projects import Project


class Feature(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name='features'
    )
    title = models.CharField(max_length=150)
    description = models.TextField()

    def __str__(self):
        return self.title