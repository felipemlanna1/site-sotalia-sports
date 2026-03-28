import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsappLogo, InstagramLogo, MapPin, Star, Clock, Barbell, SwimmingPool, Users, Trophy, ArrowUp, List, X, Phone, Fire } from '@phosphor-icons/react'

const WHATSAPP = "5548996935690"
const INSTAGRAM = "https://instagram.com/sotaliasports"
const PHONE = "(48) 99693-5690"
const ADDRESS = "Av. Pequeno Principe, 231 - Campeche, Florianopolis - SC"

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="text-2xl font-black tracking-tight text-white">SOTALIA<span className="text-sky-400">SPORTS</span></a>
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-sky-400 transition font-medium">{l.label}</a>
          ))}
        </div>
        <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero conhecer a Sotalia Sports.`} target="_blank" rel="noopener" className="hidden md:flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 rounded-full text-sm font-bold transition">
          <WhatsappLogo size={18} weight="duotone" /> Aula Gratis
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <List size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-300 hover:text-sky-400 transition font-medium text-sm">{l.label}</a>
              ))}
              <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero agendar minha aula gratis na Sotalia Sports.`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-sky-500 text-white px-5 py-3 rounded-full font-bold">
                <WhatsappLogo size={18} weight="duotone" /> Aula Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="./images/hero.jpg" alt="Sotalia Sports Campeche" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />
      </div>
      <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 text-sky-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Fire size={16} weight="duotone" /> Desde 1998 no Campeche
        </motion.div>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
          A ACADEMIA MAIS<br /><span className="text-sky-400">COMPLETA</span> DO SUL DA ILHA
        </motion.h1>
        <motion.p variants={fadeUp} className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          2.000m2 de estrutura, piscina semi-olimpica salinizada, musculacao Life Fitness, mais de 20 modalidades e estacionamento com 100+ vagas.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero agendar minha aula experimental gratis!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg shadow-sky-500/30">
            <WhatsappLogo size={24} weight="duotone" /> Aula Gratis
          </a>
          <a href="#modalidades" className="flex items-center justify-center gap-2 border-2 border-gray-500 hover:border-sky-400 text-white px-8 py-4 rounded-full text-lg transition hover:text-sky-400">
            <Barbell size={24} weight="duotone" /> Ver Modalidades
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-8">
          {[
            { num: '2.000m2', label: 'Estrutura' },
            { num: '20+', label: 'Modalidades' },
            { num: '4.9', label: 'Google' },
            { num: '100+', label: 'Vagas' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-black text-sky-400">{s.num}</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src="./images/academia.jpg" alt="Interior da Sotalia Sports" className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
          <motion.span variants={fadeUp} className="text-sky-400 uppercase tracking-widest text-sm font-bold">Sobre Nos</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white leading-tight">TRADIAO E INOVACAO NO <span className="text-sky-400">CAMPECHE</span></motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            Fundada em 1998, a Sotalia Sports e referencia em saude e bem-estar no sul da ilha de Florianopolis. Com uma estrutura propria de 2.000m2 dividida em 4 setores - Natacao, Musculacao, Ginastica e Artes Marciais - oferecemos a maior variedade de modalidades da regiao.
          </motion.p>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            Contamos com a unica piscina semi-olimpica salinizada do sul da ilha e equipamentos de ultima geracao Life Fitness, lider mundial em tecnologia fitness.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
            {['Piscina', 'Musculacao', 'Spinning', 'Lutas', 'Pilates', 'Natacao', 'Funcional'].map(t => (
              <span key={t} className="bg-sky-500/10 border border-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-medium">{t}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Modalidades() {
  const mods = [
    { icon: <SwimmingPool size={40} weight="duotone" />, title: 'Natacao', desc: 'Piscina semi-olimpica salinizada, unica no Sul da Ilha. Aulas para todas as idades e niveis.' },
    { icon: <Barbell size={40} weight="duotone" />, title: 'Musculacao', desc: 'Equipamentos Life Fitness de ultima geracao. Area ampla com orientacao profissional.' },
    { icon: <Users size={40} weight="duotone" />, title: 'Ginastica', desc: 'Spinning, funcional, ritmos, GAP, step e muito mais. Mais de 10 modalidades de ginastica.' },
    { icon: <Trophy size={40} weight="duotone" />, title: 'Artes Marciais', desc: 'Jiu-Jitsu, Muay Thai, Boxe e MMA. Professores experientes e area dedicada.' },
    { icon: <Fire size={40} weight="duotone" />, title: 'Pilates Studio', desc: 'Studio exclusivo com aparelhos Metalife. Aulas individuais e em pequenos grupos.' },
    { icon: <Star size={40} weight="duotone" />, title: 'Kids', desc: 'Natacao infantil, judô e atividades ludicas. Playground e area segura para criancas.' },
  ]
  return (
    <section id="modalidades" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-sky-400 uppercase tracking-widest text-sm font-bold">Atividades</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white mt-3">MAIS DE 20 <span className="text-sky-400">MODALIDADES</span></motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mt-4 max-w-xl mx-auto">Tudo o que voce precisa para uma vida ativa e saudavel em um so lugar.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mods.map(m => (
            <motion.div key={m.title} variants={fadeUp} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-sky-500/50 transition group">
              <div className="text-sky-400 mb-4 group-hover:scale-110 transition-transform">{m.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Estrutura() {
  const fotos = [
    { src: './images/piscina.jpg', title: 'Piscina Semi-Olimpica', desc: 'Salinizada, unica no sul da ilha' },
    { src: './images/academia.jpg', title: 'Musculacao Premium', desc: 'Equipamentos Life Fitness' },
    { src: './images/aulas.jpg', title: 'Salas de Aula', desc: 'Ginastica e atividades em grupo' },
    { src: './images/lutas.jpg', title: 'Artes Marciais', desc: 'Tatame profissional' },
  ]
  return (
    <section id="estrutura" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-sky-400 uppercase tracking-widest text-sm font-bold">Infraestrutura</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white mt-3">NOSSA <span className="text-sky-400">ESTRUTURA</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-6">
          {fotos.map(f => (
            <motion.div key={f.title} variants={fadeUp} className="group relative overflow-hidden rounded-2xl aspect-[16/10]">
              <img src={f.src} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold">{f.title}</h3>
                  <p className="text-sky-300 text-sm">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Depoimentos() {
  const reviews = [
    { name: 'Fernanda L.', text: 'Melhor academia de Floripa! A piscina e maravilhosa, os equipamentos sao top e os professores super atenciosos. Frequento ha 5 anos!', stars: 5 },
    { name: 'Pedro H.', text: 'Estrutura impecavel. Faco musculacao e jiu-jitsu, tudo no mesmo lugar. Estacionamento enorme, nunca tem problema de vaga.', stars: 5 },
    { name: 'Mariana C.', text: 'Comecei na natacao e hoje faco pilates tambem. A equipe e incrivel e o ambiente e muito acolhedor. Super recomendo!', stars: 5 },
  ]
  return (
    <section id="depoimentos" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-sky-400 uppercase tracking-widest text-sm font-bold">Avaliacoes</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white mt-3">O QUE DIZEM NOSSOS <span className="text-sky-400">ALUNOS</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <motion.div key={r.name} variants={fadeUp} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(r.stars)].map((_, i) => <Star key={i} size={18} weight="fill" className="text-yellow-500" />)}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{r.text}"</p>
              <p className="text-white font-bold">{r.name}</p>
              <p className="text-gray-500 text-sm">Google Reviews</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-sky-950/20 to-slate-950">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">COMECE SUA <span className="text-sky-400">TRANSFORMACAO</span> HOJE</motion.h2>
        <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-10">
          Agende sua aula experimental gratuita e conheca a estrutura mais completa do sul da ilha.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero agendar minha aula experimental gratuita na Sotalia Sports!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg shadow-sky-500/30">
            <WhatsappLogo size={24} weight="duotone" /> Agendar Aula Gratis
          </a>
          <a href={`tel:${PHONE.replace(/\D/g,'')}`} className="flex items-center justify-center gap-2 border-2 border-gray-500 hover:border-sky-400 text-white px-8 py-4 rounded-full text-lg transition hover:text-sky-400">
            <Phone size={24} weight="duotone" /> Ligar Agora
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
          <motion.span variants={fadeUp} className="text-sky-400 uppercase tracking-widest text-sm font-bold">Contato</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white leading-tight">VENHA <span className="text-sky-400">CONHECER</span></motion.h2>
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={28} weight="duotone" className="text-sky-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Endereco</h4>
                <p className="text-gray-400">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <WhatsappLogo size={28} weight="duotone" className="text-sky-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">WhatsApp</h4>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="text-gray-400 hover:text-sky-400 transition">{PHONE}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <InstagramLogo size={28} weight="duotone" className="text-sky-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Instagram</h4>
                <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-gray-400 hover:text-sky-400 transition">@sotaliasports</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={28} weight="duotone" className="text-sky-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Horario</h4>
                <p className="text-gray-400">Seg - Sex: 6h as 22h</p>
                <p className="text-gray-400">Sab: 8h as 13h</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src="./images/piscina.jpg" alt="Piscina Sotalia Sports" className="rounded-3xl w-full aspect-square object-cover shadow-2xl" />
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xl font-black text-white">SOTALIA<span className="text-sky-400">SPORTS</span></p>
        <p className="text-gray-500 text-sm">&copy; 2026 Sotalia Sports. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-gray-500 hover:text-sky-400 transition"><InstagramLogo size={24} weight="duotone" /></a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="text-gray-500 hover:text-sky-400 transition"><WhatsappLogo size={24} weight="duotone" /></a>
        </div>
      </div>
    </footer>
  )
}

function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 bg-sky-500 hover:bg-sky-400 text-white p-3 rounded-full shadow-lg transition">
      <ArrowUp size={24} />
    </button>
  )
}

function WhatsAppFloat() {
  return (
    <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero saber mais sobre a Sotalia Sports.`} target="_blank" rel="noopener" className="fixed bottom-6 left-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110">
      <WhatsappLogo size={28} weight="fill" />
    </a>
  )
}

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Sobre />
      <Modalidades />
      <Estrutura />
      <Depoimentos />
      <CTA />
      <Contato />
      <Footer />
      <ScrollTop />
      <WhatsAppFloat />
    </div>
  )
}
