from django.db import models
from django.contrib.auth.models import User


class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title


class Review(models.Model):
    book = models.ForeignKey(Book, related_name='api', on_delete=models.CASCADE)  
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()

    def __str__(self):
        return f'Review by {self.user.username} for {self.book.title}'
