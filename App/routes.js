'use strict';

const router = require( 'express' ).Router( );
const multer = require( 'multer' );

const upload = multer( { dest: 'App/Views/Uploads/' } )

router.get( '/', ( req, res ) => res.render( 'index' ) );

router.post( '/api/fileanalyse', upload.single( 'upfile' ), ( req, res ) => {
  res.json( {
   'name' : req.file.originalname,
   'type' : req.file.mimetype,
   'size' : req.file.size
  } );
} );

router.all( '*' , ( req,res ) => res.status( 404 ).send( 'Sorry. The page you\'re looking for was not found.' ) );

module.exports = router;