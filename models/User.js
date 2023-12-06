import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "The full name is required."]
  },
  email: {
    type: String,
    required: [true, "The email is required."],
    unique: true
  },
  password: {
    type: String,
    required: [true, "The password is required."]
  },
  role: {
    type: String,
    required: true,
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  },
});

const User = mongoose.model('User', userSchema);

export default User;
