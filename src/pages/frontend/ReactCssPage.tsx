import { useState, useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import StepSideBar from "../../components/StepSideBar";
import QuizModal from "../../components/QuizzModal";
import { frontendReactCssSubModules } from "../../data/frontendReactCssQuestions";
import { useLocalStorage } from "../../hook/SessionStorageManager";

/* ─── Sub-module content ─────────────────────────────────── */

const SubModuleContent = ({ id }: { id: string; lessonId: string }) => {
  switch (id) {
    case "css-modules":
      return (
        <article className="class-article">
          <h1>CSS Modules</h1>

          <h2>¿Qué problema resuelven?</h2>
          <p>
            En una app grande, es fácil que dos componentes definan una clase
            con el mismo nombre (ej. <code>.card</code>) y se pisen entre sí.
            Los CSS Modules generan nombres de clase únicos automáticamente,
            limitando los estilos al componente que los importa.
          </p>

          <h2>Convención de archivos</h2>
          <p>
            Un CSS Module se nombra con el sufijo <code>.module.css</code>, por
            ejemplo <code>Card.module.css</code>. El bundler detecta esa
            extensión y transforma las clases a nombres únicos.
          </p>

          <h2>Uso en un componente</h2>
          <div className="class-code-block">
            <code>{`import styles from './Card.module.css'

const Card = () => {
    return <div className={styles.card}>Hola</div>
}`}</code>
          </div>

          <h2>Ventaja principal</h2>
          <p>
            Los estilos quedan encapsulados: puedes reutilizar el nombre{" "}
            <code>.card</code> en varios archivos <code>.module.css</code> sin
            que se generen conflictos entre componentes.
          </p>
        </article>
      );

    case "estilos-condicionales":
      return (
        <article className="class-article">
          <h1>Estilos Condicionales</h1>

          <h2>Clases dinámicas</h2>
          <p>
            Muchas veces necesitamos aplicar una clase solo si se cumple una
            condición, por ejemplo resaltar un botón activo. Esto se logra
            construyendo el string de <code>className</code> dinámicamente.
          </p>

          <div className="class-code-block">
            <code>{`<button className={\`btn \${isActive ? 'btn-active' : ''}\`}>
    Enviar
</button>`}</code>
          </div>

          <h2>Usando clsx</h2>
          <p>
            Para combinar varias condiciones sin que el código se vuelva
            ilegible, se suele usar una librería como <code>clsx</code>:
          </p>
          <div className="class-code-block">
            <code>{`import clsx from 'clsx'

<button className={clsx('btn', {
    'btn-active': isActive,
    'btn-disabled': disabled,
})}>
    Enviar
</button>`}</code>
          </div>

          <h2>Estilos inline dinámicos</h2>
          <p>
            Cuando el valor depende de un dato en tiempo de ejecución (como un
            color que viene de props), se usa la prop <code>style</code> con un
            objeto de JavaScript:
          </p>
          <div className="class-code-block">
            <code>{`<div style={{ '--quiz-color': activeModule.color } as React.CSSProperties}>`}</code>
          </div>
        </article>
      );

    case "tailwind-utility-first":
      return (
        <article className="class-article">
          <h1>Tailwind CSS: Utility-First</h1>

          <h2>¿Qué es "utility-first"?</h2>
          <p>
            En lugar de escribir CSS personalizado, Tailwind ofrece clases
            utilitarias pequeñas (<code>p-4</code>, <code>flex</code>,{" "}
            <code>text-center</code>) que se combinan directamente en el JSX
            para construir cualquier diseño.
          </p>

          <h2>Ejemplo</h2>
          <div className="class-code-block">
            <code>{`<div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-lg font-bold">Título</h2>
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Acción
    </button>
</div>`}</code>
          </div>

          <h2>Estados como hover y focus</h2>
          <p>
            Prefijos como <code>hover:</code> o <code>focus:</code> aplican la
            utilidad solo bajo ese estado, evitando escribir pseudo-clases en un
            archivo CSS aparte.
          </p>

          <h2>Responsive con prefijos</h2>
          <p>
            Prefijos como <code>sm:</code>, <code>md:</code> o <code>lg:</code>{" "}
            aplican una clase solo a partir de cierto ancho de pantalla, por
            ejemplo <code>md:flex-row</code>.
          </p>
        </article>
      );

    case "diseno-responsive":
      return (
        <article className="class-article">
          <h1>Diseño Responsive</h1>

          <h2>Breakpoints</h2>
          <p>
            Un breakpoint es un ancho de pantalla a partir del cual el diseño
            cambia para adaptarse mejor al dispositivo (móvil, tablet, desktop).
          </p>

          <h2>Media Queries</h2>
          <div className="class-code-block">
            <code>{`.class-layout {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .class-layout {
        flex-direction: row;
    }
}`}</code>
          </div>

          <h2>Enfoque Mobile-First</h2>
          <p>
            Consiste en definir primero los estilos base pensando en pantallas
            pequeñas, y luego usar media queries con <code>min-width</code> para
            ir agregando estilos a medida que la pantalla crece.
          </p>

          <h2>Unidades flexibles</h2>
          <ul className="class-list">
            <li>
              <strong>rem:</strong> relativa al tamaño de fuente raíz, ideal
              para tipografía accesible.
            </li>
            <li>
              <strong>%:</strong> relativa al contenedor padre.
            </li>
            <li>
              <strong>vw / vh:</strong> relativas al viewport (ancho/alto de la
              ventana).
            </li>
          </ul>
        </article>
      );

    default:
      return null;
  }
};

/* ─── Main page ──────────────────────────────────────────── */

const ReactCssPage = () => {
  const [activeId, setActiveId] = useLocalStorage(
    "frontend-css-active-id",
    frontendReactCssSubModules[0].id,
  );
  const [completedIds, setCompletedIds] = useLocalStorage<string[]>(
    "frontend-css-completed-ids",
    [],
  );
  const [quizOpen, setQuizOpen] = useState(false);

  const activeModule = frontendReactCssSubModules.find(
    (m) => m.id === activeId,
  )!;
  const totalProgress = Math.round(
    (completedIds.length / frontendReactCssSubModules.length) * 100,
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

  const steps = frontendReactCssSubModules.map((m) => ({
    id: m.id,
    title: m.title,
    color: m.color,
  }));

  const isModuleComplete =
    completedIds.length === frontendReactCssSubModules.length;

  useEffect(() => {
    if (isModuleComplete) {
      localStorage.setItem("frontendReactCssCompleted", JSON.stringify(true));
    }
  }, [isModuleComplete]);

  const currentIdx = frontendReactCssSubModules.findIndex(
    (m) => m.id === activeId,
  );
  const hasNext = currentIdx < frontendReactCssSubModules.length - 1;
  const hasPrev = currentIdx > 0;

  return (
    <div className="class-page">
      {/* Progress bar header */}
      <ProgressBar
        lesson={{ topic: "Frontend", title: "React & CSS" }}
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
          <SubModuleContent id={activeId} lessonId={"css-01"} />

          {/* Completion banner */}
          {isModuleComplete && (
            <div className="class-complete-banner">
              <span className="class-complete-icon">✓</span>
              <div>
                <strong>¡Módulo completado!</strong>
                <p>Has completado todos los submódulos de React & CSS.</p>
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
                      frontendReactCssSubModules[currentIdx - 1].id,
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
                      frontendReactCssSubModules[currentIdx + 1].id,
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
          lessonNumber="04"
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

export default ReactCssPage;
