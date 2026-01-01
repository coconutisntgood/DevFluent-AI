
const testimonials = [
  {
    name: "Marc-André Roy",
    role: "Développeur sénior",
    image: "https://vaillancourtea.com/files/2016/07/Couillard.png",
    content: "L'IA a complètement transformé ma gestion des tests unitaires. Je gagne facilement 5 heures par semaine sur mes sprints.",
  },

  {
    name: "Sophie Chen",
    role: "Dév Fullstack et Freelance",
    image: "https://api.ellequebec.com/app/uploads/2017/03/39ca4653-3da1-4156-a097-c88241f86e03-michel-audette.jpg",
    content: "Le Smart Debugging est bluffant. Il ne se contente pas de trouver l'erreur, il m'explique pourquoi elle est là. C'est un gain de temps fou.",
  },

  {
    name: "Julien Tremblay",
    role: "Développeur principal",
    image: "https://static.wixstatic.com/media/abff9f_a5801fe7a54043269d521aa913613cbd~mv2.jpg/v1/crop/x_0,y_32,w_1067,h_1146/fill/w_728,h_782,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo-professionnelle-linkedin-homme-quebec.jpg",
    content: "Enfin un outil qui comprend les bases de code complexes. C'est devenu mon copilote indispensable pour mes projets Next.js.",
  },

]

export default function Testimonials() {
  return (
  <section id="testimonials" className="py-6 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-18">
        
        {/* Left side (header) */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Ce que les développeurs disent de nous
          </h2>
          <p className="text-gray-300 text-base text-xl sm:text-;g max-w-2xl mx-auto">
            Découvrez pourquoi notre IA est devenue un incontournable de la boîte à outils du développeur moderne.
          </p>
        </div>

        {/* Right side (testimonials) */}
        <div className="lg:w-1/2 w-full">
          <div className="space-y-6 sm:space-y-8">
            {testimonials.map((testimonial, key) => (
              <div key={key} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold 
                      bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text 
                      text-transparent">"</div>

                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.content}</p>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 sm:h-12 sm:w-12 rounded-full object-cover"/>
                  </div>
                  <h4 className="font-semibold text-shite text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}