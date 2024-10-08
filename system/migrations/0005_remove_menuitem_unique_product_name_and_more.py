# Generated by Django 5.1 on 2024-09-05 17:23

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("system", "0004_alter_profile_phone"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveConstraint(model_name="menuitem", name="unique_product_name",),
        migrations.AddConstraint(
            model_name="booking",
            constraint=models.CheckConstraint(
                condition=models.Q(("num_guests__gte", 0)),
                name="non_negative_num_guests",
            ),
        ),
        migrations.AddConstraint(
            model_name="menuitem",
            constraint=models.UniqueConstraint(fields=("name",), name="unique_name"),
        ),
        migrations.AlterModelTable(name="booking", table="Bookings",),
        migrations.AlterModelTable(name="menuitem", table="Menu_item",),
    ]
