from rest_framework.authentication import TokenAuthentication
from rest_framework.viewsets import ModelViewSet
from task.models import Task
from .serializers import TaskSerializer
from django.conf import settings
from user.models import User


class TaskViewSet(ModelViewSet):
    serializer_class = TaskSerializer
    authentication_classes = (TokenAuthentication,)
    queryset = Task.objects.all().filter()
