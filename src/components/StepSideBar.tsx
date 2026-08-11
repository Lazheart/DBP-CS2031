import React from 'react'
import { Check } from 'lucide-react'

export interface StepItem {
    id: string
    title: string
    color?: string
}

interface StepSideBarProps {
    steps: StepItem[]
    activeId: string
    completedIds: string[]
    onSelect: (id: string) => void
}

const StepSideBar: React.FC<StepSideBarProps> = ({ steps, activeId, completedIds, onSelect }) => {
    if (!steps || steps.length === 0) return null

    return (
        <aside className="step-sidebar">
            <h4 className="step-sidebar__heading">Submódulos</h4>

            <ul className="step-sidebar__list">
                {steps.map((step, index) => {
                    const isActive = activeId === step.id
                    const isDone = completedIds.includes(step.id)

                    return (
                        <li key={step.id} className="step-sidebar__item">
                            <button
                                className={`step-sidebar__btn${isActive ? ' step-sidebar__btn--active' : ''}${isDone ? ' step-sidebar__btn--done' : ''}`}
                                onClick={() => onSelect(step.id)}
                                style={
                                    isActive && step.color
                                        ? ({ '--step-color': step.color } as React.CSSProperties)
                                        : undefined
                                }
                            >
                                <span
                                    className={`step-sidebar__number${isDone ? ' step-sidebar__number--done' : ''}${isActive ? ' step-sidebar__number--active' : ''}`}
                                    style={
                                        isActive && step.color
                                            ? ({ borderColor: step.color, color: step.color } as React.CSSProperties)
                                            : isDone
                                              ? { background: '#31946b', borderColor: '#31946b' }
                                              : undefined
                                    }
                                >
                                    {isDone ? <Check size={12} strokeWidth={2.5} /> : String(index + 1).padStart(2, '0')}
                                </span>

                                <span className="step-sidebar__title">{step.title}</span>

                                {isDone && (
                                    <span className="step-sidebar__badge">✓</span>
                                )}
                            </button>
                        </li>
                    )
                })}
            </ul>

            <div className="step-sidebar__footer">
                <div className="step-sidebar__footer-label">Progreso del módulo</div>
                <div className="step-sidebar__footer-bar">
                    <div
                        className="step-sidebar__footer-fill"
                        style={{ width: `${(completedIds.length / steps.length) * 100}%` }}
                    />
                </div>
                <div className="step-sidebar__footer-count">
                    {completedIds.length} / {steps.length} completados
                </div>
            </div>
        </aside>
    )
}

export default StepSideBar