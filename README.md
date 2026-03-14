# Perúxpress Inmobiliaria Landing

Landing page corporativa para Perúxpress Grupo Inmobiliario, orientada a captar propietarios interesados en vender o alquilar inmuebles en Lima mediante una propuesta de valor basada en auditoría legal, validación técnica y estrategia comercial.

## Objetivo de la landing

La página está diseñada para:

- presentar la propuesta de valor de la inmobiliaria;
- explicar el proceso de auditoría de valor;
- reforzar confianza con presencia local, datos de contacto y soporte legal;
- captar leads a través de un formulario de solicitud y accesos directos a WhatsApp.

## Secciones de la landing

### 1. Navegación principal

Barra superior fija con acceso a las secciones clave de la página:

- `Inicio`
- `Servicios`
- `Propiedades`
- `Quiénes Somos`
- `Vender`

También incluye un CTA telefónico y un botón principal para ir directamente a la sección de auditoría. En móvil se despliega mediante menú hamburguesa.

### 2. Hero / Portada

Es la primera sección visible y funciona como bloque principal de conversión. Contiene:

- una imagen de fondo inmobiliaria con overlays oscuros;
- un badge de confianza: `Respaldo Legal Garantizado`;
- el mensaje principal de venta de la landing;
- una descripción enfocada en vender o alquilar con seguridad y precisión técnica;
- dos CTAs: `Solicitar Auditoría de Valor` y `Conocer el Proceso`;
- tres indicadores de confianza: `Seguridad Notarial`, `Precio Óptimo` y `Exclusividad`.

### 3. Servicios

Sección que explica los servicios diferenciales de la empresa. Presenta tres tarjetas:

- `Auditoría Técnica y Legal`
- `Análisis de Mercado Real`
- `Presentación Premium`

Su objetivo es dejar claro que la landing no promociona una inmobiliaria genérica, sino una consultoría especializada para propietarios.

### 4. Proceso de auditoría de valor

Bloque metodológico que explica cómo trabaja Perúxpress antes de comercializar un inmueble. El proceso está dividido en cuatro pasos:

- `Blindaje Legal`
- `Diagnóstico Técnico`
- `Big Data de Mercado`
- `Informe & Estrategia`

Esta sección ayuda a justificar el servicio y a reforzar la idea de seguridad, análisis profesional y venta con respaldo.

### 5. Propiedades / Portafolio

Sección destinada a mostrar la cartera de inmuebles. Actualmente comunica que el portafolio está en construcción o actualización, con mensajes como:

- `Próximamente`
- `Ficha en Auditoría`
- `Análisis de mercado real en proceso`

Incluye un botón para ver el portafolio futuro y otro para solicitar notificaciones de lanzamientos.

### 6. Quiénes somos / Presencia local

Bloque institucional que refuerza credibilidad. Incluye:

- mapa embebido de la sede en Santiago de Surco;
- dirección física de la oficina;
- mensaje sobre constitución formal en Perú y trabajo con notarías;
- indicadores de marca como año de fundación y promesa de seguridad legal;
- una tarjeta de compromiso de servicio.

Esta sección cumple una función de confianza y validación local.

### 7. Auditoría gratuita / Captación de leads

Es la sección de conversión principal de la landing. Está dividida en dos columnas:

- columna informativa con beneficios del servicio;
- formulario de contacto para solicitar una auditoría.

Los beneficios destacados son:

- `Transparencia Total`
- `Blindaje Legal`
- `Estrategia de Venta`

El formulario solicita:

- nombre completo;
- WhatsApp;
- tipo de inmueble;
- ubicación;
- objetivo principal del propietario.

Además, incluye acceso directo a WhatsApp para atención inmediata.

### 8. Modal legal

Componente reutilizable que muestra contenido emergente para:

- `Términos y Condiciones`
- `Política de Privacidad`
- `Preguntas Frecuentes`

Este modal mejora la experiencia legal y de soporte sin sacar al usuario de la landing.

### 9. Footer

Pie de página con información complementaria organizada en cuatro bloques:

- marca y resumen corporativo;
- enlaces de servicios;
- accesos legales y soporte;
- datos de contacto directo.

También muestra:

- teléfono;
- correo electrónico;
- dirección;
- RUC de la empresa;
- copyright.

### 10. Botón flotante de WhatsApp

Elemento fijo en la esquina inferior de la pantalla para iniciar contacto inmediato por WhatsApp. Su propósito es facilitar la conversión desde cualquier punto del recorrido.

## Estructura del proyecto

```text
.
|-- index.html
|-- css/
|   `-- styles.css
|-- js/
|   `-- main.js
|-- assets/
|   |-- android-chrome-192x192.png
|   |-- android-chrome-512x512.png
|   |-- favicon-16x16.png
|   `-- favicon-32x32.png
|-- manifest.json
|-- sw.js
|-- robots.txt
`-- sitemap.xml
```

## Archivos principales

- `index.html`: contiene toda la estructura semántica de la landing.
- `css/styles.css`: concentra los estilos visuales del sitio.
- `js/main.js`: maneja interacciones como menú móvil, modales y comportamiento del formulario.
- `manifest.json` y `sw.js`: aportan soporte básico tipo PWA.
- `robots.txt` y `sitemap.xml`: apoyan la indexación SEO.

## Enfoque del sitio

La landing combina captación comercial, confianza legal y posicionamiento SEO local para el mercado inmobiliario de Lima, con énfasis en propietarios que desean vender o alquilar con respaldo profesional.
