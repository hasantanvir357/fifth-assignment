import bannerImage from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 md:pb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            <span className="block text-slate-900 mb-1">Build Your Ideal</span>
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-md mx-auto md:mx-0 leading-relaxed font-normal">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the
            stack that fits your next project.
          </p>

          {/* Buttons  */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
            <button
              type="button"
              className="h-11 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-orange-500 to-pink-500 hover:opacity-95 shadow-sm whitespace-nowrap transition-transform active:scale-95"
            >
              Explore Technologies
            </button>

            <button
              type="button"
              className="h-11 px-6 rounded-xl text-xs sm:text-sm font-medium border border-slate-200 text-slate-700 bg-white hover:bg-slate-100 shadow-sm whitespace-nowrap transition-transform active:scale-95"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center md:justify-end w-full mt-4 md:mt-0">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-full max-w-72.5 sm:max-w-90 md:max-w-105 lg:max-w-120 h-auto object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
