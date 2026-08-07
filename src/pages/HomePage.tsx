import { Homebar } from "../components/Homebar.tsx"
import Footer from "../components/Footer.tsx"

const HomePage = () => {
    return (
        <div className="home home-page w-full flex flex-col">
            <Homebar></Homebar>
            <div id="hero" className="hero-section">
                <p>Hero section</p>
            </div>
            <div id="about" className="about-website-section">
                <p>About this website</p>
            </div>
            <div id="modules-section" className="modules-section">
                <p>Modules section</p>
            </div>
            <div id="team-section" className="team-section">
                <p>Team section</p>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default HomePage