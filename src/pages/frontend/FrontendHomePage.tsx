import { Link } from "react-router-dom";
import { FaReact, FaCode, FaDatabase } from "react-icons/fa";
import { SiAxios, SiTypescript } from "react-icons/si";
import ModuleHeader from "../../components/PageHeader";

const FrontendHomePage = () => {
  const iconsSize = 45;

  return (
    <div className="tools-page">
      <ModuleHeader
        lesson={{
          topic: "Frontend",
          title: "El rostro de tu web",
        }}
      />

      <div className="tools-page-content ">
        {/* Contenedor del texto introductorio */}
        <div className="tools-intro-container">
          <h1 className="hero-title-row ">CONSTRUYE INTERFACES WEB MODERNAS</h1>

          <p className="tools-intro-desc ">
            En este módulo aprenderás los fundamentos necesarios para
            desarrollar aplicaciones frontend modernas, interactivas y
            conectadas con servicios backend.
          </p>

          <div className="tools-section-header">
            <h2 className=" hero-section-title">Desarrollo Frontend</h2>

            <p className="tools-section-subtitle">
              Explora las siguientes sesiones para aprender los conceptos
              fundamentales de React y el desarrollo web.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="front-grid hero-section-minibg">
          {/* 01 — React + CSS */}
          <Link to="/frontend/fundamentos" className="tool-card ">
            <div className="tool-card__icon">
              <FaReact size={iconsSize} />
            </div>

            <h3 className="tool-card__title">React + CSS</h3>

            <p className="tool-card__desc">
              Aprende los fundamentos de React, JSX y CSS para construir
              interfaces modernas y responsivas.
            </p>
          </Link>

          {/* 02 — Components */}
          <Link to="/frontend/componentes" className="tool-card ">
            <div className="tool-card__icon">
              <FaCode size={iconsSize} />
            </div>

            <h3 className="tool-card__title">Components, Props & State</h3>

            <p className="tool-card__desc">
              Construye componentes reutilizables y aprende a manejar
              información y comportamiento dentro de React.
            </p>
          </Link>

          {/* 03 — Hooks + Web Storage */}
          <Link
            to="/frontend/hooks-storage"
            className="tool-card about-section"
          >
            <div className="tool-card__icon">
              <FaDatabase size={iconsSize} />
            </div>

            <h3 className="tool-card__title">Hooks + Web Storage</h3>

            <p className="tool-card__desc">
              Trabaja con Hooks y aprende a almacenar información utilizando
              localStorage y sessionStorage.
            </p>
          </Link>

          {/* 04 — Router + Axios */}
          <Link to="/frontend/router-axios" className="tool-card ">
            <div className="tool-card__icon">
              <SiAxios size={iconsSize} />
            </div>

            <h3 className="tool-card__title">Router + Axios + APIs</h3>

            <p className="tool-card__desc">
              Crea navegación SPA y conecta tu aplicación React con APIs REST
              mediante Axios.
            </p>
          </Link>

          {/* 05 — TypeScript + UX/UI */}
          <Link
            to="/frontend/typescript-ux-rendering"
            className="tool-card about-section"
          >
            <div className="tool-card__icon">
              <SiTypescript size={iconsSize} />
            </div>

            <h3 className="tool-card__title">TypeScript + UX/UI</h3>

            <p className="tool-card__desc">
              Mejora tus aplicaciones con TypeScript, principios de UX/UI y
              conceptos de SPA, CSR y SSR.
            </p>
          </Link>
        </div>

        <div className="tools-recommendation">
          <p className="tools-recommendation-text">
            Recomendamos seguir las sesiones en orden para aprovechar mejor el
            contenido del módulo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontendHomePage;
