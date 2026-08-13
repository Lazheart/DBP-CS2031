import { useState, useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import StepSideBar from "../../components/StepSideBar";
import QuizModal from "../../components/QuizzModal";
import { frontendHooksStorageSubModules } from "../../data/frontendHooksStorageQuestions";
import { useLocalStorage } from "../../hook/SessionStorageManager";

/* ─── Sub-module content ─────────────────────────────────── */

const SubModuleContent = ({ id }: { id: string; lessonId: string }) => {
  switch (id) {
    case "useeffect-basico":
      return (
        <article className="class-article">
          <h1>useEffect: Efectos Secundarios</h1>

          <h2>¿Qué es un efecto secundario?</h2>
          <p>
            Un efecto secundario es cualquier interacción de tu componente con
            algo "externo" a React: peticiones a una API, temporizadores,
            suscripciones o manipulación directa del DOM. El hook{" "}
            <code>useEffect</code> permite ejecutar ese tipo de código después
            de que React actualiza la pantalla.
          </p>

          <h2>Sintaxis básica</h2>
          <div className="class-code-block">
            <code>{`useEffect(() => {
    console.log('El componente se renderizó')
}, [])`}</code>
          </div>

          <h2>El array de dependencias</h2>
          <ul className="class-list">
            <li>
              <strong>Sin array:</strong> el efecto corre después de cada
              render.
            </li>
            <li>
              <strong>Array vacío [ ]:</strong> el efecto corre una sola vez, al
              montar el componente.
            </li>
            <li>
              <strong>Array con valores [valor]:</strong> el efecto corre cada
              vez que ese valor cambie.
            </li>
          </ul>

          <h2>Función de limpieza (cleanup)</h2>
          <p>
            Si tu efecto retorna una función, React la ejecutará antes de volver
            a correr el efecto o al desmontar el componente. Es ideal para
            cancelar timers o suscripciones y evitar fugas de memoria.
          </p>
          <div className="class-code-block">
            <code>{`useEffect(() => {
    const id = setInterval(() => console.log('tick'), 1000)
    return () => clearInterval(id)
}, [])`}</code>
          </div>
        </article>
      );

    case "useref-dom":
      return (
        <article className="class-article">
          <h1>useRef y Referencias</h1>

          <h2>¿Qué es useRef?</h2>
          <p>
            <code>useRef</code> crea un objeto mutable (
            <code>{"{ current: valor }"}</code>) que persiste durante toda la
            vida del componente. A diferencia del estado, cambiar{" "}
            <code>ref.current</code> <strong>no</strong> provoca un nuevo
            renderizado.
          </p>

          <h2>Acceder al DOM</h2>
          <p>
            Uno de los usos más comunes es obtener acceso directo a un elemento
            del DOM, por ejemplo para hacer foco automático en un input.
          </p>
          <div className="class-code-block">
            <code>{`const inputRef = useRef<HTMLInputElement>(null)

useEffect(() => {
    inputRef.current?.focus()
}, [])

return <input ref={inputRef} />`}</code>
          </div>

          <h2>Guardar valores mutables</h2>
          <p>
            useRef también sirve como "caja" para guardar cualquier valor que
            necesite sobrevivir entre renders sin causar uno nuevo, como el ID
            de un <code>setTimeout</code> o un contador interno.
          </p>

          <h2>useState vs useRef</h2>
          <ul className="class-list">
            <li>
              <strong>useState:</strong> cambia el valor → provoca re-render.
            </li>
            <li>
              <strong>useRef:</strong> cambia el valor → NO provoca re-render.
            </li>
          </ul>
        </article>
      );

    case "custom-hooks":
      return (
        <article className="class-article">
          <h1>Custom Hooks</h1>

          <h2>¿Qué es un Custom Hook?</h2>
          <p>
            Es simplemente una función de JavaScript que empieza con el prefijo{" "}
            <code>use</code> y que puede llamar a otros hooks dentro de ella.
            Sirve para extraer y reutilizar lógica con estado entre varios
            componentes.
          </p>

          <h2>¿Por qué usarlos?</h2>
          <p>
            Si repites la misma lógica de useState y useEffect en varios
            componentes (por ejemplo, hacer fetch de datos), puedes encapsularla
            en un custom hook para no duplicar código.
          </p>

          <h2>Ejemplo: useLocalStorage</h2>
          <div className="class-code-block">
            <code>{`function useLocalStorage(key: string, initialValue: any) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key)
        return saved ? JSON.parse(saved) : initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}`}</code>
          </div>

          <h2>La regla del prefijo "use"</h2>
          <p>
            Nombrar la función con "use" no es solo una convención estética: le
            permite a React y a las herramientas de linting verificar que se
            cumplen las reglas de los hooks (por ejemplo, no llamarlos dentro de
            condicionales).
          </p>
        </article>
      );

    case "local-session-storage":
      return (
        <article className="class-article">
          <h1>localStorage y sessionStorage</h1>

          <h2>Web Storage API</h2>
          <p>
            El navegador ofrece dos mecanismos simples para guardar datos del
            lado del cliente: <code>localStorage</code> y{" "}
            <code>sessionStorage</code>. Ambos guardan pares clave-valor, pero
            solo aceptan <strong>strings</strong>.
          </p>

          <h2>localStorage vs sessionStorage</h2>
          <ul className="class-list">
            <li>
              <strong>localStorage:</strong> persiste aunque cierres el
              navegador o la pestaña.
            </li>
            <li>
              <strong>sessionStorage:</strong> se borra automáticamente al
              cerrar la pestaña.
            </li>
          </ul>

          <h2>Métodos principales</h2>
          <div className="class-code-block">
            <code>{`localStorage.setItem('tema', 'oscuro')   // Guardar
localStorage.getItem('tema')             // Leer -> "oscuro"
localStorage.removeItem('tema')          // Eliminar
localStorage.clear()                     // Borrar todo`}</code>
          </div>

          <h2>Guardando objetos</h2>
          <p>
            Como solo se pueden guardar strings, para persistir objetos o arrays
            hay que convertirlos con <code>JSON.stringify()</code> antes de
            guardarlos, y usar <code>JSON.parse()</code> al leerlos de vuelta.
          </p>
        </article>
      );

    default:
      return null;
  }
};

/* ─── Main page ──────────────────────────────────────────── */

const HooksStoragePage = () => {
  const [activeId, setActiveId] = useLocalStorage(
    "frontend-hooks-active-id",
    frontendHooksStorageSubModules[0].id,
  );
  const [completedIds, setCompletedIds] = useLocalStorage<string[]>(
    "frontend-hooks-completed-ids",
    [],
  );
  const [quizOpen, setQuizOpen] = useState(false);

  const activeModule = frontendHooksStorageSubModules.find(
    (m) => m.id === activeId,
  )!;
  const totalProgress = Math.round(
    (completedIds.length / frontendHooksStorageSubModules.length) * 100,
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

  const steps = frontendHooksStorageSubModules.map((m) => ({
    id: m.id,
    title: m.title,
    color: m.color,
  }));

  const isModuleComplete =
    completedIds.length === frontendHooksStorageSubModules.length;

  useEffect(() => {
    if (isModuleComplete) {
      localStorage.setItem(
        "frontendHooksStorageCompleted",
        JSON.stringify(true),
      );
    }
  }, [isModuleComplete]);

  const currentIdx = frontendHooksStorageSubModules.findIndex(
    (m) => m.id === activeId,
  );
  const hasNext = currentIdx < frontendHooksStorageSubModules.length - 1;
  const hasPrev = currentIdx > 0;

  return (
    <div className="class-page">
      {/* Progress bar header */}
      <ProgressBar
        lesson={{ topic: "Frontend", title: "Hooks & Storage" }}
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
          <SubModuleContent id={activeId} lessonId={"hooks-01"} />

          {/* Completion banner */}
          {isModuleComplete && (
            <div className="class-complete-banner">
              <span className="class-complete-icon">✓</span>
              <div>
                <strong>¡Módulo completado!</strong>
                <p>Has completado todos los submódulos de Hooks & Storage.</p>
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
                      frontendHooksStorageSubModules[currentIdx - 1].id,
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
                      frontendHooksStorageSubModules[currentIdx + 1].id,
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
          lessonNumber="03"
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

export default HooksStoragePage;
