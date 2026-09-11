import React from 'react';
import type { Technology } from './Types/Technology';

interface SelectedStackProps {
  selectedTechs: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const SelectedStack: React.FC<SelectedStackProps> = ({ selectedTechs, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-6">
      <h2 className="text-xl font-bold text-gray-800">Your Stack</h2>
      <p className="text-sm text-gray-400 mb-4">
        {selectedTechs.length} {selectedTechs.length === 1 ? 'Technology' : 'Technologies'} Selected
      </p>

      {selectedTechs.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center my-4">
          <p className="text-gray-400 text-sm">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3 mb-6 max-h-95 overflow-y-auto pr-1">
          {selectedTechs.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-white transition-all"
            >
              <div className="flex items-center space-x-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="font-bold text-sm text-gray-800">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 p-1 font-bold text-sm transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/*  All Removal */}
      {selectedTechs.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full py-2.5 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 font-medium text-sm transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedStack;
