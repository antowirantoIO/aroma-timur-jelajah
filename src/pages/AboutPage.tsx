
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="pt-24">
      <section className="bg-deepbrown text-white py-20">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Lebih Dekat Dengan CV. Manalagi Barokah Makmur Abadi</h1>
          <p className="paragraph text-white/80 max-w-3xl">
            Mengenal lebih dekat perjalanan kami, nilai-nilai yang kami pegang, dan komitmen kami terhadap kualitas dan keberlanjutan.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                <span className="golden-border pb-2">Akar Kami:</span> Sebuah Perjalanan dari Hati
              </h2>
              <h3 className="heading-md text-terracotta mb-4">
                Dari Usaha Keluarga yang Rendah Hati, Menuju Standar Industri yang Tinggi.
              </h3>
              <p className="paragraph mb-4">
                Perjalanan CV. Manalagi Barokah Makmur Abadi bermula pada tahun 2010, berawal dari usaha keluarga sederhana yang berfokus pada pengolahan kemiri dari kebun-kebun di sekitar Kupang, Nusa Tenggara Timur.
              </p>
              <p className="paragraph mb-4">
                Dengan tekad kuat dan dedikasi pada kualitas, kami bertransformasi dari UD (Usaha Dagang) menjadi CV (Commanditaire Vennootschap) yang lebih terstruktur dengan diversifikasi produk meliputi Kemiri, Asam Jawa, Kopra, dan berbagai hasil bumi unggulan lainnya.
              </p>
              <p className="paragraph">
                Saat ini, CV. Manalagi telah menjadi salah satu pemasok terpercaya hasil bumi NTT dengan jangkauan pasar yang luas, tetapi kami tetap berpegang pada nilai-nilai awal: kualitas tanpa kompromi, transparansi, dan hubungan yang berkelanjutan.
              </p>
            </div>
            <div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Perjalanan CV. Manalagi"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-warmgrey/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">
              <span className="forest-border pb-2">Nakhoda Kami:</span> Visi & Misi Perusahaan
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-gold">
              <h3 className="heading-md text-deepbrown mb-6">Visi</h3>
              <p className="paragraph">
                Menjadi ikon supplier rempah dan hasil bumi Nusantara yang paling terpercaya dan inovatif, diakui kualitasnya di panggung global, serta membawa kesejahteraan bagi ekosistem agrikultur lokal.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-forestgreen">
              <h3 className="heading-md text-deepbrown mb-6">Misi</h3>
              <ul className="space-y-4">
                <li className="paragraph flex">
                  <span className="mr-2 text-forestgreen">•</span>
                  Membangun jaringan pengadaan yang superior dan berkelanjutan, menghubungkan kekayaan alam NTT dengan pasar dunia.
                </li>
                <li className="paragraph flex">
                  <span className="mr-2 text-forestgreen">•</span>
                  Mengedukasi pasar dan secara proaktif memahami kebutuhan unik setiap pelanggan untuk memberikan solusi rempah yang presisi dan bernilai tambah.
                </li>
                <li className="paragraph flex">
                  <span className="mr-2 text-forestgreen">•</span>
                  Menetapkan dan melampaui standar kualitas industri melalui inovasi berkelanjutan dalam proses dan teknologi.
                </li>
                <li className="paragraph flex">
                  <span className="mr-2 text-forestgreen">•</span>
                  Memberdayakan petani lokal melalui kemitraan yang adil dan praktik yang bertanggung jawab.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="golden-border pb-2">Tim di Balik Keunggulan</span>
            </h2>
            <p className="paragraph max-w-3xl mx-auto">
              Berkenalan dengan individu-individu berbakat yang mendedikasikan karya mereka untuk memastikan kualitas terbaik dari CV. Manalagi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team members would go here - placeholder for now */}
            <div className="card-highlight text-center">
              <div className="w-24 h-24 bg-warmgrey/20 rounded-full mx-auto mb-4"></div>
              <h3 className="font-playfair font-bold text-xl mb-2">Nama Pimpinan</h3>
              <p className="text-terracotta mb-3">Direktur Utama</p>
              <p className="text-deepbrown/80 text-sm">"Kualitas produk adalah refleksi integritas kami."</p>
            </div>
            <div className="card-highlight text-center">
              <div className="w-24 h-24 bg-warmgrey/20 rounded-full mx-auto mb-4"></div>
              <h3 className="font-playfair font-bold text-xl mb-2">Nama Manajer Operasional</h3>
              <p className="text-terracotta mb-3">Manajer Operasional</p>
              <p className="text-deepbrown/80 text-sm">"Setiap proses dijalankan dengan presisi dan standar tinggi."</p>
            </div>
            <div className="card-highlight text-center">
              <div className="w-24 h-24 bg-warmgrey/20 rounded-full mx-auto mb-4"></div>
              <h3 className="font-playfair font-bold text-xl mb-2">Nama Quality Control</h3>
              <p className="text-terracotta mb-3">Kepala Quality Control</p>
              <p className="text-deepbrown/80 text-sm">"Kami berkomitmen pada standar tanpa kompromi."</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-forestgreen text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg text-white mb-6">
                <span className="border-b-2 border-gold pb-2">Komitmen Kami</span> pada Bumi & Masyarakat
              </h2>
              <h3 className="text-xl text-gold mb-6 font-playfair">
                Bertumbuh Bersama: Jejak Positif Kami untuk Alam dan Komunitas.
              </h3>
              <p className="text-white/80 mb-6">
                Di CV. Manalagi, kami memahami bahwa kesuksesan bisnis tidak pernah dapat dipisahkan dari kesejahteraan lingkungan dan masyarakat. Itulah mengapa kami berkomitmen pada:
              </p>
              <ul className="space-y-4 text-white/80">
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-gold mr-3 flex-shrink-0 flex items-center justify-center">✓</div>
                  <span>Praktik pertanian berkelanjutan yang meminimalkan dampak lingkungan</span>
                </li>
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-gold mr-3 flex-shrink-0 flex items-center justify-center">✓</div>
                  <span>Pemberdayaan ekonomi petani lokal melalui harga yang adil</span>
                </li>
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-gold mr-3 flex-shrink-0 flex items-center justify-center">✓</div>
                  <span>Pengurangan limbah dan penggunaan energi dalam rantai produksi</span>
                </li>
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-gold mr-3 flex-shrink-0 flex items-center justify-center">✓</div>
                  <span>Program edukasi tentang praktik pertanian terbaik</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="Sustainability initiatives"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-terracotta text-white text-center">
        <div className="container-custom">
          <h2 className="heading-md text-white mb-6">
            Ingin Berkolaborasi dengan Kami?
          </h2>
          <Link 
            to="/contact" 
            className="bg-white text-terracotta hover:bg-white/90 transition-colors font-semibold px-8 py-4 rounded-md shadow-md hover:shadow-lg tracking-wide uppercase inline-block"
          >
            HUBUNGI KAMI
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
