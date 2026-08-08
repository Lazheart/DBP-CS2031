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
                    <p className="team-title">Contribuidores</p>
                    <p> El equipo que hizo posible este proyecto </p> <br />
                    <div className="team-grid">
                        {/* Romulo — Miembro Fundador */}
                        <a
                            href="https://github.com/Lazheart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-card"
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/176245760?v=4"
                                alt="Romulo"
                                className="team-card__avatar"
                            />
                            <div className="team-card__info">
                                <h2 className="team-card__name">Romulo</h2>
                                <p className="team-card__handle">@Lazheart</p>
                                <span className="team-card__role team-card__role--founder">Fullstack Developer</span>
                            </div>
                            <svg className="team-card__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>

                        {/* Salvador — Contribuidor */}
                        <a
                            href="https://github.com/Eduardo-Gv17"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-card"
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/216962761?v=4"
                                alt="Salvador Eduardo"
                                className="team-card__avatar"
                            />
                            <div className="team-card__info">
                                <h2 className="team-card__name">Salvador</h2>
                                <p className="team-card__handle">@Eduardo-Gv17</p>
                                <span className="team-card__role team-card__role--contributor">Backend Junior Developer</span>
                            </div>
                            <svg className="team-card__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>

                        {/* CTA — Contribuir */}
                        <a
                            href="https://github.com/Lazheart/DBP-CS2031"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-card team-card--cta"
                        >
                            <div className="team-card__cta-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="team-card__info">
                                <h2 className="team-card__name">¿Quieres contribuir?</h2>
                                <p className="team-card__handle">Fork el repo y abre un Pull Request</p>
                            </div>
                        </a>
                    </div>
                </div>


            </main>
            <Footer></Footer>
        </div>

    )
}

export default HomePage