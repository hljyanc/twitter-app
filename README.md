# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## send request
request: get post put patch delete
service: const getUser = (params) => get('/user', params).then((res) => {
    return res;
});

## web service
json-server

## Five Steps to build React pages
第一步：将设计好的 UI 划分为组件层级
第二步：用 React 创建一个静态版本
第三步：确定 UI state 的最小（且完整）表示
第四步：确定 state 放置的位置
第五步：添加反向数据流

## 工程化配置信息:
- craco.config.js: webpack setup alias
- jsconfig.json: for vscode to use relevant setting