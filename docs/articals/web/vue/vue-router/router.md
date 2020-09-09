单页应用可以实现组件的切换


比如首页 <br>
关于页面 /about<br>

多页应用1个页面1个html<br><br>
前端路由常见的两个方案<br>
### hash模式 #aa | #bb (通过#后面路径的方式进行切换)
```bash javascript
window.lodation.hash = '/about'

window.onhashchange = function(){} //渲染对应的路径的组件
```
### history模式
```bash javascript
window.history.pushState(data)  // 实现增添路径，但是强制刷新还是会有问题（会在服务器找不到资源，需要服务端对这个地址做资源定向）

window.onpopstate = function(){} 监控浏览器路径的变化

vue-router源码在hash模式下，如果支持onpopstate会优先采用，如果低版本浏览器，会采用onhashchange
```