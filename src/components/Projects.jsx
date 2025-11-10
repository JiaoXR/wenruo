import { motion } from 'framer-motion'
// grid cards; no external links/icons to keep IG-like minimal look
import { useI18n } from '../shared/i18n.jsx'

export default function Projects() {
  const { lang, t } = useI18n()
  const projects = [
    {
      name: lang==='en'?'WeChat Articles':'公众号爆文写作',
      tech: lang==='en'?'AI writing + Ops':'AI写作 + 内容运营',
      desc_en: 'AI-assisted creation of high-quality WeChat articles.',
      desc_zh: '利用 AI 辅助创作高质量公众号文章。',
      badge_en: '~1K revenue', badge_zh: '变现约1K',
      github: '#', demo: '#', gradient: 'from-neon-blue to-cyan-400',
    },
    {
      name: lang==='en'?'Xiaohongshu Virtual Goods':'小红书虚拟资料',
      tech: lang==='en'?'Virtual product + Ops':'虚拟产品 + 运营策略',
      desc_en: 'Virtual product operations on Xiaohongshu.',
      desc_zh: '小红书平台虚拟资料产品运营。',
      badge_en: '7K+ revenue', badge_zh: '变现7K+',
      github: '#', demo: '#', gradient: 'from-pink-500 to-neon-purple',
    },
    {
      name: lang==='en'?'AI Art / Video':'AI绘画 / AI视频',
      tech: 'Midjourney · SD · Video',
      desc_en: 'AI-generated content; shorts with 100k+ plays.',
      desc_zh: 'AI 生成内容创作，视频号 10W+ 播放。',
      badge_en: '100k+ plays', badge_zh: '10W+播放',
      github: '#', demo: '#', gradient: 'from-neon-purple to-pink-500',
    },
    {
      name: lang==='en'?'AI Coding Agents':'AI编程智能体',
      tech: 'LangChain · OpenAI · Claude',
      desc_en: 'Explorations in AI coding and agent tooling.',
      desc_zh: '探索 AI 编程与智能体开发的实践项目。',
      badge_en: 'ongoing', badge_zh: '持续探索中',
      github: '#', demo: '#', gradient: 'from-cyan-400 to-neon-blue',
    },
  ]

  const container = { hidden: {opacity:0}, visible: {opacity:1, transition: { staggerChildren: 0.1 } } }
  const item = { hidden: {opacity:0, scale: 0.98}, visible: {opacity:1, scale: 1, transition: { duration: 0.35 } } }

  return (
    <section id="projects" className="py-12 px-4 bg-gradient-to-b from-dark-bg/80 to-dark-card/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-blue/15 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{duration:0.6}} className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{t('projects.title')}</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          <div className="mt-6 inline-flex items-center gap-6 text-sm border-b border-white/10">
            <button className="pb-2 border-b-2 border-white/80">{lang==='zh'?'作品':'Posts'}</button>
            <button className="pb-2 text-white/50">{lang==='zh'?'标记':'Tagged'}</button>
          </div>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map(p => (
            <motion.a key={p.name} variants={item} href={p.demo||'#'} className="relative block group rounded-xl overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-70`} />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-end justify-center p-3">
                <div className="text-center">
                  <h3 className="font-orbitron font-bold text-white text-lg md:text-xl drop-shadow">{p.name}</h3>
                  <div className="mt-1 text-[11px] md:text-xs text-gray-200 font-roboto-mono">{p.tech}</div>
                  <div className="mt-2 inline-block px-2 py-0.5 rounded-full text-[10px] md:text-xs text-neon-blue border border-neon-blue/50 bg-neon-blue/10">
                    {lang==='en'?p.badge_en:p.badge_zh}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
     </div>
    </section>
  )
}
