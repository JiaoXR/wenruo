import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Brain, Code, Palette, Settings } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'AI Skills',
      icon: Brain,
      color: '#00E5FF',
      skills: ['LLM', 'LangChain', 'OpenAI SDK', 'Prompt Engineering'],
    },
    {
      title: 'Programming',
      icon: Code,
      color: '#8A2BE2',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Frontend',
      icon: Palette,
      color: '#00E5FF',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Tools',
      icon: Settings,
      color: '#8A2BE2',
      skills: ['Vercel', 'GitHub', 'Docker', 'VSCode'],
    },
  ];

  // Radar chart data
  const radarData = [
    { skill: 'AI/ML', value: 90 },
    { skill: 'Backend', value: 85 },
    { skill: 'Frontend', value: 88 },
    { skill: 'DevOps', value: 75 },
    { skill: 'Design', value: 70 },
  ];

  useEffect(() => {
    if (!canvasRef.current || !isInView) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 40;

    let animationProgress = 0;

    const drawRadarChart = (progress) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background circles
      for (let i = 1; i <= 5; i++) {
        const radius = (maxRadius / 5) * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(138, 43, 226, ${0.1 * i})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw axes
      const angleStep = (Math.PI * 2) / radarData.length;
      radarData.forEach((item, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const x = centerX + Math.cos(angle) * maxRadius;
        const y = centerY + Math.sin(angle) * maxRadius;

        // Draw axis line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw labels
        const labelX = centerX + Math.cos(angle) * (maxRadius + 25);
        const labelY = centerY + Math.sin(angle) * (maxRadius + 25);
        ctx.fillStyle = '#ffffff';
        ctx.font = '14px Roboto Mono';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(item.skill, labelX, labelY);
      });

      // Draw data polygon with animation
      ctx.beginPath();
      radarData.forEach((item, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const value = (item.value / 100) * maxRadius * progress;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.closePath();

      // Fill with gradient
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
      gradient.addColorStop(0, 'rgba(0, 229, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(138, 43, 226, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Stroke
      ctx.strokeStyle = '#00E5FF';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw data points
      radarData.forEach((item, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const value = (item.value / 100) * maxRadius * progress;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#00E5FF';
        ctx.fill();

        // Glow effect
        ctx.shadowColor = '#00E5FF';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const animate = () => {
      if (animationProgress < 1) {
        animationProgress += 0.02;
        drawRadarChart(animationProgress);
        requestAnimationFrame(animate);
      } else {
        drawRadarChart(1);
      }
    };

    animate();
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" ref={ref} className="min-h-screen py-20 px-4 bg-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-2xl opacity-20 animate-pulse" />
              <canvas
                ref={canvasRef}
                width={400}
                height={400}
                className="relative rounded-xl"
              />
            </div>
          </motion.div>

          {/* Skill Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-dark-card/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-neon-blue transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor: `${category.color}20`,
                          borderColor: category.color,
                          borderWidth: '2px',
                        }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: category.color }}
                        />
                      </div>
                      <h3
                        className="text-xl font-orbitron font-bold"
                        style={{ color: category.color }}
                      >
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-800/50 rounded-full text-sm font-roboto-mono text-gray-300 border border-gray-700 hover:border-neon-blue transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
