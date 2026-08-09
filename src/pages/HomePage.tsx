import { Homebar } from "../components/Homebar.tsx"
import { Link } from "react-router-dom"
import Footer from "../components/Footer.tsx"

const HomePage = () => {
    return (
        <div className="home home-page w-full flex flex-col">
            <Homebar></Homebar>
            <main>
                <div id="hero" className="hero-section">
                    <h1>Desarrollo Basado en Plataformas</h1>
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
                    <div className="modules-layout">
                        {/* Left side — Title & description */}
                        <div className="modules-text">
                            <h1 className="modules-title">Módulos</h1>
                            <p className="modules-desc">
                                Los tópicos relevantes se encuentran divididos en 4 módulos principales
                            </p>
                            <p className="modules-desc">
                                Si bien cada módulo es independiente, la unión de estos permite tener
                                una base sólida para el desarrollo web
                            </p>
                            <p className="modules-note">
                                Nota: se recomienda comenzar desde el módulo 'Herramientas de Desarrollo'
                            </p>
                        </div>

                        {/* Right side — 2×2 module cards */}
                        <div className="modules-grid">
                            {/* 01 — Herramientas de Desarrollo */}
                            <Link to="/tools" className="module-card module-card--recommended" id="modules-content-tools">
                                <div className="module-card__header">
                                    <span className="module-card__number">01</span>
                                    <div className="module-card__icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" />
                                            <path d="M3 9h18M9 9v12" />
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="module-card__title">Herramientas de Desarrollo</h2>
                                <p className="module-card__desc">
                                    Fundamentos del flujo de trabajo profesional en ingeniería de software.
                                </p>
                                <div className="module-card__tags">
                                    <span className="module-tag">Git</span>
                                    <span className="module-tag">Docker</span>
                                    <span className="module-tag">Postman</span>
                                    <span className="module-tag">Issues</span>
                                    <span className="module-tag">Pull Requests</span>
                                </div>
                            </Link>

                            {/* 02 — Backend: Spring Boot */}
                            <Link to="/backend" className="module-card" id="modules-content-backend">
                                <div className="module-card__header">
                                    <span className="module-card__number">02</span>
                                    <div className="module-card__icon module-card__icon--arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 19L19 5M19 5H10M19 5V14" />
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="module-card__title">Backend: Spring Boot</h2>
                                <p className="module-card__desc">
                                    Construcción de APIs robustas y seguras con el ecosistema Java moderno.
                                </p>
                                <div className="module-card__tags">
                                    <span className="module-tag">JWT</span>
                                    <span className="module-tag">DTO</span>
                                    <span className="module-tag">SMTP</span>
                                    <span className="module-tag">CORS</span>
                                    <span className="module-tag">Swagger-UI</span>
                                </div>
                            </Link>

                            {/* 03 — Frontend: React */}
                            <Link to="/frontend" className="module-card" id="modules-content-frontend">
                                <div className="module-card__header">
                                    <span className="module-card__number">03</span>
                                    <div className="module-card__icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
                                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
                                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
                                            <circle cx="12" cy="12" r="1" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="module-card__title">Frontend: React</h2>
                                <p className="module-card__desc">
                                    Interfaces modernas con React y manejo de estado en el navegador.
                                </p>
                                <div className="module-card__tags">
                                    <span className="module-tag">Axios</span>
                                    <span className="module-tag">React Router</span>
                                    <span className="module-tag">LocalStorage</span>
                                    <span className="module-tag">SessionStorage</span>
                                </div>
                            </Link>

                            {/* 04 — GitHub Actions & AWS */}
                            <Link to="/workflows" className="module-card" id="modules-content-deployment">
                                <div className="module-card__header">
                                    <span className="module-card__number">04</span>
                                    <div className="module-card__icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17.5 19A4.5 4.5 0 0 0 13 14.5c-1.39 0-2.6.63-3.41 1.61A6.5 6.5 0 1 0 7 19h10.5z" />
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="module-card__title">GitHub Actions &amp; AWS</h2>
                                <p className="module-card__desc">
                                    Despliegue continuo y servicios cloud para aplicaciones en producción.
                                </p>
                                <div className="module-card__tags">
                                    <span className="module-tag">GitHub Pages</span>
                                    <span className="module-tag">GitHub Actions</span>
                                    <span className="module-tag">AWS EC2</span>
                                    <span className="module-tag">AWS S3</span>
                                    <span className="module-tag">AWS Amplify</span>
                                    <span className="module-tag">Load Balancer</span>
                                </div>
                            </Link>
                        </div>
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