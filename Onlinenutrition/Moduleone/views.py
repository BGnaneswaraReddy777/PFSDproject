from django.contrib.auth.models import User
from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User,auth
from django.contrib import messages
import string
import random
# Create your views here.
def Homepage(request):
    return render(request, 'Homepage.html')
def Consultation(request):
    return render(request,'Consultationpage.html')

def Login(request):
    return render(request,'Loginpage.html')
def Signup(request):
    return render(request,'signuppage.html')
def login1(request):
    if request.method=='POST':
        username=request.POST['username']
        pass1=request.POST['password']
        user= auth.authenticate(username=username,password=pass1)
        if user is not None:
            auth.login(request,user)
            return render(request,'Homepage.html')
        else:
            messages.info(request,'Invalid credentials')
            return render(request,'Loginpage.html')
    else:
        return render(request,'Loginpage.html')


def signup1(request):
    if request.method == "POST":
        username = request.POST['username']
        pass1 = request.POST['password']
        pass2 = request.POST['password1']
        email = request.POST['email']  # Get email from POST data
        # phone = request.POST['phone'] # Get phone number from POST data
        if pass1 == pass2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'OOPS! Usename already taken')
                return render(request, 'signuppage.html')
            else:
                user = User.objects.create_user(username=username, password=pass1, email=email)
                user.save()
                messages.info(request, 'Account created successfully!!')
                return render(request, 'Loginpage.html')
        else:
            messages.info(request, 'Password do not match')
            return render(request, 'signuppage.html')

def logout(request):
    auth.logout(request)
    return render (request,'Homepage.html')

def Contactus(request):
    return render(request, 'Contactuspage.html')
def Health(request):
    return render(request, 'Healthpage.html')
def Nutririon(request):
    return render(request, 'Nutririonpage.html')