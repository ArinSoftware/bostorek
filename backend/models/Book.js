import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    description: {
      type: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: null,
    },
    pageNumber: {
      type: Number,
      min: 1,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    ratings: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        value: {
          type: Number,
          required: true,
          min: 0,
          max: 10,
        },
      },
    ],
  },
  { timestamps: true }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
