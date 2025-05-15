
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="heading-lg mb-4 text-charcoal">
              <span className="golden-border pb-2">Warisan Kami,</span> Komitmen Anda
            </h2>
            <h3 className="heading-md text-forestgreen mb-6">
              Lebih Dari Sekadar Rempah, Ini Adalah Dedikasi.
            </h3>
            <p className="paragraph mb-6 text-charcoal/80">
              Sejak 2010, <b>CV. MANALAGI BAROKAH MAKMUR ABADI</b> telah bertransformasi dari semangat usaha keluarga menjadi pilar pemasok hasil bumi NTT yang terstruktur dan berstandar internasional. Kami bukan hanya pedagang; kami adalah penjaga kualitas, penghubung tradisi dengan pasar global, dan mitra terpercaya Anda dalam menghadirkan cita rasa otentik.
            </p>
            <Link 
              to="/about" 
              className="btn-outline inline-block mt-4 hover:shadow"
            >
              Kisah Lengkap Perjalanan Kami
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-28 h-28 md:w-36 md:h-36 bg-mintgreen/30 rounded-full z-0"></div>
              <img 
                src="https://media-public.canva.com/4qFvQ/MADy3B4qFvQ/1/tl.jpg"
                alt="Tim CV. Manalagi melakukan proses quality control" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-forestgreen/20 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
