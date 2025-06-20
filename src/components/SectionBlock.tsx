import React from "react";
import { useNavigate } from "react-router-dom";

interface SectionBlockProps {
  title?: string;
  description: string;
  subtitle?: string;
  route: string;
  animationType?: string;
  children?: React.ReactNode;
  className?: string;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
  title,
  subtitle,
  description,
  children,
  route,
  animationType,
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <section
      id={animationType}
      className={`section-block cursor-pointer ${className} py-10 px-6 bg-white rounded-2xl shadow-lg transition-transform hover:scale-105`}
      onClick={() => navigate(route)}
    >
      <div className="grid grid-cols-1 gap-4">
        {title && (
          <h2 className="section-block__title text-3xl font-extrabold text-gray-800 mb-1">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="section-block__subtitle text-base text-indigo-500 font-medium mb-2">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="section-block__description text-gray-600 mb-4">
            {description}
          </p>
        )}
        <div className="section-block__content grid grid-cols-1 md:grid-cols-2 gap-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionBlock;
