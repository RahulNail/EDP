from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Article, Pdf, Video

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id','title','author','email']
        # fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['name','url']

class PdfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pdf
        fields = ['name','url']