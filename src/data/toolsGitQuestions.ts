import type { QuizQuestion } from '../components/QuizzModal'

export interface GitSubModule {
    id: string
    title: string
    color: string
    questions: QuizQuestion[]
}

export const gitSubModules: GitSubModule[] = [
    {
        id: 'que-es-git',
        title: '¿Qué es Git?',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué es Git?',
                options: [
                    'Un sistema operativo',
                    'Un sistema de control de versiones distribuido',
                    'Un lenguaje de programación',
                    'Una plataforma para alojar páginas web',
                ],
                correct: 1,
                explanation:
                    'Git es un sistema de control de versiones distribuido que permite registrar, organizar y gestionar los cambios realizados en un proyecto.',
            },
            {
                question: '¿Cuál es el principal objetivo de Git?',
                options: [
                    'Diseñar interfaces gráficas',
                    'Ejecutar aplicaciones en la nube',
                    'Gestionar y controlar los cambios de un proyecto',
                    'Crear bases de datos',
                ],
                correct: 2,
                explanation:
                    'Git permite registrar los cambios de un proyecto y mantener un historial que facilita el seguimiento, recuperación y colaboración sobre el código.',
            },
            {
                question: '¿Qué significa que Git sea un sistema de control de versiones distribuido?',
                options: [
                    'Que solo funciona conectado a internet',
                    'Que cada desarrollador puede tener una copia completa del repositorio',
                    'Que los archivos se almacenan únicamente en GitHub',
                    'Que solo puede ser utilizado por equipos grandes',
                ],
                correct: 1,
                explanation:
                    'Git es distribuido porque cada repositorio local contiene su propio historial y puede trabajar con él sin depender constantemente de un servidor remoto.',
            },
            {
                question: '¿Cuál es la diferencia principal entre Git y GitHub?',
                options: [
                    'Git es un sistema de control de versiones y GitHub es una plataforma que permite alojar y colaborar sobre repositorios',
                    'Git y GitHub son exactamente lo mismo',
                    'GitHub reemplaza completamente a Git',
                    'Git solo funciona para proyectos privados',
                ],
                correct: 0,
                explanation:
                    'Git es la herramienta de control de versiones. GitHub es una plataforma que utiliza Git para alojar repositorios y proporcionar funcionalidades de colaboración.',
            },
            {
                question: '¿Qué problema ayuda a resolver Git en un proyecto de software?',
                options: [
                    'La falta de un lenguaje de programación',
                    'La necesidad de instalar un sistema operativo',
                    'La dificultad de controlar los cambios realizados en los archivos',
                    'La necesidad de diseñar una interfaz',
                ],
                correct: 2,
                explanation:
                    'Git permite mantener un historial de cambios, saber qué se modificó y recuperar versiones anteriores cuando sea necesario.',
            },
        ],
    },

    {
        id: 'como-funciona-git',
        title: '¿Cómo funciona Git?',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué es un repositorio en Git?',
                options: [
                    'Una carpeta que contiene únicamente imágenes',
                    'Un espacio donde Git almacena los archivos y el historial de cambios de un proyecto',
                    'Una cuenta de GitHub',
                    'Un servidor dedicado exclusivamente a Git',
                ],
                correct: 1,
                explanation:
                    'Un repositorio Git contiene los archivos del proyecto junto con la información necesaria para registrar y gestionar su historial.',
            },
            {
                question: '¿Qué representa un commit en Git?',
                options: [
                    'Una conexión a internet',
                    'Una versión o conjunto de cambios registrados en el historial',
                    'Una rama remota',
                    'Un archivo temporal',
                ],
                correct: 1,
                explanation:
                    'Un commit representa un conjunto de cambios registrados en el historial del repositorio en un momento determinado.',
            },
            {
                question: '¿Qué área contiene los cambios preparados para el siguiente commit?',
                options: [
                    'Working Directory',
                    'Staging Area',
                    'Remote Repository',
                    'GitHub Pages',
                ],
                correct: 1,
                explanation:
                    'La Staging Area, también llamada índice, contiene los cambios que han sido seleccionados para incluirse en el siguiente commit.',
            },
            {
                question: '¿Qué representa el Working Directory?',
                options: [
                    'Los archivos del proyecto tal como se encuentran actualmente en nuestra carpeta de trabajo',
                    'El historial completo de commits',
                    'El repositorio remoto',
                    'Las ramas eliminadas',
                ],
                correct: 0,
                explanation:
                    'El Working Directory es el estado actual de los archivos sobre los que estamos trabajando localmente.',
            },
            {
                question: '¿Cuál es el flujo básico para registrar cambios en Git?',
                options: [
                    'commit → add → push',
                    'push → commit → add',
                    'modificar → add → commit',
                    'merge → push → add',
                ],
                correct: 2,
                explanation:
                    'Un flujo básico consiste en modificar los archivos, añadir los cambios a la Staging Area con git add y finalmente registrarlos mediante git commit.',
            },
        ],
    },

    {
        id: 'comandos-basicos-git',
        title: 'Comandos Básicos de Git',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué comando se utiliza para inicializar un repositorio Git?',
                options: [
                    'git start',
                    'git init',
                    'git create',
                    'git repository',
                ],
                correct: 1,
                explanation:
                    'git init inicializa un nuevo repositorio Git en el directorio actual.',
            },
            {
                question: '¿Para qué sirve git status?',
                options: [
                    'Para eliminar todos los commits',
                    'Para mostrar el estado actual del repositorio y los cambios detectados',
                    'Para crear una nueva rama',
                    'Para subir cambios a GitHub',
                ],
                correct: 1,
                explanation:
                    'git status permite consultar el estado del repositorio, incluyendo archivos modificados, archivos preparados y archivos que todavía no están siendo rastreados.',
            },
            {
                question: '¿Qué hace el comando git add?',
                options: [
                    'Elimina archivos del repositorio',
                    'Prepara cambios para el siguiente commit',
                    'Crea automáticamente un commit',
                    'Descarga un repositorio remoto',
                ],
                correct: 1,
                explanation:
                    'git add mueve los cambios seleccionados a la Staging Area para que puedan incluirse en el siguiente commit.',
            },
            {
                question: '¿Qué comando permite registrar los cambios preparados en el historial?',
                options: [
                    'git save',
                    'git push',
                    'git commit',
                    'git record',
                ],
                correct: 2,
                explanation:
                    'git commit crea un nuevo registro en el historial con los cambios que se encuentran actualmente en la Staging Area.',
            },
            {
                question: '¿Qué hace git log?',
                options: [
                    'Muestra el historial de commits',
                    'Elimina el historial',
                    'Crea una rama',
                    'Sube archivos a GitHub',
                ],
                correct: 0,
                explanation:
                    'git log permite consultar los commits realizados en el repositorio junto con información como su autor, fecha y mensaje.',
            },
        ],
    },

    {
        id: 'tracking-rebase-squash',
        title: 'Tracking, Rebase y Squash',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué significa que un archivo esté siendo tracked por Git?',
                options: [
                    'Que Git está registrando y controlando los cambios realizados sobre ese archivo',
                    'Que el archivo está almacenado exclusivamente en GitHub',
                    'Que el archivo no puede ser modificado',
                    'Que el archivo ha sido eliminado del proyecto',
                ],
                correct: 0,
                explanation:
                    'Un archivo tracked es conocido por Git y sus modificaciones pueden ser detectadas y gestionadas por el sistema de control de versiones.',
            },
            {
                question: '¿Qué ocurre cuando se ejecuta git add sobre un archivo nuevo?',
                options: [
                    'El archivo se elimina',
                    'El archivo pasa a estar preparado en la Staging Area',
                    'El archivo se convierte automáticamente en un commit',
                    'El archivo se sube automáticamente a GitHub',
                ],
                correct: 1,
                explanation:
                    'git add prepara el archivo para el siguiente commit. En el caso de un archivo nuevo, también hace que Git comience a rastrearlo cuando ese cambio se registra.',
            },
            {
                question: '¿Qué es un rebase en Git?',
                options: [
                    'Una operación que elimina completamente una rama',
                    'Una operación que reaplica commits sobre otra base para reorganizar el historial',
                    'Una forma de subir archivos a GitHub',
                    'Un comando para crear un repositorio',
                ],
                correct: 1,
                explanation:
                    'git rebase permite tomar commits y reaplicarlos sobre otra base, lo que puede producir un historial más lineal y ordenado.',
            },
            {
                question: '¿Qué significa hacer squash de commits?',
                options: [
                    'Eliminar todos los cambios de una rama',
                    'Convertir una rama en una rama remota',
                    'Combinar varios commits en uno solo',
                    'Copiar todos los archivos a otra carpeta',
                ],
                correct: 2,
                explanation:
                    'Squash consiste en combinar varios commits en uno solo, generalmente para mantener un historial más limpio y fácil de revisar.',
            },
            {
                question: '¿Cuál es una razón común para utilizar squash antes de integrar una funcionalidad?',
                options: [
                    'Para eliminar el repositorio',
                    'Para reducir varios commits pequeños de trabajo en un commit más significativo',
                    'Para impedir que otros desarrolladores accedan al código',
                    'Para convertir Git en GitHub',
                ],
                correct: 1,
                explanation:
                    'Squash puede utilizarse para agrupar commits pequeños o intermedios en un commit final que represente mejor una funcionalidad o cambio completo.',
            },
        ],
    },

    {
        id: 'branches-merging',
        title: 'Branches y Merging',
        color: '#C94747',
        questions: [
            {
                question: '¿Qué es una branch en Git?',
                options: [
                    'Una copia física del computador',
                    'Una línea independiente de desarrollo dentro del repositorio',
                    'Un repositorio remoto',
                    'Un archivo de configuración',
                ],
                correct: 1,
                explanation:
                    'Una branch permite mantener una línea independiente de desarrollo, facilitando trabajar en funcionalidades o cambios sin modificar directamente otra rama.',
            },
            {
                question: '¿Para qué se utilizan normalmente las branches?',
                options: [
                    'Para separar diferentes funcionalidades o líneas de trabajo',
                    'Para reemplazar los commits',
                    'Para eliminar el historial del proyecto',
                    'Para evitar utilizar Git',
                ],
                correct: 0,
                explanation:
                    'Las branches permiten separar diferentes funcionalidades, correcciones o experimentos, manteniendo el trabajo organizado dentro del mismo repositorio.',
            },
            {
                question: '¿Qué comando permite crear una nueva branch?',
                options: [
                    'git branch nombre',
                    'git create nombre',
                    'git new-branch nombre',
                    'git make nombre',
                ],
                correct: 0,
                explanation:
                    'git branch nombre crea una nueva branch con el nombre indicado.',
            },
            {
                question: '¿Qué significa hacer merge de una branch?',
                options: [
                    'Eliminar una branch automáticamente',
                    'Integrar los cambios de una branch en otra',
                    'Convertir una branch local en repositorio',
                    'Reemplazar todos los commits del proyecto',
                ],
                correct: 1,
                explanation:
                    'Un merge integra los cambios realizados en una branch dentro de otra branch, permitiendo combinar diferentes líneas de desarrollo.',
            },
            {
                question: '¿Qué puede ocurrir si dos branches modifican las mismas líneas de un archivo?',
                options: [
                    'Git siempre elimina ambos cambios',
                    'Git puede detectar un conflicto que debe resolverse manualmente',
                    'Git impide realizar commits',
                    'Git elimina automáticamente una de las branches',
                ],
                correct: 1,
                explanation:
                    'Cuando dos branches modifican las mismas partes de un archivo de forma incompatible, Git puede producir un conflicto que debe ser resuelto antes de completar el merge.',
            },
        ],
    },
]