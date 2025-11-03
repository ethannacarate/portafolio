// ==========================================================
// 1. FUNCIONALIDAD DEL MENÚ MÓVIL (HAMBURGUESA)
// ==========================================================
// Seleccionamos el ícono del menú y la barra de navegación.
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Cuando se hace clic en el ícono...
menuIcon.onclick = () => {
    // Alterna el ícono entre 'bars' (hamburguesa) y 'xmark' (X).
    menuIcon.classList.toggle('fa-xmark');
    // Alterna la clase 'active' en la navbar para mostrarla u ocultarla.
    navbar.classList.toggle('active');
};

// ==========================================================
// 2. LÓGICA DE SCROLL Y RESALTADO DE ENLACE ACTIVOaaaa
// ==========================================================
// Seleccionamos todas las secciones y los enlaces de la navegación.
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Si el scroll está dentro de los límites de una sección...
        if (top >= offset && top < offset + height) {
            // Quitamos la clase 'active' de todos los enlaces.
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Añadimos la clase 'active' solo al enlace que corresponde a la sección visible.
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Al hacer scroll, cerramos el menú móvil si está abierto.
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


// ==========================================================
// 3. FUNCIONES JS PROPIAS PARA MANIPULACIÓN DEL DOM (RÚBRICA)
// ==========================================================

/**
 * Ítem 8 y 13: Evento onmouseover usando 'this'.
 * Cambia el color de fondo de la tarjeta de habilidad al pasar el mouse.
 * @param {HTMLElement} elemento - El elemento que disparó el evento (this).
 */
function resaltarHabilidad(elemento) {
    // Usamos 'this' (pasado como 'elemento') para afectar solo al propio elemento.
    elemento.style.backgroundColor = '#00bcd4'; // --color-principal
    elemento.style.color = '#1f2a40'; // --color-secundario
}

/**
 * Ítem 9: Evento onmouseout usando 'this'.
 * Restaura el color de fondo original de la tarjeta de habilidad.
 * @param {HTMLElement} elemento - El elemento que disparó el evento (this).
 */
function restaurarHabilidad(elemento) {
    // Usamos 'this' para restaurar los estilos del propio elemento.
    elemento.style.backgroundColor = '#1f2a40'; // --color-secundario
    elemento.style.color = '#ededed'; // --color-texto
}

/**
 * Ítem 10 y 14: Evento onclick usando 'this' para remover un elemento.
 * Elimina la tarjeta del proyecto del DOM cuando se hace clic en el ícono de basura.
 * @param {HTMLElement} elementoIcono - El ícono de basura que disparó el evento (this).
 */
function removerProyecto(elementoIcono) {
    // 'this' es el ícono. Subimos en el DOM hasta encontrar el contenedor de la columna para removerlo.
    // elementoIcono -> card-footer -> card -> col-lg-4
    const tarjetaParaRemover = elementoIcono.closest('.col-lg-4');
    if (tarjetaParaRemover) {
        // Pedimos confirmación al usuario antes de borrar.
        if (confirm('¿Estás seguro de que quieres eliminar este proyecto de la vista?')) {
            tarjetaParaRemover.style.transition = 'opacity 0.5s ease';
            tarjetaParaRemover.style.opacity = '0';
            // Esperamos a que la transición termine para removerlo del DOM.
            setTimeout(() => {
                tarjetaParaRemover.remove();
            }, 500);
        }
    }
}

/**
 * Ítem 11: Evento onchange usando 'this' para capturar valores.
 * Muestra en la consola el valor del campo de texto cuando cambia.
 * @param {HTMLInputElement} input - El campo de texto que disparó el evento (this).
 */
function validarAsunto(input) {
    // 'this' es el input. Usamos '.value' para obtener su contenido.
    console.log(`El asunto ha cambiado a: "${input.value}"`);
    // Aquí se podría agregar lógica de validación, por ejemplo:
    if (input.value.length < 5) {
        console.warn('Advertencia: El asunto es muy corto.');
    }
}