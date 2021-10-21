(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[2733],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7256:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={sidebar_position:4},s="GitOps Dashboard",c={unversionedId:"gitops-dashboard",id:"gitops-dashboard",isDocsHomePage:!1,title:"GitOps Dashboard",description:"Weave GitOps provides a web UI to help you quickly understand your Application deployments and perform common operations, such as adding a new Application to be deployed to your cluster. The gitops binary contains an HTTP server that can be used to start this browser interface as per the instructions below:",source:"@site/docs/gitops-dashboard.md",sourceDirName:".",slug:"/gitops-dashboard",permalink:"/docs/next/gitops-dashboard",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/gitops-dashboard.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/next/architecture"},next:{title:"Troubleshooting",permalink:"/docs/next/troubleshooting"}},p=[],l={toc:p};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gitops-dashboard"},"GitOps Dashboard"),(0,i.kt)("p",null,"Weave GitOps provides a web UI to help you quickly understand your Application deployments and perform common operations, such as adding a new Application to be deployed to your cluster. The ",(0,i.kt)("inlineCode",{parentName:"p"},"gitops")," binary contains an HTTP server that can be used to start this browser interface as per the instructions below:"),(0,i.kt)("p",null,"To run the dashboard:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ gitops ui run\nINFO[0000] Opening browser at http://0.0.0.0:9001/\nINFO[0000] Serving on port 9001\nOpening in existing browser session.\n")),(0,i.kt)("p",null,"Your browser should open to the Weave GitOps UI:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Weave GitOps UI",src:n(3193).Z})),(0,i.kt)("h1",{id:"what-information-can-i-discover-about-my-applications"},"What information can I discover about my Applications?"),(0,i.kt)("p",null,"Applications being managed by Weave GitOps are displayed in a list. Clicking the name of an Application allows you to view more details including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It's name, deployment type (Kustomize or Helm), URL for the source repository being synchronized to the cluster and the specific Path within the repository where we are looking for deployment manifests."),(0,i.kt)("li",{parentName:"ul"},"A reconciliation graph detailing the on-cluster components which have been created as a result of the deployment."),(0,i.kt)("li",{parentName:"ul"},"Information from Flux regarding the state of the reconciliation"),(0,i.kt)("li",{parentName:"ul"},"A list of the 10 most recent commits to the source git repository helping you to verify which change has been applied to the cluster. This includes a hyperlink back to your git provider for each commit.")),(0,i.kt)("h1",{id:"future-development"},"Future development"),(0,i.kt)("p",null,"The GitOps Dashboard is under active development, watch this space for exciting new features."))}u.isMDXComponent=!0},3193:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wego_ui-b55b9ef68e04b088428c59279b07f3f4.png"}}]);