# User Profiles
### Understanding Services

## Step 1 - Basic setup
- Create and setup an index.html page
- Insert the AngularJS CDN: //cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min.js
- Create an app.js file
- Create a controller.js file
- Create a service.js file

## Step 2 - Index.html
- Remember the basic index.html layout:
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
- Then link in our other files:
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
