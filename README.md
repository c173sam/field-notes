# 徐念齐 Sam 个人作品集

一个面向外企实习投递的个人作品集网站，视觉参考来自用户提供的视频：深色技术感界面、红橙强调色、胶囊导航、长条经历卡片、点击展开详情和克制滚动动效。页面内容已全部替换为徐念齐 / Sam 的真实求职信息，不包含参考视频原作者的姓名、头像、联系方式、项目或独特文案。

## 技术栈

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## 本地运行

```bash
npm install
npm run dev
```

默认地址通常为：

```text
http://127.0.0.1:5173/
```

## 构建检查

```bash
npm run lint
npm run build
```

构建产物会输出到：

```text
dist/
```

如果部署到当前 GitHub Pages 项目站 `c173sam/field-notes`，请使用：

```powershell
$env:VITE_BASE='/field-notes/'; npm run build
```

## 修改个人信息

所有静态内容集中在：

```text
src/data/profile.ts
```

可在这里修改姓名、求职方向、联系方式、经历、项目、技能和 Career Focus。

头像或个人视觉素材放在：

```text
public/
```

当前使用的图片文件为：

```text
public/avatar.jpg
```

## 部署

### Vercel / Netlify

1. 推送仓库到 GitHub。
2. 在 Vercel 或 Netlify 中导入项目。
3. Build command 使用：

```bash
npm run build
```

4. Publish directory 使用：

```text
dist
```

### GitHub Pages

先执行：

```bash
npm run build
```

再将 `dist/` 目录内容发布到 GitHub Pages 对应分支或仓库。

## 内容原则

- 不虚构经历、公司、学校、证书或成果。
- 已实践能力和学习中能力分开表达。
- 求职定位聚焦 Technical Support、IT Support、PMO、Project Intern、Solution Intern 与 FDE 方向探索。
- 文案保持克制、可信、适合 HR 和技术面试官快速阅读。
