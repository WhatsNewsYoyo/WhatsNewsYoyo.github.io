//Escribe un comentario explicando para qué sirve http
// Http sirve para permitir la comunicación entre un navegador y un servidor web, es decir, entre cliente-servidor.
import http from 'http';
import url from 'url';

//Escribe un comentario explicando para qué sirve fs
// fs (Módulo del Sistema de Archivos) sirve para administrar, almacenar y acceder a datos en el sistema operativo.
import fs from 'fs';


//Esta función deberá mostrar una página HTML 
//con la bienvenida a tu proyecto
function darBienvenida(req, res) {
    //Agrega lo mínimo necesario en bienvenida.html
    //Agrega un enlace en bienvenida a la página de escuelas 
    //Agrega un enlace en bienvenida a la página de donantes 

    fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
        //Escribe qué significa el 500 
        //El código 500 es un código de estado que indica el resultado de la solicitud al servidor, el 500 se trata de un indicador de un error interno en el servidor.
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        //El mensaje de error
        res.end('Oh no!!!!');
        return;
        }
        //Escribe qué significa el 200
        // El código 200 es un código de estado que indica el resultado de la solicitu al servidor, el 200 indica que la solicitud fue exitosa y que el servidor devolvio el contenido solicitado.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}


//Esta función deberá enviar un json con los datos de las escuelas.
function getEscuelas(req, res) {
    //Esto representa un objeto JSON de una escuela
    //Agrega otra escuela
    const escuelas = [
        {"nombre": "Escuela Benito Juárez",
        "direccion": "Av. Principal 123, Ciudad de México"},
    {  //Esuela nueva
        "nombre": "Escuela Cenobio Sauza Madrigal",
        "direccion": "Av. 24 de Enero 114, Guadalajara"
    
    }];  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  //Escribe qué hace la función stringify y por qué la tenemos que usar
  //El método stringify convierte objetos JavaScript en strings. La tenemos que usar porque al enviar informacion a un servidor web la información debe ser string.
  res.end(JSON.stringify(escuelas));
}


  //Agrega un enlace a bienvenida y a donantes en escuelas.html 
function mostrarEscuelas(req, res) {
    fs.readFile('escuelas.html', 'utf8', (error, data) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
  }

//Agrega un enlace a bienvenida y a escuelas en donantes.html
function mostrarDonantes(req, res) {
  //Construye una página básica donantes.html
  fs.readFile('donantes.html', 'utf8', (error, data) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Oh no!!!!');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
  });
}

//Esta función deberá enviar un json con los datos de las donantes
function getDonantes(req, res) {
    const donantes= [
    {
        "nombre": "ONU",
        "direccion":"Av. Mexico 231, Ciudad de México"
    },
    {
        "nombre": "Mexicanos, Primero Jalisco",
        "direccion":"Av. Nogaless 742, Guadalajara"
    }];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(donantes));
}

function manejarRuta404(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  //Cambia el mensaje por algo más divertido
  res.end('Chivas 1-0 America :) ');
}


//Funciones para el nombre del equipo 
function getEquipo(req, res) {
    const equipo = [
        {
            "nombre": "Sebastian Alejandro Soria Piñuela ",
            "cualidad": "Divertido"
        },
        {
            "nombre": "Victor Manuel Laureano Vega",
            "cualidad": "Responsable"
        },
        {
            "nombre": "Paulina Méndez López",
            "cualidad": "Creativa"
        },
        {
            "nombre": "Octavio Sebastián Hernández Galindo",
            "cualidad": "Inteligente"
        }
    ];  

res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(equipo));
}

function mostrarEquipo(req, res) {
    fs.readFile('equipo.html', 'utf8', (error, data) => {
        if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Oh no!!!!');
        return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}


//Funciones de opinion 
function getOpinion(req, res) {
    const opinion = {
        "opinion": "Considero que sí puede llegar a afectar mi vida profesional y personal. El monopolio que las grandes corporaciones han creado a causa de la información de las personas limita startups que pudiesen crear alternativas a las corporaciones establecidas, al menos en el país, por lo que disminuye el campo laboral al saber que no es posible competir con las grandes corporaciones de forma 'pareja y justa'. A mi vida personal la afecta como todo monopolio; si las grandes corporaciones saben que son las únicas opciones 'reales', pueden modificar el precio de los productos y servicios que ofrecen para obtener aún más ganancia.",
        "freebox": " es un proyecto que busca combinar software de código abierto y gratuito con herramientas para descentralizar el internet de las grandes corporaciones. Con Freebox se transforman las computadores en servidores personales que pueden ejecutar servicios en la nubes sin intermediarios, es decir, protegiendo la información del usuario."
    };  

res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(opinion));
}

function mostrarOpinion(req, res) {
    fs.readFile('opinion.html', 'utf8', (error, data) => {
        if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Oh no!!!!');
        return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

//incluye el enlace a la documentación de createServer
//https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener

const servidor = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/' || url === '/bienvenida') {
    darBienvenida(req, res);
  } else if (url === '/api/escuelas') {
    getEscuelas(req, res);
  } else if (url === '/api/donantes') {
    getDonantes(req, res);
  } 
  else if (url === '/api/equipo') {
    getEquipo(req, res);
  }
  else if (url === '/api/opinion') {
    getOpinion(req, res);
  } 
  
  else if (url === '/escuelas') {
    mostrarEscuelas(req, res);
  } 
  else if (url === '/donantes') {
    mostrarDonantes(req, res);
  } 

  else if (url === '/equipo') {
    mostrarEquipo(req, res);
  } 

  else if (url === '/opinion') {
    mostrarOpinion(req, res);
  }

      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a opinion.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?
      //Si fue posible el verla pues al insertarla en el html inserte una referencia a la URL de la imagen obtenida de internet, sin embargo, al intentar con un archivo descargado no me permitió mostrarla, quiero suponer porque hay un método especifico para leer imagenes guardadas en el dispositivo.

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south

      // Opinion: Considero que sí puede llegar a afectar mi vida profesional y personal. El monopolio que las grandes corporaciones han creado a causa de la información de las personas limita startups que pudiesen crear alternativas a las corporaciones establecidas, al menos en el país, por lo que disminuye el campo laboral al saber que no es posible competir con las grandes corporaciones de forma "pareja y justa". A mi vida personal la afecta como todo monopolio; si las grandes corporaciones saben que son las únicas opciones "reales", pueden modificar el precio de los productos y servicios que ofrecen para obtener aún más ganancia.


      //¿Qué es el freedombox?
      // Freedombox es un proyecto que busca combinar software de código abierto y gratuito con herramientas para descentralizar el internet de las grandes corporaciones. Con Freebox se transforman las computadores en servidores personales que pueden ejecutar servicios en la nubes sin intermediarios, es decir, protegiendo la información del usuario. 
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html