const express = require('express');
const { v4 }  = require('uuid');
const uuidv4 = v4;

  
const router = express.Router();

let users = []

router.get('/', (req, res)=> {
  console.log(users);
  res.send(users);
})

router.post('/', (req, res) => {
  console.log("POST request reached");

  const user = req.body;
  
  const userId = uuidv4();
  const userWithId = { ...user, id: userId}

  users.push(userWithId);
  res.send(`user with the name ${user.firstName} added to the database.`);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
  console.log(foundUser); 
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;

  users = users.filter((user) => user.id !== id)

  res.send(`Updated data base `)
})

router.patch('/:id', (req, res) => {

  const{id} = req.params;

  const{firstName, lastName, age} = req.body;

  const user = users.find((user) => user.id === id);

  if(firstName) 
    user.firstName = firstName;
  if(lastName) 
    user.lastName = lastName;
  if(age)
    user.age = age;

  res.send("users data is updated");
})

module.exports = router;