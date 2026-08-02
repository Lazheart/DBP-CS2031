import { Link } from 'react-router-dom'

const CommingSoonPage = () => {
    return (
        <div className="commin g-soon w-full flex flex-col h-screen justify-center items-center gap-10">
            <span className="text-6xl font-bold animate-pulse">Proximamente</span>
            <p className="text-2xl font-semibold animate-pulse">Nos encontramos trabajando para completar esta seccion vuelve pronto!.</p>
            <Link to="/" className="text-xl font-semibold animate-pulse">Ir al inicio</Link>
        </div>
    )
}
export default CommingSoonPage;
