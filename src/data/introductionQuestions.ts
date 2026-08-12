import type { QuizQuestion } from '../components/QuizzModal'

export interface SubModule {
    id: string
    title: string
    color: string
    questions: QuizQuestion[]
}

export const introSubModules: SubModule[] = [
    {
        id: 'intro-dbp',
        title: 'Intro a DBP',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué significa la sigla DBP en el contexto de este curso?',
                options: [
                    'Database Programming',
                    'Desarrollo Basado en Plataformas',
                    'Distributed Backend Processing',
                    'Dynamic Build Pipeline',
                ],
                correct: 1,
                explanation:
                    'DBP significa Desarrollo Basado en Plataformas, un enfoque que aprovecha herramientas y servicios para construir aplicaciones de manera organizada y escalable.',
            },
            {
                question: '¿Cuál es el principal objetivo del Desarrollo Basado en Plataformas?',
                options: [
                    'Desarrollar aplicaciones de escritorio',
                    'Construir hardware personalizado',
                    'Aprovechar herramientas y servicios para construir aplicaciones organizadas y escalables',
                    'Reemplazar los lenguajes de programación tradicionales',
                ],
                correct: 2,
                explanation:
                    'El DBP busca aprovechar diferentes herramientas, servicios y tecnologías para construir aplicaciones de manera organizada, eficiente y escalable.',
            },
            {
                question: '¿Cuál de los siguientes NO es un tema principal del curso DBP?',
                options: ['APIs', 'Bases de datos relacionales', 'Frameworks', 'Inteligencia Artificial avanzada'],
                correct: 3,
                explanation:
                    'El curso cubre APIs, bases de datos relacionales, frameworks y aplicaciones web. La IA avanzada no es un tema central de este curso.',
            },
            {
                question: '¿Para qué sirven las APIs de terceros en el contexto del DBP?',
                options: [
                    'Para reemplazar las bases de datos',
                    'Para integrar servicios y funcionalidades desarrolladas por otras plataformas',
                    'Para escribir código más rápido',
                    'Para diseñar interfaces gráficas',
                ],
                correct: 1,
                explanation:
                    'Las APIs de terceros permiten integrar servicios y funcionalidades ya desarrolladas por otras plataformas, evitando construirlas desde cero.',
            },
            {
                question: '¿Qué se espera que los estudiantes logren al finalizar el curso?',
                options: [
                    'Solo aprender un lenguaje de programación',
                    'Diseñar hardware embebido',
                    'Tener una base sólida para desarrollar aplicaciones usando APIs, bases de datos y frameworks',
                    'Crear sistemas operativos',
                ],
                correct: 2,
                explanation:
                    'Al finalizar el curso se espera que los estudiantes tengan una base sólida para desarrollar aplicaciones utilizando APIs, bases de datos y frameworks.',
            },
        ],
    },
    {
        id: 'que-es-framework',
        title: 'Qué es un Framework',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué es un framework en el desarrollo de software?',
                options: [
                    'Un lenguaje de programación nuevo',
                    'Un conjunto de herramientas, bibliotecas y estructuras que proporciona una base para desarrollar aplicaciones',
                    'Un tipo de base de datos',
                    'Un servidor web dedicado',
                ],
                correct: 1,
                explanation:
                    'Un framework es un conjunto de herramientas, bibliotecas y estructuras que proporciona una base para desarrollar aplicaciones.',
            },
            {
                question: '¿Cuál es una ventaja principal de usar un framework?',
                options: [
                    'Elimina la necesidad de escribir código',
                    'Permite construir hardware',
                    'Evita construir ciertas funcionalidades desde cero y ayuda a organizar el código',
                    'Reemplaza a las bases de datos',
                ],
                correct: 2,
                explanation:
                    'Los frameworks permiten evitar construir determinadas funcionalidades desde cero y ayudan a organizar el código de una aplicación.',
            },
            {
                question: '¿Para qué áreas del desarrollo existen frameworks?',
                options: [
                    'Solo para frontend',
                    'Solo para backend',
                    'Solo para bases de datos',
                    'Para frontend, backend y otras áreas del desarrollo de software',
                ],
                correct: 3,
                explanation:
                    'Dependiendo de su propósito, existen frameworks orientados al desarrollo del frontend, backend y otras áreas del desarrollo de software.',
            },
            {
                question: '¿Qué problema principal resuelve un framework?',
                options: [
                    'La necesidad de aprender programación',
                    'La falta de computadoras en el equipo',
                    'La complejidad de construir todo desde cero y la falta de organización del código',
                    'La velocidad del internet',
                ],
                correct: 2,
                explanation:
                    'Los frameworks resuelven la necesidad de construir funcionalidades comunes desde cero y ayudan a mantener el código organizado.',
            },
            {
                question: '¿Cuál de los siguientes es un ejemplo de framework para backend?',
                options: ['React', 'Vue.js', 'Spring Boot', 'Bootstrap'],
                correct: 2,
                explanation:
                    'Spring Boot es un framework orientado al desarrollo backend en Java, mientras que React y Vue.js son frameworks de frontend y Bootstrap es para CSS.',
            },
        ],
    },
    {
        id: 'que-es-api',
        title: 'Qué es una API',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué significa la sigla API?',
                options: [
                    'Advanced Programming Interface',
                    'Application Programming Interface',
                    'Automated Process Integration',
                    'Application Protocol Infrastructure',
                ],
                correct: 1,
                explanation:
                    'API significa Application Programming Interface (Interfaz de Programación de Aplicaciones).',
            },
            {
                question: 'En la analogía del restaurante, ¿qué representa la API?',
                options: [
                    'La cocina',
                    'Los clientes',
                    'El mesero que recibe pedidos y los lleva a la cocina',
                    'La comida servida',
                ],
                correct: 2,
                explanation:
                    'En la analogía del restaurante, la API actúa como el mesero: recibe las solicitudes del cliente y las lleva al servidor (cocina), luego regresa con la respuesta.',
            },
            {
                question: '¿Qué permite hacer una API en el desarrollo web?',
                options: [
                    'Diseñar interfaces visuales',
                    'Solicitar información o ejecutar acciones en un servidor sin conocer su estructura interna',
                    'Escribir código más corto',
                    'Reemplazar las bases de datos',
                ],
                correct: 1,
                explanation:
                    'Una API permite a los clientes solicitar recursos o ejecutar acciones en una aplicación sin necesidad de conocer su estructura interna.',
            },
            {
                question: '¿Cuál es un ejemplo de uso de una API en una aplicación web?',
                options: [
                    'Cambiar el color del fondo de la página',
                    'Obtener información de usuarios almacenada en una base de datos',
                    'Instalar un sistema operativo',
                    'Configurar el router de red',
                ],
                correct: 1,
                explanation:
                    'Una aplicación web puede utilizar una API para obtener información de usuarios, registrar nuevos datos o consultar información almacenada en una base de datos.',
            },
            {
                question: '¿Qué son las reglas y mecanismos que define una API?',
                options: [
                    'Los colores de la interfaz',
                    'El hardware del servidor',
                    'El conjunto de especificaciones que permite la comunicación entre diferentes aplicaciones',
                    'La velocidad de la conexión a internet',
                ],
                correct: 2,
                explanation:
                    'Una API es un conjunto de reglas y mecanismos que permite que diferentes aplicaciones o componentes se comuniquen entre sí.',
            },
        ],
    },
    {
        id: 'url-uri',
        title: 'URL & URI',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué significa URI?',
                options: [
                    'Uniform Resource Interface',
                    'Universal Resource Indicator',
                    'Uniform Resource Identifier',
                    'Unique Resource Index',
                ],
                correct: 2,
                explanation:
                    'URI significa Uniform Resource Identifier (Identificador Uniforme de Recursos), usado para identificar un recurso dentro de un contexto.',
            },
            {
                question: '¿Cuál es la diferencia principal entre URI y URL?',
                options: [
                    'No hay diferencia, son lo mismo',
                    'Una URL es un tipo de URI que, además de identificar, proporciona cómo localizar el recurso',
                    'Una URI siempre requiere una contraseña',
                    'Una URL solo funciona en redes locales',
                ],
                correct: 1,
                explanation:
                    'Una URL (Uniform Resource Locator) es un tipo de URI que, además de identificar un recurso, proporciona información sobre cómo localizarlo.',
            },
            {
                question: 'En la URL "https://example.com/usuarios", ¿qué representa "https"?',
                options: [
                    'El nombre del servidor',
                    'La ruta del recurso',
                    'El protocolo utilizado',
                    'El nombre del usuario',
                ],
                correct: 2,
                explanation:
                    'En una URL, el segmento antes de "://" indica el protocolo utilizado para acceder al recurso. En este caso, "https" es el protocolo.',
            },
            {
                question: '¿Cuál de los siguientes es un ejemplo de URL?',
                options: [
                    'usuario@dominio.com',
                    'https://example.com/api/users',
                    'localhost:3000',
                    '/usuarios/perfil',
                ],
                correct: 1,
                explanation:
                    'https://example.com/api/users es una URL completa que incluye protocolo (https), dominio (example.com) y la ruta del recurso (/api/users).',
            },
            {
                question: '¿Para qué sirve la URI en el contexto del desarrollo web?',
                options: [
                    'Para diseñar bases de datos',
                    'Para identificar recursos en la web de forma única',
                    'Para configurar servidores de correo',
                    'Para compilar código fuente',
                ],
                correct: 1,
                explanation:
                    'Las URIs son un concepto fundamental para identificar los recursos en la web de forma única dentro de un contexto determinado.',
            },
        ],
    },
    {
        id: 'protocolos-http',
        title: 'Protocolos y Métodos HTTP',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué significa HTTP?',
                options: [
                    'HyperText Transfer Protocol',
                    'High Traffic Transfer Process',
                    'Hyperlink Text Transfer Program',
                    'Host Transfer Text Protocol',
                ],
                correct: 0,
                explanation:
                    'HTTP significa HyperText Transfer Protocol (Protocolo de Transferencia de HiperTexto), el principal protocolo para la comunicación en la web.',
            },
            {
                question: '¿Qué método HTTP se usa para obtener información?',
                options: ['POST', 'DELETE', 'GET', 'PUT'],
                correct: 2,
                explanation:
                    'El método GET se utiliza para obtener o consultar información desde el servidor sin modificar ningún dato.',
            },
            {
                question: '¿Cuál es la diferencia entre PUT y PATCH?',
                options: [
                    'No hay diferencia',
                    'PUT actualiza toda la información y PATCH solo modifica parcialmente',
                    'PATCH elimina datos y PUT los crea',
                    'PUT es más rápido que PATCH',
                ],
                correct: 1,
                explanation:
                    'PUT se usa para actualizar toda la información de un recurso, mientras que PATCH se usa para modificar parcialmente un recurso existente.',
            },
            {
                question: '¿Qué rol cumple HTTP en una aplicación web?',
                options: [
                    'Diseñar la interfaz gráfica',
                    'Almacenar datos en la base de datos',
                    'Permitir que un cliente envíe solicitudes a un servidor y reciba respuestas',
                    'Compilar el código fuente',
                ],
                correct: 2,
                explanation:
                    'HTTP permite que un cliente (como un navegador) envíe solicitudes a un servidor y reciba respuestas, siendo la base de la comunicación web.',
            },
            {
                question: '¿Qué método HTTP se utiliza para eliminar un recurso?',
                options: ['GET', 'POST', 'PATCH', 'DELETE'],
                correct: 3,
                explanation:
                    'El método DELETE se utiliza para eliminar un recurso específico del servidor.',
            },
        ],
    },
]
