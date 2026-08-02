import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="home w-full flex flex-col h-screen justify-center items-center gap-10">
            <h1 className="text-6xl font-bold animate-pulse">Pagina de inicio</h1>
            <p className="text-2xl font-semibold animate-pulse">Bienvenido a la pagina de inicio</p>
            <ul className="flex gap-10">
                <Link to="/comming-soon" className="text-xl font-semibold animate-pulse">Ir a pagina proximamente</Link>
                <Link to="/not-found" className="text-xl font-semibold animate-pulse">Ir a pagina no encontrada</Link>
            </ul>
        </div>

    )
}

export default HomePage