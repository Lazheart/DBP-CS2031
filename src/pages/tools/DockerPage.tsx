import { useState, useEffect } from 'react'
import ProgressBar from '../../components/ProgressBar'
import StepSideBar from '../../components/StepSideBar'
import QuizModal from '../../components/QuizzModal'
import { dockerSubModules } from '../../data/toolsDockerQuestions'
import { useLocalStorage } from '../../hook/SessionStorageManager'

/* ─── Sub-module content ─────────────────────────────────── */

const SubModuleContent = ({ id }: { id: string, lessonId: string }) => {
    switch (id) {
        case 'que-es-docker':
            return (
                <article className="class-article">
                    <h1>¿Qué es Docker?</h1>

                    <h2>Plataforma de Contenerización</h2>
                    <p>
                        Docker es una plataforma de software que permite crear, probar e implementar aplicaciones rápidamente mediante el uso de contenedores.
                    </p>

                    <h2>¿Qué es un Contenedor?</h2>
                    <p>
                        Un contenedor es una unidad estándar de software que empaqueta el código y todas sus dependencias para que la aplicación se ejecute de forma rápida y confiable de un entorno informático a otro.
                    </p>

                    <h2>Docker vs. Máquinas Virtuales</h2>
                    <p>
                        A diferencia de las máquinas virtuales que incluyen un sistema operativo completo (Guest OS) y pueden ser pesadas, los contenedores comparten el kernel del sistema operativo del host, lo que los hace extremadamente ligeros, rápidos y eficientes.
                    </p>

                    <h2>Ventajas en Desarrollo</h2>
                    <ul className="class-list">
                        <li><strong>Consistencia:</strong> Elimina el problema de "Funciona en mi máquina".</li>
                        <li><strong>Aislamiento:</strong> Cada aplicación se ejecuta en su propio entorno aislado.</li>
                        <li><strong>Velocidad:</strong> Los contenedores inician en segundos.</li>
                    </ul>

                    <h2>Imágenes y Docker Hub</h2>
                    <p>
                        Una <strong>Imagen</strong> es una plantilla inmutable que contiene las instrucciones para crear un contenedor. <strong>Docker Hub</strong> es un registro público en la nube donde puedes encontrar y compartir estas imágenes con la comunidad.
                    </p>
                </article>
            )

        case 'imagenes-contenedores':
            return (
                <article className="class-article">
                    <h1>Imágenes y Contenedores</h1>

                    <h2>Diferencia Clave</h2>
                    <p>
                        Una <strong>Imagen</strong> es la receta inactiva, mientras que un <strong>Contenedor</strong> es la instancia viva (en ejecución) de esa imagen. Puedes crear múltiples contenedores a partir de una sola imagen.
                    </p>

                    <h2>Ciclo de Vida de un Contenedor</h2>
                    <ul className="class-list">
                        <li><strong>Creación:</strong> A partir de una imagen.</li>
                        <li><strong>Ejecución:</strong> Corriendo la aplicación.</li>
                        <li><strong>Detención:</strong> El contenedor se detiene pero sus datos persisten temporalmente.</li>
                        <li><strong>Eliminación:</strong> El contenedor y sus datos no persistentes se borran por completo.</li>
                    </ul>

                    <h2>Comandos Principales</h2>
                    <div className="class-code-block">
                        <code>
                            $ docker pull node:22  # Descarga una imagen{'\n'}
                            $ docker images        # Lista imágenes locales{'\n'}
                            $ docker run node:22   # Crea y ejecuta un contenedor{'\n'}
                            $ docker ps            # Muestra contenedores en ejecución{'\n'}
                            $ docker stop &lt;id&gt;     # Detiene un contenedor{'\n'}
                            $ docker start &lt;id&gt;    # Inicia un contenedor detenido{'\n'}
                            $ docker rm &lt;id&gt;       # Elimina un contenedor{'\n'}
                            $ docker rmi node:22   # Elimina una imagen local
                        </code>
                    </div>
                </article>
            )

        case 'dockerfile':
            return (
                <article className="class-article">
                    <h1>Dockerfile</h1>

                    <h2>¿Qué es un Dockerfile?</h2>
                    <p>
                        Es un archivo de texto simple que contiene una serie de instrucciones (comandos) que Docker utiliza para construir una imagen de manera automatizada.
                    </p>

                    <h2>Instrucciones Clave</h2>
                    <ul className="class-list">
                        <li><strong>FROM:</strong> Define la imagen base (ej. node:22).</li>
                        <li><strong>WORKDIR:</strong> Establece el directorio de trabajo dentro del contenedor.</li>
                        <li><strong>COPY:</strong> Copia archivos desde el host hacia el contenedor.</li>
                        <li><strong>RUN:</strong> Ejecuta comandos durante la construcción de la imagen (ej. npm install).</li>
                        <li><strong>EXPOSE:</strong> Documenta en qué puerto escuchará el contenedor.</li>
                        <li><strong>CMD:</strong> Define el comando por defecto que se ejecutará al iniciar el contenedor.</li>
                    </ul>

                    <h2>Ejemplo: Aplicación Node.js</h2>
                    <div className="class-code-block">
                        <code>
                            FROM node:22{'\n'}
                            {'\n'}
                            WORKDIR /app{'\n'}
                            {'\n'}
                            COPY package*.json ./{'\n'}
                            RUN npm install{'\n'}
                            {'\n'}
                            COPY . .{'\n'}
                            {'\n'}
                            EXPOSE 3000{'\n'}
                            {'\n'}
                            CMD ["npm", "run", "dev"]
                        </code>
                    </div>

                    <h2>.dockerignore</h2>
                    <p>
                        Similar a .gitignore, este archivo evita que se copien archivos o carpetas innecesarias (como <code>node_modules</code>) a la imagen, manteniéndola ligera.
                    </p>
                </article>
            )

        case 'docker-compose':
            return (
                <article className="class-article">
                    <h1>Docker Compose</h1>

                    <h2>¿Para qué sirve?</h2>
                    <p>
                        Docker Compose es una herramienta para definir y ejecutar aplicaciones multi-contenedor. En lugar de usar múltiples comandos <code>docker run</code>, puedes configurar todos los servicios, redes y volúmenes de tu aplicación en un solo archivo YAML (generalmente <code>compose.yaml</code>).
                    </p>

                    <h2>Ejemplo de Arquitectura</h2>
                    <div className="class-code-block">
                        <code>
                            Frontend (React){'\n'}
                            {'   |'}{'\n'}
                            {'   v'}{'\n'}
                            Backend (Node.js){'\n'}
                            {'   |'}{'\n'}
                            {'   v'}{'\n'}
                            PostgreSQL (Base de Datos)
                        </code>
                    </div>
                    <p>Con Docker Compose puedes levantar todos estos servicios al mismo tiempo, y automáticamente estarán en la misma red interna para poder comunicarse.</p>

                    <h2>Comandos Principales</h2>
                    <ul className="class-list">
                        <li><strong>docker compose up:</strong> Construye, (re)crea, inicia y se adjunta a los contenedores.</li>
                        <li><strong>docker compose up -d:</strong> Inicia los contenedores en segundo plano (detached mode).</li>
                        <li><strong>docker compose down:</strong> Detiene los contenedores y elimina los contenedores, redes y volúmenes creados.</li>
                        <li><strong>docker compose ps:</strong> Muestra el estado de los contenedores gestionados.</li>
                        <li><strong>docker compose logs:</strong> Muestra la salida de los contenedores.</li>
                    </ul>
                </article>
            )

        case 'volumenes-networking':
            return (
                <article className="class-article">
                    <h1>Volúmenes y Networking</h1>

                    <h2>Persistencia de Datos</h2>
                    <p>
                        Por defecto, los datos generados dentro de un contenedor son efímeros; si el contenedor se elimina, los datos desaparecen. Para bases de datos y otros servicios, necesitamos persistencia.
                    </p>

                    <h2>Volumes vs. Bind Mounts</h2>
                    <ul className="class-list">
                        <li><strong>Volumes:</strong> Son gestionados completamente por Docker (en una ruta interna). Son la forma recomendada de persistir datos (como la información de una base de datos PostgreSQL).</li>
                        <li><strong>Bind mounts:</strong> Mapean un archivo o directorio específico de tu máquina host directamente al contenedor. Muy útil en desarrollo para que los cambios en tu código se reflejen inmediatamente.</li>
                    </ul>

                    <h2>Mapeo de Puertos</h2>
                    <p>
                        Para acceder a una aplicación dentro de un contenedor desde tu navegador, necesitas mapear un puerto del host al puerto del contenedor. Se utiliza la sintaxis <code>-p puerto_host:puerto_contenedor</code> (ej. <code>-p 8080:3000</code>).
                    </p>

                    <h2>DNS Interno de Docker</h2>
                    <p>
                        Cuando dos o más contenedores están en la misma red de Docker (como ocurre automáticamente con Docker Compose), pueden comunicarse utilizando sus nombres de servicio como direcciones web (ej. <code>http://backend:3000</code>).
                    </p>
                </article>
            )

        default:
            return null
    }
}

/* ─── Main page ──────────────────────────────────────────── */

const DockerPage = () => {
    const [activeId, setActiveId] = useLocalStorage('docker-active-id', dockerSubModules[0].id)
    const [completedIds, setCompletedIds] = useLocalStorage<string[]>('docker-completed-ids', [])
    const [quizOpen, setQuizOpen] = useState(false)

    const activeModule = dockerSubModules.find((m) => m.id === activeId)!
    const totalProgress = Math.round((completedIds.length / dockerSubModules.length) * 100)

    const handlePass = () => {
        if (!completedIds.includes(activeId)) {
            setCompletedIds((prev) => [...prev, activeId])
        }
    }

    const handleSelectStep = (id: string) => {
        setActiveId(id)
        setQuizOpen(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const steps = dockerSubModules.map((m) => ({
        id: m.id,
        title: m.title,
        color: m.color,
    }))

    const isModuleComplete = completedIds.length === dockerSubModules.length

    useEffect(() => {
        if (isModuleComplete) {
            localStorage.setItem('dockerCompleted', JSON.stringify(true))
        }
    }, [isModuleComplete])
    
    const currentIdx = dockerSubModules.findIndex((m) => m.id === activeId)
    const hasNext = currentIdx < dockerSubModules.length - 1
    const hasPrev = currentIdx > 0

    return (
        <div className="class-page">
            {/* Progress bar header */}
            <ProgressBar
                lesson={{ topic: 'Herramientas', title: 'Docker' }}
                progress={totalProgress}
            />

            <div className="class-layout">
                {/* Sidebar */}
                <StepSideBar
                    steps={steps}
                    activeId={activeId}
                    completedIds={completedIds}
                    onSelect={handleSelectStep}
                />

                {/* Main content */}
                <main className="class-main">
                    <SubModuleContent id={activeId} lessonId={'docker-01'} />

                    {/* Completion banner */}
                    {isModuleComplete && (
                        <div className="class-complete-banner">
                            <span className="class-complete-icon">✓</span>
                            <div>
                                <strong>¡Módulo completado!</strong>
                                <p>Has completado todos los submódulos de Docker.</p>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="class-actions">
                        <div className="class-actions-nav">
                            {hasPrev && (
                                <button
                                    className="class-btn class-btn--secondary"
                                    onClick={() => handleSelectStep(dockerSubModules[currentIdx - 1].id)}
                                >
                                    ← Anterior
                                </button>
                            )}
                            {hasNext && (
                                <button
                                    className="class-btn class-btn--secondary"
                                    onClick={() => handleSelectStep(dockerSubModules[currentIdx + 1].id)}
                                >
                                    Siguiente →
                                </button>
                            )}
                        </div>

                        <button
                            className="class-btn class-btn--primary"
                            style={{ '--quiz-color': activeModule.color } as React.CSSProperties}
                            onClick={() => setQuizOpen(true)}
                            disabled={completedIds.includes(activeId)}
                        >
                            {completedIds.includes(activeId)
                                ? '🎉 Submódulo completado'
                                : 'Iniciar cuestionario'}
                        </button>
                    </div>
                </main>
            </div>

            {/* Quiz modal */}
            {quizOpen && (
                <QuizModal
                    lessonId={activeId}
                    lessonNumber="01"
                    lessonTitle={activeModule.title}
                    topicColor={activeModule.color}
                    questions={activeModule.questions}
                    onClose={() => setQuizOpen(false)}
                    onPass={handlePass}
                />
            )}
        </div>
    )
}

export default DockerPage