# Generated by Django 3.2.8 on 2021-10-13 13:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('product', '0003_auto_20211013_1143'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('cart_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='auth.user')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('shoes', models.ManyToManyField(to='product.Shoe')),
            ],
            options={
                'ordering': ['cart_id', '-created_at'],
            },
        ),
    ]