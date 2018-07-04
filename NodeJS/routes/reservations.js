const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');


// Create a Reservation
router.post('/create', (req, res) => {
    var newReservation = new Reservation({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Contact: req.body.Contact,
      Email: req.body.Email
    });
  
    /*Reservation.(newReservation, (err, reservation) => {
      if(err){
        res.json({success: false, msg:'Failed to make reservation'});
      } else {
        res.json({success: true, msg:'Reservation done'});
      }
    }); */

    newReservation.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
    });
  });

  module.exports = router;
