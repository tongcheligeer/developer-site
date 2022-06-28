"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[8068],{99278:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return g}});var r=a(59301);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),f=m(a),g=n,s=f["".concat(d,".").concat(g)]||f[g]||k[g]||l;return a?r.createElement(s,p(p({ref:e},o),{},{components:a})):r.createElement(s,p({ref:e},o))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=f;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},45865:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return k}});var r=a(47145),n=a(24736),l=(a(59301),a(99278)),p=["components"],i={title:"\u670d\u52a1\u7aef\u5f00\u653eAPI",order:5},d=void 0,m={unversionedId:"api/serverAPI",id:"api/serverAPI",title:"\u670d\u52a1\u7aef\u5f00\u653eAPI",description:"\u5b9c\u642d\u5e73\u53f0\u9664\u4e86\u63d0\u4f9b\u7528\u4e8e\u5728 Client \u7aef\u8c03\u7528\u7684\u5f00\u653e API\uff0c\u8fd8\u63d0\u4f9b\u4e86\u652f\u6301\u901a\u8fc7\u670d\u52a1\u7aef\u8fdb\u884c\u8c03\u7528\u7684\u5f00\u653e API\uff0c\u5177\u4f53\u8be6\u89c1\u9489\u9489\u5f00\u653e\u5e73\u53f0\u6587\u6863\u3002",source:"@site/docs/api/serverAPI.md",sourceDirName:"api",slug:"/api/serverAPI",permalink:"/developer-site/docs/api/serverAPI",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/api/serverAPI.md",tags:[],version:"current",lastUpdatedBy:"\u4e0b\u7f8a",lastUpdatedAt:1648545083,formattedLastUpdatedAt:"2022/3/29",frontMatter:{title:"\u670d\u52a1\u7aef\u5f00\u653eAPI",order:5},sidebar:"api",previous:{title:"\u9489\u9489 JS-API",permalink:"/developer-site/docs/api/dingAPI"}},o={},k=[{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:2},{value:"\u6b65\u9aa4 1\uff1a\u521b\u5efa\u9489\u9489\u5e94\u7528",id:"\u6b65\u9aa4-1\u521b\u5efa\u9489\u9489\u5e94\u7528",level:3},{value:"\u6b65\u9aa4 2\uff1a\u6dfb\u52a0\u63a5\u53e3\u8c03\u7528\u6743\u9650",id:"\u6b65\u9aa4-2\u6dfb\u52a0\u63a5\u53e3\u8c03\u7528\u6743\u9650",level:3},{value:"\u6b65\u9aa4 3\uff1a\u83b7\u53d6\u5e94\u7528\u7684 access_token",id:"\u6b65\u9aa4-3\u83b7\u53d6\u5e94\u7528\u7684-access_token",level:3},{value:"API\u5217\u8868",id:"api\u5217\u8868",level:2},{value:"\u6d41\u7a0b",id:"\u6d41\u7a0b",level:3},{value:"\u8868\u5355",id:"\u8868\u5355",level:3},{value:"\u4efb\u52a1",id:"\u4efb\u52a1",level:3},{value:"\u9644\u4ef6",id:"\u9644\u4ef6",level:3}],f={toc:k};function g(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b9c\u642d\u5e73\u53f0\u9664\u4e86\u63d0\u4f9b\u7528\u4e8e\u5728 Client \u7aef\u8c03\u7528\u7684\u5f00\u653e API\uff0c\u8fd8\u63d0\u4f9b\u4e86\u652f\u6301\u901a\u8fc7\u670d\u52a1\u7aef\u8fdb\u884c\u8c03\u7528\u7684\u5f00\u653e API\uff0c\u5177\u4f53\u8be6\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/orgapp-server/yida-overview"},"\u9489\u9489\u5f00\u653e\u5e73\u53f0\u6587\u6863"),"\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u6307\u5357"},"\u4f7f\u7528\u6307\u5357"),(0,l.kt)("p",null,"\u4f7f\u7528\u5b9c\u642d\u5e73\u53f0\u670d\u52a1\u7aef\u5f00\u653e API \u7684\u6b65\u9aa4\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01aOd1Kv1wwssFl6tB9_!!6000000006373-2-tps-1070-124.png_.webp",alt:null})),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u9489\u9489\u5f00\u653e\u5e73\u53f0\u63d0\u4f9b\u591a\u79cd\u5e94\u7528\u7c7b\u578b\uff0c\u4e0d\u540c\u5e94\u7528\u7c7b\u578b\u4f7f\u7528\u670d\u52a1\u7aef\u5f00\u653eAPI\u7684\u65b9\u5f0f\u6709\u6240\u4e0d\u540c\uff0c\u5177\u4f53\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/org/application-types"},"\u9489\u9489\u5e94\u7528\u7c7b\u578b\u4ecb\u7ecd\u6587\u6863"),"\u3002"))),(0,l.kt)("h3",{id:"\u6b65\u9aa4-1\u521b\u5efa\u9489\u9489\u5e94\u7528"},"\u6b65\u9aa4 1\uff1a\u521b\u5efa\u9489\u9489\u5e94\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/org/orgapp-development-process?#topic-2024340"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u5f00\u53d1\u6d41\u7a0b\u4ecb\u7ecd"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7b2c\u4e09\u65b9\u4f01\u4e1a\u5e94\u7528\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/isv/third-party-enterprise-application-description?#topic-2024369"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a\u5e94\u7528\u8bf4\u660e"),"\u3002")),(0,l.kt)("h3",{id:"\u6b65\u9aa4-2\u6dfb\u52a0\u63a5\u53e3\u8c03\u7528\u6743\u9650"},"\u6b65\u9aa4 2\uff1a\u6dfb\u52a0\u63a5\u53e3\u8c03\u7528\u6743\u9650"),(0,l.kt)("p",null,"\u5e94\u7528\u521b\u5efa\u540e\u9ed8\u8ba4\u53ea\u5f00\u653e\u767b\u5f55\u548c\u6d88\u606f\u901a\u77e5\u63a5\u53e3\u7684\u8c03\u7528\u6743\u9650\uff0c\u60a8\u9700\u8981\u6839\u636e\u5f00\u53d1\u9700\u8981\uff0c\u6dfb\u52a0\u5bf9\u5e94\u7684\u63a5\u53e3\u4f7f\u7528\u6743\u9650\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://developers.dingtalk.com/document/app/add-api-permission?#topic-1913954"},"\u6dfb\u52a0\u63a5\u53e3\u8c03\u7528\u6743\u9650"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a\u5e94\u7528\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/isvapp-server/add-interface-call-permissions?#topic-2149187"},"\u6dfb\u52a0\u63a5\u53e3\u8c03\u7528\u6743\u9650"),"\u3002")),(0,l.kt)("h3",{id:"\u6b65\u9aa4-3\u83b7\u53d6\u5e94\u7528\u7684-access_token"},"\u6b65\u9aa4 3\uff1a\u83b7\u53d6\u5e94\u7528\u7684 access_token"),(0,l.kt)("p",null,"access_token \u76f8\u5f53\u4e8e\u662f\u8eab\u4efd\u51ed\u8bc1\u3002\u8c03\u7528\u63a5\u53e3\u65f6\uff0c\u901a\u8fc7 access_token \u6765\u9274\u6743\u8c03\u7528\u8005\u8eab\u4efd\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp-server/obtain-the-access_token-of-an-internal-app?spm=ding_open_doc.document.0.0.f90b3e8bf4XqD4#topic-2056397"},"\u83b7\u53d6\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u7684 accessToken"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a\u5e94\u7528\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/isvapp-server/obtain-the-access_token-of-the-authorized-enterprise?#topic-2056409"},"\u83b7\u53d6\u7b2c\u4e09\u65b9\u5e94\u7528\u6388\u6743\u4f01\u4e1a\u7684 accessToken"),"\u3002")),(0,l.kt)("h2",{id:"api\u5217\u8868"},"API\u5217\u8868"),(0,l.kt)("h3",{id:"\u6d41\u7a0b"},"\u6d41\u7a0b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4e2a\u4eba\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6743\u9650"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/initiate-the-approval-process"},"\u53d1\u8d77\u5b9c\u642d\u5ba1\u6279\u6d41\u7a0b")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u5199\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/delete-process-instance"},"\u5220\u9664\u6d41\u7a0b\u5b9e\u4f8b")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u5199\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/terminate-a-process-instance"},"\u7ec8\u6b62\u6d41\u7a0b\u5b9e\u4f8b")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u5199\u6743\u9650")))),(0,l.kt)("h3",{id:"\u8868\u5355"},"\u8868\u5355"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4e2a\u4eba\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6743\u9650"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/querying-form-instance-data"},"\u67e5\u8be2\u8868\u5355\u5b9e\u4f8b\u6570\u636e")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u8868\u5355\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/save-form-data"},"\u4fdd\u5b58\u8868\u5355\u6570\u636e")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u8868\u5355\u6570\u636e\u5199\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/update-form-data"},"\u66f4\u65b0\u8868\u5355\u6570\u636e")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u8868\u5355\u6570\u636e\u5199\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/query-form-data"},"\u67e5\u8be2\u8868\u5355\u6570\u636e")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u8868\u5355\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/gets-the-value-of-the-employee-component"},"\u83b7\u53d6\u5458\u5de5\u7ec4\u4ef6\u7684\u503c")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u8868\u5355\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/get-a-list-of-form-component-definitions"},"\u83b7\u53d6\u8868\u5355\u7ec4\u4ef6\u5b9a\u4e49\u5217\u8868")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u8868\u5355\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/obtain-child-table-component-data"},"\u83b7\u53d6\u5b50\u8868\u7ec4\u4ef6\u6570\u636e")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u8868\u5355\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/obtain-process-definition"},"\u83b7\u53d6\u6d41\u7a0b\u5b9a\u4e49")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/delete-form-data"},"\u5220\u9664\u8868\u5355\u6570\u636e")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u8868\u5355\u6570\u636e\u5199\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/obtain-the-ids-of-multiple-form-instances"},"\u83b7\u53d6\u591a\u4e2a\u8868\u5355\u5b9e\u4f8bID")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u8868\u5355\u6570\u636e\u8bfb\u6743\u9650")))),(0,l.kt)("h3",{id:"\u4efb\u52a1"},"\u4efb\u52a1"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4e2a\u4eba\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6743\u9650"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/queries-an-approval-record"},"\u83b7\u53d6\u5ba1\u6279\u8bb0\u5f55")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/execute-approval-tasks"},"\u540c\u610f\u6216\u62d2\u7edd\u5b9c\u642d\u5ba1\u6279\u4efb\u52a1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u5199\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/obtains-the-tasks-submitted-by-someone-in-an-organization"},"\u83b7\u53d6\u7ec4\u7ec7\u5185\u67d0\u4eba\u63d0\u4ea4\u7684\u4efb\u52a1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/obtains-the-completed-approval-tasks-in-an-organization"},"\u83b7\u53d6\u7ec4\u7ec7\u5185\u5df2\u5b8c\u6210\u7684\u5ba1\u6279\u4efb\u52a1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u4efb\u52a1\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/transfer-tasks"},"\u8f6c\u4ea4\u4efb\u52a1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u4efb\u52a1\u5199\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/obtains-a-list-of-instance-ids"},"\u83b7\u53d6\u5b9e\u4f8bID\u5217\u8868")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/query-process-running-tasks-vpc"},"\u67e5\u8be2\u6d41\u7a0b\u8fd0\u884c\u4efb\u52a1\uff08VPC\uff09")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u4efb\u52a1\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/queries-multiple-process-instances"},"\u6279\u91cf\u83b7\u53d6\u6d41\u7a0b\u5b9e\u4f8b\u5217\u8868")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/query-tasks-from-the-organization-dimension"},"\u83b7\u53d6\u4efb\u52a1\u5217\u8868\uff08\u7ec4\u7ec7\u7ef4\u5ea6\uff09")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u4efb\u52a1\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/obtain-process-instance"},"\u83b7\u53d6\u6d41\u7a0b\u5b9e\u4f8b")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/get-notifications-sent-to-users"},"\u83b7\u53d6\u53d1\u9001\u7ed9\u7528\u6237\u7684\u901a\u77e5")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u4efb\u52a1\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/queries-a-process-instance-based-on-its-id"},"\u6839\u636e\u6d41\u7a0b\u5b9e\u4f8bID\u83b7\u53d6\u6d41\u7a0b\u5b9e\u4f8b")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/query-copied-my-task-list-application-dimension"},"\u67e5\u8be2\u6284\u9001\u6211\u7684\u4efb\u52a1\u5217\u8868\uff08\u5e94\u7528\u7ef4\u5ea6\uff09")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u4efb\u52a1\u8bfb\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/submit-comment"},"\u63d0\u4ea4\u8bc4\u8bba")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u8bc4\u8bba\u5199\u6743\u9650")))),(0,l.kt)("h3",{id:"\u9644\u4ef6"},"\u9644\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4f01\u4e1a\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u65b9\u4e2a\u4eba\u5e94\u7528"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6743\u9650"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp-server/obtain-the-temporary-free-access-address-of-yixian-accessories"},"\u83b7\u53d6\u5b9c\u642d\u9644\u4ef6\u4e34\u65f6\u514d\u767b\u5730\u5740")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9c\u642d\u6d41\u7a0b\u6570\u636e\u8bfb\u6743\u9650")))))}g.isMDXComponent=!0}}]);