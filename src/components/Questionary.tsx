import { useState, useEffect } from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
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

const PASS_THRESHOLD = 0.6

export default function QuizModal({ lessonId: _lessonId, lessonTitle, topicColor, questions, onClose, onPass }: Props) {
  const [phase, setPhase] = useState<Phase>('intro')
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [revealed, setRevealed] = useState(false)

  const question = questions[qIdx]
  const score = answers.filter(Boolean).length
  const passed = score / questions.length >= PASS_THRESHOLD

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
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

  const optionStyle = (i: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '14px',
      padding: '14px 16px',
      borderRadius: '6px',
      cursor: revealed ? 'default' : 'pointer',
      border: '1.5px solid',
      transition: 'all 0.15s',
      textAlign: 'left',
      width: '100%',
      background: 'transparent',
      fontFamily: 'Outfit, sans-serif',
      fontSize: '14px',
      lineHeight: 1.5,
      color: '#F2F0EB',
    }

    if (!revealed) {
      return {
        ...base,
        borderColor: selected === i ? topicColor : 'rgba(242,240,235,0.1)',
        background: selected === i ? `${topicColor}15` : 'transparent',
      }
    }

    if (i === question.correct) {
      return { ...base, borderColor: '#10b981', background: 'rgba(16,185,129,0.12)', color: '#F2F0EB' }
    }
    if (i === selected && i !== question.correct) {
      return { ...base, borderColor: '#ef4444', background: 'rgba(239,68,68,0.12)', color: '#F2F0EB' }
    }
    return { ...base, borderColor: 'rgba(242,240,235,0.06)', color: '#7A7874' }
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(6px)',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        style={{
          background: '#1E1E22',
          border: '1px solid rgba(242,240,235,0.1)',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px ${topicColor}20`,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: '1px solid rgba(242,240,235,0.07)',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '10px',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: topicColor,
                marginBottom: '4px',
              }}
            >
              Cuestionario
            </div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#F2F0EB', fontFamily: 'Outfit, sans-serif' }}>
              {lessonTitle}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(242,240,235,0.06)',
              border: '1px solid rgba(242,240,235,0.08)',
              color: '#7A7874',
              cursor: 'pointer',
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.15s',
              flexShrink: 0,
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#F2F0EB')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#7A7874')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── INTRO ─────────────────────────────────── */}
        {phase === 'intro' && (
          <div style={{ padding: '32px 24px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: `${topicColor}18`,
                border: `1.5px solid ${topicColor}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={topicColor} strokeWidth="1.8">
                <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#F2F0EB', marginBottom: '10px', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.01em' }}>
              Pon a prueba lo aprendido
            </h2>
            <p style={{ fontSize: '14px', color: '#C8C6C1', lineHeight: 1.65, marginBottom: '28px' }}>
              Este cuestionario tiene <strong style={{ color: '#F2F0EB' }}>{questions.length} preguntas</strong> de opción múltiple.
              Necesitas responder correctamente al menos el <strong style={{ color: topicColor }}>{Math.round(PASS_THRESHOLD * 100)}%</strong> para aprobar y marcar la lección como completada.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '28px',
              }}
            >
              {[
                { icon: '⏱', label: 'Sin límite de tiempo' },
                { icon: '🔄', label: 'Puedes reintentar' },
                { icon: '💡', label: 'Feedback inmediato' },
              ].map(item => (
                <div
                  key={item.label}
                  style={{
                    flex: 1,
                    background: '#26262A',
                    border: '1px solid rgba(242,240,235,0.07)',
                    borderRadius: '6px',
                    padding: '12px 10px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '18px', marginBottom: '4px' }}>{item.icon}</div>
                  <div style={{ fontSize: '11px', color: '#7A7874', lineHeight: 1.4 }}>{item.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setPhase('question')}
              style={{
                width: '100%',
                padding: '14px',
                background: topicColor,
                border: 'none',
                color: '#fff',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '15px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              Comenzar cuestionario
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* ── QUESTION ──────────────────────────────── */}
        {phase === 'question' && (
          <div style={{ padding: '24px' }}>
            {/* Progress bar */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', color: '#7A7874', fontFamily: 'JetBrains Mono, monospace' }}>
                  Pregunta {qIdx + 1} de {questions.length}
                </span>
                <span style={{ fontSize: '12px', color: '#7A7874', fontFamily: 'JetBrains Mono, monospace' }}>
                  {answers.filter(Boolean).length} correctas
                </span>
              </div>
              <div style={{ height: '4px', background: 'rgba(242,240,235,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${((qIdx) / questions.length) * 100}%`,
                    background: `linear-gradient(90deg, ${topicColor}, #B88A3D)`,
                    borderRadius: '2px',
                    transition: 'width 0.4s',
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <div style={{ marginBottom: '24px' }}>
              <p
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#F2F0EB',
                  lineHeight: 1.5,
                  margin: 0,
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                {question.question}
              </p>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {question.options.map((opt, i) => (
                <button key={i} onClick={() => handleSelect(i)} style={optionStyle(i)}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: `1.5px solid ${
                        revealed
                          ? i === question.correct
                            ? '#10b981'
                            : i === selected && i !== question.correct
                              ? '#ef4444'
                              : 'rgba(242,240,235,0.12)'
                          : selected === i
                            ? topicColor
                            : 'rgba(242,240,235,0.12)'
                      }`,
                      background: revealed
                        ? i === question.correct
                          ? 'rgba(16,185,129,0.2)'
                          : i === selected && i !== question.correct
                            ? 'rgba(239,68,68,0.2)'
                            : 'transparent'
                        : selected === i
                          ? `${topicColor}25`
                          : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontWeight: 600,
                      color: revealed
                        ? i === question.correct
                          ? '#10b981'
                          : i === selected && i !== question.correct
                            ? '#ef4444'
                            : 'rgba(242,240,235,0.3)'
                        : selected === i
                          ? topicColor
                          : 'rgba(242,240,235,0.3)',
                      transition: 'all 0.15s',
                    }}
                  >
                    {revealed && i === question.correct ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    ) : revealed && i === selected && i !== question.correct ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    ) : (
                      ['A', 'B', 'C', 'D'][i]
                    )}
                  </span>
                  <span>{opt}</span>
                </button>
              ))}
            </div>

            {/* Explanation after reveal */}
            {revealed && (
              <div
                style={{
                  background: selected === question.correct ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
                  border: `1px solid ${selected === question.correct ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)'}`,
                  borderRadius: '6px',
                  padding: '14px 16px',
                  marginBottom: '20px',
                  display: 'flex',
                  gap: '12px',
                }}
              >
                <span style={{ flexShrink: 0, marginTop: '1px' }}>
                  {selected === question.correct ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                    </svg>
                  )}
                </span>
                <p style={{ fontSize: '13px', color: '#C8C6C1', lineHeight: 1.6, margin: 0 }}>
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Action buttons */}
            {!revealed ? (
              <button
                onClick={handleConfirm}
                disabled={selected === null}
                style={{
                  width: '100%',
                  padding: '13px',
                  background: selected !== null ? topicColor : 'rgba(242,240,235,0.06)',
                  border: 'none',
                  color: selected !== null ? '#fff' : '#5A5450',
                  borderRadius: '6px',
                  cursor: selected !== null ? 'pointer' : 'not-allowed',
                  fontSize: '14px',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
              >
                Confirmar respuesta
              </button>
            ) : (
              <button
                onClick={handleNext}
                style={{
                  width: '100%',
                  padding: '13px',
                  background: topicColor,
                  border: 'none',
                  color: '#fff',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                {qIdx + 1 < questions.length ? (
                  <>
                    Siguiente pregunta
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Ver resultados
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* ── RESULT ────────────────────────────────── */}
        {phase === 'result' && (
          <div style={{ padding: '32px 24px', textAlign: 'center' }}>
            <div
              style={{
                width: '88px',
                height: '88px',
                borderRadius: '50%',
                background: passed ? 'rgba(16,185,129,0.12)' : 'rgba(201,71,71,0.12)',
                border: `2px solid ${passed ? '#10b981' : '#C94747'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              {passed ? (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C94747" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                </svg>
              )}
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: passed ? '#10b981' : '#C94747',
                marginBottom: '8px',
              }}
            >
              {passed ? '¡Aprobado!' : 'Inténtalo de nuevo'}
            </h2>

            <p style={{ fontSize: '15px', color: '#C8C6C1', marginBottom: '28px', lineHeight: 1.6 }}>
              {passed
                ? `Respondiste correctamente ${score} de ${questions.length} preguntas. La lección será marcada como completada.`
                : `Respondiste correctamente ${score} de ${questions.length} preguntas. Necesitas al menos ${Math.ceil(PASS_THRESHOLD * questions.length)} para aprobar.`}
            </p>

            {/* Score visual */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '28px' }}>
              {questions.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: answers[i] ? 'rgba(16,185,129,0.15)' : 'rgba(201,71,71,0.15)',
                    border: `1.5px solid ${answers[i] ? '#10b981' : '#C94747'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {answers[i] ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C94747" strokeWidth="3">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
              {passed ? (
                <button
                  onClick={() => { onPass(); onClose() }}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#10b981',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Marcar lección como completada
                </button>
              ) : (
                <button
                  onClick={restart}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: topicColor,
                    border: 'none',
                    color: '#fff',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.88')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15"/>
                  </svg>
                  Reintentar cuestionario
                </button>
              )}
              <button
                onClick={onClose}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'transparent',
                  border: '1px solid rgba(242,240,235,0.1)',
                  color: '#7A7874',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 500,
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = '#F2F0EB'
                  el.style.borderColor = 'rgba(242,240,235,0.2)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = '#7A7874'
                  el.style.borderColor = 'rgba(242,240,235,0.1)'
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}