/* ============================================================
   SLIDER GENÉRICO REUTILIZABLE
   Se usa tanto para el slider de "Estudios" como para la
   galería de imágenes de cada ficha de proyecto.
   images: [{ src, alt, href }]  (href es opcional)
   ============================================================ */
function initSlider(container, images) {
    if (!container || !images || images.length === 0) return;

    const slideWidth = 100 / images.length;

    const slidesHTML = images.map(img => {
        const imageTag = `<img src="${img.src}" alt="${img.alt || ''}">`;
        return `
            <div class="img-title" style="width: ${slideWidth}%;">
                ${img.href ? `<a href="${img.href}" target="_blank">${imageTag}</a>` : imageTag}
            </div>
        `;
    }).join('');

    const dotsHTML = images.length > 1
        ? `<div class="slider-dots">${images.map((_, i) => `<label data-index="${i}"></label>`).join('')}</div>`
        : '';

    container.innerHTML = `
        <div class="slider-main">
            <div class="slides-container" style="width: ${images.length * 100}%;">
                ${slidesHTML}
            </div>
        </div>
        ${dotsHTML}
    `;

    const track = container.querySelector('.slides-container');
    const dots = container.querySelectorAll('.slider-dots label');

    function goTo(i) {
        track.style.transform = `translateX(-${i * slideWidth}%)`;
        dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
    if (images.length) goTo(0);
}

/* ============================================================
   PROYECTOS: tarjetas de la sección "Proyectos" en index.html
   ============================================================ */
function renderProyectos() {
    const container = document.getElementById('proyectos-list');
    if (!container || typeof PROYECTOS === 'undefined') return;

    container.innerHTML = `
        <div class="proyectos-grid">
            ${PROYECTOS.map(p => `
                <a href="proyecto.html?id=${encodeURIComponent(p.id)}" class="projects-link">
                    <div class="tech-box">
                        ${p.badgeTipo ? `<span class="badge">${p.badgeTipo}</span>` : ''}
                        <h3 style="color: #E5E5E5;">${p.titulo}</h3>
                        <p>${p.descripcion}</p>
                        <div class="project-img">
                            <img src="${p.imagen}" class="img-pro" alt="${p.titulo}">
                        </div>
                        <div style="margin-top: 30px;">
                            ${(p.tecnologias || []).map(t => `<span class="badge">${t}</span>`).join(' ')}
                        </div>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
}

/* ============================================================
   CERTIFICADOS: slider de la sección "Estudios" en index.html
   ============================================================ */
function renderCertificados() {
    const container = document.getElementById('estudios-slider');
    if (!container || typeof CERTIFICADOS === 'undefined') return;

    initSlider(container, CERTIFICADOS.map(c => ({
        src: c.imagen,
        alt: c.alt,
        href: c.pdf
    })));
}

/* ============================================================
   FICHA DE PROYECTO: arma proyecto.html a partir de PROYECTOS
   y del "id" que viene en la URL (?id=...)
   ============================================================ */
function renderProyectoDetalle() {
    const container = document.getElementById('proyecto-detalle');
    if (!container || typeof PROYECTOS === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const proyecto = PROYECTOS.find(p => p.id === id);

    if (!proyecto) {
        container.innerHTML = `<p>No se encontró el proyecto solicitado.</p>`;
        return;
    }

    document.title = `${proyecto.titulo} | Alejo Max Barugel`;

    const badgesHTML = [proyecto.badgeTipo, ...(proyecto.tecnologias || [])]
        .filter(Boolean)
        .map(b => `<span class="badge">${b}</span>`)
        .join(' ');

    const botonesHTML = `
        ${proyecto.github ? `<a href="${proyecto.github}" target="_blank" class="btn-cv">Ver Repositorio <i class="fa-brands fa-github"></i></a>` : ''}
        ${proyecto.web ? `<a href="${proyecto.web}" target="_blank" class="btn-cv">Ver Sitio Web <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
    `;

    const seccionesHTML = [
        ['Contexto', proyecto.contexto],
        ['Rol', proyecto.rol],
        ['Impacto', proyecto.impacto]
    ]
        .filter(([, texto]) => !!texto)
        .map(([titulo, texto]) => `
            <div class="detalle-seccion">
                <h4>${titulo}</h4>
                <p>${texto}</p>
            </div>
        `).join('');

    container.innerHTML = `
        <h2 style="display:inline-block; margin-right: 1rem;">${proyecto.titulo}</h2>
        ${badgesHTML}
        <p style="margin-top: 1rem;">${proyecto.descripcion}</p>
        <div class="detalle-botones">${botonesHTML}</div>
        <div class="slider-wrapper" id="galeria-slider"></div>
        ${seccionesHTML}
    `;

    if (proyecto.galeria && proyecto.galeria.length) {
        initSlider(document.getElementById('galeria-slider'), proyecto.galeria.map(src => ({
            src,
            alt: proyecto.titulo
        })));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProyectos();
    renderCertificados();
    renderProyectoDetalle();

    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(item => {
        observer.observe(item);
    });
});

function copiarTexto(elemento, texto) {
  // Usamos la API nativa del navegador
  navigator.clipboard.writeText(texto).then(() => {
    // Feedback visual: cambiamos el icono y el texto
    const icon = elemento.querySelector('i');
    const span = elemento.querySelector('span');

    const originalIcon = icon.className;
    const originalText = span.innerText;

    // Cambiar a estado "Copiado"
    icon.className = "fa-solid fa-check";
    span.innerText = "¡Copiado!";
    elemento.classList.add('success');

    // Volver al estado original después de 2 segundos
    setTimeout(() => {
      icon.className = originalIcon;
      span.innerText = originalText;
      elemento.classList.remove('success');
    }, 2000);
  }).catch(err => {
    console.error('Error al copiar: ', err);
  });
}
