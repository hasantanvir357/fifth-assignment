import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TechCard from './TechCard';
import SelectedStack from './SelectedStack';
import type { Technology } from './Types/Technology';

const TechContainer = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/Technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Data Fetch Error:', err);
        setIsLoading(false);
      });
  }, []);

  const handleSelectTech = (tech: Technology) => {
    const exists = selectedTechs.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`, { position: 'bottom-right' });
    } else {
      setSelectedTechs([...selectedTechs, tech]);

      toast.success(`${tech.name} added to stack!`, { position: 'bottom-right' });
    }
  };

  const handleRemoveTech = (id: string) => {
    const itemToRemove = selectedTechs.find((item) => item.id === id);
    setSelectedTechs(selectedTechs.filter((item) => item.id !== id));

    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack.`, { position: 'bottom-right' });
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);

    toast.error('All technologies removed from stack.', { position: 'bottom-right' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Explore the <span className="text-pink-700">Technologies</span>
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <span className="loading loading-spinner loading-lg text-pink-500"></span>
          <p className="text-gray-500 mt-3 font-medium animate-pulse">Loading technologies...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                onSelect={handleSelectTech}
                isSelected={selectedTechs.some((item) => item.id === tech.id)}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <SelectedStack selectedTechs={selectedTechs} onRemove={handleRemoveTech} onRemoveAll={handleRemoveAll} />
          </div>
        </div>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={false} />
    </section>
  );
};

export default TechContainer;
