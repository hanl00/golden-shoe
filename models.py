from django.db import models

# Create your models here.

class Collection(models.Model):
    name = models.CharField(max_length=128)
    release_date = models.DateField(blank=True)


class Shoe(models.Model):
    MEN = "MEN"
    WOMEN = 'WOMEN'
    KIDS = "KIDS"

    CATEGORIES = ((MEN, "Men"), (WOMEN, "Women"), (KIDS, "Kids"))

    title = models.CharField(max_length=128)
    price = models.FloatField()
    discount = models.FloatField(null=True)
    next_day_delivery = models.BooleanField()
    environment_friendly = models.BooleanField()
    release_collection = models.ForeignKey(Collection, related_name='shoes', on_delete=models.SET_NULL, null=True)
    category = models.CharField(max_length=8, choices=CATEGORIES, blank=True, null=True)
    inventory = models.PositiveIntegerField()
    rating = models.PositiveIntegerField()


class ShoeColour(models.Model):
    RED = "RED"
    GREEN = 'GREEN'
    BLUE = "BLUE"

    COLOURS = ((RED, "Red"), (GREEN, "Green"), (BLUE, "Blue"))

    shoe = models.ForeignKey(Shoe, on_delete=models.CASCADE, related_name='colours')
    colour = models.CharField(max_length=8, choices=COLOURS, blank=True, null=True)


class ShoeSize(models.Model):
    shoe = models.ForeignKey(Shoe, on_delete=models.CASCADE, related_name='sizes')
    size = models.PositiveIntegerField()


class Review(models.Model):
    shoe = models.ForeignKey(Shoe, on_delete=models.CASCADE, related_name='reviews')
    review = models.TextField()
