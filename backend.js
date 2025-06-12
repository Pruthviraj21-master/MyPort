// backend for form
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const port = 4000;

const app = express();
app.use(express.static(__dirname))
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/portfolioForm');
const db = mongoose.connection
db.once('open', () => {
  console.log("mongodb connection is successful");
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  message: String
})

const Users = mongoose.model("data", userSchema)


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/post', async (req, res) => {
  const { name, email, number, message } = req.body
  const user = new Users({
    name,
    email,
    number,
    message
  })
  await user.save();
  console.log(user);
  res.send("form submission successful")
})

app.listen(port, () => {
  console.log(`server started ${port}`);
})
