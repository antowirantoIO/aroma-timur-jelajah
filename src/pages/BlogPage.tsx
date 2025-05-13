
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowRight } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "Kekayaan Nutrisi Kemiri: Lebih Dari Sekadar Bumbu Dapur",
    excerpt: "Mengenal lebih jauh kandungan nutrisi kemiri dan manfaat kesehatannya yang sering terlewatkan dalam penggunaan sehari-hari.",
    category: "Manfaat Rempah",
    author: "Budi Santoso",
    date: "15 Mei 2023",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: "2",
    title: "Dari Ladang ke Dapur: Perjalanan Asam Jawa Premium CV. Manalagi",
    excerpt: "Menelusuri proses panjang pengolahan asam jawa, dari pemilihan pohon terbaik hingga pengemasan yang mempertahankan kualitas.",
    category: "Proses Produksi",
    author: "Diana Putri",
    date: "3 Juni 2023",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: "3",
    title: "Kisah Petani Kopra NTT: Penjaga Tradisi di Era Modern",
    excerpt: "Mengenal lebih dekat kehidupan para petani kopra di Nusa Tenggara Timur yang menjaga kualitas melalui metode tradisional.",
    category: "Kisah Petani",
    author: "Ahmad Hidayat",
    date: "20 Juni 2023",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  },
  {
    id: "4",
    title: "5 Resep Tradisional NTT dengan Sentuhan Kemiri yang Wajib Dicoba",
    excerpt: "Mengeksplorasi kekayaan kuliner Nusa Tenggara Timur dengan kemiri sebagai bahan utama yang memberikan cita rasa unik.",
    category: "Resep & Kuliner",
    author: "Maya Wijaya",
    date: "5 Juli 2023",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  },
  {
    id: "5",
    title: "Tren Global Rempah 2023: Peluang dan Tantangan untuk Produsen Lokal",
    excerpt: "Analisis mendalam tentang tren pasar rempah global dan bagaimana produsen lokal Indonesia dapat memanfaatkan momentum ini.",
    category: "Tren Industri",
    author: "Rudi Hartono",
    date: "18 Juli 2023",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    id: "6",
    title: "Panduan Menyimpan Rempah agar Tetap Segar dan Aromatik",
    excerpt: "Tips dan trik menyimpan berbagai jenis rempah, termasuk kemiri dan asam jawa, untuk mempertahankan kualitas dan aroma maksimal.",
    category: "Tips & Panduan",
    author: "Sari Mulyani",
    date: "2 Agustus 2023",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  }
];

const categories = ["Semua", "Manfaat Rempah", "Proses Produksi", "Kisah Petani", "Resep & Kuliner", "Tren Industri", "Tips & Panduan"];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Semua" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="pt-24">
      <section className="bg-deepbrown text-white py-20">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Jurnal Rempah CV. Manalagi</h1>
          <p className="paragraph text-white/80 max-w-3xl">
            Wawasan, cerita, dan inspirasi dari dunia rempah. Temukan artikel menarik tentang produk, petani, dan industri rempah NTT.
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
                placeholder="Cari artikel..."
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
                  } transition-colors text-sm whitespace-nowrap`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-16">
              <Link 
                to={`/blog/${filteredPosts[0].id}`}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-60 lg:h-auto relative overflow-hidden">
                      <img 
                        src={filteredPosts[0].image} 
                        alt={filteredPosts[0].title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-terracotta/90 text-white text-xs px-3 py-1 rounded-full">
                        {filteredPosts[0].category}
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center text-warmgrey text-sm mb-3">
                        <span>{filteredPosts[0].author}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {filteredPosts[0].date}
                        </span>
                      </div>
                      <h2 className="heading-md text-deepbrown group-hover:text-terracotta transition-colors mb-4">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-deepbrown/70 mb-6">
                        {filteredPosts[0].excerpt}
                      </p>
                      <div className="inline-flex items-center text-terracotta font-medium group-hover:translate-x-1 transition-transform">
                        Baca Selengkapnya
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map(post => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-terracotta/90 text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-warmgrey text-sm mb-3">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-playfair font-bold text-xl mb-2 group-hover:text-terracotta transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-deepbrown/70 text-sm line-clamp-3 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-terracotta font-medium group-hover:translate-x-1 transition-transform">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center p-12 bg-white/60 rounded-lg">
              <h3 className="heading-md text-deepbrown/80 mb-4">Tidak Ditemukan</h3>
              <p className="paragraph text-deepbrown/60">
                Artikel yang Anda cari tidak ditemukan. Silakan coba dengan kata kunci lain atau filter yang berbeda.
              </p>
            </div>
          )}
          
          {/* Pagination - can be implemented later if needed */}
          <div className="mt-16 flex justify-center">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-full bg-white hover:bg-warmgrey/10 text-deepbrown flex items-center justify-center">2</button>
              <button className="w-10 h-10 rounded-full bg-white hover:bg-warmgrey/10 text-deepbrown flex items-center justify-center">3</button>
              <button className="w-10 h-10 rounded-full bg-white hover:bg-warmgrey/10 text-deepbrown flex items-center justify-center">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-terracotta text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md text-white mb-6">
            Ingin Artikel Eksklusif Tentang Rempah?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Dapatkan wawasan industri, tips penggunaan rempah, dan penawaran spesial langsung ke email Anda.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Alamat Email Anda" 
              className="flex-grow px-4 py-3 rounded-md text-deepbrown focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="bg-gold text-deepbrown hover:bg-gold/90 transition-colors font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg tracking-wide whitespace-nowrap">
              BERLANGGANAN
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
