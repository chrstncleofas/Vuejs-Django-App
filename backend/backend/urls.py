from django.urls import path
from django.contrib import admin
from django.conf.urls import url, include

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^',include('app.urls'))
]
