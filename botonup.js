function toggleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn"); // Obtiene el botón de "scroll hacia arriba" por su ID

    // Verifica si la página ha sido desplazada más de 20 píxeles en la dirección vertical
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Si se ha desplazado más de 20 píxeles, muestra el botón
        scrollToTopBtn.style.display = "block";
    } else {
        // Si no, oculta el botón
        scrollToTopBtn.style.display = "none";
    }
}

// Función para hacer scroll hacia la parte superior de la página de manera suave
function scrollToTop() {
    const scrollDuration = 300; // Duración de la animación en milisegundos
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Paso de desplazamiento en cada intervalo

    // Establece un intervalo que se ejecuta cada 15 ms para crear el efecto de desplazamiento suave
    const scrollInterval = setInterval(function() {
        // Si aún no se ha llegado al tope de la página, desplázate en el paso definido
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            // Si se ha llegado a la parte superior, detén el intervalo
            clearInterval(scrollInterval);
        }
    }, 15); // Intervalo de 15 ms para actualizar la posición de desplazamiento
}

// Agrega un evento "scroll" al objeto "window" para verificar cuándo mostrar el botón
window.addEventListener("scroll", toggleScrollToTopButton);

// Agrega un evento "click" al botón para ejecutar la función "scrollToTop" cuando se haga clic
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