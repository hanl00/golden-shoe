from django.urls import path, include

from product import views

urlpatterns = [
    path("products/", views.ListProduct.as_view(), name="products-list"),
    path("products/<int:pk>/", views.DetailProduct.as_view(), name="products-detail"),
    path('carts', views.ListCart.as_view(), name='carts-list'),
    path('carts/<int:pk>', views.DetailCart.as_view(), name='carts-detail'),
]
