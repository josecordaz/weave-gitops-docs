(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[2237],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4936:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={},c=void 0,p={unversionedId:"cli-reference/gitops_beta_init",id:"cli-reference/gitops_beta_init",isDocsHomePage:!1,title:"gitops_beta_init",description:"gitops beta init",source:"@site/docs/cli-reference/gitops_beta_init.md",sourceDirName:"cli-reference",slug:"/cli-reference/gitops_beta_init",permalink:"/docs/next/cli-reference/gitops_beta_init",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/cli-reference/gitops_beta_init.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gitops_beta_add_app",permalink:"/docs/next/cli-reference/gitops_beta_add_app"},next:{title:"gitops_beta_install",permalink:"/docs/next/cli-reference/gitops_beta_install"}},s=[{value:"gitops beta init",id:"gitops-beta-init",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-beta-init"},"gitops beta init"),(0,o.kt)("p",null,"Initialize a git repo into a GitOps repo"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"This will add the base directory structure\nto a repository so that it can be used in the add and\ninstall commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops beta init [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for init\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string      config file (default is $HOME/.beta.yaml)\n  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   Weave GitOps runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/cli-reference/gitops_beta"},"gitops beta"),"\t - Experimental commands")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-3-nov-2021"},"Auto generated by spf13/cobra on 3-Nov-2021"))}u.isMDXComponent=!0}}]);