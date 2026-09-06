/*
  ============================================================
  DATOS DEL PORTAFOLIO
  ============================================================
  Este es el ÚNICO archivo que necesitás tocar para agregar,
  editar o quitar proyectos y certificados. No hace falta
  modificar ningún HTML ni CSS.

  ------------------------------------------------------------
  CÓMO AGREGAR UN PROYECTO NUEVO
  ------------------------------------------------------------
  1. Copiá un bloque { ... } completo dentro del array PROYECTOS
     (recordá poner una coma entre un bloque y otro).
  2. Completá cada campo:

     id            -> identificador único, sin espacios ni tildes
                       (ej: "mi-proyecto"). Se usa en la URL de
                       la ficha del proyecto.
     titulo        -> nombre del proyecto.
     descripcion   -> resumen corto (se ve en la tarjeta y en la
                       parte de arriba de la ficha).
     imagen        -> imagen que se ve en la tarjeta chica.
     badgeTipo     -> etiqueta principal ("FullStack", "Frontend",
                       "Backend", etc).
     tecnologias   -> lista de tecnologías usadas (se muestran
                       como etiquetas).
     github        -> link al repositorio. Dejalo como "" si no
                       querés mostrar el botón.
     web           -> link al sitio publicado. Dejalo como "" si
                       no tiene.
     galeria       -> lista de imágenes para el slider de la
                       ficha (podés poner 1, 2, 3 o las que
                       quieras, no hace falta que sean 3 justo).
     contexto      -> por qué surgió el proyecto.
     rol           -> qué hiciste vos en el proyecto.
     impacto       -> qué resultado/beneficio tuvo.

  3. Guardá el archivo y subilo. La tarjeta va a aparecer sola
     en la sección "Proyectos", y al hacer click te lleva a
     proyecto.html?id=TU_ID con toda la info ya armada, sin que
     tengas que crear ningún archivo HTML nuevo.
  ------------------------------------------------------------
*/

const PROYECTOS = [
  {
    id: "elijuegos",
    titulo: "Elijuegos",
    descripcion: "ELIJUEGOS es una plataforma web dinámica orientada a la publicación y lectura de noticias o artículos (posts) sobre videojuegos, con un enfoque visual y un sistema de gestión de contenido moderado.",
    imagen: "assets/img/elijuegos-screen-1.png",
    badgeTipo: "FullStack",
    tecnologias: ["PHP", "HTML", "CSS"],
    github: "https://github.com/BarujitaWD/elijuegos.git",
    web: "",
    galeria: [
      "assets/img/slider1.png",
      "assets/img/slider2.png",
      "assets/img/slider3.png"
    ],
    contexto: "El proyecto surge de la necesidad de crear un ecosistema digital colaborativo donde los entusiastas de los videojuegos puedan centralizar y compartir noticias, guías y curiosidades. El objetivo principal fue desarrollar una plataforma que permitiera a los usuarios generar contenido enriquecido de forma autónoma, integrando un sistema de gestión de perfiles para garantizar la autoría y la organización de la información.",
    rol: "Como desarrollador Fullstack, diseñé y construí una plataforma dinámica de noticias de videojuegos, integrando el backend con el frontend para permitir una gestión de contenidos fluida y segura.",
    impacto: "Se creó una plataforma robusta que automatiza el ciclo de vida de las noticias, logrando un entorno seguro y escalable. La arquitectura modular permite una fácil expansión de funciones, mientras que el sistema de moderación garantiza la calidad del contenido expuesto a la comunidad."
  },
  {
    id: "mis-tableros",
    titulo: "Mis Tableros",
    descripcion: "Herramienta para crear tableros personalizados y realizar sorteos de forma fácil y rápida, reemplazando el uso de tableros en papel.",
    imagen: "assets/img/mis_tableros/mis_tableros.png",
    badgeTipo: "FullStack",
    tecnologias: ["Java Script", "HTML", "CSS", "Claude"],
    github: "https://github.com/BarujitaWD/Tablero-de-Sorteo",
    web: "https://tablero-de-sorteo.vercel.app",
    galeria: [
      "assets/img/mis_tableros/mis_tableros.png",
      "assets/img/mis_tableros/mis_tableros2.png",
      "assets/img/mis_tableros/mis_tableros3.png"
    ],
    contexto: "El proyecto surge de la necesidad de digitalizar y simplificar la creación y organización de tableros para rifas y sorteos, reemplazando el uso tradicional de hojas de papel. Mis Tableros permite crear tableros digitales de manera rápida, visual y organizada. Además, el proyecto fue desarrollado como una experiencia para evaluar el uso de Claude como herramienta de programación colaborativa, explorando cómo una inteligencia artificial puede participar en el proceso de desarrollo junto con un programador. La IA se utilizó como apoyo para generar código, proponer soluciones y acelerar el desarrollo, mientras que cada implementación fue revisada y auditada manualmente.",
    rol: "Como desarrollador, dirigí y supervisé todo el proceso de desarrollo de la aplicación. Utilicé Claude como asistente de programación, trabajando de manera colaborativa para implementar las diferentes funcionalidades del proyecto. Mi responsabilidad no se limitó a aceptar el código generado: analicé, probé y audité las soluciones propuestas, detectando errores, realizando correcciones y aplicando las mejoras necesarias para garantizar el correcto funcionamiento de la herramienta. También tomé las decisiones relacionadas con la estructura, funcionalidad y experiencia de usuario.",
    impacto: "El proyecto permitió comprobar de manera práctica el potencial de la programación asistida por inteligencia artificial, demostrando que una IA puede utilizarse como herramienta de apoyo durante diferentes etapas del desarrollo de software. A nivel funcional, Mis Tableros facilita la organización de rifas y sorteos al reemplazar los tableros físicos por una alternativa digital, visual y fácil de administrar. A nivel técnico, el proyecto sirvió como una experiencia práctica para analizar las ventajas y limitaciones de trabajar junto a una IA, manteniendo al desarrollador como responsable de la revisión, validación y calidad final del código."
  },
  {
    id: "rastro-hackaton",
    titulo: "Rastro",
    descripcion: "Plataforma educativa para centralizar la información de los estudiantes y facilitar su seguimiento, mejorando la comunicación entre docentes, directivos y familias.",
    imagen: "assets/img/mis_tableros/mis_tableros.png",
    badgeTipo: "FullStack",
    tecnologias: ["Python","Django","HTML", "CSS", "Claude"],
    github: "https://github.com/AlejoMaxBarugel/rastro",
    web: "https://rastro-app-tau.vercel.app/",
    galeria: [
      "assets/img/mis_tableros/mis_tableros.png",
      "assets/img/mis_tableros/mis_tableros2.png",
      "assets/img/mis_tableros/mis_tableros3.png"
    ],
    descripcion: "Plataforma educativa para centralizar la información de los estudiantes y facilitar su seguimiento, mejorando la comunicación entre docentes, directivos y familias. 6.º puesto — Hackatón EduTech 2026",
    
    contexto: "El proyecto surge de la necesidad de centralizar y actualizar la información de los estudiantes, actualmente dispersa entre legajos, cuadernos y registros de la institución. RASTRO propone una plataforma digital que reúne información administrativa, académica y la mirada del docente, facilitando el acceso a datos relevantes para docentes, directivos y familias.",
    
    rol: "Como líder del equipo técnico y líder general del proyecto, dirigí y coordiné el proceso de desarrollo, organizando las tareas y tomando decisiones relacionadas con la solución y su implementación. Además, fui el responsable de presentar y defender el proyecto frente al jurado, comunicando el problema, la solución propuesta y el impacto de RASTRO.",
    
    impacto: "El proyecto permitió desarrollar una solución orientada a mejorar el acompañamiento de las trayectorias escolares mediante la centralización de información y una mejor comunicación entre los actores de la comunidad educativa. RASTRO busca que los docentes puedan conocer mejor a sus estudiantes y tomar decisiones educativas basadas en información actualizada, transformando datos dispersos en conocimiento y mejores oportunidades de aprendizaje.",
  
  }

  // Ejemplo de cómo agregar otro proyecto (descomentá y completá):
  // ,
  // {
  //   id: "mi-nuevo-proyecto",
  //   titulo: "Nombre del proyecto",
  //   descripcion: "Breve descripción del proyecto.",
  //   imagen: "assets/img/mi-proyecto.png",
  //   badgeTipo: "Frontend",
  //   tecnologias: ["React", "CSS"],
  //   github: "https://github.com/tuusuario/mi-proyecto",
  //   web: "https://mi-proyecto.vercel.app",
  //   galeria: [
  //     "assets/img/mi-proyecto-1.png",
  //     "assets/img/mi-proyecto-2.png",
  //     "assets/img/mi-proyecto-3.png"
  //   ],
  //   contexto: "Por qué surgió el proyecto...",
  //   rol: "Qué hiciste vos en el proyecto...",
  //   impacto: "Qué resultado tuvo..."
  // }
];

/*
  Para agregar un CERTIFICADO nuevo, alcanza con dos datos:
    pdf -> ruta al archivo PDF (se muestra en vivo dentro de un
            preview dentro del slider, no hace falta captura).
    alt -> nombre del certificado (accesibilidad y título del
            botón "Abrir PDF").
*/
const CERTIFICADOS = [
  {
    pdf: "assets/pdf/front-newton.pdf",
    alt: "Certificado Frontend"
  },
  {
    pdf: "assets/pdf/back-newton.pdf",
    alt: "Certificado Backend"
  },
  {
    pdf: "assets/pdf/python_santander.pdf",
    alt: "Certificado Python Santander"
  },
  {
    pdf: "assets/pdf/edutec_2026.pdf",
    alt: "Certificado Hackathon Edutech 2026"
  }

  // Ejemplo de cómo agregar otro certificado (descomentá y completá):
  // ,
  // {
  //   pdf: "assets/pdf/mi-certificado.pdf",
  //   alt: "Nombre del certificado"
  // }
];
