import type { QuizQuestion } from '../components/QuizzModal'

export interface GithubSubModule {
    id: string
    title: string
    color: string
    questions: QuizQuestion[]
}

export const githubSubModules: GithubSubModule[] = [
    {
        id: 'que-es-github',
        title: '¿Qué es GitHub?',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué es GitHub?',
                options: [
                    'Un sistema operativo basado en Linux',
                    'Una plataforma para alojar, gestionar y colaborar en proyectos utilizando Git',
                    'Un lenguaje de programación',
                    'Una base de datos distribuida',
                ],
                correct: 1,
                explanation:
                    'GitHub es una plataforma basada en Git que permite alojar repositorios y proporciona herramientas para colaborar, revisar código, automatizar procesos y gestionar proyectos.',
            },
            {
                question: '¿Cuál es la diferencia principal entre Git y GitHub?',
                options: [
                    'Git es una plataforma web y GitHub es un sistema de control de versiones',
                    'Git es un sistema de control de versiones y GitHub es una plataforma que utiliza Git',
                    'Git y GitHub son exactamente lo mismo',
                    'GitHub reemplaza completamente a Git',
                ],
                correct: 1,
                explanation:
                    'Git es el sistema de control de versiones que funciona localmente. GitHub es una plataforma que permite alojar repositorios Git y añadir funcionalidades de colaboración y gestión.',
            },
            {
                question: '¿Qué es un repositorio en GitHub?',
                options: [
                    'Un servidor físico dedicado a ejecutar aplicaciones',
                    'Un espacio que contiene el código, archivos e historial de un proyecto',
                    'Una cuenta de usuario',
                    'Una herramienta para ejecutar GitHub Actions',
                ],
                correct: 1,
                explanation:
                    'Un repositorio de GitHub contiene los archivos de un proyecto junto con su historial de Git y puede incluir herramientas como Issues, Pull Requests, Actions y Releases.',
            },
            {
                question: '¿Qué información puede contener un repositorio de GitHub además del código?',
                options: [
                    'Solo imágenes',
                    'Issues, Pull Requests, documentación, configuraciones y otros elementos relacionados con el proyecto',
                    'Únicamente archivos ejecutables',
                    'Solo archivos de configuración de Git',
                ],
                correct: 1,
                explanation:
                    'Un repositorio puede contener código y documentación, además de Issues, Pull Requests, workflows, configuraciones, releases y otros elementos relacionados con el desarrollo.',
            },
            {
                question: '¿Cuál es uno de los principales objetivos de GitHub para un equipo de desarrollo?',
                options: [
                    'Reemplazar todos los lenguajes de programación',
                    'Facilitar la colaboración y gestión del código entre desarrolladores',
                    'Eliminar la necesidad de utilizar Git',
                    'Servir exclusivamente como almacenamiento de archivos',
                ],
                correct: 1,
                explanation:
                    'GitHub facilita que varios desarrolladores colaboren sobre un mismo proyecto mediante repositorios, branches, Pull Requests, revisiones de código y herramientas de gestión.',
            },
        ],
    },

    {
        id: 'repositorios-colaboracion',
        title: 'Repositorios y Colaboración',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué diferencia existe entre un repositorio público y uno privado en GitHub?',
                options: [
                    'Los repositorios públicos no pueden utilizar Git',
                    'Los repositorios públicos pueden ser visibles para cualquiera, mientras que los privados restringen el acceso',
                    'Los repositorios privados no permiten realizar commits',
                    'Los repositorios públicos no pueden tener branches',
                ],
                correct: 1,
                explanation:
                    'Un repositorio público puede ser visto por cualquier persona, mientras que un repositorio privado limita su acceso a los usuarios autorizados.',
            },
            {
                question: '¿Qué es un fork en GitHub?',
                options: [
                    'Una copia de un repositorio creada dentro de la misma rama',
                    'Una copia de un repositorio bajo otra cuenta o espacio de GitHub',
                    'Una versión eliminada de un repositorio',
                    'Un tipo de Pull Request',
                ],
                correct: 1,
                explanation:
                    'Un fork crea una copia de un repositorio en otro espacio de GitHub, permitiendo trabajar sobre el proyecto sin modificar directamente el repositorio original.',
            },
            {
                question: '¿Para qué sirve normalmente un fork?',
                options: [
                    'Para trabajar sobre un proyecto sin necesidad de tener permisos de escritura en el repositorio original',
                    'Para eliminar el repositorio original',
                    'Para ejecutar automáticamente los tests',
                    'Para crear un Release',
                ],
                correct: 0,
                explanation:
                    'Los forks son especialmente útiles para contribuir a proyectos donde no tienes permisos de escritura. Puedes realizar cambios en tu copia y posteriormente proponerlos mediante un Pull Request.',
            },
            {
                question: '¿Qué es una branch dentro de un repositorio de GitHub?',
                options: [
                    'Una línea independiente de desarrollo dentro del repositorio',
                    'Un repositorio completamente diferente',
                    'Una cuenta de GitHub',
                    'Una configuración exclusiva de GitHub Actions',
                ],
                correct: 0,
                explanation:
                    'Una branch representa una línea independiente de desarrollo y permite trabajar en funcionalidades o correcciones sin modificar directamente otra rama.',
            },
            {
                question: '¿Por qué es habitual trabajar con branches en un proyecto colaborativo?',
                options: [
                    'Para evitar utilizar commits',
                    'Para separar funcionalidades, correcciones o cambios antes de integrarlos en otra rama',
                    'Para impedir que GitHub almacene el código',
                    'Para convertir un repositorio privado en público',
                ],
                correct: 1,
                explanation:
                    'Las branches permiten que diferentes desarrolladores trabajen en funcionalidades o correcciones de forma independiente antes de integrar los cambios.',
            },
        ],
    },

    {
        id: 'pull-requests-code-review',
        title: 'Pull Requests y Code Review',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué es un Pull Request en GitHub?',
                options: [
                    'Una solicitud para integrar cambios de una branch en otra',
                    'Un comando para descargar Git',
                    'Una forma de eliminar un repositorio',
                    'Un archivo de configuración de GitHub Actions',
                ],
                correct: 0,
                explanation:
                    'Un Pull Request permite proponer cambios realizados en una branch para que sean revisados y posteriormente integrados en otra branch.',
            },
            {
                question: '¿Para qué sirve principalmente un Pull Request?',
                options: [
                    'Para almacenar archivos grandes',
                    'Para revisar y discutir cambios antes de integrarlos al código principal',
                    'Para crear automáticamente una cuenta de GitHub',
                    'Para reemplazar los commits',
                ],
                correct: 1,
                explanation:
                    'Los Pull Requests permiten revisar código, discutir cambios, ejecutar comprobaciones automáticas y decidir si una modificación debe integrarse.',
            },
            {
                question: '¿Qué es un Code Review?',
                options: [
                    'El proceso de revisar los cambios realizados en el código antes de integrarlos',
                    'Una herramienta para compilar aplicaciones',
                    'Una forma de crear una branch',
                    'Un sistema para almacenar imágenes',
                ],
                correct: 0,
                explanation:
                    'Code Review es el proceso mediante el cual uno o varios desarrolladores revisan los cambios realizados para detectar problemas y mejorar la calidad del código.',
            },
            {
                question: '¿Qué puede hacer un desarrollador durante la revisión de un Pull Request?',
                options: [
                    'Solo descargar el repositorio',
                    'Comentar líneas de código, sugerir cambios y aprobar o solicitar modificaciones',
                    'Eliminar automáticamente todas las branches',
                    'Cambiar el lenguaje de programación del proyecto',
                ],
                correct: 1,
                explanation:
                    'GitHub permite realizar comentarios, sugerir cambios, aprobar el Pull Request o solicitar modificaciones antes de permitir su integración.',
            },
            {
                question: '¿Qué puede ocurrir si un Pull Request tiene conflictos con la branch destino?',
                options: [
                    'GitHub elimina automáticamente los cambios',
                    'Los conflictos deben resolverse antes de poder completar correctamente la integración',
                    'El repositorio se convierte en privado',
                    'Se crea automáticamente un nuevo repositorio',
                ],
                correct: 1,
                explanation:
                    'Si existen cambios incompatibles entre las ramas, los conflictos deben resolverse antes de completar la integración del Pull Request.',
            },
        ],
    },

    {
        id: 'issues-projects',
        title: 'Issues y Projects',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué es un Issue en GitHub?',
                options: [
                    'Una herramienta para registrar tareas, errores, ideas o problemas relacionados con un proyecto',
                    'Una imagen de Docker',
                    'Un tipo de branch',
                    'Un archivo ejecutable',
                ],
                correct: 0,
                explanation:
                    'Los Issues permiten registrar y hacer seguimiento de errores, tareas, mejoras, preguntas o ideas relacionadas con un proyecto.',
            },
            {
                question: '¿Para qué sirven las labels en GitHub Issues?',
                options: [
                    'Para clasificar y organizar Issues según diferentes características',
                    'Para ejecutar código automáticamente',
                    'Para crear repositorios',
                    'Para reemplazar los commits',
                ],
                correct: 0,
                explanation:
                    'Las labels permiten clasificar Issues y Pull Requests, por ejemplo utilizando categorías como bug, enhancement, documentation o priority.',
            },
            {
                question: '¿Qué es un milestone en GitHub?',
                options: [
                    'Una forma de agrupar Issues y Pull Requests asociados a un objetivo o etapa del proyecto',
                    'Una rama especial de Git',
                    'Un tipo de usuario',
                    'Un archivo de configuración',
                ],
                correct: 0,
                explanation:
                    'Los milestones permiten agrupar Issues y Pull Requests relacionados con un objetivo, versión o etapa concreta del proyecto.',
            },
            {
                question: '¿Para qué sirve GitHub Projects?',
                options: [
                    'Para gestionar y organizar el trabajo mediante tareas, vistas y diferentes estados',
                    'Para reemplazar Git',
                    'Para ejecutar contenedores Docker',
                    'Para crear cuentas de usuario',
                ],
                correct: 0,
                explanation:
                    'GitHub Projects proporciona herramientas para organizar y gestionar el trabajo de un proyecto mediante elementos como Issues, campos, vistas y diferentes estados.',
            },
            {
                question: '¿Cuál es una diferencia común entre un Issue y un Pull Request?',
                options: [
                    'Un Issue se utiliza principalmente para registrar trabajo o problemas, mientras que un Pull Request propone cambios de código',
                    'Ambos son exactamente lo mismo',
                    'Un Pull Request solo puede contener documentación',
                    'Un Issue siempre modifica directamente la branch principal',
                ],
                correct: 0,
                explanation:
                    'Los Issues sirven para registrar y gestionar trabajo o problemas, mientras que los Pull Requests están orientados a proponer y revisar cambios de código.',
            },
        ],
    },

    {
        id: 'actions-workflows',
        title: 'GitHub Actions y Workflows',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué es GitHub Actions?',
                options: [
                    'Un sistema operativo',
                    'Una plataforma de automatización integrada en GitHub',
                    'Un lenguaje de programación',
                    'Un sistema de bases de datos',
                ],
                correct: 1,
                explanation:
                    'GitHub Actions permite automatizar tareas dentro de los repositorios, como ejecutar tests, construir aplicaciones, analizar código o realizar despliegues.',
            },
            {
                question: '¿Qué es un workflow en GitHub Actions?',
                options: [
                    'Un repositorio independiente',
                    'Un conjunto de trabajos y pasos que define un proceso automatizado',
                    'Una branch especial',
                    'Un Pull Request automático',
                ],
                correct: 1,
                explanation:
                    'Un workflow define un proceso automatizado compuesto por jobs y steps, y normalmente se configura mediante un archivo YAML dentro de .github/workflows.',
            },
            {
                question: '¿Qué puede provocar la ejecución de un workflow?',
                options: [
                    'Eventos como un push, un Pull Request o una ejecución programada',
                    'Únicamente apagar el ordenador',
                    'Solo la creación de un repositorio privado',
                    'La instalación de Git',
                ],
                correct: 0,
                explanation:
                    'Los workflows pueden ejecutarse en respuesta a eventos como push, pull_request, creación de releases o mediante horarios programados.',
            },
            {
                question: '¿Qué es un job en GitHub Actions?',
                options: [
                    'Un conjunto de steps que se ejecutan como parte de un workflow',
                    'Una branch remota',
                    'Un repositorio público',
                    'Una etiqueta de GitHub',
                ],
                correct: 0,
                explanation:
                    'Un job agrupa varios steps que realizan una tarea dentro de un workflow y se ejecuta en un runner.',
            },
            {
                question: '¿Dónde se suelen almacenar los archivos YAML de GitHub Actions?',
                options: [
                    'En la carpeta /actions',
                    'En la carpeta .github/workflows',
                    'En la carpeta /docker',
                    'En la carpeta /src/actions',
                ],
                correct: 1,
                explanation:
                    'GitHub detecta los workflows definidos mediante archivos YAML almacenados normalmente en la carpeta .github/workflows del repositorio.',
            },
        ],
    },

    {
        id: 'releases-seguridad',
        title: 'Releases y Seguridad',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué es un Release en GitHub?',
                options: [
                    'Una versión publicada de un proyecto asociada normalmente a un tag',
                    'Una branch temporal',
                    'Un Issue cerrado',
                    'Un archivo de configuración de Git',
                ],
                correct: 0,
                explanation:
                    'Un Release permite publicar una versión concreta de un proyecto y puede incluir información de la versión, notas y archivos asociados. Normalmente está vinculado a un tag.',
            },
            {
                question: '¿Qué relación existe entre un Tag y un Release?',
                options: [
                    'Un Release puede utilizar un Tag para identificar el commit correspondiente a una versión',
                    'Los Tags solo sirven para eliminar Releases',
                    'No existe ninguna relación',
                    'Un Tag siempre contiene un repositorio completo',
                ],
                correct: 0,
                explanation:
                    'Un tag identifica un punto concreto del historial de Git y un Release de GitHub puede utilizar ese tag para representar una versión publicada del proyecto.',
            },
            {
                question: '¿Qué es Semantic Versioning?',
                options: [
                    'Un sistema de numeración de versiones como MAJOR.MINOR.PATCH',
                    'Un tipo de branch',
                    'Un sistema de permisos de GitHub',
                    'Un formato de archivos YAML',
                ],
                correct: 0,
                explanation:
                    'Semantic Versioning utiliza normalmente el formato MAJOR.MINOR.PATCH para comunicar el tipo de cambios introducidos en una versión.',
            },
            {
                question: '¿Para qué sirven los Secrets en GitHub?',
                options: [
                    'Para almacenar de forma segura información sensible utilizada por workflows',
                    'Para ocultar repositorios públicos',
                    'Para eliminar commits',
                    'Para crear branches automáticamente',
                ],
                correct: 0,
                explanation:
                    'Los Secrets permiten almacenar información sensible, como tokens, claves o credenciales, para utilizarla en workflows sin incluirla directamente en el código.',
            },
            {
                question: '¿Qué herramienta de GitHub puede ayudar a detectar dependencias desactualizadas o vulnerables?',
                options: [
                    'GitHub Pages',
                    'Dependabot',
                    'GitHub Projects',
                    'GitHub Discussions',
                ],
                correct: 1,
                explanation:
                    'Dependabot puede detectar dependencias desactualizadas o vulnerables y ayudar a mantenerlas actualizadas mediante alertas y Pull Requests.',
            },
        ],
    },
]