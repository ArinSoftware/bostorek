import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [4, 'Password must be at least 4 characters long'],
      maxlength: [10, 'Password cannot be more than 8 characters long'],
    },
    roles: {
      type: [String],
      enum: ['admin', 'user'],
      default: ['user'],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
