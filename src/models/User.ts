import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  phone: String,
  account: {
    facebook_id: String,
    github_id: String,
    password: String,
    twitter_id: String,
  },
  contacts: [{
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
  }],
});

export default model('User', userSchema);
