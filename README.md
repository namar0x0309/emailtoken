### Status
[![Build Status](https://travis-ci.org/namar0x0309/emailtoken.svg?branch=master)](https://travis-ci.org/namar0x0309/emailtoken)

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

# Depends On: 
---------
http, url, [connect](https://github.com/senchalabs/connect) - for server and routing

crypto - secure random hashing

# TODO:
------
- [ ] Test Out dockerfile

