# Portafolio Ulises Enriquez

Este proyecto es un portafolio personal desarrollado como una página web estática con HTML, Bootstrap y estilos personalizados en CSS/SCSS. Su objetivo es presentar información profesional, habilidades, intereses, proyectos y una visión general del perfil de Ulises Enriquez en una interfaz clara y adaptable a distintos tamaños de pantalla.

## Objetivo del proyecto

El objetivo principal es mostrar una presentación profesional organizada y visualmente consistente, donde se concentran:

- Una introducción personal.
- La biografía del autor.
- Habilidades técnicas, herramientas y soft skills.
- Proyectos y pasatiempos.
- Una visión profesional a futuro.

La página está pensada como una vitrina personal para uso académico y profesional.

## Cómo ejecutar la página

No requiere instalación ni compilación para visualizarse.

1. Abre la carpeta del proyecto en VS Code o en tu explorador de archivos.
2. Abre el archivo `index.html` en el navegador.
3. También puedes usar la extensión Live Server para levantar la página en local con recarga automática.

Si realizas cambios en los archivos SCSS, recompila los estilos hacia `assets/css/style.css` para que los cambios se reflejen en la página.

## Componentes de Bootstrap utilizados

El proyecto utiliza varios componentes y utilidades de Bootstrap 5, entre ellos:

- `navbar` y `navbar-toggler` para la navegación superior fija.
- `collapse` para el menú desplegable en pantallas pequeñas.
- `container`, `row` y `col-*` para la estructura responsiva.
- `card`, `card-body` y `card-header` para la presentación de secciones y contenido.
- `badge` para etiquetar niveles de habilidad e idiomas.
- Utilidades como `d-flex`, `justify-content-center`, `align-items-center`, `text-center`, `ms-auto`, `gap-*`, `py-*`, `mb-*`, `rounded`, `bg-dark`, `text-white` e `img-fluid`.

Además, se integran Bootstrap Icons mediante CDN para complementar la interfaz.

## Elementos personalizados mediante CSS

Los estilos propios se concentran en `assets/css/style.css` y en la estructura SCSS del proyecto. Entre los elementos personalizados destacan:

- Variables CSS con la paleta de colores y la tipografía base.
- Fondo general y comportamiento de desplazamiento suave.
- Barra de navegación con color, borde y estados hover personalizados.
- Tarjetas, botones y encabezados con bordes rectos y estilo uniforme.
- Secciones con fondo alterno y separación visual clara.
- Tipografía de títulos, subtítulos y texto secundario.
- Ajustes para imágenes de perfil y tarjetas de proyectos con `object-fit: cover`.
- Pie de página fijo y con prioridad visual sobre otros fondos.
- Estilo personalizado para enlaces azules y efectos hover.

## Decisiones de diseño

Durante el desarrollo se tomaron estas decisiones principales:

- Usar una interfaz limpia y de lectura rápida, con jerarquía visual clara.
- Mantener una paleta sobria basada en azules oscuros, blancos y grises para dar una apariencia profesional.
- Combinar Bootstrap con estilos propios para conservar la rapidez del framework sin perder identidad visual.
- Priorizar el diseño responsive para que el contenido se adapte bien en móvil, tableta y escritorio.
- Usar cards y bloques de contenido independientes para facilitar la exploración del portafolio.
- Dar protagonismo al contenido personal y profesional, evitando elementos decorativos innecesarios.

## Estructura general

- `index.html`: estructura principal de la página.
- `assets/css/style.css`: estilos personalizados ya compilados.
- `assets/scss/`: archivos fuente de estilos organizados por secciones y componentes.
- `assets/img/`: recursos visuales del portafolio.


