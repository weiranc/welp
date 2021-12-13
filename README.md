# welp
Welp! Can't decide :/


Frustrated that your S/O or group of friends can't decide on a place to eat?
Well, introducing #Welp for those moments where you just want to let random algorithm decide your meal.

To get started: clone down a version of this application using the top right clone/copy git clone button.

once into Terminal, make sure you have npm and git accessible.
run npm install in one terminal, and npm run build in another

On success: you should be able to see the following message: "successfully connected to Welp! on http://localhost:3001/"

Navigate to your browser and enter the URL http://localhost:3001/


For Review use purpose:

# express-review

### Setup
- ```npm install && npm run build```
- Then in another terminal
- ```npm start```

### Provision your local DB

- navigate to the directory that contains shchema.sql
- run ```mysql -u root < schema.sql```
- **Note** You may need to change root in the above command to match your local db permissions

## Step 1
x Create an express server that will listen on port 3001
x Direct all requests after the url '/api'
x Verify that traffic is being recieved and responded to correctly at each stage! (Postman?)

## Step 2
x Create a get route to return all choices
- Create a get route to return a specific restaurant
- Create a get route to submit a post request with just "restaurant" as body
- Test via Postman

## Step 3
- Create a delete route to remove a restaurant
- Create a delete route to remove ALL restaurants
- Test via Postman

## Step 4
- Serve your client to the port you're listening on using your express server

## Step 5
- Create a function on your client that will make a get request to your server to get all restaurants
- Create a function on your client that will make a post request to your server to add a restaurant
- Create a function on your client that will make a delete request to your server to delete a restaurant
- Create a function on your client that will make a delete request to your server to delete ALL restaurants

## EXTRA CREDIT
- Refactor your server to connect to your database instead of using the data from restaurants.json
- Add an update route
- Add an additional endpoint to your server
