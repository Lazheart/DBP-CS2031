import { Link } from "react-router-dom"
import { FaGitAlt, FaGithub, FaDocker } from "react-icons/fa"
import { SiPostman } from "react-icons/si"
import IntroAdvice from "../../components/IntroAdvice"
import ModuleHeader from "../../components/PageHeader"

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

            <h1 className="">¿Basta con saber programar <br /> para ser desarrollador ?</h1>

            <div className="toolpage-description padding-20px">
                <p>
                    Desarrollar software va más allá de construir APIs e interfaces de usuario.
                    <br />Existen diversas herramientas que permiten optimizar el desarrollo,
                    <br />automatizar tareas y trabajar de manera más eficiente.
                </p>
            </div>

            <div className="toolspage-subtopics padding-20px">
                <h2>Herramientas de Desarrollo</h2>
                <h3>En este modulo revisaremos detalladamente las siguientes herramientas</h3>
                <p> Recomendamos ampliamente iniciar por git y finalizar viendo Github</p>
                <br />
                <Link to="/tools/git" className="flex items-center gap-2"><FaGitAlt size={20} /> Pagina de git</Link>
                <br />
                <Link to="/tools/docker" className="flex items-center gap-2"><FaDocker size={20} /> Pagina de Docker</Link>
                <br />
                <Link to="/tools/postman" className="flex items-center gap-2"><SiPostman size={20} /> Pagina de Postman</Link>
                <br />
                <Link to="/tools/github" className="flex items-center gap-2"><FaGithub size={20} /> Pagina de Github</Link>
            </div>
            

        </div>
    )
}

export default ToolsPage