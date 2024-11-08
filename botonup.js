function toggleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }


  function scrollToTop() {
    const scrollDuration = 300; // Duración de la animación en milisegundos
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }


  window.addEventListener("scroll", toggleScrollToTopButton);
  document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);


    // Función para cambiar entre modo claro y oscuro
    function toggleDarkMode() {
        const body = document.body;
        const button = document.getElementById('dark-mode-toggle');
        
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            button.innerHTML = '☀️';
            button.setAttribute('aria-label', 'Cambiar a modo claro');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            button.innerHTML = '🌙';
            button.setAttribute('aria-label', 'Cambiar a modo oscuro');
        }
    }

    // Verificar la preferencia guardada del usuario
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-toggle').innerHTML = '☀️';
        document.getElementById('dark-mode-toggle').setAttribute('aria-label', 'Cambiar a modo claro');
    }

    // Agregar evento de clic al botón
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);