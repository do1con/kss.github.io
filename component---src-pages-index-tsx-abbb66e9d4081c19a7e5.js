(self.webpackChunkksss_blog=self.webpackChunkksss_blog||[]).push([[691],{4353:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var n=r(5785),a=r(7294),o=r(5241);function l(){var e=(0,a.useContext)(o._y);if(!e)throw new Error("Provider not found");return e}function s(){var e=(0,a.useContext)(o.qU);if(!e)throw new Error("Dispatch not found");return e}var i=r(4745),c=r(2359),m=r(5444),u=r(4382),f=function(e){var t=e.postData.node.frontmatter,r=t.featuredImage.childImageSharp.gatsbyImageData;return(0,u.tZ)("div",null,(0,u.tZ)(m.Link,{to:t.slug},(0,u.tZ)("div",{className:"flex w-full my-8"},(0,u.tZ)("div",{className:"SM:hidden overflow-hidden"},(0,u.tZ)(c.G,{image:r,alt:t.title+" 썸네일",className:"mr-4 z-10"})),(0,u.tZ)("div",null,(0,u.tZ)("h2",{className:"font-extrabold SM:text-md LG:text-xl block"},t.title),(0,u.tZ)("p",{className:"text-xs text-gray-400 block my-1"},"작성일 : ",t.date),(0,u.tZ)("p",{className:"SM:text-xs text-sm text-gray-700 my-1 overflow-hidden SM:block SM:leading-5 SM:h-10"},t.summary),(0,u.tZ)("p",{className:"text-xs text-green-400 my-1"},"자세히 알아보기 →")))))},d=function(e){var t=e.postList,r=e.selectedCategory,n=t.map((function(e,t){var n=(0,u.tZ)("li",{key:t,className:"my-2"},(0,u.tZ)(f,{postData:e}));return"All"===r||e.node.frontmatter.categories.indexOf(r)>=0?n:void 0}));return(0,u.tZ)(a.Fragment,null,(0,u.tZ)("ul",null,n))},k=r(6661);var p=(0,k.Z)("li",{target:"emif4u51"})("display:block;margin:0.5rem;margin-left:0;color:",(function(e){return e.selected?"#242a33":"#757d85"}),";font-weight:",(function(e){return e.selected?"bold":"normal"}),";cursor:pointer;"),y=((0,k.Z)("button",{target:"emif4u50"})({name:"11dzt6n",styles:"margin:0.75rem;margin-left:0;display:block;color:#757d85;cursor:pointer"}),function(e){var t=e.categories,r=e.selectedCategory,n=e.setSelectedCategory,a=s(),o=function(e){var t=e.target.innerHTML.replace("#","");n(t),a({type:"UPDATE_PAGE_NUMBER",value:1})},l=t.map((function(e,t){return(0,u.tZ)(p,{selected:e===r,key:t,onClick:o,className:"MD:text-xs LG:text-sm"},"#",e)}));return(0,u.tZ)("div",{className:"mt-4 mb-t"},(0,u.tZ)("ul",{className:"flex flex-wrap justify-items-center overflow-hidden max-h-full"},(0,u.tZ)(p,{selected:"All"===r,onClick:o,className:"MD:text-xs LG:text-sm"},"#All"),l),(0,u.tZ)("div",null))}),h=function(e){var t=e.searchWord,r=e.setSearchWord,n=s();return(0,u.tZ)("div",{className:"flex w-full justify-items-center"},(0,u.tZ)("div",{className:"flex w-full max-w-xs mx-auto"},(0,u.tZ)("input",{type:"text",placeholder:"게시글 검색",className:"border-solid rounded-lg border-gray-400 p-1 w-full border-2 MD:text-sm LG:text-md",value:t,onChange:function(e){n({type:"UPDATE_PAGE_NUMBER",value:1}),r(e.target.value)}})))},g=r(573),x=r.n(g),v=r(8668),E=r.n(v),L=r(6905),M=r.n(L),b=r(9338),Z=r.n(b),N=(0,k.Z)("li",{target:"e1wap3mb0"})("cursor:pointer;color:",(function(e){return e.selected?"#242a33":"#757d85"}),";font-weight:",(function(e){return e.selected?"bold":"normal"}),";line-height:12px;"),w=function(e){var t=e.minPage,r=e.maxPage,n=e.currentPage,a=l().totalPageNumber,o=s(),i=function(e){var t=e.target;o({type:"UPDATE_PAGE_NUMBER",value:Number(t.innerText)})};return(0,u.tZ)("div",{className:"SM:w-7/12 LG:w-full text-center mx-auto"},(0,u.tZ)("ol",{className:"inline-flex flex-wrap mx-auto my-3"},n>1&&(0,u.tZ)(N,{className:"text-sm MD:m-1 LG:m-3",selected:!1,onClick:function(){o({type:"UPDATE_PAGE_NUMBER",value:1})}},(0,u.tZ)(M(),{width:".75rem",height:".75rem"})),n>1&&(0,u.tZ)(N,{className:"text-sm MD:m-1 LG:m-3",selected:!1,onClick:function(){o({type:"UPDATE_PAGE_NUMBER",value:n-1})}},(0,u.tZ)(x(),{width:".75rem",height:".75rem"})),function(){for(var e=[],a=t;a<=r;a++)e.push((0,u.tZ)(N,{selected:n===a,onClick:i,key:a,className:"text-sm MD:m-1 LG:m-3 leading-none"},a));return e}(),n<r&&(0,u.tZ)(N,{className:"text-sm MD:m-1 LG:m-3",selected:!1,onClick:function(){o({type:"UPDATE_PAGE_NUMBER",value:n+1})}},(0,u.tZ)(E(),{width:".75rem",height:".75rem"})),a>r&&(0,u.tZ)(N,{className:"text-sm MD:m-1 LG:m-3",selected:!1,onClick:function(){o({type:"UPDATE_PAGE_NUMBER",value:a})}},(0,u.tZ)(Z(),{width:".75rem",height:".75rem"}))))};function P(e,t){return e.filter((function(e,r){return 1===t?r<5:5*t-5<=r&&5*t-1>=r}))}var C=function(e){var t=e.data,r=l(),o=r.categories,c=r.pageNumber,m=s(),f=t.allMarkdownRemark.edges,k=function(e){return e.filter((function(e){return e.node.frontmatter.categories.indexOf(D)>=0||"All"===D}))},p=function(e){return e.filter((function(e){return e.node.frontmatter.title.toUpperCase().indexOf(Z.toUpperCase())>=0||e.node.frontmatter.categories.indexOf(Z)>=0||e.node.frontmatter.summary.toUpperCase().indexOf(Z.toUpperCase())>=0}))},g=(0,a.useState)(1),x=g[0],v=g[1],E=(0,a.useState)(1),L=E[0],M=E[1],b=(0,a.useState)(""),Z=b[0],N=b[1],C=(0,a.useState)("All"),D=C[0],A=C[1],S=(0,a.useState)(k(p(f))),U=S[0],_=S[1],R=(0,a.useState)(P(U,c)),G=R[0],z=R[1];(0,a.useEffect)((function(){T()}),[D,Z,c]),(0,a.useEffect)((function(){m({type:"UPDATE_ALL_POSTS",value:f}),T()}),[]);var T=function(){var e,t,r,a,o,l=k(p(f)),s=(r=(t=c)%10?t:t-9,{minPageNumber:10*Math.floor(r/10)+1,maxPageNumber:10*Math.ceil(r/10)}),i=s.maxPageNumber;v(s.minPageNumber),M((a=l.length,o=i,Math.ceil(a/5)<o?Math.ceil(a/5):o)),m({type:"UPDATE_TOTAL_PAGE_NUMBER",value:Math.ceil(l.length/5)}),_(k(p(f))),z(P(l,c));var u=(e=[""]).concat.apply(e,(0,n.Z)(f.map((function(e){return e.node.frontmatter.categories})))),d=u.filter((function(e,t){return u.indexOf(e)===t}));d.shift(),m({type:"UPDATE_CATEGORIES",value:d.sort()}),m({type:"UPDATE_POSTNUMBER",value:f.length})};return(0,u.tZ)("div",{className:"flex"},(0,u.tZ)(i.Z,{title:"홈",description:"do1con의 블로그 입니다."}),(0,u.tZ)("div",null,(0,u.tZ)(h,{searchWord:Z,setSearchWord:N}),(0,u.tZ)(y,{categories:o,selectedCategory:D,setSelectedCategory:A}),(0,u.tZ)(d,{postList:G,selectedCategory:D}),(0,u.tZ)(w,{minPage:x,maxPage:L,currentPage:c})))}},6905:function(e,t,r){var n=r(7294);function a(e){return n.createElement("svg",e,[n.createElement("desc",{key:0},"Created with Fabric.js 1.7.22"),n.createElement("defs",{key:1}),n.createElement("g",{transform:"translate(128 128) scale(0.72 0.72)",style:{},key:2},n.createElement("g",{style:{stroke:"none",strokeWidth:"0",strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",fill:"none",fillRule:"nonzero",opacity:"1"},transform:"translate(-175.05 -175.05000000000004) scale(3.89 3.89)"},[n.createElement("path",{d:"M 56.75 90 c 0.384 0 0.768 -0.146 1.061 -0.439 c 0.586 -0.586 0.586 -1.535 0 -2.121 L 15.371 45 L 57.811 2.561 c 0.586 -0.585 0.586 -1.536 0 -2.121 c -0.586 -0.586 -1.535 -0.586 -2.121 0 l -43.5 43.5 c -0.586 0.585 -0.586 1.536 0 2.121 l 43.5 43.5 C 55.982 89.854 56.366 90 56.75 90 z",style:{stroke:"none",strokeWidth:"1",strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",fill:"rgb(29,29,27)",fillRule:"nonzero",opacity:"1"},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round",key:0}),n.createElement("path",{d:"M 76.75 90 c 0.384 0 0.768 -0.146 1.061 -0.439 c 0.586 -0.586 0.586 -1.535 0 -2.121 L 35.371 45 L 77.811 2.561 c 0.586 -0.585 0.586 -1.536 0 -2.121 c -0.586 -0.586 -1.535 -0.586 -2.121 0 l -43.5 43.5 c -0.586 0.585 -0.586 1.536 0 2.121 l 43.5 43.5 C 75.982 89.854 76.366 90 76.75 90 z",style:{stroke:"none",strokeWidth:"1",strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",fill:"rgb(29,29,27)",fillRule:"nonzero",opacity:"1"},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round",key:1})]))])}a.defaultProps={version:"1.1",width:"256",height:"256",viewBox:"0 0 256 256",xmlSpace:"preserve"},e.exports=a,a.default=a},573:function(e,t,r){var n=r(7294);function a(e){return n.createElement("svg",e,[n.createElement("desc",{key:0},"Created with Fabric.js 1.7.22"),n.createElement("defs",{key:1}),n.createElement("g",{transform:"translate(128 128) scale(0.72 0.72)",style:{},key:2},n.createElement("g",{style:{stroke:"none",strokeWidth:"0",strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",fill:"none",fillRule:"nonzero",opacity:"1"},transform:"translate(-175.05 -175.05000000000004) scale(3.89 3.89)"},n.createElement("path",{d:"M 66.75 90 c 0.384 0 0.768 -0.146 1.061 -0.439 c 0.586 -0.586 0.586 -1.535 0 -2.121 L 25.371 45 L 67.811 2.561 c 0.586 -0.585 0.586 -1.536 0 -2.121 c -0.586 -0.586 -1.535 -0.586 -2.121 0 l -43.5 43.5 c -0.586 0.585 -0.586 1.536 0 2.121 l 43.5 43.5 C 65.982 89.854 66.366 90 66.75 90 z",style:{stroke:"none",strokeWidth:"1",strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",fill:"rgb(29,29,27)",fillRule:"nonzero",opacity:"1"},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"})))])}a.defaultProps={version:"1.1",width:"256",height:"256",viewBox:"0 0 256 256",xmlSpace:"preserve"},e.exports=a,a.default=a},9338:function(e,t,r){var n=r(7294);function a(e){return n.createElement("svg",e,[n.createElement("desc",{key:0},"Created with Fabric.js 1.7.22"),n.createElement("defs",{key:1}),n.createElement("g",{transform:"translate(128 128) scale(0.72 0.72)",style:{},key:2},n.createElement("g",{style:{stroke:"none",strokeWidth:"0",strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",fill:"none",fillRule:"nonzero",opacity:"1"},transform:"translate(-175.05 -175.05000000000004) scale(3.89 3.89)"},[n.createElement("path",{d:"M 33.25 90 c -0.384 0 -0.768 -0.146 -1.061 -0.439 c -0.586 -0.586 -0.586 -1.535 0 -2.121 L 74.629 45 L 32.189 2.561 c -0.586 -0.585 -0.586 -1.536 0 -2.121 c 0.586 -0.586 1.535 -0.586 2.121 0 l 43.5 43.5 c 0.586 0.585 0.586 1.536 0 2.121 l -43.5 43.5 C 34.018 89.854 33.634 90 33.25 90 z",style:{stroke:"none",strokeWidth:"1",strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",fill:"rgb(29,29,27)",fillRule:"nonzero",opacity:"1"},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round",key:0}),n.createElement("path",{d:"M 13.25 90 c -0.384 0 -0.768 -0.146 -1.061 -0.439 c -0.586 -0.586 -0.586 -1.535 0 -2.121 L 54.629 45 L 12.189 2.561 c -0.586 -0.585 -0.586 -1.536 0 -2.121 c 0.586 -0.586 1.535 -0.586 2.121 0 l 43.5 43.5 c 0.586 0.585 0.586 1.536 0 2.121 l -43.5 43.5 C 14.018 89.854 13.634 90 13.25 90 z",style:{stroke:"none",strokeWidth:"1",strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",fill:"rgb(29,29,27)",fillRule:"nonzero",opacity:"1"},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round",key:1})]))])}a.defaultProps={version:"1.1",width:"256",height:"256",viewBox:"0 0 256 256",xmlSpace:"preserve"},e.exports=a,a.default=a},8668:function(e,t,r){var n=r(7294);function a(e){return n.createElement("svg",e,[n.createElement("desc",{key:0},"Created with Fabric.js 1.7.22"),n.createElement("defs",{key:1}),n.createElement("g",{transform:"translate(128 128) scale(0.72 0.72)",style:{},key:2},n.createElement("g",{style:{stroke:"none",strokeWidth:"0",strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",fill:"none",fillRule:"nonzero",opacity:"1"},transform:"translate(-175.05 -175.05000000000004) scale(3.89 3.89)"},n.createElement("path",{d:"M 23.25 90 c -0.384 0 -0.768 -0.146 -1.061 -0.439 c -0.586 -0.586 -0.586 -1.535 0 -2.121 L 64.629 45 L 22.189 2.561 c -0.586 -0.585 -0.586 -1.536 0 -2.121 c 0.586 -0.586 1.535 -0.586 2.121 0 l 43.5 43.5 c 0.586 0.585 0.586 1.536 0 2.121 l -43.5 43.5 C 24.018 89.854 23.634 90 23.25 90 z",style:{stroke:"none",strokeWidth:"1",strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",fill:"rgb(29,29,27)",fillRule:"nonzero",opacity:"1"},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"})))])}a.defaultProps={version:"1.1",width:"256",height:"256",viewBox:"0 0 256 256",xmlSpace:"preserve"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-index-tsx-abbb66e9d4081c19a7e5.js.map