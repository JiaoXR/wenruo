import { motion } from 'framer-motion'
import { useI18n } from '../shared/i18n.jsx'

export default function About() {
  const { t, lang } = useI18n()
  const keywords = lang === 'en'
    ? ['AI Coding','Agent Dev','8y experience','Team Lead','Hangzhou','Content Ops','AI Art','100k+ plays']
    : ['AI编程','智能体开发','8年经验','小组Leader','杭州','内容运营','AI绘画','10W+播放']

  return (
    <section id="about" className="py-10 px-4 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{duration:0.6}} className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{t('about.title')}</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 text-lg md:text-xl font-roboto-mono max-w-3xl mx-auto">{t('about.intro')}</p>
        </motion.div>

        <motion.div initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{ once: true }} transition={{duration:0.4, delay:0.1}} className="glass rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6">
            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3 rounded-full overflow-hidden border-2 border-neon-blue shadow-[0_0_16px_rgba(0,229,255,0.6)]">
              <img src="/wenruo.png" alt="Wenruo" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold">{lang==='en'?'Wenruo':'文若'} <span className="text-neon-blue text-base md:text-lg font-normal">{lang==='en'?'(Ranch Jiao)':''}</span></h3>
              <p className="mt-2 text-gray-300 text-sm md:text-base font-roboto-mono max-w-3xl">
                {lang==='en'
                  ? '8-year software engineer in Hangzhou; team lead. Focus on AI coding & agents.'
                  : '坐标杭州，8年程序员，做过小组Leader。专注 AI 编程与智能体开发。'}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:justify-start justify-center">
                <a href="mailto:ranchjiao@gmail.com" className="px-3 py-1 rounded-full border border-neon-blue/50 text-neon-blue text-xs font-roboto-mono hover:bg-neon-blue/15">✉️ ranchjiao@gmail.com</a>
                <span className="px-3 py-1 rounded-full border border-purple-400/40 text-purple-300 text-xs font-roboto-mono">📍 {lang==='en'?'Hangzhou':'杭州'}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center md:justify-between gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold">4</div>
              <div className="text-xs text-gray-400 mt-1">{lang==='zh'?'项目':'Projects'}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">7K+</div>
              <div className="text-xs text-gray-400 mt-1">{lang==='zh'?'小红书变现':'Xiaohongshu revenue'}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">10W+</div>
              <div className="text-xs text-gray-400 mt-1">{lang==='zh'?'视频播放':'Video plays'}</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex gap-4 overflow-auto no-scrollbar justify-center">
              {[
                lang==='zh'?'AI编程':'AI Coding',
                lang==='zh'?'智能体开发':'Agent Dev',
                lang==='zh'?'内容运营':'Content Ops',
                lang==='zh'?'视频号':'Video',
                lang==='zh'?'小红书':'RED',
                'Open Source',
              ].map((label) => (
                <div key={label} className="flex flex-col items-center min-w-16">
                  <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-xs">
                    <span className="opacity-90">{label.slice(0,3)}</span>
                  </div>
                  <div className="mt-2 text-[11px] text-gray-300">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{duration:0.6, delay:0.2}} className="glass rounded-2xl p-6">
          <h3 className="text-2xl font-orbitron font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{lang==='en' ? 'Keywords · Experience · Achievements' : '技能 · 经历 · 成就'}</h3>
          <div className="flex flex-wrap gap-3">
            {keywords.map(k => (
              <span key={k} className="px-3 py-1 bg-neon-blue/10 text-neon-blue border border-neon-blue/30 rounded-full text-sm font-roboto-mono hover:bg-neon-blue/20 transition-colors">{k}</span>
            ))}
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {[
              { t: lang==='en'?'Short-term':'短期', d: lang==='en'?'Find a good-fit AI project and monetize.':'找到适合的AI项目并变现。' },
              { t: lang==='en'?'Mid-term':'中期', d: lang==='en'?'Sustain monetization beyond main income.':'持续变现，收入超过主业。' },
              { t: lang==='en'?'Long-term':'长期', d: lang==='en'?'Grow into a one-person company.':'发展成一人公司。' },
            ].map(card => (
              <div key={card.t} className="p-4 rounded-xl border border-gray-700 bg-dark-bg/40">
                <h4 className="font-orbitron text-neon-blue mb-1">{card.t}</h4>
                <p className="text-gray-300 text-sm">{card.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
