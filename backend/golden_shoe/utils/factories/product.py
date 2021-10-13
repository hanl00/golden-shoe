import factory
import random

from factory import fuzzy
from factory.django import DjangoModelFactory

from product.models import Shoe, Size


class SizeFactory(DjangoModelFactory):
    class Meta:
        model = Size

    size_number = fuzzy.FuzzyInteger(5, 12)


class ShoeFactory(DjangoModelFactory):
    class Meta:
        model = Shoe

    title = factory.Faker("sentence", nb_words=3)
    price = fuzzy.FuzzyFloat(0.0, 1000)
    discount = fuzzy.FuzzyFloat(0.0, 20)
    next_day_delivery = True
    environment_friendly = False
    inventory = fuzzy.FuzzyInteger(0, 1000)
    rating = fuzzy.FuzzyInteger(0, 5)

    @factory.post_generation
    def sizes(self, create, extracted, **kwargs):
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of groups were passed in, use them
            for size_number in extracted:
                self.sizes.add(size_number)
