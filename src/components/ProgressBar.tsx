import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProgressBarProps {
    lesson?: {
        topic: string;
        title: string;
    };
    progress?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
    lesson = { topic: 'Introducción', title: 'Fundamentos' }, 
    progress = 0 
}) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        // Redirige al Home y hace scroll hacia la sección de módulos
        navigate('/');
        setTimeout(() => {
            const section = document.getElementById('modules-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 40,
                background: 'rgba(30,30,34,0.95)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(242,240,235,0.07)',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '0 20px', height: '56px' }}>
                <button
                    onClick={handleBackClick}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#7A7874',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontFamily: 'Outfit, sans-serif',
                        padding: 0,
                        transition: 'color 0.2s',
                        flexShrink: 0,
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#F2F0EB')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#7A7874')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span className="hide-xs">CS2031</span>
                </button>

                <div style={{ width: '1px', height: '20px', background: 'rgba(242,240,235,0.1)', flexShrink: 0 }} />

                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '12px', color: '#7A7874', marginBottom: '2px' }}>
                        Módulo · {lesson.topic}
                    </div>
                    <div
                        style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#F2F0EB',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {lesson.title}
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }} className="hide-xs">
                        <div style={{ fontSize: '11px', color: '#7A7874' }}>{progress}% completado</div>
                        <div style={{ width: '120px', height: '3px', background: 'rgba(242,240,235,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                            <div
                                style={{
                                    height: '100%',
                                    width: `${progress}%`,
                                    background: `linear-gradient(90deg, #C94747, #B88A3D)`,
                                    borderRadius: '2px',
                                    transition: 'width 0.4s',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ProgressBar;