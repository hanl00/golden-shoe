from django.db.models import Q
from django.http import Http404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics

from .models import Shoe, Cart
from .serializers import ShoeSerializer, CartSerializer


class ListProduct(generics.ListCreateAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer


class DetailProduct(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer


class ListCart(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class DetailCart(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
