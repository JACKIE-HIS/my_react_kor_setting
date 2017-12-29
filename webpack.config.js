// 모듈 : 구현 세부사항을 캡슐화하고 공개 API를 노출해 다른 코드에서 로드하고
// 사용할 수 있도록 재사용 가능한 코드 조각

// 모듈 포맷 : 모듈을 정의하기 위해 사용하는 문법
// 과거에 사용하던 모듈 포맷에는 AMD, CommonJS, UMD, System.register,
// ES6부터 내장된 모듈포맷을 사용할 수 있다.

// 모듈 로더 :모듈 포맷으로 작성된 모듈을 런타임때 로드하고 해석한다.
// RequireJS와 SystemJS

// 모듈 번들러 : 모듈로더를 대체하고 빌드타임에 모든 코드의 번들을 생성한다.
// Webpack(AMD, CommonJS, ES6 모듈을 위한 번들러)
// Browserify(CommonJS 모듈을 위한 번들러)

/* 번들링

디렉토리 구조
Directory
ㄴ index.js
ㄴ a.js
ㄴ b.js
ㄴ sytle.css
ㄴ c.js

index.js 파일 내용
  require('./style.css')
  require('./a.js')
  require('./b.js')

a.js 파일 내용
  var React = require('React')
  React.createClass({
   ....
})

webpack을 이용해서 bundle.js 를 만들게 되면

  bundle.js 파일의 내용
    style.css 파일내용
    a.js+React의 파일내용
    b.js 파일내용

플러그인 이용하여 webpack 이외에 기능들을 사용할 수 있다.

webpack은 필요에 맞게 설정파일(webpack.config.js)을 이용하여 셋팅을 한다.
*/
var webpack = require('webpack');

module.exports ={
  entry:'./src/index.js',

  output: {
    path:__dirname+'/public/',
    filename:'bundle.js'
  },
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 4000,
    contentBase: __dirname + '/public/',
  },
  module:{
    loaders:[
      {
        test:/(\.js$|\.jsx$)/,
        loaders:['react-hot-loader', 'babel-loader?' +JSON.stringify({
          cacheDirectory: true,
          presets:['es2015','react']
        })],
        exclude:/node_modules/,
        // query:{
        //   cacheDirectory: true,
        //   presets:['es2015','react']
        }
    ]
  },


  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
};
