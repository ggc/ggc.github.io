(function(e){function t(t){for(var i,a,r=t[0],c=t[1],l=t[2],u=0,g=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&g.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(t);while(g.length)g.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},s=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0242":function(e,t,n){e.exports=n.p+"img/SOLID.3b3c0045.png"},"034f":function(e,t,n){"use strict";n("85ec")},"082f":function(e,t,n){e.exports=n.p+"img/Typescript.8656e839.png"},1140:function(e,t,n){e.exports=n.p+"img/Java11.28c804c4.png"},"20a9":function(e,t,n){e.exports=n.p+"img/Kubernetes.4655ae6f.png"},2279:function(e,t,n){e.exports=n.p+"img/SpringData.f20d312e.png"},"2f7b":function(e,t,n){"use strict";n("5c49")},"51e1":function(e,t,n){e.exports=n.p+"img/me.74e01dc0.jpg"},5648:function(e,t,n){e.exports=n.p+"img/Expressjs.e812bec1.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("language-selector"),n("h1",{staticClass:"text-white"},[e._v(" Looking for a software developer? ")]),n("h2",{ref:"fancy",staticClass:"font-bold italic text-white transition-color duration-500 ease-in",attrs:{id:"fancy"},on:{click:e.behold}},[e._v(" "+e._s(e.$t("intro"))+" ")]),n("Portfolio",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],a=(n("d3b7"),n("25f0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"main md:flex"},[n("me"),n("experience-list"),n("sideskills")],1),n("div",{staticClass:"bg-white rounded-lg shadow-2xl m-4 py-6 px-10"},[e._m(0),n("br"),e._l(e.hobbies,(function(t){return n("div",{key:t,staticClass:"inline-flex shadow-md text-color-green-900 bg-green-400 rounded-full px-4 py-2 m-1"},[n("p",[e._v(e._s(t))])])}))],2)])}),r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" When he's not making "),n("i",[e._v("this")]),e._v(" he's in ")])}],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:w-3/5 bg-white rounded-lg shadow-2xl m-4 py-6 px-10 text-left"},[n("h1",{staticClass:"text-4xl text-center"},[e._v("What")]),e._l(e.$t("experience.list"),(function(e){return n("experience",{key:e,attrs:{name:e}})}))],2)},l=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-4"},[n("div",[n("p",{staticClass:"text-2xl underline"},[e._v(" "+e._s(e.$t("experience."+e.name+".title")))]),n("p",[n("span",{staticClass:"font-bold"},[e._v(e._s(e.$t("experience."+e.name+".company"))+" ")]),n("span",{staticClass:"italic"},[e._v(e._s(e.$t("experience."+e.name+".period")))])]),n("p",[e._v(e._s(e.$t("experience."+e.name+".project")))])]),n("br"),n("p",[e._v(e._s(e.$t("experience."+e.name+".description")))]),n("h3",{staticClass:"my-4 text-xl"},[e._v(e._s(e.$t("experience.common.milestones")))]),n("ul",{staticClass:"my-4 pl-4 list-disc text-gray-800"},e._l(e.$t("experience."+e.name+".milestones"),(function(t){return n("li",{key:t},[e._v(" "+e._s(t))])})),0),n("h3",{staticClass:"my-4 text-xl"},[e._v(e._s(e.$t("experience.common.techStack")))]),e.$t("experience."+e.name+".frameworks").length>0?n("h4",{staticClass:"text-lg"},[e._v(e._s(e.$t("experience.common.frameworks")))]):e._e(),n("div",{staticClass:"list-disc list-inside my-4 text-gray-800"},e._l(e.$t("experience."+e.name+".frameworks"),(function(t){return n("branded-tokens",{key:t,attrs:{name:t}},[e._v(e._s(e.$t("experience.common.framework."+t)))])})),1),e.$t("experience."+e.name+".languages").length>0?n("h4",{staticClass:"text-lg"},[e._v(e._s(e.$t("experience.common.languages")))]):e._e(),n("div",{staticClass:"list-disc list-inside my-4 text-gray-800"},e._l(e.$t("experience."+e.name+".languages"),(function(t){return n("branded-tokens",{key:t,attrs:{name:t}},[e._v(e._s(e.$t("experience.common.language."+t)))])})),1),e.$t("experience."+e.name+".tools").length>0?n("h4",{staticClass:"text-lg"},[e._v(e._s(e.$t("experience.common.tools")))]):e._e(),n("ul",{staticClass:"list-disc list-inside my-4 text-gray-800g"},e._l(e.$t("experience."+e.name+".tools"),(function(t){return n("branded-tokens",{key:t,attrs:{name:t}},[e._v(e._s(e.$t("experience.common.tool."+t)))])})),1),e.$t("experience."+e.name+".technologies").length>0?n("h4",{staticClass:"text-lg"},[e._v(e._s(e.$t("experience.common.technologies")))]):e._e(),n("div",{staticClass:"list-disc list-inside my-4 text-gray-800"},e._l(e.$t("experience."+e.name+".technologies"),(function(t){return n("branded-tokens",{key:t,attrs:{name:""}},[e._v(e._s(e.$t("experience.common.technology."+t)))])})),1),n("hr",{staticClass:"rounded-2xl border-2 border-gray-400"})])},u=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inline-flex m-1 items-center px-3 py-2 bg-gray-200 rounded-xl"},[e.name?n("img",{staticClass:"h-8 rounded-lg mr-2",attrs:{src:e.imgUrl}}):e._e(),n("p",{staticClass:"font-bold text-gray-800"},[e._t("default")],2)])},d=[],A=(n("b0c0"),{name:"branded-tokens",props:{name:String},computed:{imgUrl:function(){return n("e062")("./".concat(this.name,".png"))}}}),m=A,f=n("2877"),h=Object(f["a"])(m,g,d,!1,null,null,null),v=h.exports,P={components:{BrandedTokens:v},name:"experience",props:{name:String},data:function(){return{}}},y=P,b=Object(f["a"])(y,p,u,!1,null,"8d74474a",null),w=b.exports,x={name:"experience-list",props:{msg:String},components:{Experience:w}},D=x,B=Object(f["a"])(D,c,l,!1,null,"201e36d8",null),S=B.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"\n      md:sticky\n      top-0\n      md:w-1/5\n      bg-white\n      shadow-2xl\n      rounded-lg\n      h-full\n      m-4\n      py-6\n      px-10\n    "},[i("h1",{staticClass:"text-4xl"},[e._v("Who")]),i("div",[i("img",{staticClass:"rounded-lg my-4",attrs:{src:n("51e1"),alt:"pay the internet company, man"}})]),i("a",{staticClass:"text-color-gray-900",attrs:{href:"mailto:gabriel.galancasillas@outlook.com"}},[e._v("mail")]),i("br"),i("a",{staticClass:"text-color-gray-900",attrs:{href:"https://www.linkedin.com/in/gabrielgalancasillas/",target:"_blank"}},[e._v("linkedin")]),i("br"),i("a",{staticClass:"text-color-gray-900",attrs:{href:"https://github.com/ggc/",target:"_blank"}},[e._v("github")]),i("pre",[e._v("From\n"),i("b",[e._v("Madrid, Spain")]),e._v("\n"),i("b",[e._v("(Open to relocate)")]),e._v("\n\n\nEquiped with\n"),i("b",[e._v("Spanish (Native)")]),e._v("\n"),i("b",[e._v("English (B2+)")]),e._v("\n"),i("b",[e._v("Japanese (Basic)")]),e._v("\n        ")])])}],_={name:"me",props:{msg:String}},j=_,I=(n("2f7b"),Object(f["a"])(j,C,k,!1,null,"2fb6ebb7",null)),O=I.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:sticky top-0 md:w-1/5 bg-white shadow-2xl h-full rounded-lg m-4 py-6 px-10"},[n("h1",{staticClass:"text-4xl"},[e._v("How")]),e._l(e.sideskills,(function(t){return n("div",{key:t._id,staticClass:"my-4"},[n("p",{staticClass:"font-bold"},[e._v(e._s(t.title))]),t.subtitle?n("p",{staticClass:"font-bold"},[e._v(e._s(t.subtitle))]):e._e(),n("p",{staticClass:"font-bold"},[e._v("("+e._s(t.timestamp)+")")]),n("p",[e._v(e._s(t.entity))])])}))],2)},M=[],F={name:"sideskills",props:{msg:String},data:function(){return{sideskills:[{_id:0,title:"Degree in Computer Engineering",subtitle:"Computer Science and Artificial Intelligence",timestamp:"2012 - 2017",entity:"Universidad Complutense de Madrid"},{_id:1,title:"Automatic control and regulation systems",subtitle:"",timestamp:"2009 - 2011",entity:"Colegio Salesiano de Atocha"},{_id:2,title:"Team Kanban Practitioner",subtitle:"Kanban Managemente Practitioner",timestamp:"2018 - 2018",entity:"Lean Kanban University"}]}}},L=F,G=Object(f["a"])(L,E,M,!1,null,"c35f6598",null),Q=G.exports,T={name:"Portfolio",props:{msg:String},data:function(){return{hobbies:["3d printing 3d design","IoT","Biking","Playing guitar","Sociology","Artificial intelligence","Puzzles (Rubik's cube, puzzles, riddles)"]}},components:{ExperienceList:S,Me:O,Sideskills:Q}},J=T,z=Object(f["a"])(J,a,r,!1,null,"29b90615",null),H=z.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locale-changer absolute top-0 right-0 mt-4 mr-4"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$i18n,"locale",t.target.multiple?n:n[0])}}},e._l(e.langs,(function(t,i){return n("option",{key:"Lang"+i,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)])},U=[],K={name:"language-selector",data:function(){return{langs:["en","es"]}}},W=K,$=Object(f["a"])(W,N,U,!1,null,"71876df1",null),X=$.exports,V={name:"App",components:{Portfolio:H,LanguageSelector:X},mounted:function(){this.behold()},data:function(){return{isGettingFancy:!0,timer:null}},methods:{behold:function(){var e=this;this.isGettingFancy?this.timer=setInterval((function(){var t=Math.floor(15724527*Math.random()+1052688).toString(16);e.$refs.fancy.style.color="#".concat(t)}),750):clearInterval(this.timer),this.isGettingFancy=!this.isGettingFancy}}},R=V,q=(n("034f"),Object(f["a"])(R,o,s,!1,null,null,null)),Y=q.exports,Z=n("a925"),ee=n("edd4"),te=n("a306"),ne=(n("7d05"),{en:ee,es:te});i["a"].use(Z["a"]);var ie=new Z["a"]({locale:"en",messages:ne});i["a"].config.productionTip=!1,new i["a"]({el:"#app",i18n:ie,render:function(e){return e(Y)}})},"5c49":function(e,t,n){},7601:function(e,t,n){e.exports=n.p+"img/Docker.2103c445.png"},"7d05":function(e,t,n){},8005:function(e,t,n){e.exports=n.p+"img/ELK.72799a19.png"},"85ec":function(e,t,n){},"8dd7":function(e,t,n){e.exports=n.p+"img/Ionic.54f81bf6.png"},9843:function(e,t){e.exports="data:image/png;base64,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"},a306:function(e){e.exports=JSON.parse('{"intro":"Intro en español","experience":{"list":["kairos","tenea","telefonica"],"common":{"milestones":"Milestones","techStack":"Tech stack","frameworks":"Frameworks","languages":"Languages","tools":"Tools","technologies":"Technologies","framework":{"Angular":"Angular 10","Cordova":"Apache Cordova","Expressjs":"Express.js","GraphQL":"GraphQL","Ionic":"Ionic 5","Nodejs":"Node.js:","SpringBoot":"Spring Boot","SpringData":"Spring Data","SpringSecurity":"Spring Security"},"language":{"JS":"Javascript (ES 6)","Typescript":"Typescript","Java11":"Java 8 & 11","SqlServer":"SQL Server","CSharp":"C#"},"tool":{"Docker":"Docker: Dockerized all the components in the project","Kubernetes":"Kubernetes","ELK":"ELK stack","Jenkins":"Jenkins: Features and deployments","Git":"Git, Gitflow and Bitbucket","Firebase":"Google Firebase","SOLID":"SOLID principles"},"technology":{"CI/CD":"CI/CD environments","AzureCloud":"Azure cloud","ActiveDirectory":"Active Directory","PushNotifications":"Push notifications","Queues":"Queues","Authentication":"Authentication, Security and Asymetric encryption","MongoDdAtlas":"Cloud MongoDB, indexes and change events: Full and partial"}},"kairos":{"title":"Software engineer","company":"KAIROS DIGITAL SOLUTIONS","project":"MySales: Verisure sales flow management","location":"Madrid Area, Spain","period":"(May 2018 – Present)","description":"We provide an hybrid app to allow security experts to register activities, monitor operations, and display statistics and sales feedback about any client or product, sold or installed.","milestones":["Booking allocation tool: MVP functional review, technical design, implementation(Authentication, Publishing, DB connections and development) and production deployment setup ","BI integration and Push notiications with Firebase Analytics","Partial fuzzy and full search on DB items","Compile and sign production ready applications for android","Angular version upgrades: From 5 to 10","Initialization of Backend-For-Frontend app in node.js: Application that transforms and adapts backend responses for frontend with GraphQL, Express.js and dotenv","Feature testing in backend to test microservices","Canary releases segmented by Active directory Group","Token Asymetric encryption</li>","Pull request as way of working</li>"],"frameworks":["Cordova","Ionic","Angular","Nodejs","Expressjs","GraphQL","SpringBoot","SpringData","SpringSecurity"],"languages":["JS","Typescript","Java11","SqlServer","CSharp"],"tools":["Docker","Kubernetes","ELK","Jenkins","Git","Firebase","SOLID"],"technologies":["CI/CD","AzureCloud","ActiveDirectory","PushNotifications","Queues","Authentication","MongoDdAtlas"]},"tenea":{"title":"Software engineer","company":"TENEA TECNOLOGIAS","project":"Worten Online. Spanish web site and Global unification","location":"Madrid, Spain & Porto, Portugal","period":"(Sep 2017 – May 2018)","description":"Web sites and services integration to global instance as well as improving the site\'s performance, and maintaining Worten Spain web site.","milestones":["DB management and deploys with Jenkins","Micro-services integration like DB handlers, APIs or cloud services (AWS)","Front-end tasks: HTML, Templates, CMS, Angular2, CSS, Grunt tasks, testing, push notifications and npm package developing and publishing"],"frameworks":["Nodejs"],"languages":[],"tools":[],"technologies":[]},"telefonica":{"title":"Full-stack Developer","company":"TELEFÓNICA","project":"Smart District, Parking DT app","location":"Madrid Area, Spain","period":"(Jul 2016 – Sep 2017)","description":"Focused on managing Distrito Telefonica\'s parking lots to improve its occupation. Passing all the way through the proyect renewal allowed me to understand a lot from this process and solve every problem or error found.","milestones":["IoT platform deploy (FIWARE Orion, Cygnus, IoT agents, etc)","Container-ization of multiple components","Real-time DB management","UI Re-design (jQuery, jQuery mobile, sass, gulp, etc)","BI result\'s analysis with MicroStrategy","Situm interior positioning integration to work underground","App to serve multiple applications using nginx proxies","ParkingDT app mantainment (fixtures with authentication, websockets, routing, html templates, etc)","and obviously documentation."],"frameworks":[],"languages":[],"tools":["Docker"],"technologies":[]}}}')},b133:function(e,t,n){e.exports=n.p+"img/CSharp.0e18550b.png"},b194:function(e,t,n){e.exports=n.p+"img/Nodejs.28f4eb15.png"},b272:function(e,t,n){e.exports=n.p+"img/Firebase.c14435ca.png"},b594:function(e,t,n){e.exports=n.p+"img/Cordova.216157ed.png"},b6d0:function(e,t,n){e.exports=n.p+"img/JS.f00708cb.png"},ba37:function(e,t,n){e.exports=n.p+"img/Jenkins.bb04496c.png"},bbc4:function(e,t,n){e.exports=n.p+"img/SpringBoot.0881dacc.png"},bca3:function(e,t,n){e.exports=n.p+"img/GraphQL.7c64d4f7.png"},be77:function(e,t,n){e.exports=n.p+"img/Angular.3b76dd1f.png"},d749:function(e,t,n){e.exports=n.p+"img/SpringSecurity.47126afb.png"},e062:function(e,t,n){var i={"./Angular.png":"be77","./CSharp.png":"b133","./Cordova.png":"b594","./Docker.png":"7601","./ELK.png":"8005","./Expressjs.png":"5648","./Firebase.png":"b272","./Git.png":"9843","./GraphQL.png":"bca3","./Ionic.png":"8dd7","./JS.png":"b6d0","./Java11.png":"1140","./Jenkins.png":"ba37","./Kubernetes.png":"20a9","./Nodejs.png":"b194","./SOLID.png":"0242","./SpringBoot.png":"bbc4","./SpringData.png":"2279","./SpringSecurity.png":"d749","./SqlServer.png":"e2fd","./Typescript.png":"082f"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=s,e.exports=o,o.id="e062"},e2fd:function(e,t,n){e.exports=n.p+"img/SqlServer.9c396e07.png"},edd4:function(e){e.exports=JSON.parse('{"intro":"Let\'s to something fancy","experience":{"list":["kairos","tenea","telefonica"],"common":{"milestones":"Milestones","techStack":"Tech stack","frameworks":"Frameworks","languages":"Languages","tools":"Tools","technologies":"Technologies","framework":{"Angular":"Angular 10","Cordova":"Apache Cordova","Expressjs":"Express.js","GraphQL":"GraphQL","Ionic":"Ionic 5","Nodejs":"Node.js:","SpringBoot":"Spring Boot","SpringData":"Spring Data","SpringSecurity":"Spring Security"},"language":{"JS":"Javascript (ES 6)","Typescript":"Typescript","Java11":"Java 8 & 11","SqlServer":"SQL Server","CSharp":"C#"},"tool":{"Docker":"Docker: Dockerized all the components in the project","Kubernetes":"Kubernetes","ELK":"ELK stack","Jenkins":"Jenkins: Features and deployments","Git":"Git, Gitflow and Bitbucket","Firebase":"Google Firebase","SOLID":"SOLID principles"},"technology":{"CI/CD":"CI/CD environments","AzureCloud":"Azure cloud","ActiveDirectory":"Active Directory","PushNotifications":"Push notifications","Queues":"Queues","Authentication":"Authentication, Security and Asymetric encryption","MongoDdAtlas":"Cloud MongoDB, indexes and change events: Full and partial"}},"kairos":{"title":"Software engineer","company":"KAIROS DIGITAL SOLUTIONS","project":"MySales: Verisure sales flow management","location":"Madrid Area, Spain","period":"(May 2018 – Present)","description":"We provide an hybrid app to allow security experts to register activities, monitor operations, and display statistics and sales feedback about any client or product, sold or installed.","milestones":["Booking allocation tool: MVP functional review, technical design, implementation(Authentication, Publishing, DB connections and development) and production deployment setup ","BI integration and Push notiications with Firebase Analytics","Partial fuzzy and full search on DB items","Compile and sign production ready applications for android","Angular version upgrades: From 5 to 10","Initialization of Backend-For-Frontend app in node.js: Application that transforms and adapts backend responses for frontend with GraphQL, Express.js and dotenv","Feature testing in backend to test microservices","Canary releases segmented by Active directory Group","Token Asymetric encryption</li>","Pull request as way of working</li>"],"frameworks":["Cordova","Ionic","Angular","Nodejs","Expressjs","GraphQL","SpringBoot","SpringData","SpringSecurity"],"languages":["JS","Typescript","Java11","SqlServer","CSharp"],"tools":["Docker","Kubernetes","ELK","Jenkins","Git","Firebase","SOLID"],"technologies":["CI/CD","AzureCloud","ActiveDirectory","PushNotifications","Queues","Authentication","MongoDdAtlas"]},"tenea":{"title":"Software engineer","company":"TENEA TECNOLOGIAS","project":"Worten Online. Spanish web site and Global unification","location":"Madrid, Spain & Porto, Portugal","period":"(Sep 2017 – May 2018)","description":"Web sites and services integration to global instance as well as improving the site\'s performance, and maintaining Worten Spain web site.","milestones":["DB management and deploys with Jenkins","Micro-services integration like DB handlers, APIs or cloud services (AWS)","Front-end tasks: HTML, Templates, CMS, Angular2, CSS, Grunt tasks, testing, push notifications and npm package developing and publishing"],"frameworks":["Nodejs"],"languages":[],"tools":[],"technologies":[]},"telefonica":{"title":"Full-stack Developer","company":"TELEFÓNICA","project":"Smart District, Parking DT app","location":"Madrid Area, Spain","period":"(Jul 2016 – Sep 2017)","description":"Focused on managing Distrito Telefonica\'s parking lots to improve its occupation. Passing all the way through the proyect renewal allowed me to understand a lot from this process and solve every problem or error found.","milestones":["IoT platform deploy (FIWARE Orion, Cygnus, IoT agents, etc)","Container-ization of multiple components","Real-time DB management","UI Re-design (jQuery, jQuery mobile, sass, gulp, etc)","BI result\'s analysis with MicroStrategy","Situm interior positioning integration to work underground","App to serve multiple applications using nginx proxies","ParkingDT app mantainment (fixtures with authentication, websockets, routing, html templates, etc)","and obviously documentation."],"frameworks":[],"languages":[],"tools":["Docker"],"technologies":[]}}}')}});
//# sourceMappingURL=app.99f2eb7c.js.map