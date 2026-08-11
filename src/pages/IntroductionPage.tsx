import { useState } from "react";
import ClassLayout from "../components/ClassLayout";

const IntroductionPage = () => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [progress, setProgress] = useState(0);

    const questions = [
        {
            question: "¿Qué es una API?",
            options: [
                "Una base de datos relacional.",
                "Un conjunto de reglas que permite que diferentes aplicaciones se comuniquen entre sí.",
                "Un lenguaje de programación.",
                "Un framework de frontend."
            ],
            correct: 1,
            explanation: "Una API (Application Programming Interface) permite que diferentes aplicaciones o servicios se comuniquen e intercambien información mediante un conjunto de reglas definidas."
        },
        {
            question: "¿Qué es un framework?",
            options: [
                "Un conjunto de herramientas y bibliotecas que proporciona una base para desarrollar aplicaciones.",
                "Un protocolo de transferencia de datos seguro.",
                "Un tipo de base de datos no relacional.",
                "Un servidor web donde se alojan aplicaciones."
            ],
            correct: 0,
            explanation: "Un framework es una estructura base que incluye bibliotecas y herramientas para facilitar el desarrollo de software, evitando tener que construir todo desde cero."
        },
        {
            question: "¿Cuál de los siguientes es un método HTTP utilizado para obtener información?",
            options: [
                "POST",
                "PUT",
                "GET",
                "DELETE"
            ],
            correct: 2,
            explanation: "El método HTTP GET se utiliza específicamente para solicitar y obtener información o recursos desde un servidor sin modificarlos."
        },
        {
            question: "En una arquitectura cliente-servidor, ¿cuál es el rol del cliente?",
            options: [
                "Procesar la información de la base de datos.",
                "Realizar una solicitud de información o acción.",
                "Almacenar los datos de manera estructurada.",
                "Proveer la infraestructura de red subyacente."
            ],
            correct: 1,
            explanation: "El cliente es el encargado de realizar peticiones al servidor (por ejemplo, a través de un navegador web) y esperar la respuesta correspondiente."
        },
        {
            question: "¿Por qué es común utilizar JSON en las APIs web?",
            options: [
                "Porque es el único formato compatible con HTTP.",
                "Debido a su estructura compleja y cifrada.",
                "Por su estructura sencilla y fácil de interpretar para el intercambio de información.",
                "Porque es un framework de JavaScript."
            ],
            correct: 2,
            explanation: "JSON es muy popular porque tiene una sintaxis ligera, legible por humanos y fácil de interpretar por la mayoría de lenguajes de programación."
        }
    ];

    const topics = [
        { id: "intro-dbp", title: "¿Qué es el DBP?" },
        { id: "que-es-api", title: "¿Qué es una API?" },
        { id: "que-es-framework", title: "¿Qué es un Framework?" },
        { id: "uri-url", title: "URI y URL" },
        { id: "protocolos-metodos-http", title: "Protocolos y Métodos HTTP" }
    ];

    const handleQuizPass = () => {
        setProgress(100);
    };

    const handleNext = () => {
        setShowQuiz(true);
    };

    return (
        <ClassLayout
            lesson={{ topic: 'Introducción', title: 'Fundamentos del DBP' }}
            progress={progress}
            steps={topics}
            badge="Introducción"
            badgeIcon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
            }
            title="¿Qué es el DBP?"
            description="El Desarrollo Basado en Plataformas (DBP) es un enfoque en el desarrollo de software que busca aprovechar diferentes herramientas, servicios y tecnologías para construir aplicaciones de manera organizada, eficiente y escalable."
            objectives={[
                "Comprender el concepto de Desarrollo Basado en Plataformas.",
                "Identificar el rol de APIs, bases de datos y frameworks.",
                "Conocer los protocolos y métodos HTTP.",
                "Entender la arquitectura cliente-servidor y el formato JSON."
            ]}
            keyPoints={[
                "El DBP utiliza plataformas para evitar construir desde cero.",
                "Las APIs son el puente de comunicación entre sistemas.",
                "HTTP y JSON son fundamentales en el desarrollo web moderno."
            ]}
            showQuiz={showQuiz}
            quizProps={{
                lessonId: "intro-01",
                lessonTitle: "Fundamentos del DBP",
                topicColor: "#ef4444",
                questions: questions,
                onClose: () => setShowQuiz(false),
                onPass: handleQuizPass
            }}
            onNext={handleNext}
            nextText="Ir al cuestionario"
            onPrev={undefined} // Or set to a function if there's a previous page
        >
            <div id="intro-dbp" className="scroll-mt-24">
                <p className="text-[var(--text)] text-lg leading-relaxed mb-4">
                    A lo largo del curso se estudiarán diferentes tecnologías y
                    conceptos relacionados con el desarrollo de aplicaciones
                    modernas, prestando especial atención a la comunicación
                    entre sistemas, el almacenamiento de información y el uso
                    de herramientas que facilitan el proceso de desarrollo.
                </p>
                <p className="text-[var(--text)] text-lg leading-relaxed mb-8">
                    Estos conceptos no se estudian de manera aislada. La
                    finalidad es comprender cómo pueden trabajar juntos para
                    construir aplicaciones que respondan a necesidades reales.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-[var(--text-h)] border-b border-[var(--border)] pb-2 mt-4">Conceptos básicos</h2>

            <h3 id="que-es-api" className="text-xl font-medium text-[var(--text-h)] mt-4 scroll-mt-24">¿Qué es una API?</h3>
            <p className="text-[var(--text)] text-lg leading-relaxed mt-2">
                Una API (Application Programming Interface) es un conjunto
                de reglas y mecanismos que permite que diferentes
                aplicaciones o componentes se comuniquen entre sí. En el desarrollo web, las APIs permiten que un cliente
                solicite información o ejecute determinadas acciones en
                un servidor.
            </p>

            <div className="bg-[var(--code-bg)] p-6 rounded-lg border border-[var(--border)] my-6 flex flex-col gap-3">
                <p className="text-[var(--text)] text-[15px] leading-relaxed">
                    Imaginemos una aplicación como un Restaurante. La
                    comida que se sirve en el restaurante es el recurso
                    que los clientes desean obtener.
                </p>
                <p className="text-[var(--text)] text-[15px] leading-relaxed">
                    El <strong className="text-[var(--text-h)]">mesero</strong> sería el encargado de recibir
                    los pedidos de los clientes y entregarlos a la cocina.
                </p>
                <p className="text-[var(--text)] text-[15px] leading-relaxed">
                    La <strong className="text-[var(--text-h)]">cocina</strong> sería la encargada de procesar
                    la información y preparar los platos.
                </p>
                <p className="text-[var(--text)] text-[15px] leading-relaxed">
                    La <strong className="text-[var(--text-h)]">API</strong> sería el mesero encargado de recibir los
                    pedidos de los clientes y llevarlos a la cocina, además de
                    entregar los platos servidos a los clientes.
                </p>
            </div>

            <h3 id="que-es-framework" className="text-xl font-medium text-[var(--text-h)] mt-8 scroll-mt-24">¿Qué es un framework?</h3>
            <p className="text-[var(--text)] text-lg leading-relaxed mt-2">
                Un framework es un conjunto de herramientas, bibliotecas y
                estructuras que proporciona una base para desarrollar
                aplicaciones. Los frameworks permiten evitar tener que construir
                determinadas funcionalidades desde cero y ayudan a
                organizar el código de una aplicación.
            </p>

            <h3 className="text-xl font-medium text-[var(--text-h)] mt-8">¿Qué es una base de datos relacional?</h3>
            <p className="text-[var(--text)] text-lg leading-relaxed mt-2">
                Una base de datos relacional es un sistema utilizado para
                almacenar información de manera estructurada mediante
                tablas relacionadas entre sí.
            </p>

            <h3 className="text-xl font-medium text-[var(--text-h)] mt-8">¿Qué es una aplicación web?</h3>
            <p className="text-[var(--text)] text-lg leading-relaxed mt-2">
                Una aplicación web es un software al que se puede acceder
                mediante un navegador web. Normalmente está compuesta por
                diferentes componentes que trabajan en conjunto (interfaz, servidor, base de datos).
            </p>


            <h2 className="text-2xl font-semibold text-[var(--text-h)] border-b border-[var(--border)] pb-2 mt-12">Conceptos útiles para el desarrollo web</h2>

            <h3 id="uri-url" className="text-xl font-medium text-[var(--text-h)] mt-4 scroll-mt-24">¿Qué es una URI y una URL?</h3>
            <p className="text-[var(--text)] text-lg leading-relaxed mt-2">
                Una URI (Uniform Resource Identifier) es un identificador
                utilizado para identificar un recurso dentro de un
                contexto determinado. Una URL (Uniform Resource Locator) es un tipo de URI que,
                además de identificar un recurso, proporciona información
                sobre cómo localizarlo.
            </p>

            <pre className="bg-[var(--code-bg)] p-4 rounded-md border border-[var(--border)] overflow-x-auto my-4">
                <code className="text-[var(--text-h)] font-mono text-[15px]">
                    https://example.com/usuarios
                </code>
            </pre>

            <h3 id="protocolos-metodos-http" className="text-xl font-medium text-[var(--text-h)] mt-8 scroll-mt-24">¿Qué es HTTP? (Protocolos y Métodos HTTP)</h3>
            <p className="text-[var(--text)] text-lg leading-relaxed mt-2">
                HTTP (HyperText Transfer Protocol) es uno de los
                principales protocolos utilizados para la comunicación
                en la web.
            </p>

            <ul className="list-disc pl-6 flex flex-col gap-2 text-[var(--text)] text-lg mt-4 mb-8">
                <li><strong className="text-[var(--text-h)]">GET:</strong> obtener información.</li>
                <li><strong className="text-[var(--text-h)]">POST:</strong> enviar o crear información.</li>
                <li><strong className="text-[var(--text-h)]">PUT:</strong> actualizar información.</li>
                <li><strong className="text-[var(--text-h)]">PATCH:</strong> modificar parcialmente información.</li>
                <li><strong className="text-[var(--text-h)]">DELETE:</strong> eliminar información.</li>
            </ul>

            <h3 className="text-xl font-medium text-[var(--text-h)] mt-8">¿Qué es un cliente y qué es un servidor?</h3>
            <p className="text-[var(--text)] text-lg leading-relaxed mt-2 mb-4">
                En una aplicación web es común encontrar una arquitectura
                basada en la comunicación entre un cliente y un servidor.
            </p>

            <pre className="bg-[var(--code-bg)] p-4 rounded-md border border-[var(--border)] overflow-x-auto my-4">
                <code className="text-[var(--text-h)] font-mono text-[15px]">
                    Cliente → Solicitud → Servidor{"\n"}
                    Cliente ← Respuesta ← Servidor
                </code>
            </pre>

            <h3 className="text-xl font-medium text-[var(--text-h)] mt-8">¿Qué es JSON?</h3>
            <p className="text-[var(--text)] text-lg leading-relaxed mt-2 mb-4">
                JSON (JavaScript Object Notation) es un formato utilizado
                frecuentemente para representar e intercambiar
                información entre aplicaciones.
            </p>

            <pre className="bg-[var(--code-bg)] p-4 rounded-md border border-[var(--border)] overflow-x-auto my-4">
                <code className="text-[var(--text-h)] font-mono text-[15px]">
{`{
    "nombre": "Juan",
    "edad": 20
}`}
                </code>
            </pre>

        </ClassLayout>
    );
};

export default IntroductionPage;
