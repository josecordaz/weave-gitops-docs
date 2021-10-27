(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[1365],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},208:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={title:"Configuration",sidebar_position:2},s=void 0,l={unversionedId:"enterprise/configuration",id:"version-0.4.0/enterprise/configuration",isDocsHomePage:!1,title:"Configuration",description:"Ingress",source:"@site/versioned_docs/version-0.4.0/enterprise/configuration.mdx",sourceDirName:"enterprise",slug:"/enterprise/configuration",permalink:"/docs/enterprise/configuration",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.4.0/enterprise/configuration.mdx",version:"0.4.0",sidebarPosition:2,frontMatter:{title:"Configuration",sidebar_position:2},sidebar:"version-0.4.0/tutorialSidebar",previous:{title:"Upgrading",permalink:"/docs/enterprise/upgrading"},next:{title:"gitops",permalink:"/docs/gitops"}},p=[{value:"Ingress",id:"ingress",children:[]},{value:"Git repository",id:"git-repository",children:[]},{value:"Database",id:"database",children:[{value:"Postgres",id:"postgres",children:[]}]}],c={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ingress"},"Ingress"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise/upgrading#81-ingress"},"Ingress configuration while upgrading")),(0,i.kt)("h2",{id:"git-repository"},"Git repository"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise/upgrading#82-git-repository-configuration"},"Configuring the Git repository while upgrading")),(0,i.kt)("h2",{id:"database"},"Database"),(0,i.kt)("p",null,"WGE stores incoming data from the connected clusters to a relational database. It supports ",(0,i.kt)("strong",{parentName:"p"},"SQLite")," and ",(0,i.kt)("strong",{parentName:"p"},"PostgreSQL"),"."),(0,i.kt)("p",null,"By default ",(0,i.kt)("strong",{parentName:"p"},"SQLite")," will be used, backed by a ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," with the default ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass"),"."),(0,i.kt)("h3",{id:"postgres"},"Postgres"),(0,i.kt)("p",null,"Using a PostgreSQL database does not require any additional setup on the cluster side. The following details are however needed in order to connect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Database server hostname"),(0,i.kt)("li",{parentName:"ul"},"Database name"),(0,i.kt)("li",{parentName:"ul"},"Database user - The database user requires admin privileges on the database server as it will automatically create the necessary schema."),(0,i.kt)("li",{parentName:"ul"},"Database password")),(0,i.kt)("p",null,"The database credentials (user and password) need to be provided separately, before\ninstalling the chart, as a secret. Run the following command to create a secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create secret generic wge-db-credentials \\\n    --namespace wego-system \\\n    --from-literal=username=<database-user> \\\n    --from-literal=password=<database-password>\n")),(0,i.kt)("p",null,"We can then update the ",(0,i.kt)("inlineCode",{parentName:"p"},"values")," configmap:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dbConfig:\n  databaseType: postgres\n  databaseURI: <database-server-hostname>\n  postgresConfig:\n    databaseName: <database-name>\n")))}u.isMDXComponent=!0}}]);