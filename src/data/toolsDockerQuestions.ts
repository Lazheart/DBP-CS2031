import type { QuizQuestion } from '../components/QuizzModal'

export interface DockerSubModule {
    id: string
    title: string
    color: string
    questions: QuizQuestion[]
}

export const dockerSubModules: DockerSubModule[] = [
    {
        id: 'que-es-docker',
        title: '¿Qué es Docker?',
        color: '#2496ED',
        questions: [
            {
                question: '¿Qué es Docker?',
                options: [
                    'Un sistema operativo',
                    'Una plataforma de contenerización',
                    'Un lenguaje de programación',
                    'Una base de datos',
                ],
                correct: 1,
                explanation: 'Docker es una plataforma de software que permite crear, probar e implementar aplicaciones rápidamente mediante contenedores.',
            },
            {
                question: '¿Cuál es la principal ventaja de utilizar contenedores en lugar de máquinas virtuales?',
                options: [
                    'Los contenedores incluyen su propio sistema operativo completo (Guest OS)',
                    'Los contenedores consumen menos recursos al compartir el kernel del sistema operativo anfitrión',
                    'Las máquinas virtuales son más rápidas de iniciar',
                    'Los contenedores no requieren de software para ejecutarse',
                ],
                correct: 1,
                explanation: 'Los contenedores comparten el kernel del host, lo que los hace más ligeros, rápidos y eficientes en recursos en comparación con las máquinas virtuales.',
            },
            {
                question: '¿Qué soluciona principalmente Docker en el desarrollo de software?',
                options: [
                    'El problema de "¿Por qué mi código no compila?"',
                    'El problema de "Funciona en mi máquina"',
                    'La falta de lenguajes de programación',
                    'La necesidad de tener múltiples monitores',
                ],
                correct: 1,
                explanation: 'Docker asegura que el entorno de ejecución sea idéntico en desarrollo, pruebas y producción, eliminando las inconsistencias de entorno.',
            },
            {
                question: '¿Qué es Docker Hub?',
                options: [
                    'Un editor de código para Docker',
                    'Un sistema operativo basado en Linux',
                    'Un registro público y oficial donde se almacenan y comparten imágenes de Docker',
                    'Un comando de la terminal',
                ],
                correct: 2,
                explanation: 'Docker Hub es un servicio de registro en la nube que permite encontrar y compartir imágenes de contenedores con tu equipo y la comunidad.',
            },
            {
                question: '¿Qué relación existe entre una imagen y un contenedor?',
                options: [
                    'Son exactamente lo mismo',
                    'Una imagen es una instancia en ejecución de un contenedor',
                    'Un contenedor es una instancia en ejecución de una imagen',
                    'Un contenedor sirve para crear múltiples imágenes',
                ],
                correct: 2,
                explanation: 'Una imagen es una plantilla inmutable con las instrucciones para crear un contenedor. El contenedor es la instancia viva (en ejecución) de esa imagen.',
            }
        ]
    },
    {
        id: 'imagenes-contenedores',
        title: 'Imágenes y Contenedores',
        color: '#2496ED',
        questions: [
            {
                question: '¿Qué comando se utiliza para descargar una imagen desde Docker Hub sin ejecutarla?',
                options: [
                    'docker get',
                    'docker pull',
                    'docker download',
                    'docker fetch',
                ],
                correct: 1,
                explanation: 'docker pull descarga una imagen desde un registro (como Docker Hub) a tu máquina local.',
            },
            {
                question: '¿Qué hace el comando "docker run"?',
                options: [
                    'Crea y ejecuta un contenedor a partir de una imagen',
                    'Solo crea un contenedor sin iniciarlo',
                    'Borra todos los contenedores en ejecución',
                    'Sube una imagen a Docker Hub',
                ],
                correct: 0,
                explanation: 'docker run busca la imagen localmente (o la descarga si no existe) y luego crea y arranca un contenedor a partir de ella.',
            },
            {
                question: '¿Qué comando te permite ver únicamente los contenedores que se están ejecutando actualmente?',
                options: [
                    'docker list',
                    'docker containers',
                    'docker ps',
                    'docker show',
                ],
                correct: 2,
                explanation: 'docker ps lista todos los contenedores que están en ejecución. Para ver todos (incluyendo detenidos), se usa docker ps -a.',
            },
            {
                question: '¿Cuál es la diferencia entre "docker rm" y "docker rmi"?',
                options: [
                    'docker rm elimina imágenes y docker rmi elimina contenedores',
                    'docker rm elimina contenedores y docker rmi elimina imágenes',
                    'Ambos eliminan imágenes pero de diferentes formas',
                    'docker rmi elimina todos los archivos de tu computadora',
                ],
                correct: 1,
                explanation: 'rm (remove) se usa para eliminar contenedores, mientras que rmi (remove image) se utiliza para eliminar imágenes locales.',
            },
            {
                question: '¿Qué comando se utiliza para detener un contenedor en ejecución?',
                options: [
                    'docker pause',
                    'docker stop',
                    'docker kill',
                    'docker halt',
                ],
                correct: 1,
                explanation: 'docker stop envía una señal para que el contenedor se detenga de forma segura, permitiendo que finalice sus procesos.',
            }
        ]
    },
    {
        id: 'dockerfile',
        title: 'Dockerfile',
        color: '#2496ED',
        questions: [
            {
                question: '¿Qué es un Dockerfile?',
                options: [
                    'Un archivo de texto que contiene las instrucciones para construir una imagen de Docker',
                    'Un archivo comprimido con el código fuente',
                    'Un ejecutable que inicia el contenedor',
                    'Una base de datos de Docker',
                ],
                correct: 0,
                explanation: 'Un Dockerfile es un script con una serie de instrucciones (comandos) que Docker utiliza para crear una imagen de forma automatizada.',
            },
            {
                question: '¿Qué instrucción del Dockerfile define la imagen base sobre la que se construirá?',
                options: [
                    'START',
                    'BASE',
                    'INIT',
                    'FROM',
                ],
                correct: 3,
                explanation: 'La instrucción FROM es obligatoria y define qué imagen base (ej. node:22, ubuntu) se usará para construir la nueva imagen.',
            },
            {
                question: '¿Para qué sirve el archivo .dockerignore?',
                options: [
                    'Para evitar que los contenedores se ejecuten',
                    'Para especificar qué archivos o directorios deben excluirse al copiar el contexto de construcción a la imagen',
                    'Para ignorar los errores durante la construcción',
                    'Para eliminar imágenes automáticamente',
                ],
                correct: 1,
                explanation: 'Al igual que .gitignore, .dockerignore evita que archivos innecesarios (como node_modules) sean copiados al interior de la imagen, reduciendo su peso.',
            },
            {
                question: '¿Cuál es la diferencia principal entre las instrucciones RUN y CMD en un Dockerfile?',
                options: [
                    'RUN se ejecuta cuando el contenedor arranca, CMD se ejecuta durante la construcción',
                    'RUN se ejecuta durante la construcción de la imagen, CMD define el comando por defecto al iniciar el contenedor',
                    'Ambas hacen exactamente lo mismo',
                    'RUN sirve para descargar imágenes, CMD para borrarlas',
                ],
                correct: 1,
                explanation: 'RUN ejecuta comandos en una nueva capa durante el "docker build" (ej. instalar dependencias). CMD indica qué comando se ejecutará cuando inicies el contenedor.',
            },
            {
                question: '¿Qué función cumple la instrucción EXPOSE?',
                options: [
                    'Publica la aplicación en internet inmediatamente',
                    'Expone un directorio del host al contenedor',
                    'Documenta qué puertos utilizará el contenedor, indicando dónde escucha la aplicación',
                    'Abre un agujero de seguridad intencional',
                ],
                correct: 2,
                explanation: 'EXPOSE es principalmente informativa; le dice a Docker y a los usuarios que el contenedor escuchará en el puerto especificado en tiempo de ejecución.',
            }
        ]
    },
    {
        id: 'docker-compose',
        title: 'Docker Compose',
        color: '#2496ED',
        questions: [
            {
                question: '¿Qué problema principal resuelve Docker Compose?',
                options: [
                    'Permite escribir código en múltiples lenguajes',
                    'Simplifica la orquestación y el arranque de aplicaciones multi-contenedor',
                    'Reemplaza por completo el uso del Dockerfile',
                    'Sirve para compilar el kernel de Linux',
                ],
                correct: 1,
                explanation: 'Docker Compose permite definir y ejecutar aplicaciones con múltiples contenedores (ej. frontend, backend, base de datos) usando un único archivo de configuración.',
            },
            {
                question: '¿Qué nombre suele tener el archivo de configuración utilizado por Docker Compose?',
                options: [
                    'Dockerfile.compose',
                    'compose.yaml o docker-compose.yml',
                    'config.json',
                    'docker-setup.xml',
                ],
                correct: 1,
                explanation: 'El archivo por defecto se llama compose.yaml (anteriormente docker-compose.yml), el cual utiliza la sintaxis YAML para definir los servicios.',
            },
            {
                question: '¿Qué comando de Docker Compose se utiliza para crear e iniciar todos los contenedores definidos en el archivo?',
                options: [
                    'docker compose start',
                    'docker compose run all',
                    'docker compose up',
                    'docker compose build',
                ],
                correct: 2,
                explanation: 'docker compose up lee el archivo compose.yaml, crea las redes, volúmenes y arranca todos los servicios o contenedores definidos.',
            },
            {
                question: '¿Qué hace la bandera "-d" en el comando "docker compose up -d"?',
                options: [
                    'Elimina los contenedores (delete)',
                    'Ejecuta los contenedores en segundo plano (detached mode)',
                    'Descarga las imágenes (download)',
                    'Depura los errores (debug)',
                ],
                correct: 1,
                explanation: 'El modo "detached" (-d) permite que los contenedores se ejecuten en segundo plano, liberando la terminal para seguir usándola.',
            },
            {
                question: '¿Cómo se comunican por defecto los servicios (contenedores) dentro de un mismo archivo de Docker Compose?',
                options: [
                    'No pueden comunicarse entre sí por razones de seguridad',
                    'Usando las direcciones IP públicas de cada contenedor',
                    'A través de una red interna que Docker Compose crea automáticamente, resolviéndose por el nombre del servicio',
                    'Únicamente si se exponen todos los puertos al host',
                ],
                correct: 2,
                explanation: 'Docker Compose crea una red interna por defecto donde los contenedores pueden comunicarse entre sí utilizando el nombre del servicio como DNS (ej. http://backend:8080).',
            }
        ]
    },
    {
        id: 'volumenes-networking',
        title: 'Volúmenes y Networking',
        color: '#2496ED',
        questions: [
            {
                question: '¿Por qué los datos generados dentro de un contenedor pueden desaparecer si este es eliminado?',
                options: [
                    'Porque Docker tiene un bug conocido',
                    'Porque el sistema de archivos de un contenedor es efímero y se asocia a su ciclo de vida',
                    'Porque es necesario pagar una licencia de Docker para guardar datos',
                    'Porque los datos siempre se envían a la nube',
                ],
                correct: 1,
                explanation: 'Por defecto, los datos creados dentro de un contenedor solo existen mientras el contenedor exista. Si se elimina el contenedor, se pierde la capa de lectura/escritura.',
            },
            {
                question: '¿Qué es un Docker Volume?',
                options: [
                    'El volumen del sonido de la terminal',
                    'Un mecanismo manejado por Docker para persistir datos generados por un contenedor',
                    'Una imagen de gran tamaño',
                    'Un tipo de red virtual',
                ],
                correct: 1,
                explanation: 'Los volúmenes son el mecanismo preferido y gestionado por Docker para conservar la persistencia de datos más allá del ciclo de vida de un contenedor.',
            },
            {
                question: '¿Cuál es la principal diferencia entre un "Bind mount" y un "Volume" en Docker?',
                options: [
                    'Los Bind mounts dependen de una ruta específica en el sistema de archivos del host, mientras que los Volumes son gestionados completamente por Docker',
                    'No existe diferencia, son sinónimos',
                    'Los Bind mounts solo funcionan en Windows y los Volumes en Linux',
                    'Los Volumes son más lentos y menos seguros',
                ],
                correct: 0,
                explanation: 'Un bind mount asocia una ruta exacta de tu máquina (ej. /home/user/app) al contenedor. Un volumen reside en una ruta interna de Docker (/var/lib/docker/volumes/) gestionada por este.',
            },
            {
                question: '¿Qué significa el mapeo de puertos "-p 8080:3000" en Docker?',
                options: [
                    'Mapea el puerto 3000 del host al puerto 8080 del contenedor',
                    'Mapea el puerto 8080 de tu máquina (host) al puerto 3000 del contenedor',
                    'Abre los puertos desde el 3000 hasta el 8080',
                    'Bloquea tanto el puerto 8080 como el 3000 por seguridad',
                ],
                correct: 1,
                explanation: 'La sintaxis es "puerto_host:puerto_contenedor". En este caso, el tráfico que llega al puerto 8080 de tu PC será redirigido al puerto 3000 dentro del contenedor.',
            },
            {
                question: '¿Qué papel juega el DNS interno de Docker en las redes (networks) personalizadas?',
                options: [
                    'Bloquea el acceso a internet para los contenedores',
                    'Permite que los contenedores dentro de la misma red se comuniquen utilizando su nombre de contenedor en lugar de su dirección IP',
                    'Convierte archivos de texto en imágenes',
                    'Descarga automáticamente dependencias de la web',
                ],
                correct: 1,
                explanation: 'El DNS interno de Docker facilita la comunicación; si tienes un contenedor llamado "db", otro contenedor en la misma red puede conectarse a él apuntando a la dirección "db".',
            }
        ]
    }
]
