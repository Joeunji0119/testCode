const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      //   바벨용 rules
      {
        test: /\.(js|jsx|ts|tsx)$/, // 해당 파일명으로 끝나면 babel-loader가 처리
        exclude: /node_modules/, // node_modules는 대상에서 제외
        loader: 'babel-loader', // 바벨 로더 추가
      },
      // CSS 처리 위한 설정
      {
        test: /\.scss$/, // SCSS 파일 처리
        use: ['style-loader', 'css-loader', 'sass-loader'], // 스타일, CSS, Sass 로더 사용
      },
    ],
  },
  // 다른 목적으로 플러그인을 여러 번 사용하도록 설정할 수 있으므로 new 연산자로 호출하여 플러그인의 인스턴스를 만들어야 합니다.
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // index.html 템플릿 설정
    }),
  ],

  resolve: {
    // resolve: import 할 때 확장자를 생략
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },

  optimization: {
    minimize: true, // 번들 최소화 설정
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    },
  },
};
