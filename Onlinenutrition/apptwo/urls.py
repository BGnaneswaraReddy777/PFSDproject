from . import views

from django.urls import path



urlpatterns  = [
    path('', views.insert, name='insert'),

    path('show/', views.show, name='show'),

    path('edit/<int:pk>', views.edit, name='edit'),

    path('remove/<int:pk>', views.remove, name='remove'),
]