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
            <br />
            <IntroAdvice />
            <br />

            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl font-bold mb-4">¿Basta con saber programar <br /> para ser desarrollador?</h1>

                <div className="toolpage-body mb-6">
                    <p className="text-lg text-gray-300">
                        Desarrollar software va más allá de construir APIs e interfaces de usuario.
                        <br />Existen diversas herramientas que permiten optimizar el desarrollo,
                        <br />automatizar tareas y trabajar de manera más eficiente.
                    </p>
                </div>

                <div className="toolpage-desc mb-8">
                    <p className="text-base text-gray-400 mb-6">
                        Estas herramientas no solo son útiles, sino que a menudo son requisitos para 
                        trabajar como desarrollador de software profesional.
                        <br />Dominarlas te diferenciará como profesional y te permitirá ser más 
                        productivo y eficiente en tu día a día.
                    </p>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">Herramientas de Desarrollo</h2>
                        <h3 className="text-lg text-gray-300 mb-1">En este módulo revisaremos detalladamente las siguientes herramientas:</h3>
                        <p className="text-sm text-red-400">Recomendamos ampliamente iniciar por Git y finalizar viendo GitHub</p>
                    </div>
                </div>
                

                <div className="toolspage-subtopics padding-20px">
                    <div className="tool-grid">
                        <Link to="/tools/git" className="tool-card">
                            <div className="tool-card__icon">
                                <FaGitAlt size={iconsSize} />
                            </div>
                            <h3 className="tool-card__title">Git</h3>
                            <p className="tool-card__desc">
                                Herramienta de control de Versiones , asegurate siempre de poder volver a una version correcta
                            </p>
                        </Link>

                        <Link to="/tools/docker" className="tool-card">
                            <div className="tool-card__icon">
                                <FaDocker size={iconsSize} />
                            </div>
                            <h3 className="tool-card__title">Docker</h3>
                            <p className="tool-card__desc">
                                Plataforma que permite crear y distribuir aplicaciones en contenedores. Evita el "funcionaba en mi maquina"
                            </p>
                        </Link>

                        <Link to="/tools/postman" className="tool-card">
                            <div className="tool-card__icon">
                                <SiPostman size={iconsSize} />
                            </div>
                            <h3 className="tool-card__title">Postman</h3>
                            <p className="tool-card__desc">
                                Herramienta de pruebas de APIs y peticiones HTTP . Automatiza pruebas a APIs y muchisimo mas .
                            </p>
                        </Link>

                        <Link to="/tools/github" className="tool-card">
                            <div className="tool-card__icon">
                                <FaGithub size={iconsSize} />
                            </div>
                            <h3 className="tool-card__title">GitHub</h3>
                            <p className="tool-card__desc">
                                Plataforma web colaborativa  basada en git. Ejecuta flujos de trabajo complejos con GitHub Actions
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolsPage