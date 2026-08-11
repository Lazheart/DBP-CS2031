import { useEffect, useState } from 'react'
import {
    ArrowRight,
    Check,
    CheckCircle2,
    CircleAlert,
    Clock3,
    RefreshCw,
    RotateCcw,
    X,
} from 'lucide-react'

export interface QuizQuestion {
    question: string
    options: string[]
    correct: number
    explanation: string
}

interface Props {
    lessonId: string
    lessonTitle: string
    topicColor: string
    questions: QuizQuestion[]
    onClose: () => void
    onPass: () => void
}

type Phase = 'intro' | 'question' | 'result'

const PASS_THRESHOLD = 0.8 // 4 de 5 preguntas correctas

export default function QuizModal({
    lessonId: _lessonId,
    lessonTitle,
    topicColor,
    questions,
    onClose,
    onPass,
}: Props) {
    const [phase, setPhase] = useState<Phase>('intro')
    const [qIdx, setQIdx] = useState(0)
    const [selected, setSelected] = useState<number | null>(null)
    const [answers, setAnswers] = useState<boolean[]>([])
    const [revealed, setRevealed] = useState(false)

    const question = questions[qIdx]
    const score = answers.filter(Boolean).length
    const passed = score / questions.length >= PASS_THRESHOLD

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', onKey)

        return () => {
            window.removeEventListener('keydown', onKey)
        }
    }, [onClose])

    const handleSelect = (idx: number) => {
        if (revealed) return
        setSelected(idx)
    }

    const handleConfirm = () => {
        if (selected === null) return
        setRevealed(true)
    }

    const handleNext = () => {
        if (selected === null) return

        const correct = selected === question.correct
        const newAnswers = [...answers, correct]

        if (qIdx + 1 < questions.length) {
            setAnswers(newAnswers)
            setQIdx(qIdx + 1)
            setSelected(null)
            setRevealed(false)
        } else {
            setAnswers(newAnswers)
            setPhase('result')
        }
    }

    const restart = () => {
        setPhase('intro')
        setQIdx(0)
        setSelected(null)
        setAnswers([])
        setRevealed(false)
    }

    const getOptionState = (index: number) => {
        if (!revealed) {
            if (selected === index) return 'selected'
            return 'default'
        }

        if (index === question.correct) return 'correct'
        if (index === selected && index !== question.correct) return 'incorrect'

        return 'disabled'
    }

    return (
        <div
            className="quiz-overlay"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose()
                }
            }}
        >
            <div
                className="quiz-modal"
                style={
                    {
                        '--topic-color': topicColor,
                    } as React.CSSProperties
                }
                onClick={(event) => event.stopPropagation()}
            >
                {/* Header */}
                <header className="quiz-header">
                    <div>
                        <span className="quiz-eyebrow">
                            Cuestionario
                        </span>

                        <h2 className="quiz-title">
                            {lessonTitle}
                        </h2>
                    </div>

                    <button
                        className="quiz-close"
                        onClick={onClose}
                        aria-label="Cerrar cuestionario"
                    >
                        <X size={18} strokeWidth={1.8} />
                    </button>
                </header>

                {/* INTRO */}
                {phase === 'intro' && (
                    <section className="quiz-content quiz-intro">
                        <div className="quiz-intro-heading">
                            <span className="quiz-section-number">
                                01
                            </span>

                            <div>
                                <span className="quiz-label">
                                    Evaluación
                                </span>

                                <h3>
                                    Comprueba lo aprendido
                                </h3>
                            </div>
                        </div>

                        <p className="quiz-description">
                            Responde las siguientes preguntas para comprobar
                            cuánto has aprendido en esta lección.
                        </p>

                        <div className="quiz-meta">
                            <div className="quiz-meta-item">
                                <Clock3 size={17} strokeWidth={1.7} />

                                <div>
                                    <strong>Sin límite</strong>
                                    <span>de tiempo</span>
                                </div>
                            </div>

                            <div className="quiz-meta-item">
                                <RefreshCw size={17} strokeWidth={1.7} />

                                <div>
                                    <strong>Reintentable</strong>
                                    <span>si no apruebas</span>
                                </div>
                            </div>

                            <div className="quiz-meta-item">
                                <CheckCircle2 size={17} strokeWidth={1.7} />

                                <div>
                                    <strong>{questions.length} preguntas</strong>
                                    <span>de opción múltiple</span>
                                </div>
                            </div>
                        </div>

                        <div className="quiz-requirement">
                            <span>Requisito de aprobación</span>

                            <strong>
                                {Math.round(PASS_THRESHOLD * 100)}%
                            </strong>
                        </div>

                        <button
                            className="quiz-primary-button"
                            onClick={() => setPhase('question')}
                        >
                            Comenzar cuestionario
                            <ArrowRight size={17} strokeWidth={2} />
                        </button>
                    </section>
                )}

                {/* QUESTION */}
                {phase === 'question' && (
                    <section className="quiz-content">
                        <div className="quiz-progress-header">
                            <span>
                                Pregunta{' '}
                                <strong>
                                    {String(qIdx + 1).padStart(2, '0')}
                                </strong>{' '}
                                / {String(questions.length).padStart(2, '0')}
                            </span>

                            <span>
                                {answers.filter(Boolean).length} correctas
                            </span>
                        </div>

                        <div className="quiz-progress">
                            <div
                                className="quiz-progress-value"
                                style={{
                                    width: `${((qIdx + 1) / questions.length) * 100}%`,
                                }}
                            />
                        </div>

                        <div className="quiz-question">
                            <span className="quiz-question-label">
                                Pregunta {qIdx + 1}
                            </span>

                            <h3>
                                {question.question}
                            </h3>
                        </div>

                        <div className="quiz-options">
                            {question.options.map((option, index) => {
                                const state = getOptionState(index)

                                return (
                                    <button
                                        key={index}
                                        className={`quiz-option quiz-option-${state}`}
                                        onClick={() => handleSelect(index)}
                                        disabled={revealed}
                                    >
                                        <span className="quiz-option-index">
                                            {state === 'correct' ? (
                                                <Check size={15} strokeWidth={2.5} />
                                            ) : state === 'incorrect' ? (
                                                <X size={15} strokeWidth={2.5} />
                                            ) : (
                                                ['A', 'B', 'C', 'D'][index]
                                            )}
                                        </span>

                                        <span className="quiz-option-text">
                                            {option}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>

                        {revealed && (
                            <div
                                className={`quiz-explanation ${
                                    selected === question.correct
                                        ? 'quiz-explanation-correct'
                                        : 'quiz-explanation-incorrect'
                                }`}
                            >
                                <div className="quiz-explanation-icon">
                                    {selected === question.correct ? (
                                        <CheckCircle2
                                            size={18}
                                            strokeWidth={1.8}
                                        />
                                    ) : (
                                        <CircleAlert
                                            size={18}
                                            strokeWidth={1.8}
                                        />
                                    )}
                                </div>

                                <div>
                                    <strong>
                                        {selected === question.correct
                                            ? 'Respuesta correcta'
                                            : 'Respuesta incorrecta'}
                                    </strong>

                                    <p>
                                        {question.explanation}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="quiz-actions">
                            {!revealed ? (
                                <button
                                    className="quiz-primary-button"
                                    onClick={handleConfirm}
                                    disabled={selected === null}
                                >
                                    Confirmar respuesta
                                    <Check size={17} strokeWidth={2} />
                                </button>
                            ) : (
                                <button
                                    className="quiz-primary-button"
                                    onClick={handleNext}
                                >
                                    {qIdx + 1 < questions.length
                                        ? 'Siguiente pregunta'
                                        : 'Ver resultados'}

                                    <ArrowRight
                                        size={17}
                                        strokeWidth={2}
                                    />
                                </button>
                            )}
                        </div>
                    </section>
                )}

                {/* RESULT */}
                {phase === 'result' && (
                    <section className="quiz-content quiz-result">
                        <div
                            className={`quiz-result-icon ${
                                passed
                                    ? 'quiz-result-success'
                                    : 'quiz-result-failed'
                            }`}
                        >
                            {passed ? (
                                <CheckCircle2
                                    size={34}
                                    strokeWidth={1.5}
                                />
                            ) : (
                                <CircleAlert
                                    size={34}
                                    strokeWidth={1.5}
                                />
                            )}
                        </div>

                        <span className="quiz-label">
                            Resultado
                        </span>

                        <h3>
                            {passed
                                ? 'Lección aprobada'
                                : 'Puedes intentarlo nuevamente'}
                        </h3>

                        <p className="quiz-result-description">
                            {passed
                                ? `Respondiste correctamente ${score} de ${questions.length} preguntas. La lección puede marcarse como completada.`
                                : `Respondiste correctamente ${score} de ${questions.length} preguntas. Necesitas al menos ${Math.ceil(PASS_THRESHOLD * questions.length)} respuestas correctas.`}
                        </p>

                        <div className="quiz-score">
                            {questions.map((_, index) => (
                                <div
                                    key={index}
                                    className={`quiz-score-item ${
                                        answers[index]
                                            ? 'quiz-score-correct'
                                            : 'quiz-score-incorrect'
                                    }`}
                                >
                                    {answers[index] ? (
                                        <Check
                                            size={14}
                                            strokeWidth={2.5}
                                        />
                                    ) : (
                                        <X
                                            size={14}
                                            strokeWidth={2.5}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="quiz-result-score">
                            <span>Resultado</span>

                            <strong>
                                {score}/{questions.length}
                            </strong>
                        </div>

                        <div className="quiz-result-actions">
                            {passed ? (
                                <button
                                    className="quiz-primary-button"
                                    onClick={() => {
                                        onPass()
                                        onClose()
                                    }}
                                >
                                    Marcar lección como completada
                                    <Check size={17} strokeWidth={2} />
                                </button>
                            ) : (
                                <button
                                    className="quiz-primary-button"
                                    onClick={restart}
                                >
                                    Reintentar cuestionario
                                    <RotateCcw
                                        size={17}
                                        strokeWidth={2}
                                    />
                                </button>
                            )}

                            <button
                                className="quiz-secondary-button"
                                onClick={onClose}
                            >
                                Cerrar
                            </button>
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}