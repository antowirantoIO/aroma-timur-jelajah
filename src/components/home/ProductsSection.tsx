import { useState, useEffect, useCallback } from 'react'; // Tambahkan useEffect dan useCallback
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable'; // Impor useSwipeable

// Sample products data (tetap sama)
const products = [
  {
    id: "kemiri",
    name: "Kemiri",
    description: "Kemiri Pilihan: Inti Kenikmatan, Kilau Alami untuk Karya Kuliner dan Kecantikan Anda.",
    image: "https://media-public.canva.com/o5pBU/MAFdWzo5pBU/1/tl.jpg"
  },
  {
    id: "asam",
    name: "Asam Jawa",
    description: "Asam Jawa Murni: Sentuhan Asam Memikat yang Mengangkat Setiap Cita Rasa Masakan.",
    image: "https://media-public.canva.com/JfZcI/MADza5JfZcI/1/tl.jpg"
  },
  {
    id: "sirih-hutan",
    name: "Sirih Hutan",
    description: "Sirih Hutan: Rempah Alami dengan Aroma Khas untuk Kebutuhan Tradisional dan Kesehatan.",
    image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/74/2024/04/27/F-LANDHU-CABAI-JAWA-7-ail-2355476850.jpg"
  },
  {
    id: "kopra",
    name: "Kopra",
    description: "Kopra Premium: Kelapa Terseleksi untuk Ekstraksi Minyak Berkualitas Tinggi.",
    image: "https://media-public.canva.com/O-MjM/MAECayO-MjM/1/tl.jpg"
  },
  {
    id: "porang",
    name: "Porang",
    description: "Porang Unggul: Umbi Terstandarisasi untuk Industri Pangan dan Suplemen.",
    image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/11/04045014/Mengenal-Tanaman-Porang-Bahan-Baku-Pembuatan-Shirataki.jpg.webp"
  }
];

const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // State untuk mengelola transisi

  const maxProductIndex = products.length - 1;

  const nextProduct = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveProduct((prevActiveProduct) =>
        prevActiveProduct === maxProductIndex ? 0 : prevActiveProduct + 1
    );
  }, [isTransitioning, maxProductIndex]);

  const prevProduct = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveProduct((prevActiveProduct) =>
        prevActiveProduct === 0 ? maxProductIndex : prevActiveProduct - 1
    );
  }, [isTransitioning, maxProductIndex]);

  // Menggunakan useSwipeable hook
  const handlers = useSwipeable({
    onSwipedLeft: () => nextProduct(),
    onSwipedRight: () => prevProduct(),
    preventScrollOnSwipe: true, // Mencegah scroll halaman saat swipe horizontal
    trackMouse: true // Memungkinkan swipe menggunakan mouse juga
  });

  // Reset isTransitioning setelah transisi selesai
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Durasi transisi CSS (duration-500)
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);


  return (
      <section className="bg-lightgrey/30 py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-forestgreen">
              Produk Unggulan Kami
            </h2>
            <p className="paragraph max-w-3xl mx-auto text-charcoal/80">
              Temukan Esensi Alam dalam Setiap Produk Pilihan yang kami tawarkan. Kualitas premium dari jantung Nusa Tenggara Timur.
            </p>
          </div>

          {/* Product Carousel - tambahkan {...handlers} di sini */}
          <div className="relative" {...handlers}> {/* <--- Terapkan handlers di sini */}
            <div className="overflow-hidden my-8"> {/* Tambahkan overflow-hidden di sini jika belum ada */}
              <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeProduct * 100}%)` }}
              >
                {products.map((product) => (
                    <div key={product.id} className="w-full flex-none px-4"> {/* Pastikan ada padding jika diperlukan */}
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="h-64 md:h-96 relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-forestgreen/20 hover:bg-forestgreen/30 transition-colors"></div>
                          </div>
                          <div className="p-8 md:p-10 flex flex-col justify-center">
                            <h3 className="heading-md text-forestgreen mb-4">{product.name}</h3>
                            <p className="paragraph mb-6 text-charcoal/80">{product.description}</p>
                            <Link
                                to={`/products/${product.id}`}
                                className="text-forestgreen font-medium hover:text-forestgreen/80 transition-colors inline-flex items-center group"
                            >
                              Pelajari Lebih Lanjut
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {products.map((_, index) => (
                  <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                          activeProduct === index ? 'bg-forestgreen' : 'bg-lightgrey hover:bg-lightgrey/80'
                      }`}
                      onClick={() => {
                        if (isTransitioning) return;
                        setIsTransitioning(true);
                        setActiveProduct(index);
                      }}
                      aria-label={`View product ${index + 1}`}
                  />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
                to="/products"
                className="btn-primary inline-block"
            >
              LIHAT SEMUA PRODUK KAMI
            </Link>
          </div>
        </div>
      </section>
  );
};

export default ProductsSection;