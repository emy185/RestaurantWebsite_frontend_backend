from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_user, name='register_user'),
    path('profile/', views.profile_view, name='profile_view'),
    path('admin/users/', views.admin_users, name='admin_users'),
]