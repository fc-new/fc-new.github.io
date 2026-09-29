# 付晨阳 · Chenyang Fu

中英双语学术主页，使用静态 HTML、CSS 和 JavaScript。

- 主页地址：https://fc-new.github.io/
- GitHub 仓库：https://github.com/fc-new/fc-new.github.io
- 发布来源：`main` 分支的根目录 `/`

## 发布设置

在仓库 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**，分支设为 **main**、目录设为 **/ (root)**。保留 `.nojekyll`，无需安装依赖或手动编译。后续向 `main` 提交修改，GitHub Pages 会自动重新发布。

保留仓库名 `fc-new.github.io` 和当前 GitHub 用户名，即可继续使用这个主页地址。保持仓库公开，开启 **Enforce HTTPS**。没有使用临时隧道、付费域名或需要持续运行的本地服务器。

## 日常更新

- **个人链接**：编辑 `content.js` 中的 `PROFILE`；尚未填写的 Google Scholar 链接自动隐藏。
- **中英文字内容**：同步更新 `content.js` 的 `zh` / `en` 字典；`index.html` 中的中文是 JavaScript 不可用时的备用正文。
- **论文状态**：在 `content.js` 及 `index.html` 中更新对应的状态。目前采用简历中的保守投稿表述。
- **论文和项目链接**：编辑 `index.html` 中相应的链接。
- **个人头像**：替换 `assets/chenyang-fu-avatar.png`；主页保留完整画面，不做圆形裁切。
- **简历下载**：替换 `assets/chenyang-fu-cv.pdf`，保持文件名不变。
- **配色和布局**：编辑 `styles.css`。

## 本地预览

在本目录执行 `python3 -m http.server 8765`，然后访问 `http://localhost:8765`。主要内容也可直接用浏览器打开 `index.html`；邮箱复制功能以 HTTPS 或本地服务器预览为准。

## 设计与资源

视觉参考：https://prozhang-gr.github.io/ 。页面结构、样式及研究主题示意图针对本人经历重新实现。研究示意图用于说明主题，不是原论文实验图。

Fraunces 字体随站点本地提供；授权文件位于 `assets/fonts/OFL.txt`。没有外部脚本或字体 CDN 依赖。
