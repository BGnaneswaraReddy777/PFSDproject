from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('',Homepage,name='Homepage'),
    path('Consultation/',Consultation,name='Consultation'),
    path('Login/',Login,name='Login'),
    path('login1/',login1,name='login1'),
    path('Signup/',Signup,name='Signup'),
    path('signup1/',signup1,name='signup1'),
    path('logout/',logout,name='logout'),
    path('Contactus/',Contactus,name='Contactus'),
    path('Health/',Health,name='Health'),
    path('Nutririon/',Nutririon,name='Nutririon'),



]
