
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-beige/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className={`${!isScrolled ? 'text-terracotta' : ''} font-playfair font-bold text-2xl text-deepbrown`}>
            CV. <span className="text-terracotta">Manalagi</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/"
            className={`font-opensans font-medium hover:text-terracotta transition-colors ${(location.pathname === '/' || !isScrolled) ? 'text-terracotta' : 'text-deepbrown'}`}
          >
            Beranda
          </Link>
          <Link 
            to="/about"
            className={`font-opensans font-medium hover:text-terracotta transition-colors ${(location.pathname === '/about' || !isScrolled) ? 'text-terracotta' : 'text-deepbrown'}`}
          >
            Tentang Kami
          </Link>
          <Link 
            to="/products"
            className={`font-opensans font-medium hover:text-terracotta transition-colors ${(location.pathname.includes('/products') || !isScrolled) ? 'text-terracotta' : 'text-deepbrown'}`}
          >
            Produk
          </Link>
          <Link 
            to="/blog"
            className={`font-opensans font-medium hover:text-terracotta transition-colors ${(location.pathname.includes('/blog') || !isScrolled) ? 'text-terracotta' : 'text-deepbrown'}`}
          >
            Blog
          </Link>
          <Link 
            to="/contact"
            className="btn-outline py-2 px-4 ml-2"
          >
            Hubungi Kami
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-deepbrown ${!isScrolled ? 'text-terracotta' : ''} hover:text-terracotta focus:outline-none`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-beige/95 backdrop-blur-md absolute top-full left-0 w-full py-4 shadow-md animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <Link 
              to="/"
              className={`font-opensans font-medium py-2 hover:text-terracotta transition-colors ${location.pathname === '/' ? 'text-terracotta' : 'text-deepbrown'}`}
            >
              Beranda
            </Link>
            <Link 
              to="/about"
              className={`font-opensans font-medium py-2 hover:text-terracotta transition-colors ${location.pathname === '/about' ? 'text-terracotta' : 'text-deepbrown'}`}
            >
              Tentang Kami
            </Link>
            <Link 
              to="/products"
              className={`font-opensans font-medium py-2 hover:text-terracotta transition-colors ${location.pathname.includes('/products') ? 'text-terracotta' : 'text-deepbrown'}`}
            >
              Produk
            </Link>
            <Link 
              to="/blog"
              className={`font-opensans font-medium py-2 hover:text-terracotta transition-colors ${location.pathname.includes('/blog') ? 'text-terracotta' : 'text-deepbrown'}`}
            >
              Blog
            </Link>
            <Link 
              to="/contact"
              className="btn-outline text-center py-2 px-4 mt-2"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
