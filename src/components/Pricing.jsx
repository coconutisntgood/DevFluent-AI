import { Check, Star } from "lucide-react";

const plans = [{
  name:"Débutant",
  price:"$15.99 CAD",
  description: "Parfait pour les développeurs indépendants et les startups agiles qui souhaitent booster leur flux de travail quotidien sans se ruiner.",
  features : [
    "Jusqu'à 3 membres",
    "5GB de stockage",
    "Accès complet à l'API",
    "Analyses de base",
    "Application mobile",
  ],
  popular:false,
},


{
  name:"Pro",
  price:"$39.99 CAD",
  description: "Idéal pour les équipes en pleine croissance et les utilisateurs experts qui exigent une production haute vitesse et une collaboration avancée.",
  features : [
    "Jusqu'à 10 membres",
    "80GB de stockage",
    "Accès complet à l'API",
    "Requêtes haute vitesse illimitées",
    "Revues de code avancées",
    "Analyses de base",
    "Application mobile",
  ],
  popular:true,
},

{
  name:"Entreprise",
  price:"$98.99 CAD",
  description: "La solution ultime pour les grandes organisations exigeant une sécurité maximale, la conformité et un entraînement d'IA sur mesure.",
  features : [
    "Jusqu'à 20 membres",
    "Stockage illimité",
    "Accès complet à l'API",
    "Politique de non-rétention des données",
    "Auto-hébergé",
    "Débit API illimité",
    "SLA personnalisé",
    "Application mobile",
  ],
  popular:false,
}

]

export default function Pricing() {
  return <section id="pricing" className="py-6 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Simple, transparent</span>
          <br />
          <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">Forfaits</span>
        </h2>
        <p className="text-gray-300 text-base text-xl sm:text-;g max-w-2xl mx-auto">
          Choisissez le forfait idéal pour vos besoins. Tous nos plans incluent un essai gratuit de 30 jours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
        {plans.map((plan, key) => (
          <div key={key} className={`relative bg-slate-900/50 back-drop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${
            plan.popular ? "border-blue-500 shadow-blue-500/20 lg:scale-105" 
            : "border-slate-800 hover:border-slate-700"}`}>
            
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg" />
              
            {plan.popular && (
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  <Star className="w-3 h-3 sm:w-3 h-3 fill-white"/>
                  <span>Coup de cœur</span>
                </div>
              </div>
            )}

            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold bm-2">{plan.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">{plan.price}</span>
                <span className="text-gray-400 ml-1 sm:ml-2">/mois</span>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
              {plan.features.map((feature, featureKey) => (
                <li key={featureKey} className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                </li>

              )
            )}
            </ul>
          

            <button className={` w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${ 
              plan.popular
                    ? "bg-gradient-to-b from-blue-500 to-cyan-500"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
                >
              Choisir ce forfait
            </button>

          </div>
      ))}
      </div>

      <div className="mt-8 sm:mt-12 text-center">
        <p className="text-gray-400 text-base texxt-xl">
          Besoin d'un forfait sur mesure ? <a href="#" className="text-blue-400 hover:text-blue-300">Contactez notre équipe de vente</a>
        </p>
      </div>

    </div>
  </section>;
}