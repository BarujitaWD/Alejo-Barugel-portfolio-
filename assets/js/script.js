/* ============================================================
   SLIDER GENÉRICO REUTILIZABLE
   Se usa tanto para el slider de "Estudios" como para la
   galería de imágenes de cada ficha de proyecto.
   images: [{ src, alt, href }]  (href es opcional)
   ============================================================ */
function initSlider(container, items) {
    if (!container || !items || items.length === 0) return;

    const slideWidth = 100 / items.length;

    const slidesHTML = items.map(item => {
        if (item.type === 'pdf') {
            return `
                <div class="img-title" style="width: ${slideWidth}%;">
                    <iframe src="${item.src}" class="pdf-preview" title="${item.alt || ''}"></iframe>
                    ${item.href ? `<a href="${item.href}" target="_blank" class="pdf-open-link">Abrir PDF <i class="fa-solid fa-up-right-from-square"></i></a>` : ''}
                </div>
            `;
        }

        const imageTag = `<img src="${item.src}" alt="${item.alt || ''}">`;
        return `
            <div class="img-title" style="width: ${slideWidth}%;">
                ${item.href ? `<a href="${item.href}" target="_blank">${imageTag}</a>` : imageTag}
            </div>
        `;
    }).join('');

    const dotsHTML = items.length > 1
        ? `<div class="slider-dots">${items.map((_, i) => `<label data-index="${i}"></label>`).join('')}</div>`
        : '';

    const flechasHTML = items.length > 1
        ? `
            <button type="button" class="slider-arrow slider-arrow-prev" aria-label="Anterior"><i class="fa-solid fa-chevron-left"></i></button>
            <button type="button" class="slider-arrow slider-arrow-next" aria-label="Siguiente"><i class="fa-solid fa-chevron-right"></i></button>
        `
        : '';

    container.innerHTML = `
        <div class="slider-main">
            <div class="slides-container" style="width: ${items.length * 100}%;">
                ${slidesHTML}
            </div>
            ${flechasHTML}
        </div>
        ${dotsHTML}
    `;

    const track = container.querySelector('.slides-container');
    const dots = container.querySelectorAll('.slider-dots label');
    let indiceActual = 0;

    function goTo(i) {
        indiceActual = (i + items.length) % items.length;
        track.style.transform = `translateX(-${indiceActual * slideWidth}%)`;
        dots.forEach((d, idx) => d.classList.toggle('active', idx === indiceActual));
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    const prevBtn = container.querySelector('.slider-arrow-prev');
    const nextBtn = container.querySelector('.slider-arrow-next');
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(indiceActual - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(indiceActual + 1));

    if (items.length) goTo(0);
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

    const destacados = CERTIFICADOS.slice(0, 3);

    initSlider(container, destacados.map(c => ({
        type: 'pdf',
        src: c.pdf,
        href: c.pdf,
        alt: c.alt
    })));

    // Evita duplicar el botón si renderCertificados se llama más de una vez
    const botonExistente = container.parentElement.querySelector('.ver-todos-btn');
    if (botonExistente) botonExistente.remove();

    if (CERTIFICADOS.length > 3) {
        container.insertAdjacentHTML('afterend', `
            <a href="certificados.html" class="btn-cv ver-todos-btn">Ver todos los certificados <i class="fa-solid fa-arrow-right"></i></a>
        `);
    }
}

/* ============================================================
   PÁGINA "TODOS LOS CERTIFICADOS" (certificados.html)
   ============================================================ */
function renderCertificadosCompletos() {
    const container = document.getElementById('certificados-list');
    if (!container || typeof CERTIFICADOS === 'undefined') return;

    container.innerHTML = `
        <div class="certificados-grid">
            ${CERTIFICADOS.map(c => `
                <div class="certificado-item">
                    <iframe src="${c.pdf}" class="pdf-preview" title="${c.alt}"></iframe>
                    <span>${c.alt}</span>
                    <a href="${c.pdf}" target="_blank" class="pdf-open-link">Abrir PDF <i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            `).join('')}
        </div>
    `;
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
        ${proyecto.certificado ? `<a href="${proyecto.certificado}" target="_blank" class="btn-cv">Ver Certificado <i class="fa-solid fa-certificate"></i></a>` : ''}
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

/* ============================================================
   SCROLL SUAVE ANIMADO PARA EL NAV
   Reemplaza el salto directo por una animación con duración
   y curva de aceleración propias.
   ============================================================ */
function initSmoothNav() {
    const enlaces = document.querySelectorAll('nav a[href^="#"]');

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    enlaces.forEach(link => {
        link.addEventListener('click', (e) => {
            const destino = document.querySelector(link.getAttribute('href'));
            if (!destino) return;

            e.preventDefault();

            const inicio = window.pageYOffset;
            const distancia = destino.getBoundingClientRect().top;
            const duracion = 900; // ms
            let tiempoInicio = null;

            function paso(timestamp) {
                if (!tiempoInicio) tiempoInicio = timestamp;
                const progreso = Math.min((timestamp - tiempoInicio) / duracion, 1);
                window.scrollTo(0, inicio + distancia * easeInOutCubic(progreso));
                if (progreso < 1) requestAnimationFrame(paso);
            }

            requestAnimationFrame(paso);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProyectos();
    renderCertificados();
    renderCertificadosCompletos();
    renderProyectoDetalle();
    initSmoothNav();

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
