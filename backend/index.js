const mongoose = require('./db');
const User = require('./user');

const newUser = new User({
  email: 'ayush.yo@gmail.com',
  age: 30
});

newUser.save()
  .then((user) => console.log('User saved:', user))
  .catch((err) => console.log('Error saving user:', err))
  .finally(() => mongoose.connection.close());