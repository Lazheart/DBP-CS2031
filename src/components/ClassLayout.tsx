import React, { type ReactNode } from "react";
import ProgressBar from "./ProgressBar";
import StepSideBar, { type TopicStep } from "./StepSideBar";
import Questionary from "./Questionary";

interface ClassLayoutProps {
    lesson: { topic: string; title: string };
    progress: number;
    steps: TopicStep[];
    badge?: string;
    badgeIcon?: ReactNode;
    title: string;
    description: ReactNode;
    objectives?: ReactNode[];
    keyPoints?: ReactNode[];
    children: ReactNode;
    showQuiz?: boolean;
    quizProps?: any; // You can type this properly based on Questionary props
    onNext?: () => void;
    onPrev?: () => void;
    nextText?: string;
    prevText?: string;
}

const ClassLayout: React.FC<ClassLayoutProps> = ({
    lesson,
    progress,
    steps,
    badge,
    badgeIcon,
    title,
    description,
    objectives,
    keyPoints,
    children,
    showQuiz,
    quizProps,
    onNext,
    onPrev,
    nextText = "Siguiente lección",
    prevText = "Anterior"
}) => {
    return (
        <div className="w-full flex flex-col bg-[var(--bg)] min-h-screen">
            <ProgressBar lesson={lesson} progress={progress} />
            
            <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row gap-12 lg:gap-24">
                {/* Sidebar Menu */}
                <aside className="hidden md:block w-64 flex-shrink-0">
                    <StepSideBar steps={steps} />
                </aside>

                {/* Main Content */}
                <div className="flex-1 flex flex-col gap-10 max-w-4xl w-full">
                    
                    {/* Header Section */}
                    <section className="flex flex-col gap-6">
                        {badge && (
                            <div className="flex items-center gap-2 text-[var(--accent)] text-sm font-bold tracking-widest uppercase mb-2">
                                {badgeIcon && <span>{badgeIcon}</span>}
                                <span>{badge}</span>
                            </div>
                        )}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-h)] tracking-tight">
                            {title}
                        </h1>

                        {description && (
                            <div className="border-l-4 border-[var(--accent)] pl-6 my-4">
                                <div className="text-[var(--text)] text-lg md:text-xl leading-relaxed">
                                    {description}
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Objectives Section */}
                    {objectives && objectives.length > 0 && (
                        <section className="bg-[var(--social-bg)] border border-[var(--border)] rounded-xl p-8 my-4">
                            <h3 className="flex items-center gap-3 text-[var(--text-h)] font-semibold text-lg mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Objetivos de aprendizaje
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {objectives.map((obj, index) => (
                                    <li key={index} className="flex items-start gap-4 text-[var(--text)] text-lg">
                                        <span className="text-[var(--accent)] font-mono font-bold mt-1 text-sm">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <span className="leading-relaxed">{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Dynamic Content */}
                    <div className="flex flex-col gap-8 text-[var(--text)] text-lg leading-relaxed">
                        {children}
                    </div>

                    {/* Key Points Section */}
                    {keyPoints && keyPoints.length > 0 && (
                        <section className="bg-[var(--social-bg)] border border-[var(--accent)]/30 rounded-xl p-8 my-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent)]/50"></div>
                            <h3 className="flex items-center gap-3 text-[var(--text-h)] font-semibold text-lg mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18h6"></path>
                                    <path d="M10 22h4"></path>
                                    <path d="M12 2a7 7 0 0 0-7 7c0 2 1.5 4.5 2 5.5V16a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.5c.5-1 2-3.5 2-5.5a7 7 0 0 0-7-7z"></path>
                                </svg>
                                Puntos clave
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {keyPoints.map((point, index) => (
                                    <li key={index} className="flex items-start gap-4 text-[var(--text)] text-lg">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)" stroke="none" className="mt-1 flex-shrink-0">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Footer Navigation */}
                    <div className="flex items-center justify-between border-t border-[var(--border)] pt-8 mt-8">
                        <button 
                            onClick={onPrev}
                            disabled={!onPrev}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                                onPrev 
                                    ? 'bg-[var(--social-bg)] text-[var(--text)] hover:text-[var(--text-h)] hover:bg-[var(--border)] border border-[var(--border)]' 
                                    : 'bg-transparent text-[var(--text)]/40 border border-[var(--border)]/30 cursor-not-allowed'
                            }`}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            {prevText}
                        </button>

                        <button 
                            onClick={onNext}
                            disabled={!onNext}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                                onNext 
                                    ? 'bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90' 
                                    : 'bg-[var(--accent)]/30 text-white/50 cursor-not-allowed'
                            }`}
                        >
                            {nextText}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>

                </div>
            </main>

            {showQuiz && quizProps && (
                <Questionary {...quizProps} />
            )}
        </div>
    );
};

export default ClassLayout;
