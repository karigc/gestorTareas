const path = require('path');

module.exports = {
    entry: './src/index.js', //PUNTO DE ENTRADA DE LA APP
    output: { //PUNTO DE SALIDA
        filename: 'bundle.js', //NOMBRE DEL ARCHIVO DE SALIDA
        path: path.resolve(__diraname, 'dist'),//CARPETA DE SALIDA 
    },
    module: { 
    rules: [
        {
            test: /\.css$/, //REGEX PARA IDENTIFICAS ARCHIVOS CSS
            use: ['style-loader', 'css-loader'],// LIBRERIAS PARA PROCESAR ARCHIVOS CSS
        },
        {
            test: /\.js$/,//PARA IDENTIFICAR ARCHIVOS JAVASCRIPT
            exclude: /node_modules/, //EXCLUIR LA CARPETA NODE_MODULES
            use: {
                loader: 'babel-loader', // LOADER PARA LLEVAR JS MODERNO A JS ANTIGUO PARA QUE SEA COMPATIBLE CON TODOS LOS NAVEGADORES 
                options:{
                    presets: ['@babel/preset-env'],
                },
           },
        },
    ],

},
  devtool: 'source-map', //GENERA SOURCES MAPS PARA FACILITAR LA DEPURACION
  devServer:{
    contentbase: path.resolve(__dirname, 'dist'), // CARPETA DESDE CUAL EL SERVIDPR AGARRARA LOS ARCHIVOS
    compress: true,// HABILITANDO LA COMPRESION GZIP
    port: 9000,// PUERT DEL SERVIDOR DE DESARROLO
  },
};