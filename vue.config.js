//创建vue.config.js，主要是配置项目的一些公共信息
//1.vue.config.js名称是固定的
//2.项目打包的时候，会把这个vue.config.js合并到最终的js文件中
module.exports = {
    configureWebpack:{
        resolve:{   //配置路径相关的
            alias:{     //配置别名  @=>'src'是默认的
                'assets':"@/assets",     //'assets':"src/assets"
                'common':'@/common',
                'components':"@/components",
                'network':"@/network",
                'views':"@/views",
            }
        }
    }
}