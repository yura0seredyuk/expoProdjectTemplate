const mongoose = require('mongoose');
const User = mongoose.model('User');

const createUser = async (req, res) => {
  const {name, email, password} = req.body;
  const newUser = new User({
    name,
    email,
    password,
  });

  await newUser
    .save()
    .then(data => {
      res.send({data});
    })
    .catch(error => {
      res.send({error});
    });
};

module.exports = createUser;
