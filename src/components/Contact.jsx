import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, Copy, Check } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const email = 'wenruo@example.com';

  const socialLinks = [
    {
      name: '微信',
      icon: Mail,
      url: '#',
      color: '#00E5FF',
      description: '添加微信交流'
    },
    {
      name: '小红书',
      icon: Linkedin,
      url: '#',
      color: '#8A2BE2',
      description: '关注我的小红书'
    },
    {
      name: '视频号',
      icon: Twitter,
      url: '#',
      color: '#00E5FF',
      description: 'AI绘画/视频内容'
    },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with a service like Formspree
    setFormStatus('success');
    setTimeout(() => setFormStatus(''), 3000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" ref={ref} className="py-12 px-4 bg-gradient-to-b from-dark-card/50 to-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              联系我
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 text-base font-roboto-mono max-w-2xl mx-auto">
            一起探讨AI编程与智能体的可能性
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-blue">
                联系方式
              </h3>

              {/* Email */}
              <div className="bg-dark-card/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-neon-blue transition-all duration-300 mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-neon-blue/20 rounded-lg">
                      <Mail className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-roboto-mono">Email</p>
                      <a
                        href={`mailto:${email}`}
                        className="text-white hover:text-neon-blue transition-colors duration-300 font-roboto-mono"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 hover:bg-neon-blue/20 rounded-lg transition-all duration-300 group"
                    title="Copy email"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400 group-hover:text-neon-blue" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-purple">
                社交平台
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 bg-dark-card/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700 hover:border-neon-blue transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                    >
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor: `${social.color}20`,
                        }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: social.color }}
                        />
                      </div>
                      <span className="text-white group-hover:text-neon-blue transition-colors duration-300 font-roboto-mono text-sm">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-neon-purple transition-all duration-300">
              <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-purple">
                留言
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-roboto-mono text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 bg-dark-bg/50 border border-gray-700 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 text-white font-roboto-mono text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-roboto-mono text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 bg-dark-bg/50 border border-gray-700 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 text-white font-roboto-mono text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-roboto-mono text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="3"
                    className="w-full px-3 py-2 bg-dark-bg/50 border border-gray-700 rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 text-white font-roboto-mono text-sm resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white text-sm hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300 transform hover:scale-[1.02] font-roboto-mono"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-400 font-roboto-mono"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-gray-500 font-roboto-mono"
        >
          <p className="text-sm">© 2025 文若 (Wenruo). Built with React + Vite + Tailwind CSS</p>
          <p className="mt-1 text-xs">AI编程 · 智能体开发 · 持续探索</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
