import ModuleHeader from "../../components/PageHeader";
import ModuleSessionCard from "../../components/ModuleSessionCard";

const FrontendHomePage = () => {
  return (
    <div className="frontend-home-page">
      <ModuleHeader
        lesson={{
          topic: "Frontend",
          title: "La cara de la web",
        }}
      />

      <div id="modules-section" className="modules-section">
        <div className="modules-layout">
          {/* Texto superior */}
          <div className="modules-text">
            <h1 className="modules-title center">Módulos</h1>

            <p className="modules-desc">
              En este módulo aprenderás a construir interfaces web modernas
              utilizando React y TypeScript. Desde los fundamentos de los
              componentes hasta la comunicación con APIs y el manejo de
              diferentes estrategias de renderizado.
            </p>

            <p className="modules-desc">
              El objetivo es que puedas desarrollar aplicaciones frontend
              interactivas, organizadas y conectadas con un backend.
            </p>

            <p className="modules-note">
              <strong>Nota:</strong> Se recomienda seguir los módulos en orden,
              ya que cada sesión introduce conceptos utilizados en las
              siguientes.
            </p>
          </div>

          {/* Cards */}
          <div className="modules-grid">
            <ModuleSessionCard
              number="01"
              title="Fundamentos de React + CSS"
              description="Introducción a React, JSX, componentes y los fundamentos de CSS para construir interfaces modernas y responsivas."
              to="/frontend/fundamentos"
              recommended
              tags={["React", "JSX", "CSS", "Flexbox", "Grid"]}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    transform="rotate(30 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    transform="rotate(90 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4"
                    transform="rotate(150 12 12)"
                  />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              }
            />

            <ModuleSessionCard
              number="02"
              title="Componentes, Props y State"
              description="Aprende a construir componentes reutilizables y a gestionar la información y el comportamiento dinámico de una interfaz."
              to="/frontend/componentes"
              tags={["Components", "Props", "State", "useState"]}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M9 9h6v6H9z" />
                  <path d="M9 4v2M15 4v2M9 18v2M15 18v2" />
                  <path d="M4 9h2M4 15h2M18 9h2M18 15h2" />
                </svg>
              }
            />

            <ModuleSessionCard
              number="03"
              title="Hooks + Web Storage"
              description="Utiliza Hooks para controlar efectos y estados de la aplicación, y aprende a conservar información en el navegador."
              to="/frontend/hooks-storage"
              tags={["useEffect", "Hooks", "localStorage", "sessionStorage"]}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 7h8" />
                  <path d="M8 11h8" />
                  <path d="M8 15h5" />
                  <path d="M16 18h.01" />
                </svg>
              }
            />

            <ModuleSessionCard
              number="04"
              title="Router + Axios + APIs"
              description="Conecta diferentes páginas de una SPA y aprende a consumir APIs REST para comunicar React con el backend."
              to="/frontend/router-axios"
              tags={["Router", "Axios", "REST API", "SPA"]}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="5" cy="12" r="2" />
                  <circle cx="19" cy="6" r="2" />
                  <circle cx="19" cy="18" r="2" />
                  <path d="M7 12h5" />
                  <path d="M12 12l5-6" />
                  <path d="M12 12l5 6" />
                </svg>
              }
            />

            <ModuleSessionCard
              number="05"
              title="TypeScript + UX/UI + Rendering"
              description="Mejora la calidad de tus aplicaciones con TypeScript, principios de UX/UI y una introducción a SPA, CSR y SSR."
              to="/frontend/typescript-ux-rendering"
              tags={["TypeScript", "UX/UI", "SPA", "CSR", "SSR"]}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 8h10" />
                  <path d="M7 12h6" />
                  <path d="M7 16h8" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendHomePage;
