"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[6648],{99278:function(t,n,e){e.d(n,{Zo:function(){return c},kt:function(){return d}});var a=e(59301);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,o=function(t,n){if(null==t)return{};var e,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=a.createContext({}),i=function(t){var n=a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},c=function(t){var n=i(t.components);return a.createElement(s.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(t,n){var e=t.components,o=t.mdxType,l=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=i(e),d=o,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return e?a.createElement(k,r(r({ref:n},c),{},{components:e})):a.createElement(k,r({ref:n},c))}));function d(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var l=e.length,r=new Array(l);r[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=t,p.mdxType="string"==typeof t?t:o,r[1]=p;for(var i=2;i<l;i++)r[i]=e[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},90677:function(t,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return m}});var a=e(47145),o=e(24736),l=(e(59301),e(99278)),r=["components"],p={title:"\u81ea\u5b9a\u4e49\u8868\u683c\u7684\u63d0\u4ea4\u548c\u67e5\u770b",order:21},s=void 0,i={unversionedId:"examples/customPage/submitForm",id:"examples/customPage/submitForm",title:"\u81ea\u5b9a\u4e49\u8868\u683c\u7684\u63d0\u4ea4\u548c\u67e5\u770b",description:"\u793a\u4f8b\u8bf4\u660e",source:"@site/docs/examples/customPage/submitForm.mdx",sourceDirName:"examples/customPage",slug:"/examples/customPage/submitForm",permalink:"/developer-site/docs/examples/customPage/submitForm",draft:!1,editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/examples/customPage/submitForm.mdx",tags:[],version:"current",lastUpdatedBy:"zhangyingjie",lastUpdatedAt:1655887347,formattedLastUpdatedAt:"2022/6/22",frontMatter:{title:"\u81ea\u5b9a\u4e49\u8868\u683c\u7684\u63d0\u4ea4\u548c\u67e5\u770b",order:21},sidebar:"examples",previous:{title:"\u8868\u683c\u5b9e\u73b0\u589e\u5220\u6539\u67e5",permalink:"/developer-site/docs/examples/customPage/crud"},next:{title:"\u6253\u5370",permalink:"/developer-site/docs/examples/customPage/print"}},c={},m=[{value:"\u793a\u4f8b\u8bf4\u660e",id:"\u793a\u4f8b\u8bf4\u660e",level:2},{value:"\u793a\u4f8b\u6f14\u793a",id:"\u793a\u4f8b\u6f14\u793a",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u6b65\u9aa4 1\uff1a\u521b\u5efa\u6570\u636e\u4f9d\u8d56\u8868\u5355",id:"\u6b65\u9aa4-1\u521b\u5efa\u6570\u636e\u4f9d\u8d56\u8868\u5355",level:3},{value:"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u63d0\u4ea4\u9875\u9762",id:"\u6b65\u9aa4-2\u521b\u5efa\u81ea\u5b9a\u4e49\u63d0\u4ea4\u9875\u9762",level:3},{value:"\u6b65\u9aa4 3\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u67e5\u770b\u9875\u9762",id:"\u6b65\u9aa4-3\u521b\u5efa\u81ea\u5b9a\u4e49\u67e5\u770b\u9875\u9762",level:3},{value:"\u6b65\u9aa4 4\uff1a\u914d\u7f6e\u81ea\u5b9a\u4e49\u67e5\u770b\u9875\u9762",id:"\u6b65\u9aa4-4\u914d\u7f6e\u81ea\u5b9a\u4e49\u67e5\u770b\u9875\u9762",level:3},{value:"\u6b65\u9aa4 5\uff1a\u5b9e\u73b0\u6682\u5b58\u529f\u80fd",id:"\u6b65\u9aa4-5\u5b9e\u73b0\u6682\u5b58\u529f\u80fd",level:3},{value:"\u5728\u7ebf\u8bd5\u73a9",id:"\u5728\u7ebf\u8bd5\u73a9",level:2}],u={toc:m};function d(t){var n=t.components,e=(0,o.Z)(t,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u793a\u4f8b\u8bf4\u660e"},"\u793a\u4f8b\u8bf4\u660e"),(0,l.kt)("p",null,"\u5728\u5b9c\u642d\u4e2d\u7b80\u5355\u7684\u8868\u5355\u63d0\u4ea4\u53ef\u4ee5\u4f7f\u7528\u666e\u901a\u8868\u5355\u6765\u5b9e\u73b0\uff0c\u4f46\u662f\u666e\u901a\u8868\u5355\u65e0\u6cd5\u81ea\u5b9a\u4e49\u8868\u683c\u6837\u5f0f\u3002\u5f53\u6211\u4eec\u9700\u8981\u590d\u6742\u7684\u8868\u683c\u6837\u5f0f\u5e76\u4e14\u8fdb\u884c\u63d0\u4ea4\u65f6\uff0c\u6211\u4eec\u5e94\u8be5\u5982\u4f55\u5b9e\u73b0\u5462\uff1f\u5728\u5b9c\u642d\u4e2d\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u9875\u9762\u8fdb\u884c\u5f00\u53d1\uff0c\u81ea\u5b9a\u4e49\u9875\u9762\u6709 JSX\u3001HTML \u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5b9e\u73b0\u590d\u6742\u7684\u4e1a\u52a1\u573a\u666f\u3002\u90a3\u4e48\u6b64\u6587\u6863\u5e26\u5927\u5bb6\u4e00\u8d77\u6765\u4e86\u89e3\u4e00\u4e0b\uff0c\u5982\u4f55\u914d\u7f6e\u81ea\u5b9a\u4e49\u8868\u683c\u7684\u63d0\u4ea4\u548c\u67e5\u770b\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b\u6f14\u793a"},"\u793a\u4f8b\u6f14\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01I7mXUZ1Tz3tPyqGIg_!!6000000002452-2-tps-2856-938.png_.webp",alt:"JSX \u5b9e\u73b0\u81ea\u5b9a\u4e49\u8868\u683c\u7684\u6548\u679c\u6f14\u793a"})),(0,l.kt)("video",{width:"100%",controls:!0},(0,l.kt)("source",{src:"https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/364768804610.mp4",type:"video/mp4"})),(0,l.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,l.kt)("h3",{id:"\u6b65\u9aa4-1\u521b\u5efa\u6570\u636e\u4f9d\u8d56\u8868\u5355"},"\u6b65\u9aa4 1\uff1a\u521b\u5efa\u6570\u636e\u4f9d\u8d56\u8868\u5355"),(0,l.kt)("p",null,"\u6570\u636e\u4f9d\u8d56\u8868\u5355\u7684\u4f5c\u7528\uff1a\u6570\u636e\u4f9d\u8d56\u8868\u5355\u7528\u6765\u5b58\u50a8\u81ea\u5b9a\u4e49\u9875\u9762\u63d0\u4ea4\u7684\u6570\u636e\u3002\n\u8981\u5c06\u81ea\u5b9a\u4e49\u9875\u9762\u7684\u6570\u636e\u901a\u8fc7\u63a5\u53e3\u4f20\u5165\u5230\u8868\u5355\u9875\u9762\uff0c\u9700\u8981\u83b7\u53d6\u5230\u8868\u5355\u9875\u9762\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u624b\u5199\u7b7e\u540d\u7ec4\u4ef6\u4e0d\u53ef\u4ee5\u76f4\u63a5\u5728\u63a5\u53e3\u4f20\u503c\uff0c\u6240\u4ee5\u8981\u4f7f\u7528\u5355\u884c\u6587\u672c\u505a\u8f85\u52a9\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01BbOWUe1zQJY67KWdn_!!6000000006708-2-tps-1437-807.png_.webp",alt:"\u6570\u636e\u4f9d\u8d56\u8868\u5355"})),(0,l.kt)("h3",{id:"\u6b65\u9aa4-2\u521b\u5efa\u81ea\u5b9a\u4e49\u63d0\u4ea4\u9875\u9762"},"\u6b65\u9aa4 2\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u63d0\u4ea4\u9875\u9762"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," \uff081\uff09\u8868\u683c\u5236\u4f5c\u5de5\u5177 ")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u94fe\u63a5\u5185\u751f\u6210\u8868\u683c\u6837\u5f0f\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://www.tablesgenerator.com/html_tables#"},"tablesgenerator"))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u8868\u683c\u5236\u4f5c\u5de5\u5177 TablesGenerator \u662f\u4e00\u4e2a\u5728\u7ebf\u5236\u4f5c LaTeX\u3001HTML\u3001Markdown \u683c\u5f0f\u7684\u8868\u683c\u4ee3\u7801\u5de5\u5177\uff0c\u652f\u6301\u5728\u8868\u683c\u4e2d\u586b\u5145\u6570\u636e\uff0c\u4fee\u6539\u5b57\u4f53/\u80cc\u666f\u989c\u8272\uff0c\u5bf9\u9f50\u65b9\u5f0f\u7b49\u7b49\u3002"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01maSGm71w9sUPwXqB4_!!6000000006266-2-tps-1439-809.png_.webp",alt:"\u4f7f\u7528TablesGenerator"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u590d\u5236\u4ee3\u7801\u653e\u5165 JSX \u4e2d\uff0c",(0,l.kt)("strong",{parentName:"li"}," JSX ")," >> ",(0,l.kt)("strong",{parentName:"li"}," \u7f16\u8f91 JSX \u4ee3\u7801 ")," >> ",(0,l.kt)("strong",{parentName:"li"}," \u4ee3\u7801\u590d\u5236\u7c98\u8d34 "))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01WzXy6W1KD7tnkBlP9_!!6000000001129-2-tps-1405-806.png_.webp",alt:"\u7ed8\u5236\u8868\u683c"}),"\n\u200b 3. \u5c06\u751f\u6210\u7684\u6837\u5f0f\u590d\u5236\u5230 ",(0,l.kt)("strong",{parentName:"p"}," JSX ")," >> ",(0,l.kt)("strong",{parentName:"p"}," \u6837\u5f0f ")," >> ",(0,l.kt)("strong",{parentName:"p"}," \u6e90\u7801\u7f16\u8f91 "),"\u3002\u6839\u636e\u9700\u6c42\uff0c\u53ef\u4ee5\u5728\u6e90\u7801\u7f16\u8f91\u4e2d\u81ea\u884c\u66f4\u6539\u6837\u5f0f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01A8FKI51NQMBWB5Cth_!!6000000001564-2-tps-1438-799.png_.webp",alt:"\u590d\u5236\u5230JSX\u6e90\u7801\u7f16\u8f91"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"}," \u4e0b\u8ff0\u4ee3\u7801\u53ef\u4ee5\u76f4\u63a5\u590d\u5236\u5230\u6e90\u7801\u7f16\u8f91 "))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/*JSX\u6837\u5f0f->\u6e90\u7801\u7f16\u8f91*/\n.tg {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n.tg td {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 10px 5px;\n  word-break: normal;\n}\n.tg th {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  overflow: hidden;\n  padding: 10px 5px;\n  word-break: normal;\n}\n.tg .tg-34fe {\n  background-color: #c0c0c0;\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n.tg .tg-c3ow {\n  border-color: inherit;\n  text-align: center;\n  vertical-align: top;\n}\n\n.next-form-item {\n  margin: 0;\n}\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"}," \u83b7\u53d6\u7ec4\u4ef6\u6807\u7b7e ")," >> ",(0,l.kt)("strong",{parentName:"li"}," \u5b9a\u4e49\u5c5e\u6027 ")," >> ",(0,l.kt)("strong",{parentName:"li"}," \u6e32\u67d3\u7ec4\u4ef6 "))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01h8z1tt1q6m6s6gCUh_!!6000000005447-2-tps-1435-809.png_.webp",alt:"\u6e32\u67d3\u7ec4\u4ef6"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," (2) \u5728 JSX \u4e2d\u4f7f\u7528\u53d8\u91cf\u6570\u636e\u6e90 ")),(0,l.kt)("p",null,"\u540e\u7eed\u9700\u8981\u590d\u7528\u5c5e\u6027\uff0c\u5e76\u4e14\u4f20\u503c\u5230\u63a5\u53e3\u53bb\u65b0\u589e\u6570\u636e\u548c\u67e5\u770b\u6570\u636e\uff0c\u8981\u4f7f\u7528\u53d8\u91cf\u6570\u636e\u6e90\u5b9a\u4e49\u5c5e\u6027\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"}," \u5b9a\u4e49\u53d8\u91cf\u6570\u636e\u6e90 ")," >> ",(0,l.kt)("strong",{parentName:"li"}," \u5c06\u5c5e\u6027\u503c\u66ff\u6362\u6210\u53d8\u91cf ")," >> ",(0,l.kt)("strong",{parentName:"li"}," \u6e32\u67d3\u7ec4\u4ef6 "))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01Yw0Cdd1LAfO8NJr2D_!!6000000001259-2-tps-1388-764.png_.webp",alt:"\u8bbe\u7f6e\u53d8\u91cf\u6570\u636e\u6e90"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5728 js \u9762\u677f\u4e2d\u5b9a\u4e49\u4e00\u4e2a onchange \u65b9\u6cd5\uff0c\u7136\u540e\u5728 JSX \u4e2d\u4f7f\u7528 this.onChange \u8bbe\u7f6e\u7ec4\u4ef6\u7684 onchange \u5c5e\u6027\uff0c\u4f5c\u7528\u662f\u5c06\u7ec4\u4ef6\u503c\u66f4\u65b0\u5230\u53d8\u91cf\u6570\u636e\u6e90\u4e2d\u5e76\u6e32\u67d3\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01Y4oxMN1hWZsbgbcnG_!!6000000004285-2-tps-1436-805.png_.webp",alt:"\u83b7\u53d6\u7ec4\u4ef6\u503c\u66f4\u65b0\u53d8\u91cf\u6570\u636e\u6e90"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0b\u8ff0\u4ee3\u7801\u53ef\u76f4\u63a5\u590d\u5236\u7f16\u8f91 JS \u9762\u677f\u5185\uff0c\u6ce8\u610f\uff1a",(0,l.kt)("strong",{parentName:"p"}," \u4f7f\u7528\u65f6\u9700\u8981\u66ff\u6362 JSX \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u3002 "))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onChange({ value }, index) {\n  //console.log(value, index);\n  //\u7ed9 componentIds \u53d8\u91cf\u6570\u636e\u6e90\u7684 index \u4e0b\u6807\u8d4b value \u503c\n  this.state.componentIds[index] = value;\n  this.$('JSX_kt9ikv55').forceUpdate();\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0b\u8ff0\u4ee3\u7801\u53ef\u76f4\u63a5\u590d\u5236\u7f16\u8f91 JSX \u4ee3\u7801\u5185\u3002\u6ce8\u610f\uff1a",(0,l.kt)("strong",{parentName:"p"}," \u8981\u914d\u7f6e\u53d8\u91cf\u6570\u636e\u6e90\uff0c\u5e76\u66f4\u6539\u552f\u4e00\u6807\u8bc6\u4e3a\u4f9d\u8d56\u8868\u5355\u552f\u4e00\u6807\u8bc6\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'//JSX\u4ee3\u7801\nfunction render(me, state, data, ctx) {\n  //\u5c06\u53d8\u91cf\u6570\u636e\u6e90\u5f15\u5165\u5230JSX\u4e2d\u4f7f\u7528\n  const { radioDatas, componentIds, componentStatus } = this.state;\n  return (\n    <div>\n      <table class="tg">\n        <thead>\n          <tr>\n            <th class="tg-34fe" colspan="20">\n              \u6d4b\u8bd5\u8868\u683c\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class="tg-c3ow" colspan="4">\n              \u5355\u9009\n            </td>\n            <td class="tg-c3ow" colspan="6">\n              <RadioField\n                dataSource={radioDatas}\n                value={componentIds.radioField_kt8hni6y}\n                onChange={(value) => {\n                  this.onChange(value, \'radioField_kt8hni6y\');\n                }}\n                behavior={componentStatus}\n              />\n            </td>\n            <td class="tg-c3ow" colspan="4">\n              \u65e5\u671f\n            </td>\n            <td class="tg-c3ow" colspan="6">\n              <DateField\n                value={componentIds.dateField_kt8hni6z}\n                onChange={(value) => {\n                  this.onChange(value, \'dateField_kt8hni6z\');\n                }}\n                behavior={componentStatus}\n              />\n            </td>\n          </tr>\n          <tr>\n            <td class="tg-c3ow" colspan="4">\n              \u624b\u5199\u7b7e\u540d\n            </td>\n            <td class="tg-c3ow" colspan="6">\n              <DigitalSignatureField\n                useLastSignature={false}\n                value={componentIds.textField_kt8i83vj}\n                onChange={(value) => {\n                  this.onChange(value, \'textField_kt8i83vj\');\n                }}\n                behavior={componentStatus}\n              />\n            </td>\n            <td class="tg-c3ow" colspan="4">\n              \u591a\u884c\u6587\u672c\n            </td>\n            <td class="tg-c3ow" colspan="6">\n              <TextareaField\n                placeholder={\'\u8bf7\u8f93\u5165\'}\n                value={componentIds.textareaField_kt8hni71}\n                onChange={(value) => {\n                  this.onChange(value, \'textareaField_kt8hni71\');\n                }}\n                behavior={componentStatus}\n              />\n            </td>\n          </tr>\n          <tr>\n            <td class="tg-c3ow" colspan="4">\n              \u4e0b\u62c9\u5355\u9009\n            </td>\n            <td class="tg-c3ow" colspan="6">\n              <SelectField\n                dataSource={radioDatas}\n                hasClear={true}\n                value={componentIds.selectField_kt8hni72}\n                onChange={(value) => {\n                  this.onChange(value, \'selectField_kt8hni72\');\n                }}\n                behavior={componentStatus}\n              />\n            </td>\n            <td class="tg-c3ow" colspan="4">\n              \u6570\u503c\n            </td>\n            <td class="tg-c3ow" colspan="6">\n              <NumberField\n                value={componentIds.numberField_kt8hni73}\n                onChange={(value) => {\n                  this.onChange(value, \'numberField_kt8hni73\');\n                }}\n                behavior={componentStatus}\n              />\n            </td>\n          </tr>\n          <tr>\n            <td class="tg-c3ow" colspan="4">\n              \u5355\u884c\u6587\u672c\n            </td>\n            <td class="tg-c3ow" colspan="6">\n              <TextField\n                hasClear={true}\n                placeholder={\'\u8bf7\u8f93\u5165\'}\n                value={componentIds.textField_kt8hni74}\n                onChange={(value) => {\n                  this.onChange(value, \'textField_kt8hni74\');\n                }}\n                behavior={componentStatus}\n              />\n            </td>\n            <td class="tg-c3ow" colspan="4">\n              \u6210\u5458\n            </td>\n            <td class="tg-c3ow" colspan="6">\n              <EmployeeField\n                hasClear={true}\n                value={componentIds.employeeField_kt8hni75}\n                onChange={(value) => {\n                  this.onChange(value, \'employeeField_kt8hni75\');\n                }}\n                behavior={componentStatus}\n              />\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  );\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," (3) \u914d\u7f6e\u63d0\u4ea4\u6309\u94ae")),(0,l.kt)("p",null,"\u4e3a\u4e86\u9875\u9762\u7f8e\u89c2\uff0c\u53ef\u4ee5\u5148\u62d6\u52a8\u4e00\u4e2a\u5bb9\u5668\u7ec4\u4ef6\uff0c\u5c06\u6309\u94ae\u7ec4\u4ef6\u653e\u5165\u5230\u5bb9\u5668\u7ec4\u4ef6\u4e2d\uff0c\u8bbe\u7f6e\u5bb9\u5668\u6837\u5f0f\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"}," \u914d\u7f6e\u8fdc\u7a0b\u6570\u636e\u6e90 ")," >> ",(0,l.kt)("strong",{parentName:"li"}," \u6309\u94ae\u7ec4\u4ef6 ")," >> ",(0,l.kt)("strong",{parentName:"li"}," \u52a8\u4f5c\u8bbe\u7f6e ")," >> ",(0,l.kt)("strong",{parentName:"li"}," onclik \u70b9\u51fb\u4e8b\u4ef6 "))),(0,l.kt)("p",null,"\u53d8\u91cf\u6570\u636e\u6e90\u5b9e\u73b0\u7684\u662f\u70b9\u51fb\u63d0\u4ea4\u65f6\u66f4\u6539\u4e3a\u52a0\u8f7d\u72b6\u6001\uff0c\u5e76\u5728\u63d0\u4ea4\u5b8c\u6210\u540e\u5c06\u6309\u94ae\u548c\u9875\u9762\u5185\u7684\u7ec4\u4ef6\u7981\u7528\uff0c\u4e0d\u5141\u8bb8\u70b9\u51fb\u63d0\u4ea4\u7b2c\u4e8c\u6b21\u3002"),(0,l.kt)("p",null,"\u8fdc\u7a0b\u6570\u636e\u6e90\u8c03\u7528",(0,l.kt)("a",{parentName:"p",href:"https://www.yuque.com/yida/support/aql605#oi5tzg"},"\u65b0\u589e\u8868\u5355\u5b9e\u4f8b"),"\u63a5\u53e3\uff0c\u5728 onclik \u4e8b\u4ef6\u89e6\u53d1\u540e\u5c06\u7ec4\u4ef6\u7684\u503c\u66f4\u65b0\u5230 componentIds \u53d8\u91cf\u6570\u636e\u6e90\u4e2d\uff0c\u5c06\u503c\u4f5c\u4e3a\u8bf7\u6c42\u53c2\u6570\u7ed9\u63a5\u53e3\uff0c\u5b9e\u73b0\u5c06\u81ea\u5b9a\u4e49\u9875\u9762\u7ec4\u4ef6\u7684\u503c\u5b58\u50a8\u5230\u8868\u5355\u7684\u6548\u679c\u3002\u540e\u7eed\u4e3a\u4e86\u65b9\u4fbf\u544a\u77e5\u81ea\u5b9a\u4e49\u9875\u9762\u662f\u5426\u63d0\u4ea4\u5b8c\u6210\uff0c\u5b9a\u4e49\u4e00\u4e2a\u5f39\u51fa\u6d88\u606f\u6846\uff0c\u63d0\u4ea4\u6210\u529f\u6216\u5931\u8d25\u90fd\u914d\u7f6e\u4e86\u63d0\u793a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01Ll1h2e1kaeFSOybXD_!!6000000004700-2-tps-1427-748.png_.webp",alt:"\u5c06\u6570\u636e\u5b58\u50a8\u5230\u4f9d\u8d56\u8868\u6240\u9700\u6570\u636e\u6e90"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01Rnet1k1gI5k0JuOsb_!!6000000004118-2-tps-1437-807.png_.webp",alt:"\u70b9\u51fb\u6309\u94ae\u65f6\u8c03\u7528\u63a5\u53e3\u5c06\u53c2\u6570\u4f20\u5165"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0b\u8ff0\u4ee3\u7801\u53ef\u76f4\u63a5\u590d\u5236\u7f16\u8f91 JS \u9762\u677f\u5185\u3002\u6ce8\u610f\uff1a",(0,l.kt)("strong",{parentName:"p"}," \u4f7f\u7528\u65f6\u9700\u8981\u66ff\u6362 formUuid \u548c appType\uff0c\u5e76\u5728\u4f7f\u7528\u524d\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onClick() {\n  const componentIds = this.state.componentIds;\n  console.log('componentIds', componentIds);\n  let loading = this.utils.toast({\n    type: 'loading',\n    title: '\u63d0\u4ea4\u4e2d...',\n  });\n  this.setState({\n    bthLoading: true,\n  });\n  let params = {\n    formUuid: 'FORM-XJ866N71G7ET96RS09BNI5ZCKIZM3ZPO6F9TK13',\n    appType: 'APP_JKH50FL33A0H8GJBQEHL',\n    formDataJson: JSON.stringify(componentIds),\n  };\n  this.dataSourceMap.createData\n    .load(params)\n    .then((res) => {\n      console.log(res);\n      if (res) {\n        loading();\n        this.utils.toast({\n          type: 'success',\n          title: '\u63d0\u4ea4\u6210\u529f\uff01',\n        });\n        this.setState({\n          componentStatus: 'DISABLED',\n          bthLoading: false,\n          bthStatus: 'DISABLED',\n        });\n      }\n    })\n    .catch((err) => {\n      console.log(err);\n      loading();\n      this.utils.toast({\n        type: 'error',\n        title: '\u63d0\u4ea4\u5931\u8d25\uff01',\n      });\n    });\n}\n")),(0,l.kt)("h3",{id:"\u6b65\u9aa4-3\u521b\u5efa\u81ea\u5b9a\u4e49\u67e5\u770b\u9875\u9762"},"\u6b65\u9aa4 3\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u67e5\u770b\u9875\u9762"),(0,l.kt)("p",null,"\u8868\u683c\u7ec4\u4ef6 >> \u8bbe\u7f6e\u8fdc\u7a0b\u6570\u636e\u6e90 >> \u7ed1\u5b9a\u8868\u683c\u6570\u636e\u6e90 >> \u6dfb\u52a0\u6570\u636e\u5217\u6807\u9898\u548c\u6570\u636e\u5b57\u6bb5"),(0,l.kt)("p",null,"\u8be6\u7ec6\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.yuque.com/yida/support/vswqzz"},"\u81ea\u5b9a\u4e49\u9875\u9762\u8868\u683c\u5b9e\u73b0\u6570\u636e\u7ba1\u7406\u9875\u529f\u80fd")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01ehj3uc1PpfIsSfc4J_!!6000000001890-2-tps-1524-699.png_.webp",alt:"\u914d\u7f6e\u8868\u683c\u7ec4\u4ef6"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\u624b\u5199\u7b7e\u540d\u7ec4\u4ef6\u662f\u4e00\u4e2a\u56fe\u7247\uff0c\u9700\u8981\u8bbe\u7f6e",(0,l.kt)("a",{parentName:"p",href:"https://www.aliwork.com/developer/table-pc#column-custom-render"},"\u5217\u7684\u81ea\u5b9a\u4e49\u6e32\u67d3"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01467BQZ1x1vE60e9rN_!!6000000006384-2-tps-1425-805.png_.webp",alt:"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u6e32\u67d3\u56fe\u7247"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0b\u8ff0\u4ee3\u7801\u53ef\u76f4\u63a5\u590d\u5236\u7f16\u8f91 JS \u9762\u677f\u5185")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"export function renderCell(value, index, rowData) {\n  return (\n    <span>\n      <img src={value} style={{ display: 'block', width: '100px' }} />\n    </span>\n  );\n}\n")),(0,l.kt)("h3",{id:"\u6b65\u9aa4-4\u914d\u7f6e\u81ea\u5b9a\u4e49\u67e5\u770b\u9875\u9762"},"\u6b65\u9aa4 4\uff1a\u914d\u7f6e\u81ea\u5b9a\u4e49\u67e5\u770b\u9875\u9762"),(0,l.kt)("p",null,"\u63d0\u4ea4\u6570\u636e\u540e\u5e94\u8be5\u5982\u4f55\u5b9e\u73b0\u67e5\u770b\u6570\u636e\u4e5f\u662f\u81ea\u5b9a\u4e49\u63d0\u4ea4\u7684\u8868\u683c\u6837\u5f0f\u5462\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," (1) \u81ea\u5b9a\u4e49\u6570\u636e\u67e5\u770b\u9875\u9762\u643a\u5e26\u53c2\u6570\u8df3\u8f6c\u81f3\u81ea\u5b9a\u4e49\u63d0\u4ea4\u9875\u9762 ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," \u8bbe\u7f6e\u8868\u683c\u7684\u64cd\u4f5c\u5217 ")," >> ",(0,l.kt)("strong",{parentName:"p"}," \u6dfb\u52a0\u540d\u4e3a\u8be6\u60c5\u7684\u64cd\u4f5c\u9879 ")," >> ",(0,l.kt)("strong",{parentName:"p"}," \u70b9\u51fb\u7f16\u8f91 ")," >> ",(0,l.kt)("strong",{parentName:"p"}," \u7ed1\u5b9a\u56de\u8c03\u52a8\u4f5c ")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01sqw0Aw1ZuNXMswXtt_!!6000000003254-2-tps-1438-801.png_.webp",alt:"\u7ed1\u5b9a\u64cd\u4f5c\u5217\u56de\u8c03\u51fd\u6570"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0b\u8ff0\u4ee3\u7801\u53ef\u76f4\u63a5\u590d\u5236\u7f16\u8f91 JS \u9762\u677f\u5185\uff0c\u6ce8\u610f\uff1a\u66ff\u6362\u94fe\u63a5\u4e3a\u81ea\u5b9a\u4e49\u63d0\u4ea4\u9875\u9762\u8bbf\u95ee\u94fe\u63a5\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onActionClick(rowData) {\n  console.log(rowData);\n  this.utils.router.push(\n    'https://www.aliwork.com/APP_JKH50FL33A0H8GJBQEHL/custom/FORM-WO966N71Z6ETTREN3TD4T9QQWDG72EOPEH9TK85',\n    { formInstId: rowData.formInstId },\n    true,\n    true\n  );\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," (2) \u5728\u81ea\u5b9a\u4e49\u63d0\u4ea4\u9875\u9762\u63a5\u6536\u53c2\u6570\u5e76\u8c03\u7528\u63a5\u53e3\u83b7\u53d6\u4f9d\u8d56\u8868\u7684\u503c\u5c55\u793a\u5728\u9875\u9762\u5185 ")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u8fdc\u7a0b\u6570\u636e ",(0,l.kt)("inlineCode",{parentName:"li"},"getDataById"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63a5\u53e3\u53c2\u8003\u6587\u6863\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.yuque.com/yida/support/aql605#i7g3lg"},"\u6839\u636e\u8868\u5355\u5b9e\u4f8b ID \u67e5\u8be2\u8868\u5355\u5b9e\u4f8b\u8be6\u60c5"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4f20\u8fc7\u6765\u7684\u8868\u5355 ID \u628a\u6570\u636e\u56de\u5199\u5230\u9875\u9762")),(0,l.kt)("p",null,"\u7ed1\u5b9a\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u65f6\u7684 didmount \u4e8b\u4ef6\uff0c\u63a5\u6536\u8df3\u8f6c\u94fe\u63a5\u643a\u5e26\u7684\u53c2\u6570 formInstId \u5e76\u4f5c\u4e3a\u8bf7\u6c42\u53c2\u6570\u4f20\u7ed9 getDataById \u6570\u636e\u6e90\uff0c\u52a0\u8f7d\u6570\u636e\u6e90\u6210\u529f\u540e\u66f4\u6539\u53d8\u91cf\u5185\u7684\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01oaCHvK1k5xiNC10pX_!!6000000004633-2-tps-1435-741.png_.webp",alt:"\u7ed1\u5b9a didimount \u5e76\u89e6\u53d1"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e0b\u8ff0\u4ee3\u7801\u53ef\u4ee5\u76f4\u63a5\u590d\u5236\u5230 JS \u9762\u677f\u5185")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"export function didMount() {\n  console.log(`\u300c\u9875\u9762 JS\u300d\uff1a\u5f53\u524d\u9875\u9762\u5730\u5740 ${location.href}`);\n  // console.log(`\u300c\u9875\u9762 JS\u300d\uff1a\u5f53\u524d\u9875\u9762 id \u53c2\u6570\u4e3a ${this.state.urlParams.id}`);\n  // \u66f4\u591a this \u76f8\u5173 API \u8bf7\u53c2\u8003\uff1ahttps://www.yuque.com/yida/support/ocmxyv#OCEXd\n  // document.title = window.loginUser.userName + ' | \u5b9c\u642d';\n  const { urlParams } = this.state;\n  if (urlParams.formInstId) {\n    let params = {\n      formInstId: urlParams.formInstId,\n    };\n    this.dataSourceMap.getDataById.load(params).then((res) => {\n      console.log(res);\n      this.setState({\n        //\u7528\u8fdc\u7a0b\u6570\u636e\u6e90\u8fd4\u56de\u503c\u8d4b\u503c\u7ed9componentIds\u53d8\u91cf\n        //\u7ed9JSX\u5185behavior\u5c5e\u6027\u5f15\u7528\u7684componentStatus\u53d8\u91cf\u8d4b\u503c\u4e3a\u53ea\u8bfb\n        //\u7ed9\u6309\u94ae\u7ed1\u5b9a\u7684\u72b6\u6001\u8d4b\u503c\u4e3a\u7981\u7528,\u6700\u7ec8\u8ba9\u7ec4\u4ef6\u91cd\u5b9a\u5411\u6e32\u67d3\n        componentIds: res.formData,\n        componentStatus: 'READONLY',\n        bthStatus: 'DISABLED',\n      });\n      this.$('JSX_kt9ikv55').forceUpdate();\n    });\n  }\n}\n")),(0,l.kt)("h3",{id:"\u6b65\u9aa4-5\u5b9e\u73b0\u6682\u5b58\u529f\u80fd"},"\u6b65\u9aa4 5\uff1a\u5b9e\u73b0\u6682\u5b58\u529f\u80fd"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u5185\u5bb9\uff0c\u4ecb\u7ecd\u81ea\u5b9a\u4e49\u9875\u9762\u5982\u4f55\u5b9e\u73b0\u8868\u5355\u9875\u9762\u7684\u6682\u5b58\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u51c6\u5907\u4e24\u4e2a\u9875\u9762\uff0c\u5206\u522b\u662f\u6682\u5b58\u8868\u5355\u548c\u4e0a\u65b9\u5df2\u7ecf\u521b\u5efa\u597d\u7684\u81ea\u5b9a\u4e49\u63d0\u4ea4\u9875\u9762\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," \uff081\uff09 \u521b\u5efa\u6682\u5b58\u8868\u5355 ")),(0,l.kt)("p",null,"\u6682\u5b58\u8868\u5355\u7684\u4f5c\u7528\uff1a\u7528\u6765\u5b58\u50a8\u81ea\u5b9a\u4e49\u9875\u9762\u6682\u5b58\u7684\u6570\u636e\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u6682\u5b58\u8868\u5355\u7684\u7ec4\u4ef6\u552f\u4e00\u6807\u8bc6\u8981\u548c\u6570\u636e\u4f9d\u8d56\u8868\u5355\u76f8\u540c\uff0c\u6240\u4ee5\u8981\u91c7\u7528\u590d\u5236\u4f9d\u8d56\u8868\u5355\u9875\u9762\u6216\u8005\u590d\u5236\u7ec4\u4ef6\u7684\u65b9\u5f0f\u4fdd\u8bc1\u7ec4\u4ef6\u552f\u4e00\u6807\u8bc6\u76f8\u540c\u3002")),(0,l.kt)("p",null,"\u6682\u5b58\u8868\u5355\u5185\u65b0\u589e\u52a0\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u4f5c\u7528\u5206\u522b\u662f\u6682\u5b58\u4eba ID \u5b58\u50a8\u64cd\u4f5c\u4eba\u5de5\u53f7\uff0c\u6682\u5b58\u65f6\u95f4\u5b58\u50a8\u64cd\u4f5c\u65f6\u95f4\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01oaCHvK1k5xiNC10pX_!!6000000004633-2-tps-1435-741.png_.webp",alt:"\u6682\u5b58\u8868\u5355\u9875\u9762"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," (2) \u521b\u5efa\u81ea\u5b9a\u4e49\u6682\u5b58\u6309\u94ae ")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u8fdc\u7a0b\u6570\u636e\u6e90",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.yuque.com/yida/support/aql605#oi5tzg"},"\u65b0\u589e\u8868\u5355\u5b9e\u4f8b"),"\uff1a\u4f5c\u7528\u662f\u5c06\u81ea\u5b9a\u4e49\u9875\u9762\u7ec4\u4ef6\u5185\u7684\u6570\u636e\u4f20\u7ed9\u4f9d\u8d56/\u6682\u5b58\u8868\u5355\u4e2d\uff0c\u4ee5\u4fbf\u540e\u7eed\u8c03\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.yuque.com/yida/support/aql605#936pox"},"\u6839\u636e\u6761\u4ef6\u641c\u7d22\u8868\u5355\u5b9e\u4f8b\u8be6\u60c5\u5217\u8868"),"\uff1a\u4f5c\u7528\u662f\u8c03\u7528\u63a5\u53e3\u67e5\u627e\u5230\u5f53\u524d\u767b\u9646\u4eba\u5728\u6682\u5b58\u8868\u4e2d\u7684\u6570\u636e\uff0c\u5728\u6570\u636e\u5904\u7406\u4e2d\u505a\u5224\u65ad\uff0c\u5982\u679c\u6709\u6570\u636e\u5f39\u7a97\u63d0\u9192\u7528\u6237\u662f\u5426\u9700\u8981\u590d\u7528\uff0c\u5e76\u5c06\u8fd4\u56de\u6570\u636e\u4f20\u7ed9 componentIds \u53d8\u91cf\u6570\u636e\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.yuque.com/yida/support/aql605#qztqvv"},"\u5220\u9664\u8868\u5355\u5b9e\u4f8b"),"\uff1a\u4f5c\u7528\u662f\u786e\u5b9a\u5c06\u6570\u636e\u590d\u7528\u5728\u9875\u9762\u4e0a\u540e\uff0c\u5220\u9664\u6682\u5b58\u8868\u4e2d\u7684\u8fd9\u6761\u6570\u636e\u3002")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01oaCHvK1k5xiNC10pX_!!6000000004633-2-tps-1435-741.png_.webp",alt:"\u6682\u5b58\u6240\u9700\u8fdc\u7a0b\u6570\u636e\u6e90"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u641c\u7d22\u8868\u5355\u5b9e\u4f8b\u7684\u8fdc\u7a0b\u6570\u636e\u6e90\u4e2d\u505a\u6570\u636e\u5904\u7406\uff0c\u8fd0\u7528 JS \u9762\u677f\u4e2d\u5b9a\u4e49\u7684 dialog \u65b9\u6cd5\u505a\u5f39\u51fa\u5bf9\u8bdd\u6846\uff0c\u53c2\u8003\u4e0b\u8ff0\u4ee3\u7801\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u8fdc\u7a0b\u6570\u636e\u6e90\u7684\u6570\u636e\u5904\u7406\nfunction didFetch(content) {\n  if (content.totalCount != 0) {\n    //\u8c03\u7528 JS \u9762\u677f\u7684 dialog \u65b9\u6cd5\u5e76\u4f20\u53c2\n    this.dialog(content.data[0]);\n  }\n  return content; // \u91cd\u8981\uff0c\u9700\u8fd4\u56de content\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// JS \u9762\u677f\u4e2d\u7684\u65b9\u6cd5\nexport function dialog(data) {\n  //\u6682\u5b58\u56de\u5199dialog\n  console.log(data);\n  //\u7528\u4e8e\u5f39\u51fa\u5bf9\u8bdd\u6846\n  this.utils.dialog({\n    method: 'confirm',\n    title: '\u63d0\u793a',\n    content: `\u60a8\u4e8e${this.utils.formatter(\n      'date',\n      data.formData.dateField_kti1seu4,\n      'YYYY\u5e74MM\u6708DD\u65e5hh\u65f6mm\u5206ss\u79d2'\n    )}\u6682\u5b58\u4e86\u4e00\u6761\u6570\u636e\uff0c\u662f\u5426\u586b\u5145\u5230\u8868\u5355\u5185\uff1f`,\n    footerActions: ['cancel', 'ok'],\n    onOk: () => {\n      let params = {\n        formInstId: data.formInstId,\n      };\n      //\u8c03\u7528\u5220\u9664\u8868\u5355\u5b9e\u4f8b\u7684\u63a5\u53e3\u5220\u9664\u8fd9\u6761\u6570\u636e\n      this.dataSourceMap.delTemporaryData.load(params);\n      this.setState({\n        componentIds: data.formData,\n      });\n      //\u7ed9\u53d8\u91cf\u6570\u636e\u6e90\u8d4b\u503c\u540e JSX \u6e32\u67d3\n      this.$('JSX_kt9ikv55').forceUpdate();\n    },\n    onCancel: () => {\n      //\u5f53\u70b9\u51fb\u53d6\u6d88\u65f6\u5c06\u6682\u5b58\u6309\u94ae\u72b6\u6001\u8bbe\u7f6e\u4e3a\u7981\u7528\uff0c\u9700\u63d0\u524d\u5b9a\u4e49\u540d\u4e3atemporaryBtnStatus\u7684\u53d8\u91cf\u6570\u636e\u6e90\n      this.setState({\n        temporaryBtnStatus: 'DISABLED',\n      });\n    },\n  });\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u53d8\u91cf\u6570\u636e\u6e90")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"temporaryBtnLoading"),"\uff1a\u6682\u5b58\u6309\u94ae\u52a0\u8f7d\u72b6\u6001\n",(0,l.kt)("inlineCode",{parentName:"p"},"temporaryBtnStatus"),"\uff1a\u6682\u5b58\u6309\u94ae\u72b6\u6001\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01oaCHvK1k5xiNC10pX_!!6000000004633-2-tps-1435-741.png_.webp",alt:"\u63a7\u5236\u6682\u5b58\u6309\u94ae\u72b6\u6001"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u62d6\u52a8\u6309\u94ae\u7ec4\u4ef6\u7ed1\u5b9a\u52a8\u4f5c")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01oaCHvK1k5xiNC10pX_!!6000000004633-2-tps-1435-741.png_.webp",alt:"\u6309\u94ae\u7ed1\u5b9a\u52a8\u4f5c"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u4ee3\u7801\u53ef\u4ee5\u76f4\u63a5\u590d\u5236\u5728 JS \u9762\u677f\u5185\uff0c\u6ce8\u610f\uff1a\u9700\u8981\u66f4\u6539 formUuid \u3001appType \uff0c\u548c\u6682\u5b58\u4eba ID \u6682\u5b58\u65f6\u95f4\u7684\u552f\u4e00\u6807\u8bc6\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onClick2() {\n  //\u6682\u5b58\u6309\u94ae\u7ed1\u5b9a\u52a8\u4f5c\n  const { componentIds } = this.state;\n  //\u552f\u4e00\u6807\u8bc6\u9700\u8981\u66ff\u6362\u6210\u6682\u5b58\u8868\u5355\u4e2d\u7684\u6682\u5b58\u4ebaID\u548c\u6682\u5b58\u65f6\u95f4\u552f\u4e00\u6807\u8bc6\n  componentIds.textField_kti1seu3 = window.loginUser.userId; //\u6682\u5b58\u4ebaID\n  componentIds.dateField_kti1seu4 = new Date().getTime(); //\u6682\u5b58\u65f6\u95f4\n  let loading = this.utils.toast({\n    type: 'loading',\n    title: '\u6682\u5b58\u4e2d...',\n  });\n  this.setState({\n    temporaryBtnLoading: true,\n  });\n  //\u9700\u8981\u66ff\u6362formUuid\u548cappType\n  let params = {\n    formUuid: 'FORM-2T866B813EITKW2P59M9KCYDINQB2144S1ITKHK',\n    appType: 'APP_JKH50FL33A0H8GJBQEHL',\n    formDataJson: JSON.stringify(componentIds),\n  };\n  this.dataSourceMap.createData\n    .load(params)\n    .then((res) => {\n      console.log(res);\n      if (res) {\n        loading();\n        this.utils.toast({\n          type: 'success',\n          title: '\u6682\u5b58\u6210\u529f\uff01',\n        });\n        this.setState({\n          componentStatus: 'DISABLED',\n          temporaryBtnLoading: false,\n          bthStatus: 'DISABLED',\n          temporaryBtnStatus: 'DISABLED',\n        });\n      }\n    })\n    .catch((err) => {\n      console.log(err);\n      loading();\n      this.utils.toast({\n        type: 'error',\n        title: '\u6682\u5b58\u5931\u8d25\uff01',\n      });\n    });\n}\n")),(0,l.kt)("h2",{id:"\u5728\u7ebf\u8bd5\u73a9"},"\u5728\u7ebf\u8bd5\u73a9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u9875\u9762\u5728\u7ebf\u4f53\u9a8c\u8bf7\u79fb\u6b65\u5f00\u53d1\u8005\u4e2d\u5fc3 \ud83d\udc49 ",(0,l.kt)("a",{parentName:"li",href:"https://www.aliwork.com/developer/custom-submit"},"\u81ea\u5b9a\u4e49\u8868\u683c\u7684\u63d0\u4ea4")),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u9875\u9762\u5728\u7ebf\u4f53\u9a8c\u8bf7\u79fb\u6b65\u5f00\u53d1\u8005\u4e2d\u5fc3 \ud83d\udc49 ",(0,l.kt)("a",{parentName:"li",href:"https://www.aliwork.com/developer/custom-lookOver"},"\u81ea\u5b9a\u4e49\u8868\u683c\u67e5\u770b"))))}d.isMDXComponent=!0}}]);