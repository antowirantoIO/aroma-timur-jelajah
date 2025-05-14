
import { Check, Leaf, Award, Handshake, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Check className="h-10 w-10 text-forestgreen" />,
    title: "Sumber Otentik & Terlacak",
    description: "Langsung dari perkebunan pilihan di Nusa Tenggara Timur. Kami memastikan setiap rempah memiliki asal-usul yang jelas dan kualitas terjaga sejak dari hulu."
  },
  {
    icon: <Award className="h-10 w-10 text-forestgreen" />,
    title: "Standarisasi Mutu Tanpa Kompromi",
    description: "Proses seleksi, pengeringan, dan pengemasan mengikuti protokol ketat untuk menjamin kemurnian, aroma, dan daya simpan optimal."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-forestgreen" />,
    title: "Lebih Dari Satu Dekade Pengalaman",
    description: "Kepercayaan yang terbangun sejak 2010, kini dengan manajemen profesional dan visi global untuk melayani pasar domestik hingga mancanegara."
  },
  {
    icon: <Handshake className="h-10 w-10 text-forestgreen" />,
    title: "Kemitraan yang Bertumbuh",
    description: "Kami percaya pada hubungan jangka panjang. Kami bukan hanya supplier, tapi partner strategis yang memahami kebutuhan Anda."
  },
  {
    icon: <Leaf className="h-10 w-10 text-forestgreen" />,
    title: "Berkomitmen pada Praktik Berkelanjutan",
    description: "Menghargai alam yang memberi, kami berupaya menerapkan praktik pertanian dan pengolahan yang bertanggung jawab."
  }
];

const WhyUsSection = () => {
  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-charcoal">
            <span className="golden-border pb-2">Mengapa CV. Manalagi?</span> Alasan Memilih Keunggulan
          </h2>
          <p className="paragraph max-w-3xl mx-auto text-charcoal/80">
            Keunggulan yang Kami Tawarkan, Kepercayaan yang Anda Dapatkan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-8 border border-lightgrey hover:border-mintgreen hover:-translate-y-1"
            >
              <div className="bg-mintgreen/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-mintgreen/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3 text-forestgreen">
                {feature.title}
              </h3>
              <p className="text-charcoal/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
