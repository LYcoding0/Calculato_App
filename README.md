# 计算器应用 (Calculator App)

这是一个基于 React 和 Redux 构建的功能完整的计算器应用程序。该应用具有现代化的用户界面，并实现了基本的数学运算功能。

## 功能特点

- 基本数学运算：加法、减法、乘法、除法
- 数字输入和小数点支持
- 清除（AC）和删除（Del）功能
- 实时显示计算过程和结果
- 响应式设计，适配不同屏幕尺寸

## 技术栈

- React 18
- Redux 状态管理
- React Router 路由管理
- Bootstrap 样式框架
- jQuery (用于 AJAX 请求)

## 项目结构

```
src/
├── components/
│   ├── contents/
│   │   ├── calculator/
│   │   │   ├── digitButton.jsx       # 数字按钮组件
│   │   │   └── operationButton.jsx   # 运算符按钮组件
│   │   ├── calculator.jsx            # 计算器主界面
│   │   ├── home.jsx                  # 主页
│   │   ├── login.jsx                 # 登录页面
│   │   ├── register.jsx              # 注册页面
│   │   └── notFound.jsx             # 404 页面
│   ├── app.jsx                      # 主应用组件
│   └── navBar.jsx                   # 导航栏组件
├── redux/
│   ├── actions.jsx                  # Redux action 类型定义
│   ├── reducer.jsx                  # Redux 状态处理逻辑
│   └── store.jsx                    # Redux 存储配置
└── index.js                         # 应用入口文件
```

## Redux 状态管理

应用使用 Redux 来管理计算器状态，包括：

- `currentOperand`: 当前操作数
- `lastOperand`: 上一个操作数
- `operation`: 当前选择的运算符
- `over`: 计算完成标志

支持的主要 Action 类型：
- `ADD_DIGIT`: 添加数字
- `DELETE_DIGIT`: 删除最后一位数字
- `CHOOSE_OPERATION`: 选择运算符
- `CLEAR`: 清除所有内容
- `EVALUATE`: 执行计算

## 使用方法

1. 克隆项目到本地：
   ```
   git clone https://github.com/LYcoding0/Calculato_App.git
   ```

2. 安装依赖：
   ```
   npm install
   ```

3. 启动开发服务器：
   ```
   npm start
   ```

4. 在浏览器中打开 http://localhost:3000 查看应用

## 可用脚本

- `npm start`: 启动开发服务器
- `npm test`: 运行测试
- `npm run build`: 构建生产版本
- `npm run eject`: 弹出配置文件（不可逆操作）

## 浏览器支持

应用支持所有现代浏览器，包括：
- Chrome
- Firefox
- Safari
- Edge

## 部署

使用 `npm run build` 命令可以构建生产版本，生成的文件位于 `build/` 目录中，可直接部署到任何静态文件服务器上。
