import React from 'react';

type Technology = {
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge?: string;
};

interface TechCardProps {
  tech: Technology;
  onSelect: (tech: Technology) => void;
  isSelected: boolean;
}

const TechCard: React.FC<TechCardProps> = ({ tech, onSelect, isSelected }) => {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="card bg-base-100 border border-gray-200 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between rounded-2xl">
      <div>
        {/* Header: Icon and Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 p-2 bg-blue-50/50 rounded-xl flex items-center justify-center">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          {badge && (
            <span className="badge badge-info badge-outline text-xs font-semibold px-3 py-1 rounded-full">{badge}</span>
          )}
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3 min-h-15">{description}</p>
      </div>

      <div>
        {/* Meta info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-3 border-t border-gray-100">
          <span className="bg-gray-100 px-3 py-1.5 rounded-full text-gray-700 font-medium">{category}</span>
          <span>{difficulty}</span>
          <span className="flex items-center font-bold text-amber-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-0.5">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700 text-sm">{rating}</span>
          </span>
        </div>

        {/* --- Button --- */}
        <button
          onClick={() => onSelect(tech)}
          disabled={isSelected}
          className={`btn w-full text-base font-semibold group flex items-center justify-center gap-2.5 
          transition-all duration-300 shadow-sm
          
          rounded-xl px-6 py-3 h-auto
          
          ${
            isSelected
              ? 'btn-disabled bg-emerald-50! text-emerald-700! border border-emerald-100 cursor-not-allowed'
              : 'bg-gray-950 text-white border-gray-950 hover:bg-gray-800 hover:border-gray-800 hover:-translate-y-0.5 hover:shadow-lg'
          }`}
        >
          {isSelected ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Added to Stack
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 transition-transform group-hover:rotate-90"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add to Stack
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
