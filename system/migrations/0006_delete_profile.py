# Generated by Django 5.1 on 2024-09-21 13:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("system", "0005_remove_menuitem_unique_product_name_and_more"),
    ]

    operations = [
        migrations.DeleteModel(name="Profile",),
    ]
