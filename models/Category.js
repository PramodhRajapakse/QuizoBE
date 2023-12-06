import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  apiId: {
    type: Number,
    required: [true, "The id is required."]
  },
  categoryName: {
    type: String,
    required: [true, "The category name is required."]
  },
  categoryDescription: {
    type: String,
    required: [true, "The category description is required."]
  },
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
