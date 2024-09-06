//modulos para importar agregar en el package.json "type": "module"
import express from 'express';

const app = express();
const PORT = 3000;

//Midlewares

//EndPoints
app.get('/', (req, res) => {
    res.send('Server OK!')
  })
 
//Confiración del servidor express
app.listen(PORT, () => {
    console.log(`*** Servidor escuchando en puerto: ${PORT} ***`)
  });
  