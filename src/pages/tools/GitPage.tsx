import { useState, useEffect } from 'react'
import ProgressBar from '../../components/ProgressBar'
import StepSideBar from '../../components/StepSideBar'
import QuizModal from '../../components/QuizzModal'
import { gitSubModules } from '../../data/toolsGitQuestions'
import { useLocalStorage } from '../../hook/SessionStorageManager'

/* ─── Sub-module content ─────────────────────────────────── */

const SubModuleContent = ({ id }: { id: string, lessonId: string }) => {
    switch (id) {
        case 'que-es-git':
            return (
                <article className="class-article">
                    <h1>¿Qué es Git?</h1>

                    <h2>Control de Versiones</h2>
                    <p>
                        Git es un sistema de control de versiones distribuido que permite registrar, organizar y gestionar los cambios realizados en un proyecto de software a lo largo del tiempo.
                    </p>

                    <h2>¿Para qué sirve?</h2>
                    <p>
                        Su principal objetivo es gestionar y controlar los cambios de un proyecto. Esto facilita el seguimiento, la recuperación de versiones anteriores y la colaboración entre diferentes desarrolladores sobre el mismo código.
                    </p>

                    <h2>Sistema Distribuido</h2>
                    <p>
                        A diferencia de los sistemas centralizados, en Git cada desarrollador tiene una copia completa del repositorio (con todo su historial) en su máquina local. Esto permite trabajar sin depender constantemente de una conexión a un servidor central.
                    </p>

                    <h2>Git vs GitHub</h2>
                    <ul className="class-list">
                        <li><strong>Git:</strong> Es la herramienta subyacente de control de versiones que se instala y ejecuta localmente.</li>
                        <li><strong>GitHub:</strong> Es una plataforma en la nube (como GitLab o Bitbucket) que permite alojar repositorios de Git y facilita la colaboración a través de internet.</li>
                    </ul>
                </article>
            )

        case 'como-funciona-git':
            return (
                <article className="class-article">
                    <h1>¿Cómo funciona Git?</h1>

                    <h2>El Repositorio</h2>
                    <p>
                        Un repositorio (o "repo") es el espacio donde Git almacena los archivos y el historial completo de cambios de un proyecto.
                    </p>

                    <h2>Las Tres Áreas de Git</h2>
                    <p>Git organiza el flujo de trabajo en tres áreas principales:</p>
                    <ul className="class-list">
                        <li><strong>Working Directory (Directorio de Trabajo):</strong> Son los archivos del proyecto tal como se encuentran actualmente en tu disco duro. Aquí es donde modificas, agregas o eliminas archivos.</li>
                        <li><strong>Staging Area (Área de Preparación):</strong> Es un área intermedia donde colocas los cambios que deseas incluir en el próximo commit. También se le conoce como "index".</li>
                        <li><strong>Repository (Historial / Commits):</strong> Es la base de datos de Git donde se almacenan permanentemente los cambios en forma de "commits".</li>
                    </ul>

                    <h2>El Commit</h2>
                    <p>
                        Un commit representa una "foto" o versión del proyecto en un momento determinado. Al hacer un commit, se registra qué cambió, quién lo hizo y cuándo, junto con un mensaje explicativo.
                    </p>

                    <h2>Flujo Básico</h2>
                    <div className="class-code-block">
                        <code>
                            1. Modificar archivos (Working Directory){'\n'}
                            2. git add (Staging Area){'\n'}
                            3. git commit (Repository)
                        </code>
                    </div>
                </article>
            )

        case 'comandos-basicos-git':
            return (
                <article className="class-article">
                    <h1>Comandos Básicos de Git</h1>

                    <h2>Inicializar y Consultar</h2>
                    <ul className="class-list">
                        <li><strong>git init:</strong> Inicializa un nuevo repositorio Git en el directorio actual.</li>
                        <li><strong>git status:</strong> Muestra el estado actual del repositorio, indicando qué archivos han sido modificados y cuáles están en la Staging Area.</li>
                        <li><strong>git log:</strong> Muestra el historial de commits realizados en el repositorio.</li>
                    </ul>

                    <h2>Registrar Cambios</h2>
                    <ul className="class-list">
                        <li><strong>git add &lt;archivo&gt;:</strong> Añade los cambios de un archivo a la Staging Area. Usa <code>git add .</code> para añadir todos los cambios.</li>
                        <li><strong>git commit -m "Mensaje":</strong> Crea un nuevo commit en el historial con los cambios preparados en la Staging Area.</li>
                    </ul>

                    <h2>Ejemplo de Flujo</h2>
                    <div className="class-code-block">
                        <code>
                            $ git init{'\n'}
                            $ git status{'\n'}
                            $ git add index.html{'\n'}
                            $ git commit -m "Añadir página de inicio"{'\n'}
                            $ git log
                        </code>
                    </div>
                </article>
            )

        case 'tracking-rebase-squash':
            return (
                <article className="class-article">
                    <h1>Tracking, Rebase y Squash</h1>

                    <h2>Tracking de Archivos</h2>
                    <p>
                        Un archivo está siendo "tracked" (rastreado) cuando Git conoce su existencia y supervisa sus cambios. Al ejecutar <code>git add</code> sobre un archivo nuevo, este pasa a la Staging Area y Git comienza a rastrearlo.
                    </p>

                    <h2>Rebase</h2>
                    <p>
                        El comando <code>git rebase</code> es una operación que toma los commits de una rama y los vuelve a aplicar (reaplica) sobre otra base. Esto se utiliza frecuentemente para mantener un historial de proyecto lineal y limpio, evitando los "commits de merge" innecesarios.
                    </p>

                    <h2>Squash</h2>
                    <p>
                        Hacer "squash" significa combinar múltiples commits en uno solo. Es una práctica común antes de integrar una funcionalidad (fusionar una rama), para agrupar varios commits de progreso pequeños (ej. "wip", "fix typo") en un único commit con un mensaje significativo y claro.
                    </p>
                </article>
            )

        case 'branches-merging':
            return (
                <article className="class-article">
                    <h1>Branches y Merging</h1>

                    <h2>¿Qué es una Branch?</h2>
                    <p>
                        Una branch (rama) es una línea independiente de desarrollo. Permite trabajar en nuevas funcionalidades, experimentos o corrección de errores sin afectar la rama principal (generalmente llamada <code>main</code> o <code>master</code>).
                    </p>

                    <h2>Manejo de Ramas</h2>
                    <ul className="class-list">
                        <li><strong>git branch:</strong> Lista todas las ramas locales.</li>
                        <li><strong>git branch &lt;nombre&gt;:</strong> Crea una nueva rama.</li>
                        <li><strong>git checkout &lt;nombre&gt;</strong> o <strong>git switch &lt;nombre&gt;:</strong> Cambia a la rama especificada.</li>
                    </ul>

                    <h2>Merging (Fusión)</h2>
                    <p>
                        Hacer "merge" significa integrar los cambios de una rama dentro de otra (por ejemplo, traer los cambios de tu rama <code>feature-login</code> hacia <code>main</code>).
                    </p>
                    <div className="class-code-block">
                        <code>
                            $ git checkout main{'\n'}
                            $ git merge feature-login
                        </code>
                    </div>

                    <h2>Conflictos de Fusión</h2>
                    <p>
                        Si dos ramas modifican las mismas líneas de un archivo de manera distinta, Git no sabrá qué versión conservar y producirá un "conflicto". En este caso, el desarrollador debe editar el archivo manualmente para resolver las diferencias antes de poder completar el merge.
                    </p>
                </article>
            )

        default:
            return null
    }
}

/* ─── Main page ──────────────────────────────────────────── */

const GitPage = () => {
    const [activeId, setActiveId] = useLocalStorage('git-active-id', gitSubModules[0].id)
    const [completedIds, setCompletedIds] = useLocalStorage<string[]>('git-completed-ids', [])
    const [quizOpen, setQuizOpen] = useState(false)

    const activeModule = gitSubModules.find((m) => m.id === activeId)!
    const totalProgress = Math.round((completedIds.length / gitSubModules.length) * 100)

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

    const steps = gitSubModules.map((m) => ({
        id: m.id,
        title: m.title,
        color: m.color,
    }))

    const isModuleComplete = completedIds.length === gitSubModules.length

    useEffect(() => {
        if (isModuleComplete) {
            localStorage.setItem('gitCompleted', JSON.stringify(true))
        }
    }, [isModuleComplete])
    
    const currentIdx = gitSubModules.findIndex((m) => m.id === activeId)
    const hasNext = currentIdx < gitSubModules.length - 1
    const hasPrev = currentIdx > 0

    return (
        <div className="class-page">
            {/* Progress bar header */}
            <ProgressBar
                lesson={{ topic: 'Herramientas', title: 'Git' }}
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
                    <SubModuleContent id={activeId} lessonId={'git-01'} />

                    {/* Completion banner */}
                    {isModuleComplete && (
                        <div className="class-complete-banner">
                            <span className="class-complete-icon">🎉</span>
                            <div>
                                <strong>¡Módulo completado!</strong>
                                <p>Has completado todos los submódulos de Git.</p>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="class-actions">
                        <div className="class-actions-nav">
                            {hasPrev && (
                                <button
                                    className="class-btn class-btn--secondary"
                                    onClick={() => handleSelectStep(gitSubModules[currentIdx - 1].id)}
                                >
                                    ← Anterior
                                </button>
                            )}
                            {hasNext && (
                                <button
                                    className="class-btn class-btn--secondary"
                                    onClick={() => handleSelectStep(gitSubModules[currentIdx + 1].id)}
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

export default GitPage