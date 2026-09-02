/*
  ============================================================
  DATOS DEL PORTAFOLIO
  ============================================================
  Este es el ÚNICO archivo que necesitás tocar para agregar
  o quitar proyectos y certificados. No hace falta modificar
  el HTML ni el CSS.

  Para agregar un PROYECTO nuevo, copiá un bloque { ... } y
  pegalo dentro del array PROYECTOS (recordá la coma entre
  bloques).

  Para agregar un CERTIFICADO nuevo, hacé lo mismo dentro del
  array CERTIFICADOS.

  Guardá el archivo y subilo junto con el resto de la web.
  ============================================================
*/

const PROYECTOS = [
  {
    titulo: "Elijuegos",
    descripcion: "Blog de noticias, guías y curiosidades del mundo de los videojuegos.",
    imagen: "assets/img/elijuegos-screen-1.png",
    link: "elijuegos.html",
    badgeTipo: "FullStack",
    tecnologias: ["PHP", "HTML", "CSS"]
  },
  {
    titulo: "Mis Tableros",
    descripcion: "Herramienta para crear tableros personalizados y realizar sorteos de forma fácil y rápida.",
    imagen: "assets/img/mis_tableros.png",
    link: "misTableros.html",
    badgeTipo: "FullStack",
    tecnologias: ["Java Script", "HTML", "CSS"]
  }
  

  // Ejemplo de cómo agregar otro proyecto (descomentá y completá):
  // ,
  // {
  //   titulo: "Nombre del proyecto",
  //   descripcion: "Breve descripción del proyecto.",
  //   imagen: "assets/img/mi-proyecto.png",
  //   link: "mi-proyecto.html",
  //   badgeTipo: "Frontend",
  //   tecnologias: ["React", "CSS"]
  // }
];

const CERTIFICADOS = [
  {
    imagen: "assets/img/front.png",
    pdf: "assets/pdf/front-newton.pdf",
    alt: "Certificado Frontend"
  },
  {
    imagen: "assets/img/back.png",
    pdf: "assets/pdf/back-newton.pdf",
    alt: "Certificado Backend"
  }

  // Ejemplo de cómo agregar otro certificado (descomentá y completá):
  // ,
  // {
  //   imagen: "assets/img/mi-certificado.png",
  //   pdf: "assets/pdf/mi-certificado.pdf",
  //   alt: "Nombre del certificado"
  // }
];
