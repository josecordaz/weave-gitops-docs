(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[225],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9756),a=n(7294),i=n(3727),l=n(2263),s=n(3919),o=n(412),u=(0,a.createContext)({collectLink:function(){}}),c=n(4996),p=n(8780);var d=function(e){var t,n,d=e.isNavLink,m=e.to,f=e.href,v=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,b=void 0===k||k,w=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=(0,l.Z)().siteConfig,C=y.trailingSlash,E=y.baseUrl,T=(0,c.C)().withBaseUrl,N=(0,a.useContext)(u),S=m||f,O=(0,s.Z)(S),A=null==S?void 0:S.replace("pathname://",""),_=void 0!==A?(n=A,b&&function(e){return e.startsWith("/")}(n)?T(n):n):void 0;_&&O&&(_=(0,p.applyTrailingSlash)(_,{trailingSlash:C,baseUrl:E}));var P,I=(0,a.useRef)(!1),M=d?i.OL:i.rU,j=o.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!j&&O&&null!=_&&window.docusaurus.prefetch(_),function(){j&&P&&P.disconnect()}}),[_,j,O]);var x=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,R=!_||!O||x;return _&&O&&!x&&!h&&N.collectLink(_),R?a.createElement("a",Object.assign({href:_},S&&!O&&{target:"_blank",rel:"noopener noreferrer"},w)):a.createElement(M,Object.assign({},w,{onMouseEnter:function(){I.current||null==_||(window.docusaurus.preload(_),I.current=!0)},innerRef:function(e){var t,n;j&&e&&O&&(t=e,n=function(){null!=_&&window.docusaurus.prefetch(_)},(P=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),n())}))}))).observe(t))},to:_||""},d&&{isActive:g,activeClassName:v}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,l=i.forcePrependBaseUrl,s=void 0!==l&&l,o=i.absolute,u=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a},useAllPluginInstancesData:function(){return i},usePluginData:function(){return l}});var r=n(2263);function a(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var t=a()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function l(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],l="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,l)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},7181:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6742),i=n(8084),l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function s(e){var t,n,s,o,u=e.tiers;return r.createElement(a.Z,{to:(s=(0,i.default)()["docusaurus-plugin-content-docs"],o=null==s||null==(t=s.default)||null==(n=t.versions)?void 0:n.find((function(e){return"current"===e.name})),((null==o?void 0:o.path)||"/docs")+"/enterprise/intro"),title:"This feature is a available on "+u,style:l},u)}},7591:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=n(7181),s={title:"Templates",hide_title:!0},o=void 0,u={unversionedId:"cluster-management/cli/cli-templates",id:"version-0.4.1/cluster-management/cli/cli-templates",isDocsHomePage:!1,title:"Templates",description:"Templates",source:"@site/versioned_docs/version-0.4.1/cluster-management/cli/cli-templates.mdx",sourceDirName:"cluster-management/cli",slug:"/cluster-management/cli/cli-templates",permalink:"/docs/cluster-management/cli/cli-templates",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.4.1/cluster-management/cli/cli-templates.mdx",version:"0.4.1",frontMatter:{title:"Templates",hide_title:!0},sidebar:"version-0.4.1/tutorialSidebar",previous:{title:"Clusters",permalink:"/docs/cluster-management/cli/cli-clusters"},next:{title:"Introduction",permalink:"/docs/enterprise/intro"}},c=[{value:'Templates <TierLabel tiers="enterprise" />',id:"templates",children:[{value:"Introduction",id:"introduction",children:[]},{value:"Listing templates",id:"listing-templates",children:[]},{value:"Listing template parameters",id:"listing-template-parameters",children:[]},{value:"Rendering a template with parameters",id:"rendering-a-template-with-parameters",children:[]},{value:"Creating a pull request",id:"creating-a-pull-request",children:[]},{value:"Listing template infrastructure credentials",id:"listing-template-infrastructure-credentials",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"templates"},"Templates ",(0,i.kt)(l.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The MCCP CLI allows listing and rendering of ",(0,i.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," resources, viewing\nof template parameters, viewing of infrastructure credentials and submission of\npull requests for creating Kubernetes clusters using the terminal. Currently,\nthe CAPA (AWS) and CAPD (Docker) providers are supported."),(0,i.kt)("h3",{id:"listing-templates"},"Listing templates"),(0,i.kt)("p",null,"To get a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," resources run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mccp templates list\n")),(0,i.kt)("p",null,"This command returns a list of all available ",(0,i.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," resources that have\nbeen added previously to the management cluster. In the following example, only\na single ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api-provider-aws/blob/b6494f993242d7849cd538177ccd74a7a60de1d9/templates/cluster-template-eks-fargate.yaml"},"template")," is returned named ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-template-eks-fargate"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NAME                            DESCRIPTION\ncluster-template-eks-fargate    This is an AWS cluster template for EKS Fargate\n")),(0,i.kt)("h3",{id:"listing-template-parameters"},"Listing template parameters"),(0,i.kt)("p",null,"To get a list of parameters for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mccp templates render cluster-template-eks-fargate --list-parameters\n")),(0,i.kt)("p",null,"This command returns a list of all template parameters for a given template.\nThese parameters need to be set in order to render a template or create a pull\nrequest for a new CAPI cluster. In the following example, four template\nparameters are shown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NAME                DESCRIPTION\nAWS_REGION          The AWS region to deploy the cluster to.\nAWS_SSH_KEY_NAME    The AWS SSH key name.\nCLUSTER_NAME        The name of the cluster.\nKUBERNETES_VERSION  The version of Kubernetes to deploy.\n")),(0,i.kt)("h3",{id:"rendering-a-template-with-parameters"},"Rendering a template with parameters"),(0,i.kt)("p",null,"To set the parameters for a template and render it run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mccp templates render cluster-template-eks-fargate \\\n    --set=CLUSTER_NAME=dev \\\n    --set=AWS_REGION=us-east-1 \\\n    --set=AWS_SSH_KEY_NAME=ssh_key \\\n    --set=KUBERNETES_VERSION=1.19\n")),(0,i.kt)("p",null,"This command uses the parameters supplied to output the CAPI manifest to the\nterminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: cluster.x-k8s.io/v1alpha4\nkind: Cluster\nmetadata:\n  name: dev\nspec:\n  clusterNetwork:\n    pods:\n      cidrBlocks:\n      - 192.168.0.0/16\n  controlPlaneRef:\n    apiVersion: controlplane.cluster.x-k8s.io/v1alpha4\n    kind: AWSManagedControlPlane\n    name: dev-control-plane\n  infrastructureRef:\n    apiVersion: infrastructure.cluster.x-k8s.io/v1alpha4\n    kind: AWSManagedCluster\n    name: dev\n\n---\napiVersion: infrastructure.cluster.x-k8s.io/v1alpha4\nkind: AWSManagedCluster\nmetadata:\n  name: dev\n\n---\napiVersion: controlplane.cluster.x-k8s.io/v1alpha4\nkind: AWSManagedControlPlane\nmetadata:\n  name: dev-control-plane\nspec:\n  region: us-east-1\n  sshKeyName: ssh_key\n  version: "1.19"\n\n---\napiVersion: infrastructure.cluster.x-k8s.io/v1alpha4\nkind: AWSFargateProfile\nmetadata:\n  name: dev-fargate-0\nspec:\n  clusterName: mb-test-1\n  selectors:\n  - namespace: default\n')),(0,i.kt)("h3",{id:"creating-a-pull-request"},"Creating a pull request"),(0,i.kt)("p",null,"To create a pull request for a new Kubernetes cluster using a template run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mccp templates render cluster-template-eks-fargate \\\n    --set=CLUSTER_NAME=dev \\\n    --set=AWS_REGION=us-east-1 \\\n    --set=AWS_SSH_KEY_NAME=ssh_key \\\n    --set=KUBERNETES_VERSION=1.19\n    --create-pr \\\n    --pr-branch=new-dev-cluster \\\n    --pr-commit-message="Add new template" \\\n    --pr-title="New dev cluster" \\\n    --pr-description="Create a new dev cluster"\n')),(0,i.kt)("p",null,"This command returns a message that includes the URL for the new pull request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Created pull request: https://github.com/weaveworks/mccp-demo/pull/1\n")),(0,i.kt)("h3",{id:"listing-template-infrastructure-credentials"},"Listing template infrastructure credentials"),(0,i.kt)("p",null,"To get a list of infrastructure credentials for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mccp templates render cluster-template-eks-fargate --list-credentials\n")),(0,i.kt)("p",null,"This command returns the list of all infrastructure credentials."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NAME\ndefault-account\n")))}d.isMDXComponent=!0}}]);