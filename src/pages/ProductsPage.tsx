
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

// Sample products data
const products = [
  {
    id: "kemiri",
    name: "Kemiri",
    category: "Rempah Dasar",
    description: "Kemiri Pilihan: Inti Kenikmatan, Kilau Alami untuk Karya Kuliner dan Kecantikan Anda.",
    image: "https://media-public.canva.com/o5pBU/MAFdWzo5pBU/1/tl.jpg"
  },
  {
    id: "asam",
    name: "Asam Jawa",
    category: "Perasa",
    description: "Asam Jawa Murni: Sentuhan Asam Memikat yang Mengangkat Setiap Cita Rasa Masakan.",
    image: "https://media-public.canva.com/JfZcI/MADza5JfZcI/1/tl.jpg"
  },
  {
    id: "kopra",
    name: "Kopra",
    category: "Bahan Baku",
    description: "Kopra Premium: Kelapa Terseleksi untuk Ekstraksi Minyak Berkualitas Tinggi.",
    image: "https://media-public.canva.com/O-MjM/MAECayO-MjM/1/tl.jpg"
  },
  {
    id: "porang",
    name: "Porang",
    category: "Bahan Baku",
    description: "Porang Unggul: Umbi Terstandarisasi untuk Industri Pangan dan Suplemen.",
    image: "https://media-public.canva.com/oPf3A/MAGTaHoPf3A/1/tl.jpg"
  },
  {
    id: "kunyit",
    name: "Kunyit Kering",
    category: "Rempah Dasar",
    description: "Kunyit Kering Premium: Warna Kuning Cerah, Aroma Kuat, untuk Kebutuhan Masakan dan Kesehatan.",
    image: "https://media-public.canva.com/MADatyHqX8s/1/thumbnail_large-1.jpg"
  },
  {
    id: "kacang",
    name: "Kacang Mete",
    category: "Olahan",
    description: "Kacang Mete Pilihan: Tekstur Renyah dengan Cita Rasa Khas NTT.",
    image: "https://media-public.canva.com/MADW_jrdwW4/1/thumbnail_large-1.jpg"
  }
];

const categories = ["Semua", "Rempah Dasar", "Perasa", "Bahan Baku", "Olahan"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Semua" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="pt-24">
      <section className="bg-deepbrown text-white py-20">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Ensiklopedia Rempah CV. Manalagi</h1>
          <p className="paragraph text-white/80 max-w-3xl">
            Kualitas Murni, Manfaat Nyata. Temukan produk premium kami yang telah melalui standar kualitas ketat.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-beige">
        <div className="container-custom">
          {/* Search & Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 items-start justify-between">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-warmgrey/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-warmgrey" />
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md ${
                    selectedCategory === category
                      ? 'bg-terracotta text-white'
                      : 'bg-white text-deepbrown hover:bg-warmgrey/10'
                  } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Link 
                key={product.id} 
                to={`/products/${product.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-terracotta/90 text-white text-xs px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-bold text-xl mb-2 group-hover:text-terracotta transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-deepbrown/70 text-sm line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-terracotta font-medium">Lihat Detail</span>
                      <span className="w-8 h-8 rounded-full bg-warmgrey/10 flex items-center justify-center group-hover:bg-terracotta/10 transition-colors">
                        <ArrowRight className="h-4 w-4 text-terracotta" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center p-12 bg-white/60 rounded-lg">
              <h3 className="heading-md text-deepbrown/80 mb-4">Tidak Ditemukan</h3>
              <p className="paragraph text-deepbrown/60">
                Produk yang Anda cari tidak ditemukan. Silakan coba dengan kata kunci lain atau filter yang berbeda.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-warmgrey/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                <span className="golden-border pb-2">Butuh Produk Khusus?</span>
              </h2>
              <p className="paragraph mb-8">
                Kami memahami bahwa setiap bisnis memiliki kebutuhan unik. Jika Anda mencari produk dengan spesifikasi khusus atau ingin memesan dalam jumlah besar, tim kami siap membantu.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary inline-block"
              >
                KONSULTASI GRATIS
              </Link>
            </div>
            <div>
              <img
                src="https://media-public.canva.com/MADAy0ggNxQ/1/thumbnail_large-1.jpg"
                alt="Custom products"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
