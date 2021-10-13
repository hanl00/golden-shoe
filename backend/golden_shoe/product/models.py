from django.db import models
from django.contrib.auth.models import User


class Collection(models.Model):
    name = models.CharField(max_length=128)
    release_date = models.DateField(blank=True)


class Colour(models.Model):
    RED = "RED"
    GREEN = "GREEN"
    BLUE = "BLUE"

    COLOURS = ((RED, "Red"), (GREEN, "Green"), (BLUE, "Blue"))

    colour_name = models.CharField(max_length=8, choices=COLOURS, blank=True, null=True)


class Size(models.Model):
    size_number = models.PositiveIntegerField()


class Shoe(models.Model):
    MEN = "MEN"
    WOMEN = "WOMEN"
    KIDS = "KIDS"

    CATEGORIES = ((MEN, "Men"), (WOMEN, "Women"), (KIDS, "Kids"))

    title = models.CharField(max_length=128)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    discount = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    next_day_delivery = models.BooleanField()
    environment_friendly = models.BooleanField()
    release_collection = models.ForeignKey(
        Collection,
        related_name="shoes",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    category = models.CharField(max_length=8, choices=CATEGORIES, blank=True, null=True)
    inventory = models.PositiveIntegerField()
    rating = models.PositiveIntegerField()
    sizes = models.ManyToManyField(Size)

    def __str__(self):
        return f"{self.title}"


class Review(models.Model):
    shoe = models.ForeignKey(Shoe, on_delete=models.CASCADE, related_name="reviews")
    review = models.TextField()


class Cart(models.Model):
    cart_id = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    shoes = models.ManyToManyField(Shoe)

    class Meta:
        ordering = ["cart_id", "-created_at"]

    def __str__(self):
        return f"{self.cart_id}"
