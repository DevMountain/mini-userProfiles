# User Profiles
### Understanding Services

## Step 1 - Basic setup
- Create and setup an index.html page
- Insert the AngularJS CDN: //cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min.js
- Create an app.js file
- Create a controller.js file
- Create a service.js file

## Step 2 - Index.html
- Remember the basic index.html layout
``` html
<!DOCTYPE html>
<html>
<head>
  <title>User Profiles</title>
</head>
<body>

</body>
</html>
```
- Then link in our other files
  - Remember to load JavaScript files at the bottom of the body
- Include the app.js, controller.js, and service.js file, as well as the CDN
  - Remember that the CDN must go on top of your other files or your app will throw an error 
``` html
<!DOCTYPE html>
<html>
<head>
  <title>User Profiles</title>
</head>
<body>
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min.js">
<script src="app.js">
<script src="controller.js">
<script src="service.js">
</body>
</html>
```
- Next we will add some things that tell our index that we are working with AngularJS
  - ng-app loads our primary angular module. Let's name the module 'userProfiles'
  - ng-controller loads our controller for the view. Let's name the controller 'MainController'

``` html
<!DOCTYPE html>
<html ng-app="userProfiles">
<head>
  <title>User Profiles</title>
</head>
<body ng-controller="MainController">
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min.js">
<script src="app.js">
<script src="controller.js">
<script src="service.js">
</body>
</html>
```

## Step 3 - Our Basic JS Files
- Set up app.js
  - This is where we will create our module 
``` javascript
var app = angular.module('userProfiles', [])
```
- REMEMBER: when we put "[]" in our angular.modules declaration, it's telling Angular that we are creating a new module named "userProfiles". If we were to omit the "[]" it would be asking Angular to go and look for a module named "userProfiles"

- Set up controller.js
  - This is where we create our controller
- First, let's ask Angular to go and look for our module:
``` javascript
var app = angular.module('userProfiles');
```
- Next, we will create an empty controller:
``` javascript
var app = angular.module('userProfiles');

app.controller('MainController', function($scope) {

});
```

- Lastly, we will create our Service in a similar fashion:
``` javascript
var app = angular.module('userProfiles');

app.service('mainService', function() {

});
```

- We will also want to load some data into our service. Copy the following data into the service:
``` json
{
    "id": 1,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
},
{
    "id": 2,
    "first_name": "lucille",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
},
{
    "id": 3,
    "first_name": "oscar",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
}
```

So now our service should look like this:

``` javascript
var app = angular.module('userProfiles');
  var data = 
  [
    {
        "id": 1,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
        "id": 2,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
        "id": 3,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }
  ]



app.service('mainService', function() {

});
```

