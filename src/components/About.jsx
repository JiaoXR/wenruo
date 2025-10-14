import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp, Rocket } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const keywords = [
    { text: 'AI编程', size: 'text-5xl', color: 'text-neon-blue', delay: 0.1 },
    { text: '智能体开发', size: 'text-4xl', color: 'text-neon-purple', delay: 0.2 },
    { text: '8年经验', size: 'text-4xl', color: 'text-neon-blue', delay: 0.15 },
    { text: '小组Leader', size: 'text-3xl', color: 'text-cyan-400', delay: 0.25 },
    { text: '杭州', size: 'text-3xl', color: 'text-purple-400', delay: 0.3 },
    { text: '公众号', size: 'text-2xl', color: 'text-blue-400', delay: 0.35 },
    { text: '小红书7K+', size: 'text-3xl', color: 'text-pink-400', delay: 0.4 },
    { text: 'AI绘画', size: 'text-2xl', color: 'text-cyan-300', delay: 0.45 },
    { text: '10W+播放', size: 'text-3xl', color: 'text-purple-300', delay: 0.5 },
    { text: 'LangChain', size: 'text-2xl', color: 'text-blue-300', delay: 0.55 },
    { text: 'OpenAI', size: 'text-2xl', color: 'text-neon-blue', delay: 0.6 },
    { text: 'Claude', size: 'text-2xl', color: 'text-neon-purple', delay: 0.65 },
  ];

  const goals = [
    { icon: Target, title: '短期', desc: '找到适合的AI项目并变现', color: 'neon-blue' },
    { icon: TrendingUp, title: '中期', desc: '持续变现,收入超主业', color: 'purple-400' },
    { icon: Rocket, title: '长期', desc: '发展成一人公司', color: 'neon-purple' },
  ];

  return (
    <section id="about" ref={ref} className="py-16 px-4 bg-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              关于文若
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        {/* Avatar Section - Centered at Top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-10"
        >
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-md opacity-50 animate-pulse" />
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-neon-blue shadow-[0_0_20px_rgba(0,229,255,0.6)]">
              <img
                src="/avatar.png"
                alt="文若"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-5xl font-orbitron font-bold text-white mb-2">文若</h3>
          <p className="text-3xl text-neon-blue mb-5">Wenruo</p>
        </motion.div>

        {/* Personal Info Module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-dark-card/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 mb-10 shadow-[0_0_40px_rgba(0,229,255,0.1)] max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-orbitron font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
            👨‍💻 个人简介
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-6 py-3 bg-neon-blue/20 border-2 border-neon-blue/50 rounded-full text-neon-blue text-xl font-bold">
              📍 杭州
            </span>
            <span className="px-6 py-3 bg-neon-purple/20 border-2 border-neon-purple/50 rounded-full text-neon-purple text-xl font-bold">
              💼 8年编程经验
            </span>
            <span className="px-6 py-3 bg-cyan-500/20 border-2 border-cyan-500/50 rounded-full text-cyan-400 text-xl font-bold">
              👔 小组Leader
            </span>
            <span className="px-6 py-3 bg-pink-500/20 border-2 border-pink-500/50 rounded-full text-pink-400 text-xl font-bold">
              🤖 AI编程专家
            </span>
            <span className="px-6 py-3 bg-purple-500/20 border-2 border-purple-500/50 rounded-full text-purple-400 text-xl font-bold">
              🧠 智能体开发者
            </span>
          </div>
        </motion.div>

        {/* Keyword Cloud Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-card/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-700/50 mb-10 shadow-[0_0_40px_rgba(0,229,255,0.1)] max-w-5xl mx-auto"
        >
          <h3 className="text-4xl font-orbitron font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
            🚀 技能 · 经历 · 成就
          </h3>
          <div className="flex flex-wrap gap-6 justify-center items-center min-h-[280px]">
            {keywords.map((keyword, index) => (
              <motion.span
                key={keyword.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: keyword.delay,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.15, rotate: Math.random() * 10 - 5 }}
                className={`${keyword.size} ${keyword.color} font-bold cursor-default select-none opacity-90 hover:opacity-100 transition-all drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]`}
                style={{
                  transform: `rotate(${Math.random() * 20 - 10}deg)`,
                }}
              >
                {keyword.text}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Goals Section - Centered Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-4xl font-orbitron font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
            🎯 目标规划
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="group bg-dark-card/50 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-700 hover:border-neon-blue transition-all duration-300 transform hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-xl bg-${goal.color}/20 border-2 border-${goal.color}/50 mb-5`}>
                      <Icon className={`w-10 h-10 text-${goal.color}`} />
                    </div>
                    <h4 className={`text-3xl font-orbitron font-bold mb-4 text-${goal.color}`}>
                      {goal.title}
                    </h4>
                    <p className="text-lg text-gray-300 leading-relaxed">{goal.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
