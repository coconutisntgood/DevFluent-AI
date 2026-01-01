import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { CodeExamples, floatingCards } from "../data/CodeExemple";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({x:0, y:0});
  const [activeTab, setActiveTab] = useState("App.jsx");

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({x: e.clientX, y: e.clientY});
  }

  window.addEventListener("mousemove", handleMouseMove);
 
  return () => window.removeEventListener("mousemove", handleMouseMove);
  
  }, []);

  const currentFloatingTab = floatingCards[activeTab];

  return (
  <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="absolute inset-0 opacity-30" style={{
      background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
    }} />

    <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"/>


    <div className="max-w-7xl mx-auto text-center relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
        <div>
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400"/>
              <span className="text-sx sm:text-sm text-blue-200">Découvrez DevFluent AI</span>
            </div>

            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Optimisez votre code</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">Produisez mieux</span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Avec DevFluent AI</span>
            </h1>
            <p className="text-medium sm:text-base lg:text-lg text-gray max-w-2xl mx-auto lg:-mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
              Boostez votre workflow avec l'autocomplétion intelligente, les tests automatisés et le debugging assisté. Livrez du code prêt pour la production 10x plus vite.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold sm:text-sm sm:text-base trnasition-all duration-300 hover:scale-102 flex items-center space-x-2">
                <span>Codez gratuitement</span>
                <ArrowRight className="w-4 h-4 sm:w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"/>
              </button>

              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold sm:text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center space-x-2">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-shite/20 duration-300 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 h-5 fill-white"/>
                </div>
                <span>Voir la démo</span>
                  
              </button>
            </div>

          </div>
        </div>
        <div className="relative order-2 w-full">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 ">
            <div className=" bg-gradient-to-br from-gray-900/20 to-gray-800/20 background-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] bodrer-white/5">
              {/* IDE HEADER */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 sm:space-x-2 ">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 "/>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 "/>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 "/>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300">DevFluent AI</span>
                </div> 
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </div>

                <div className="p-3 sm:p-4 relative h-full">
                  {/*file tabs (onglets) */}
                  <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                    <button 
                      onClick={() => setActiveTab("App.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                      activeTab === "App.jsx" 
                      ? "bg-blue-500/30 text-white border-blue-400/20" 
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      }  transition-all duration-200 whitespace-nowrap`}>App.jsx</button>

                    <button 
                      onClick={() => setActiveTab("Hero.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                      activeTab === "Hero.jsx" 
                      ? "bg-blue-500/30 text-white border-blue-400/20" 
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      }  transition-all duration-200 whitespace-nowrap`}>Hero.jsx</button>
                    
                    <button 
                      onClick={() => setActiveTab("Navbar.jsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                      activeTab === "Navbar.jsx" 
                      ? "bg-blue-500/30 text-white border-blue-400/20" 
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      }  transition-all duration-200 whitespace-nowrap`}>Navbar.jsx</button>
                  </div>

                  {/* Code content */}
                  <div className="relative overflow-hidden flex-grow">
                      <SyntaxHighlighter 
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0, 
                        borderRadius: "8px", 
                        fontSize: "11px", 
                        lineHeight: "1.4", 
                        height: "100%", 
                        border: "1px solid #3c3c3c",
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap",
                        textAlign: "left",
                      }}
                      >
                        {CodeExamples[activeTab]}
                      </SyntaxHighlighter>
                  </div>
              </div>
            </div>

            {/*floating cards*/}
            <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentFloatingTab.bgColor} blackdrop-blur-xl rounded-lg p-4 border-white/20 shadow-2xl`}>
              <div className="flex items-center space-x-2 mb-2">
                <div className={`w-6 h-6 ${currentFloatingTab.iconColor} flex items-center justify-center text-sm font-bold`}>{currentFloatingTab.icon}</div>
                <span className={`text-sm font-medium ${currentFloatingTab.textColor}`}>{currentFloatingTab.title}</span>
              </div>
              <div className={`text-sm text-left ${currentFloatingTab.contentColor}`}>{currentFloatingTab.content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
);
}