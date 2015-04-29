# Installation Instructions

Navigate on terminal to the project's root folder.

### Install node and npm
Download and install from http://nodejs.org/

### Install bower
On terminal run ```sudo npm install -g bower```  
http://bower.io/

### Install grunt
On terminal run ```sudo npm install -g grunt-cli```  
http://gruntjs.com/

### Update everything
On terminal run ```sudo npm install```  
On terminal run ```bower install```  


# Dev Instructions

Navigate on terminal to the project's root folder.

On terminal run ```grunt watch```  

Every time you pull from the repo run ```npm install``` and ```bower install``` to make sure you have all dependencies up to date.

# Build Instructions

Navigate on terminal to the project's root folder.

On terminal run ```grunt build```  
This will concatenate and minify all assets and put the build inside the ```/public``` folder. This folder can the be copied to the public folder of the server.

