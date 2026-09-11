import { useState, useEffect } from 'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import TechContainer from './Components/TechContainer';
import Footer from './Components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4">
        {/* DaisyUI Spinner */}
        <span className="loading loading-spinner loading-lg text-pink-600 scale-125"></span>
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">Loading StackBuilder...</h2>
          <p className="text-sm text-gray-400 mt-1">Please wait a moment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Nav />
      <Hero />
      <TechContainer />
      <Footer />
    </div>
  );
};

export default App;
