(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[522],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,i=new Array(p);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2253:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),p=(n(7294),n(3905)),i={},a=void 0,s={unversionedId:"gitops_app_remove",id:"version-0.3.3/gitops_app_remove",isDocsHomePage:!1,title:"gitops_app_remove",description:"gitops app remove",source:"@site/versioned_docs/version-0.3.3/gitops_app_remove.md",sourceDirName:".",slug:"/gitops_app_remove",permalink:"/docs/gitops_app_remove",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.3/gitops_app_remove.md",version:"0.3.3",frontMatter:{},sidebar:"version-0.3.3/tutorialSidebar",previous:{title:"gitops_app_pause",permalink:"/docs/gitops_app_pause"},next:{title:"gitops_app_status",permalink:"/docs/gitops_app_status"}},c=[{value:"gitops app remove",id:"gitops-app-remove",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"gitops-app-remove"},"gitops app remove"),(0,p.kt)("p",null,"Remove an app from a gitops cluster"),(0,p.kt)("h3",{id:"synopsis"},"Synopsis"),(0,p.kt)("p",null,"Removes an application from a gitops cluster so it will no longer be managed via GitOps"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"gitops app remove <app name> [flags]\n")),(0,p.kt)("h3",{id:"examples"},"Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"\n  # Remove application from gitops control via immediate commit\n  gitops app remove podinfo\n\n")),(0,p.kt)("h3",{id:"options"},"Options"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"      --dry-run   If set, 'gitops app remove' will not make any changes to the system; it will just display the actions that would have been taken\n  -h, --help      help for remove\n")),(0,p.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,p.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/gitops_app"},"gitops app"),"\t - Manages your applications")),(0,p.kt)("h6",{id:"auto-generated-by-spf13cobra-on-25-oct-2021"},"Auto generated by spf13/cobra on 25-Oct-2021"))}u.isMDXComponent=!0}}]);