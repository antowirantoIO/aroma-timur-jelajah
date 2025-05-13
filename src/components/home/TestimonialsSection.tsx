
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Kualitas kemiri dari CV. Manalagi benar-benar konsisten. Sebagai produsen minyak kelapa, kami membutuhkan bahan baku yang terjaga mutunya, dan mereka selalu memenuhi ekspektasi.",
    author: "Anton Wijaya",
    position: "Purchasing Manager",
    company: "PT Minyak Nusantara",
    rating: 5
  },
  {
    content: "Pengalaman bermitra dengan CV. Manalagi sangat memuaskan. Mereka tidak hanya menyediakan produk berkualitas tinggi, tetapi juga membantu kami memahami karakteristik setiap bahan dengan detail.",
    author: "Diana Putri",
    position: "Executive Chef",
    company: "Rempah Resto Group",
    rating: 5
  },
  {
    content: "Asam Jawa dari CV. Manalagi memberi sentuhan autentik yang sempurna untuk produk-produk kuliner kami. Selalu tepat waktu dan responsif terhadap kebutuhan khusus kami.",
    author: "Budi Santoso",
    position: "Supply Chain Director",
    company: "Sari Sedap Indonesia",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-forestgreen/90 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-white">
            <span className="border-b-2 border-gold pb-2">Suara Mitra Kami</span>
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto paragraph">
            Kisah Sukses Bersama CV. Manalagi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-warmgrey/40'}`} 
                  />
                ))}
              </div>
              <p className="text-white/90 italic mb-6">"{testimonial.content}"</p>
              <div>
                <h4 className="font-playfair font-bold text-white">{testimonial.author}</h4>
                <p className="text-white/70 text-sm">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 items-center">
            <span className="text-white/60 font-semibold">Dipercaya oleh:</span>
            <div className="bg-white/20 px-6 py-3 rounded">Logo Client 1</div>
            <div className="bg-white/20 px-6 py-3 rounded">Logo Client 2</div>
            <div className="bg-white/20 px-6 py-3 rounded">Logo Client 3</div>
            <div className="bg-white/20 px-6 py-3 rounded">Logo Client 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
