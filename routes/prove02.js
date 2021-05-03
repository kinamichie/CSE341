const path = require('path');

const fs = require('fs');

const express = require('express');

//const books = require('books.json');

const router = express.Router();


let books = [{title: 'Harry Potter', summary: 'A great books about growing up as witches'}, 
{title: 'Little Women', summary: 'A wonderful book about growing up with sisters.'}];
let errorMessage = '';

router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        pageTitle: 'Prove02',  
        books: books,
        errorMessage: errorMessage
    });
    errorMessage = '';
});

router.post('/add-book', (req, res, next)  => {

    books.push({ title: req.body.title, summary: req.body.summary });
  
    res.redirect('/', 302);
});





module.exports = router;