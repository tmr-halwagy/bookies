from django.urls import path

import google.views
from .views import BookListView, ReviewListCreateView

urlpatterns = [
    path('books/', BookListView.as_view(), name='book-list'),
    path('api/', ReviewListCreateView.as_view(), name='review-list-create'),
]
