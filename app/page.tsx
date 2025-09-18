  "use client"

  import { Compass, Lock, Sparkles, ShieldCheck, Wallet, Leaf, Plus, Minus, Mail } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { useState } from "react"

  export default function HomePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
      setOpenFaq(openFaq === index ? null : index)
    }

const faqs = [
  {
    question: "¿Qué documentos necesito para iniciar un despacho?",
    answer:
      "Generalmente se requiere factura comercial, packing list, BL/AWB y certificados de origen o sanitarios cuando correspondan. Cada operación puede requerir adicionales según la mercadería y el régimen aduanero.",
  },
  {
    question: "¿Cuánto tiempo tarda el despacho aduanero?",
    answer:
      "Los tiempos dependen del régimen, la documentación y controles sanitarios o técnicos. Con documentación completa y gestión proactiva, SEBA COMPANY optimiza plazos y busca reducir demoras innecesarias.",
  },
  {
    question: "¿Cómo controlan el cumplimiento regulatorio?",
    answer:
      "Contamos con especialistas en clasificación arancelaria y normativa vigente, trabajamos con permisos y certificaciones requeridas y revisamos la operatoria para minimizar riesgos de sanciones o retenciones.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Solicite su cotización a través del formulario de contacto, por email o WhatsApp. Envíe factura y packing list cuando sea posible; responderemos con una propuesta en horario comercial.",
  },
];


    return (
      <div className="min-h-screen bg-[#0B0F12] text-white">
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
            <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
              <Compass className="w-5 h-5" />
              <span className="font-medium text-balance">SEBA COMPANY</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {["Servicios", "Proceso", "Proyectos", "FAQ", "Contacto"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                Acceso
              </a>
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Cotizá</Button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
            {/* Badge */}
            <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
              <span className="text-sm font-medium">Optimización de Operaciones</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">SEBA COMPANY</h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
              Soluciones integrales en despacho aduanero y logística internacional: experiencia, agilidad y cumplimiento normativo para optimizar sus importaciones y exportaciones.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
                Cotizá tu envío
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
              >
                Ver Servicios
              </Button>
            </div>

            {/* Footer Note */}
            <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">Cumplimiento y trazabilidad</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {/* Expert-Led Tours */}
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Experiencia Aduanera</h3>
                <p className="text-white/80 leading-relaxed">Equipo especializado en trámites y clasificación arancelaria.</p>
              </div>

              {/* World-Class Safety */}
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Agilidad Operativa</h3>
                <p className="text-white/80 leading-relaxed">Red y tecnología para tiempos de despacho reducidos.</p>
              </div>

              {/* All-Inclusive Package */}
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Gestión Integral</h3>
                <p className="text-white/80 leading-relaxed">Coordinación desde la recolección hasta la entrega final.</p>
              </div>

              {/* Eco-Friendly Caving */}
              <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Servicios a Medida</h3>
                <p className="text-white/80 leading-relaxed">Soluciones personalizadas según tamaño y tipo de cliente.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Nuestro Proceso</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                  Proceso claro y coordinado para asegurar cumplimiento, reducir tiempos y minimizar costos.
                </p>
              </div>

              {/* Journey Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Phase 1: Briefing & Prep */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                    <h3 className="text-xl font-semibold mb-4">Recepción de documentación</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      Revisamos facturas, packing list y títulos de transporte para anticipar requerimientos y evitar retrasos.
                    </p>
                  </div>
                </div>

                {/* Phase 2: The Trek */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                    <h3 className="text-xl font-semibold mb-4">Clasificación Arancelaria</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      Determinamos el código arancelario correcto y evaluamos regímenes aplicables para optimizar costos.
                    </p>
                  </div>
                </div>

                {/* Phase 3: Caving */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                    <h3 className="text-xl font-semibold mb-4">Declaración y Gestión</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      Presentamos declaraciones, gestionamos pagos y coordinamos inspecciones con organismos intervinientes.
                    </p>
                  </div>
                </div>

                {/* Phase 4: Base Camp */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                    <h3 className="text-xl font-semibold mb-4">Entrega y Post-servicio</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      Coordinamos retiro, entregas finales y ofrecemos soporte post-clearance y auditorías si fueran necesarias.
                    </p>
                  </div>
                </div>
              </div>

              {/* Check Availability Button */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
                >
                  Solicitar Cotización
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Title and Description */}
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                    Preguntas Frecuentes
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed text-pretty">
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
                        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
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
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Contacte a SEBA COMPANY</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Contact Form */}
                <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">Envíe su consulta</h3>
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
                    <p className="text-xl text-white/90 leading-relaxed text-pretty">
                      Para cotizaciones, proyectos o consultas operativas contactanos. Respondemos en horario comercial y ofrecemos asesoría personalizada.
                    </p>
                  </div>

                  {/* Profile Card */}
                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src="https://www.elledecoration.vn/wp-content/uploads/2025/03/edam-garden.jpg"
                        alt="David Luong"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">Equipo SEBA COMPANY</h4>
                        <p className="text-gray-600">Despacho Aduanero & Logística</p>
                      </div>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                {/* Brand Section */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2 mb-6">
                    <Compass className="w-6 h-6" />
                    <span className="text-xl font-semibold">SEBA COMPANY</span>
                  </div>
                  <p className="text-white/80 leading-relaxed text-pretty">
                    Soluciones integrales en despacho aduanero y logística internacional. Optimizamos tiempos, costos y cumplimiento normativo para su operación internacional.
                  </p>
                </div>

                {/* Expedition Links */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-6">SERVICIOS</h3>
                  <ul className="space-y-3">
                    {["Despacho Aduanero", "Clasificación Arancelaria", "Tránsitos", "Proyectos"].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* About Links */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-6">SOBRE</h3>
                  <ul className="space-y-3">
                    {["Quiénes somos", "Cómo trabajamos", "Equipo", "Clientes"].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-6">RECURSOS</h3>
                  <ul className="space-y-3">
                    {["Centro de ayuda", "Contacto", "FAQ", "Términos"].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="border-t border-white/10 pt-12 mb-12">
                <div className="max-w-md">
                  <h3 className="text-lg font-semibold mb-4">Reciba novedades</h3>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="Ingrese su email"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                    />
                    <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Suscribirse</Button>
                  </div>
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
