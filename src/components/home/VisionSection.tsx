
import { Globe } from 'lucide-react';

const VisionSection = () => {
  return (
    <section className="py-20 md:py-28 relative bg-white text-charcoal overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-forestgreen/10 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
          alt="Panorama Nusa Tenggara Timur" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-20 h-20 bg-mutedgold/20 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-10 h-10 text-mutedgold" />
            </div>
            
            <h2 className="heading-lg text-forestgreen mb-6">
              <span className="border-b-2 border-mutedgold pb-2">Dari Ladang NTT</span> ke Dapur Dunia: Visi Global Kami
            </h2>
            
            <p className="text-charcoal/80 mb-6 paragraph">
              Di CV. Manalagi, kami tidak hanya memasarkan produk. Kami mengenalkan dunia pada keajaiban rempah Indonesia, khususnya dari Nusa Tenggara Timur. Kami memiliki visi untuk menjadi pemain terdepan di kancah industri rempah global yang membawa kebanggaan bagi Indonesia.
            </p>
            
            <p className="text-charcoal/80 paragraph">
              Dengan kombinasi antara kekayaan tradisi lokal dan standar kualitas internasional, kami bekerja tanpa lelah untuk memastikan hasil bumi terbaik kami menyentuh pasar dunia, sambil membawa dampak positif bagi masyarakat petani lokal.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-lightgrey shadow-md">
                  <div className="font-playfair font-bold text-4xl text-forestgreen mb-2">80+</div>
                  <div className="text-charcoal/80">Petani Mitra</div>
                </div>
                <div className="bg-white p-5 rounded-lg border border-lightgrey shadow-md">
                  <div className="font-playfair font-bold text-4xl text-forestgreen mb-2">3</div>
                  <div className="text-charcoal/80">Provinsi</div>
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="bg-white p-5 rounded-lg border border-lightgrey shadow-md">
                  <div className="font-playfair font-bold text-4xl text-forestgreen mb-2">12+</div>
                  <div className="text-charcoal/80">Tahun Pengalaman</div>
                </div>
                <div className="bg-white p-5 rounded-lg border border-lightgrey shadow-md">
                  <div className="font-playfair font-bold text-4xl text-forestgreen mb-2">5+</div>
                  <div className="text-charcoal/80">Negara Tujuan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
