import { Homebar } from "../components/Homebar.tsx"
import Footer from "../components/Footer.tsx"

const HomePage = () => {
    return (
        <div className="home home-page w-full flex flex-col">
            <Homebar></Homebar>
            <main>
                <div id="hero" className="hero-section">
                    <h1>Desarrollo  Basado en Plataformas</h1>
                    <h4>CS2031</h4>
                    <h5>Aprende Git , Docker ,Springboot ,React y mucho más</h5>
                </div>
                <div id="about" className="about-website-section">
                    <h1>Sobre esta página</h1>
                    <div className="about-content">
                        <p className="align-text-left">
                            Esta página busca ser una guía para estudiantes y personas
                            interesadas en el mundo del desarrollo web. Los temas abordados
                            cubren conceptos fundamentales que permiten comprender mejor las
                            herramientas y tecnologías utilizadas en el desarrollo web.
                        </p>

                        <p className="align-text-left">
                            Además, el contenido está alineado con los temas tratados en el
                            curso <br /> <strong>Desarrollo Basado en Plataformas (CS2031)</strong>,
                            dictado por la <strong>Universidad de Ingeniería y Tecnología (UTEC)</strong>.
                        </p>

                        <p className="align-text-left">
                            Esta página no busca reemplazar el curso. Creemos firmemente que
                            la mejor forma de aprender es asistiendo a clases, participando
                            activamente y poniendo en práctica los conocimientos adquiridos.
                        </p>

                        <p className="align-text-left">
                            Sin embargo, esta plataforma busca ofrecer un espacio donde los
                            estudiantes puedan repasar los temas tratados en clase, reforzar
                            sus conocimientos y prepararse para las evaluaciones.
                        </p>
                    </div>
                </div>
                <div id="modules-section" className="modules-section">
                    <h1>Módulos</h1>
                    <p> Los topicos relevantes se encuentran divididos  en 4 modulos principales </p>
                    <br /><p> Si bien cada modulo es independiente, la union de estos permite tener  
                        una base solida para el desarrollo web </p>
                    <h5> Nota se recomienda comenzar desde el modulo 'Herramientas de Desarrollo'</h5>
                    <div id="modules-content-tools" className="modules-content">
                        <h2> Herramientas de Desarrollo</h2>
                    </div>
                    <div id="modules-content-backend" className="modules-content">
                        <h2> Backend : Spring Boot</h2>
                    </div>
                    <div id="modules-content-frontend" className="modules-content">
                        <h2>Frontend : React</h2>
                    </div>
                    <div id="modules-content-deployment" className="modules-content">
                        <h2> Github Actions y Deployment</h2>
                    </div>
                    
                </div>
                <div id="team-section" className="team-section">
                    <h1>Equipo</h1>
                    <div className="team-content">
                        <div>
                            <img src="" alt="" />
                            <h2>Salvador Eduardo</h2>
                            <p>Github/Eduardo-Gv17</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <h2>Romulo</h2>
                            <p>Github/lazheart</p>
                        </div>
                        <div>
                            <h2>¿Interesado en contribuir?</h2>
                            <p>Visita nuestro Github</p>
                        </div>
                    </div>
                     
                </div>


            </main>
            <Footer></Footer>
        </div>

    )
}

export default HomePage