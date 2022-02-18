"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[453],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41481:function(e,t){var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}return n(e,[{key:"on",value:function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)}},{key:"off",value:function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}}},{key:"handleMsg",value:function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))}},{key:"destroy",value:function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}}}]),e}(),i=r;t.Z=i;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"Receiver","src/recevier.js"),__REACT_HOT_LOADER__.register(i,"default","src/recevier.js"))},72181:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(75068),i=n(67294),o=n(45697),a=n.n(o),c=n(41481),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new c.Z,n.recevier.on("updateHeight",(function(e,t,r){n.iframe&&r===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){var t=e.url,n=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),n!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,r=t.id,o=t.style,a=t.url;return a?i.createElement("div",{className:"bg-iframe "+n,id:r,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},i.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);s.displayName="bg-iframe",s.propTypes={className:a().string,disableHeightSync:a().bool,id:a().string,onUpdateHeight:a().func,style:a().object,url:a().string.isRequired},s.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},94756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(72181),c=["components"],s={title:"Iframe",order:3},u="Iframe",l={unversionedId:"components/advanced/Iframe",id:"components/advanced/Iframe",title:"Iframe",description:"Iframe \u7ec4\u4ef6\u5141\u8bb8\u4f60\u5c06\u5176\u4ed6\u7f51\u9875\u7684\u5185\u5bb9\u5d4c\u5165\u5230\u4f60\u5f53\u524d\u7684\u8bbe\u8ba1\u5668\u9875\u9762\u4e2d\u3002\u4e00\u822c\u7528\u4e8e\u7eaf\u5c55\u793a\u7684\u573a\u666f\u3002",source:"@site/docs/components/advanced/Iframe.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/Iframe",permalink:"/developer-site/docs/components/advanced/Iframe",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/advanced/Iframe.mdx",tags:[],version:"current",frontMatter:{title:"Iframe",order:3},sidebar:"components",previous:{title:"HTML",permalink:"/developer-site/docs/components/advanced/HTML"},next:{title:"\u5e95\u90e8\u901a\u680f",permalink:"/developer-site/docs/components/advanced/bottomBanner"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iframe"},"Iframe"),(0,o.kt)("p",null,"  Iframe \u7ec4\u4ef6\u5141\u8bb8\u4f60\u5c06\u5176\u4ed6\u7f51\u9875\u7684\u5185\u5bb9\u5d4c\u5165\u5230\u4f60\u5f53\u524d\u7684\u8bbe\u8ba1\u5668\u9875\u9762\u4e2d\u3002\u4e00\u822c\u7528\u4e8e\u7eaf\u5c55\u793a\u7684\u573a\u666f\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(a.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/iframe-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"))}f.isMDXComponent=!0}}]);