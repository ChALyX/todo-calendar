const mongoose = require('mongoose')
const {Schema, model} = mongoose

// Creates schema for MongoDB collection
const TodoSchema = new Schema({
  title: String,
  date: Date,
});

const TodoModel = model('Todo', TodoSchema);

module.exports = TodoModel;