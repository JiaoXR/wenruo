# 🤖 产品需求文档（PRD）——AI自由职业者个人网站

## 一、项目概述

**项目名称：** AI Mind / CodeNova / JiaoAI（可选）
**项目类型：** 个人简介展示网站
**主要目标：**
打造一个**纯前端、简洁且科技感十足**的个人网站，用于展示个人在 **AI编程、智能体开发** 领域的专业能力、项目经验与联系方式，提升专业形象与品牌认知。

---

## 二、产品定位

| 项目       | 内容                         |
| -------- | -------------------------- |
| **目标用户** | 潜在客户、AI相关企业、开发者同行          |
| **核心目标** | 展示专业能力，传达科技氛围，建立信任与品牌      |
| **风格定位** | 简洁科技风（低饱和色系 + 动态光效 + 流畅动效） |
| **技术要求** | 纯前端实现，无需后端接口               |
| **展示语言** | 中英双语可选（默认英文界面 + 中文切换）      |

---

## 三、页面结构

### 1️⃣ 首页（Hero / Landing）

**功能与内容：**

* 动态文字介绍，例如：

  ```
  Hi, I’m Ranch Jiao.
  I build AI systems that think, learn, and create.
  ```
* 粒子或霓虹线条背景（Canvas / Three.js）
* 按钮导航（About / Projects / Contact）
* 支持滚动或滑动动画进入下一区块

**交互与特效：**

* 鼠标移动带动背景光流
* 首屏文字淡入淡出动画
* “进入页面”箭头轻微上下浮动

---

### 2️⃣ 关于我（About）

**内容：**

* 简短介绍（中/英文）：

  > 自由职业者，专注 AI 编程、智能体开发与系统集成，探索人机协作的未来。
  > Freelancer focused on AI coding, intelligent agents, and autonomous systems.

* 技能标签（AI / Python / LangChain / OpenAI API / Frontend AI UI）

* 头像（带微光边框或动态呼吸光环）

**动画：**

* 元素进入时滑动与淡入
* 鼠标悬停技能标签时高亮发光

---

### 3️⃣ 项目作品（Projects）

**内容示例：**

| 项目名称          | 技术栈                      | 简介            |
| ------------- | ------------------------ | ------------- |
| **ChatAgent** | LangChain + OpenAI API   | 定制化AI聊天智能体平台  |
| **VisionBot** | Python + FastAPI + React | 图像理解与自动化分析系统  |
| **AutoCoder** | GPT API + CodeGen        | 自动代码生成与文档辅助工具 |

**展示形式：**

* 卡片式布局（悬浮时微微放大 + 发光边）
* 可点击跳转到 GitHub / Demo / Medium 文章

---

### 4️⃣ 技能展示（Skills）

**形式：**

* 动态技能图谱 / 环形技能雷达图
* 每个技能带亮度变化效果
* 技能分组：

  * 🧠 AI 技能：LLM、LangChain、OpenAI SDK、Prompt Engineering
  * 💻 编程语言：Python、JavaScript、TypeScript
  * 🎨 前端框架：React、Next.js、Tailwind CSS
  * ⚙️ 工具链：Vercel、GitHub、Docker、VSCode

---

### 5️⃣ 联系方式（Contact）

**内容：**

* 邮箱（点击复制 / 打开默认邮件客户端）
* 社交链接（GitHub / LinkedIn / X / 微信二维码）
* 联系表单（静态实现，可使用第三方邮件服务如 Formspree）

**视觉与交互：**

* 按钮光晕动画
* 提交表单后显示成功提示 + 粒子散射动画

---

## 四、界面与风格指南

| 元素      | 建议                                              |
| ------- | ----------------------------------------------- |
| **主色调** | 电光蓝 (#00E5FF) / 霓虹紫 (#8A2BE2) / 深灰黑背景 (#0A0A0A) |
| **字体**  | `Orbitron`, `Roboto Mono`, 或 `Space Grotesk`    |
| **图标**  | 使用 `lucide-react` / `Phosphor Icons`            |
| **布局**  | 居中栅格 + 全屏滚动 / Smooth Scroll                     |
| **动画**  | 使用 `Framer Motion` 控制淡入、滑动、浮动效果                 |
| **响应式** | 适配桌面端 / 平板 / 手机端                                |

---

## 五、技术栈与实现方案

| 模块       | 技术选择                                    |
| -------- | --------------------------------------- |
| **框架**   | React + Vite / Next.js（静态导出）            |
| **动画**   | Framer Motion + Three.js（或简单 Canvas 粒子） |
| **样式**   | Tailwind CSS                            |
| **部署**   | Vercel / GitHub Pages（零配置上线）            |
| **内容管理** | 纯前端 JSON / Markdown 配置文件（无需后端）          |

---

## 六、性能与优化目标

| 指标            | 要求            |
| ------------- | ------------- |
| 首屏加载时间        | < 2 秒         |
| 页面交互帧率        | ≥ 60fps       |
| Lighthouse 得分 | ≥ 90（性能与可访问性） |
| 动画流畅度         | 各组件进出动画平滑，不抢眼 |

---

## 七、扩展与可选功能

* 🌓 **主题切换**（Dark / Light）
* 🧠 **AI 介绍语生成**（使用静态嵌入的小型AI文本生成）
* 🌐 **中英文切换**
* 📊 **访客统计（使用前端计数器 + LocalStorage）**
* 🎵 **可选背景音乐 / 语音问候**

---

## 八、项目计划

| 阶段    | 时间    | 产出                  |
| ----- | ----- | ------------------- |
| UI 设计 | 第1周   | 页面原型与色彩方案           |
| 前端开发  | 第2~3周 | 主要页面与交互效果实现         |
| 优化与部署 | 第4周   | 响应式、动画流畅度、Vercel 部署 |
| 发布展示  | 第5周   | 上线个人品牌主页            |

---

## 九、展示风格参考

* [https://rauno.me/](https://rauno.me/) — 极简科技风
* [https://bruno-simon.com/](https://bruno-simon.com/) — 动态交互风格参考
* [https://midjourney.com/home](https://midjourney.com/home) — 色彩与布局灵感
* [https://vercel.com/templates](https://vercel.com/templates) — 部署模板参考

---

## 🔟 总结

这将是一个：

> “**简洁、前卫、科技感十足的个人AI名片网站**。”

它的核心特征：

* 无需后端服务
* 前端即内容（静态化）
* 动效轻盈不花哨
* 聚焦“AI 编程 + 智能体开发”个人定位
* 一屏一世界的科技视觉体验
