
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
    <section className="relative h-screen w-full bg-deepbrown overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-deepbrown/70 to-deepbrown/80 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          {/* Fallback to a placeholder image until you have your actual video */}
          <source src="https://rr5---sn-a5meknzk.googlevideo.com/videoplayback?expire=1747159711&ei=PzYjaIavDf-JvdIPrabIkQg&ip=163.5.103.251&id=o-APQU9_gseLSxyVe3IOhsJ7kWJJCq2gIF9bbDtIdxTpHO&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&siu=1&bui=AecWEAaO4HMAaQY4PZKvu9Y6kZpwxkYLDyo76fzWUbEC04R9srT05F7KJCqeOFIaJhaGP0WmjQ&spc=wk1kZt_Z8daR&vprv=1&svpuc=1&mime=video%2Fmp4&ns=XKlm0M1Zb9_ncgmidd8d0BkQ&rqh=1&gir=yes&clen=110110930&dur=188.054&lmt=1604689142076930&keepalive=yes&fexp=24350590,24350737,24350827,24350961,24351173,24351177,24351495,24351528,24351594,24351638,24351658,24351662,24351673,24351757,24351789,24351864,24351876,24351905,24351907,24352018,24352023,24352028,51476174&c=TVHTML5_SIMPLY_EMBEDDED_PLAYER&sefc=1&txp=6216222&n=UxsCFOtMqSjqqg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Csiu%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAJoZraCFw4_1JGL0jBb9FQfoXhb3dJyFrITyjNVD-fd6AiEA1PQbQHbwpunh_r4q-4G0KB3yoHqCK7ZkxqHN0RHeWbo%3D&title=Rubber+Farm+%2F%2F+Indonesia+rubber+plantation+%2F%2F+drone+aerial+video+%2F%2F+No+Copyright+Video+4K&redirect_counter=1&cm2rm=sn-25gkz7l&rrc=80&req_id=a1b93612f2cfa3ee&cms_redirect=yes&cmsv=e&met=1747138139,&mh=yP&mip=182.253.57.180&mm=34&mn=sn-a5meknzk&ms=ltu&mt=1747136702&mv=D&mvi=5&pl=0&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACuhMU0wRAIgef9GNGkuHCstHtfRP810f9dX3sI5u1ljOCBErt_p-wACIBVyLpv6h_wa_JLrySynqSCnSK_GcpDaNUKJYJV58hO9" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full w-full flex items-center">
        <div className="container-custom text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0 animate-fade-in">
            <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              CV. MANALAGI BAROKAH MAKMUR ABADI
            </h1>
            <h2 className="text-beige/90 text-xl md:text-2xl font-opensans leading-relaxed mb-5">
              Di Mana Setiap Butir Rempah Menceritakan Kisah Keaslian Nusa Tenggara Timur.
            </h2>
            <p className="text-beige/90 text-xl md:text-2xl font-opensans leading-relaxed mb-10">
              Dari jantung agrikultur Indonesia, kami persembahkan Kemiri, Asam, Kopra, dan mahakarya alam lainnya – dipanen dengan hati, diproses dengan presisi, untuk kualitas tanpa kompromi.
            </p>
            <Link 
              to="/products" 
              className="btn-primary inline-block text-center shadow-lg hover:shadow-xl"
            >
              JELAJAHI KOLEKSI KAMI
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-subtle z-20"
        onClick={scrollToNextSection}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
