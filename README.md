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

