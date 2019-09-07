const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  usuario: {
    type: String,
    require: true,
    unique: true,
    index: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    require: true,
    minlenght: 8
  }
});

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  delete user.__v;
  return user;
};

userSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.hash(user.password, 10)
      .then(hash => {
        user.password = hash;
        return next();
      })
      .catch(err => next(err))
  } else next();
});

module.exports = mongoose.model('user', userSchema);