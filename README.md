# Sam Premium Portfolio

高级暗黑动态个人作品集网页，面向外企实习投递场景。技术栈为 Next.js、TypeScript、Tailwind CSS 和 Framer Motion。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 构建检查

```bash
npm run typecheck
npm run build
```

## 修改个人信息

所有静态个人信息集中在：

```text
data/profile.ts
```

可修改姓名、学校、专业、毕业时间、求职方向、技能、职业路线和联系方式。

## 部署

推荐部署到 Vercel：

1. 将项目推送到 GitHub。
2. 在 Vercel 导入仓库。
3. Framework 选择 Next.js。
4. 使用默认构建命令 `npm run build`。

也可部署到支持 Next.js 的平台，例如 Netlify、Cloudflare Pages 或自有服务器。

## 设计说明

- 暗黑高级背景：aurora gradient、subtle grid、soft radial glow、noise texture。
- Hero 首屏：大字号姓名、动态入场、求职定位、glow/border beam 按钮。
- 信息卡片：玻璃拟态、soft border、hover lift、轻微 3D tilt。
- 技能区：Bento Grid 展示通信、网络、技术支持、项目协作、文档、Office / Excel、Git / Linux、AI 应用落地探索。
- 职业路线：Technical Support、IT Support / Helpdesk、PMO / Project Intern、Solution / Delivery、FDE 方向探索。
- 移动端：降低布局复杂度，保持阅读清晰，并支持 reduced motion。
