
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="pt-24">
      <section className="bg-forestgreen text-white py-20">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Lebih Dekat Dengan <b>CV. MANALAGI BAROKAH MAKMUR ABADI</b></h1>
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
                <span className="golden-border pb-2">Akar Kami:</span> Sebuah Perjalanan
              </h2>
              <h3 className="heading-md text-forestgreen mb-4">
                Dari Usaha Keluarga, Menuju Standar Industri yang Tinggi.
              </h3>
              <p className="paragraph mb-4">
                Perjalanan <b>CV. MANALAGI BAROKAH MAKMUR ABADI</b> bermula pada tahun 2010, berawal dari usaha keluarga sederhana yang berfokus pada pengolahan kemiri dari kebun-kebun di sekitar Kupang, Nusa Tenggara Timur.
              </p>
              <p className="paragraph mb-4">
                Dengan tekad kuat dan dedikasi pada kualitas, kami bertransformasi dari UD (Usaha Dagang) menjadi CV (Commanditaire Vennootschap) yang lebih terstruktur dengan diversifikasi produk meliputi Kemiri, Asam Jawa, Kopra, dan berbagai hasil bumi unggulan lainnya.
              </p>
              <p className="paragraph">
                Saat ini, <b>CV. MANALAGI BAROKAH MAKMUR ABADI</b> telah menjadi salah satu pemasok terpercaya hasil bumi NTT dengan jangkauan pasar yang luas, tetapi kami tetap berpegang pada nilai-nilai awal: kualitas tanpa kompromi, transparansi, dan hubungan yang berkelanjutan.
              </p>
            </div>
            <div>
              <div className="relative">
                <img
                  src="https://media-public.canva.com/sO7vE/MAGZNAsO7vE/1/tl.jpg"
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
              Visi & Misi Perusahaan
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

      <section className="py-20 bg-forestgreen text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg text-white mb-6">
                <span className="pb-2">Komitmen Kami</span> dalam Pembelian dan Distribusi Barang
              </h2>
              <p className="text-white/80 mb-6">
                Di <b>CV. MANALAGI BAROKAH MAKMUR ABADI</b>, kami berfokus pada proses pembelian dan sortir barang yang cermat sebelum dikemas untuk penjualan. Kami memahami pentingnya menyediakan produk berkualitas yang tepat untuk pasar grosir. Oleh karena itu, kami berkomitmen untuk:
              </p>
              <ul className="space-y-4 text-white/80">
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-gold mr-3 flex-shrink-0 flex items-center justify-center">✓</div>
                  <span>Seleksi barang yang teliti untuk memastikan kualitas terbaik</span>
                </li>
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-gold mr-3 flex-shrink-0 flex items-center justify-center">✓</div>
                  <span>Proses sortir barang sebelum pengemasan untuk efisiensi penjualan</span>
                </li>
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-gold mr-3 flex-shrink-0 flex items-center justify-center">✓</div>
                  <span>Menawarkan produk dengan harga kompetitif untuk pasar grosir</span>
                </li>
                <li className="flex">
                  <div className="w-6 h-6 rounded-full bg-gold mr-3 flex-shrink-0 flex items-center justify-center">✓</div>
                  <span>Pengiriman tepat waktu untuk memenuhi kebutuhan pelanggan grosir</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                  src="https://www.mas-software.com/wp-content/uploads/2022/09/Pengertian-Gudang.jpg.webp"
                  alt="Business Distribution"
                  className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
