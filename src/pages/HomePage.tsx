import { Homebar } from "../components/Homebar.tsx"
import { Link } from "react-router-dom"
import Footer from "../components/Footer.tsx"

const HomePage = () => {
    return (
        <div className="home home-page w-full flex flex-col">
            <Homebar></Homebar>
            <main>
                <div id="hero" className="hero-section">
                    <h1 className="hero-title">
                        <span className="hero-title-row">Desarrollo</span>
                        <span className="hero-title-row hero-title-gradient">Basado en</span>
                        <span className="hero-title-row">Plataformas</span>
                    </h1>
                    <p className="hero-description">
                        Plataforma educativa del curso CS2031, desarrollada por estudiantes de UTEC.
                        Aprende Git, Docker, Spring Boot, React y AWS a través de módulos progresivos.
                    </p>

                    <button className="button-primary" onClick={() => { window.location.href = "#modules-section" }}>
                        Comienza aquí
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7"></path>
                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M19 12H5"></path>
                        </svg>
                    </button>
                </div>
                <div id="about" className="about-section">
                    <div className="about-header">
                        <h2 className="about-title">Sobre esta página</h2>
                        <p className="about-subtitle">
                            Una iniciativa para guiar, complementar y potenciar el aprendizaje del desarrollo web moderno.
                        </p>
                    </div>

                    <div className="about-grid">
                        {/* Card 1: Guía de Aprendizaje */}
                        <div className="about-card">
                            <div className="about-card__header">
                                <div className="about-card__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                    </svg>
                                </div>
                                <h3 className="about-card__title">Guía de Aprendizaje</h3>
                            </div>
                            <p className="about-card__desc">
                                Una guía de autoaprendizaje para estudiantes y personas interesadas en el mundo del desarrollo web, cubriendo conceptos fundamentales y herramientas modernas.
                            </p>
                        </div>

                        {/* Card 2: Alineación Académica */}
                        <div className="about-card">
                            <div className="about-card__header">
                                <div className="about-card__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                                    </svg>
                                </div>
                                <h3 className="about-card__title">Alineación Académica</h3>
                            </div>
                            <p className="about-card__desc">
                                El contenido está alineado con los temas tratados en el curso <strong>Desarrollo Basado en Plataformas (CS2031)</strong> de la <strong>Universidad de Ingeniería y Tecnología (UTEC)</strong>.
                            </p>
                        </div>

                        {/* Card 3: Práctica Activa */}
                        <div className="about-card">
                            <div className="about-card__header">
                                <div className="about-card__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="16 18 22 12 16 6" />
                                        <polyline points="8 6 2 12 8 18" />
                                        <line x1="14" y1="4" x2="10" y2="20" />
                                    </svg>
                                </div>
                                <h3 className="about-card__title">Práctica Activa</h3>
                            </div>
                            <p className="about-card__desc">
                                No busca reemplazar el curso. Creemos firmemente que la mejor forma de aprender es asistiendo a clases, participando activamente y poniendo en práctica los conocimientos.
                            </p>
                        </div>

                        {/* Card 4: Espacio de Repaso */}
                        <div className="about-card">
                            <div className="about-card__header">
                                <div className="about-card__icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h3 className="about-card__title">Refuerzo y Repaso</h3>
                            </div>
                            <p className="about-card__desc">
                                Ofrece un espacio donde los estudiantes pueden repasar los temas tratados en clase, reforzar sus conocimientos y prepararse para las evaluaciones de manera autónoma.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="modules-section" className="modules-section">
                    <div className="modules-layout">
                        {/* Left side — Title & description */}

                        <div className="modules-text">
                            <h1 className="modules-title">Módulos</h1>

                        <p className="modules-desc">
                            Hemos dividido los tópicos en cuatro módulos principales y un submódulo
                            introductorio. Si bien cada módulo puede estudiarse de manera independiente,
                            la combinación de estos proporciona una base sólida para el desarrollo web.
                        </p>

                        <p className="modules-desc">
                            Cada módulo contiene una serie de recursos diseñados para reforzar y
                            complementar los temas abordados en el curso <strong>CS2031</strong>.
                        </p>

                        <p className="modules-note">
                            Se recomienda comenzar  por <br /> <Link  className="modules-link" to="/introduction" id="intro-link">Introduccion</Link>
                        </p>
                        </div>

                        {/* Right side — 2×2 module cards */}
                        <div className="modules-grid">
                            {/* 01 — Herramientas de Desarrollo */}
                            <Link to="/tools" className="module-card module-card--recommended" id="modules-content-tools">
                                <div className="module-card__header">
                                    <div className="module-card__title-container">
                                        <span className="module-card__number">01</span>
                                        <h2 className="module-card__title">Herramientas de Desarrollo</h2>
                                    </div>
                                    <div className="module-card__icon">
                                        <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="module-card__desc">
                                    Fundamentos y herramientas para el flujo de trabajo profesional en el desarrollo de software.
                                </p>
                                <div className="module-card__tags">
                                    <span className="module-tag">Git</span>
                                    <span className="module-tag">Docker</span>
                                    <span className="module-tag">Postman</span>
                                    <span className="module-tag">Github</span>
                                </div>
                            </Link>

                            {/* 02 — Backend: Spring Boot */}
                            <Link to="/backend" className="module-card" id="modules-content-backend">
                                <div className="module-card__header">
                                    <div className="module-card__title-container">
                                        <span className="module-card__number">02</span>
                                        <h2 className="module-card__title">Backend</h2>
                                    </div>
                                    <div className="module-card__icon">
                                        <svg width="24" height="24" viewBox="0 0 97.1 97" fill="currentColor">
                                            <path d="M88.4,5.6a42.32,42.32,0,0,1-5.2,9.1A48.46,48.46,0,1,0,15.5,84l1.8,1.6A48.41,48.41,0,0,0,96.8,52C98.2,39.8,94.5,24.2,88.4,5.6ZM22.5,84.4a4.12,4.12,0,1,1-.6-5.8A4.21,4.21,0,0,1,22.5,84.4ZM88.1,69.9C76.2,85.8,50.6,80.4,34.3,81.2c0,0-2.9.2-5.8.6,0,0,1.1-.5,2.5-1,11.5-4,16.9-4.8,23.9-8.4C68,65.7,81.1,51,83.7,35.8c-5,14.6-20.2,27.2-34,32.3C40.2,71.6,23.1,75,23.1,75l-.7-.4c-11.6-5.7-12-30.9,9.2-39,9.3-3.6,18.1-1.6,28.2-4,10.7-2.5,23.1-10.5,28.1-21C93.5,27.5,100.3,53.7,88.1,69.9Z"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="module-card__desc">
                                    Construcción de APIs robustas en spring boot con el ecosistema Java moderno y maven como gestor de dependencias.
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
                                    <div className="module-card__title-container">
                                        <span className="module-card__number">03</span>
                                        <h2 className="module-card__title">Frontend</h2>
                                    </div>
                                    <div className="module-card__icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
                                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
                                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
                                            <circle cx="12" cy="12" r="1" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="module-card__desc">
                                    Interfaces modernas y modulares con React y Typescript conceptos de UX para el desarrollo Web.
                                </p>
                                <div className="module-card__tags">
                                    <span className="module-tag">UX/UI</span>
                                    <span className="module-tag">Axios</span>
                                    <span className="module-tag">Router</span>
                                    <span className="module-tag">WebStorage</span>
                                    <span className="module-tag">Rendering (SPA/SSR)</span>
                                </div>
                            </Link>

                            {/* 04 — GitHub Actions & AWS */}
                            <Link to="/deployment" className="module-card" id="modules-content-deployment">
                                <div className="module-card__header">
                                    <div className="module-card__title-container">
                                        <span className="module-card__number">04</span>
                                        <h2 className="module-card__title">Deployment</h2>
                                    </div>
                                    <div className="module-card__icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                                        </svg>
                                    </div>
                                </div>
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
                            href="https://github.com/Lazheart/DBP-CS2031/fork"
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