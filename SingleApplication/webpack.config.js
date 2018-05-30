const path = require('path');

module.exports = {
  entry: "./first-react-jsx.js",

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/bundle.js'
  },

  devtool: 'inline-source-map',

  module: {
   rules: [
     {
       test: /\.js$/,
       exclude: (/node_modules/),
       loader: ['babel-loader']
     },
     {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      },
     {
       test: /\.(png|jpg|gif)$/,
       use: [
         {
           loader: 'file-loader',
           options: {outputPath : 'images/img'}
         }
       ]
     }
   ]
 }
};
