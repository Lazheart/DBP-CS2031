import { useState, useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import StepSideBar from "../../components/StepSideBar";
import QuizModal from "../../components/QuizzModal";
import { frontendRouterAxiosSubModules } from "../../data/frontendRouterAxiosQuestions";
import { useLocalStorage } from "../../hook/SessionStorageManager";

/* ─── Sub-module content ─────────────────────────────────── */

const SubModuleContent = ({ id }: { id: string; lessonId: string }) => {
  switch (id) {
    case "react-router-basico":
      return (
        <article className="class-article">
          <h1>React Router: Rutas Básicas</h1>

          <h2>¿Qué es React Router?</h2>
          <p>
            Es la librería estándar para manejar navegación en aplicaciones de
            React. Permite construir Single Page Applications (SPA) donde la URL
            cambia y se muestra un componente distinto, sin recargar el
            navegador.
          </p>

          <h2>Estructura básica</h2>
          <div className="class-code-block">
            <code>{`<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docker" element={<DockerPage />} />
    </Routes>
</BrowserRouter>`}</code>
          </div>

          <h2>Navegación con Link</h2>
          <p>
            Para navegar sin recargar la página, se usa el componente{" "}
            <code>{"<Link>"}</code> en vez de una etiqueta <code>{"<a>"}</code>{" "}
            normal:
          </p>
          <div className="class-code-block">
            <code>{`<Link to="/docker">Ir a Docker</Link>`}</code>
          </div>

          <h2>Navegación programática</h2>
          <p>
            El hook <code>useNavigate</code> permite redirigir al usuario desde
            código, por ejemplo después de completar un formulario:
          </p>
          <div className="class-code-block">
            <code>{`const navigate = useNavigate()
navigate('/dashboard')`}</code>
          </div>
        </article>
      );

    case "rutas-dinamicas-params":
      return (
        <article className="class-article">
          <h1>Rutas Dinámicas y Parámetros</h1>

          <h2>Definir una ruta dinámica</h2>
          <p>
            Para capturar un valor variable en la URL (como el ID de un
            producto), se usa el prefijo <code>:</code>:
          </p>
          <div className="class-code-block">
            <code>{`<Route path="/productos/:id" element={<ProductoDetalle />} />`}</code>
          </div>

          <h2>Leer el parámetro con useParams</h2>
          <div className="class-code-block">
            <code>{`const { id } = useParams()
// Si la URL es /productos/42, id vale "42"`}</code>
          </div>

          <h2>Query Params</h2>
          <p>
            A diferencia de los parámetros de ruta, los query params (
            <code>?orden=precio</code>) suelen usarse para filtros, orden o
            paginación. Se leen y actualizan con <code>useSearchParams</code>.
          </p>
          <div className="class-code-block">
            <code>{`const [searchParams, setSearchParams] = useSearchParams()
const orden = searchParams.get('orden')`}</code>
          </div>

          <h2>Página 404</h2>
          <p>
            Una ruta comodín <code>*</code> como última opción captura cualquier
            URL que no haya coincidido con ninguna otra ruta:
          </p>
          <div className="class-code-block">
            <code>{`<Route path="*" element={<NotFound />} />`}</code>
          </div>
        </article>
      );

    case "axios-peticiones":
      return (
        <article className="class-article">
          <h1>Axios: Peticiones GET/POST</h1>

          <h2>¿Qué es Axios?</h2>
          <p>
            Axios es una librería basada en promesas para hacer peticiones HTTP.
            Simplifica el trabajo frente al fetch nativo: convierte la respuesta
            a JSON automáticamente y rechaza la promesa ante errores HTTP.
          </p>

          <h2>Petición GET</h2>
          <div className="class-code-block">
            <code>{`const response = await axios.get('/api/productos')
console.log(response.data)`}</code>
          </div>

          <h2>Petición POST</h2>
          <div className="class-code-block">
            <code>{`const response = await axios.post('/api/productos', {
    nombre: 'Teclado',
    precio: 99,
})`}</code>
          </div>

          <h2>Manejo de errores</h2>
          <div className="class-code-block">
            <code>{`try {
    const { data } = await axios.get('/api/productos')
    setProductos(data)
} catch (error) {
    console.error('Error al obtener productos', error)
}`}</code>
          </div>
        </article>
      );

    case "interceptores-errores":
      return (
        <article className="class-article">
          <h1>Interceptores y Manejo de Errores</h1>

          <h2>¿Qué es un interceptor?</h2>
          <p>
            Es una función que Axios ejecuta automáticamente antes de enviar una
            petición o después de recibir una respuesta, útil para centralizar
            lógica repetitiva.
          </p>

          <h2>Interceptor de request: agregar token</h2>
          <div className="class-code-block">
            <code>{`api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = \`Bearer \${token}\`
    return config
})`}</code>
          </div>

          <h2>Interceptor de response: manejar 401</h2>
          <div className="class-code-block">
            <code>{`api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // cerrar sesión, redirigir a login, etc.
        }
        return Promise.reject(error)
    }
)`}</code>
          </div>

          <h2>Instancia con baseURL</h2>
          <div className="class-code-block">
            <code>{`const api = axios.create({
    baseURL: 'https://api.miapp.com',
})`}</code>
          </div>

          <h2>Estados de carga y error (UX)</h2>
          <p>
            Es buena práctica manejar explícitamente los estados de{" "}
            <strong>loading</strong>, <strong>éxito</strong> y{" "}
            <strong>error</strong> al consumir una API, para que el usuario
            siempre tenga retroalimentación clara de lo que está pasando.
          </p>
        </article>
      );

    default:
      return null;
  }
};

/* ─── Main page ──────────────────────────────────────────── */

const RouterAxiosPage = () => {
  const [activeId, setActiveId] = useLocalStorage(
    "frontend-router-active-id",
    frontendRouterAxiosSubModules[0].id,
  );
  const [completedIds, setCompletedIds] = useLocalStorage<string[]>(
    "frontend-router-completed-ids",
    [],
  );
  const [quizOpen, setQuizOpen] = useState(false);

  const activeModule = frontendRouterAxiosSubModules.find(
    (m) => m.id === activeId,
  )!;
  const totalProgress = Math.round(
    (completedIds.length / frontendRouterAxiosSubModules.length) * 100,
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

  const steps = frontendRouterAxiosSubModules.map((m) => ({
    id: m.id,
    title: m.title,
    color: m.color,
  }));

  const isModuleComplete =
    completedIds.length === frontendRouterAxiosSubModules.length;

  useEffect(() => {
    if (isModuleComplete) {
      localStorage.setItem(
        "frontendRouterAxiosCompleted",
        JSON.stringify(true),
      );
    }
  }, [isModuleComplete]);

  const currentIdx = frontendRouterAxiosSubModules.findIndex(
    (m) => m.id === activeId,
  );
  const hasNext = currentIdx < frontendRouterAxiosSubModules.length - 1;
  const hasPrev = currentIdx > 0;

  return (
    <div className="class-page">
      {/* Progress bar header */}
      <ProgressBar
        lesson={{ topic: "Frontend", title: "Router & Axios" }}
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
          <SubModuleContent id={activeId} lessonId={"router-01"} />

          {/* Completion banner */}
          {isModuleComplete && (
            <div className="class-complete-banner">
              <span className="class-complete-icon">✓</span>
              <div>
                <strong>¡Módulo completado!</strong>
                <p>Has completado todos los submódulos de Router & Axios.</p>
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
                      frontendRouterAxiosSubModules[currentIdx - 1].id,
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
                      frontendRouterAxiosSubModules[currentIdx + 1].id,
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
          lessonNumber="05"
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

export default RouterAxiosPage;
