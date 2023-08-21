const mongoose = require('mongoose');

const Schema = mongoose.Schema
const RoomSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    cnic: {
      type: String,
      required: true
    }
  });
  
  const Room = mongoose.model('Room', RoomSchema);
  module.exports = Room;