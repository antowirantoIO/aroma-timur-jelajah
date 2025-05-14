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
    fullDescription: "Dipanen dari pohon kemiri pilihan yang tumbuh subur di tanah vulkanis Nusa Tenggara Timur, setiap biji menyimpan kekayaan nutrisi dan tradisi. Kemiri kami telah melalui proses seleksi yang ketat untuk memastikan hanya butiran berkualitas tertinggi yang sampai ke tangan Anda. Dimanfaatkan sebagai sumber minyak dan rempah-rempah esensial dalam berbagai masakan.", // Menambahkan info dari PDF
    aroma: "Kacang-kacangan lembut dengan sentuhan earthy",
    rasa: "Gurih, sedikit manis saat dipanggang",
    uses: ["Bumbu masakan tradisional (pengental dan penambah rasa)", "Bahan dasar minyak kemiri (untuk rambut dan kulit)", "Industri kosmetik dan kecantikan alami", "Bahan dalam pembuatan lilin tradisional"],
    specifications: ["Ukuran: Diameter rata-rata 1.5-2.5cm", "Kadar air: <5%", "Metode pengolahan: Pengeringan matahari (Sun-dried)", "Kadar minyak: Sekitar 60-65%", "Kebersihan: Sortir manual untuk kualitas terbaik"],
    storage: "Simpan di tempat kering, sejuk, dan terhindar dari paparan sinar matahari langsung. Gunakan wadah kedap udara untuk menjaga kesegaran lebih lama.",
    packaging: ["Kemasan retail: 250g, 500g, 1kg", "Kemasan bulk: Karung 5kg, 25kg, 50kg", "Kemasan custom sesuai permintaan pelanggan"],
    image: "https://media-public.canva.com/o5pBU/MAFdWzo5pBU/1/tl.jpg",
    gallery: [
      "https://media-public.canva.com/o5pBU/MAFdWzo5pBU/1/tl.jpg",
      "https://media-public.canva.com/MADJlI5i8rs/1/thumbnail_large.jpg",
      "https://media-public.canva.com/MADCgFUwZTs/1/thumbnail_large-1.jpg"
    ]
  },
  {
    id: "asam",
    name: "Asam Jawa",
    category: "Perasa",
    tagline: "Sentuhan Asam yang Memikat dan Menyegarkan",
    description: "Asam Jawa Murni: Sentuhan Asam Memikat yang Mengangkat Setiap Cita Rasa Masakan.",
    fullDescription: "Asam Jawa dari CV. Manalagi dipanen pada tingkat kematangan optimal untuk menghasilkan cita rasa asam yang khas namun tetap seimbang. Buah dengan rasa segar ini digunakan secara luas dalam masakan di Indonesia ataupun sebagai campuran pada jamu tradisional. Proses pengolahan kami memastikan kemurnian dan kebersihan produk tanpa mengurangi profil rasanya yang kaya.", // Menambahkan info dari PDF
    aroma: "Asam segar dengan hint manis buah-buahan",
    rasa: "Asam tajam menyegarkan, sedikit manis, dengan kompleksitas rasa yang khas",
    uses: ["Bumbu dasar masakan tradisional (sayur asam, kuah ikan, sambal)", "Bahan pembuatan saus, chutney, dan marinasi", "Bahan utama minuman tradisional penyegar (es asam, gula asam)", "Komponen penting dalam jamu dan pengobatan herbal"],
    specifications: ["Bentuk: Daging buah tanpa biji (pasta/pulp) / Utuh dengan biji (sesuai permintaan)", "Kadar air: Sekitar 15-25% (untuk pasta)", "Tingkat keasaman (pH): Medium-high", "Proses: Dipisahkan dari biji dan serat kasar (untuk pasta)"],
    storage: "Simpan di tempat kering dan sejuk. Untuk pasta asam, simpan dalam wadah kedap udara di kulkas setelah kemasan dibuka untuk memperpanjang masa simpan.",
    packaging: ["Kemasan retail (pasta/pulp): 250g, 500g", "Kemasan bulk (pasta/pulp atau utuh): 1kg, 5kg, atau sesuai permintaan", "Kemasan vacuum-sealed untuk menjaga kesegaran"],
    image: "https://media-public.canva.com/JfZcI/MADza5JfZcI/1/tl.jpg",
    gallery: [
      "https://media-public.canva.com/JfZcI/MADza5JfZcI/1/tl.jpg",
      "https://media-public.canva.com/c_3ss/MAFcPTc_3ss/1/tl.jpg", // Mengganti duplikat dengan gambar lain dari contoh
      "https://media-public.canva.com/MADL2kRgFSc/1/thumbnail_large.jpg" // Menambahkan gambar variasi
    ]
  },
  {
    id: "kopra",
    name: "Kopra",
    category: "Bahan Baku",
    tagline: "Daging Kelapa Kering Kualitas Unggul untuk Industri Minyak",
    description: "Kopra Premium: Kelapa Terseleksi untuk Ekstraksi Minyak Berkualitas Tinggi.",
    fullDescription: "Kopra adalah daging buah kelapa yang dikeringkan secara optimal. Sebagai produk kelapa yang sangat penting, kopra dari CV. Manalagi merupakan bahan baku pembuatan minyak kelapa berkualitas tinggi dan berbagai produk turunan lainnya. Kami memastikan proses pengeringan yang tepat untuk menghasilkan kopra dengan kadar air rendah dan kualitas terbaik.", // Menggunakan info dari PDF
    aroma: "Khas kelapa kering, sedikit manis dan gurih",
    rasa: "Rasa kelapa yang intens dan gurih (tergantung proses pengeringan)",
    uses: ["Bahan baku utama industri minyak kelapa", "Bahan pembuatan margarin, sabun, dan kosmetik", "Industri pakan ternak (sebagai bungkil kopra setelah ekstraksi minyak)", "Bahan dalam industri oleokimia"],
    specifications: ["Jenis: Kopra putih / Kopra asalan (tergantung permintaan)", "Kadar air: < 6%", "Kadar minyak: > 60%", "Metode pengeringan: Penjemuran matahari atau pengasapan terkontrol"],
    storage: "Simpan di gudang yang kering, bersih, dan memiliki sirkulasi udara yang baik. Hindari dari hama, kelembaban, dan kontaminasi.",
    packaging: ["Karung goni atau plastik PP: 50kg, 60kg", "Pengiriman bulk curah untuk volume besar", "Kemasan custom sesuai kebutuhan industri"],
    image: "https://media-public.canva.com/O-MjM/MAECayO-MjM/1/tl.jpg",
    gallery: [
      "https://media-public.canva.com/MACmteVhvak/1/thumbnail_large-1.jpg",
      "https://media-public.canva.com/sk0sw/MAECa7sk0sw/1/tl.jpg", // Placeholder gambar kopra lain
      "https://media-public.canva.com/MADCBQh7hA4/1/thumbnail_large-1.jpg"  // Placeholder gambar kopra lain
    ]
  },
  {
    id: "porang",
    name: "Porang",
    category: "Bahan Baku",
    tagline: "Umbi Multifungsi, Solusi Inovatif untuk Industri Pangan dan Lainnya",
    description: "Porang Unggul: Umbi Terstandarisasi untuk Industri Pangan dan Suplemen.",
    fullDescription: "Porang (Amorphophallus muelleri) dari CV. Manalagi adalah umbi berkualitas tinggi yang kaya akan glukomanan. Kami menyediakan porang dalam bentuk chips kering atau tepung yang telah diproses sesuai standar. Porang dijadikan sebagai bahan baku serbaguna dalam industri seperti kertas, cat, serta sebagai bahan pengikat penting dalam industri makanan (seperti mie shirataki dan konnyaku) dan kosmetik.", // Menggunakan info dari PDF
    aroma: "Netral hingga sedikit berbau tanah (chips kering sebelum diolah)",
    rasa: "Netral (setelah diolah menjadi tepung atau produk akhir)",
    uses: ["Industri pangan (tepung konjac/glukomanan, mie shirataki, jeli konnyaku, pengental makanan)", "Industri kosmetik (bahan pengikat, pelembab, masker)", "Industri farmasi dan suplemen kesehatan (sumber serat, manajemen berat badan)", "Bahan baku industri kertas, cat, dan perekat ramah lingkungan"],
    specifications: ["Bentuk: Chips Kering / Tepung Halus", "Kadar Glukomanan: Tinggi (sesuai grade, misal >80%)", "Kadar Air (chips): <10%", "Warna: Putih bersih hingga krem (untuk tepung berkualitas)"],
    storage: "Simpan chips atau tepung porang dalam wadah kedap udara di tempat yang kering, sejuk, dan terhindar dari cahaya. Jaga dari kelembaban untuk mencegah penggumpalan (tepung) atau jamur (chips).",
    packaging: ["Karung plastik PP dengan inner liner: 25kg atau 50kg (untuk chips/tepung)", "Kemasan custom untuk kebutuhan industri spesifik"],
    image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/11/04045014/Mengenal-Tanaman-Porang-Bahan-Baku-Pembuatan-Shirataki.jpg.webp",
    gallery: [
      "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/11/04045014/Mengenal-Tanaman-Porang-Bahan-Baku-Pembuatan-Shirataki.jpg.webp",
      "https://media-public.canva.com/wcULU/MAFebewcULU/1/tl.jpg", // Placeholder gambar porang lain
      "https://media-public.canva.com/rIwSM/MAFebfrIwSM/1/tl.jpg"  // Placeholder gambar porang lain
    ]
  },
  {
    id: "kunyit",
    name: "Kunyit Kering",
    category: "Rempah Dasar",
    tagline: "Pesona Emas Alami untuk Kekayaan Rasa dan Khasiat Optimal",
    description: "Kunyit Kering Premium: Warna Kuning Cerah, Aroma Kuat, untuk Kebutuhan Masakan dan Kesehatan.",
    fullDescription: "Kunyit (Curcuma longa) termasuk salah satu tanaman rempah-rempah dan obat asli alami yang berasal dari wilayah Asia Tenggara. CV. Manalagi menyediakan kunyit kering (irisan atau utuh) kualitas premium dengan warna kuning-oranye intens dan aroma khas yang kuat. Kunyit kering kami banyak digunakan dalam industri jamu tradisional, sebagai bumbu esensial dalam berbagai masakan, dan sebagai pewarna alami.", // Menggunakan info dari PDF
    aroma: "Khas kunyit yang hangat, sedikit pedas, dengan nuansa earthy dan musky",
    rasa: "Hangat, sedikit pahit, dengan aftertaste pedas dan earthy yang khas",
    uses: ["Bumbu utama masakan (gulai, kari, soto, nasi kuning, pepes)", "Bahan utama industri jamu tradisional dan suplemen herbal (anti-inflamasi, antioksidan)", "Pewarna alami untuk makanan, minuman, dan tekstil", "Komponen dalam produk kosmetik dan perawatan kulit tradisional"],
    specifications: ["Bentuk: Irisan Kering (Slices) / Batangan Utuh (Fingers)", "Kadar Kurkumin: Tinggi (sesuai standar kualitas ekspor)", "Kadar Air: <10-12%", "Warna: Kuning-oranye cerah dan merata"],
    storage: "Simpan dalam wadah kedap udara, di tempat yang sejuk, kering, dan gelap untuk menjaga warna, aroma, dan kandungan kurkumin.",
    packaging: ["Kemasan retail: 100g, 250g, 500g", "Kemasan bulk: Karung 1kg, 5kg, 25kg", "Kemasan disesuaikan dengan permintaan pelanggan"],
    image: "https://media-public.canva.com/RaNbk/MAFkTmRaNbk/1/tl.jpg",
    gallery: [
      "https://media-public.canva.com/RaNbk/MAFkTmRaNbk/1/tl.jpg",
      "https://media-public.canva.com/ozHak/MAD-BzozHak/1/tl.jpg", // Placeholder gambar kunyit kering lain
      "https://media-public.canva.com/MADBumufWps/1/thumbnail_large-1.jpg"  // Placeholder gambar kunyit kering lain
    ]
  },
  {
    id: "kacang",
    name: "Kacang Mete",
    category: "Olahan", // Sesuai input Anda, bisa juga 'Kacang-kacangan'
    tagline: "Kerenyahan Premium dengan Kelezatan Khas Nusa Tenggara Timur",
    description: "Kacang Mete Pilihan: Tekstur Renyah dengan Cita Rasa Khas NTT.",
    fullDescription: "Nikmati kelezatan premium Kacang Mete pilihan dari Nusa Tenggara Timur, yang terkenal akan kualitas dan cita rasanya yang unik. Dipanen dari jambu monyet pilihan dan diproses secara teliti untuk menghasilkan kacang mete utuh dengan tekstur renyah dan rasa gurih-manis alami. Cocok sebagai camilan sehat bergizi, bahan premium untuk industri kue dan cokelat, atau sebagai taburan mewah pada berbagai hidangan.",
    aroma: "Khas kacang mete, sedikit manis dan buttery, semakin kuat saat dipanggang",
    rasa: "Gurih, sedikit manis alami, dengan tekstur renyah namun tetap creamy saat dikunyah",
    uses: ["Camilan sehat dan bergizi (mentah, panggang, atau goreng)", "Bahan baku industri makanan (kue kering, cokelat, selai kacang mete, granola)", "Taburan untuk salad, hidangan utama, dan dessert", "Sumber protein nabati, lemak sehat, dan mineral penting"],
    specifications: ["Grade Kualitas: Utuh (misal WW240, WW320, WW450) / Belah (Splits, Butts)", "Proses: Mentah (Raw) / Panggang (Roasted) / Goreng (Fried) - sesuai permintaan", "Kadar Air: <5% (untuk mete kering/panggang)", "Ukuran: Sesuai standar grading internasional"],
    storage: "Simpan dalam wadah kedap udara di tempat yang sejuk, kering, dan terhindar dari sinar matahari. Untuk mete mentah, penyimpanan di kulkas dapat memperpanjang kesegaran. Mete panggang sebaiknya dikonsumsi dalam beberapa minggu untuk kerenyahan maksimal.",
    packaging: ["Kemasan retail vacuum-packed: 250g, 500g, 1kg", "Kemasan bulk dalam karton atau plastik besar dengan inner liner: 5kg, 10kg, 22.68kg (50lbs)", "Kemasan toples atau pouch sesuai permintaan"],
    image: "https://media-public.canva.com/MADW_jrdwW4/1/thumbnail_large-1.jpg",
    gallery: [
      "https://media-public.canva.com/MADW_jrdwW4/1/thumbnail_large-1.jpg",
      "https://media-public.canva.com/MADAIytxf0c/1/thumbnail_large-1.jpg", // Placeholder gambar kacang mete lain
      "https://media-public.canva.com/MADE78mOoTs/1/thumbnail_large-1.jpg"  // Placeholder gambar kacang mete lain
    ]
  }
];

// Sample related products
const relatedProducts = [
  {
    id: "porang",
    name: "Porang",
    image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/11/04045014/Mengenal-Tanaman-Porang-Bahan-Baku-Pembuatan-Shirataki.jpg.webp"
  },
  {
    id: "kopra",
    name: "Kopra",
    image: "https://media-public.canva.com/O-MjM/MAECayO-MjM/1/tl.jpg"
  },
  {
    id: "kunyit",
    name: "Kunyit Kering",
    image: "https://media-public.canva.com/RaNbk/MAFkTmRaNbk/1/tl.jpg"
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
