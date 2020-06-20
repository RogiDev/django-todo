from rest_framework import serializers

from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    password_agian = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['email', 'username', 'first_name', 'last_name', 'password', 'password_agian','id']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        user = User(
            email=self.validated_data['email']
        )
        password = self.validated_data['password']
        password_agian = self.validated_data['password_agian']

        if password is not password_agian:
            raise serializers.ValidationError({'password': 'passwords must match'})
        user.set_password(password)
        user.save()
        return user
