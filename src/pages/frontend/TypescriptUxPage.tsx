import { useState, useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import StepSideBar from "../../components/StepSideBar";
import QuizModal from "../../components/QuizzModal";
import { frontendTypescriptUxSubModules } from "../../data/frontendTypescriptUxQuestions";
import { useLocalStorage } from "../../hook/SessionStorageManager";

/* ─── Sub-module content ─────────────────────────────────── */

const SubModuleContent = ({ id }: { id: string; lessonId: string }) => {
  switch (id) {
    case "tipos-basicos-ts":
      return (
        <article className="class-article">
          <h1>Tipos Básicos en TypeScript</h1>

          <h2>¿Qué es TypeScript?</h2>
          <p>
            TypeScript es un superset de JavaScript que agrega tipado estático.
            Todo código JavaScript válido es también código TypeScript válido,
            pero TS permite declarar qué tipo de dato espera cada variable.
          </p>

          <h2>Tipos primitivos</h2>
          <div className="class-code-block">
            <code>{`let edad: number = 20
let nombre: string = 'Ana'
let activo: boolean = true
let nombres: string[] = ['Ana', 'Luis']`}</code>
          </div>

          <h2>¿Por qué usar tipos?</h2>
          <p>
            El chequeo de tipos permite detectar errores mientras escribes el
            código (por ejemplo, pasar un string donde se espera un número) en
            lugar de descubrirlos recién en tiempo de ejecución.
          </p>

          <h2>El tipo "any"</h2>
          <p>
            <code>any</code> desactiva el chequeo de tipos para una variable. Es
            útil en casos puntuales, pero abusar de él elimina las ventajas de
            usar TypeScript.
          </p>
        </article>
      );

    case "interfaces-types-props":
      return (
        <article className="class-article">
          <h1>Interfaces y Types para Props</h1>

          <h2>Tipando props de un componente</h2>
          <p>
            Una interface (o type) describe la forma de los props que recibe un
            componente, permitiendo que TypeScript avise si falta un prop
            obligatorio o se pasa el tipo equivocado.
          </p>

          <div className="class-code-block">
            <code>{`interface SaludoProps {
    nombre: string
    edad?: number   // prop opcional
}

const Saludo = ({ nombre, edad }: SaludoProps) => {
    return <h1>Hola {nombre}{edad ? \`, tienes \${edad} años\` : ''}</h1>
}`}</code>
          </div>

          <h2>Props opcionales</h2>
          <p>
            El símbolo <code>?</code> después del nombre de la propiedad (como{" "}
            <code>edad?</code>) indica que esa prop puede no estar presente al
            usar el componente.
          </p>

          <h2>interface vs type</h2>
          <p>
            Ambos describen formas de objetos. <code>interface</code> es útil
            cuando quieres extenderla con <code>extends</code>;{" "}
            <code>type</code> es más flexible para uniones, como{" "}
            <code>type Estado = 'activo' | 'inactivo'</code>.
          </p>
        </article>
      );

    case "estados-carga-error":
      return (
        <article className="class-article">
          <h1>Estados de Carga y Error (UX)</h1>

          <h2>Los tres estados de una petición</h2>
          <p>
            Al consumir una API, es buena práctica manejar explícitamente tres
            estados: <strong>cargando</strong>, <strong>éxito</strong> y{" "}
            <strong>error</strong>, para que el usuario siempre tenga
            retroalimentación.
          </p>

          <div className="class-code-block">
            <code>{`const [isLoading, setIsLoading] = useState(true)
const [data, setData] = useState(null)
const [error, setError] = useState<string | null>(null)

if (isLoading) return <Spinner />
if (error) return <ErrorMessage text={error} />
return <Contenido data={data} />`}</code>
          </div>

          <h2>Skeleton loaders</h2>
          <p>
            En vez de un spinner genérico, muchas interfaces modernas usan
            "skeletons": versiones grises y simplificadas del contenido final,
            que dan sensación de mayor rapidez mientras se espera la respuesta.
          </p>

          <h2>Mensajes de error accionables</h2>
          <p>
            Un buen mensaje de error es claro para el usuario final (evita
            tecnicismos como stack traces) y, cuando es posible, ofrece una
            acción concreta, como un botón de "Reintentar".
          </p>

          <h2>Evitar envíos duplicados</h2>
          <p>
            Deshabilitar un botón mientras una acción está en progreso (ej.
            "Enviando...") evita que el usuario dispare la misma acción varias
            veces por error.
          </p>
        </article>
      );

    default:
      return null;
  }
};

/* ─── Main page ──────────────────────────────────────────── */

const TypescriptUxPage = () => {
  const [activeId, setActiveId] = useLocalStorage(
    "frontend-ts-active-id",
    frontendTypescriptUxSubModules[0].id,
  );
  const [completedIds, setCompletedIds] = useLocalStorage<string[]>(
    "frontend-ts-completed-ids",
    [],
  );
  const [quizOpen, setQuizOpen] = useState(false);

  const activeModule = frontendTypescriptUxSubModules.find(
    (m) => m.id === activeId,
  )!;
  const totalProgress = Math.round(
    (completedIds.length / frontendTypescriptUxSubModules.length) * 100,
  );

  const handlePass = () => {
    if (!completedIds.includes(activeId)) {
      setCompletedIds((prev) => [...prev, activeId]);
    }
  };

  const handleSelectStep = (id: string) => {
    setActiveId(id);
    setQuizOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const steps = frontendTypescriptUxSubModules.map((m) => ({
    id: m.id,
    title: m.title,
    color: m.color,
  }));

  const isModuleComplete =
    completedIds.length === frontendTypescriptUxSubModules.length;

  useEffect(() => {
    if (isModuleComplete) {
      localStorage.setItem(
        "frontendTypescriptUxCompleted",
        JSON.stringify(true),
      );
    }
  }, [isModuleComplete]);

  const currentIdx = frontendTypescriptUxSubModules.findIndex(
    (m) => m.id === activeId,
  );
  const hasNext = currentIdx < frontendTypescriptUxSubModules.length - 1;
  const hasPrev = currentIdx > 0;

  return (
    <div className="class-page">
      {/* Progress bar header */}
      <ProgressBar
        lesson={{ topic: "Frontend", title: "TypeScript & UX" }}
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
          <SubModuleContent id={activeId} lessonId={"ts-01"} />

          {/* Completion banner */}
          {isModuleComplete && (
            <div className="class-complete-banner">
              <span className="class-complete-icon">✓</span>
              <div>
                <strong>¡Módulo completado!</strong>
                <p>Has completado todos los submódulos de TypeScript & UX.</p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="class-actions">
            <div className="class-actions-nav">
              {hasPrev && (
                <button
                  className="class-btn class-btn--secondary"
                  onClick={() =>
                    handleSelectStep(
                      frontendTypescriptUxSubModules[currentIdx - 1].id,
                    )
                  }
                >
                  ← Anterior
                </button>
              )}
              {hasNext && (
                <button
                  className="class-btn class-btn--secondary"
                  onClick={() =>
                    handleSelectStep(
                      frontendTypescriptUxSubModules[currentIdx + 1].id,
                    )
                  }
                >
                  Siguiente →
                </button>
              )}
            </div>

            <button
              className="class-btn class-btn--primary"
              style={
                { "--quiz-color": activeModule.color } as React.CSSProperties
              }
              onClick={() => setQuizOpen(true)}
              disabled={completedIds.includes(activeId)}
            >
              {completedIds.includes(activeId)
                ? "🎉 Submódulo completado"
                : "Iniciar cuestionario"}
            </button>
          </div>
        </main>
      </div>

      {/* Quiz modal */}
      {quizOpen && (
        <QuizModal
          lessonId={activeId}
          lessonNumber="06"
          lessonTitle={activeModule.title}
          topicColor={activeModule.color}
          questions={activeModule.questions}
          onClose={() => setQuizOpen(false)}
          onPass={handlePass}
        />
      )}
    </div>
  );
};

export default TypescriptUxPage;
