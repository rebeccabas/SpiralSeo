import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SEOForm from './SeoForm';

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Article SEO');

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-lg">
                SpiralSEO
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/article-seo"
                  className={`${
                    activeMenuItem === 'Article SEO'
                      ? 'border-b-2 border-white text-white'
                      : 'text-gray-300 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                  onClick={() => setActiveMenuItem('Article SEO')}
                >
                  Article SEO
                </NavLink>
                <NavLink
                  to="/title-seo"
                  className={`${
                    activeMenuItem === 'Title SEO'
                      ? 'border-b-2 border-white text-white'
                      : 'text-gray-300 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                  onClick={() => setActiveMenuItem('Title SEO')}
                >
                  Title SEO
                </NavLink>
                <NavLink
                  to="/youtube-seo"
                  className={`${
                    activeMenuItem === 'Youtube SEO'
                      ? 'border-b-2 border-white text-white'
                      : 'text-gray-300 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                  onClick={() => setActiveMenuItem('Youtube SEO')}
                >
                  Youtube SEO
                </NavLink>
                <NavLink
                  to="/keyword-generator"
                  className={`${
                    activeMenuItem === 'Keyword Generator'
                      ? 'border-b-2 border-white text-white'
                      : 'text-gray-300 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                  onClick={() => setActiveMenuItem('Keyword Generator')}
                >
                  Keyword Generator
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className={`${
                    activeMenuItem === 'Contact Us'
                      ? 'border-b-2 border-white text-white'
                      : 'text-gray-300 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
                  onClick={() => setActiveMenuItem('Contact Us')}
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-16 p-8">
        {activeMenuItem === 'Article SEO' && <SEOForm />}
        {/* Add components for other menu items here */}
      </div>
    </div>
  );
};

export default Navbar;