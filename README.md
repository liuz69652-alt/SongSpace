# Songspace · Growth OS

个人成长操作系统的无依赖静态站 MVP。直接打开 `index.html`，或在本目录启动任意静态服务器即可预览。

## 当前包含

- 五大成长系统入口：知识、英语、AI、个人成长、商业实践
- 可搜索与筛选的数字花园精选笔记
- 种子 / 萌芽 / 常青三种笔记生长状态
- “Now” 当前专注页面
- 私密空间说明与公开边界
- 响应式移动端布局

## Obsidian 发布约定

建议每篇可发布 Markdown 使用统一 YAML：

```yaml
---
title: 如何建立一个真正会生长的知识系统
area: 知识体系
tags: [知识管理, Obsidian]
status: evergreen # seed | budding | evergreen
publish: true
draft: false
private: false
updated: 2026-07-19
---
```

发布过滤必须遵循：仅当 `publish: true` 且 `draft !== true` 且 `private !== true` 时进入公开构建。不要把私密文件复制到网站的 public/static 目录；应在构建前完成过滤。

推荐 Obsidian 目录：

```text
/知识体系  /英语  /AI
/个人成长/健身  /个人成长/护肤  /个人成长/体态  /个人成长/工作
/商业  /Daily
```

## 下一阶段建议

1. 迁移到 Astro，并使用内容集合读取 Markdown/YAML。
2. 用 GitHub Actions 在 Obsidian 仓库更新后自动构建部署。
3. 接入 Pagefind 全文搜索和基于双链的图谱数据生成。
4. 私密驾驶舱使用独立数据源与服务端身份验证，避免仅靠前端隐藏。
