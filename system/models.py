from django.db import models
from django.core.validators import MinLengthValidator , MinValueValidator
from django.contrib.auth.models  import User 

# Create your models here.
class MenuItem(models.Model) : 
    name = models.CharField(max_length=100  , null= False , blank=False , validators=[MinLengthValidator(3)])
    image = models.ImageField(null=True , blank=True , default="/placeholder.png" , upload_to="productImages/")
    category = models.CharField(max_length=100, null=True , blank=True , validators=[MinLengthValidator(3)])
    description = models.TextField(null= True , blank=True)
    price = models.FloatField(default=0  , validators=[MinValueValidator(0)])   

    def __str__(self) : 
        return self.name 
    
    class Meta : 
        db_table = "Menu_item" 
        constraints = [
            models.UniqueConstraint(fields=["name"] , name="unique_name") , 
            models.CheckConstraint(check=models.Q(price__gte=0), name='non_negative_price'),
        ]

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, blank=True)
    num_guests = models.PositiveIntegerField()
    booking_date = models.DateField()
    booking_time = models.TimeField()
    status = models.CharField(
        max_length=20,
        choices=[
            ('Pending', 'Pending'),
            ('Accepted', 'Accepted'),
            ('Rejected', 'Rejected')
        ],
        default='Pending'
    )

    def __str__(self):
        return f'{self.user.username} - {self.booking_date} - {self.status}'
    
    class Meta : 
        db_table = "Bookings" 
        constraints = [
            models.CheckConstraint(check=models.Q(num_guests__gte=0), name='non_negative_num_guests'),
        ]
    
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, unique=True)
    phone = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.user.username


