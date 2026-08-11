import { Link } from "react-router-dom"
import { useLocalStorage } from "../../hook/SessionStorageManager"

const ToolsPage = () => {
    const [introCompleted] = useLocalStorage('introCompleted', false);
    return (
        <div className="tools-page">
            <h1>Herramientas de Desarrollo</h1>

        <div className="toolpage-description">
                <p>
                    Desarrollar software va más allá de construir APIs e interfaces de usuario.
                    <br />Existen diversas herramientas que permiten optimizar el desarrollo,
                    <br />automatizar tareas y trabajar de manera más eficiente.
                </p>
        </div>
        <div className="intro-advice">
        {!introCompleted && (
                    <p className="modules-Note">
                        <strong>ATENCIÓN</strong>
                        <br />
                        Para poder entender el siguiente módulo completa{" "}
                        <Link className="modules-link" to="/introduction" id="intro-link">
                            Introducción
                        </Link>
                    </p>
                )}
            
        </div>


        <div></div>
         <h2>Herramientas de Desarrollo</h2>
              <br />
            <Link to="/tools/git">Pagina de git</Link>
            <br />
            <Link to="/tools/docker">Pagina de Docker</Link>
            <br />
            <Link to="/tools/postman">Pagina de Postman</Link>
            <br />
            <Link to="/tools/github">Pagina de Github</Link>
        </div>
    )
}

export default ToolsPage