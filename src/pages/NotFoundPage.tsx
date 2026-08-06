import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="not-found w-full h-screen flex flex-col justify-center items-center gap-10">
            <span className="title error-code">404</span>

            <p className="text-2xl font-semibold animate-pulse">
                Página no encontrada
            </p>

            <Link to="/homepage" className="text-xl font-semibold animate-pulse">
                Ir al inicio
            </Link>
        </div>
    )
}

export default NotFoundPage