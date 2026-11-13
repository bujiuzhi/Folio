<div align="center">
  <img src="folio.png" width="88" height="88" alt="">
  <h1>Folio · 简页</h1>
  <p><strong>本地笔记与代码工作台</strong></p>
  <p>写 Markdown、查项目文件，也可以在同一个窗口打开 SSH 终端、用 SFTP 传文件。</p>
  <p>
    <a href="https://github.com/bujiuzhi/Folio/releases/download/v0.1.0/Folio_0.1.0_aarch64.dmg"><strong>下载 macOS 版</strong></a>
    · <a href="https://github.com/bujiuzhi/Folio/releases/download/v0.1.0/Folio_0.1.0_x64-setup.exe"><strong>下载 Windows 版</strong></a>
    · <a href="https://bujiuzhi.github.io/Folio/#demo">观看 54 秒演示</a>
    · <a href="https://github.com/bujiuzhi/Folio/releases">发行记录</a>
  </p>
  <p><sub>v0.1.0 预览版 · macOS Apple Silicon / Windows x64</sub></p>
  <a href="https://bujiuzhi.github.io/Folio/#demo">
    <img src="poster.png" width="920" alt="Folio 操作演示封面，点击观看视频">
  </a>
</div>

## 在 Folio 里做什么

<table>
  <tr>
    <th width="33%">写笔记</th>
    <th width="33%">画流程</th>
    <th width="33%">连接服务器</th>
  </tr>
  <tr>
    <td><img src="markdown-poster.jpg" alt="Folio 的 Markdown 源码视图"></td>
    <td><img src="drawing-poster.jpg" alt="嵌入 Markdown 笔记的绘图预览"></td>
    <td><img src="remote-poster.jpg" alt="SFTP 的本机和远程文件面板"></td>
  </tr>
  <tr>
    <td>在排版、源码和思维导图之间切换，直接编辑表格和待办。</td>
    <td>从笔记插入 Excalidraw 画布，画完保存，回到正文查看预览。</td>
    <td>核对主机指纹后打开 SSH 终端，用 SFTP 在本机和远端之间传文件。</td>
  </tr>
</table>

打开项目文件夹后，可以按文件名或正文搜索，给代码和配置做格式化，也可以在标签页查看 Word、Excel、图片和 PDF。文件被外部修改时，可以先看差异再决定怎么保存。

[浏览分段操作演示](https://bujiuzhi.github.io/Folio/#workflows)

## 下载与安装

1. 下载 Apple Silicon 版 DMG。发行页附有 `SHA256SUMS.txt`，可核对文件完整性。
2. 打开 DMG，将 **Folio.app** 拖到「应用程序」。
3. 打开 Folio，选择一个本地文件夹，或先新建草稿。

当前预览包采用临时签名，尚未通过 Apple 公证。macOS 可能阻止首次启动。

[下载 DMG](https://github.com/bujiuzhi/Folio/releases/download/v0.1.0/Folio_0.1.0_aarch64.dmg) · [查看发行说明与校验文件](https://github.com/bujiuzhi/Folio/releases/tag/v0.1.0)

**Windows x64**：下载并运行 [NSIS 安装程序](https://github.com/bujiuzhi/Folio/releases/download/v0.1.0/Folio_0.1.0_x64-setup.exe)。该包未签名，尚未完成 Windows 实机安装和启动验证。发行页提供 `SHA256SUMS-windows.txt`。
