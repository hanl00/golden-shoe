from django.contrib import admin
from .models import Shoe, Collection, Size, Colour, Review


admin.site.register(Shoe)
admin.site.register(Collection)
admin.site.register(Size)
admin.site.register(Colour)
admin.site.register(Review)
