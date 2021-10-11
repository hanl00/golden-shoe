from django.urls import path, include

from product import views

urlpatterns = [
    path('products/', views.ListProduct.as_view(), name="products-list"),
    path('products/<int:pk>/', views.DetailProduct.as_view(), name="products-detail"),
]