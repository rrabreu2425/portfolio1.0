from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)

    short_description = models.CharField(max_length=255)
    description = models.TextField()

    technologies = models.ManyToManyField('skills.Skill', related_name='projects')

    github_url = models.URLField(blank=True, null=True)
    live_url = models.URLField(blank=True, null=True)

    image = models.ImageField(upload_to='projects/', blank=True, null=True)

    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)

    order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title