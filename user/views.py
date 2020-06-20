from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import RegisterSerializer
from rest_framework.authtoken.models import Token


@api_view(['POST', ])
def registraion_view(request):
    serializer = RegisterSerializer(data=request.data)
    data = {}
    if serializer.is_valid():
        user = serializer.save()
        data['response'] = "User Register Successfully"
        data['email'] = user.email
        data['first_name'] = user.first_name
        data['last_name'] = user.last_name
        token = Token.objects.get(user=user).key
        data['token'] = token
    else:
        data = serializer.errors
    return Response(data)
