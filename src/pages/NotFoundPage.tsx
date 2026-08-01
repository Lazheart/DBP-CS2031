import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="not-found w-full flex flex-col h-screen justify-center items-center gap-10">
            <span className="text-6xl font-bold animate-pulse">404</span>
            <p className="text-2xl font-semibold animate-pulse">Pagina no encontrada</p>
            <Link to="/" className="text-xl font-semibold animate-pulse">Ir al inicio</Link>
        </div>
    )
}

export default NotFoundPage