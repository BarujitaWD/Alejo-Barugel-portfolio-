function renderProyectos() {
    const container = document.getElementById('proyectos-list');
    if (!container || typeof PROYECTOS === 'undefined') return;

    container.innerHTML = `
        <div class="proyectos-grid">
            ${PROYECTOS.map(p => `
                <a href="${p.link}" class="projects-link">
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

function renderCertificados() {
    const container = document.getElementById('estudios-slider');
    if (!container || typeof CERTIFICADOS === 'undefined' || CERTIFICADOS.length === 0) return;

    const slideWidth = 100 / CERTIFICADOS.length;

    const slidesHTML = CERTIFICADOS.map(c => `
        <div class="img-title" style="width: ${slideWidth}%;">
            <a href="${c.pdf}" target="_blank"><img src="${c.imagen}" alt="${c.alt}"></a>
        </div>
    `).join('');

    const dotsHTML = CERTIFICADOS.map((c, i) => `<label data-index="${i}"></label>`).join('');

    container.innerHTML = `
        <div class="slider-main">
            <div class="slides-container" id="slides-track" style="width: ${CERTIFICADOS.length * 100}%;">
                ${slidesHTML}
            </div>
        </div>
        ${CERTIFICADOS.length > 1 ? `<div class="slider-dots">${dotsHTML}</div>` : ''}
    `;

    const track = container.querySelector('#slides-track');
    const dots = container.querySelectorAll('.slider-dots label');

    function goTo(i) {
        track.style.transform = `translateX(-${i * slideWidth}%)`;
        dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
    if (dots.length) goTo(0);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProyectos();
    renderCertificados();

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