import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Star, ChevronDown, ChevronUp } from 'lucide-react';

// Sample products data (same as in ProductsPage)
const products = [
  {
    id: "kemiri",
    name: "Kemiri",
    category: "Rempah Dasar",
    tagline: "Kilau Emas untuk Dapur dan Industri Anda",
    description: "Kemiri Pilihan: Inti Kenikmatan, Kilau Alami untuk Karya Kuliner dan Kecantikan Anda.",
    fullDescription: "Dipanen dari pohon kemiri pilihan yang tumbuh subur di tanah vulkanis Nusa Tenggara Timur, setiap biji menyimpan kekayaan nutrisi dan tradisi. Kemiri kami telah melalui proses seleksi yang ketat untuk memastikan hanya butiran berkualitas tertinggi yang sampai ke tangan Anda.",
    aroma: "Kacang-kacangan lembut dengan sentuhan earthy",
    rasa: "Gurih, sedikit manis saat dipanggang",
    uses: ["Bumbu masakan tradisional", "Bahan dasar minyak", "Industri kosmetik dan kecantikan"],
    specifications: ["Ukuran: 1.5-2cm", "Kadar air: <5%", "Metode pengolahan: Sun-dried", "Kadar minyak: 60-65%"],
    storage: "Simpan di tempat kering dan sejuk. Hindari paparan sinar matahari langsung. Tutup rapat kemasan setelah dibuka.",
    packaging: ["Kemasan retail 500g", "Kemasan bulk 5kg dan 25kg", "Kemasan custom sesuai kebutuhan"],
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    gallery: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    ]
  },
  {
    id: "asam",
    name: "Asam Jawa",
    category: "Perasa",
    tagline: "Sentuhan Asam yang Memikat",
    description: "Asam Jawa Murni: Sentuhan Asam Memikat yang Mengangkat Setiap Cita Rasa Masakan.",
    fullDescription: "Asam Jawa dari CV. Manalagi dipanen pada tingkat kematangan optimal untuk menghasilkan cita rasa asam yang khas namun tetap seimbang. Proses pengolahan kami memastikan kemurnian dan kebersihan produk tanpa mengurangi profil rasanya yang kaya.",
    aroma: "Asam segar dengan sentuhan manis",
    rasa: "Asam tajam, sedikit manis, dengan kompleksitas yang khas",
    uses: ["Bumbu dasar masakan tradisional", "Saus dan marinasi", "Minuman tradisional", "Jamu dan pengobatan"],
    specifications: ["Bentuk: Pasta/Pulp", "Kadar air: 15-20%", "Keasaman: Medium-high", "Bebas biji dan kotoran"],
    storage: "Simpan di tempat kering dan sejuk. Untuk daya simpan lebih lama, simpan di kulkas setelah kemasan dibuka.",
    packaging: ["Kemasan retail 250g dan 500g", "Kemasan bulk 5kg", "Kemasan vacuum-sealed 1kg"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    ]
  },
  // Other products would be defined similarly
];

// Sample related products
const relatedProducts = [
  {
    id: "porang",
    name: "Porang",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  },
  {
    id: "kopra",
    name: "Kopra",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  },
  {
    id: "kunyit",
    name: "Kunyit Kering",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  }
];

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="container-custom pt-32 pb-20 text-center">
        <h2 className="heading-lg text-deepbrown mb-4">Produk Tidak Ditemukan</h2>
        <p className="paragraph mb-8">Maaf, produk yang Anda cari tidak tersedia atau telah dihapus.</p>
        <Link to="/products" className="btn-primary">
          Kembali ke Katalog Produk
        </Link>
      </div>
    );
  }
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return (
    <div className="pt-24">
      {/* Breadcrumb */}
      <div className="bg-beige py-4">
        <div className="container-custom">
          <div className="flex items-center text-sm text-deepbrown/70">
            <Link to="/" className="hover:text-terracotta transition-colors">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-terracotta transition-colors">
              Produk
            </Link>
            <span className="mx-2">/</span>
            <span className="text-terracotta">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail */}
      <section className="py-12 md:py-20 bg-beige">
        <div className="container-custom">
          <Link 
            to="/products" 
            className="inline-flex items-center text-deepbrown hover:text-terracotta transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Semua Produk
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <img 
                  src={product.gallery[activeImage]} 
                  alt={product.name} 
                  className="w-full h-auto rounded-md"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    className={`bg-white p-2 rounded-md shadow-sm ${
                      activeImage === index ? 'ring-2 ring-terracotta' : ''
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-20 object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta text-sm font-medium rounded-full mb-4">
                {product.category}
              </div>
              
              <h1 className="heading-lg text-deepbrown mb-2">
                {product.name}
              </h1>
              
              <h2 className="text-xl text-terracotta font-playfair mb-6">
                {product.tagline}
              </h2>
              
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-gold fill-gold" 
                    />
                  ))}
                </div>
                <span className="text-sm text-warmgrey ml-2">Produk Unggulan</span>
              </div>
              
              <p className="paragraph mb-8">
                {product.fullDescription}
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-playfair font-bold mb-4">Profil Sensorik:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-sm text-warmgrey">Aroma</span>
                    <p className="font-medium">{product.aroma}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-sm text-warmgrey">Rasa</span>
                    <p className="font-medium">{product.rasa}</p>
                  </div>
                </div>
              </div>
              
              {/* Collapsible Sections */}
              <div className="space-y-4 mb-8">
                <div className="border border-warmgrey/30 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left font-playfair font-bold text-deepbrown hover:bg-warmgrey/5"
                    onClick={() => toggleSection('uses')}
                  >
                    Manfaat & Penggunaan
                    {expandedSection === 'uses' ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  
                  {expandedSection === 'uses' && (
                    <div className="p-4 bg-white">
                      <ul className="space-y-2">
                        {product.uses.map((use, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-forestgreen mr-2 flex-shrink-0 mt-0.5" />
                            <span>{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="border border-warmgrey/30 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left font-playfair font-bold text-deepbrown hover:bg-warmgrey/5"
                    onClick={() => toggleSection('specs')}
                  >
                    Spesifikasi Kualitas
                    {expandedSection === 'specs' ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  
                  {expandedSection === 'specs' && (
                    <div className="p-4 bg-white">
                      <ul className="space-y-2">
                        {product.specifications.map((spec, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-forestgreen mr-2 flex-shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="border border-warmgrey/30 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left font-playfair font-bold text-deepbrown hover:bg-warmgrey/5"
                    onClick={() => toggleSection('storage')}
                  >
                    Tips Penyimpanan
                    {expandedSection === 'storage' ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  
                  {expandedSection === 'storage' && (
                    <div className="p-4 bg-white">
                      <p>{product.storage}</p>
                    </div>
                  )}
                </div>
                
                <div className="border border-warmgrey/30 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left font-playfair font-bold text-deepbrown hover:bg-warmgrey/5"
                    onClick={() => toggleSection('packaging')}
                  >
                    Informasi Kemasan
                    {expandedSection === 'packaging' ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  
                  {expandedSection === 'packaging' && (
                    <div className="p-4 bg-white">
                      <ul className="space-y-2">
                        {product.packaging.map((pack, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-forestgreen mr-2 flex-shrink-0 mt-0.5" />
                            <span>{pack}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="btn-primary text-center"
                >
                  MINTA PENAWARAN
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline text-center"
                >
                  REQUEST SAMPLE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-16 bg-warmgrey/10">
        <div className="container-custom">
          <h2 className="heading-md mb-10">
            <span className="golden-border pb-2">Produk Terkait Lainnya</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((prod) => (
              <Link 
                key={prod.id} 
                to={`/products/${prod.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-bold text-xl mb-2 group-hover:text-terracotta transition-colors">
                      {prod.name}
                    </h3>
                    <div className="mt-2 flex justify-between items-center">
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
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
