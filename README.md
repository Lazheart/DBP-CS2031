# Desarrollo Basado en Plataformas (CS2031)

Este repositorio contiene el código fuente de la pagina web del Curso Desarrollo Basado en Plataformas, impartido por la Universidad de Ingenieria y Tecnologia (UTEC).

Esta pagina esta desarrollada por estudiantes con el fin de apoyar a personas que estes cursando la materia y/o tengan interes en el desarrollo de web.
## Topicos Abordados

Con el fin de cubrir los temas se decidio separar en 4 modulos principales los temas abordados en la materia:


1. Herramientas de Desarrollo 
    * Git
    * Docker
    * Postman
    * Issues
    * Pull Requests 
2. Backend : Spring Boot
    * JWT
    * DTO
    * SMTP
    * CORS
    * Swagger-UI
3. Frontend : React
    * Axios
    * React Router
    * Local Storage & Session Storage
4. Github Actions y AWS
    * Github Pages
    * Github Actions
    * AWS EC2
    * AWS S3
    * AWS Amplify
    * AWS Load Balancer

Se recomienda visitar [1](#-1-Herramientas-de-Desarrollo) para poder avanzar sin problemas con el resto de modulos.

## Arquitectura Empleada

Para el desarrollo de esta página web se empleó **React** como biblioteca principal para la construcción de la interfaz de usuario, junto con **Vite** como herramienta de desarrollo y compilación. El proyecto utiliza **TypeScript** para garantizar un código más seguro y estructurado, y **TailwindCSS** para la implementación de los estilos y el diseño visual de la aplicación.

La estructura del proyecto se organiza de la siguiente manera:

```bash
src/
  ├── assets/       # Recursos multimedia, imágenes y fuentes
  ├── components/   # Componentes reutilizables de la interfaz
  ├── hooks/        # Hooks personalizados y lógica de persistencia local
  ├── pages/        # Páginas y vistas principales de la aplicación
  ├── App.tsx       # Componente raíz de la aplicación
  ├── main.tsx      # Punto de entrada de la aplicación
  └── index.css     # Estilos globales
```

Se adoptó esta arquitectura con el objetivo de mantener una separación clara de responsabilidades, facilitando la organización, escalabilidad y mantenibilidad del código. La interfaz se encuentra dividida en componentes reutilizables y páginas independientes, mientras que la lógica específica y la persistencia de datos se gestionan mediante **hooks personalizados**.

Debido a la naturaleza del proyecto, no se requiere un servidor ni una base de datos para almacenar información de los usuarios. En su lugar, la información se almacena localmente mediante la API de **LocalStorage** del navegador, lo que permite conservar el progreso entre sesiones sin enviar los datos a servicios externos.


# Contribuyentes

Se agradece a los estudiantes que han contribuido en el desarrollo de esta página:

- [Romulo](https://github.com/lazheart)
- [Salvador](https://github.com/Eduardo-Gv17)
- [Quieres contribuir?](https://github.com/)

# Contribuciones

Se reciben con agrado las contribuciones. Por favor, si deseas contribuir, crea un fork del repositorio y envía un Pull Request.

# Licencia

Este proyecto es de código abierto y está licenciado bajo la licencia APACHE 2.0.
