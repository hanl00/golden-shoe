from django.db.models import Q
from django.http import Http404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics

from .models import Shoe
from .serializers import ShoeSerializer

class ListProduct(generics.ListCreateAPIView):    
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer

class DetailProduct(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer
