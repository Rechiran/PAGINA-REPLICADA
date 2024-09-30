let step = 0; // Para rastrear el paso actual del formulario

// Función para cambiar el idioma del contenido
function cambiarIdioma() {
    const idiomaSeleccionado = document.querySelector('.language-selector').value;
    const textos = {
        en: {
            telefono: "934 66 54 20",
            correo: "info@gruples.com",
            direccion: "Pg Alameda 57, Santa Coloma de Gramenet",
            historia: "HISTORY",
            flota: "FLEET",
            servicios: "SERVICES",
            trabajar: "WORK WITH US",
            noticias: "NEWS",
            titulo: "TRANSPORTS AND MANAGEMENT",
            descripcion: "Gruples, transport and management, is a transportation company capable of meeting your daily demands in the local, provincial, national, and international scope."
        },
        es: {
            telefono: "934 66 54 20",
            correo: "info@gruples.com",
            direccion: "Pg Alameda 57, Santa Coloma de Gramenet",
            historia: "HISTORIA",
            flota: "FLOTA",
            servicios: "SERVICIOS",
            trabajar: "TRABAJA CON NOSOTROS",
            noticias: "NOTICIAS",
            titulo: "TRANSPORTES Y GESTION",
            descripcion: "Gruples, transporte y gestión, es una empresa de transporte capaz de satisfacer sus necesidades diarias más exigentes en ámbito local, provincial, nacional e internacional."
        },
        fr: {
            telefono: "934 66 54 20",
            correo: "info@gruples.com",
            direccion: "Pg Alameda 57, Santa Coloma de Gramenet",
            historia: "HISTOIRE",
            flota: "FLOTE",
            servicios: "SERVICES",
            trabajar: "TRAVAILLER AVEC NOUS",
            noticias: "NOUVELLES",
            titulo: "TRANSPORTS ET GESTION",
            descripcion: "Gruples, transport et gestion, est une entreprise de transport capable de répondre à vos demandes quotidiennes dans le domaine local, provincial, national et international."
        }
    };

    const textoSeleccionado = textos[idiomaSeleccionado];
    const headerItems = document.querySelectorAll('.header-item span');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Actualiza los elementos del HTML con el texto correspondiente
    headerItems[0].innerText = textoSeleccionado.telefono;
    headerItems[1].innerText = textoSeleccionado.correo;
    headerItems[2].innerText = textoSeleccionado.direccion;

    navLinks.forEach((link, index) => {
        const keys = ['historia', 'flota', 'servicios', 'trabajar', 'noticias'];
        link.innerText = textoSeleccionado[keys[index]];
    });

    document.querySelector('.trapecioxd h1').innerText = textoSeleccionado.titulo;
    document.querySelector('.trapecioxd p').innerText = textoSeleccionado.descripcion;
}

// Función para mostrar una viñeta con información
function mostrarInformacion(event) {
    event.preventDefault();
    const info = {
        "HISTORIA": "Fundada en 1995, Transporte Express comenzó como un pequeño negocio familiar dedicado al transporte local. A lo largo de los años, hemos crecido y evolucionado, expandiendo nuestros servicios a nivel nacional e internacional. Con más de 25 años de experiencia, nos hemos ganado la confianza de nuestros clientes gracias a nuestra dedicación y compromiso con la excelencia. Algunos de nuestros hitos importantes incluyen la expansión de servicios a nivel nacional en 2000, la introducción de tecnología avanzada para el seguimiento de envíos en 2010, y la expansión internacional a Europa y América Latina en 2020.",
        "FLOTA": "En Transporte Express contamos con una flota moderna y variada que incluye más de 100 vehículos, todos equipados con tecnología de última generación para garantizar la seguridad y eficiencia en cada envío. Nuestros vehículos incluyen camiones de carga con capacidad de hasta 20 toneladas, ideales para grandes envíos; furgonetas de distribución, perfectas para entregas rápidas en zonas urbanas; y remolques refrigerados, diseñados para el transporte de productos perecederos. Todos nuestros vehículos son sometidos a un riguroso mantenimiento para asegurar su óptimo rendimiento.",
        "SERVICIOS": "Transporte Express ofrece una amplia gama de servicios para satisfacer las necesidades de nuestros clientes, incluyendo transporte nacional con entregas rápidas y seguras, transporte internacional a Europa y América Latina con seguimiento en tiempo real, logística y almacenamiento con soluciones personalizadas, y un servicio express para entregas urgentes dentro de 24 horas. Estamos comprometidos a ofrecer el mejor servicio y adaptarnos a las necesidades específicas de cada cliente.",
        "TRABAJA CON NOSOTROS": "En Transporte Express valoramos a nuestro equipo y buscamos personas apasionadas y comprometidas. Ofrecemos diversas oportunidades laborales en diferentes áreas, desde conductores hasta roles en logística y administración. Nuestros beneficios para empleados incluyen un salario competitivo, seguro médico completo, oportunidades de formación y desarrollo profesional, y un ambiente de trabajo inclusivo y colaborativo. Actualmente, estamos buscando un conductor de camión con experiencia y un especialista en logística para gestionar nuestra cadena de suministro.",
        "NOTICIAS": "Mantente al día con las últimas novedades de Transporte Express, como el lanzamiento de nuestra nueva línea de servicios de transporte de mercancías refrigeradas, ideal para productos perecederos; nuestra participación en la Feria Internacional de Logística 2024, donde presentaremos nuestras innovaciones en transporte; y el galardón a la Mejor Empresa de Transporte del Año otorgado por la Asociación Nacional de Transporte."
    };

    mostrarViñeta(event.target, info[event.target.innerText]);
}

function mostrarViñeta(element, texto) {
    const viñeta = document.createElement('div');
    viñeta.className = 'tooltip';
    viñeta.innerText = texto;
    document.body.appendChild(viñeta);

    const rect = element.getBoundingClientRect();
    viñeta.style.top = `${rect.bottom + window.scrollY}px`;
    viñeta.style.left = `${rect.left + window.scrollX}px`;

    viñeta.addEventListener('mouseleave', () => viñeta.remove());
}

// Función para abrir el formulario deslizante
function abrirFormulario() {
    const formularioHTML = `
        <div class="form-modal">
            <div class="form-container">
                ${getFormularioHTML(step)}
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', formularioHTML);
}

// Función para generar el HTML del formulario según el paso
function getFormularioHTML(step) {
    if (step === 0) {
        return `
            <h2>Formulario de Cliente</h2>
            <label for="correoCliente">Correo Electrónico:</label>
            <input type="email" id="correoCliente" required>
            <button type="button" onclick="siguientePaso()">Aceptar</button>
        `;
    } else {
        return `
            <h2>Detalles Adicionales</h2>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" required>
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" required></textarea>
            <button type="submit">Enviar</button>
            <button type="button" onclick="cerrarFormulario()">Cerrar</button>
        `;
    }
}

// Función para pasar al siguiente paso del formulario
function siguientePaso() {
    const correo = document.getElementById('correoCliente').value;
    if (correo) {
        step++;
        const formContainer = document.querySelector('.form-container');
        formContainer.innerHTML = getFormularioHTML(step);
    } else {
        alert("Por favor, introduce un correo electrónico válido.");
    }
}

// Función para cerrar el formulario
function cerrarFormulario() {
    const formModal = document.querySelector('.form-modal');
    formModal?.remove(); // Utiliza el operador de encadenamiento opcional
}

// Función para redirigir a otra página al hacer clic en "Saber Más"
function saberMas() {
    window.location.href = "otra-pagina.html";
}

// Asignar eventos a los elementos
document.querySelector('.language-selector').addEventListener('change', cambiarIdioma);
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => link.addEventListener('click', mostrarInformacion));
document.querySelector('.client-button').addEventListener('click', abrirFormulario);
document.querySelector('.marco-button').addEventListener('click', saberMas);
