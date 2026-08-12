import { FaGitAlt, FaGithub, FaDocker } from "react-icons/fa"
import { SiPostman } from "react-icons/si"
import IntroAdvice from "../../components/IntroAdvice"
import ModuleHeader from "../../components/PageHeader"
import ModuleSessionCard from "../../components/ModuleSessionCard"

const ToolsPage = () => {
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
                    <div className="modules-grid">
                        <ModuleSessionCard
                            title="Git"
                            description="Herramienta de control de Versiones , asegurate siempre de poder volver a una version correcta"
                            to="/tools/git"
                            icon={<FaGitAlt size={24} />}
                        />
                        <ModuleSessionCard
                            title="Docker"
                            description='Plataforma que permite crear y distribuir aplicaciones en contenedores. Evita el "funcionaba en mi maquina"'
                            to="/tools/docker"
                            icon={<FaDocker size={24} />}
                        />
                        <ModuleSessionCard
                            title="Postman"
                            description="Herramienta de pruebas de APIs y peticiones HTTP . Automatiza pruebas a APIs y muchisimo mas ."
                            to="/tools/postman"
                            icon={<SiPostman size={24} />}
                        />
                        <ModuleSessionCard
                            title="GitHub"
                            description="Plataforma web colaborativa  basada en git. Ejecuta flujos de trabajo complejos con GitHub Actions"
                            to="/tools/github"
                            icon={<FaGithub size={24} />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolsPage