from rest_framework import serializers

from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    password_again = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['email', 'username', 'first_name', 'last_name', 'password', 'password_again', 'id']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        user = User(
            email=self.validated_data['email'],
            username=self.validated_data['username'],
            first_name=self.validated_data['first_name'],
            last_name=self.validated_data['last_name']
        )
        password = self.validated_data['password']
        password_again = self.validated_data['password_again']
        print(password, password_again)
        if password != password_again:
            raise serializers.ValidationError({'password': 'passwords must match'})
        user.set_password(password)
        user.save()
        return user
