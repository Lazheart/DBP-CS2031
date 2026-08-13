import { useState, useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import StepSideBar from "../../components/StepSideBar";
import QuizModal from "../../components/QuizzModal";
import { frontendComponentsPropsStateSubModules } from "../../data/frontendComponentsPropsStateQuestions";
import { useLocalStorage } from "../../hook/SessionStorageManager";

/* ─── Sub-module content ─────────────────────────────────── */

const SubModuleContent = ({ id }: { id: string; lessonId: string }) => {
  switch (id) {
    case "que-son-los-componentes":
      return (
        <article className="class-article">
          <h1>¿Qué son los Componentes?</h1>

          <h2>Componentes reutilizables</h2>
          <p>
            Los componentes permiten dividir una interfaz en piezas
            independientes y reutilizables. Cada componente puede tener su
            propia estructura, estilo y comportamiento.
          </p>

          <h2>JSX</h2>
          <p>
            JSX es una extensión de sintaxis que permite escribir código similar
            a HTML dentro de JavaScript. React lo transforma internamente en
            llamadas de funciones.
          </p>

          <h2>Un componente simple</h2>
          <div className="class-code-block">
            <code>{`const Saludo = () => {
    return <h1>Hola mundo</h1>
}`}</code>
          </div>

          <h2>Convención de nombres</h2>
          <p>
            Los componentes de React siempre empiezan con mayúscula (ej.{" "}
            <code>{"<Saludo />"}</code>) para que React los distinga de
            etiquetas HTML nativas como <code>{"<div>"}</code>.
          </p>
        </article>
      );

    case "props-comunicacion":
      return (
        <article className="class-article">
          <h1>Props: Comunicación entre Componentes</h1>

          <h2>¿Qué son las props?</h2>
          <p>
            Las props permiten enviar información desde un componente padre
            hacia un componente hijo, de forma similar a los argumentos de una
            función.
          </p>

          <div className="class-code-block">
            <code>{`const Saludo = ({ nombre }) => {
    return <h1>Hola {nombre}</h1>
}

// Uso: <Saludo nombre="Ana" />`}</code>
          </div>

          <h2>Props de solo lectura</h2>
          <p>
            Un componente hijo nunca debe modificar directamente las props que
            recibió. Si necesita cambiar algo, debe avisarle al padre (por
            ejemplo, mediante una función que el padre le pasó como prop).
          </p>

          <h2>Cualquier tipo de dato</h2>
          <p>
            Las props pueden ser strings, números, objetos, arrays e incluso
            funciones, lo que permite que un componente hijo notifique eventos
            hacia arriba (ej. <code>onClick</code>).
          </p>
        </article>
      );

    case "que-es-el-state":
      return (
        <article className="class-article">
          <h1>¿Qué es el State?</h1>

          <h2>Estado del componente</h2>
          <p>
            El state representa información que puede cambiar durante la
            ejecución de un componente y provocar una nueva renderización, como
            un contador o el texto escrito en un input.
          </p>

          <h2>Props vs State</h2>
          <ul className="class-list">
            <li>
              <strong>Props:</strong> vienen del padre, son de solo lectura.
            </li>
            <li>
              <strong>State:</strong> es interno del componente y puede
              modificarse.
            </li>
          </ul>

          <h2>State independiente por instancia</h2>
          <p>
            Si renderizas el mismo componente varias veces, cada instancia
            mantiene su propio state de forma aislada, sin interferir con las
            demás.
          </p>

          <h2>Actualizar el state correctamente</h2>
          <p>
            Nunca se debe modificar el state directamente (ej.{" "}
            <code>contador = contador + 1</code>). Siempre hay que usar la
            función setter para que React sepa que debe re-renderizar.
          </p>
        </article>
      );

    case "usestate-hook":
      return (
        <article className="class-article">
          <h1>El Hook useState</h1>

          <h2>¿Qué es useState?</h2>
          <p>
            El hook <code>useState</code> permite crear y actualizar estado
            dentro de un componente funcional. Retorna un array con dos
            elementos: el valor actual y una función para actualizarlo.
          </p>

          <div className="class-code-block">
            <code>{`const [contador, setContador] = useState(0)

setContador(contador + 1)`}</code>
          </div>

          <h2>Valor inicial</h2>
          <p>
            El argumento que se le pasa a <code>useState</code> (como el{" "}
            <code>0</code>) se usa únicamente como valor inicial, durante el
            primer renderizado.
          </p>

          <h2>Múltiples estados</h2>
          <p>
            Un componente puede declarar tantos <code>useState</code> como
            necesite, cada uno manejando una pieza de estado independiente.
          </p>

          <h2>Actualizar con base en el valor anterior</h2>
          <p>
            Cuando el nuevo valor depende del anterior, es más seguro pasar una
            función a la actualización:
          </p>
          <div className="class-code-block">
            <code>{`setContador(prev => prev + 1)`}</code>
          </div>
        </article>
      );

    case "props-vs-state":
      return (
        <article className="class-article">
          <h1>Props vs State</h1>

          <h2>¿Quién controla cada uno?</h2>
          <ul className="class-list">
            <li>
              <strong>Props:</strong> las controla el componente padre; el hijo
              solo las recibe.
            </li>
            <li>
              <strong>State:</strong> lo controla el propio componente donde se
              declaró.
            </li>
          </ul>

          <h2>Ejemplo de props</h2>
          <p>
            Enviar el color de un botón desde un componente padre hacia un
            componente hijo reutilizable es un caso típico de props.
          </p>

          <h2>Ejemplo de state</h2>
          <p>
            Saber si un menú desplegable está abierto o cerrado en este momento
            es información interna que cambia con el tiempo: un caso típico de
            state.
          </p>

          <h2>Re-render en cadena</h2>
          <p>
            Cuando un componente padre re-renderiza y le pasa nuevas props a su
            hijo, React vuelve a renderizar el hijo con esos nuevos valores. El
            state interno del hijo se mantiene intacto, salvo que el componente
            se desmonte.
          </p>
        </article>
      );

    default:
      return null;
  }
};

/* ─── Main page ──────────────────────────────────────────── */

const ComponentsPage = () => {
  const [activeId, setActiveId] = useLocalStorage(
    "frontend-components-active-id",
    frontendComponentsPropsStateSubModules[0].id,
  );

  const [completedIds, setCompletedIds] = useLocalStorage<string[]>(
    "frontend-components-completed-ids",
    [],
  );

  const [quizOpen, setQuizOpen] = useState(false);

  const activeModule = frontendComponentsPropsStateSubModules.find(
    (m) => m.id === activeId,
  )!;

  const totalProgress = Math.round(
    (completedIds.length / frontendComponentsPropsStateSubModules.length) * 100,
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

  const steps = frontendComponentsPropsStateSubModules.map((m) => ({
    id: m.id,
    title: m.title,
    color: m.color,
  }));

  const isModuleComplete =
    completedIds.length === frontendComponentsPropsStateSubModules.length;

  useEffect(() => {
    if (isModuleComplete) {
      localStorage.setItem(
        "frontendComponentsPropsStateCompleted",
        JSON.stringify(true),
      );
    }
  }, [isModuleComplete]);

  const currentIdx = frontendComponentsPropsStateSubModules.findIndex(
    (m) => m.id === activeId,
  );

  const hasNext =
    currentIdx < frontendComponentsPropsStateSubModules.length - 1;

  const hasPrev = currentIdx > 0;

  return (
    <div className="class-page">
      <ProgressBar
        lesson={{
          topic: "Frontend",
          title: "Components, Props & State",
        }}
        progress={totalProgress}
      />

      <div className="class-layout">
        <StepSideBar
          steps={steps}
          activeId={activeId}
          completedIds={completedIds}
          onSelect={handleSelectStep}
        />

        <main className="class-main">
          <SubModuleContent id={activeId} lessonId={"components-01"} />

          {isModuleComplete && (
            <div className="class-complete-banner">
              <span className="class-complete-icon">🎉</span>
              <div>
                <strong>¡Módulo completado!</strong>
                <p>Has completado Components, Props & State.</p>
              </div>
            </div>
          )}

          <div className="class-actions">
            <div className="class-actions-nav">
              {hasPrev && (
                <button
                  className="class-btn class-btn--secondary"
                  onClick={() =>
                    handleSelectStep(
                      frontendComponentsPropsStateSubModules[currentIdx - 1].id,
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
                      frontendComponentsPropsStateSubModules[currentIdx + 1].id,
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
                {
                  "--quiz-color": activeModule.color,
                } as React.CSSProperties
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

      {quizOpen && (
        <QuizModal
          lessonId={activeId}
          lessonNumber="02"
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

export default ComponentsPage;
