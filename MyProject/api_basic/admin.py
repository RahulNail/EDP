from django.contrib import admin
from .models import Article, Pdf,Video

# Register your models here.

admin.site.register(Article)
admin.site.register(Video)
admin.site.register(Pdf)