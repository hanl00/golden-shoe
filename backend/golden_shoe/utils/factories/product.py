import factory
import random 

from factory import fuzzy
from factory.django import DjangoModelFactory

from product.models import Shoe


class ShoeFactory(DjangoModelFactory):
    class Meta:
        model = Shoe

    title = factory.Faker('name')
    price = fuzzy.FuzzyFloat(0.0, 1000)
    discount = fuzzy.FuzzyFloat(0.0, 20)
    next_day_delivery = True
    environment_friendly = False
    inventory = fuzzy.FuzzyInteger(0, 1000)
    rating = fuzzy.FuzzyInteger(0, 5)
    