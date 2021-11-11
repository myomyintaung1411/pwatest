
const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)

module.exports = {
    /* 部署应用包的基本URL */
    /* baseUrl 从 Vue CLI 3.3 起已弃用 ，请使用publicPath */
    //  baseUrl: process.env.NODE_ENV === "production" ? "./" : "./",
    publicPath: process.env.NODE_ENV === "production" ? "/pwatest" : "/",

    /* 生产环境构建文件的目录 defalut: dist */

    outputDir: "dist",

    /* 放置生成的静态文件目录（js css img） */

    assetsDir: "static",

    /* 指定生成的index.html 输出路径 相对 default: index.html */

    indexPath: "index.html",

    /* 指定生成文件名中包含hash default: true */

    filenameHashing: true,

    /* 多页模式下 */

    /* pages: {
   
      index: {
   
        // page 的入口
   
        entry: "src/index/main.js",
   
        // 模板来源
   
        template: "public/index.html",
   
        // 在 dist/index.html 的输出
   
        filename: "index.html",
   
        // 当使用 title 选项时，
   
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
   
        // title: "Index Page",
   
        // 在这个页面中包含的块，默认情况下会包含
   
        // 提取出来的通用 chunk 和 vendor chunk。
   
        chunks: ["chunk-vendors", "chunk-common", "index"]
   
      },
   
      // 当使用只有入口的字符串格式时，
   
      // 模板会被推导为 `public/subpage.html`
   
      // 并且如果找不到的话，就回退到 `public/index.html`。
   
      // 输出文件名会被推导为 `subpage.html`。
   
      // subpage: "src/subpage/main.js"
   
    } */

    /* 是否保存时 lint 代码 */

    lintOnSave: process.env.NODE_ENV === "production",

    /* 是否使用编译器 default: false */

    runtimeCompiler: false,

    /* 默认babel-loader会忽略node_modules中的文件，你想显示的话在这个选项中列出来 */

    // transpileDependencies: [],

    /* 生产环境的source map */

    productionSourceMap: false,

    // crossorigin: "",

    integrity: false,

    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'base': '@/base',
                'cube-ui': 'cube-ui/lib'
            }
        }
    },

    devServer: {
        port: 3000,
        https: false,
        // 自动启动浏览器
        open: true,
        proxy: {
            "/api": {
                // target: "http://106.12.198.234:8082/",
                //牙膏
                // target: "http://106.13.69.228:8081/",
                //uu
                target: "http://198.2.236.51:8082/",
                //91
                // target: "http://118.107.15.235:8082",
                //大公鸡
                // target: "http://148.163.165.95:8082/",
                //游戏
                // target: "http://128.14.46.58:8082/",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },

    css: {
        extract: IS_PROD,
        sourceMap: false,
        loaderOptions: {
            stylus: {
                'resolve url': false,
                'import': []
            }
        },
        requireModuleExtension: true
    },

    pluginOptions: {
        'cube-ui': {
            postCompile: false,
            theme: false
        }
    },

    pwa: {
        themeColor: "#4DBA87",
        msTileColor: "#42b983",
        appleMobileWebAppCache: "yes",
        background_color: "#000000",
        icons: [
          {
            'src': 'icons/android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png',
          },
          {
            'src': 'icons/android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png',
          },
        ],
        iconPaths: {
          favicon32: 'icons/favicon-32x32.png',
          favicon16: 'icons/favicon-16x16.png',
          appleTouchIcon: 'icons/apple-touch-icon-180x180.png',
          maskIcon: 'icons/safari-pinned-tab.svg',
          msTileImage: 'icons/mstile-144x144.png',
        },
         // configure the workbox plugin
         workboxPluginMode: 'InjectManifest',
         workboxOptions: {
             // swSrc is required in InjectManifest mode.
             swSrc: "src/service-worker.js"
             // ...other Workbox options...
         }
      },


};
