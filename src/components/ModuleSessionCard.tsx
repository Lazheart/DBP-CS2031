import React from "react";
import { Link } from "react-router-dom";

interface ModuleSessionCardProps {
  number?: string;
  title: string;
  description: string;
  to: string;
  icon: React.ReactNode;
  tags?: string[];
  recommended?: boolean;
}

const ModuleSessionCard: React.FC<ModuleSessionCardProps> = ({
  number,
  title,
  description,
  to,
  icon,
  tags = [],
  recommended = false,
}) => {
  return (
    <Link
      to={to}
      className={`module-card ${recommended ? "module-card--recommended" : ""}`}
    >
      <div className="module-card__header">
        <div className="module-card__title-container">
          {number && <span className="module-card__number">{number}</span>}

          <h2 className="module-card__title">{title}</h2>
        </div>

        <div className="module-card__icon">{icon}</div>
      </div>

      <p className="module-card__desc">{description}</p>

      {tags.length > 0 && (
        <div className="module-card__tags">
          {tags.map((tag) => (
            <span className="module-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};

export default ModuleSessionCard;
