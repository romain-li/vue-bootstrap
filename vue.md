#vue
>[参考文档](http://cn.vuejs.org/guide/components.html)
###父链
> 子组件可以用this.$parent访问它的父组件

> 后代可以用this.$root访问根实例
###自定义事件
> 使用 $on() 监听事件；

> 使用 $emit() 在它上面触发事件；

> 使用 $dispatch() 派发事件，事件沿着父链冒泡；

> 使用 $broadcast() 广播事件，事件向下传导给所有的后代。

###子组件索引
	v-ref为子组件指定一个索引id，父元素根据此id可以直接找到子元素
	
	<div id="parent">
		<user-profile v-ref:profile></user-profile>
	</div>
	var parent = new Vue({ el: '#parent' })
	// 访问子组件
	var child = parent.$refs.profile
	v-ref 和 v-for 一起用时，ref 是一个数组或对象，包含相应的子组件
###Slor将父元素的内容渲染到组件上

###动态组件
	多个组件可以使用同一个挂载点，然后动态的在他们之间切换，使用保留的<component>元素，动态地绑定到它的is特性
	<component :is="currentView">
	  <!-- 组件在 vm.currentview 变化时改变 -->
	</component>
#####keep-alive
	如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染，可以添加个keep-alive指令参数
	<component :is="currentView" keep-alive>
	  <!-- 非活动组件将被缓存 -->
	</component>
#####activate钩子
	在切换组件时，切入组件在切入前可能需要进行一些异步操作。为了控制组件切换时长，给切入组件添加 activate 钩子：
	


> prop允许外部环境传递数据给组件
> 事件允许组件触发外部环境的active
> slot允许外部环境插入内容到组件的视图结构内

异步组件：
	