from django.db import models

# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Video(models.Model):
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=1000)

    def __str__(self):
        return self.name


class Pdf(models.Model):
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=1000)

    def __str__(self):
        return self.name 



