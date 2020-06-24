from rest_framework.viewsets import ModelViewSet
from .serializers import RegisterSerializer
from .models import User


class UserViewSet(ModelViewSet):
    serializer_class = RegisterSerializer
    queryset = User.objects.all()
