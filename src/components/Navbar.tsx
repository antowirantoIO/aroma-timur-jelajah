
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-offwhite/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className={`${!isScrolled ? 'text-forestgreen' : ''} font-playfair font-bold text-2xl text-charcoal`}>
            CV. <span className="text-forestgreen">MANALAGI BAROKAH MAKMUR ABADI</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/"
            className={`font-opensans font-medium hover:text-forestgreen transition-colors ${(location.pathname === '/' || !isScrolled) ? 'text-forestgreen' : 'text-charcoal'}`}
          >
            Beranda
          </Link>
          <Link 
            to="/about"
            className={`font-opensans font-medium hover:text-forestgreen transition-colors ${(location.pathname === '/about' || !isScrolled) ? 'text-forestgreen' : 'text-charcoal'}`}
          >
            Tentang Kami
          </Link>
          <Link 
            to="/products"
            className={`font-opensans font-medium hover:text-forestgreen transition-colors ${(location.pathname.includes('/products') || !isScrolled) ? 'text-forestgreen' : 'text-charcoal'}`}
          >
            Produk
          </Link>
          <Link 
            to="/contact"
            className="btn-outline py-2 px-4 ml-2 flex gap-2"
          >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
              <span>
                  Hubungi Kami
              </span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-charcoal ${!isScrolled ? 'text-forestgreen' : ''} hover:text-forestgreen focus:outline-none`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-offwhite/95 backdrop-blur-md absolute top-full left-0 w-full py-4 shadow-md animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <Link 
              to="/"
              className={`font-opensans font-medium py-2 hover:text-forestgreen transition-colors ${location.pathname === '/' ? 'text-forestgreen' : 'text-charcoal'}`}
            >
              Beranda
            </Link>
            <Link 
              to="/about"
              className={`font-opensans font-medium py-2 hover:text-forestgreen transition-colors ${location.pathname === '/about' ? 'text-forestgreen' : 'text-charcoal'}`}
            >
              Tentang Kami
            </Link>
            <Link 
              to="/products"
              className={`font-opensans font-medium py-2 hover:text-forestgreen transition-colors ${location.pathname.includes('/products') ? 'text-forestgreen' : 'text-charcoal'}`}
            >
              Produk
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
