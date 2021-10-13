from django.test import TestCase
import datetime
import pathlib
from decimal import Decimal
from unittest import skip
from unittest.mock import patch, MagicMock

from django.urls import reverse
from django.utils.datetime_safe import date
from rest_framework import status
from rest_framework.test import APITestCase

from utils.factories.product import ShoeFactory, SizeFactory


class TestProductViewSet(APITestCase):
    def setUp(self):
        self.shoe_1 = ShoeFactory()
        self.shoe_2 = ShoeFactory()

        self.product_list_url = reverse("products-list")
        self.product_detail_url = reverse("products-detail", args=(self.shoe_1.pk,))

    def test_get_product_viewset(self):
        response = self.client.get(self.product_list_url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_delete_product_viewset(self):
        response = self.client.delete(self.product_detail_url)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
