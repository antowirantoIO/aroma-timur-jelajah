
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    // setTimeout(() => {
    //   // Reset form after success (optional)
    //   setFormData({
    //     name: '',
    //     email: '',
    //     company: '',
    //     phone: '',
    //     subject: '',
    //     message: ''
    //   });
    // }, 1500);

    const message = `
Halo!

Saya ingin mengirimkan pesan terkait:

Nama: ${formData.name}
Email: ${formData.email}
Perusahaan: ${formData.company}
Telepon: ${formData.phone}
Subjek: ${formData.subject}

Isi Pesan:
${formData.message}

Terima kasih!
`;

// akses link https://wa.me/+6281223378900
    const waLink = `https://wa.me/+6281223378900?text=${encodeURIComponent(message)}`;
    setFormStatus('success');

    window.open(waLink, '_blank');

  };
  
  return (
    <div className="pt-24">
      <section className="bg-deepbrown text-white py-20">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Terhubung Dengan Kami</h1>
          <p className="paragraph text-white/80 max-w-3xl">
            Pintu Anda Menuju Rempah Kualitas Terbaik. Tim CV. Manalagi Barokah Makmur Abadi siap melayani pertanyaan, permintaan sampel, hingga diskusi kemitraan strategis.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="card-highlight group hover:border-forestgreen transition-all p-8 text-center">
              <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-terracotta" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Alamat Kami</h3>
              <p className="text-deepbrown/80 mb-4">
                Jl. Terusan Timor Raya Km. 7, Kupang, Nusa Tenggara Timur, 85228, Indonesia
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-terracotta hover:underline inline-flex items-center"
              >
                Buka di Google Maps
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
            
            <div className="card-highlight group hover:border-forestgreen transition-all p-8 text-center">
              <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-terracotta" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Telepon</h3>
              <p className="text-deepbrown/80 mb-2">
                <a href="https://wa.me/+6281223378900" className="hover:text-terracotta hover:underline">
                  +62 812 2337 8900
                </a>
              </p>
              <p className="text-sm text-deepbrown/60">
                Kami siap melayani Anda.
              </p>
            </div>
            
            <div className="card-highlight group hover:border-forestgreen transition-all p-8 text-center">
              <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-terracotta" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Email</h3>
              <p className="text-deepbrown/80 mb-4">
                <a href="mailto:manalagibarokah.makmurabadi@gmail.com" className="hover:text-terracotta hover:underline">
                  manalagibarokah.makmurabadi@gmail.com
                </a>
              </p>
              <p className="text-sm text-deepbrown/60">
                Kami akan merespon secepatnya.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-lg mb-8">
                <span className="golden-border pb-2">Kirim Pesan</span> Kepada Kami
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-deepbrown font-medium mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-warmgrey/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-deepbrown font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-warmgrey/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-deepbrown font-medium mb-2">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-warmgrey/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-deepbrown font-medium mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-warmgrey/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-deepbrown font-medium mb-2">
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-warmgrey/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50"
                  >
                    <option value="">Pilih subjek pertanyaan</option>
                    <option value="Permintaan Penawaran">Permintaan Penawaran</option>
                    <option value="Pertanyaan Produk">Pertanyaan Produk</option>
                    <option value="Kemitraan">Kemitraan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-deepbrown font-medium mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-warmgrey/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta/50 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn-primary flex items-center justify-center min-w-[180px]"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                    Pesan Anda berhasil terkirim. Tim kami akan menghubungi Anda segera.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                    Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami melalui telepon.
                  </div>
                )}
              </form>
            </div>
            
            <div>
              <h2 className="heading-lg mb-8">
                <span className="golden-border pb-2">Lokasi</span> Kami
              </h2>
              
              <div className="bg-white p-2 rounded-lg shadow-md mb-6">
                {/* Embed Google Maps iframe here */}
                <div className="w-full h-96 bg-warmgrey/20 rounded-md flex items-center justify-center">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5420.696839661808!2d123.6261812!3d-10.144169000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c5683000fd46b59%3A0xa1b80e3ffd5fbdc0!2sUD%20MANALAGI%20NAM%20PARADISO!5e1!3m2!1sen!2sid!4v1747144394821!5m2!1sen!2sid"
                      width="600" height="380" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-playfair font-bold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-terracotta"/>
                  Jam Operasional
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                  <span className="font-medium">Senin - Jumat</span>
                    <span>08:00 - 17:00 WITA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sabtu</span>
                    <span>08:00 - 14:00 WITA</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Minggu & Hari Libur</span>
                    <span>Tutup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-forestgreen text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md text-white mb-6">
            Tertarik Bermitra Dengan Kami?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            CV. Manalagi Barokah Makmur Abadi selalu terbuka untuk kemitraan strategis yang saling menguntungkan dengan berbagai pihak, mulai dari petani lokal hingga distributor internasional.
          </p>
          <a 
            href="https://wa.me/+6281223378900"
            className="bg-white text-forestgreen hover:bg-white/90 transition-colors font-semibold px-8 py-4 rounded-md shadow-md hover:shadow-lg tracking-wide uppercase inline-block"
          >
            HUBUNGI KAMI SEKARANG
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
