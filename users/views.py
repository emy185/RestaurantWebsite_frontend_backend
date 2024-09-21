from rest_framework.decorators import api_view, permission_classes
from .models import Profile
from .serializers import RegisterSerializer, ProfileSerializer
from rest_framework.response import Response 
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# Create your views here.
@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    try:
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            response_data = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'username': user.username,
                'user_id': user.id
            }
            print("Registration Success:", response_data)
            return Response(response_data, status=status.HTTP_201_CREATED)
        else:
            print("Validation errors:", serializer.errors) 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        import traceback
        print("Error occurred:", str(e)) 
        print("Traceback:", traceback.format_exc())
        return Response({"detail": "Internal server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def profile_view(request):
    try:
        profile = request.user.profile
    except Profile.DoesNotExist:
        return Response({"error": "Profile does not exist for the current user"}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAdminUser])
def admin_users(request):
    non_superusers = User.objects.filter(is_superuser=False)
    
    profiles = Profile.objects.filter(user__in=non_superusers)
    
    user_data = [
        {
            "id": profile.user.id,
            "username": profile.user.username,
            "email": profile.user.email,
            "phone": profile.phone,
            "firstname": profile.user.first_name, 
            "lastname": profile.user.last_name 
        }
        for profile in profiles
    ]
    
    return Response(user_data)

@api_view(['POST'])
def custom_token_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'access': str(refresh.access_token),
            'is_superuser': user.is_superuser 
        })
    else:
        return Response({'detail': 'Invalid credentials'}, status=401)