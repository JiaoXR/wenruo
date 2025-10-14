import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      name: '公众号爆文写作',
      tech: 'AI写作 + 内容运营',
      description: '利用AI辅助创作高质量公众号文章',
      description_en: 'AI-assisted WeChat official account content creation',
      achievement: '变现约1K',
      github: '#',
      demo: '#',
      gradient: 'from-neon-blue to-cyan-400',
    },
    {
      name: '小红书虚拟资料',
      tech: '虚拟产品 + 运营策略',
      description: '小红书平台虚拟资料产品运营',
      description_en: 'Virtual product operations on Xiaohongshu',
      achievement: '变现7K+',
      github: '#',
      demo: '#',
      gradient: 'from-pink-500 to-neon-purple',
    },
    {
      name: 'AI绘画/AI视频',
      tech: 'Midjourney + Stable Diffusion + AI视频',
      description: 'AI生成内容创作与视频号运营',
      description_en: 'AI-generated content creation and video account operation',
      achievement: '视频号10W+播放',
      github: '#',
      demo: '#',
      gradient: 'from-neon-purple to-pink-500',
    },
    {
      name: 'AI编程智能体',
      tech: 'LangChain + OpenAI + Claude',
      description: '探索AI编程和智能体开发的实践项目',
      description_en: 'AI coding and agent development practice projects',
      achievement: '持续探索中',
      github: '#',
      demo: '#',
      gradient: 'from-cyan-400 to-neon-blue',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-16 px-4 bg-gradient-to-b from-dark-bg/80 to-dark-card/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-blue/15 rounded-full blur-3xl" />
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
              项目经历
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 text-2xl font-roboto-mono max-w-3xl mx-auto">
            探索AI的多种应用场景,持续实践与变现
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              <div className="relative bg-dark-card/90 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-gray-600 group-hover:border-neon-blue transition-all duration-500 transform group-hover:scale-[1.03] group-hover:shadow-[0_0_40px_rgba(0,229,255,0.4)]">
                {/* Card Header with gradient */}
                <div className={`h-3 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-8">
                  {/* Project Name */}
                  <h3 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-white group-hover:text-neon-blue transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Tech Stack */}
                  <div className="mb-5">
                    <span className={`inline-block px-4 py-2 text-lg font-roboto-mono font-semibold bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full border-2 border-current`}>
                      {project.tech}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mb-5">
                    <p className="text-xl text-gray-200 font-roboto-mono leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Achievement Badge */}
                  <div>
                    <span className="inline-block px-5 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border-2 border-neon-blue/50 rounded-full text-neon-blue font-roboto-mono text-lg font-bold">
                      📊 {project.achievement}
                    </span>
                  </div>
                </div>

                {/* Animated corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${project.gradient} opacity-30 blur-2xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
