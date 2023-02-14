# jykSports_BackEnd

This is the back end for the project Jyk Sports. Here you will find how API works.

## First step 

You need to create an user and the Api created to generate the action is https://jyksports-backend.onrender.com/api/users and the method is POST :

```
{
    "firstName": "xxxx",
    "lastName":"xxxx",
    "password":"xxxx",
    "role":"USER",
    "email":"xxxxx",
    "userName":"xxxx",
    "profilePicture":"https://source.unsplash.com/random/100x100"
}
```

To login the API is https://jyksports-backend.onrender.com/auth/local/login

```
{
   "email":"xxxxx",
   "password":"xxxx"
  
}
```

To create products https://jyksports-backend.onrender.com/api/products with the method POST :
:


```
{
    "reference": "xxxx",
    "brand":"xxxx",
    "color":"xxxx",
    "size":"xxx",
    "amount":"xxxxx",
    "image":"https://source.unsplash.com/random/100x100"
    
}
```
To have a search you will need the following API https://jyksports-backend.onrender.com/api/products/filter?brand=Adidas&size=36&color=Red
there you can write the products that you want to see 
 
 <img width="566" alt="Captura de pantalla 2023-02-14 105340" src="https://user-images.githubusercontent.com/79812118/218789353-5068767f-3478-49ae-a0de-fcde09a6594a.png">

 
 
 

