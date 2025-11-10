import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Check, Copy } from 'lucide-react'
import { useI18n } from '../shared/i18n.jsx'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const { t, lang } = useI18n()
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)
  const [visits, setVisits] = useState(0)

  const email = 'ranchjiao@gmail.com'

  useEffect(() => {
    const v = Number(localStorage.getItem('visits') || '0') + 1
    localStorage.setItem('visits', String(v))
    setVisits(v)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true); setTimeout(() => setCopied(false), 1500)
  }

  const container = { hidden: {opacity:0}, visible: {opacity:1, transition:{ staggerChildren: 0.1 } } }
  const item = { hidden: {opacity:0, y: 20}, visible: {opacity:1, y: 0, transition: { duration: 0.5 } } }

  const socials = [
    { name: lang==='en'?'LinkedIn':'领英', icon: Linkedin, url: '#', color: '#8A2BE2' },
    { name: 'X/Twitter', icon: Twitter, url: '#', color: '#00E5FF' },
  ]

  return (
    <section id="contact" ref={ref} className="py-16 px-4 bg-gradient-to-b from-dark-card/50 to-dark-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{duration:0.6}} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{t('contact.title')}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 text-base font-roboto-mono max-w-2xl mx-auto">
            {lang==='en' ? 'Let’s collaborate on AI coding and agents.' : '一起探讨AI编程与智能体的可能性'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={item}>
              <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-blue">{t('contact.info')}</h3>
              <div className="glass p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-neon-blue/20 rounded-lg"><Mail className="w-6 h-6 text-neon-blue" /></div>
                    <div>
                      <p className="text-sm text-gray-400 font-roboto-mono">Email</p>
                      <a href={`mailto:${email}`} className="text-white hover:text-neon-blue font-roboto-mono">{email}</a>
                    </div>
                  </div>
                  <button onClick={copyEmail} className="p-2 rounded-lg hover:bg-neon-blue/20" title="Copy email">
                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-gray-400" />}
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-purple">{t('contact.socials')}</h3>
              <div className="space-y-3">
                {socials.map(s => { const Icon = s.icon; return (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 glass p-3 rounded-lg transition">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${s.color}20` }}>
                      <Icon className="w-5 h-5" style={{ color: s.color }} />
                    </div>
                    <span className="text-white group-hover:text-neon-blue font-roboto-mono text-sm">{s.name}</span>
                  </a>
                )})}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{duration:0.6, delay:0.4}} className="mt-12 text-center text-gray-500 font-roboto-mono">
          <p className="text-sm">{t('contact.footer')}</p>
          <p className="mt-1 text-xs">{t('contact.visits')}: {visits}</p>
        </motion.div>
      </div>
    </section>
  )
}
