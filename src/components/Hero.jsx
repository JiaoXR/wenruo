import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useI18n } from '../shared/i18n.jsx'

export default function Hero() {
  const { t } = useI18n()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight * 0.7 }
    resize(); addEventListener('resize', resize)

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      s: Math.random()*2+1,
      vx: Math.random()*0.5-0.25,
      vy: Math.random()*0.5-0.25,
      o: Math.random()*0.5+0.2,
    }))
    const mouse = { x: null, y: null, r: 150 }
    canvas.addEventListener('mousemove', e=>{ mouse.x=e.x; mouse.y=e.y })
    canvas.addEventListener('mouseleave', ()=>{ mouse.x=mouse.y=null })

    const loop = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      particles.forEach((p,i)=>{
        p.x+=p.vx; p.y+=p.vy
        if(p.x>canvas.width) p.x=0; if(p.x<0) p.x=canvas.width
        if(p.y>canvas.height) p.y=0; if(p.y<0) p.y=canvas.height
        ctx.fillStyle = `rgba(0,229,255,${p.o})`
        ctx.beginPath(); ctx.arc(p.x,p.y,p.s,0,Math.PI*2); ctx.fill()
        for(let j=i+1;j<particles.length;j++){
          const q = particles[j]; const dx=p.x-q.x, dy=p.y-q.y; const d=Math.hypot(dx,dy)
          if(d<100){ ctx.strokeStyle=`rgba(138,43,226,${0.2-d/500})`; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.stroke() }
        }
        if(mouse.x&&mouse.y){ const dx=mouse.x-p.x, dy=mouse.y-p.y; const d=Math.hypot(dx,dy)
          if(d<mouse.r){ ctx.strokeStyle=`rgba(0,229,255,${0.5-d/(mouse.r*2)})`; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(mouse.x,mouse.y); ctx.stroke() }
        }
      })
      requestAnimationFrame(loop)
    }
    loop();
    return ()=> removeEventListener('resize', resize)
  }, [])

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative w-full h-[30vh] min-h-[340px] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg z-10" />
      <div className="absolute inset-0 z-10 bg-grid-dots opacity-20" />
      <div className="absolute inset-0 z-10 spotlight opacity-40" />

      <div className="relative z-20 text-center px-4">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}}>
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{t('hero.title')}</span>
          </h1>
        </motion.div>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.35}} className="text-xl md:text-2xl text-gray-300 mb-8 font-roboto-mono">
          {t('hero.subtitle')}
        </motion.p>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.45}} className="flex gap-4 justify-center flex-wrap">
          <a href="#about" className="btn-primary">{t('hero.cta_about')}</a>
          <a href="#projects" className="btn-outline">{t('hero.cta_projects')}</a>
          <a href="#contact" className="px-6 py-2 border-2 border-neon-purple rounded-lg font-semibold text-neon-purple hover:bg-neon-purple hover:text-dark-bg transition-transform hover:scale-105">{t('hero.cta_contact')}</a>
        </motion.div>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.2}} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer" onClick={scrollToAbout}>
        <motion.div animate={{ y:[0,10,0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="text-neon-blue">
          <ChevronDown size={36} />
        </motion.div>
      </motion.div>
    </section>
  )
}
