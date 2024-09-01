const Book = require('../models/book');

// Crear un nuevo libro
exports.createBook = async (req, res) => {
    try {
        const { title, author, publication_date } = req.body;
        const newBook = await Book.create({ title, author, publication_date });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los libros
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un libro por ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un libro por ID
exports.updateBookById = async (req, res) => {
    try {
        const { title, author, publication_date } = req.body;
        const [updated] = await Book.update({ title, author, publication_date }, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedBook = await Book.findByPk(req.params.id);
            res.status(200).json(updatedBook);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un libro por ID
exports.deleteBookById = async (req, res) => {
    try {
        const deleted = await Book.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
