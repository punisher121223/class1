// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional: برای استایل

function App() {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: '', exercises: [] });

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/books', newBook);
        fetchBooks();
        setNewBook({ title: '', author: '', exercises: [] });
    };

    return (
        <div>
            <h1>کتاب‌ها و تمرینات</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="عنوان کتاب"
                    value={newBook.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="نویسنده"
                    value={newBook.author}
                    onChange={handleInputChange}
                />
                <button type="submit">اضافه کردن کتاب</button>
            </form>
            
            <h2>کتاب‌ها</h2>
            <ul>
                {books.map((book) => (
                    <li key={book._id}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <ul>
                            {book.exercises.length > 0 ? book.exercises.map((exercise, index) => (
                                <li key={index}>{exercise}</li>
                            )) : <li>هیچ تمرینی وجود ندارد.</li>}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
