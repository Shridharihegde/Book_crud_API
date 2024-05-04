const express = require('express')
const router = express.Router()
const Book = require('../models/book')

router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    }
    catch (err) {
        res.send('Error')
    }

})

router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.json(book)
    }
    catch (err) {
        res.send('Error')
    }

})

router.post('/', async (req, res) => {
    const book = new Book({
        name: req.body.name,
        category: req.body.category,
        available: req.body.available
    })

    try {
        const b1 = await book.save()
        res.json({
            success: true,
            b1
        });
    } catch (err) {
        res.send('Error')
    }
})



router.put('/:id', async (req, res) => { // Corrected route parameter
    try {
        let book = await Book.findById(req.params.id);
        book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            useFindAndModify: false,
            runValidators: true
        });
        res.json({
            success: true,
            book
        });
    } catch (err) {
        res.send('Error');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.json({ success: false, message: 'Book not found!' });
        }

        await Book.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Book deleted successfully' });
    } catch (err) {
        res.json({ success: false, message: 'Error' });
    }
});


module.exports = router