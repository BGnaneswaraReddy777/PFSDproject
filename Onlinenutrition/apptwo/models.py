
from django.db import models



# Create your models here.

class Problem(models.Model):

    proId = models.CharField(max_length=3)

    proName = models.CharField(max_length=200)

    proGender = models.CharField(max_length=10)

    proEmail = models.EmailField()

    proDesignation = models.CharField(max_length=150)

    class Meta:

        db_table="Problem"
# Create your models here.
