# 🤖 AI Portfolio - Ranch Jiao

一个科技感十足的AI自由职业者个人网站,采用现代化前端技术栈构建。

## ✨ 特性

- 🎨 **科技风设计** - 霓虹蓝/紫配色 + 动态光效
- 🌊 **粒子动画** - Canvas粒子系统,支持鼠标交互
- 📱 **完全响应式** - 适配桌面/平板/手机
- ⚡ **流畅动画** - Framer Motion驱动的平滑过渡
- 🎯 **技能雷达图** - 动态Canvas雷达图展示技能
- 💬 **联系表单** - 内置静态联系表单
- 🌐 **中英双语** - 支持中英文内容展示

## 🛠️ 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **字体**: Orbitron + Roboto Mono

## 📦 安装

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 🚀 部署

### Vercel (推荐)

1. 将项目推送到GitHub
2. 在Vercel中导入项目
3. 自动部署完成

### GitHub Pages

```bash
# 构建项目
npm run build

# 部署到GitHub Pages
# 可以使用gh-pages包
npm install -g gh-pages
gh-pages -d dist
```

## 📁 项目结构

```
ai-portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # 首页英雄区
│   │   ├── About.jsx         # 关于我区块
│   │   ├── Projects.jsx      # 项目作品
│   │   ├── Skills.jsx        # 技能展示
│   │   └── Contact.jsx       # 联系方式
│   ├── App.jsx               # 主应用组件
│   ├── index.css             # 全局样式
│   └── main.jsx              # 应用入口
├── tailwind.config.js        # Tailwind配置
├── postcss.config.js         # PostCSS配置
└── vite.config.js            # Vite配置
```

## 🎨 自定义

### 修改配色

编辑 `tailwind.config.js`:

```js
colors: {
  'neon-blue': '#00E5FF',
  'neon-purple': '#8A2BE2',
  'dark-bg': '#0A0A0A',
  'dark-card': '#1A1A1A',
}
```

### 修改个人信息

1. **Hero区块** - `src/components/Hero.jsx`
2. **关于我** - `src/components/About.jsx`
3. **项目列表** - `src/components/Projects.jsx`
4. **技能列表** - `src/components/Skills.jsx`
5. **联系方式** - `src/components/Contact.jsx`

## 🌟 核心功能

### 1. 粒子系统 (Hero.jsx)
- Canvas 2D粒子动画
- 鼠标交互效果
- 粒子连接线动画

### 2. 技能雷达图 (Skills.jsx)
- Canvas绘制雷达图
- 动态数据展示
- 平滑动画效果

### 3. 平滑滚动
- 全局平滑滚动
- 锚点导航
- 视口内动画触发

## 📝 待办事项

- [ ] 添加暗色/亮色主题切换
- [ ] 集成真实的邮件服务(Formspree)
- [ ] 添加博客区块
- [ ] SEO优化
- [ ] 添加加载动画
- [ ] 集成Google Analytics

## 📄 许可证

MIT License

## 👤 作者

**Ranch Jiao**
- Email: ranch.jiao@example.com
- GitHub: [@ranchjiao](https://github.com)

---

⭐ 如果这个项目对你有帮助,请给它一个星标!
