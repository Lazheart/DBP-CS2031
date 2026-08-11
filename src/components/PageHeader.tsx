import React from "react";
import { useNavigate } from "react-router-dom";
import dbpLogo from "/dbp-cs2031.png";

interface ModuleHeaderProps {
  lesson?: {
    topic: string;
    title: string;
  };
}

const ModuleHeader: React.FC<ModuleHeaderProps> = ({
  lesson = {
    topic: "Introducción",
    title: "Fundamentos",
  },
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");

    // Volver a la sección de módulos del Home
    setTimeout(() => {
      const section = document.getElementById("modules-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(30,30,34,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(242,240,235,0.07)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "0 20px",
          height: "56px",
        }}
      >
        {/* BOTÓN REGRESAR */}
        <button
          onClick={handleBackClick}
          style={{
            background: "none",
            border: "none",
            color: "#7A7874",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontFamily: "Outfit, sans-serif",
            padding: 0,
            transition: "color 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#F2F0EB";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#7A7874";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>

          <span className="hide-xs">CS2031</span>
        </button>

        {/* SEPARADOR */}
        <div
          style={{
            width: "1px",
            height: "20px",
            background: "rgba(242,240,235,0.1)",
            flexShrink: 0,
          }}
        />

        {/* INFORMACIÓN DEL MÓDULO */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#7A7874",
              marginBottom: "2px",
            }}
          >
            Módulo · {lesson.topic}
          </div>

          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#F2F0EB",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {lesson.title}
          </div>
        </div>

        {/* LOGO DBP */}
        <img
          src={dbpLogo}
          alt="DBP CS2031"
          style={{
            marginLeft: "auto",
            flexShrink: 0,
            width: "30px",
            height: "30px",
            borderRadius: "6px",
            objectFit: "cover",
          }}
        />
      </div>
    </header>
  );
};

export default ModuleHeader;
