from django.urls import path
from .views import registraion_view
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token



urlpatterns = (
    path('register', registraion_view),
    path('login', obtain_jwt_token)
)