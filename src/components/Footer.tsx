
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forestgreen text-beige pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-beige mb-4">CV. Manalagi</h3>
            <p className="text-offwhite">
              Supplier terpercaya hasil bumi premium dari Nusa Tenggara Timur sejak 2010.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-offwhite hover:text-beige/80 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-offwhite hover:text-beige/80 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-offwhite hover:text-beige/80 transition-colors">
                  Produk Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-offwhite hover:text-beige/80 transition-colors">
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
                <Link to="/products/kemiri" className="text-offwhite hover:text-beige/80 transition-colors">
                  Kemiri
                </Link>
              </li>
              <li>
                <Link to="/products/asam" className="text-offwhite hover:text-beige/80 transition-colors">
                  Asam Jawa
                </Link>
              </li>
              <li>
                <Link to="/products/kopra" className="text-offwhite hover:text-beige/80 transition-colors">
                  Kopra
                </Link>
              </li>
              <li>
                <Link to="/products/porang" className="text-offwhite hover:text-beige/80 transition-colors">
                  Porang
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-offwhite hover:text-beige/80/80 transition-colors">
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
                <MapPin className="mr-2 h-5 w-5 text-beige flex-shrink-0" />
                <span className="text-offwhite">
                  Jl. Terusan Timor Raya Km. 7, Kupang, Nusa Tenggara Timur, 85228, Indonesia
                </span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-beige flex-shrink-0" />
                <a href="https://wa.me/+6281223378900" className="text-offwhite hover:text-beige/80 transition-colors">
                  +62 812 2337 8900
                </a>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-beige flex-shrink-0" />
                <a href="mailto:manalagibarokah.makmurabadi@gmail.com" className="text-offwhite hover:text-beige/80 transition-colors break-all">
                  manalagibarokah.makmurabadi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t botext-beige/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-offwhite text-sm">
              &copy; {new Date().getFullYear()} CV. Manalagi Barokah Makmur Abadi. Seluruh Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-offwhite hover:text-beige/80 text-sm transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-offwhite hover:text-beige/80 text-sm transition-colors">
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
