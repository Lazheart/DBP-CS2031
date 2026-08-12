import { Link } from "react-router-dom"
import { FaGitAlt, FaGithub, FaDocker } from "react-icons/fa"
import { SiPostman } from "react-icons/si"
import IntroAdvice from "../../components/IntroAdvice"
import ModuleHeader from "../../components/PageHeader"

const ToolsPage = () => {
    const iconsSize = 45;
    return (
        <div className="tools-page">
            <ModuleHeader
                lesson={{
                    topic: "Introductorio | Herramientas de Desarrollo",
                    title: "Automatiza tu flujo de trabajo",
                }}
            />
            <IntroAdvice />

            <div className="tools-page-content">
                {/* Contenedor del texto introductorio */}
                <div className="tools-intro-container">
                    <h1 className="tools-intro-title">
                        DOMINA TUS <span className="hero-title-gradient">HERRAMIENTAS</span> DE DESARROLLO
                    </h1>

                    <p className="tools-intro-desc">
                        Desarrollar software va más allá de construir APIs e interfaces de usuario.
                        Existen diversas herramientas fundamentales que permiten optimizar el desarrollo,
                        automatizar tareas y colaborar de manera más eficiente. Dominarlas no solo potenciará
                        tu productividad, sino que es indispensable para desenvolverte como desarrollador profesional.
                    </p>

                    <div className="tools-section-header">
                        <h2 className="tools-section-title">Herramientas de Desarrollo</h2>
                        <p className="tools-section-subtitle">
                            En este módulo revisaremos detalladamente las siguientes herramientas:
                        </p>
                    </div>
                </div>

                <div className="tool-grid">
                    <Link to="/tools/git" className="tool-card">
                        <div className="tool-card__icon">
                            <FaGitAlt size={iconsSize} />
                        </div>
                        <h3 className="tool-card__title">Git</h3>
                        <p className="tool-card__desc">
                            Herramienta de control de versiones, asegúrate siempre de poder volver a una versión correcta.
                        </p>
                    </Link>

                    <Link to="/tools/docker" className="tool-card">
                        <div className="tool-card__icon">
                            <FaDocker size={iconsSize} />
                        </div>
                        <h3 className="tool-card__title">Docker</h3>
                        <p className="tool-card__desc">
                            Plataforma que permite crear y distribuir aplicaciones en contenedores. Evita el "funcionaba en mi máquina".
                        </p>
                    </Link>

                    <Link to="/tools/postman" className="tool-card">
                        <div className="tool-card__icon">
                            <SiPostman size={iconsSize} />
                        </div>
                        <h3 className="tool-card__title">Postman</h3>
                        <p className="tool-card__desc">
                            Herramienta de pruebas de APIs y peticiones HTTP. Automatiza pruebas a APIs y muchísimo más.
                        </p>
                    </Link>

                    <Link to="/tools/github" className="tool-card">
                        <div className="tool-card__icon">
                            <FaGithub size={iconsSize} />
                        </div>
                        <h3 className="tool-card__title">GitHub</h3>
                        <p className="tool-card__desc">
                            Plataforma web colaborativa basada en Git. Ejecuta flujos de trabajo complejos con GitHub Actions.
                        </p>
                    </Link>
                </div>

                <div className="tools-recommendation">
                    <p className="tools-recommendation-text">
                        Recomendamos ampliamente iniciar por Git y finalizar viendo GitHub
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ToolsPage