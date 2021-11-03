(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[8799],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5841:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),p={},a=void 0,l={unversionedId:"cli-reference/gitops_delete_app",id:"version-0.4.1/cli-reference/gitops_delete_app",isDocsHomePage:!1,title:"gitops_delete_app",description:"gitops delete app",source:"@site/versioned_docs/version-0.4.1/cli-reference/gitops_delete_app.md",sourceDirName:"cli-reference",slug:"/cli-reference/gitops_delete_app",permalink:"/docs/cli-reference/gitops_delete_app",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.4.1/cli-reference/gitops_delete_app.md",version:"0.4.1",frontMatter:{},sidebar:"version-0.4.1/tutorialSidebar",previous:{title:"gitops_delete",permalink:"/docs/cli-reference/gitops_delete"},next:{title:"gitops_delete_cluster",permalink:"/docs/cli-reference/gitops_delete_cluster"}},s=[{value:"gitops delete app",id:"gitops-delete-app",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gitops-delete-app"},"gitops delete app"),(0,i.kt)("p",null,"Delete an app from a gitops cluster"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Deletes an application from a gitops cluster so it will no longer be managed via GitOps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gitops delete app <app name> [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n  # Delete application from gitops control via immediate commit\n  gitops delete app podinfo\n\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --dry-run   If set, 'gitops delete app' will not make any changes to the system; it will just display the actions that would have been taken\n  -h, --help      help for app\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   Weave GitOps runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli-reference/gitops_delete"},"gitops delete"),"\t - Delete one or many Weave GitOps resources")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-3-nov-2021"},"Auto generated by spf13/cobra on 3-Nov-2021"))}d.isMDXComponent=!0}}]);