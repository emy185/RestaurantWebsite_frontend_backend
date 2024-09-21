from rest_framework import serializers 
from .models import MenuItem, Booking
class MenuSerializer(serializers.ModelSerializer):
    class Meta : 
        model = MenuItem
        fields = "__all__"

class BookingSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    class Meta:
       model = Booking
       fields = ['id', 'username', 'phone', 'num_guests', 'booking_date', 'booking_time', 'status']
       read_only_fields = ['user', 'status'] 
