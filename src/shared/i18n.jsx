import { createContext, useContext, useMemo, useState, useEffect } from 'react'

const dict = {
  en: {
    nav: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    hero: {
      title: "Hi, I'm Wenruo",
      subtitle: '8-year engineer • AI coding • Agent developer',
      cta_about: 'About Me', cta_projects: 'View Projects', cta_contact: 'Contact'
    },
    about: {
      title: 'About Wenruo',
      intro: 'Freelancer focusing on AI coding, intelligent agents, and system integration.'
    },
    projects: { title: 'Projects' },
    skills: { title: 'Skills & Expertise' },
    contact: {
      title: 'Contact Me', info: 'Contact Info', socials: 'Social', message: 'Message', send: 'Send Message',
      footer: '© 2025 Wenruo. Built with React + Vite + Tailwind CSS', visits: 'Visits'
    },
  },
  zh: {
    nav: { about: '关于', projects: '项目', skills: '技能', contact: '联系' },
    hero: {
      title: '你好，我是文若',
      subtitle: '八年程序员 · AI编程专家 · 智能体开发者',
      cta_about: '关于我', cta_projects: '查看项目', cta_contact: '联系'
    },
    about: { title: '关于文若', intro: '自由职业者，专注 AI 编程、智能体开发与系统集成，探索人机协作的未来。' },
    projects: { title: '项目经历' },
    skills: { title: '技能与专长' },
    contact: {
      title: '联系我', info: '联系方式', socials: '社交平台', message: '留言', send: '发送',
      footer: '© 2025 文若. 使用 React + Vite + Tailwind 构建', visits: '访问次数'
    },
  }
}

const I18nContext = createContext({ lang: 'zh', t: (k) => k, setLang: () => {} })

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'zh')
  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = useMemo(() => (key) => {
    const parts = key.split('.')
    let cur = dict[lang]
    for (const p of parts) cur = cur?.[p]
    return cur ?? key
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() { return useContext(I18nContext) }
