(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[8862],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,h=d["".concat(u,".").concat(p)]||d[p]||f[p]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9756),o=n(7294),i=n(3727),a=n(2263),s=n(3919),u=n(412),c=(0,o.createContext)({collectLink:function(){}}),l=n(4996),f=n(8780);var d=function(e){var t,n,d=e.isNavLink,p=e.to,h=e.href,m=e.activeClassName,v=e.isActive,g=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,k=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=(0,a.Z)().siteConfig,O=y.trailingSlash,C=y.baseUrl,x=(0,l.C)().withBaseUrl,P=(0,o.useContext)(c),T=p||h,j=(0,s.Z)(T),N=null==T?void 0:T.replace("pathname://",""),_=void 0!==N?(n=N,w&&function(e){return e.startsWith("/")}(n)?x(n):n):void 0;_&&j&&(_=(0,f.applyTrailingSlash)(_,{trailingSlash:O,baseUrl:C}));var D,E=(0,o.useRef)(!1),U=d?i.OL:i.rU,Z=u.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!Z&&j&&null!=_&&window.docusaurus.prefetch(_),function(){Z&&D&&D.disconnect()}}),[_,Z,j]);var S=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,M=!_||!j||S;return _&&j&&!S&&!g&&P.collectLink(_),M?o.createElement("a",Object.assign({href:_},T&&!j&&{target:"_blank",rel:"noopener noreferrer"},k)):o.createElement(U,Object.assign({},k,{onMouseEnter:function(){E.current||null==_||(window.docusaurus.preload(_),E.current=!0)},innerRef:function(e){var t,n;Z&&e&&j&&(t=e,n=function(){null!=_&&window.docusaurus.prefetch(_)},(D=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))}))).observe(t))},to:_||""},d&&{isActive:v,activeClassName:m}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,s=void 0!==a&&a,u=i.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o},useAllPluginInstancesData:function(){return i},usePluginData:function(){return a}});var r=n(2263);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var t=o()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function a(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,i=e.split(/[#?]/)[0],a="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,a)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6828:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=n(6742),i=n(8084),a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function s(e){var t,n,s,u,c=e.tiers;return r.createElement(o.Z,{to:(s=(0,i.default)()["docusaurus-plugin-content-docs"],u=null==s||null==(t=s.default)||null==(n=t.versions)?void 0:n.find((function(e){return"current"===e.name})),((null==u?void 0:u.path)||"/docs")+"/enterprise/intro"),title:"This feature is a available on "+c,style:a},c)}},3566:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(6828),s={title:"Managing existing clusters",sidebar_position:1,hide_title:!0},u=void 0,c={unversionedId:"cluster-management/managing-existing-clusters",id:"version-0.3.0/cluster-management/managing-existing-clusters",isDocsHomePage:!1,title:"Managing existing clusters",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.3.0/cluster-management/managing-existing-clusters.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/managing-existing-clusters",permalink:"/docs/0.3.0/cluster-management/managing-existing-clusters",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.0/cluster-management/managing-existing-clusters.mdx",version:"0.3.0",sidebarPosition:1,frontMatter:{title:"Managing existing clusters",sidebar_position:1,hide_title:!0},sidebar:"version-0.3.0/tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/0.3.0/cluster-management/intro"},next:{title:"Cluster API Providers",permalink:"/docs/0.3.0/cluster-management/cluster-api-providers"}},l=[{value:"How to: Connect a cluster",id:"how-to-connect-a-cluster",children:[]},{value:"How to: Update a cluster",id:"how-to-update-a-cluster",children:[]},{value:"How to: Disconnect and remove a cluster",id:"how-to-disconnect-and-remove-a-cluster",children:[]}],f={toc:l};function d(e){var t=e.components,u=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,s.title," ",(0,i.kt)(a.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,i.kt)("h2",{id:"how-to-connect-a-cluster"},"How to: Connect a cluster"),(0,i.kt)("p",null,"To connect a cluster to Weave Gitops, first navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Clusters")," section of the UI and click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect a cluster")," button. You will then be presented with a form to add the details of the leaf cluster being connected."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: this is the name of the leaf cluster. This is a required field."),(0,i.kt)("li",{parentName:"ul"},"Ingress URL: this is the publicly accessible HTTP(S) endpoint of the leaf cluster. This is an optional field.")),(0,i.kt)("p",null,"Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save & next")," button to persist these details. You will then be presented with a ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command that you can run to install an agent on your leaf cluster. The agent is responsible for inspecting the leaf cluster and sending back leaf information to the Weave Gitops server. It will not make any changes to your cluster."),(0,i.kt)("p",null,"Ensure that your current kubeconfig context is setup to use the leaf cluster. Then copy the command and run it."),(0,i.kt)("p",null,"After a few seconds, the status of your cluster should change to ",(0,i.kt)("inlineCode",{parentName:"p"},"Connected (Ready)")," which indicates that the leaf cluster has been successfully connected."),(0,i.kt)("h2",{id:"how-to-update-a-cluster"},"How to: Update a cluster"),(0,i.kt)("p",null,"To update a cluster, click on the rightmost icon of that cluster's row. You will be presented with a form that allows you to update its name and ingress URL. Finally click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save & next")," button to persist these changes."),(0,i.kt)("h2",{id:"how-to-disconnect-and-remove-a-cluster"},"How to: Disconnect and remove a cluster"),(0,i.kt)("p",null,"To disconnect a cluster open the config dialog with the \ud83d\udee0 button on the cluster's row."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Disconnect")," tab shows instructions on how to remove the wkp-agent from your leaf cluster."),(0,i.kt)("p",null,'Once the agent has been removed its status will change from "Connected" to ',(0,i.kt)("em",{parentName:"p"},"Last seen"),". Click ",(0,i.kt)("em",{parentName:"p"},"Remove cluster from the management cluster")," to remove the cluster and the meta-data that's been collected."),(0,i.kt)("p",null,"To re-connect the cluster again follow the ",(0,i.kt)("em",{parentName:"p"},"Connect a cluster")," instructions above."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Disconnect cluster",src:n(5050).Z})))}d.isMDXComponent=!0},5050:function(e,t,n){"use strict";t.Z=n.p+"assets/images/disconnect-cluster-fa4a34617b18ae909507952f5f586848.png"}}]);