import { Link } from 'react-router-dom'
import emiyaWorkingImg from '/emiya-working-dbp-cs2031.svg'

const CommingSoonPage = () => {
    return (
        <div className="coming-soon w-full flex flex-col min-h-screen justify-center items-center gap-8 md:gap-10">
            <h1 className="text-4xl md:text-6xl font-bold">Próximamente</h1>
            <img 
                src={emiyaWorkingImg} 
                alt="Emiya construyendo el contenido del sitio" 
                className="coming-soon-img w-40 md:w-52 lg:w-64 h-auto object-contain" 
            />
            <p className="text-xl md:text-2xl font-semibold max-w-xl text-center">
                Estamos trabajando para completar esta sección, <b><br />¡Por favor vuelve pronto!</b>
            </p>
            <Link to="/" className="text-lg md:text-xl font-semibold hover:underline">
                Ir al inicio
            </Link>
        </div>
    )
}
export default CommingSoonPage;
