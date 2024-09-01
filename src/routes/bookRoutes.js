const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Crear un nuevo libro
router.post('/', bookController.createBook);

// Obtener todos los libros
router.get('/', bookController.getAllBooks);

// Obtener un libro por ID
router.get('/:id', bookController.getBookById);

// Actualizar un libro por ID
router.put('/:id', bookController.updateBookById);

// Eliminar un libro por ID
router.delete('/:id', bookController.deleteBookById);

module.exports = router;
