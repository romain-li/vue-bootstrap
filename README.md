# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev或者npm start

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader). and [vue中文文档](http://cn.vuejs.org/api/) and [vue-router](http://router.vuejs.org/zh-cn/pipeline/hooks.html)


##常用方法

> data(){} 放置变量

> ready(){} 当页面加载完成去请求

> computed:{} 动态计算动态改变的值

> route:{} 设置路由的钩子函数

> components:{} 放置组件

> methods:{} 放置方法

> props:{} | [] 获取父组件的数据
>·
  //使用props传递数据时，要在使用子组件的地方绑定一下，然后在子组件的模版里才能使用
	
	如果不想用props，也可以在子组件里用this.$parent.父组件名来获取

> this.$parent访问父组件
> 
> this.$root访问跟实例
> 
> this.$children 访问子元素

###父链

> 使用$on()监听事件

> 使用$emit()在它上面触发事件

> 使用$dispatch()派发事件，时间沿着父链冒泡

	子组件派发事件，父组件用event接收或者用v-on监听

> 使用$broadcast()广播事件，事件向下传导给所有的后代

> 定义v-ref可以在js里直接访问子组件

