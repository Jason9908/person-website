# 图片资源说明

请将以下图片文件放置在此目录下：

## 必需的图片文件

1. **logo.jpg** - 网站头像（About区域展示）
   - 尺寸建议：300x300px 或更大
   - 格式：JPG
   - 用途：个人头像展示

2. **gzh.jpg** - 公众号二维码（Contact区域展示）
   - 尺寸建议：300x300px 或更大
   - 格式：JPG
   - 用途：公众号关注二维码

3. **wechat.jpg** - 微信二维码（Contact区域展示）
   - 尺寸建议：300x300px 或更大
   - 格式：JPG
   - 用途：个人微信添加二维码

## 路径说明

在网站中使用的是 `/img/文件名.jpg` 的路径，Vite会自动从 `public` 目录提供这些静态资源。

例如：
- 图片文件：`public/img/logo.jpg`
- 网站中使用：`/img/logo.jpg`

## 放置位置

```
PersonWeb/
├── public/
│   └── img/
│       ├── logo.jpg       ← 放这里
│       ├── gzh.jpg        ← 放这里
│       └── wechat.jpg     ← 放这里
└── src/
    └── ...
```
