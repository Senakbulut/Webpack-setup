const path = require('path')

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development' 
module.exports = {
    mode: 'production',
    entry: './src/index.js', //relative path
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,' public')
    },
    module:{
    
        rules:[
            {
                test: /\.js$/, //.js olanlara bakar
                exclude: /node_modules/, //node modules a bakma
                use:{
                    loader: 'babel-loader' // indirilen babel loader kullanılacak
                }
            }
        ]
    },
    devtool:'source-map', //kaynak kodları arasındaki ilişkiyi sağlıyor hangi nesne nereden geldi gibi
    devServer:{
        contentBase:'./public'
    }
}
//npm run build 
//package.json dosyasındaki --watch sayesinde buildi bir kez çalıştırınca her kaydettiğinde buil almış oluyor