//Servidor con express, modificación de la actividad 4.5 pero ahora con express.
//José Yael Varela García A01645324

import express from 'express';
import fs from 'fs';

const app = express();
const puerto = 1984;

app.get('/', (req, res) => {
    fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.status(200).send(data);
    });
});


app.get('/api/escuelas', (req, res) => {
    const escuelas = [
        {"nombre": "Escuela Benito Juárez", "direccion": "Av. Principal 123, Ciudad de México"},
        {"nombre": "Escuela Cenobio Sauza Madrigal", "direccion": "Av. 24 de Enero 114, Guadalajara"}
    ];
    res.status(200).json(escuelas);
});

app.get('/api/donantes', (req, res) => {
    const donantes = [
        {"nombre": "ONU", "direccion": "Av. Mexico 231, Ciudad de México"},
        {"nombre": "Mexicanos, Primero Jalisco", "direccion": "Av. Nogaless 742, Guadalajara"}
    ];
    res.status(200).json(donantes);
});

app.get('/api/equipo', (req, res) => {
    const equipo = [
        {"nombre": "Sebastian Alejandro Soria Piñuela", "cualidad": "Divertido"},
        {"nombre": "Victor Manuel Laureano Vega", "cualidad": "Responsable"},
        {"nombre": "Paulina Méndez López", "cualidad": "Creativa"},
        {"nombre": "Octavio Sebastián Hernández Galindo", "cualidad": "Inteligente"}
    ];
    res.status(200).json(equipo);
});

app.get('/api/opinion', (req, res) => {
    const opinion = {
        "opinion": "Considero que sí puede llegar a afectar mi vida profesional y personal. El monopolio que las grandes corporaciones han creado a causa de la información de las personas limita startups que pudiesen crear alternativas a las corporaciones establecidas, al menos en el país, por lo que disminuye el campo laboral al saber que no es posible competir con las grandes corporaciones de forma 'pareja y justa'. A mi vida personal la afecta como todo monopolio; si las grandes corporaciones saben que son las únicas opciones 'reales', pueden modificar el precio de los productos y servicios que ofrecen para obtener aún más ganancia.",
        "freebox": " es un proyecto que busca combinar software de código abierto y gratuito con herramientas para descentralizar el internet de las grandes corporaciones. Con Freebox se transforman las computadores en servidores personales que pueden ejecutar servicios en la nubes sin intermediarios, es decir, protegiendo la información del usuario."
    };
    res.status(200).json(opinion);
});

//Adicional para que pueda volver de otros html a la bienvenida
app.get('/bienvenida', (req, res) => {
    fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.status(200).send(data);
    });
});

app.get('/escuelas', (req, res) => {
    fs.readFile('escuelas.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.status(200).send(data);
    });
});

app.get('/donantes', (req, res) => {
    fs.readFile('donantes.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.status(200).send(data);
    });
});

app.get('/equipo', (req, res) => {
    fs.readFile('equipo.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.status(200).send(data);
    });
});

app.get('/opinion', (req, res) => {
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send('Oh no!!!!');
            return;
        }
        res.status(200).send(data);
    });
});


//Para ejercicio #11 POSTMAN 
const escuelas = [
    { nombre: "Escuela Benito Juárez", direccion: "Av. Principal 123, Ciudad de México" },
    { nombre: "Escuela Cenobio Sauza Madrigal", direccion: "Av. 24 de Enero 114, Guadalajara" }
  ];

  app.delete('/api/escuelas/:nombre', (req, res) => {
    const nombreEscuela = req.params.nombre;
    const index = escuelas.findIndex(
      (escuela) => escuela.nombre === nombreEscuela
    );
  
    if (index === -1) {
      return res.status(404).json({ mensaje: `ERROR: La escuela "${nombreEscuela}" no fue encontrada.` });
    }
  
    escuelas.splice(index, 1);
      return res.status(200).json({ mensaje: `La escuela "${nombreEscuela}" ha sido eliminada :)` });
  });
  


app.use((req, res) => {
    res.status(404).send('Chivas 1-0 America :)');
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});


