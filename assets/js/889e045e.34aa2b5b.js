"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[997],{3905:function(f,e,t){t.d(e,{Zo:function(){return b},kt:function(){return s}});var a=t(7294);function n(f,e,t){return e in f?Object.defineProperty(f,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):f[e]=t,f}function r(f,e){var t=Object.keys(f);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(f);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(f,e).enumerable}))),t.push.apply(t,a)}return t}function l(f){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(f,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(f,e,Object.getOwnPropertyDescriptor(t,e))}))}return f}function c(f,e){if(null==f)return{};var t,a,n=function(f,e){if(null==f)return{};var t,a,n={},r=Object.keys(f);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(n[t]=f[t]);return n}(f,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(f);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(f,t)&&(n[t]=f[t])}return n}var d=a.createContext({}),i=function(f){var e=a.useContext(d),t=e;return f&&(t="function"==typeof f?f(e):l(l({},e),f)),t},b=function(f){var e=i(f.components);return a.createElement(d.Provider,{value:e},f.children)},o={inlineCode:"code",wrapper:function(f){var e=f.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(f,e){var t=f.components,n=f.mdxType,r=f.originalType,d=f.parentName,b=c(f,["components","mdxType","originalType","parentName"]),p=i(t),s=n,m=p["".concat(d,".").concat(s)]||p[s]||o[s]||r;return t?a.createElement(m,l(l({ref:e},b),{},{components:t})):a.createElement(m,l({ref:e},b))}));function s(f,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof f||n){var r=t.length,l=new Array(r);l[0]=p;var c={};for(var d in e)hasOwnProperty.call(e,d)&&(c[d]=e[d]);c.originalType=f,c.mdxType="string"==typeof f?f:n,l[1]=c;for(var i=2;i<r;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6779:function(f,e,t){t.r(e),t.d(e,{assets:function(){return b},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return o}});var a=t(7462),n=t(3366),r=(t(7294),t(3905)),l=["components"],c={id:"nft_rpcs",title:"NFT0 RPCs",sidebar_label:"12.3 NFT0 RPCs",sidebar_position:3},d=void 0,i={unversionedId:"12rpcs/nft_rpcs",id:"12rpcs/nft_rpcs",title:"NFT0 RPCs",description:"Commands",source:"@site/docs/12rpcs/nft_rpcs.md",sourceDirName:"12rpcs",slug:"/12rpcs/nft_rpcs",permalink:"/docs/12rpcs/nft_rpcs",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/12rpcs/nft_rpcs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"nft_rpcs",title:"NFT0 RPCs",sidebar_label:"12.3 NFT0 RPCs",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"12.2 Full Node API",permalink:"/docs/12rpcs/full_node_api"},next:{title:"TODO",permalink:"/docs/13cli/cli"}},b={},o=[{value:"Commands",id:"commands",level:2},{value:"Note about Windows",id:"note-about-windows",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>nft_mint_nft</code>",id:"nft_mint_nft",level:3},{value:"<code>nft_get_nfts</code>",id:"nft_get_nfts",level:3},{value:"<code>nft_transfer_nft</code>",id:"nft_transfer_nft",level:3},{value:"<code>nft_add_uri</code>",id:"nft_add_uri",level:3}],p={toc:o};function s(f){var e=f.components,t=(0,n.Z)(f,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#nft_mint_nft"},(0,r.kt)("inlineCode",{parentName:"a"},"nft_mint_nft"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#nft_get_nfts"},(0,r.kt)("inlineCode",{parentName:"a"},"nft_get_nfts"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#nft_transfer_nft"},(0,r.kt)("inlineCode",{parentName:"a"},"nft_transfer_nft"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#nft_add_uri"},(0,r.kt)("inlineCode",{parentName:"a"},"nft_add_uri")))),(0,r.kt)("h2",{id:"note-about-windows"},"Note about Windows"),(0,r.kt)("p",null,"This document will use Linux/MacOS RPC syntax. When running rpc commands on Windows, you'll need to escape all quotes with backslashes."),(0,r.kt)("p",null,"For example, here is a typical RPC command on Linux and MacOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{"wallet_type": "nft_wallet"}\'\n')),(0,r.kt)("p",null,"To run the same command on Windows, you need to escape the quotes, so it looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{\\"wallet_type\\": \\"nft_wallet\\"}\'\n')),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"nft_mint_nft"},(0,r.kt)("inlineCode",{parentName:"h3"},"nft_mint_nft")),(0,r.kt)("p",null,"Functionality: Mint a new NFT"),(0,r.kt)("p",null,"Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"chia rpc wallet [OPTIONS] nft_mint_nft [REQUEST]")),(0,r.kt)("p",null,"Options: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"center"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"center"},"None"),(0,r.kt)("td",{parentName:"tr",align:"center"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"wallet_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Wallet ID")," in which to mint an NFT, obtainable by running ",(0,r.kt)("inlineCode",{parentName:"td"},"chia wallet show"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"uris"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A list of URIs to mark the location(s) of the NFT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"hash"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The hash of the NFT. This should use sha256 for proper verification against the URI list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"artist_percentage"),(0,r.kt)("td",{parentName:"tr",align:"center"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For NFT1, this will be the royalty that will go to the original artist each time the NFT is sold. The percentage is multiplied by 100 -- for example, to set a 15% royalty, set this value to 1500. However, this feature is disabled in NFT0. The default value is 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"artist_address"),(0,r.kt)("td",{parentName:"tr",align:"center"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wallet address of the original artist. Royalties will be sent to this address. For NFT0, this feature is disabled. For NFT1, this could be either an XCH address or a DID address")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Request\nchia rpc wallet nft_mint_nft \'{\n  "wallet_id": 3, \n  "uris": [\n    "https://images.pexels.com/photos/11053072/pexels-photo-11053072.jpeg"\n  ], \n  "hash": "14836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb0", \n  "artist_percentage": 1500, \n  "artist_address": "txch1yxpslrx30k7lnngpfczr3ltrge0ap25f4739jet5lz069lhn5szsu49uyh"\n}\'\n\n// Response\n{\n    "nft": {\n        "additions": [\n          ...\n        ],\n        "amount": 1,\n        "confirmed": false,\n        "confirmed_at_height": 0,\n        "created_at_time": 1651912565,\n        "fee_amount": 0,\n        "memos": [],\n        "name": "0xdd14793f28b8d3d94782a5d99398094e6d0e612e3101a0fe806c474dab2feb48",\n        "removals": [\n          ...\n        ],\n        "sent": 0,\n        "sent_to": [],\n        "spend_bundle": {\n          ...\n        },\n        "to_puzzle_hash": "0xae3c67057b390a1d6192d7f48e4585dd626eed9c1ac7b941668fb53cc432c034",\n        "trade_id": null,\n        "type": 1,\n        "wallet_id": 3\n    },\n    "success": true,\n    "wallet_id": 3\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nft_get_nfts"},(0,r.kt)("inlineCode",{parentName:"h3"},"nft_get_nfts")),(0,r.kt)("p",null,"Functionality: Show all NFTs in a given wallet"),(0,r.kt)("p",null,"Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"chia rpc wallet [OPTIONS] nft_get_nfts [REQUEST]")),(0,r.kt)("p",null,"Options: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"center"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"center"},"None"),(0,r.kt)("td",{parentName:"tr",align:"center"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"wallet_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Wallet ID")," from which to retrieve the NFTs, obtainable by running ",(0,r.kt)("inlineCode",{parentName:"td"},"chia wallet show"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Request\nchia rpc wallet nft_get_nfts \'{"wallet_id": 3}\'\n\n// Response\n{\n    "nft_list": [\n        [\n            {\n                "coin": {\n                    "amount": 1,\n                    "parent_coin_info": "0xa2cde90cc29793f305c2d2f06f1036311c8ed894b73f5a755c38f88502c4d145",\n                    "puzzle_hash": "0xe7dc6689665e6fffa03651030de3dc0a9a268aa8a0f81b563b805a37f8fd8e21"\n                },\n                "full_puzzle": \n                ...,\n                "lineage_proof": {\n                    "amount": 1,\n                    "inner_puzzle_hash": "0x0270e884ef2beb0a5c3b685f9edc3dc572fbfe73f7f07971ae7ee1aa681ccc00",\n                    "parent_name": "0x831404fe4d27616a5527e8a0e86b9ef92ea5ec5f01240d19a421ac9e907eafa1"\n                }\n            },\n            [\n                "0xff75ffc04468747470733a2f2f696d616765732e706578656c732e636f6d2f70686f746f732f31313035333037322f706578656c732d70686f746f2d31313035333037322e6a70656780",\n                "0xff68c04031343833366238366134386531623262356538353732313361663937353334373034343735623463313535643334623263623833656434623763626132626230"\n            ]\n        ],\n        [\n            {\n                "coin": {\n                    "amount": 1,\n                    "parent_coin_info": "0x0c0dff49a3c9ec0f5b24160f4740803653477288eebf99894fa90e0ec963314e",\n                    "puzzle_hash": "0x2e722eb8182a223e7a8a6dde54b5729601cdbb6d0eeafd6879be4aaf45ec3461"\n                },\n                "full_puzzle": ...,\n                "lineage_proof": {\n                    "amount": 1,\n                    "inner_puzzle_hash": "0xca2a90c0f6d701d21ee195898cd04c0d2a54ab26aa43d8677f60cb0a516408d1",\n                    "parent_name": "0xca13470716d7dc09c36614066e4180c0ad7a54a51367e7824c75778b13c747f3"\n                }\n            },\n            [\n                "0xff75ffc04468747470733a2f2f696d616765732e706578656c732e636f6d2f70686f746f732f31313035333037322f706578656c732d70686f746f2d31313035333037322e6a70656780",\n                "0xff68c04031343833366238366134386531623262356538353732313361663937353334373034343735623463313535643334623263623833656434623763626132626230"\n            ]\n        ],\n        [\n            {\n                "coin": {\n                    "amount": 1,\n                    "parent_coin_info": "0xf5e9c797a875e31b3ec1b381a08c28b17f6273dd9ab6d7bde88e23bd3b18d654",\n                    "puzzle_hash": "0xc70e8483089f32b4a5ca2ba34f3d2524cb8823cda8592b412a424deec8e84299"\n                },\n                "full_puzzle": \n                ...,\n                "lineage_proof": {\n                    "amount": 1,\n                    "inner_puzzle_hash": "0x123b4e88eacfc482d5b447bb3ff3ccbf3b385c9e7c04e8b5594a83fc9d53e1fd",\n                    "parent_name": "0x0a53f69de29dd378cfb10bae816297c5491c39de2d2a67815f341bd120c70fa2"\n                }\n            },\n            [\n                "0xff75ffc04468747470733a2f2f696d616765732e706578656c732e636f6d2f70686f746f732f31313035333037322f706578656c732d70686f746f2d31313035333037322e6a70656780",\n                "0xff6886313432626230"\n            ]\n        ]\n    ],\n    "success": true,\n    "wallet_id": 3\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nft_transfer_nft"},(0,r.kt)("inlineCode",{parentName:"h3"},"nft_transfer_nft")),(0,r.kt)("p",null,"Functionality: Transfer an NFT to a different XCH address"),(0,r.kt)("p",null,"Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"chia rpc wallet [OPTIONS] nft_transfer_nft [REQUEST]")),(0,r.kt)("p",null,"Options: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"center"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"center"},"None"),(0,r.kt)("td",{parentName:"tr",align:"center"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"wallet_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Wallet ID")," of the NFT to transfer, obtainable by running ",(0,r.kt)("inlineCode",{parentName:"td"},"chia wallet show"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"target_address"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address to transfer the NFT to. For NFT0 this must be an XCH address. For NFT1 this could also be a DID address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"nft_coin_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The coin ID of the NFT to transfer")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Request\nchia rpc wallet nft_transfer_nft \'{"wallet_id": 2, "target_address": "txch167lgv3v86m6vzyr9s44w2xwsnuxcdvsw2lvsf7ru03cq6p7xyngs7mvju7", "nft_coin_id": "4296D4E49E2056DB5AEB62DF849851E61326DAEA4337825BE15410E7F4C07E32"}\n\n// Response\n{\n    "spend_bundle": {\n        "aggregated_signature": "0x91dc6a78a2ca1a0992c3b4c0f4cb93c2a8f04c58b9b82afe2b383975b1fb346e9f039f1dd50792383513c6645c8dfa9e061a52468ddefba25deb706c3c9e2bda8ac1431238d926c6eb3c23ee89f882e670b6a285717934af368d2e1db31def60",\n        "coin_solutions": [\n            {\n                "coin": {\n                    "amount": 1,\n                    "parent_coin_info": "0xeb46562a95a335f77b4d0d97458580674a10b210c849c1d01c06ec29d0bde8cc",\n                    "puzzle_hash": "0xb28550e1d3cec070aa79ff582d5327d5fed881c7b66acc2977e84e5a49109fe1"\n                },\n                "puzzle_reveal": "0xff02ffff01ff02ffff01ff02ffff03ffff18ff2fff3c80ffff01ff04ffff04ff10ffff04ff2fff808080ffff04ffff02ff3effff04ff02ffff04ff05ffff04ffff0bff27ffff02ffff03ff77ffff01ff02ff36ffff04ff02ffff04ff09ffff04ff57ffff04ffff02ff2effff04ff02ffff04ff05ff80808080ff808080808080ffff011d80ff0180ffff02ffff03ff77ffff0181b7ffff015780ff018080ffff04ff77ff808080808080ffff02ff26ffff04ff02ffff04ff05ffff04ffff02ff0bff5f80ffff01ff8080808080808080ffff01ff088080ff0180ffff04ffff01ffffff49ff4702ff33ff0401ffff01ff02ff02ffff03ff05ffff01ff02ff3affff04ff02ffff04ff0dffff04ffff0bff2affff0bff3cff2c80ffff0bff2affff0bff2affff0bff3cff1280ff0980ffff0bff2aff0bffff0bff3cff8080808080ff8080808080ffff010b80ff0180ffffff02ffff03ff0bffff01ff02ffff03ffff02ffff03ffff09ff23ff1480ffff01ff02ffff03ffff18ff81b3ff3c80ffff01ff0101ff8080ff0180ff8080ff0180ffff01ff02ffff03ffff20ff1780ffff01ff02ffff03ffff09ff81b3ffff01818f80ffff01ff02ff26ffff04ff02ffff04ff05ffff04ff1bffff04ff3cff808080808080ffff01ff04ffff04ff23ffff04ffff02ff36ffff04ff02ffff04ff09ffff04ff53ffff04ffff02ff2effff04ff02ffff04ff05ff80808080ff808080808080ff738080ffff02ff26ffff04ff02ffff04ff05ffff04ff1bffff04ff3cff8080808080808080ff0180ffff01ff088080ff0180ffff01ff04ff13ffff02ff26ffff04ff02ffff04ff05ffff04ff1bffff04ff17ff8080808080808080ff0180ffff01ff02ffff03ff17ff80ffff01ff088080ff018080ff0180ff0bff2affff0bff3cff3880ffff0bff2affff0bff2affff0bff3cff1280ff0580ffff0bff2affff02ff3affff04ff02ffff04ff07ffff04ffff0bff3cff3c80ff8080808080ffff0bff3cff8080808080ffff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff2effff04ff02ffff04ff09ff80808080ffff02ff2effff04ff02ffff04ff0dff8080808080ffff01ff0bff3cff058080ff0180ff02ffff03ffff21ff17ffff09ff0bff158080ffff01ff04ff28ffff04ff0bff808080ffff01ff088080ff0180ff018080ffff04ffff01ffa0f1e8350cec62f8204aaf867cc3c12cae369f619258206616108c6cfd7be760b3ffa0c2f3f7d54d254381fd33fbe2b6c031e5be3ba1267215a2fa182e064ed6015fefa0eff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9ffff04ffff01ff02ffff01ff02ffff01ff04ffff04ff10ffff04ff81bfff808080ffff02ff3effff04ff02ffff04ff05ffff04ffff02ff3affff04ff02ffff04ff17ffff04ff0bffff04ffff02ff2fff5f80ff808080808080ffff04ff81bfffff01ff8080808080808080ffff04ffff01ffffff49ff0233ffff0401ff0102ffffffff02ffff03ff05ffff01ff02ff22ffff04ff02ffff04ff0dffff04ffff0bff3cffff0bff34ff2480ffff0bff3cffff0bff3cffff0bff34ff2c80ff0980ffff0bff3cff0bffff0bff34ff8080808080ff8080808080ffff010b80ff0180ff02ffff03ff17ffff01ff02ffff03ffff09ff47ffff0181e880ffff01ff02ffff03ffff09ffff02ff2effff04ff02ffff04ff81a7ff80808080ff0580ffff01ff02ff81a7ffff04ff0bffff04ff05ffff04ff820167ff8080808080ffff01ff088080ff0180ffff01ff02ff32ffff04ff02ffff04ff05ffff04ff0bffff04ff37ff80808080808080ff0180ffff01ff04ffff04ff0bffff04ff05ff808080ffff01ff80808080ff0180ffff02ffff03ff05ffff01ff04ff09ffff02ff2affff04ff02ffff04ff0dffff04ff0bff808080808080ffff010b80ff0180ff02ff26ffff04ff02ffff04ffff02ff32ffff04ff02ffff04ff05ffff04ff0bffff04ff17ff808080808080ffff04ff17ff8080808080ffffff04ff09ffff04ffff02ff2affff04ff02ffff04ff15ffff04ff0bff8080808080ff808080ff0bff3cffff0bff34ff2880ffff0bff3cffff0bff3cffff0bff34ff2c80ff0580ffff0bff3cffff02ff22ffff04ff02ffff04ff07ffff04ffff0bff34ff3480ff8080808080ffff0bff34ff8080808080ffff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff2effff04ff02ffff04ff09ff80808080ffff02ff2effff04ff02ffff04ff0dff8080808080ffff01ff0bffff0101ff058080ff0180ff02ffff03ff2bffff01ff02ffff03ffff09ff818bff3880ffff01ff02ffff03ffff18ff8202cbff3480ffff01ff02ff3effff04ff02ffff04ff05ffff04ffff04ffff04ff23ffff04ff53ff808080ffff04ff6bff808080ffff04ff17ffff04ff4bff80808080808080ffff01ff04ff4bffff02ff3effff04ff02ffff04ff05ffff04ffff04ffff04ff23ffff04ff53ff808080ffff04ff6bff808080ffff04ff17ffff04ff2fff808080808080808080ff0180ffff01ff02ffff03ffff15ff818bff8080ffff01ff04ff4bffff02ff3effff04ff02ffff04ff05ffff04ffff04ffff04ff23ffff04ff53ff808080ffff04ff6bff808080ffff04ff17ffff04ff2fff8080808080808080ffff01ff02ff3effff04ff02ffff04ff05ffff04ffff04ffff04ff23ffff04ff53ff808080ffff04ff6bff808080ffff04ff17ffff04ff2fff8080808080808080ff018080ff0180ffff01ff02ffff03ff2fffff01ff04ffff04ff38ffff04ffff02ff36ffff04ff02ffff04ff05ffff04ff81afffff04ffff0bff34ff5380ffff04ffff02ff2effff04ff02ffff04ff23ff80808080ffff04ffff0bff34ff0580ff8080808080808080ffff04ff17ff8201ef808080ff8080ffff01ff088080ff018080ff0180ff018080ffff04ffff01a0dd8135d546e291df295b376aa89fc409c8c50d7f655d1ff4e845637901bc2f8fffff04ffff01ffff75ffc04468747470733a2f2f696d616765732e706578656c732e636f6d2f70686f746f732f31313035333037322f706578656c732d70686f746f2d31313035333037322e6a70656780ffff68a014836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb080ffff04ffff01a081970d352e6a39a241eaf8ca510a0e669e40d778ba612621c60a50ef6cf29c7bffff04ffff01ff02ffff01ff02ffff01ff02ffff03ff0bffff01ff02ffff03ffff09ff05ffff1dff0bffff1effff0bff0bffff02ff06ffff04ff02ffff04ff17ff8080808080808080ffff01ff02ff17ff2f80ffff01ff088080ff0180ffff01ff04ffff04ff04ffff04ff05ffff04ffff02ff06ffff04ff02ffff04ff17ff80808080ff80808080ffff02ff17ff2f808080ff0180ffff04ffff01ff32ff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff06ffff04ff02ffff04ff09ff80808080ffff02ff06ffff04ff02ffff04ff0dff8080808080ffff01ff0bffff0101ff058080ff0180ff018080ffff04ffff01b0a9e78ce31daf07c9bb35339201d7ba3c2dc79df506e9214565ebab8d6e1c9d32313f1522e7fdc95a4f04d9fa38675b8fff018080ff018080808080ff01808080",\n                "solution": "0xffffa0c2f3f7d54d254381fd33fbe2b6c031e5be3ba1267215a2fa182e064ed6015fefffa0f38367ca5d4dd82f5ec7f76777ac0647d4b7b1a3f97fdb683530317a04deab2fff0180ff01ffffff80ffff01ffff33ffa0d7be864587d6f4c11065856ae519d09f0d86b20e57d904f87c7c700d07c624d1ff01ffffa0d7be864587d6f4c11065856ae519d09f0d86b20e57d904f87c7c700d07c624d1808080ff8080ff01ff808080"\n            }\n        ]\n    },\n    "success": true,\n    "wallet_id": 2\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nft_add_uri"},(0,r.kt)("inlineCode",{parentName:"h3"},"nft_add_uri")),(0,r.kt)("p",null,"Functionality: Add a new URI to the location URI list"),(0,r.kt)("p",null,"Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"chia rpc wallet [OPTIONS] nft_add_uri [REQUEST]")),(0,r.kt)("p",null,"Options: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-j"),(0,r.kt)("td",{parentName:"tr",align:"center"},"--json-file"),(0,r.kt)("td",{parentName:"tr",align:"center"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Instead of REQUEST, provide a json file containing the request data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"center"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"center"},"None"),(0,r.kt)("td",{parentName:"tr",align:"center"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit")))),(0,r.kt)("p",null,"Request Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"wallet_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"Wallet ID")," of the DID wallet to transfer, obtainable by running ",(0,r.kt)("inlineCode",{parentName:"td"},"chia wallet show"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"nft_coin_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ID of the NFT coin, obtained from the ",(0,r.kt)("inlineCode",{parentName:"td"},"nft_get_nfts")," RPC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"uri"),(0,r.kt)("td",{parentName:"tr",align:"center"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The new URI to add")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// Request\nchia rpc wallet nft_add_uri \'{"wallet_id": 2, "nft_coin_id": "B5178AB54CD922889B4E97B2DDC0DD43FD85BE26F69DD3D697084C80AE4E9625", "uri": "https://newuri.net"}\'\n\n// Response\n{\n    "spend_bundle": {\n        "aggregated_signature": "0xa5c7e75ad3c6d51ccaf6f9a77c11974b348ebdaa7dd172fc8203cecd1f21e8477f70917d112d6d89d12ef28a6813f56e1887c4200a10844cc55f8546f275902e140cb7f87e4fe321c32385fc8e0fb08617bc851c6b5418bf85a369129a8394ab",\n        "coin_solutions": [\n            {\n                "coin": {\n                    "amount": 1,\n                    "parent_coin_info": "0x4296d4e49e2056db5aeb62df849851e61326daea4337825be15410e7f4c07e32",\n                    "puzzle_hash": "0xe9f6301cbb24aad305e56754c044bcc924ce04a28173381429d96920f4323bb1"\n                },\n                "puzzle_reveal": "0xff02ffff01ff02ffff01ff02ffff03ffff18ff2fff3c80ffff01ff04ffff04ff10ffff04ff2fff808080ffff04ffff02ff3effff04ff02ffff04ff05ffff04ffff0bff27ffff02ffff03ff77ffff01ff02ff36ffff04ff02ffff04ff09ffff04ff57ffff04ffff02ff2effff04ff02ffff04ff05ff80808080ff808080808080ffff011d80ff0180ffff02ffff03ff77ffff0181b7ffff015780ff018080ffff04ff77ff808080808080ffff02ff26ffff04ff02ffff04ff05ffff04ffff02ff0bff5f80ffff01ff8080808080808080ffff01ff088080ff0180ffff04ffff01ffffff49ff4702ff33ff0401ffff01ff02ff02ffff03ff05ffff01ff02ff3affff04ff02ffff04ff0dffff04ffff0bff2affff0bff3cff2c80ffff0bff2affff0bff2affff0bff3cff1280ff0980ffff0bff2aff0bffff0bff3cff8080808080ff8080808080ffff010b80ff0180ffffff02ffff03ff0bffff01ff02ffff03ffff02ffff03ffff09ff23ff1480ffff01ff02ffff03ffff18ff81b3ff3c80ffff01ff0101ff8080ff0180ff8080ff0180ffff01ff02ffff03ffff20ff1780ffff01ff02ffff03ffff09ff81b3ffff01818f80ffff01ff02ff26ffff04ff02ffff04ff05ffff04ff1bffff04ff3cff808080808080ffff01ff04ffff04ff23ffff04ffff02ff36ffff04ff02ffff04ff09ffff04ff53ffff04ffff02ff2effff04ff02ffff04ff05ff80808080ff808080808080ff738080ffff02ff26ffff04ff02ffff04ff05ffff04ff1bffff04ff3cff8080808080808080ff0180ffff01ff088080ff0180ffff01ff04ff13ffff02ff26ffff04ff02ffff04ff05ffff04ff1bffff04ff17ff8080808080808080ff0180ffff01ff02ffff03ff17ff80ffff01ff088080ff018080ff0180ff0bff2affff0bff3cff3880ffff0bff2affff0bff2affff0bff3cff1280ff0580ffff0bff2affff02ff3affff04ff02ffff04ff07ffff04ffff0bff3cff3c80ff8080808080ffff0bff3cff8080808080ffff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff2effff04ff02ffff04ff09ff80808080ffff02ff2effff04ff02ffff04ff0dff8080808080ffff01ff0bff3cff058080ff0180ff02ffff03ffff21ff17ffff09ff0bff158080ffff01ff04ff28ffff04ff0bff808080ffff01ff088080ff0180ff018080ffff04ffff01ffa0f1e8350cec62f8204aaf867cc3c12cae369f619258206616108c6cfd7be760b3ffa0c2f3f7d54d254381fd33fbe2b6c031e5be3ba1267215a2fa182e064ed6015fefa0eff07522495060c066f66f32acc2a77e3a3e737aca8baea4d1a64ea4cdc13da9ffff04ffff01ff02ffff01ff02ffff01ff04ffff04ff10ffff04ff81bfff808080ffff02ff3effff04ff02ffff04ff05ffff04ffff02ff3affff04ff02ffff04ff17ffff04ff0bffff04ffff02ff2fff5f80ff808080808080ffff04ff81bfffff01ff8080808080808080ffff04ffff01ffffff49ff0233ffff0401ff0102ffffffff02ffff03ff05ffff01ff02ff22ffff04ff02ffff04ff0dffff04ffff0bff3cffff0bff34ff2480ffff0bff3cffff0bff3cffff0bff34ff2c80ff0980ffff0bff3cff0bffff0bff34ff8080808080ff8080808080ffff010b80ff0180ff02ffff03ff17ffff01ff02ffff03ffff09ff47ffff0181e880ffff01ff02ffff03ffff09ffff02ff2effff04ff02ffff04ff81a7ff80808080ff0580ffff01ff02ff81a7ffff04ff0bffff04ff05ffff04ff820167ff8080808080ffff01ff088080ff0180ffff01ff02ff32ffff04ff02ffff04ff05ffff04ff0bffff04ff37ff80808080808080ff0180ffff01ff04ffff04ff0bffff04ff05ff808080ffff01ff80808080ff0180ffff02ffff03ff05ffff01ff04ff09ffff02ff2affff04ff02ffff04ff0dffff04ff0bff808080808080ffff010b80ff0180ff02ff26ffff04ff02ffff04ffff02ff32ffff04ff02ffff04ff05ffff04ff0bffff04ff17ff808080808080ffff04ff17ff8080808080ffffff04ff09ffff04ffff02ff2affff04ff02ffff04ff15ffff04ff0bff8080808080ff808080ff0bff3cffff0bff34ff2880ffff0bff3cffff0bff3cffff0bff34ff2c80ff0580ffff0bff3cffff02ff22ffff04ff02ffff04ff07ffff04ffff0bff34ff3480ff8080808080ffff0bff34ff8080808080ffff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff2effff04ff02ffff04ff09ff80808080ffff02ff2effff04ff02ffff04ff0dff8080808080ffff01ff0bffff0101ff058080ff0180ff02ffff03ff2bffff01ff02ffff03ffff09ff818bff3880ffff01ff02ffff03ffff18ff8202cbff3480ffff01ff02ff3effff04ff02ffff04ff05ffff04ffff04ffff04ff23ffff04ff53ff808080ffff04ff6bff808080ffff04ff17ffff04ff4bff80808080808080ffff01ff04ff4bffff02ff3effff04ff02ffff04ff05ffff04ffff04ffff04ff23ffff04ff53ff808080ffff04ff6bff808080ffff04ff17ffff04ff2fff808080808080808080ff0180ffff01ff02ffff03ffff15ff818bff8080ffff01ff04ff4bffff02ff3effff04ff02ffff04ff05ffff04ffff04ffff04ff23ffff04ff53ff808080ffff04ff6bff808080ffff04ff17ffff04ff2fff8080808080808080ffff01ff02ff3effff04ff02ffff04ff05ffff04ffff04ffff04ff23ffff04ff53ff808080ffff04ff6bff808080ffff04ff17ffff04ff2fff8080808080808080ff018080ff0180ffff01ff02ffff03ff2fffff01ff04ffff04ff38ffff04ffff02ff36ffff04ff02ffff04ff05ffff04ff81afffff04ffff0bff34ff5380ffff04ffff02ff2effff04ff02ffff04ff23ff80808080ffff04ffff0bff34ff0580ff8080808080808080ffff04ff17ff8201ef808080ff8080ffff01ff088080ff018080ff0180ff018080ffff04ffff01a0dd8135d546e291df295b376aa89fc409c8c50d7f655d1ff4e845637901bc2f8fffff04ffff01ffff75ffc04468747470733a2f2f696d616765732e706578656c732e636f6d2f70686f746f732f31313035333037322f706578656c732d70686f746f2d31313035333037322e6a70656780ffff68a014836b86a48e1b2b5e857213af97534704475b4c155d34b2cb83ed4b7cba2bb080ffff04ffff01a081970d352e6a39a241eaf8ca510a0e669e40d778ba612621c60a50ef6cf29c7bffff04ffff01ff02ffff01ff02ffff01ff02ffff03ff0bffff01ff02ffff03ffff09ff05ffff1dff0bffff1effff0bff0bffff02ff06ffff04ff02ffff04ff17ff8080808080808080ffff01ff02ff17ff2f80ffff01ff088080ff0180ffff01ff04ffff04ff04ffff04ff05ffff04ffff02ff06ffff04ff02ffff04ff17ff80808080ff80808080ffff02ff17ff2f808080ff0180ffff04ffff01ff32ff02ffff03ffff07ff0580ffff01ff0bffff0102ffff02ff06ffff04ff02ffff04ff09ff80808080ffff02ff06ffff04ff02ffff04ff0dff8080808080ffff01ff0bffff0101ff058080ff0180ff018080ffff04ffff01b0ad2e4e7de145259166b19be05cbcea393c66cc436a631154a20a30e12dce380f00a0bc86c19490c409640bb76546b273ff018080ff018080808080ff01808080",\n                "solution": "0xffffa0eb46562a95a335f77b4d0d97458580674a10b210c849c1d01c06ec29d0bde8ccffa08e18568a642e3406dabf891aee9b4c1ace3e65daf15502a6b9ca7e1fa5f41a3fff0180ff01ffffff80ffff01ffff33ffa0d7be864587d6f4c11065856ae519d09f0d86b20e57d904f87c7c700d07c624d1ff01ffffa0d7be864587d6f4c11065856ae519d09f0d86b20e57d904f87c7c700d07c624d18080ffff81e8ffff02ffff01ff04ffff04ffff02ffff03ff17ffff01ff02ff02ffff04ff02ffff04ff05ffff04ff17ff8080808080ffff010580ff0180ffff04ff0bff808080ffff01ff808080ffff04ffff01ff02ffff03ff05ffff01ff02ffff03ffff09ff11ffff017580ffff01ff04ffff04ffff0175ffff04ff0bff198080ff0d80ffff01ff04ff09ffff02ff02ffff04ff02ffff04ff0dffff04ff0bff80808080808080ff0180ff8080ff0180ff018080ff9268747470733a2f2f6e65777572692e6e65748080ff8080ff01ff808080"\n            }\n        ]\n    },\n    "success": true,\n    "wallet_id": 2\n}\n')),(0,r.kt)("hr",null))}s.isMDXComponent=!0}}]);