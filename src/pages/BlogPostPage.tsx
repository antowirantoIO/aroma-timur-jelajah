import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share } from 'lucide-react';

// Sample blog posts data (same as in BlogPage)
const blogPosts = [
  {
    id: "1",
    title: "Kekayaan Nutrisi Kemiri: Lebih Dari Sekadar Bumbu Dapur",
    excerpt: "Mengenal lebih jauh kandungan nutrisi kemiri dan manfaat kesehatannya yang sering terlewatkan dalam penggunaan sehari-hari.",
    content: `
      <p>Kemiri, atau yang dikenal dengan nama ilmiah <em>Aleurites moluccanus</em>, telah lama menjadi bagian penting dalam kuliner Nusantara. Namun, tahukah Anda bahwa di balik perannya sebagai bumbu penyedap, kemiri menyimpan segudang nutrisi yang bermanfaat bagi kesehatan?</p>

      <h2>Profil Nutrisi Kemiri</h2>
      <p>Dalam setiap 100 gram kemiri, terkandung:</p>
      <ul>
        <li>Energi: 628 kkal</li>
        <li>Protein: 18.3 gram</li>
        <li>Lemak: 57.7 gram</li>
        <li>Karbohidrat: 8.5 gram</li>
        <li>Serat: 6.7 gram</li>
        <li>Kalsium: 80 mg</li>
        <li>Zat Besi: 2.0 mg</li>
        <li>Vitamin E: 6.6 mg</li>
      </ul>

      <h2>Manfaat Kesehatan</h2>
      <p>Kandungan lemak baik dalam kemiri menjadikannya bermanfaat untuk:</p>
      <ol>
        <li><strong>Kesehatan Jantung</strong> - Asam lemak tak jenuh tunggal dalam kemiri membantu menurunkan kadar kolesterol jahat (LDL) dan meningkatkan kolesterol baik (HDL).</li>
        <li><strong>Kesehatan Kulit</strong> - Vitamin E dan asam lemak esensial dalam kemiri berperan dalam menjaga elastisitas kulit dan melindungi dari kerusakan akibat radikal bebas).</li>
        <li><strong>Kesehatan Pencernaan</strong> - Kandungan serat dalam kemiri membantu melancarkan sistem pencernaan dan mencegah sembelit.</li>
        <li><strong>Kesehatan Mental</strong> - Asam lemak omega-3 berperan dalam fungsi kognitif dan dapat membantu mengurangi risiko depresi dan kecemasan.</li>
      </ol>

      <h2>Pemanfaatan Kemiri di Luar Dapur</h2>
      <p>Selain sebagai bumbu masakan, kemiri juga dimanfaatkan dalam:</p>
      <ul>
        <li>Produk perawatan rambut untuk merangsang pertumbuhan dan memberikan kilau alami</li>
        <li>Minyak pijat tradisional untuk meredakan nyeri sendi dan otot</li>
        <li>Bahan dasar kosmetik alami seperti lulur dan masker wajah</li>
        <li>Pengobatan tradisional untuk mengatasi diare dan gangguan pencernaan lainnya</li>
      </ul>

      <h2>Kemiri Kualitas Prima CV. Manalagi</h2>
      <p>Di CV. Manalagi Barokah Makmur Abadi, kami memahami nilai tak tergantikan dari kemiri berkualitas. Itulah mengapa kami menerapkan standar ketat dalam seleksi biji kemiri dari kebun-kebun terbaik di Nusa Tenggara Timur. Proses pengeringan yang sempurna memastikan kadar air optimal yang menjaga kesegaran dan nutrisi, sementara penyortiran teliti memisahkan biji-biji premium untuk pasar kami.</p>

      <p>Kemiri kami tidak hanya menawarkan cita rasa yang kaya untuk masakan Anda, tetapi juga menyimpan potensi kesehatan yang luar biasa. Untuk informasi lebih lanjut tentang produk kemiri kami dan cara memaksimalkan manfaatnya, jangan ragu untuk menghubungi tim kami.</p>

      <h2>Catatan Penting</h2>
      <p>Perlu diingat bahwa konsumsi kemiri sebaiknya dalam jumlah moderat. Kemiri mentah mengandung senyawa yang dapat menyebabkan iritasi jika dikonsumsi berlebihan. Untuk keamanan, selalu panggang atau sangrai kemiri sebelum dikonsumsi untuk menghilangkan senyawa tersebut.</p>
    `,
    category: "Manfaat Rempah",
    author: "Budi Santoso",
    authorPosition: "Ahli Nutrisi Rempah",
    date: "15 Mei 2023",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    tags: ["Kemiri", "Nutrisi", "Kesehatan", "Manfaat"]
  },
  {
    id: "2",
    title: "Dari Ladang ke Dapur: Perjalanan Asam Jawa Premium CV. Manalagi",
    excerpt: "Menelusuri proses panjang pengolahan asam jawa, dari pemilihan pohon terbaik hingga pengemasan yang mempertahankan kualitas.",
    content: "<p>Lorem ipsum dolor sit amet...</p>", // This would be the full HTML content
    category: "Proses Produksi",
    author: "Diana Putri",
    authorPosition: "Manajer Produksi",
    date: "3 Juni 2023",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    tags: ["Asam Jawa", "Produksi", "Kualitas", "NTT"]
  }
  // Other blog posts would be defined similarly
];

// Sample related posts
const relatedPosts = [
  {
    id: "3",
    title: "Kisah Petani Kopra NTT: Penjaga Tradisi di Era Modern",
    excerpt: "Mengenal lebih dekat kehidupan para petani kopra di Nusa Tenggara Timur yang menjaga kualitas melalui metode tradisional.",
    category: "Kisah Petani",
    date: "20 Juni 2023",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  },
  {
    id: "4",
    title: "5 Resep Tradisional NTT dengan Sentuhan Kemiri yang Wajib Dicoba",
    excerpt: "Mengeksplorasi kekayaan kuliner Nusa Tenggara Timur dengan kemiri sebagai bahan utama yang memberikan cita rasa unik.",
    category: "Resep & Kuliner",
    date: "5 Juli 2023",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  },
  {
    id: "6",
    title: "Panduan Menyimpan Rempah agar Tetap Segar dan Aromatik",
    excerpt: "Tips dan trik menyimpan berbagai jenis rempah, termasuk kemiri dan asam jawa, untuk mempertahankan kualitas dan aroma maksimal.",
    category: "Tips & Panduan",
    date: "2 Agustus 2023",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  }
];

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="container-custom pt-32 pb-20 text-center">
        <h2 className="heading-lg text-deepbrown mb-4">Artikel Tidak Ditemukan</h2>
        <p className="paragraph mb-8">Maaf, artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
        <Link to="/blog" className="btn-primary">
          Kembali ke Halaman Blog
        </Link>
      </div>
    );
  }
  
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
            <Link to="/blog" className="hover:text-terracotta transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ter
raccotta truncate max-w-[200px]">{post.title}</span>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-deepbrown text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-terracotta/90 text-white text-sm font-medium rounded-full mb-6">
              {post.category}
            </div>
            
            <h1 className="heading-xl mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center text-white/80 gap-4 sm:gap-8">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author}</span>
                {post.authorPosition && (
                  <span className="text-sm ml-1 text-white/60">({post.authorPosition})</span>
                )}
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-beige py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-64 sm:h-96 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 md:p-10">
                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:font-bold prose-headings:text-deepbrown prose-p:text-deepbrown/80 prose-a:text-terracotta prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-10 pt-6 border-t border-warmgrey/20">
                      <h3 className="text-lg font-playfair font-bold mb-4">Tags:</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                          <Link 
                            key={tag} 
                            to={`/blog?tag=${tag}`}
                            className="px-3 py-1 bg-warmgrey/10 text-deepbrown/70 text-sm rounded-full hover:bg-terracotta/10 hover:text-terracotta transition-colors"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Share */}
                  <div className="mt-10 pt-6 border-t border-warmgrey/20">
                    <h3 className="text-lg font-playfair font-bold mb-4">Bagikan Artikel:</h3>
                    <div className="flex gap-4">
                      <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <span className="sr-only">Share on Facebook</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                        <span className="sr-only">Share on Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                        <span className="sr-only">Share on WhatsApp</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                        <span className="sr-only">Share on LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-warmgrey/20 text-deepbrown flex items-center justify-center hover:bg-warmgrey/30 transition-colors">
                        <span className="sr-only">Share via Email</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-6 border-t border-warmgrey/20">
                    <Link 
                      to="/blog" 
                      className="inline-flex items-center text-deepbrown hover:text-terracotta transition-colors"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Kembali ke Semua Artikel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Author */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h3 className="font-playfair font-bold text-xl mb-4 pb-2 border-b border-warmgrey/20">
                  Tentang Penulis
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-warmgrey/20 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-playfair font-bold">{post.author}</h4>
                    <p className="text-warmgrey text-sm">{post.authorPosition || "Kontributor"}</p>
                  </div>
                </div>
                <p className="text-deepbrown/70 text-sm">
                  Bergabung dengan tim CV. Manalagi untuk berbagi pengetahuan dan wawasan seputar dunia rempah Indonesia, khususnya dari Nusa Tenggara Timur.
                </p>
              </div>
              
              {/* Related Posts */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-playfair font-bold text-xl mb-4 pb-2 border-b border-warmgrey/20">
                  Artikel Terkait
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.id}`}
                      className="flex group"
                    >
                      <div className="w-20 h-20 bg-warmgrey/10 rounded-md overflow-hidden flex-shrink-0 mr-4">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-playfair font-bold group-hover:text-terracotta transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-warmgrey text-xs mt-1">{relatedPost.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-12 bg-terracotta text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md text-white mb-6">
            Tertarik dengan Produk yang Dibahas?
          </h2>
          <Link 
            to="/products" 
            className="bg-white text-terracotta hover:bg-white/90 transition-colors font-semibold px-8 py-4 rounded-md shadow-md hover:shadow-lg tracking-wide uppercase inline-block"
          >
            JELAJAHI PRODUK KAMI
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
