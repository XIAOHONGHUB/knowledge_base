(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{317:function(t,s,a){},344:function(t,s,a){"use strict";a(317)},368:function(t,s,a){"use strict";a.r(s);a(43),a(4),a(17);var i={data:()=>({date:"",classify1:"",classifyList:[],cataloguePermalink:"",author:null,categories:[]}),created(){this.getPageInfo()},watch:{"$route.path"(){this.classifyList=[],this.getPageInfo()}},methods:{getPageInfo(){const t=this.$page,{relativePath:s}=t,{sidebar:a}=this.$themeConfig,i=s.split("/");i.forEach((t,s)=>{const a=t.split(".");if(s!==i.length-1)if(1===a)this.classifyList.push(a[0]);else{const s=t.indexOf(".");this.classifyList.push(t.substring(s+1)||"")}}),this.classify1=this.classifyList[0];const e=a&&a.catalogue?a.catalogue[this.classify1]:"",o=this.$frontmatter.author||this.$themeConfig.author;let r=(t.frontmatter.date||"").split(" ")[0];const{categories:n}=this.$frontmatter;this.date=r,this.cataloguePermalink=e,this.author=o,this.categories=n},getLink(t){const{cataloguePermalink:s}=this;return t===s?s:`${s}${"/"===s.charAt(s.length-1)?"":"/"}#${t}`}}},e=(a(344),a(14)),o=Object(e.a)(i,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"articleInfo-wrap"},[s("div",{staticClass:"articleInfo"},[t.classify1&&"_posts"!==t.classify1?s("ul",{staticClass:"breadcrumbs"},[s("li",[s("router-link",{staticClass:"iconfont icon-home",attrs:{to:"/",title:"首页"}})],1),t._v(" "),t._l(t.classifyList,(function(a){return s("li",{key:a},[t.cataloguePermalink?s("router-link",{attrs:{to:t.getLink(a)}},[t._v(t._s(a))]):!1!==t.$themeConfig.category?s("router-link",{attrs:{to:"/categories/?category="+encodeURIComponent(a),title:"分类"}},[t._v(t._s(a))]):s("span",[t._v(t._s(a))])],1)}))],2):t._e(),t._v(" "),s("div",{staticClass:"info"},[t.author?s("div",{staticClass:"author iconfont icon-touxiang",attrs:{title:"作者"}},[t.author.href||t.author.link&&"string"==typeof t.author.link?s("a",{staticClass:"beLink",attrs:{href:t.author.href||t.author.link,target:"_blank",title:"作者"}},[t._v(t._s(t.author.name))]):s("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.author.name||t.author))])]):t._e(),t._v(" "),t.date?s("div",{staticClass:"date iconfont icon-riqi",attrs:{title:"创建时间"}},[s("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.date))])]):t._e(),t._v(" "),!1===t.$themeConfig.category||t.classify1&&"_posts"!==t.classify1||!t.categories?t._e():s("div",{staticClass:"date iconfont icon-wenjian",attrs:{title:"分类"}},t._l(t.categories,(function(a,i){return s("router-link",{key:i,attrs:{to:"/categories/?category="+encodeURIComponent(a)}},[t._v(t._s(a+" "))])})),1)])])])}),[],!1,null,"06225672",null);s.default=o.exports}}]);