
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deepbrown text-beige pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">CV. Manalagi</h3>
            <p className="text-warmgrey">
              Supplier terpercaya hasil bumi premium dari Nusa Tenggara Timur sejak 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-warmgrey hover:text-gold transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-warmgrey hover:text-gold transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-warmgrey hover:text-gold transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-warmgrey hover:text-gold transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-warmgrey hover:text-gold transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-warmgrey hover:text-gold transition-colors">
                  Produk Kami
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-warmgrey hover:text-gold transition-colors">
                  Blog / Jurnal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-warmgrey hover:text-gold transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Produk */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Produk Unggulan</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/kemiri" className="text-warmgrey hover:text-gold transition-colors">
                  Kemiri
                </Link>
              </li>
              <li>
                <Link to="/products/asam" className="text-warmgrey hover:text-gold transition-colors">
                  Asam Jawa
                </Link>
              </li>
              <li>
                <Link to="/products/kopra" className="text-warmgrey hover:text-gold transition-colors">
                  Kopra
                </Link>
              </li>
              <li>
                <Link to="/products/porang" className="text-warmgrey hover:text-gold transition-colors">
                  Porang
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gold hover:text-gold/80 transition-colors">
                  Lihat Semua Produk →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-warmgrey">
                  Jl. Terusan Timor Raya Km. 7, Kupang, Nusa Tenggara Timur, 85228, Indonesia
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-gold flex-shrink-0" />
                <a href="tel:+6281234588819" className="text-warmgrey hover:text-gold transition-colors">
                  +62 8123 4588 819
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-gold flex-shrink-0" />
                <a href="mailto:manalagibarokah.makmurabadi@gmail.com" className="text-warmgrey hover:text-gold transition-colors break-all">
                  manalagibarokah.makmurabadi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-warmgrey/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-warmgrey text-sm">
              &copy; {new Date().getFullYear()} CV. Manalagi Barokah Makmur Abadi. Seluruh Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-warmgrey hover:text-gold text-sm transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-warmgrey hover:text-gold text-sm transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
