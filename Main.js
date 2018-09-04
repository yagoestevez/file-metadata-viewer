'use strict';

require( 'dotenv' ).config( );
const express      = require( 'express' );
const cors         = require( 'cors' );
const helmet       = require( 'helmet' );
const pug          = require( 'pug' );
const routes       = require( './App/routes.js' );

const app  = express( );
const PORT = process.env.PORT || 3000;

app.set( 'view engine', 'pug' );
app.set( 'views', './App/Views' );
app.use( '/assets', express.static( 'App/Views/Assets/' ) );
app.use( cors( ) );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json( ) );
app.use( helmet( {
  noCache             : true,
  hidePoweredBy       : { setTo  : 'PHP 4.2.0'    },
  xssFilter           : true,
  frameguard          : { action : 'sameorigin'   },
  dnsPrefetchControl  : { allow  : false          },
  referrerPolicy      : { policy : 'same-origin'  }
} ) );

app.use( routes );

app.listen( PORT, ( ) => console.log( ` -> Server open :: http://localhost:${PORT}/ <- ` ) );