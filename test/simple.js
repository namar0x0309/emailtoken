'use strict';

var tape = require('tape')
var _test = require('tape-promise').default // <---- notice 'default'
var test = _test(tape) // decorate tape

var emailtoken = require( '../emailtoken' );


test('test size: 3', function (t) {
  // res - stub (async call)
  res = { end: function( arg ) {
      t.true( arg.length == 3*2 );
      t.end();
  } }
  
  var a = emailtoken.randomBytes(3, res );
})

test('test size: 0', function (t) {
  // res - stub (async call)
  res = { end: function( arg ) {
      t.true( arg.length == 0*2 );
      t.end();
  } }
  
  var a = emailtoken.randomBytes(0, res );
})

test('test size: 128', function (t) {
  // res - stub (async call)
  res = { end: function( arg ) {
      t.true( arg.length == 128*2 );
      t.end();
  } }
  
  var a = emailtoken.randomBytes(128, res );
})
  
test('test size: 10000', function (t) {
  // res - stub (async call)
  res = { end: function( arg ) {
      t.true( arg.length == 10000*2 );
      t.end();
  } }
  
  var a = emailtoken.randomBytes(10000, res );
})
