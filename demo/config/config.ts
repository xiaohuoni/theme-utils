import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'pc',
  conventionRoutes: {
    // 规定只有index文件会被识别成路由
    exclude: [
      /model\.(j|t)sx?$/,
      /\.test\.(j|t)sx?$/,
      /service\.(j|t)sx?$/,
      /models\//,
      /components\//,
      /services\//,
    ],
  },
});
