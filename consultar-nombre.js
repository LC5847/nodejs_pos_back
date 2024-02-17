// Importar los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar bodyParser para procesar JSON
app.use(bodyParser.json());

// Endpoint para la consulta de nombre
app.post('/consultar-nombre', (req, res) => {
    // Obtener el nombre enviado en la solicitud POST
    const nombre = req.body.nombre;

    // Aquí puedes realizar cualquier lógica de consulta o procesamiento con el nombre recibido
    // Por ahora, simplemente responderemos con un mensaje que contiene el nombre consultado
    res.json({ mensaje: `Consulta recibida para el nombre: ${nombre}` });
});

// Puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
