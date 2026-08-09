import { Link } from "react-router-dom"
import emiyaLostImg from '/emiya-lost-dbp-cs2031.svg'

const NotFoundPage = () => {
    return (
        <div className="coming-soon w-full flex flex-col min-h-screen justify-center items-center gap-8 md:gap-10">
            <h1 className="text-4xl md:text-6xl font-bold">Error 404</h1>
            <img 
                src={emiyaLostImg}
                alt="Emiya perdido buscando el contenido del sitio"
                className="lost-img w-40 md:w-52 lg:w-64 h-auto object-contain"
            />
            <p className="text-xl md:text-2xl font-semibold max-w-xl text-center">
                La pagina que estas buscando no existe, <b><br />¡Intenta buscar en otro ruta!</b>
            </p>
            <Link to="/" className="text-lg md:text-xl font-semibold hover:underline">
                Ir al inicio
            </Link>
        </div>
    )
}

export default NotFoundPage