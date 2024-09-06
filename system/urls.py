from django.urls import path
from . import views

urlpatterns = [
    path("menu/", views.get_items, name="get_menu_items"),
    path("categories/", views.get_categories, name="get_categories"),
    path("menu/create/", views.create_item, name="create_menu_item"),
    path("menu/<int:pk>/update_item/", views.get_or_update_item, name="update_menu_item"),
    path("menu/<int:pk>/delete_item/" , views.delete_item , name="delete_menu_item"),
    path('book/', views.create_booking, name='create_booking'),
    path('my_bookings/', views.list_bookings, name='list_bookings'),
    path('admin_bookings/', views.admin_list_bookings, name='admin_list_bookings'),
    path('bookings/<int:pk>/status/', views.update_booking_status, name='update_booking_status'),
    path('register/', views.register_user, name='register_user'),
    path('profile/', views.profile_view, name='profile_view'),
    path('admin/users/', views.admin_users, name='admin_users'),
]