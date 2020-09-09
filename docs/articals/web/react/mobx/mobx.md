### mobx
- mobx
- 状态管理
- react

在react中有一个非常轻量的mobx状态管理工具

### 环境搭建（react中）
#### 安装mobx和连接器mobx-react
```bash
yarn add mobx mobx-react -S
```
#### 安装两个Babel插件支持装饰器
```bash
yarn add @babel/plugin-proposal-decorators -D

yarn add @babel/plugin-proposal-class-properties -D
```
package.json中配置
```javascript
"babel": {
	"plugins": [
		["@babel/plugin-proposal-decorators", { "legacy":true }],
		["@babel/plugin-proposal-class-properties", {"loose":true}]
	],
    "presets": [
      "react-app"
    ]
},
```
#### Eslint支持(package.json)
```javascript
"eslintConfig": {
  "parserOptions": {
	  "ecmaFeatures": {
		  "legacyDecorators": true
	  }
  },
"extends": "react-app"
},
```
### mobx主要api
#### @observable
* 概念: 创建一个被监听的对象, 没有@observable声明的视图不能检测到变化
#### @computed
* 概念: 类比vue的Computed, 当依赖的值有变化时会执行一遍
#### @action
* 概念: 改变store的值的行为
#### extendObservable
* 概念: 初始为被 @observable设置为被监听值的, 可以通过extendObservable添加
  否则自行添加的没办法被mobx检测到变化
#### autorun
* 概念: 初始执行一次, 当依赖的值有变化时候就会执行里面的函数, 此方法在mobx-react中被 @observer 所替代
### mobx-react主要api
#### Provider
* 概念: Provide与redux类似, 把利用context把store注入全局中
#### inject
* 概念: 给组件注入其需要的 store（利用 React context 机制）
#### @observer
* 概念: 监听store的变化, 同时更新视图的变化

>mobx可以创建多个store, 然后通过根store把所有的子store整合

### demo(装饰器用法)
#### 创建一个store
```javascript
import { observable, computed, action } from 'mobx'
import moment from 'moment'

class MobxStore {
	@observable day = '2020/04/05'
	@observable time = '';
	@observable todos = [];
	@computed get desc(){
		return `[${this.time}]   you get ${this.todos.length} todo data`
	}
	@action setTodo = (todo) => {
		this.todos.push(todo)
	}
	@action removeTodo = (todo) => {
		this.todos = this.todos.filter(item => item!==todo)
	}
	@action resetTodo = () => {
		this.todos = []
	}
	@action updateTime = () => {
		this.time = moment().format('YYYY-MM-DD HH:mm:ss')
	}
}

const store = new MobxStore()

// 时间show
setInterval(() => {
	store.updateTime()
}, 1000)

export default store
```
#### 组件中使用
```javascript
import React from 'react'
import { inject, observer } from 'mobx-react'

const ADD = 'ADD'
const REMOVE = 'REMOVE'
const RESET = 'RESET'
/*
@inject('store')： 注入store
@observer： 对这个页面进行观察
*/

@inject('store') @observer
class Home extends React.Component {
	constructor(props) {
	    super(props)
		this.state = {
			todotxt: ''
		}
	}
	
	handeTodo(method, item='') {
		const { setTodo, resetTodo, removeTodo } = this.props.store
		const { todotxt } = this.state
		switch(method){
			case ADD:
			    setTodo(todotxt)
				break
			case REMOVE:
			    removeTodo(item)
				break
			case RESET:
			    resetTodo(todotxt)
				break
			default:
			  return method 
		}
	}
	
	render() {
		const {day, todos, desc} = this.props.store
		
		return (
			<>
			 <p>made: {day}</p>
			 <p>{desc}</p>
			   <input 
			     type="text" 
				 placeholder="输入todo" 
				 onInput={(el) => {
					 this.setState({
						 todotxt: el.target.value
					 })
				 }}/>
			   <button onClick={() => this.handeTodo(ADD)}>add</button>
			   <button onClick={() => this.handeTodo(RESET)}>reset</button>
			   
			   <h5>TODOS list</h5>
			   {
				   todos.map(item => (
				       <div key={item}>
					     {item}
						 <button onClick={() => this.handeTodo(REMOVE, item)}>remove</button>
					   </div>
				   ))
			   }
			</>
		)
	}
}

export default Home
```
#### 入口组件
```javascript
import React from 'react'
import { Provider } from 'mobx-react'
import store from './testMobxStore/store/index'
import Home from './testMobxStore/components/home'

const MobxApp = () => {
	return (
	   <>
	     <Provider store={store}>
		    <Home />
		 </Provider>
	   </>
	)
}

export default MobxApp
```
[github上的demo地址：](https://github.com/HHardyy/eazy-mobx)

















