# Portafolio - Ccori Ccoarite Guver Leon

Portafolio profesional desarrollado con React, Vite y Tailwind CSS. Diseño dark mode con animaciones modernas, optimizado para dispositivos móviles y listo para desplegar en Netlify.

## Tecnologías

- **React + Vite** - Framework y bundler
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones y transiciones
- **React Icons** - Iconos

## Estructura

```
src/
├── components/
│   ├── Navbar.jsx          # Navegación sticky con menú móvil
│   ├── Hero.jsx            # Sección principal con animación de código
│   ├── About.jsx           # Sobre mí con highlights
│   ├── Skills.jsx          # Stack tecnológico por categorías
│   ├── Experience.jsx      # Timeline profesional
│   ├── Projects.jsx        # Cards de proyectos destacados
│   ├── Contact.jsx         # Formulario y datos de contacto
│   ├── Footer.jsx          # Pie de página
│   ├── LoadingScreen.jsx   # Pantalla de carga
│   └── useInView.js        # Hook para animaciones al scroll
├── data/
│   ├── profile.js          # Datos personales
│   ├── skills.js           # Tecnologías con iconos
│   ├── experience.js       # Experiencia laboral
│   ├── projects.js         # Proyectos
│   └── navigation.js       # Links del menú
├── index.css               # Tema personalizado de Tailwind
├── App.jsx                 # Componente principal
└── main.jsx                # Entry point
```

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/portafolio.git
cd portafolio

# Instalar dependencias
npm install

# Ejutar en modo desarrollo
npm run dev
```

El servidor se inicia en `http://localhost:5173/`

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build para producción |
| `npm run preview` | Vista previa del build |

## Despliegue en Netlify

1. Subir el proyecto a GitHub
2. Ir a [app.netlify.com](https://app.netlify.com)
3. **Add new site** > **Import an existing project**
4. Seleccionar el repositorio de GitHub
5. Netlify detecta automáticamente la configuración de `netlify.toml`
6. Click **Deploy site**

Cada `git push` activa un despliegue automático.

## Personalización

Los datos del portafolio están en `src/data/`. Para modificar:

| Archivo | Qué contiene |
|---------|-------------|
| `profile.js` | Nombre, rol, email, redes sociales |
| `skills.js` | Tecnologías y categorías |
| `experience.js` | Experiencia laboral |
| `projects.js` | Proyectos destacados |
| `navigation.js` | Links del menú |

## Licencia

Proyecto personal. Todos los derechos reservados.
