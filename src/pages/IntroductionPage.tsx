import { useState, useEffect } from 'react'
import ProgressBar from '../components/ProgressBar'
import StepSideBar from '../components/StepSideBar'
import QuizModal from '../components/QuizzModal'
import { introSubModules } from '../data/introductionQuestions'
import { useLocalStorage } from '../hook/SessionStorageManager'

/* ─── Sub-module content ─────────────────────────────────── */

const SubModuleContent = ({ id }: { id: string, lessonId: string }) => {
    switch (id) {
        case 'intro-dbp':
            return (
                <article className="class-article">
                    <h1>Introducción al curso</h1>

                    <h2>¿Qué es el Desarrollo Basado en Plataformas?</h2>
                    <p>
                        El Desarrollo Basado en Plataformas (DBP) es un enfoque en el desarrollo de software que
                        busca aprovechar diferentes herramientas, servicios y tecnologías para construir aplicaciones
                        de manera organizada, eficiente y escalable.
                    </p>

                    <h2>¿Qué temas se tratarán?</h2>
                    <p>
                        Durante el curso se abordarán conceptos y herramientas fundamentales para el desarrollo de
                        aplicaciones web:
                    </p>
                    <ul className="class-list">
                        <li><strong>APIs:</strong> para permitir la comunicación entre aplicaciones y servicios.</li>
                        <li><strong>Bases de datos relacionales:</strong> para almacenar información estructurada.</li>
                        <li><strong>Frameworks:</strong> para facilitar y estructurar el desarrollo de aplicaciones.</li>
                        <li><strong>APIs de terceros:</strong> para integrar servicios externos.</li>
                        <li><strong>Aplicaciones web:</strong> para integrar todos los componentes.</li>
                    </ul>

                    <h2>¿Qué aprenderán los estudiantes?</h2>
                    <p>
                        Al finalizar el curso los estudiantes tendrán una base sólida para desarrollar aplicaciones
                        utilizando APIs, bases de datos y frameworks. Además podrán comprender cómo se comunican los
                        diferentes componentes de una aplicación e integrar servicios externos.
                    </p>
                </article>
            )

        case 'que-es-framework':
            return (
                <article className="class-article">
                    <h1>¿Qué es un Framework?</h1>

                    <h2>Definición</h2>
                    <p>
                        Un framework es un conjunto de herramientas, bibliotecas y estructuras que proporciona una
                        base para desarrollar aplicaciones de manera organizada.
                    </p>

                    <h2>¿Para qué sirve?</h2>
                    <p>
                        Los frameworks permiten evitar tener que construir determinadas funcionalidades desde cero y
                        ayudan a organizar el código de una aplicación.
                    </p>

                    <h2>Tipos de frameworks</h2>
                    <p>Dependiendo de su propósito existen frameworks orientados a distintas áreas:</p>
                    <ul className="class-list">
                        <li><strong>Frontend:</strong> React, Vue.js, Angular — para construir interfaces de usuario.</li>
                        <li><strong>Backend:</strong> Spring Boot, Django, Express — para lógica del servidor.</li>
                        <li><strong>Mobile:</strong> Flutter, React Native — para aplicaciones móviles.</li>
                    </ul>

                    <h2>¿Por qué usar un framework?</h2>
                    <p>
                        Al usar un framework, los equipos de desarrollo se benefician de convenciones establecidas,
                        herramientas integradas y una comunidad activa que facilita la resolución de problemas.
                    </p>
                </article>
            )

        case 'que-es-api':
            return (
                <article className="class-article">
                    <h1>¿Qué es una API?</h1>

                    <h2>Definición</h2>
                    <p>
                        Una API (Application Programming Interface) es un conjunto de reglas y mecanismos que
                        permite que diferentes aplicaciones o componentes se comuniquen entre sí.
                    </p>

                    <h2>La analogía del restaurante</h2>
                    <p>Imaginemos una aplicación como un restaurante:</p>
                    <ul className="class-list">
                        <li>La <strong>comida</strong> es el recurso que los clientes desean obtener.</li>
                        <li>La <strong>cocina</strong> es el servidor que procesa la información.</li>
                        <li>El <strong>mesero</strong> recibe los pedidos y los lleva a la cocina.</li>
                        <li>La <strong>API</strong> actúa como el mesero: intermediario entre el cliente y el servidor.</li>
                    </ul>

                    <h2>¿Para qué sirve una API?</h2>
                    <p>
                        En el desarrollo web, las APIs permiten que un cliente solicite información o ejecute acciones
                        en un servidor. Por ejemplo, una aplicación puede usarlas para obtener información de usuarios,
                        registrar datos o consultar información en una base de datos.
                    </p>

                    <h2>Beneficios</h2>
                    <p>
                        Una API permite a tus clientes solicitar recursos o ejecutar acciones en tu aplicación
                        sin necesidad de conocer su estructura interna. Esto promueve la separación de responsabilidades
                        y la reutilización de servicios.
                    </p>
                </article>
            )

        case 'url-uri':
            return (
                <article className="class-article">
                    <h1>URL & URI</h1>

                    <h2>¿Qué es una URI?</h2>
                    <p>
                        Una URI (Uniform Resource Identifier) es un identificador utilizado para identificar un
                        recurso dentro de un contexto determinado. Las URIs son un concepto fundamental para
                        comprender cómo se identifican los recursos en la web.
                    </p>

                    <h2>¿Qué es una URL?</h2>
                    <p>
                        Una URL (Uniform Resource Locator) es un tipo de URI que, además de identificar un recurso,
                        proporciona información sobre cómo localizarlo.
                    </p>

                    <div className="class-code-block">
                        <code>https://example.com/usuarios</code>
                    </div>

                    <p>
                        En este ejemplo, <strong>https</strong> indica el protocolo utilizado, mientras que{' '}
                        <strong>example.com/usuarios</strong> representa la ubicación del recurso.
                    </p>

                    <h2>Estructura de una URL</h2>
                    <ul className="class-list">
                        <li><strong>Protocolo:</strong> https:// — cómo se accede al recurso.</li>
                        <li><strong>Dominio:</strong> example.com — dónde está el servidor.</li>
                        <li><strong>Ruta:</strong> /usuarios — la ubicación exacta del recurso.</li>
                        <li><strong>Parámetros:</strong> ?id=1 — datos adicionales opcionales.</li>
                    </ul>
                </article>
            )

        case 'protocolos-http':
            return (
                <article className="class-article">
                    <h1>Protocolos y Métodos HTTP</h1>

                    <h2>¿Qué es HTTP?</h2>
                    <p>
                        HTTP (HyperText Transfer Protocol) es uno de los principales protocolos utilizados para la
                        comunicación en la web. Permite que un cliente, como un navegador, envíe solicitudes a un
                        servidor y reciba respuestas.
                    </p>

                    <h2>Flujo de comunicación</h2>
                    <div className="class-code-block">
                        <code>
                            Cliente → Solicitud → Servidor{'\n'}
                            Cliente ← Respuesta ← Servidor
                        </code>
                    </div>

                    <h2>Métodos HTTP principales</h2>
                    <ul className="class-list">
                        <li><strong>GET:</strong> obtener información del servidor.</li>
                        <li><strong>POST:</strong> enviar o crear nueva información.</li>
                        <li><strong>PUT:</strong> actualizar completamente un recurso.</li>
                        <li><strong>PATCH:</strong> modificar parcialmente un recurso.</li>
                        <li><strong>DELETE:</strong> eliminar un recurso.</li>
                    </ul>

                    <h2>¿Por qué es importante?</h2>
                    <p>
                        Estos métodos serán especialmente importantes al trabajar con APIs. Cada operación que realiza
                        una API suele corresponderse con uno de estos métodos HTTP, formando la base del estándar REST.
                    </p>

                    <h2>Cliente y Servidor</h2>
                    <p>
                        El <strong>cliente</strong> es el componente que realiza la solicitud (por ejemplo, el navegador).
                        El <strong>servidor</strong> recibe la solicitud, la procesa y devuelve una respuesta.
                    </p>
                </article>
            )

        default:
            return null
    }
}

/* ─── Main page ──────────────────────────────────────────── */


const IntroductionPage = () => {
    const [activeId, setActiveId] = useLocalStorage('intro-active-id', introSubModules[0].id)
    const [completedIds, setCompletedIds] = useLocalStorage<string[]>('intro-completed-ids', [])
    const [quizOpen, setQuizOpen] = useState(false)

    const activeModule = introSubModules.find((m) => m.id === activeId)!
    const totalProgress = Math.round((completedIds.length / introSubModules.length) * 100)

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

    const steps = introSubModules.map((m) => ({
        id: m.id,
        title: m.title,
        color: m.color,
    }))

    const isModuleComplete = completedIds.length === introSubModules.length

    useEffect(() => {
        if (isModuleComplete) {
            localStorage.setItem('introCompleted', JSON.stringify(true))
        }
    }, [isModuleComplete])
    const currentIdx = introSubModules.findIndex((m) => m.id === activeId)
    const hasNext = currentIdx < introSubModules.length - 1
    const hasPrev = currentIdx > 0

    return (
        <div className="class-page">
            {/* Progress bar header */}
            <ProgressBar
                lesson={{ topic: 'Introducción', title: activeModule.title }}
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
                    <SubModuleContent id={activeId} lessonId={'00'} />

                    {/* Completion banner */}
                    {isModuleComplete && (
                        <div className="class-complete-banner">
                            <span className="class-complete-icon">🎉</span>
                            <div>
                                <strong>¡Módulo completado!</strong>
                                <p>Has completado todos los submódulos de Introducción.</p>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="class-actions">
                        <div className="class-actions-nav">
                            {hasPrev && (
                                <button
                                    className="class-btn class-btn--secondary"
                                    onClick={() => handleSelectStep(introSubModules[currentIdx - 1].id)}
                                >
                                    ← Anterior
                                </button>
                            )}
                            {hasNext && (
                                <button
                                    className="class-btn class-btn--secondary"
                                    onClick={() => handleSelectStep(introSubModules[currentIdx + 1].id)}
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
                                ? '✓ Submódulo completado'
                                : 'Iniciar cuestionario'}
                        </button>
                    </div>
                </main>
            </div>

            {/* Quiz modal */}
            {quizOpen && (
                <QuizModal
                    lessonId={activeId}
                    lessonNumber="00"
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

export default IntroductionPage
