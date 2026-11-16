<div align="center">
  <img src="folio.png" width="72" height="72" alt="">
  <h1>Folio</h1>
  <p>Write Markdown, edit code, and connect to servers over SSH in one window.</p>
  <p><a href="https://bujiuzhi.github.io/Folio/en.html">Website</a> · <a href="https://github.com/bujiuzhi/Folio/releases/tag/v0.1.5">Download v0.1.5</a> · <a href="https://bujiuzhi.github.io/Folio/folio.mp4">54-second demo</a></p>
  <p><a href="README.md">中文</a> · <a href="README.en.md">English</a></p>
</div>

## Download and install

| Platform | Installer | Installation |
| --- | --- | --- |
| macOS | [Apple silicon](https://github.com/bujiuzhi/Folio/releases/download/v0.1.5/Folio_0.1.5_aarch64.dmg) · [Intel](https://github.com/bujiuzhi/Folio/releases/download/v0.1.5/Folio_0.1.5_x64.dmg) | Open the DMG and drag Folio into Applications. |
| Windows x64 | [Installer](https://github.com/bujiuzhi/Folio/releases/download/v0.1.5/Folio_0.1.5_x64-setup.exe) | Run the downloaded EXE. |
| Linux x64 | [DEB](https://github.com/bujiuzhi/Folio/releases/download/v0.1.5/Folio_0.1.5_amd64.deb) · [AppImage](https://github.com/bujiuzhi/Folio/releases/download/v0.1.5/Folio_0.1.5_amd64.AppImage) | Install the DEB with your package manager, or make the AppImage executable and run it. |

For v0.1.1 and later, go to Preferences → Appearance → Check for Updates. If you have the v0.1.0 preview, download an installer.

## The workspace

<table>
  <tr><th width="33%">Paste and format</th><th width="33%">Live Markdown</th><th width="33%">Excalidraw</th></tr>
  <tr><td><img src="draft.jpg" alt="Paste and format"></td><td><img src="markdown-poster.jpg" alt="Live Markdown"></td><td><img src="drawing-poster.jpg" alt="Excalidraw"></td></tr>
  <tr><td>Paste Markdown, JSON, or code into a new draft. Folio renders Markdown or highlights recognized code. Use Format to fix indentation.</td><td>Headings, tables, and checklists update as you type. Switch to source or mind map view from the same note.</td><td>Open a canvas from the toolbar or insert a drawing into Markdown. Save it to see it in the note.</td></tr>
</table>

<table>
  <tr><th width="33%">Manage hosts</th><th width="33%">SSH terminal</th><th width="33%">SFTP transfers</th></tr>
  <tr><td><img src="hosts.png" alt="Manage hosts"></td><td><img src="ssh-terminal.png" alt="SSH terminal"></td><td><img src="remote-poster.jpg" alt="SFTP transfers"></td></tr>
  <tr><td>Find saved hosts in Remote by name, address, or group. Open SSH or SFTP from the host row.</td><td>Click Connect to open a terminal tab. Save commands you use often as scripts.</td><td>Open separate SFTP tabs for different hosts and upload or download files.</td></tr>
</table>

[Browse all six screenshots on the website](https://bujiuzhi.github.io/Folio/en.html#workbench)

## More features

| Feature | How it works |
| --- | --- |
| Files and Git | Open a folder and search by name or content. Review changes or open earlier versions. Stage, commit, pull, and push in Git workspaces. |
| Office and mind maps | Preview Word, Excel, images, and XMind. Drag the XMind canvas to pan or scroll to zoom. Edit plain Word paragraphs, existing ordinary Excel cells, and XMind topic titles. |
| PDF and EPUB reading | Highlight passages, add notes, and click a highlight to revisit it. Export highlights by page or chapter to XMind. |
| Markdown export | Choose Word, HTML, PDF, or ZIP with images from Document Options → Export. Hover over an image in the editor to set its width. |
| Local terminal and SSH tunnels | Start a shell in the project folder. Manage local, remote, and dynamic SOCKS forwarding rules in Remote. |
| AI chat | Connect a compatible model API and ask questions beside the editor. Review suggested file changes before applying them. |

Folio uses the system WebView, loads formula and diagram rendering on demand, and indexes files in the background.

## What's new in v0.1.5

- Highlight PDF and EPUB text, add notes and bookmarks, and export a reading map to XMind.
- Detect commented YAML or choose a different draft format from the notification.
- Restore bundled examples and back up the previous files from workspace settings.
- Fix WebView2 startup on affected Windows systems.

[Release notes and checksums](https://github.com/bujiuzhi/Folio/releases/tag/v0.1.5)
