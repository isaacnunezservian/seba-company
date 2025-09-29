  "use client"

  import { Compass, CheckCircle, Sparkles, ShieldCheck, Wallet, Leaf, Plus, Minus, Mail, Ship } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { useState } from "react"
  import logo from '../public/logo.svg'
  import { FloatingWhatsApp } from "react-floating-whatsapp"


  const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+5491170061908"
    const message = "👋 ¡Hola! ¿En qué puedo ayudarte con tu tienda online?"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-5 right-5 z-50 flex items-center border-none justify-center w-[50px] h-[50px] bg-emerald-600 text-white rounded-full shadow-sm transition-all duration-800 hover:scale-110 group"
      style={{
        backgroundColor: 'rgba(34, 197, 94, 0.9)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="fill-current"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690"/>
      </svg>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping"></div>
    </button>
  )
}


  export default function HomePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
      setOpenFaq(openFaq === index ? null : index)
    }

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

const faqs = [
  {
    question: "¿Qué documentos necesito para iniciar un despacho?",
    answer:
      "Generalmente se requiere factura comercial, packing list, BL/AWB/CRT MIC y certificados de origen o sanitarios cuando correspondan. Cada operación puede requerir adicionales según la mercadería y el régimen aduanero.",
  },
  {
    question: "¿Cuánto tiempo tarda el despacho aduanero?",
    answer:
      "Los tiempos dependen del régimen, la documentación y verificaciones según las características de la mercadería. Contando con toda la documentación necesaria, optimizamos plazos y reducimos demoras innecesarias.",
  },
  {
    question: "¿Cómo controlan los requerimientos aduaneros?",
    answer:
      "Contamos con especialistas en clasificación arancelaria y normativa vigente, trabajamos con permisos de terceros organismos y certificaciones requeridas y revisamos la operatoria para minimizar riesgos de sanciones.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Solicite su cotización a través del formulario de contacto, por email o WhatsApp. Envíe factura y packing list cuando sea posible; responderemos con una propuesta en horario comercial.",
  },
];


    return (
      <div className="min-h-screen bg-[#0B0F12] text-white">
        <WhatsAppButton />
        {/* Hero Section */}
        <div className="relative min-h-screen">
          {/* Background Video with Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
          </div>

          {/* Navigation */}
          <nav className="relative z-10 flex items-center justify-between p-6">
            {/* Logo */}
            <div className="flex items-center flex-col px-4 ">
              {logo && <img src={logo.src} alt="SEBA COMPANY" className="h-20 w-auto" />}
              <span className="text-sm font-light text-balance -mt-3 ml-3 ">SEBA COMPANY</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => scrollToSection('servicios')}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                Nuestra propuesta
              </button>
              <button
                onClick={() => scrollToSection('proceso')}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                Preguntas Frecuentes
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                Contacto
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
     
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="group relative bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-50 hover:to-white rounded-full px-6 py-2 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-white/20"
              >
                {/* Pulse Background Effect */}
                <div className="absolute -inset-2 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 tracking-wide">
                  Cotizá
                </span>
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
              </Button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
            {/* Badge */}
            <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
              <div className="flex items-center gap-2">
                <Ship className="w-4 h-4" />
                <span className="text-sm font-medium">Despacho Aduanero</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-balance">SEBA COMPANY</h1>

            {/* Subheading */}
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty md:px-6">
              Soluciones integrales en despacho aduanero: experiencia, agilidad y cumplimiento normativo para optimizar sus importaciones y exportaciones.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 mt-6 md:mt-10">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contacto')}
                className="group relative bg-gradient-to-r from-white via-gray-50 to-white text-black hover:from-gray-50 hover:via-white hover:to-gray-50 rounded-full px-8 py-4 text-base md:text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 overflow-hidden border-2 border-white/30"
              >
                {/* Sophisticated Pulse Background Effect */}
                <div className="absolute -inset-3 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-1000"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/40 to-gray-100/40 rounded-full blur-sm opacity-0 group-hover:opacity-70 animate-pulse transition-opacity duration-800 animation-delay-200"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 tracking-wide">
                  Cotizá tu envío
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-blue-50/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group relative bg-gradient-to-r from-black/40 to-black/50 ring-1 ring-white/20 backdrop-blur-md border-0 text-white hover:from-black/60 hover:to-black/70 rounded-full px-6 py-3 text-base md:text-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10" />
                <span className="relative z-10 font-medium">Contáctanos por Mail</span>
                <div className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
              </Button>
            </div>

            {/* Footer Note */}
            {/* <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">cumplimiento y trazabilidad.</span>
            </div> */}
          </div>
        </div>  

        {/* Features Section */}
        <section id="servicios" className="relative z-10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {/* Expert-Led Tours */}
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">Experiencia Aduanera</h3>
                <p className="text-white/80 leading-relaxed">Equipo especializado en trámites y clasificación arancelaria.</p>
              </div>

              {/* World-Class Safety */}
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                                <h3 className="text-lg md:text-xl font-semibold mb-4">Soluciones Logísticas</h3>
                <p className="text-white/80 leading-relaxed">Contamos con una amplia red de tecnología para reducir al máximo los tiempos de despacho aduanero.</p>
              </div>

              {/* All-Inclusive Package */}
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                  <Wallet className="w-6 h-6" />
                </div>
                                <h3 className="text-lg md:text-xl font-semibold mb-4">Gestión Integral</h3>
                <p className="text-white/80 leading-relaxed">Coordinación desde la recolección hasta la entrega final.</p>
              </div>

              {/* Eco-Friendly Caving */}
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                                <h3 className="text-lg md:text-xl font-semibold mb-4">Servicios a Medida</h3>
                <p className="text-white/80 leading-relaxed">Soluciones personalizadas según características de la mercadería</p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section id="proceso" className="relative z-10 py-12 px-2 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 md:p-12">
              {/* Section Header */}
              <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">Nuestro Proceso</h2>
                <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                  Proceso claro y coordinado para asegurar cumplimiento, reducir tiempos y minimizar costos.
                </p>
              </div>

              {/* Journey Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Phase 1: Briefing & Prep */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                  <div className="flex-1">
                    <div className="text-2xl md:text-3xl font-bold text-white/60 mb-4">01.</div>
                                                            <h3 className="text-lg md:text-xl font-semibold mb-4">Recepción de documentación</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      Revisamos facturas, packing list y documentos de transporte para anticipar requerimientos y evitar retrasos.
                    </p>
                  </div>
                </div>

                {/* Phase 2: The Trek */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                  <div className="flex-1">
                    <div className="text-2xl md:text-3xl font-bold text-white/60 mb-4">02.</div>
                                        <h3 className="text-lg md:text-xl font-semibold mb-4">Clasificación Arancelaria</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      Determinamos la correcta posición arancelaria y evaluamos regímenes aplicables para optimizar costos.
                    </p>
                  </div>
                </div>

                {/* Phase 3: Caving */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                  <div className="flex-1">
                    <div className="text-2xl md:text-3xl font-bold text-white/60 mb-4">03.</div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Declaración y Gestión</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      Presentamos declaraciones, gestionamos pagos y cordinamos verificaciones con el servicio aduanero.  
                    </p>
                  </div>
                </div>

                {/* Phase 4: Base Camp */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                  <div className="flex-1">
                    <div className="text-2xl md:text-3xl font-bold text-white/60 mb-4">04.</div>
                                        <h3 className="text-lg md:text-xl font-semibold mb-4">Entrega y Post-servicio</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      Coordinamos retiro, entregas finales y ofrecemos soporte post-clearance. Coordinamos retiros y acarreos hasta el destino final.
                    </p>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative z-10 py-20 md:py-24 px-3 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Title and Description */}
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
                    Preguntas Frecuentes
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed text-pretty">
                    Respuestas rápidas sobre despacho aduanero, tiempos, documentación y cómo trabajamos para optimizar su operación.
                  </p>
                </div>

                {/* Right Column - FAQ Accordion */}
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <h3 className="text-base md:text-lg font-semibold pr-4">{faq.question}</h3>
                        {openFaq === index ? (
                          <Minus className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-6">
                          <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="relative z-10 py-24 px-2 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-6 md:p-12">
              {/* Section Header */}
              <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">Contacte a SEBA COMPANY</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Contact Form */}
                <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                  <h3 className="text-xl md:text-2xl font-bold mb-6">Envíe su consulta</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nombre y apellido"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="su.email@empresa.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Celular
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+598 99 123 456"
                      /> 
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Descripción breve de la operación (origen, destino, mercadería)..."
                      />
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                      Enviar Consulta
                    </Button>
                  </form>
                </div>

                {/* Right Column - Contact Info */}
                <div className="space-y-8">
                  <div>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty">
                      Para cotizaciones, proyectos o consultas operativas contactanos. Respondemos en horario comercial y ofrecemos asesoría personalizada.
                    </p>
                  </div>

                  {/* Profile Card */}
                  <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                    {/* Logo centrado */}
                    <div className="flex justify-center mb-6">
                      <div className="bg-black/5 backdrop-blur-4xl rounded-full p-4 border border-gray-100">
                        {logo && <img src={logo.src} alt="SEBA COMPANY" className="h-16 w-auto" />}
                      </div>
                    </div>
                    
                    {/* Información de la empresa */}
                    <div className="text-center mb-6">
                                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">SEBA COMPANY</h4>
                      <p className="text-gray-600 text-sm font-medium">Despacho Aduanero & Logística Internacional</p>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 mx-auto mt-3"></div>
                    </div>
                    
                    {/* Botón de contacto */}
                    <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl py-3 font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg">
                      <Mail className="w-4 h-4" />
                      Contactar por Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-6 md:p ">
          <div className=" mx-auto">
            <div className=" bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                {/* Brand Section */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-lg md:text-xl font-semibold">SEBA COMPANY</span>
                  </div>
                  <p className="text-white/80 leading-relaxed text-pretty">
                    Soluciones integrales en despacho aduanero y logística internacional. Optimizamos tiempos, costos y cumplimiento normativo para su operación internacional.
                  </p>
                </div>

                {/* Expedition Links */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-6">SERVICIO</h3>
                  <ul className="space-y-3">
                    <li>
                      <button onClick={() => scrollToSection('servicios')} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed text-left">
                        Despacho Aduanero
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection('servicios')} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed text-left">
                        Clasificación Arancelaria
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection('proceso')} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed text-left">
                        Nuestro Proceso
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection('contacto')} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed text-left">
                        Cotización
                      </button>
                    </li>
                  </ul>
                </div>

                {/* About Links */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-6">SOBRE</h3>
                  <ul className="space-y-3">
                    <li>
                      <button onClick={() => scrollToSection('servicios')} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed text-left">
                        Quiénes somos
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection('proceso')} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed text-left">
                        Cómo trabajamos
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-6">RECURSOS</h3>
                  <ul className="space-y-3">
                    <li>
                      <button onClick={() => scrollToSection('contacto')} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed text-left">
                        Contacto
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection('faq')} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed text-left">
                        Preguntas Frecuentes
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

  

              {/* Sub-footer */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-white/60 text-sm text-center">© 2025 SEBA COMPANY</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
