import { Link } from 'react-router-dom'
import { useLocalStorage } from '../hook/SessionStorageManager'
import { introSubModules } from '../data/introductionQuestions'

const IntroAdvice = () => {
    const [completedIds] = useLocalStorage<string[]>('intro-completed-ids', [])
    const introCompleted = completedIds.length === introSubModules.length

    if (introCompleted) return null

    return (
        <div className="intro-advice">
            <p className="modules-note">
                <strong>ATENCIÓN</strong>
                <br />
                Para poder entender el siguiente módulo completa{' '}
                <Link className="modules-link" to="/introduction" id="intro-link">
                    Introducción
                </Link>
            </p>
        </div>
    )
}

export default IntroAdvice
