from django.db import models
from django.conf import settings


class Task(models.Model):
    title = models.CharField(max_length=120)
    date = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    description = models.TextField(max_length=200)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name="user_tasks")

    class Meta:
        ordering = ['date','completed']
