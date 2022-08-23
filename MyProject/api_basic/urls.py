from django.urls import path
from .views import article_list,article_detail, pdf_list, video_list

urlpatterns = [
    path('article/', article_list),
    path('detail/<int:pk>/', article_detail),
    path('video',video_list),
    path('pdf',pdf_list)
]
