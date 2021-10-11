from rest_framework import serializers
from .models import Shoe
from django.contrib.auth.models import User

class ShoeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoe
        fields = "__all__"