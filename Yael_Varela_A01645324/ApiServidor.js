//Jose Yael Varela García
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.get('/cat', async (req, res) => {
  try {
    const response = await fetch('https://cataas.com/cat');
    res.set('Content-Type', response.headers.get('content-type'));
    response.body.pipe(res);
  } 
  
  catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('No encontramos al gato :( ');
  }
});

app.listen(port, () => {
  console.log(`Servidor listo en http://localhost:${port}`);
});