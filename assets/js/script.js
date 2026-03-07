document.addEventListener('DOMContentLoaded', () => {
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