# Obsidian → Songspace 发布流程

把准备公开的 Markdown 文件复制或同步到 `content/`。Vercel 每次收到 `main` 分支更新后会执行构建。

只有同时满足以下条件的笔记会发布：

```yaml
publish: true
draft: false
private: false
```

常用字段：`title`、`slug`、`category`、`tags`、`status`、`summary`、`updated`。其中 `status` 支持 `seed`、`budding`、`evergreen`。

正文中的 `[[笔记标题]]` 会转为站内链接，并自动生成反向链接。目标笔记也必须处于公开状态。

## 本地预览构建

```bash
npm run build
```

构建结果位于 `dist/`。私密内容只参与过滤测试，不会复制进该目录。
