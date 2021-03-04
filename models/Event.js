const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  rewardDescription: {
    type: String,
    trim: true,
  },
  rewardTag: [String],
  date: {
    type: Date,
    required: true,
  },
  deadline: Date,
  location: {
    street: String,
    city: String,
    zip: String,
  },
  category: [String],
  industrie: [String],
  image: {
    imgName: String,
    imgPath: String,
    publicId: String,
  },
  socialMeda: {
    twitter: String,
    instagram: String,
    facebook: String,
    website: String,
  },
  featured: Boolean,
  creator: { type: Schema.ObjectId, ref: 'User' },
  participants: [{ type: Schema.ObjectId, ref: 'User' }],
});

const Event = model('Event', eventSchema);

module.exports = Event;
