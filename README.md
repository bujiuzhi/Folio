<div align="center">
  <img src="assets/brand/folio.png" width="72" height="72" alt="">
  <h1>Folio · 简页</h1>
  <p>本地文件工作台。写 Markdown、改代码、给文档做笔记，也能用 SSH 连服务器。</p>
  <p><a href="https://bujiuzhi.github.io/Folio/">官网</a> · <a href="https://github.com/bujiuzhi/Folio/releases/tag/v0.1.7">下载 v0.1.7</a> · <a href="https://bujiuzhi.github.io/Folio/assets/video/folio.mp4?v=promo2">53 秒产品宣传片</a></p>
  <p><a href="README.md">中文</a> · <a href="README.en.md">English</a></p>
</div>

## 下载与安装

| 平台 | 安装包 | 怎么装 |
| --- | --- | --- |
| macOS | [Apple 芯片](https://github.com/bujiuzhi/Folio/releases/download/v0.1.7/Folio_0.1.7_aarch64.dmg) · [Intel](https://github.com/bujiuzhi/Folio/releases/download/v0.1.7/Folio_0.1.7_x64.dmg) | 打开 DMG，把 Folio 拖进「应用程序」。 |
| Windows x64 | [安装程序](https://github.com/bujiuzhi/Folio/releases/download/v0.1.7/Folio_0.1.7_x64-setup.exe) | 运行下载的 EXE。 |
| Linux x64 | [DEB](https://github.com/bujiuzhi/Folio/releases/download/v0.1.7/Folio_0.1.7_amd64.deb) · [AppImage](https://github.com/bujiuzhi/Folio/releases/download/v0.1.7/Folio_0.1.7_amd64.AppImage) | 用包管理器安装 DEB，或给 AppImage 执行权限后直接运行。 |

已安装 v0.1.1 或更新版本，可到「偏好设置 → 外观 → 检查更新」升级。v0.1.0 预览版请下载安装包。

## 六个常用操作

<table>
  <tr><th width="33%">粘贴识别</th><th width="33%">Markdown 排版</th><th width="33%">Excalidraw 绘图</th></tr>
  <tr><td><img src="assets/screenshots/draft.jpg" alt="粘贴识别"></td><td><img src="assets/screenshots/markdown-poster.jpg" alt="Markdown 排版"></td><td><img src="assets/screenshots/drawing-poster.jpg" alt="Excalidraw 绘图"></td></tr>
  <tr><td>点「新建草稿」后粘贴 Markdown、JSON、YAML 或代码。识别后自动排版或高亮，右下角可切换格式，缩进可用「格式化」整理。</td><td>标题、表格和待办随编辑更新。也可以切到源码或思维导图。</td><td>从工具栏打开画布，或在 Markdown 中插入绘图。保存后回到正文看图。</td></tr>
</table>

<table>
  <tr><th width="33%">主机管理</th><th width="33%">SSH 终端</th><th width="33%">SFTP 传文件</th></tr>
  <tr><td><img src="assets/screenshots/hosts.png" alt="主机管理"></td><td><img src="assets/screenshots/ssh-terminal.png" alt="SSH 终端"></td><td><img src="assets/screenshots/remote-poster.jpg" alt="SFTP 传文件"></td></tr>
  <tr><td>在「远程」按名称、地址或分组找主机，从同一行打开 SSH 或 SFTP。</td><td>点主机旁的「连接」打开终端标签。常用命令可以存成脚本。</td><td>为不同主机打开各自的 SFTP 标签，在本机和服务器之间上传或下载。</td></tr>
</table>

[在官网切换查看六张截图](https://bujiuzhi.github.io/Folio/#workbench)

## 功能清单

| 功能 | 用法 |
| --- | --- |
| 草稿和代码 | 从「新建草稿」粘贴文本，自动识别并高亮。编辑器支持格式化、查找替换、跳行和编码切换。 |
| Markdown 与绘图 | 打开 Markdown 实时排版，可切换源码和思维导图。点画笔打开 Excalidraw，也可以把画布插入笔记。 |
| SSH 和 SFTP | 从「远程」按分组管理主机、保存常用脚本，同时打开多台主机的终端和文件传输标签。 |
| 文件与 Git | 打开文件夹后按名称或正文搜索。保存前可查看文件差异，也能查看历史版本。在 Git 工作区可暂存、提交、拉取和推送。 |
| Office 与导图 | 预览 Word、Excel、图片和 XMind。打开 XMind 后可拖动画布、滚轮缩放。可编辑 Word 普通正文、Excel 已有的普通单元格和 XMind 主题标题。 |
| PDF 和 EPUB 阅读 | 选中文字记笔记，留空保存就是划线。点高亮在右侧看笔记，可跳回原文，也可把整本书的划线按页或章节导出为 XMind。 |
| Markdown 导出 | 在「文档选项 → 导出」选择 Word、网页、PDF 或含图片的 ZIP。鼠标移到正文图片上可以设置宽度。 |
| 本地终端与 SSH 隧道 | 从项目目录启动 Shell，在远程工作台管理本地、远程和动态 SOCKS 转发规则。 |
| AI 对话 | 配置兼容的模型 API 后，在编辑器旁提问。先看建议的文件差异，再决定是否应用。 |

新手可以从工作区的「示例 → 阅读」打开带划线、笔记和脑图的样例。同步同一个工作区文件夹时，阅读标注、主题和字体随 `.folio` 一起带走，已加密的 SSH 和模型配置用原口令解锁。

Folio 用系统 WebView 显示界面，公式和图表按需加载，文件索引在后台建立。

## v0.1.7 更新

- 顶部新建按钮和文件树空白处的右键菜单在工作区根目录创建。右键子目录时，也可以直接选择「在工作区根目录新建文件夹」。
- 文件夹可拖动排序和跨层移动。把「示例」里的子目录拖到工作区标题或文件树空白处，即可移到根目录。
- 文件右键改为「在文件管理器中显示」。macOS 和 Windows 会选中文件，Linux 会打开所在目录。

[发行说明](https://github.com/bujiuzhi/Folio/releases/tag/v0.1.7) · [SHA-256 校验文件](https://github.com/bujiuzhi/Folio/releases/download/v0.1.7/SHA256SUMS.txt)

## 反馈

遇到问题可提交 [Bug 反馈](https://github.com/bujiuzhi/Folio/issues/new?template=bug-report.md)，也可提交 [功能建议](https://github.com/bujiuzhi/Folio/issues/new?template=feature-request.md)。
