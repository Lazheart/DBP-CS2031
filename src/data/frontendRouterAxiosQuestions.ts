import type { QuizQuestion } from '../components/QuizzModal'

export interface RouterAxiosSubModule {
    id: string
    title: string
    color: string
    questions: QuizQuestion[]
}

export const frontendRouterAxiosSubModules: RouterAxiosSubModule[] = [
    {
        id: 'react-router-basico',
        title: 'React Router: Rutas Básicas',
        color: '#CA4245',
        questions: [
            {
                question: '¿Para qué sirve React Router en una aplicación de React?',
                options: [
                    'Para hacer peticiones HTTP',
                    'Para manejar la navegación entre distintas "páginas" sin recargar el navegador',
                    'Para gestionar el estado global de la app',
                    'Para estilizar componentes',
                ],
                correct: 1,
                explanation: 'React Router permite construir Single Page Applications donde la URL cambia y se muestra un componente distinto, sin que el navegador recargue toda la página.',
            },
            {
                question: '¿Qué componente envuelve toda la aplicación para habilitar el enrutamiento?',
                options: [
                    '<Route>',
                    '<Link>',
                    '<BrowserRouter>',
                    '<Navigate>',
                ],
                correct: 2,
                explanation: '<BrowserRouter> (o <Router>) provee el contexto de enrutamiento a toda la aplicación, usando la API de History del navegador.',
            },
            {
                question: '¿Qué hace el componente <Route path="/docker" element={<DockerPage />} />?',
                options: [
                    'Redirige automáticamente a /docker',
                    'Define que cuando la URL sea /docker, se renderice el componente DockerPage',
                    'Crea un enlace de navegación',
                    'Bloquea el acceso a la ruta /docker',
                ],
                correct: 1,
                explanation: 'Cada <Route> asocia una ruta (path) con el componente que debe mostrarse cuando la URL coincide con ese patrón.',
            },
            {
                question: '¿Cuál es la diferencia entre usar una etiqueta <a> normal y el componente <Link> de React Router?',
                options: [
                    'No hay ninguna diferencia',
                    '<Link> navega sin recargar la página completa; <a> provoca una recarga completa del navegador',
                    '<a> es más rápido que <Link>',
                    '<Link> solo funciona en móviles',
                ],
                correct: 1,
                explanation: 'Una etiqueta <a> normal hace que el navegador recargue todo el documento. <Link> intercepta la navegación y actualiza la vista sin recargar, manteniendo el estado de la app.',
            },
            {
                question: '¿Qué hook de React Router permite navegar programáticamente (ej. después de enviar un formulario)?',
                options: [
                    'useParams',
                    'useNavigate',
                    'useLocation',
                    'useRoutes',
                ],
                correct: 1,
                explanation: 'useNavigate retorna una función que permite redirigir al usuario a otra ruta desde código, por ejemplo navigate("/login") tras un login exitoso.',
            },
        ],
    },
    {
        id: 'rutas-dinamicas-params',
        title: 'Rutas Dinámicas y Parámetros',
        color: '#CA4245',
        questions: [
            {
                question: '¿Cómo se define una ruta dinámica en React Router, por ejemplo para /productos/:id?',
                options: [
                    'Usando corchetes: /productos/[id]',
                    'Usando dos puntos antes del nombre del parámetro: /productos/:id',
                    'Usando llaves: /productos/{id}',
                    'No es posible crear rutas dinámicas',
                ],
                correct: 1,
                explanation: 'El prefijo ":" indica que ese segmento de la URL es un parámetro dinámico que puede tomar cualquier valor, como el ID de un producto.',
            },
            {
                question: '¿Qué hook se usa para leer los parámetros de una ruta dinámica?',
                options: [
                    'useSearchParams',
                    'useParams',
                    'useContext',
                    'useReducer',
                ],
                correct: 1,
                explanation: 'useParams() retorna un objeto con los valores de los parámetros definidos en la ruta, por ejemplo const { id } = useParams().',
            },
            {
                question: '¿Cuál es la diferencia entre un parámetro de ruta (/productos/:id) y un query param (?ordenar=precio)?',
                options: [
                    'Son exactamente lo mismo',
                    'El parámetro de ruta identifica un recurso específico; el query param suele usarse para filtros, orden o paginación',
                    'Los query params no se pueden usar en React',
                    'Los parámetros de ruta son opcionales, los query params son obligatorios',
                ],
                correct: 1,
                explanation: 'Los parámetros de ruta suelen representar "qué recurso" se pide (ej. el id de un producto), mientras que los query params ajustan cómo se muestra esa información (orden, filtros, página).',
            },
            {
                question: '¿Qué hook permite leer y modificar los query params de la URL?',
                options: [
                    'useSearchParams',
                    'useLocation',
                    'useParams',
                    'useOutlet',
                ],
                correct: 0,
                explanation: 'useSearchParams retorna el objeto de parámetros de búsqueda y una función para actualizarlos, similar a useState pero sincronizado con la URL.',
            },
            {
                question: '¿Qué componente se usa para mostrar una página de "Ruta no encontrada" (404)?',
                options: [
                    'Una <Route path="*" element={<NotFound />} /> como última ruta definida',
                    'React Router no soporta páginas 404',
                    '<Route path="404">',
                    '<ErrorBoundary>',
                ],
                correct: 0,
                explanation: 'El comodín "*" captura cualquier ruta que no haya coincidido con las anteriores, por lo que se usa típicamente para renderizar una página de error 404.',
            },
        ],
    },
    {
        id: 'axios-peticiones',
        title: 'Axios: Peticiones GET/POST',
        color: '#CA4245',
        questions: [
            {
                question: '¿Qué es Axios?',
                options: [
                    'Un framework de componentes visuales',
                    'Una librería para hacer peticiones HTTP desde JavaScript de forma más sencilla que fetch',
                    'Un gestor de estado global',
                    'Una herramienta de enrutamiento',
                ],
                correct: 1,
                explanation: 'Axios es un cliente HTTP basado en promesas que simplifica hacer peticiones a APIs, con características como transformación automática de JSON e interceptores.',
            },
            {
                question: '¿Cómo se hace una petición GET simple con Axios?',
                options: [
                    'axios.get("/api/usuarios")',
                    'axios.fetch("/api/usuarios")',
                    'axios.request.get("/api/usuarios")',
                    'axios("/api/usuarios", "GET")',
                ],
                correct: 0,
                explanation: 'axios.get(url) retorna una promesa que se resuelve con la respuesta; los datos vienen en la propiedad .data de la respuesta.',
            },
            {
                question: '¿Cómo se envía información al servidor con una petición POST usando Axios?',
                options: [
                    'axios.post(url, datos)',
                    'axios.send(url, datos)',
                    'axios.post(datos, url)',
                    'axios.get(url, { body: datos })',
                ],
                correct: 0,
                explanation: 'axios.post(url, datos) envía el segundo argumento como cuerpo (body) de la petición, y Axios lo serializa automáticamente a JSON.',
            },
            {
                question: '¿Qué ventaja tiene Axios frente al fetch nativo del navegador?',
                options: [
                    'Axios convierte automáticamente la respuesta a JSON, mientras que fetch requiere llamar a .json() manualmente',
                    'fetch no puede hacer peticiones POST',
                    'Axios no puede usarse en el navegador',
                    'No hay ninguna diferencia práctica',
                ],
                correct: 0,
                explanation: 'Con fetch hay que hacer response.json() manualmente y manejar los errores HTTP a mano; Axios simplifica esto y rechaza automáticamente la promesa ante errores 4xx/5xx.',
            },
            {
                question: '¿Cómo se maneja un error en una petición con Axios usando async/await?',
                options: [
                    'Con un bloque try/catch alrededor del await axios.get(...)',
                    'Axios no puede fallar, siempre retorna datos válidos',
                    'Usando .then() únicamente, sin manejo de errores',
                    'Los errores se ignoran automáticamente',
                ],
                correct: 0,
                explanation: 'Al usar async/await, un try/catch permite capturar errores de red o respuestas con status de error, que Axios lanza como excepciones.',
            },
        ],
    },
    {
        id: 'interceptores-errores',
        title: 'Interceptores y Manejo de Errores',
        color: '#CA4245',
        questions: [
            {
                question: '¿Qué es un interceptor en Axios?',
                options: [
                    'Un componente visual de React',
                    'Una función que se ejecuta automáticamente antes de que salga una petición o después de recibir una respuesta',
                    'Un tipo especial de ruta',
                    'Un hook de React exclusivo para formularios',
                ],
                correct: 1,
                explanation: 'Los interceptores permiten centralizar lógica común, como agregar un token de autenticación a cada petición o manejar errores 401 de forma global.',
            },
            {
                question: '¿Para qué se usa comúnmente un interceptor de request?',
                options: [
                    'Para agregar automáticamente headers como el token de autenticación en cada petición saliente',
                    'Para cambiar el color de los botones',
                    'Para definir las rutas de la aplicación',
                    'Para renderizar componentes condicionalmente',
                ],
                correct: 0,
                explanation: 'Un interceptor de request es ideal para inyectar headers comunes (como Authorization: Bearer token) sin tener que repetirlo en cada llamada.',
            },
            {
                question: '¿Para qué se usa comúnmente un interceptor de response?',
                options: [
                    'Para manejar de forma centralizada errores como un 401 (no autorizado), por ejemplo cerrando la sesión automáticamente',
                    'Para validar formularios',
                    'Para definir estilos CSS',
                    'Para crear componentes reutilizables',
                ],
                correct: 0,
                explanation: 'Un interceptor de response puede detectar códigos de error específicos (como 401) en cualquier petición y reaccionar globalmente, por ejemplo redirigiendo al login.',
            },
            {
                question: '¿Qué instancia de Axios permite configurar una baseURL común para todas las peticiones?',
                options: [
                    'axios.create({ baseURL: "https://api.miapp.com" })',
                    'axios.config(url)',
                    'axios.base(url)',
                    'No es posible configurar una URL base',
                ],
                correct: 0,
                explanation: 'axios.create() genera una instancia personalizada con configuración por defecto (baseURL, headers, timeout), evitando repetir la URL completa en cada llamada.',
            },
            {
                question: '¿Qué buena práctica de UX se recomienda al hacer peticiones HTTP en un componente de React?',
                options: [
                    'No mostrar nada mientras carga y solo mostrar el resultado final',
                    'Manejar explícitamente los estados de carga (loading), éxito y error para informar al usuario',
                    'Recargar toda la página tras cada petición',
                    'Ignorar los errores del servidor',
                ],
                correct: 1,
                explanation: 'Manejar los tres estados típicos (cargando, éxito, error) evita que el usuario se quede viendo una pantalla vacía o sin retroalimentación cuando algo falla.',
            },
        ],
    },
]