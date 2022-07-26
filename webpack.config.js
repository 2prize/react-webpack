const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development', 
    entry: './src/index.js',
    output: {
        filename:'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // 가지고 올 파일 정규식
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // 사용할 로더 이름
                },
            },
            {
				// 파일명이 .css로 끝나는 모든 파일에 적용
        test: /\.css$/,
				// 배열 마지막 요소부터 오른쪽에서 왼쪽 순으로 적용
				// 먼저 css-loader가 적용되고, styled-loader가 적용되어야 한다.
				// 순서 주의!
        use: ["style-loader", "css-loader"],
				// loader가 node_modules 안의 있는 내용도 처리하기 때문에
				// node_modules는 제외해야 합니다
        exclude: /node_modules/,
      },
      {
          test: /\.(svg|jpeg)$/,
          use: ['file-loader']
      },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html', // public/index.html 파일을 읽는다.
            filename: 'index.html' // output으로 출력할 파일은 index.html이다.
        }),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
    },
};