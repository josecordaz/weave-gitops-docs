(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[828],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2837:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={},s=void 0,l={unversionedId:"gitops_beta_install",id:"version-0.4.0/gitops_beta_install",isDocsHomePage:!1,title:"gitops_beta_install",description:"gitops beta install",source:"@site/versioned_docs/version-0.4.0/gitops_beta_install.md",sourceDirName:".",slug:"/gitops_beta_install",permalink:"/docs/gitops_beta_install",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.4.0/gitops_beta_install.md",version:"0.4.0",frontMatter:{},sidebar:"version-0.4.0/tutorialSidebar",previous:{title:"gitops_beta_init",permalink:"/docs/gitops_beta_init"},next:{title:"gitops_delete",permalink:"/docs/gitops_delete"}},p=[{value:"gitops beta install",id:"gitops-beta-install",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-beta-install"},"gitops beta install"),(0,o.kt)("p",null,"Install or upgrade GitOps"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"The beta install command deploys GitOps in the specified namespace,\nadds a cluster entry to the GitOps repo, and persists the GitOps runtime into the\nrepo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops beta install [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Install GitOps in the wego-system namespace\n  gitops beta install --app-config-url ssh://git@github.com/me/mygitopsrepo.git\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --app-config-url string   URL of external repository that will hold automation manifests\n      --dry-run                 outputs all the manifests that would be installed\n  -h, --help                    help for install\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string      config file (default is $HOME/.beta.yaml)\n  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/gitops_beta"},"gitops beta"),"\t - Experimental commands")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-27-oct-2021"},"Auto generated by spf13/cobra on 27-Oct-2021"))}u.isMDXComponent=!0}}]);