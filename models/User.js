const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'This email is already taken'],
    unique: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  eventsCreated: [{ type: Schema.ObjectId, ref: 'Event' }],
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    select: false,
  },
  image: {
    imgName: String,
    imgPath: String,
    publicId: String,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const User = model('User', userSchema);

module.exports = User;
