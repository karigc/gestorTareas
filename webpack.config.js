const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', //PUNTO DE ENTRADA DE LA APP
    output: { //PUNTO DE SALIDA
        filename: 'bundle.js', //NOMBRE DEL ARCHIVO DE SALIDA
        path: path.resolve(__dirname, 'dist'),//CARPETA DE SALIDA 
    },
    module: { 
    rules: [
        {
            test: /\.css$/, //REGEX PARA IDENTIFICAS ARCHIVOS CSS
            use: ['style-loader', 'css-loader'],// LIBRERIAS PARA PROCESAR ARCHIVOS CSS
        },
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
              loader: 'babel-loader',
              options:{
                     presets: ['@babel/preset-env'],
               },
           },
        },
    ],

},
  devtool: 'source-map', //GENERA SOURCES MAPS PARA FACILITAR LA DEPURACION
  devServer: {
     static: {
         directory: path.resolve(__dirname,'dist'),
  },
    compress: true,// HABILITANDO LA COMPRESION GZIP
    port: 9000,// PUERT DEL SERVIDOR DE DESARROLO
  },
  };