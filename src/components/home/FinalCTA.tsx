
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="bg-forestgreen py-20 md:py-24 text-white">
      <div className="container-custom text-center">
        <h2 className="heading-lg text-offwhite mb-6 max-w-3xl mx-auto">
          SIAP MENINGKATKAN STANDAR DENGAN REMPAH KELAS DUNIA?
        </h2>
        
        <p className="text-offwhite/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Diskusikan kebutuhan Anda dengan ahli rempah kami. Mari ciptakan keunggulan bersama <b>CV. MANALAGI BAROKAH MAKMUR ABADI</b> Abadi.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="bg-offwhite text-forestgreen hover:bg-offwhite/90 transition-colors font-semibold px-8 py-4 rounded-md shadow-md hover:shadow-lg tracking-wide uppercase"
          >
            HUBUNGI KAMI SEKARANG
          </Link>
          <Link 
            to="/products" 
            className="bg-transparent hover:bg-white/10 transition-colors border-2 border-white text-white font-semibold px-8 py-4 rounded-md shadow-md hover:shadow-lg tracking-wide uppercase"
          >
            JELAJAHI PRODUK KAMI
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
