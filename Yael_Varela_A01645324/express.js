//José Yael Varela García A01645324

import express from 'express';

const app = express();
const port = 3000;

//Ejercicio 5
/* 
app.listen(1984, () => {
   console.log('Up and up');
});
*/


//Ejercicio 6
app.get('/bienvenida', (req, res) => {
   res.send('Esto no es una página html');
});

app.use(express.static('public')); 
app.get('/otraBienvenida', (req, res) => {
  res.sendFile('bienvenida.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Servidor listo en http://localhost:${port}`);
});