"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4697],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(o),d=n,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return o?r.createElement(f,a(a({ref:t},p),{},{components:o})):r.createElement(f,a({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},1010:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=o(7462),n=o(3366),i=(o(7294),o(3905)),a=["components"],s={sidebar_position:2},l="9.2 Plot IDs",c={unversionedId:"09keys/plot_ids",id:"09keys/plot_ids",isDocsHomePage:!1,title:"9.2 Plot IDs",description:"A plot ID is a 32-byte value that is used as a deterministic seed to create an entire plot. In other words, two plots with the same plot ID will create byte-identical plot files. A plot ID is a 32-byte value that is used as a deterministic seed to create an entire plot. In other words, two plots with the same plot ID will create byte-identical plot files. Plot IDs are public values that get put into Proof of Space objects.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/09keys/plot_ids.md",sourceDirName:"09keys",slug:"/09keys/plot_ids",permalink:"/zh/docs/09keys/plot_ids",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/09keys/plot_ids.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"9.1 BLS Keys",permalink:"/zh/docs/09keys/keys-and-signatures"},next:{title:"9.3 Plot Public Keys",permalink:"/zh/docs/09keys/plot_public_keys"}},p=[],u={toc:p};function h(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"92-plot-ids"},"9.2 Plot IDs"),(0,i.kt)("p",null,"A plot ID is a 32-byte value that is used as a deterministic seed to create an entire plot. In other words, two plots with the same plot ID will create byte-identical plot files. A plot ID is a 32-byte value that is used as a deterministic seed to create an entire plot. In other words, two plots with the same plot ID will create byte-identical plot files. Plot IDs are public values that get put into Proof of Space objects."),(0,i.kt)("p",null,"A plot ID can be generated in one of two ways, depending on the desired farming method of the plot."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/img/keys/plot_id.png",alt:"drawing"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Farm to pool public key. This method of farming is desirable if solo farming (no pools). Farm to pool public key. This method of farming is desirable if solo farming (no pools). To farm a plot like this, we hash together the pool public key and the plot public key (explained later). When successfully farming a block, the pool private key must sign the reward address. The drawback of this method is that if using a pool, the pool cannot be changed, and the plot is tied to the pool forever. When successfully farming a block, the pool private key must sign the reward address. The drawback of this method is that if using a pool, the pool cannot be changed, and the plot is tied to the pool forever.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Farm to pool contract address. Farm to pool contract address. This method of farming is suitable for users who want to farm to a pool, and to be able to change pools in the future. Most farmers will likely use this method. Most farmers will likely use this method."))),(0,i.kt)("p",null,"Instead of requiring a signature by the pool, rewards go straight into the puzzle hash (or address), that is encoded into the plot. This address is a smart contract controlled by the user, which specifies the user's current pool. The user can switch pools, with a timeout delay that the pool operator may customize (typically 30 minutes). This address is a smart contract controlled by the user, which specifies the user's current pool. The user can switch pools, with a timeout delay that the pool operator may customize (typically 30 minutes)."),(0,i.kt)("p",null,"This approach requires creating a blockchain transaction of at least one mojo before farming. This approach requires creating a blockchain transaction of at least one mojo before farming. Farmers can get 100 mojos for free from the official ",(0,i.kt)("a",{parentName:"p",href:"https://faucet.chia.net/",title:"Chia Network's official faucet"},"faucet"),"."),(0,i.kt)("p",null,"The plot public key is explained in the next section."))}h.isMDXComponent=!0}}]);