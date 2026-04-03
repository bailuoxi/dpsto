# 网站内容编辑指南

## 🎯 两种编辑方式

### 方式一：可视化编辑器（推荐）⭐

**访问地址：** 在浏览器中打开 `/editor` 页面

**使用步骤：**
1. 在浏览器地址栏输入：`http://你的网站地址/editor`
2. 在可视化界面中编辑各个区块的内容
3. 点击"生成代码文件"按钮，下载 `content.ts` 文件
4. 将下载的文件替换项目中的 `src/data/content.ts` 文件
5. 刷新主页面查看效果

**功能特点：**
- ✅ 可视化表单界面，无需编写代码
- ✅ 实时预览编辑内容
- ✅ 支持导入/导出配置
- ✅ 自动生成代码文件

---

### 方式二：直接编辑配置文件

**文件位置：** `src/data/content.ts`

适合熟悉代码的用户直接修改配置文件。

---

## 📝 可编辑的内容区块

### 1️⃣ 特色服务 (servicesData)

修改4个服务卡片的内容：

```typescript
export const servicesData = [
  {
    image: '图片URL',           // 服务卡片的图片链接
    title: '翻译本地化',         // 服务标题
    description: '服务描述...',  // 服务详细说明
  },
  // ... 共4个服务卡片
];
```

**编辑示例：**
```typescript
{
  image: 'https://your-image-url.com/service1.jpg',
  title: '专业翻译',
  description: '我们提供高质量的游戏翻译服务，确保准确传达游戏内容。',
}
```

---

### 2️⃣ 关于我们 (aboutData)

修改关于我们区块的段落内容：

```typescript
export const aboutData = {
  paragraphs: [
    '第一段文字...',
    '第二段文字...',
    '第三段文字...',
  ],
};
```

**说明：**
- 可以添加或删除段落
- 第一段会自动显示为较大字号

---

### 3️⃣ 服务流程 (processData)

修改5个流程步骤的内容：

```typescript
export const processData = [
  {
    step: 1,                    // 步骤编号
    title: '需求沟通',          // 步骤标题
    description: '步骤说明...', // 步骤详细描述
  },
  // ... 共5个步骤
];
```

---

### 4️⃣ 服务优势 (advantagesData)

修改3个优势卡片的内容：

```typescript
export const advantagesData = [
  {
    title: '管理创新',          // 优势标题
    description: '优势说明...', // 优势详细描述
  },
  // ... 共3个优势
];
```

**注意：** 图标是固定的（灯泡、上升趋势、盾牌），如需更换图标请联系开发人员。

---

### 5️⃣ 联系方式 (contactData)

修改联系信息：

```typescript
export const contactData = {
  qrCodeImage: '',              // 微信二维码图片URL（留空显示占位符）
  phone: '138-0000-0000',       // 手机号码
  qq: '1234567890',             // QQ号
  email: 'contact@dpsto.com',   // 电子邮箱
};
```

**编辑示例：**
```typescript
export const contactData = {
  qrCodeImage: 'https://your-domain.com/qrcode.png',
  phone: '010-12345678',
  qq: '9876543210',
  email: 'info@dpsto.com',
};
```

---

### 6️⃣ 页脚版权 (footerData)

修改页脚版权信息：

```typescript
export const footerData = {
  copyright: '© 2026 迪普岛（北京）文化传播有限公司',
};
```

---

## 💡 编辑技巧

### ✅ 推荐做法

1. **备份原文件**：修改前先复制一份 `content.ts` 作为备份
2. **逐步修改**：一次修改一个区块，保存后查看效果
3. **保持格式**：注意保留引号、逗号等标点符号
4. **图片链接**：使用完整的 https:// 开头的图片URL

### ❌ 常见错误

1. **缺少逗号**：每个对象后面要有逗号
   ```typescript
   // ❌ 错误
   { title: '标题1', description: '描述1' }
   { title: '标题2', description: '描述2' }
   
   // ✅ 正确
   { title: '标题1', description: '描述1' },
   { title: '标题2', description: '描述2' },
   ```

2. **引号不匹配**：使用成对的单引号或双引号
   ```typescript
   // ❌ 错误
   title: '标题",
   
   // ✅ 正确
   title: '标题',
   ```

3. **删除必要字段**：不要删除 `title`、`description` 等字段名

---

## 🔄 修改后如何生效

1. 保存 `src/data/content.ts` 文件
2. 刷新浏览器页面
3. 新内容会自动显示

---

## 📞 需要帮助？

如果遇到以下情况，请联系开发人员：
- 需要添加或删除整个区块
- 需要更换图标
- 需要修改页面布局
- 修改后页面显示异常

---

## 📌 快速参考

| 区块 | 配置变量 | 位置 |
|------|---------|------|
| 特色服务 | `servicesData` | 第3部分 |
| 关于我们 | `aboutData` | 第2部分 |
| 服务流程 | `processData` | 第5部分 |
| 服务优势 | `advantagesData` | 第6部分 |
| 联系方式 | `contactData` | 第7部分 |
| 页脚版权 | `footerData` | 页面底部 |
