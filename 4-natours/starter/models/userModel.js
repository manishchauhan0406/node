const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

//name , email, photo, password, password confirm

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    unique: true,
    maxlength: [40, 'A name must have less or equal then 40 characters'],
    minlength: [2, 'A name must have more or equal then 10 characters'],
  },
  email: {
    type: String,
    required: [true, 'User must have a password'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'A name must have more or equal then 10 characters'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    minlength: [8, 'A  name must have more or equal then 10 characters'],
    validate: {
      // This only works CREATE and SAVE
      validator: function (el) {
        return el === this.password; //
      },
      message: 'Passwords are not the same',
    },
  },
});

userSchema.pre('save', async function (next) {
  //Only runs if password was modified
  if (!this.isModified('password')) return next();

  //Hash password in 12
  this.password = await bcrypt.hash(this.password, 12);

  //Delete confirm password field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
