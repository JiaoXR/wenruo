import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { useI18n } from '../shared/i18n.jsx'

export default function Skills() {
  const { t, lang } = useI18n()
  const ref = useRef(null)
  const canvasRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const radarData = [
    { skill: 'AI/ML', value: 90 },
    { skill: 'Backend', value: 85 },
    { skill: 'Frontend', value: 88 },
    { skill: 'DevOps', value: 75 },
    { skill: 'Design', value: 70 },
  ]

  useEffect(() => {
    if (!canvasRef.current || !isInView) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const centerX = canvas.width/2, centerY = canvas.height/2
    const maxRadius = Math.min(centerX, centerY) - 40
    let progress = 0
    const draw = (p) => {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for(let i=1;i<=5;i++){ const r=(maxRadius/5)*i; ctx.beginPath(); ctx.arc(centerX,centerY,r,0,Math.PI*2); ctx.strokeStyle=`rgba(138,43,226,${0.1*i})`; ctx.lineWidth=1; ctx.stroke() }
      const step = (Math.PI*2)/radarData.length
      radarData.forEach((it,idx)=>{
        const ang = step*idx-Math.PI/2
        const x = centerX + Math.cos(ang)*maxRadius
        const y = centerY + Math.sin(ang)*maxRadius
        ctx.beginPath(); ctx.moveTo(centerX,centerY); ctx.lineTo(x,y); ctx.strokeStyle='rgba(0,229,255,0.3)'; ctx.stroke()
        const lx = centerX + Math.cos(ang)*(maxRadius+25)
        const ly = centerY + Math.sin(ang)*(maxRadius+25)
        ctx.fillStyle='#fff'; ctx.font='14px Roboto Mono'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(it.skill,lx,ly)
      })
      ctx.beginPath()
      radarData.forEach((it,idx)=>{
        const ang = step*idx-Math.PI/2
        const val = (it.value/100)*maxRadius*p
        const x = centerX + Math.cos(ang)*val
        const y = centerY + Math.sin(ang)*val
        if(idx===0) ctx.moveTo(x,y); else ctx.lineTo(x,y)
      })
      ctx.closePath()
      const g = ctx.createRadialGradient(centerX,centerY,0,centerX,centerY,maxRadius)
      g.addColorStop(0,'rgba(0,229,255,0.3)'); g.addColorStop(1,'rgba(138,43,226,0.3)')
      ctx.fillStyle=g; ctx.fill(); ctx.strokeStyle='#00E5FF'; ctx.lineWidth=2; ctx.stroke()
    }
    const anim = () => { progress=Math.min(1,progress+0.02); draw(progress); if(progress<1) requestAnimationFrame(anim) }
    anim()
  }, [isInView])

  return (
    <section id="skills" ref={ref} className="min-h-[50vh] py-12 px-4 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{opacity:0,y:-20}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{t('skills.title')}</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0,scale:0.95}} animate={isInView?{opacity:1,scale:1}:{}} transition={{duration:0.6}} className="hidden md:flex justify-center">
            <canvas ref={canvasRef} width={320} height={320} className="rounded-xl" />
          </motion.div>
          <div className="space-y-4 md:pl-6 text-center md:text-left">
            {[
              { title: lang==='zh' ? 'AI 技能' : 'AI', skills:['LLM','LangChain','OpenAI SDK','Prompt Engineering'] },
              { title: lang==='zh' ? '编程' : 'Programming', skills:['Python','JavaScript','TypeScript','Node.js'] },
              { title: lang==='zh' ? '前端' : 'Frontend', skills:['React','Next.js','Tailwind','Framer Motion'] },
              { title: lang==='zh' ? '工具' : 'Tools', skills:['Vercel','GitHub','Docker','VSCode'] },
            ].map(c => (
              <div key={c.title} className="glass p-5 rounded-lg hover:border-neon-blue/40 transition">
                <h3 className="font-orbitron font-bold text-neon-blue mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-2">{c.skills.map(s => <span key={s} className="px-2 py-1 text-sm border border-gray-700 rounded-full">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
