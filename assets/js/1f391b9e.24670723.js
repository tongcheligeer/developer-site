"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[3085],{55511:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var l=n(59301),t=n(44927),i=n(41626),c=n(99278),s=n(93820),r=n(91824),m=n(95663),o="mdxPageWrapper_tlFi";function d(e){var a=e.content,n=a.metadata,d=n.title,v=n.description,u=n.permalink,f=n.frontMatter,N=f.wrapperClassName,g=f.hide_table_of_contents;return l.createElement(i.Z,{title:d,description:v,permalink:u,wrapperClassName:null!=N?N:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.Z)("row",o)},l.createElement("div",{className:(0,t.Z)("col",!g&&"col--8")},l.createElement(c.Zo,{components:s.Z},l.createElement(a,null))),!g&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(r.Z,{toc:a.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})))))}},91824:function(e,a,n){n.d(a,{Z:function(){return o}});var l=n(22376),t=n(91262),i=n(59301),c=n(44927),s=n(12463),r="tableOfContents_kQWm",m=["className"];function o(e){var a=e.className,n=(0,t.Z)(e,m);return i.createElement("div",{className:(0,c.Z)(r,"thin-scrollbar",a)},i.createElement(s.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},12463:function(e,a,n){n.d(a,{Z:function(){return m}});var l=n(22376),t=n(91262),i=n(59301),c=n(95663),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}function m(e){var a=e.toc,n=e.className,m=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,t.Z)(e,s),k=(0,c.LU)(),_=null!=f?f:k.tableOfContents.minHeadingLevel,p=null!=N?N:k.tableOfContents.maxHeadingLevel,C=(0,c.b9)({toc:a,minHeadingLevel:_,maxHeadingLevel:p}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:_,maxHeadingLevel:p}}),[d,u,_,p]);return(0,c.Si)(h),i.createElement(r,(0,l.Z)({toc:C,className:m,linkClassName:d},g))}}}]);