const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4 max-w-sm text-center md:text-left mx-auto md:mx-0">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-purple-600 via-pink-500 to-rose-400 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Dev <span className="text-pink-600">Stack</span>
              </span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-3 text-sm font-medium text-gray-600 pt-1">
              <a href="#github" className="hover:text-pink-600 transition-colors">
                GitHub
              </a>
              <span className="text-gray-300">•</span>
              <a href="#twitter" className="hover:text-pink-600 transition-colors">
                Twitter
              </a>
              <span className="text-gray-300">•</span>
              <a href="#linkedin" className="hover:text-pink-600 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm text-center sm:text-left pt-4 md:pt-0">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">PRODUCT</h4>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#home" className="hover:text-gray-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="hover:text-gray-900 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-gray-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">COMPANY</h4>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#about" className="hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">LEGAL</h4>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#privacy" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 my-8"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3 text-center sm:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
