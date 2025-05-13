
import { useState } from 'react';

const questions = [
  {
    question: "Apa jenis hidangan atau produk yang Anda buat?",
    options: ["Hidangan Tradisional", "Produk Kosmetik", "Suplemen Kesehatan", "Minyak Konsumsi", "Produk Ekspor"]
  },
  {
    question: "Profil rasa atau karakter apa yang Anda cari?",
    options: ["Gurih dan Aromatik", "Asam yang Menyegarkan", "Tekstur Kental", "Aroma yang Kuat", "Ringan dan Natural"]
  },
  {
    question: "Berapa skala kebutuhan Anda?",
    options: ["Retail/Kecil (< 100kg)", "Medium (100-500kg)", "Besar (500kg-1ton)", "Industrial (> 1ton)"]
  }
];

const recommendations = {
  "Hidangan Tradisional-Gurih dan Aromatik-Retail/Kecil (< 100kg)": {
    product: "Kemiri Premium Grade",
    description: "Kemiri berukuran besar dan seragam, perfect untuk bumbu dasar masakan tradisional Indonesia skala rumahan atau restoran kecil."
  },
  "Produk Kosmetik-Aroma yang Kuat-Medium (100-500kg)": {
    product: "Kemiri Cold Pressed",
    description: "Kemiri dengan kandungan minyak optimal, cocok untuk industri kosmetik skala menengah yang membutuhkan bahan baku berkualitas."
  },
  // Default recommendation if combination not found
  "default": {
    product: "Konsultasi Khusus",
    description: "Kebutuhan Anda tampaknya spesifik! Tim ahli kami siap membantu menemukan produk terbaik sesuai kebutuhan khusus Anda."
  }
};

const InteractiveQuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  
  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };
  
  const getRecommendation = () => {
    const key = answers.join('-');
    return recommendations[key as keyof typeof recommendations] || recommendations.default;
  };
  
  return (
    <section className="bg-beige py-20 md:py-28">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">
            <span className="golden-border pb-2">Jelajah Interaktif:</span> Temukan Rempah Ideal Anda
          </h2>
          <p className="paragraph max-w-3xl mx-auto">
            Bingung Memilih? Biarkan Kami Membantu!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10">
          {!showResult ? (
            <div>
              <div className="mb-8">
                <div className="flex justify-between mb-4">
                  <span className="text-sm text-warmgrey">Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
                  <span className="text-sm text-warmgrey">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-warmgrey/20 rounded-full h-2">
                  <div 
                    className="bg-terracotta h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-playfair font-bold mb-6">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-4 border border-warmgrey/30 rounded-lg hover:border-terracotta hover:bg-terracotta/5 transition-colors"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="/placeholder.svg" // Replace with actual product icon
                  alt="Product recommendation" 
                  className="w-12 h-12"
                />
              </div>
              
              <h3 className="heading-md text-terracotta mb-3">
                {getRecommendation().product}
              </h3>
              
              <p className="paragraph mb-8">
                {getRecommendation().description}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={resetQuiz}
                  className="btn-outline py-2.5"
                >
                  Coba Lagi
                </button>
                <a 
                  href="/contact" 
                  className="btn-primary py-2.5"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveQuizSection;
