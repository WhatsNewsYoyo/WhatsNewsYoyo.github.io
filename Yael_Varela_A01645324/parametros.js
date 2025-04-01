//José Yael Varela García A01645324
import express from 'express';
const app = express();
const puerto = 3000;
app.use(express.json());

let escuelas = [
  { id: 1, nombre: 'Escuela Benito Juárez', ciudad: 'Tonala' },
  { id: 2, nombre: 'Escuela Cenobio Sauza Madrigal', ciudad: 'Guadalajara' },
  { id: 3, nombre: 'Escuela Primaria Emiliano Zapata', ciudad: 'Guadalajara' },
  { id: 4, nombre: 'Escuela Secundaria Revolución', ciudad: 'Tonala' },
  { id: 5, nombre: 'Escuela ITESM', ciudad: 'Zapopan' },
  { id: 6, nombre: 'Escuela ITESO', ciudad: 'Guadalajara' },
  { id: 7, nombre: 'Escuela UPM', ciudad: 'Zapopan' },
];

app.get('/api/escuelas/:ciudad', (req, res) => {
  const ZonaBuscada = req.params.ciudad;
  const escuelasFiltradas = escuelas.filter(
    (escuela) => escuela.ciudad.toLowerCase() === ZonaBuscada.toLowerCase()
  );

  if (escuelasFiltradas.length === 0) {
    return res.status(404).json({
      mensaje: `No se encontraron escuelas en la zona: ${ZonaBuscada}`
    });
  }

  res.status(200).json({
    mensaje: `Escuelas encontradas en la zona: ${ZonaBuscada}`,
    data: escuelasFiltradas
  });
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});
