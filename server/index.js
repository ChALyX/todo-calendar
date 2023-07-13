const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToMongoDB = require('./config/database');
const TodoModel = require('./models/Todo');

dotenv.config();
connectToMongoDB();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors())
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server now running on PORT ${PORT}...`)
})

app.get('/all-todos', async (req,res) => {
  const allTodos = await TodoModel.find();
  res.json(allTodos)
})

app.post('/create-todo', async (req, res) => {
  const {title,date} = req.body;
  const todoDoc = await TodoModel.create({
    title,
    date,
  })
  res.json(todoDoc)
})