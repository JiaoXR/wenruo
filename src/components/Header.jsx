import { useI18n } from '../shared/i18n.jsx'

export default function Header() {
  const { lang, setLang } = useI18n()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="relative max-w-6xl mx-auto px-4 h-14 flex items-center justify-center">
        <a href="#hero" className="font-orbitron text-white font-bold">{lang==='zh' ? '文若 Wenruo' : 'Wenruo'}</a>
        <nav className="hidden"></nav>
        <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="absolute right-4 px-3 py-1 text-xs border border-white/20 rounded hover:border-neon-blue">
          {lang === 'en' ? '中文' : 'EN'}
        </button>
      </div>
    </header>
  )
}
