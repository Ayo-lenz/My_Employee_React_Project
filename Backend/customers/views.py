from customers.models import Customer
from customers.serializers import CustomerSerializer
from django.http import JsonResponse


def customers(request):
  #Invoke a serializer and return to client
  data = Customer.objects.all()
  serializer = CustomerSerializer(data, many=True)#we pass the data variable into the serializer
  return JsonResponse({'customers': serializer.data})