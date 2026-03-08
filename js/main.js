
document.addEventListener('DOMContentLoaded', () => {
    console.log('Perúxpress Inmobiliaria loaded');

    // === Navigation Logic ===
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const sections = document.querySelectorAll('header[id], section[id], div[id*="placeholder"]'); // Include placeholders just in case, though mostly sections will have IDs.

    // Toggle Mobile Menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenuIcon.textContent = 'close';
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuIcon.textContent = 'menu';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Scroll to Section & Active Link Handler
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            const offset = 0;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuIcon.textContent = 'menu';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    }

    // Attach click events to links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Intersection Observer for Active Link Highlighting
    const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -40% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };

    const observer = new IntersectionObserver((entries) => {
        let bestCandidate = null;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!bestCandidate || entry.intersectionRect.height > bestCandidate.intersectionRect.height) {
                    bestCandidate = entry;
                }
            }
        });

        if (bestCandidate) {
            const id = bestCandidate.target.id;
            updateActiveLink(id);
        }
    }, observerOptions);

    // Observe all sections
    // Note: We need to wait for sections to be injected/exist. 
    // For now, we attach to what's available and assume we'll re-attach if dynamic content loads, 
    // but here everything is static HTML in `index.html` eventually.
    // We will query selector 'section' effectively.
    // IMPORTANT: Since we are migrating piece by piece, sections might not exist yet.
    // We will implement a function to initialize observer that can be called.
    
    function initObserver() {
        const sectionsToObserve = document.querySelectorAll('section[id], header[id="home"]');
        sectionsToObserve.forEach(section => observer.observe(section));
    }

    // Call init initially
    initObserver();

    function updateActiveLink(id) {
        // Desktop
        navLinks.forEach(link => {
            if (link.dataset.section === id) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Mobile
        mobileNavLinks.forEach(link => {
            if (link.dataset.section === id) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // === Audit Form Logic ===
    const auditForm = document.getElementById('auditForm');
    const propertyTypeSelect = document.getElementById('propertyType');

    if (auditForm) {
        auditForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic Validation (HTML5 validators handle most)
            if (!this.checkValidity()) {
                this.reportValidity();
                return;
            }

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            const phoneNumber = '51967729916'; // Number from CTA component

            const rawText = `\uD83D\uDC4B Hola, estoy interesado en una *Auditoría de Valor* para mi inmueble.\n\n` +
                `\uD83D\uDC64 *Nombre:* ${data.name}\n` +
                `\uD83D\uDCF1 *Celular:* ${data.phone}\n` +
                `\uD83C\uDFE0 *Tipo:* ${data.propertyType}\n` +
                `\uD83D\uDCCD *Ubicación:* ${data.location}\n` +
                `\uD83D\uDCAC *Mensaje:* ${data.message || 'Sin mensaje adicional'}`;

            const encodedText = encodeURIComponent(rawText);
            const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

            window.open(url, '_blank', 'noopener,noreferrer');
            
            // Reset form optionally
            this.reset();
            if(propertyTypeSelect) propertyTypeSelect.value = 'Departamento';
        });
    }

    // === Legal Modals Logic ===
    const modal = document.getElementById('legal-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalOkBtn = document.getElementById('modal-ok-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalContent = document.getElementById('modal-content');
    const modalTriggers = document.querySelectorAll('.modal-trigger');

    const modalData = {
        terms: {
            title: 'Términos y Condiciones',
            icon: 'gavel',
            content: `
                <p>Bienvenido a <strong>Perúxpress Grupo Inmobiliario</strong>. Al acceder y utilizar nuestros servicios de auditoría, intermediación y consultoría inmobiliaria, usted acepta cumplir con los siguientes términos y condiciones bajo la legislación peruana.</p>
                <h4 class="text-lg font-bold text-white mt-4 mb-2">1. Naturaleza del Servicio</h4>
                <p>Perúxpress actúa como una consultora especializada en auditoría técnica-legal y gestión comercial de inmuebles. No garantizamos la venta de un inmueble en un plazo determinado, ya que esto depende de las condiciones del mercado, aunque aplicamos nuestra metodología para maximizar las probabilidades de éxito.</p>
                <h4 class="text-lg font-bold text-white mt-4 mb-2">2. Exactitud de la Información</h4>
                <p>Toda la información proporcionada sobre propiedades (áreas, precios, antigüedad) es referencial y ha sido suministrada por los propietarios o extraída de partidas registrales públicas. Perúxpress realiza auditorías diligentes, pero no se hace responsable por vicios ocultos no detectables en una inspección visual o documental estándar.</p>
                <h4 class="text-lg font-bold text-white mt-4 mb-2">3. Propiedad Intelectual</h4>
                <p>Todo el material gráfico, fotográfico, textos y logotipos mostrados en este sitio web son propiedad exclusiva de Perúxpress. Está prohibida su reproducción total o parcial sin autorización escrita.</p>
                <h4 class="text-lg font-bold text-white mt-4 mb-2">4. Legislación Aplicable</h4>
                <p>Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia será sometida a la competencia de los jueces y tribunales de Lima.</p>
            `
        },
        privacy: {
            title: 'Política de Privacidad',
            icon: 'security',
            content: `
                <p>En cumplimiento de la <strong>Ley N° 29733, Ley de Protección de Datos Personales</strong>, y su Reglamento, Perúxpress garantiza la seguridad y confidencialidad de sus datos.</p>
                <h4 class="text-lg font-bold text-white mt-4 mb-2">1. Información que Recopilamos</h4>
                <p>Recopilamos datos personales (nombre, teléfono, correo, ubicación del inmueble) únicamente a través de nuestros formularios de contacto y solicitud de auditoría, con el consentimiento expreso del usuario.</p>
                <h4 class="text-lg font-bold text-white mt-4 mb-2">2. Finalidad del Tratamiento</h4>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Contactar al usuario para brindar información sobre nuestros servicios de auditoría y venta.</li>
                    <li>Coordinar visitas técnicas a los inmuebles.</li>
                    <li>Elaborar informes de valoración de mercado.</li>
                </ul>
                <p class="mt-2">Sus datos <strong>nunca</strong> serán vendidos ni compartidos con terceros para fines comerciales ajenos a la operación inmobiliaria.</p>
                <h4 class="text-lg font-bold text-white mt-4 mb-2">3. Derechos ARCO</h4>
                <p>Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición enviando una solicitud a <strong>contacto&#64;peruxpress.pe</strong>.</p>
            `
        },
        faq: {
            title: 'Preguntas Frecuentes',
            icon: 'help',
            content: `
                <div class="space-y-6">
                  <div>
                    <h4 class="text-white font-bold text-lg mb-2">¿Cómo determinan el precio de mi inmueble?</h4>
                    <p>No usamos "el precio del metro cuadrado promedio" genérico. Utilizamos el <strong>Método Comparativo de Mercado</strong> analizando cierres reales de ventas en Sunarp de los últimos 6 meses en su zona específica, ajustado por las características técnicas (antigüedad, estado, acabados) que detectamos en nuestra auditoría.</p>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-lg mb-2">¿Tengo que pagar por la Auditoría Inicial?</h4>
                    <p>No. La pre-auditoría de valor y la consulta legal preliminar son <strong>gratuitas</strong> para propietarios que deseen gestionar la venta de su inmueble con nosotros. Solo cobramos honorarios de éxito una vez que la propiedad se vende.</p>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-lg mb-2">¿Qué documentos necesito para empezar?</h4>
                    <p>Para la auditoría inicial, idealmente necesitamos el número de Partida Registral (Copia Literal) y el HR/PU (Hoja Resumen y Predio Urbano) del año en curso. Si no los tienes a la mano, nuestros asesores pueden ayudarte a gestionarlos.</p>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-lg mb-2">¿En qué distritos operan?</h4>
                    <p>Nos especializamos en Lima Top y Lima Moderna, con mayor presencia en Santiago de Surco, San Borja, Miraflores, San Isidro y La Molina.</p>
                  </div>
                </div>
            `
        }
    };

    function openModal(type) {
        if (!modalData[type]) return;
        
        modalTitle.textContent = modalData[type].title;
        modalIcon.textContent = modalData[type].icon;
        modalContent.innerHTML = modalData[type].content;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }

    modalTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const type = btn.dataset.modal;
            openModal(type);
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);
    
    // Close on click outside (backdrop)
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    // === Footer Dynamic Year ===
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // === Scroll Reveal (Simple Fade In) ===
    const revealElements = document.querySelectorAll('section');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        el.classList.add('reveal-hidden');
        revealObserver.observe(el);
    });

    // === Service Worker Registration ===
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

});
