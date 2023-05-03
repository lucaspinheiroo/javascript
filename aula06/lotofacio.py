import random

contador = 0 
while contador <=9 :
    numeros = random.sample(range(1,25), 15)

    contador +=1
    print(numeros)