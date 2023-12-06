import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "The full name is required."]
  },
  email: {
    type: String,
    required: [true, "The email is required."]
  },
  password: {
    type: String,
    required: [true, "The password is required."]
  }
});

const User = mongoose.model('User', userSchema);

export default User;
