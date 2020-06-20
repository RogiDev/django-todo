from django.db import models
from user.models import User


class Task(models.Model):
    title = models.CharField(max_length=120)
    date = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    description = models.TextField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['completed', 'date']
