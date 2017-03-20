# Description:
--------------
Simple token provider. You can specify a size

# Usage:
------
## Install dependencies:
    npm install
    
## Launch Server:
    npm start

## Client Access (Browser):
    http://127.0.0.1:3000/token
    http://127.0.0.1:3000/token?size=3
    http://127.0.0.1:3000/token?size=64
    http://127.0.0.1:3000/token?size=128

## Test:
    npm test

# Uses: 
---------
http, url, connect - for server and routing
crypto - secure random hashing

# Sources
------------
https://github.com/senchalabs/connect