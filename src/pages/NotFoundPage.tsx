import { Link } from "react-router-dom"
import emiyaLostImg from '/emiya-lost-dbp-cs2031.svg'

const NotFoundPage = () => {
    return (
        <div className="coming-soon w-full flex flex-col min-h-screen justify-center items-center gap-8 md:gap-10">
            <h1 className="text-4xl md:text-6xl font-bold">Error 404</h1>
            <img 
                src={emiyaLostImg}
                alt="Emiya perdido buscando el contenido del sitio"
                className="coming-soon-img w-7 md:w-10 lg:w-10 h-auto object-contain"
            />
            <p className="text-xl md:text-2xl font-semibold max-w-xl text-center">
                La pagina que estas buscando no existe, <b><br /></b>
            </p>
            <Link to="/homepage" className="text-lg md:text-xl font-semibold hover:underline">
                Ir al inicio
            </Link>
        </div>
    )
}

export default NotFoundPage