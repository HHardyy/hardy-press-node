(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{218:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("单页应用可以实现组件的切换")]),t._v(" "),s("p",[t._v("比如首页 "),s("br"),t._v("\n关于页面 /about"),s("br")]),t._v(" "),s("p",[t._v("多页应用1个页面1个html"),s("br"),s("br"),t._v("\n前端路由常见的两个方案"),s("br")]),t._v(" "),s("h3",{attrs:{id:"hash模式-aa-bb-通过-后面路径的方式进行切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash模式-aa-bb-通过-后面路径的方式进行切换"}},[t._v("#")]),t._v(" hash模式 #aa | #bb (通过#后面路径的方式进行切换)")]),t._v(" "),s("div",{staticClass:"language-bash javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("window.lodation.hash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about'")]),t._v("\n\nwindow.onhashchange "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" //渲染对应的路径的组件\n")])])]),s("h3",{attrs:{id:"history模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history模式"}},[t._v("#")]),t._v(" history模式")]),t._v(" "),s("div",{staticClass:"language-bash javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("window.history.pushState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  // 实现增添路径，但是强制刷新还是会有问题（会在服务器找不到资源，需要服务端对这个地址做资源定向）\n\nwindow.onpopstate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" 监控浏览器路径的变化\n\nvue-router源码在hash模式下，如果支持onpopstate会优先采用，如果低版本浏览器，会采用onhashchange\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);