# Generated by Django 3.2.8 on 2021-10-11 14:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoe',
            name='discount',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='shoe',
            name='release_collection',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='shoes', to='product.collection'),
        ),
    ]