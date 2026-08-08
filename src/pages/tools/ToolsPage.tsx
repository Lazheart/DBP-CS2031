import { Link } from "react-router-dom"

const ToolsPage = () => {
    return (
        <div className="tools-page">
            <h1>Herramientas de Desarrollo</h1>
             Pagina de git <Link to="/tools/git"></Link>
             <br />
             Pagina de Docker <Link to="/tools/docker"></Link>
             <br />
             Pagina de Postman <Link to="/tools/postman"></Link>
             <br />
             Pagina de Github <Link to="/tools/github"></Link>
        </div>
    )
}

export default ToolsPage