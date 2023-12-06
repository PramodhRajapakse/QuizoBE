import express from 'express';
import Question from '../models/Question.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get questions by category
router.get('/category/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    // Query questions by category ID
    const questions = await Question.find({ category: categoryId });

    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new question
router.post('/', async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific question by ID
router.get('/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an question by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an question by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(deletedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
