export const personalInfo = {
  name: 'Leonardo Castro',
  fullName: 'Eyder Leonardo Castro Ortiz',
  title: 'Desarrollador Fullstack',
  subtitle: 'Ingeniero Mecatrónico',
  email: 'leo.castro9306@gmail.com',
  phone: '+57 310 241 7931',
  github: 'https://github.com/hankcas',
  location: 'Bogotá, Colombia',
  available: true,
}

export const aboutText = [
  'Soy Leonardo Castro, un desarrollador fullstack con formación en Ingeniería Mecatrónica. Esa combinación me permite pensar en sistemas completos: desde el sensor que captura un dato hasta la interfaz que lo muestra en tiempo real.',
  'He trabajado con startups y empresas construyendo plataformas web con React y Node.js, dashboards de monitoreo en tiempo real y APIs REST en Node.js y Java. Me apasiona encontrar el punto donde la tecnología resuelve un problema real.',
  'Actualmente profundizando en inteligencia artificial y arquitecturas cloud.',
]

export const stats = [
  { number: '3+', label: 'Años de experiencia' },
  { number: '10+', label: 'Proyectos entregados' },
  { number: '2', label: 'Títulos profesionales' },
  { number: 'IoT', label: 'Hardware + Software' },
]

export const skills = [
  {
    title: 'Frontend',
    icon: 'layers',
    items: ['React', 'Vue.js', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: ['Node.js', 'Express', 'Java', 'Spring Boot', 'APIs REST', 'SQL'],
  },
  {
    title: 'IoT & Hardware',
    icon: 'cpu',
    items: ['ESP32', 'PLCs', 'Sensores', 'Datos en tiempo real', 'MQTT'],
  },
  {
    title: 'Herramientas',
    icon: 'tool',
    items: ['Git / GitHub', 'Vercel', 'Scrum', 'VS Code', 'Postman', 'Google Workspace'],
  },
  {
    title: 'Inteligencia Artificial',
    icon: 'zap',
    items: ['Machine Learning', 'NLP', 'Prompt Engineering', 'ChatGPT API'],
  },
]

export const projects = [
  {
    title: 'Monitor Dashboard Industrial',
    description: 'Monitoreo de una línea de producción con 4 sensores simulados (temperatura, humedad, presión y consumo), umbrales de alarma, gráfica de tendencia, registro de eventos y encendido/apagado desde una API en Express.',
    tech: ['React', 'Chart.js', 'Node.js', 'Express', 'CSS Modules'],
    github: 'https://github.com/hankcas/monitor-dashboard-app',
    icon: 'activity',
  },
  {
    title: 'API de Gestión de Pólizas',
    description: 'API REST para administrar pólizas y riesgos: consultas por tipo y estado, renovación y cancelación con reglas de negocio, y un mock de integración con el CORE transaccional.',
    tech: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'H2', 'Maven'],
    github: 'https://github.com/hankcas/polizas_api',
    icon: 'shield',
  },
  {
    title: 'Rick & Morty Explorer',
    description: 'Explorador de personajes que consume una API pública, con búsqueda, filtros por estado y género, paginación y estados de carga y error.',
    tech: ['React', 'Vite', 'Hooks personalizados', 'API REST', 'CSS Modules'],
    github: 'https://github.com/hankcas/react-task-manager-app',
    icon: 'search',
  },
]

export const experience = [
  {
    period: 'Sep 2022 – Presente',
    title: 'Desarrollador Fullstack',
    company: 'Freelance',
    description: 'Desarrollo de aplicaciones web a medida con React y Node.js. Integración de APIs, dashboards y soluciones IoT para clientes directos.',
  },
  {
    period: 'Sep – Dic 2025',
    title: 'Profesional en Virtualización y TIC',
    company: 'Corporación Universitaria CENDA',
    description: 'Administración de plataformas educativas Moodle, soporte técnico y gestión de entornos virtuales de aprendizaje.',
  },
  {
    period: 'Ago 2024 – Jun 2025',
    title: 'Desarrollador Full Stack Jr',
    company: 'Agencia Digital Avanza',
    description: 'Desarrollo frontend con React y Vue.js, backend con Node.js y Express. Metodología Scrum con sprints semanales y despliegues continuos.',
  },
  {
    period: 'May 2022 – Jul 2024',
    title: 'Técnico Electromecánico',
    company: 'Lafayette',
    description: 'Mantenimiento electromecánico industrial, programación de PLCs y automatización de procesos en línea de producción.',
  },
]

export const education = [
  { year: '2025', title: 'Especialización en Desarrollo de Software', institution: 'Profundización en arquitectura de aplicaciones y buenas prácticas' },
  { year: '2025', title: 'Bootcamp Fullstack', institution: 'Formación intensiva en React, Node.js, bases de datos y despliegue' },
  { year: '2021', title: 'Ingeniería Mecatrónica', institution: 'Universidad TEINCO — Integración de mecánica, electrónica y programación' },
  { year: '2017', title: 'Tecnólogo en Automatización Mecatrónica', institution: 'SENA — Automatización industrial, PLCs y control de procesos' },
]

export const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
]