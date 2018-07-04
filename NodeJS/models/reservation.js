const mongoose = require('mongoose');

// Reservation Schema
const ReservationSchema = mongoose.Schema({
    FirstName: {
      type: String
    },
    LastName: {
      type: String,
      //required: true
    },
    Contact: {
        type: String,
        //required: true
      },
    Email: {
      type: String,
      //required: true
    }
    
  });

  const Reservation = module.exports = mongoose.model('Reservation', ReservationSchema);