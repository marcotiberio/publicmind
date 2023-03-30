import{c as be}from"./_commonjsHelpers-28e086c5.js";var X={},ge={get exports(){return X},set exports(y){X=y}};(function(y){(function(A,s){y.exports?y.exports=s():A.Rellax=s()})(typeof window<"u"?window:be,function(){var A=function(s,x){var e=Object.create(A.prototype),f=0,w=0,h=0,m=0,a=[],b=!0,B=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},g=null,T=!1;try{var q=Object.defineProperty({},"passive",{get:function(){T=!0}});window.addEventListener("testPassive",null,q),window.removeEventListener("testPassive",null,q)}catch{}var ne=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,le=window.transformProp||function(){var t=document.createElement("div");if(t.style.transform===null){var r=["Webkit","Moz","ms"];for(var o in r)if(t.style[r[o]+"Transform"]!==void 0)return r[o]+"Transform"}return"transform"}();e.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},x&&Object.keys(x).forEach(function(t){e.options[t]=x[t]});function ie(){if(e.options.breakpoints.length===3&&Array.isArray(e.options.breakpoints)){var t=!0,r=!0,o;if(e.options.breakpoints.forEach(function(i){typeof i!="number"&&(r=!1),o!==null&&i<o&&(t=!1),o=i}),t&&r)return}e.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}x&&x.breakpoints&&ie(),s||(s=".rellax");var C=typeof s=="string"?document.querySelectorAll(s):[s];if(C.length>0)e.elems=C;else{console.warn("Rellax: The elements you're trying to select don't exist.");return}if(e.options.wrapper&&!e.options.wrapper.nodeType){var F=document.querySelector(e.options.wrapper);if(F)e.options.wrapper=F;else{console.warn("Rellax: The wrapper you're trying to use doesn't exist.");return}}var E,se=function(t){var r=e.options.breakpoints;return t<r[0]?"xs":t>=r[0]&&t<r[1]?"sm":t>=r[1]&&t<r[2]?"md":"lg"},pe=function(){for(var t=0;t<e.elems.length;t++){var r=de(e.elems[t]);a.push(r)}},z=function(){for(var t=0;t<a.length;t++)e.elems[t].style.cssText=a[t].style;a=[],w=window.innerHeight,m=window.innerWidth,E=se(m),H(),pe(),N(),b&&(window.addEventListener("resize",z),b=!1,L())},de=function(t){var r=t.getAttribute("data-rellax-percentage"),o=t.getAttribute("data-rellax-speed"),i=t.getAttribute("data-rellax-xs-speed"),c=t.getAttribute("data-rellax-mobile-speed"),d=t.getAttribute("data-rellax-tablet-speed"),u=t.getAttribute("data-rellax-desktop-speed"),v=t.getAttribute("data-rellax-vertical-speed"),k=t.getAttribute("data-rellax-horizontal-speed"),S=t.getAttribute("data-rellax-vertical-scroll-axis"),n=t.getAttribute("data-rellax-horizontal-scroll-axis"),l=t.getAttribute("data-rellax-zindex")||0,O=t.getAttribute("data-rellax-min"),M=t.getAttribute("data-rellax-max"),ce=t.getAttribute("data-rellax-min-x"),ue=t.getAttribute("data-rellax-max-x"),ve=t.getAttribute("data-rellax-min-y"),fe=t.getAttribute("data-rellax-max-y"),R,D=!0;!i&&!c&&!d&&!u?D=!1:R={xs:i,sm:c,md:d,lg:u};var G=e.options.wrapper?e.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(e.options.relativeToWrapper){var me=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;G=me-e.options.wrapper.offsetTop}var I=e.options.vertical&&(r||e.options.center)?G:0,U=e.options.horizontal&&(r||e.options.center)?e.options.wrapper?e.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,Z=I+t.getBoundingClientRect().top,$=t.clientHeight||t.offsetHeight||t.scrollHeight,J=U+t.getBoundingClientRect().left,K=t.clientWidth||t.offsetWidth||t.scrollWidth,Q=r||(I-Z+w)/($+w),V=r||(U-J+m)/(K+m);e.options.center&&(V=.5,Q=.5);var _=D&&R[E]!==null?Number(R[E]):o||e.options.speed,ee=v||e.options.verticalSpeed,te=k||e.options.horizontalSpeed,xe=S||e.options.verticalScrollAxis,we=n||e.options.horizontalScrollAxis,re=j(V,Q,_,ee,te),Y=t.style.cssText,P="",ae=/transform\s*:/i.exec(Y);if(ae){var he=ae.index,W=Y.slice(he),oe=W.indexOf(";");oe?P=" "+W.slice(11,oe).replace(/\s/g,""):P=" "+W.slice(11).replace(/\s/g,"")}return{baseX:re.x,baseY:re.y,top:Z,left:J,height:$,width:K,speed:_,verticalSpeed:ee,horizontalSpeed:te,verticalScrollAxis:xe,horizontalScrollAxis:we,style:Y,transform:P,zindex:l,min:O,max:M,minX:ce,maxX:ue,minY:ve,maxY:fe}},H=function(){var t=f,r=h;if(f=e.options.wrapper?e.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,h=e.options.wrapper?e.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,e.options.relativeToWrapper){var o=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;f=o-e.options.wrapper.offsetTop}return!!(t!=f&&e.options.vertical||r!=h&&e.options.horizontal)},j=function(t,r,o,i,c){var d={},u=(c||o)*(100*(1-t)),v=(i||o)*(100*(1-r));return d.x=e.options.round?Math.round(u):Math.round(u*100)/100,d.y=e.options.round?Math.round(v):Math.round(v*100)/100,d},p=function(){window.removeEventListener("resize",p),window.removeEventListener("orientationchange",p),(e.options.wrapper?e.options.wrapper:window).removeEventListener("scroll",p),(e.options.wrapper?e.options.wrapper:document).removeEventListener("touchmove",p),g=B(L)},L=function(){H()&&b===!1?(N(),g=B(L)):(g=null,window.addEventListener("resize",p),window.addEventListener("orientationchange",p),(e.options.wrapper?e.options.wrapper:window).addEventListener("scroll",p,T?{passive:!0}:!1),(e.options.wrapper?e.options.wrapper:document).addEventListener("touchmove",p,T?{passive:!0}:!1))},N=function(){for(var t,r=0;r<e.elems.length;r++){var o=a[r].verticalScrollAxis.toLowerCase(),i=a[r].horizontalScrollAxis.toLowerCase(),c=o.indexOf("x")!=-1?f:0,d=o.indexOf("y")!=-1?f:0,u=i.indexOf("x")!=-1?h:0,v=i.indexOf("y")!=-1?h:0,k=(d+v-a[r].top+w)/(a[r].height+w),S=(c+u-a[r].left+m)/(a[r].width+m);t=j(S,k,a[r].speed,a[r].verticalSpeed,a[r].horizontalSpeed);var n=t.y-a[r].baseY,l=t.x-a[r].baseX;a[r].min!==null&&(e.options.vertical&&!e.options.horizontal&&(n=n<=a[r].min?a[r].min:n),e.options.horizontal&&!e.options.vertical&&(l=l<=a[r].min?a[r].min:l)),a[r].minY!=null&&(n=n<=a[r].minY?a[r].minY:n),a[r].minX!=null&&(l=l<=a[r].minX?a[r].minX:l),a[r].max!==null&&(e.options.vertical&&!e.options.horizontal&&(n=n>=a[r].max?a[r].max:n),e.options.horizontal&&!e.options.vertical&&(l=l>=a[r].max?a[r].max:l)),a[r].maxY!=null&&(n=n>=a[r].maxY?a[r].maxY:n),a[r].maxX!=null&&(l=l>=a[r].maxX?a[r].maxX:l);var O=a[r].zindex,M="translate3d("+(e.options.horizontal?l:"0")+"px,"+(e.options.vertical?n:"0")+"px,"+O+"px) "+a[r].transform;e.elems[r].style[le]=M}e.options.callback(t)};return e.destroy=function(){for(var t=0;t<e.elems.length;t++)e.elems[t].style.cssText=a[t].style;b||(window.removeEventListener("resize",z),b=!0),ne(g),g=null},z(),e.refresh=z,e};return A})})(ge);const ye=X,Ae=new ye("[data-parallax]",{speed:7,center:!0,horizontal:!0,vertical:!1});window.matchMedia("(max-width: 1280px)").matches&&Ae.destroy();
