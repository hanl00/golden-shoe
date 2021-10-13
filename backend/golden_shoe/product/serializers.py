from rest_framework import serializers
from .models import Shoe, Size, Cart
from django.contrib.auth.models import User


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = "__all__"


class ShoeSerializer(serializers.ModelSerializer):
    sizes = SizeSerializer(read_only=True, many=True)

    class Meta:
        model = Shoe
        fields = (
            "title",
            "price",
            "discount",
            "next_day_delivery",
            "environment_friendly",
            "release_collection",
            "category",
            "inventory",
            "rating",
            "sizes",
        )


class CartUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "email")


class CartSerializer(serializers.ModelSerializer):

    cart_id = CartUserSerializer(read_only=True, many=False)
    shoes = ShoeSerializer(read_only=True, many=True)

    class Meta:
        model = Cart
        fields = ("cart_id", "created_at", "books", "products")
