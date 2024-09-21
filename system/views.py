from rest_framework.decorators import api_view, permission_classes
from .models import MenuItem  , Booking
from .serializers import MenuSerializer, BookingSerializer
from rest_framework.response import Response 
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, IsAdminUser


# Create your views here.
@api_view(["GET"])
def get_items(request) : 
    try : 
        q = request.GET.dict() 
        category = q.get("category" , "")
        print(category)
        items = MenuItem.objects.filter(category__contains = category) 
        
        serializer = MenuSerializer(items , many = True)
        
        return Response(serializer.data , status=status.HTTP_200_OK)
    
    except : 
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["GET"])
def get_categories(request) :
    categories = MenuItem.objects.values("category").distinct()
    return Response({"data" : list(categories)})
    
@api_view(["POST"])
@permission_classes([IsAdminUser])
def create_item(request) : 
    data = request.data 
    try : 
        serializer =  MenuSerializer(data = data)
        if serializer.is_valid() : 
            serializer.save()
            return Response(serializer.data , status=status.HTTP_201_CREATED)
        else : 
            return Response(serializer.errors , status=400)
    except Exception as ex :
        return Response({"details" : f"error happen {str(ex)}"} , status=400) 
    
@api_view(["GET", "PUT"])
@permission_classes([IsAdminUser])
def get_or_update_item(request, pk):
    try:
        item = MenuItem.objects.get(id=pk)
    except MenuItem.DoesNotExist:
        return Response({"detail": "Item not found"}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        serializer = MenuSerializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == "PUT":
        serializer = MenuSerializer(instance=item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def delete_item(request , pk) : 
    try : 
        MenuItem.objects.filter(id = pk).delete()
        return Response(status=status.HTTP_200_OK)
    
    except Exception as ex : 
        return Response({"detail" : f"error happen {str(ex)}"} , status=400)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_booking(request):
    serializer = BookingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_bookings(request):
    bookings = Booking.objects.filter(user=request.user)
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def admin_list_bookings(request):
    bookings = Booking.objects.all()
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def update_booking_status(request, pk):
    try:
        booking = Booking.objects.get(pk=pk)
    except Booking.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    status = request.data.get('status')
    if status not in ['accepted', 'rejected']:
        return Response({'status': 'Invalid status'}, status=status.HTTP_400_BAD_REQUEST)

    booking.status = status
    booking.save()

    return Response(BookingSerializer(booking).data)