const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'axios', // Пример: транспилировать зависимость Axios
    // Добавьте другие зависимости, которые вам необходимо транспилировать
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7777', // Адрес вашего Laravel API
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
