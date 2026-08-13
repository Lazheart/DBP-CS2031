import { useState, useEffect } from 'react'
import ProgressBar from '../../components/ProgressBar'
import StepSideBar from '../../components/StepSideBar'
import QuizModal from '../../components/QuizzModal'
import { githubSubModules } from '../../data/toolsGithubQuestions'
import { useLocalStorage } from '../../hook/SessionStorageManager'

/* ─── Sub-module content ─────────────────────────────────── */

const SubModuleContent = ({ id }: { id: string, lessonId: string }) => {
    switch (id) {
        case 'que-es-github':
            return (
                <article className="class-article">
                    <h1>¿Qué es GitHub?</h1>

                    <h2>Plataforma de Colaboración</h2>
                    <p>
                        GitHub es una plataforma de alojamiento de repositorios de software basada en la web. Utiliza el sistema de control de versiones Git, permitiendo a los desarrolladores colaborar en proyectos desde cualquier parte del mundo.
                    </p>

                    <h2>Diferencia entre Git y GitHub</h2>
                    <ul className="class-list">
                        <li><strong>Git:</strong> Es el sistema de control de versiones local que rastrea los cambios en tu código.</li>
                        <li><strong>GitHub:</strong> Es el servicio en la nube que aloja tus repositorios Git y proporciona herramientas adicionales para la colaboración y gestión.</li>
                    </ul>

                    <h2>Repositorios</h2>
                    <p>
                        Un repositorio (o "repo") en GitHub es donde se almacena tu proyecto. Contiene todos los archivos del proyecto, incluyendo el historial de revisión de cada archivo.
                    </p>

                    <h2>Ventajas de usar GitHub</h2>
                    <p>
                        Facilita el trabajo en equipo, proporciona un respaldo seguro de tu código en la nube, y es la plataforma principal para contribuir al software de código abierto. Además, ofrece herramientas integradas para seguimiento de errores (issues) y revisión de código (pull requests).
                    </p>
                </article>
            )

        case 'repositorios-colaboracion':
            return (
                <article className="class-article">
                    <h1>Repositorios y Colaboración</h1>

                    <h2>Público vs Privado</h2>
                    <ul className="class-list">
                        <li><strong>Públicos:</strong> Cualquiera en internet puede ver el repositorio. Ideal para proyectos de código abierto.</li>
                        <li><strong>Privados:</strong> Solo tú y los colaboradores que elijas pueden ver el repositorio. Ideal para proyectos personales o comerciales.</li>
                    </ul>

                    <h2>Forks (Bifurcaciones)</h2>
                    <p>
                        Un "fork" es una copia personal del repositorio de otro usuario que se aloja en tu cuenta de GitHub. Los forks te permiten realizar cambios en un proyecto sin afectar el repositorio original. Son la base de las contribuciones de código abierto.
                    </p>

                    <h2>Branches (Ramas)</h2>
                    <p>
                        Trabajar con branches te permite desarrollar nuevas funcionalidades o experimentar de forma aislada sin afectar el código principal (usualmente la rama <code>main</code>). Una vez que los cambios están listos, se pueden integrar al proyecto.
                    </p>
                </article>
            )

        case 'pull-requests-code-review':
            return (
                <article className="class-article">
                    <h1>Pull Requests y Code Review</h1>

                    <h2>¿Qué es un Pull Request (PR)?</h2>
                    <p>
                        Un Pull Request es una solicitud para que los cambios de tu rama (o tu fork) se integren (merge) en otra rama, generalmente en el repositorio original. Es el mecanismo principal para proponer cambios en GitHub.
                    </p>

                    <h2>Code Review (Revisión de Código)</h2>
                    <p>
                        Antes de que un PR sea aceptado, otros desarrolladores pueden revisar el código. Durante un Code Review, los revisores pueden:
                    </p>
                    <ul className="class-list">
                        <li>Comentar sobre líneas específicas de código.</li>
                        <li>Sugerir cambios o mejoras directamente en la plataforma.</li>
                        <li>Aprobar los cambios o solicitar modificaciones antes de integrar el código.</li>
                    </ul>

                    <h2>Resolución de Conflictos</h2>
                    <p>
                        A veces, los cambios propuestos en un PR entran en conflicto con modificaciones recientes en la rama principal. GitHub te alertará de estos conflictos y deberás resolverlos (usualmente de forma local) antes de poder hacer el merge del Pull Request.
                    </p>
                </article>
            )

        case 'issues-projects':
            return (
                <article className="class-article">
                    <h1>Issues y Projects</h1>

                    <h2>GitHub Issues</h2>
                    <p>
                        Los Issues son una excelente manera de llevar un registro de tareas, mejoras y errores para tus proyectos. Se pueden compartir y discutir con el resto de tu equipo o con la comunidad.
                    </p>

                    <h2>Labels (Etiquetas)</h2>
                    <p>
                        Puedes clasificar tus Issues y PRs usando etiquetas (labels) como "bug", "enhancement" o "help wanted", lo que facilita filtrar y priorizar el trabajo.
                    </p>

                    <h2>Milestones (Hitos)</h2>
                    <p>
                        Los Milestones agrupan Issues y Pull Requests relacionados con un objetivo específico, como el lanzamiento de una nueva versión, permitiéndote rastrear el progreso de dicho objetivo.
                    </p>

                    <h2>GitHub Projects</h2>
                    <p>
                        Los Projects son tableros personalizables que se integran directamente con tus Issues y PRs. Te permiten visualizar y gestionar el trabajo de tu proyecto usando metodologías ágiles (como Kanban), organizando las tareas en columnas de estado.
                    </p>
                </article>
            )

        case 'actions-workflows':
            return (
                <article className="class-article">
                    <h1>GitHub Actions y Workflows</h1>

                    <h2>¿Qué es GitHub Actions?</h2>
                    <p>
                        GitHub Actions es una plataforma de Integración Continua (CI) y Despliegue Continuo (CD) que te permite automatizar tu flujo de trabajo de desarrollo de software directamente desde GitHub.
                    </p>

                    <h2>Workflows</h2>
                    <p>
                        Un workflow es un proceso automatizado configurable. Se define en un archivo YAML dentro del directorio <code>.github/workflows</code> de tu repositorio. Puede contener uno o más jobs y puede ser activado por eventos de GitHub.
                    </p>

                    <h2>Eventos Triggers</h2>
                    <p>
                        Los workflows pueden configurarse para ejecutarse automáticamente ante eventos específicos en tu repositorio, como hacer un push a una rama, abrir un Pull Request, o incluso ejecutarse en un horario programado.
                    </p>

                    <h2>Jobs y Steps</h2>
                    <ul className="class-list">
                        <li><strong>Jobs:</strong> Conjunto de pasos (steps) que se ejecutan en un mismo entorno (runner).</li>
                        <li><strong>Steps:</strong> Tareas individuales, que pueden ser ejecutar comandos de terminal o usar una Action creada por la comunidad.</li>
                    </ul>
                </article>
            )

        case 'releases-seguridad':
            return (
                <article className="class-article">
                    <h1>Releases y Seguridad</h1>

                    <h2>Releases</h2>
                    <p>
                        Los Releases (lanzamientos) son versiones empaquetadas de tu software listas para que los usuarios las descarguen. En GitHub, los Releases se basan en Git tags (etiquetas), que marcan un punto específico en el historial de tu proyecto.
                    </p>

                    <h2>Semantic Versioning</h2>
                    <p>
                        Es una convención estándar para asignar números de versión (ej. 1.0.4). Consiste en tres números: MAJOR (cambios incompatibles), MINOR (nuevas funcionalidades compatibles), y PATCH (corrección de errores).
                    </p>

                    <h2>GitHub Secrets</h2>
                    <p>
                        Los Secrets son variables de entorno encriptadas que creas a nivel de organización, repositorio, o entorno del repositorio. Te permiten almacenar de forma segura información sensible (como tokens de API o contraseñas) para usarla en GitHub Actions sin exponerla en tu código.
                    </p>

                    <h2>Dependabot</h2>
                    <p>
                        Dependabot es una herramienta integrada de GitHub que escanea automáticamente tus repositorios en busca de dependencias vulnerables o desactualizadas, y puede crear automáticamente Pull Requests para actualizarlas.
                    </p>
                </article>
            )

        default:
            return null
    }
}

/* ─── Main page ──────────────────────────────────────────── */

const GithubPage = () => {
    const [activeId, setActiveId] = useLocalStorage('github-active-id', githubSubModules[0].id)
    const [completedIds, setCompletedIds] = useLocalStorage<string[]>('github-completed-ids', [])
    const [quizOpen, setQuizOpen] = useState(false)

    const activeModule = githubSubModules.find((m) => m.id === activeId)!
    const totalProgress = Math.round((completedIds.length / githubSubModules.length) * 100)

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

    const steps = githubSubModules.map((m) => ({
        id: m.id,
        title: m.title,
        color: m.color,
    }))

    const isModuleComplete = completedIds.length === githubSubModules.length

    useEffect(() => {
        if (isModuleComplete) {
            localStorage.setItem('githubCompleted', JSON.stringify(true))
        }
    }, [isModuleComplete])
    
    const currentIdx = githubSubModules.findIndex((m) => m.id === activeId)
    const hasNext = currentIdx < githubSubModules.length - 1
    const hasPrev = currentIdx > 0

    return (
        <div className="class-page">
            {/* Progress bar header */}
            <ProgressBar
                lesson={{ topic: 'Herramientas', title: 'GitHub' }}
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
                    <SubModuleContent id={activeId} lessonId={'github-01'} />

                    {/* Completion banner */}
                    {isModuleComplete && (
                        <div className="class-complete-banner">
                            <span className="class-complete-icon">🎉</span>
                            <div>
                                <strong>¡Módulo completado!</strong>
                                <p>Has completado todos los submódulos de GitHub.</p>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="class-actions">
                        <div className="class-actions-nav">
                            {hasPrev && (
                                <button
                                    className="class-btn class-btn--secondary"
                                    onClick={() => handleSelectStep(githubSubModules[currentIdx - 1].id)}
                                >
                                    ← Anterior
                                </button>
                            )}
                            {hasNext && (
                                <button
                                    className="class-btn class-btn--secondary"
                                    onClick={() => handleSelectStep(githubSubModules[currentIdx + 1].id)}
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

export default GithubPage