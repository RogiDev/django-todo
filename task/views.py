from MySQLdb.compat import unicode
from rest_framework import request
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from task.models import Task
from rest_framework.decorators import permission_classes
from .serializers import TaskSerializer



class TaskViewSet(ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


