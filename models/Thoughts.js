const { Schema, model } = require('mongoose');

// reaction schema to use inside thoughts schema
const reactionSchema = new Schema({

  body: {

  },
  username: {

  },
  reactions: {

  }

}, {
  timestanmps: true,
})