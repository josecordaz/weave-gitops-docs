(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[6259],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1286:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={},s=void 0,c={unversionedId:"cli-reference/gitops_add_cluster",id:"cli-reference/gitops_add_cluster",isDocsHomePage:!1,title:"gitops_add_cluster",description:"gitops add cluster",source:"@site/docs/cli-reference/gitops_add_cluster.md",sourceDirName:"cli-reference",slug:"/cli-reference/gitops_add_cluster",permalink:"/docs/next/cli-reference/gitops_add_cluster",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/cli-reference/gitops_add_cluster.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gitops_add_app",permalink:"/docs/next/cli-reference/gitops_add_app"},next:{title:"gitops_beta",permalink:"/docs/next/cli-reference/gitops_beta"}},l=[{value:"gitops add cluster",id:"gitops-add-cluster",children:[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"gitops-add-cluster"},"gitops add cluster"),(0,a.kt)("p",null,"Add a new cluster using a CAPI template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gitops add cluster [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n# Add a new cluster using a CAPI template\ngitops add cluster --from-template <template-name> --set key=val\n\n# View a CAPI template populated with parameter values \n# without creating a pull request for it\ngitops add cluster --from-template <template-name> --set key=val --dry-run\n        \n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --base string              The base branch of the remote repository\n      --branch string            The branch to create the pull request from\n      --commit-message string    The commit message to use when adding the CAPI template\n      --description string       The description of the pull request\n      --dry-run                  View the populated template without creating a pull request\n      --from-template string     Specify the CAPI template to create a cluster from\n  -h, --help                     help for cluster\n      --set strings              Set parameter values on the command line (can specify multiple or separate values with commas: key1=val1,key2=val2)\n      --set-credentials string   The CAPI credentials to use\n      --title string             The title of the pull request\n      --url string               URL of remote repository to create the pull request\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   Weave GitOps runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/cli-reference/gitops_add"},"gitops add"),"\t - Add a new Weave GitOps resource")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-3-nov-2021"},"Auto generated by spf13/cobra on 3-Nov-2021"))}u.isMDXComponent=!0}}]);