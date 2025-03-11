// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// اتصال به پایگاه داده MongoDB
mongoose.connect('mongodb://localhost:27017/quizApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// تعریف مدل کتاب
const Book = mongoose.model('Book', {
    title: String,
    author: String,
    exercises: [String],
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API برای دریافت کتاب‌ها
app.get('/api/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// API برای اضافه کردن کتاب
app.post('/api/books', async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
});

// راه‌اندازی سرور
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
