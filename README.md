# Investment Orders

>I apologize for not delivering Swagger and Unit Tests, it was in my plans, but I couldn't do it in time, due to other activities in the same period.

In this application, you will be able to create your user, save your customers, products and the transactions made for each of your products for each registered customer.

As I couldn't do the documentation in time with Swagger, as I would have liked, I saved the Postman collection used to test this project in the **docs** folder.

>Normally I create an .env.example or .env.sample file and leave the environment variables open for those who need to test locally, but to make life easier for those who are recruiting, I preferred to leave the environment variables already set.

## Preparing to run the application

To run this application, you need to have **Docker**, **Node.js**, and **Yarn** installed on your computer.

To upload the application and the database, just use the **docker-compose up --build** script in the root of the project and let _Dockerfile_ and _docker-compose.yml_ do all the work.

These files will upload the application on port **3800** and the MongoDB database on port **21117** on localhost.

### Details about some methods

To start using the application, you first need to create a user. For this, use the call **http://localhost:3800/users** passing the following parameters:

```
{
    "name": string,
    "email": string(With string@string.string format),
    "password": string,
    "cpf": string(With 11 characters and only numbers),
    "birthday": string(On format YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS)
}
```
In this call, you will have as return the new user generated and your first access token, which should be used as an authentication Bearer Token.

>Access tokens last for 10 minutes, after that, a new session must be started at **http://localhost:3800/session**, passing your e-mail and password through the body of the request

The orders creation call **http://localhost:3800/orders** will need the _customerId_ and _productId_ fields to be passed through headers. Both fields, being IDs, only accept numerical values. In addition, the body of the request needs to be:

```
{
    "productQuantity": integer
}
```

All other data relating to the order will be assigned automatically by the system. As the _productQuantity_ field needs to check how many purchases were made of that specific product, it only accepts integers

>Some **GET** method calls and all **PATCH** and **DELETE**_ method calls (This one has only one in the entire application) ask that the respective id to be searched be passed by request params (Check the Postman documentation).
