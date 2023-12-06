import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import categoryRoutes from './routes/CategoryRoutes.js';
import userRoutes from './routes/UserRoutes.js';
import questionRoutes from './routes/QuestionRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/categories', categoryRoutes);
app.use('/users', userRoutes);
app.use('/questions', questionRoutes);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);


app.listen(port, () => console.log(`The server is listening on Port ${port}`));

