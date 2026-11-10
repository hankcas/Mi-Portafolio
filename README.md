# Portafolio · Leonardo Castro

Portafolio personal de **Eyder Leonardo Castro Ortiz**, Full Stack Developer con base en Ingeniería Mecatrónica e IoT. Reúne mi experiencia, habilidades y proyectos, con modo claro y oscuro.

Diseño "Aurora" con detalles HUD discretos: degradados suaves en movimiento, tarjetas de vidrio, animaciones al hacer scroll, título que se escribe solo, cifras tipo telemetría y esquinas tipo mira en los proyectos. Respeta la opción del sistema "reducir movimiento".

## Secciones

- **Inicio** — presentación y disponibilidad
- **Sobre mí** — perfil y cifras principales
- **Habilidades** — frontend, backend, IoT y hardware, herramientas e inteligencia artificial
- **Proyectos** — trabajos destacados con enlace a su repositorio
- **Experiencia** y **Educación**
- **Contacto**

## Proyectos destacados

| Proyecto | Descripción | Tecnologías |
|---|---|---|
| [Monitor Dashboard Industrial](https://github.com/hankcas/monitor-dashboard-app) | Monitoreo de sensores con umbrales, alarmas y control del sistema | React, Chart.js, Node.js, Express |
| [API de Gestión de Pólizas](https://github.com/hankcas/polizas_api) | API REST de pólizas y riesgos con reglas de negocio | Java, Spring Boot, JPA |
| [Rick & Morty Explorer](https://github.com/hankcas/react-task-manager-app) | Explorador de personajes con filtros y paginación | React, Vite |

## Tecnologías

- React 19 + TypeScript + Vite
- CSS Modules
- Íconos de [Lucide](https://lucide.dev)
- Despliegue continuo en Vercel desde GitHub

## Estructura

```
src/
├── components/     # Navbar, Hero, About, Skills, Projects, Experience, Education, Contact, Footer
├── data/
│   └── portfolio.ts  # Todo el contenido del sitio (textos, proyectos, experiencia)
├── hooks/          # Animaciones: aparición al hacer scroll, título que se escribe, contador
├── types/          # Tipos del contenido (si un dato está mal escrito, TypeScript avisa)
├── utils/
├── styles/         # Estilos globales y variables de tema
└── App.tsx
```

Para actualizar el contenido solo hay que editar `src/data/portfolio.ts`.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Otros comandos:

```bash
npm run typecheck   # revisa los tipos
npm run lint        # revisa el código con oxlint
npm run build       # revisa los tipos y genera la versión de producción
```

## Contacto

- GitHub: [hankcas](https://github.com/hankcas)
- Correo: leo.castro9306@gmail.com