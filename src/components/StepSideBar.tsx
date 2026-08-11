import React, { useEffect, useState } from 'react';

export interface TopicStep {
    id: string;
    title: string;
}

interface StepSideBarProps {
    steps: TopicStep[];
}

const StepSideBar: React.FC<StepSideBarProps> = ({ steps }) => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120; // Offset for sticky header

            let currentActiveId = steps.length > 0 ? steps[0].id : '';
            for (const step of steps) {
                const element = document.getElementById(step.id);
                if (element) {
                    const top = element.getBoundingClientRect().top + window.scrollY;
                    if (top <= scrollPosition) {
                        currentActiveId = step.id;
                    }
                }
            }
            if (currentActiveId) {
                setActiveId(currentActiveId);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on mount
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [steps]);

    const handleClick = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveId(id);
        }
    };

    if (!steps || steps.length === 0) return null;

    return (
        <div className="sticky top-[90px] flex flex-col gap-2">
            <h4 className="text-[var(--text-h)] font-bold text-sm mb-2 uppercase tracking-widest font-['Share_Tech']">
                En esta página
            </h4>
            <ul className="flex flex-col gap-0 border-l border-[var(--border)]">
                {steps.map((step) => (
                    <li key={step.id}>
                        <a
                            href={`#${step.id}`}
                            onClick={(e) => handleClick(step.id, e)}
                            className={`block py-2 pl-4 text-[14px] transition-colors duration-200 border-l-2 -ml-[1px] ${
                                activeId === step.id
                                    ? 'text-[var(--accent)] font-semibold border-[var(--accent)] bg-[var(--accent-bg)]/10'
                                    : 'text-[var(--text)] font-medium border-transparent hover:text-[var(--text-h)] hover:border-[var(--border)]'
                            }`}
                        >
                            {step.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StepSideBar;