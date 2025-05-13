
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample products data
const products = [
  {
    id: "kemiri",
    name: "Kemiri",
    description: "Kemiri Pilihan: Inti Kenikmatan, Kilau Alami untuk Karya Kuliner dan Kecantikan Anda.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: "asam",
    name: "Asam Jawa",
    description: "Asam Jawa Murni: Sentuhan Asam Memikat yang Mengangkat Setiap Cita Rasa Masakan.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: "kopra",
    name: "Kopra",
    description: "Kopra Premium: Kelapa Terseleksi untuk Ekstraksi Minyak Berkualitas Tinggi.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  },
  {
    id: "porang",
    name: "Porang",
    description: "Porang Unggul: Umbi Terstandarisasi untuk Industri Pangan dan Suplemen.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  }
];

const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  
  return (
    <section className="bg-warmgrey/10 py-20 md:py-28">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            <span className="forest-border pb-2">Permata dari Timur:</span> Produk Unggulan Kami
          </h2>
          <p className="paragraph max-w-3xl mx-auto">
            Temukan Esensi Alam dalam Setiap Produk Pilihan yang kami tawarkan. Kualitas premium dari jantung Nusa Tenggara Timur.
          </p>
        </div>
        
        {/* Product Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden my-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeProduct * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-none px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="h-64 md:h-96 relative">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-deepbrown/20 hover:bg-deepbrown/30 transition-colors"></div>
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="heading-md text-terracotta mb-4">{product.name}</h3>
                        <p className="paragraph mb-6">{product.description}</p>
                        <Link 
                          to={`/products/${product.id}`}
                          className="text-deepbrown font-medium hover:text-terracotta transition-colors inline-flex items-center group"
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
                  activeProduct === index ? 'bg-terracotta' : 'bg-warmgrey/40 hover:bg-warmgrey/60'
                }`}
                onClick={() => setActiveProduct(index)}
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
