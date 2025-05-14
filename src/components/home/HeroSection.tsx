
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full bg-forestgreen overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-forestgreen/70 to-forestgreen/80 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          {/* Fallback to a placeholder image until you have your actual video */}
          <source src="https://service.tandycom.online/images/footage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full w-full flex items-center">
        <div className="container-custom text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0 animate-fade-in">
            <h1 className="text-offwhite font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              CV. MANALAGI BAROKAH MAKMUR ABADI
            </h1>
            <h2 className="text-offwhite/90 text-xl md:text-2xl font-opensans leading-relaxed mb-5">
              Di Mana Setiap Butir Rempah Menceritakan Kisah Keaslian Nusa Tenggara Timur.
            </h2>
            <p className="text-offwhite/90 text-xl md:text-2xl font-opensans leading-relaxed mb-10">
              Dari jantung agrikultur Indonesia, kami persembahkan Kemiri, Asam, Kopra, dan mahakarya alam lainnya – dipanen dengan hati, diproses dengan presisi, untuk kualitas tanpa kompromi.
            </p>
            <Link 
              to="/products" 
              className="bg-offwhite text-forestgreen hover:bg-offwhite/90 transition-colors font-semibold px-8 py-4 rounded-md shadow-md hover:shadow-lg tracking-wide uppercase"
            >
              JELAJAHI KOLEKSI KAMI
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-offwhite animate-bounce-subtle z-20"
        onClick={scrollToNextSection}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
