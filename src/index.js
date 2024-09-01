const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Opcional, para permitir solicitudes desde otros dominios
const bookRoutes = require('./routes/bookRoutes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json()); // Para manejar JSON en el cuerpo de las solicitudes
app.use(cors()); // Permitir solicitudes desde otros dominios (opcional)

// Usar las rutas de Book
app.use('/api/books', bookRoutes);

// Manejar errores 404
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
