(function(e){function t(t){for(var i,r,s=t[0],c=t[1],l=t[2],g=0,u=[];g<s.length;g++)r=s[g],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);p&&p(t);while(u.length)u.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f5":function(e,t,n){e.exports=n.p+"img/SQL.f6ea8d41.png"},"0242":function(e,t,n){e.exports=n.p+"img/SOLID.3b3c0045.png"},"034f":function(e,t,n){"use strict";n("85ec")},"082f":function(e,t,n){e.exports=n.p+"img/Typescript.8656e839.png"},"0af8":function(e,t){e.exports="data:image/png;base64,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"},1140:function(e,t,n){e.exports=n.p+"img/Java11.28c804c4.png"},2073:function(e,t,n){e.exports=n.p+"img/jquery.42a361f9.png"},"20a9":function(e,t,n){e.exports=n.p+"img/Kubernetes.4655ae6f.png"},2279:function(e,t,n){e.exports=n.p+"img/SpringData.f20d312e.png"},2986:function(e,t,n){e.exports=n.p+"img/Redis.107069d8.png"},"2a7e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEXYIy7+/f3+/PzXEyLqmZzpk5fXABnXDx/okJT76+zWAA/VAAf44eL+//799fXWABP10dPzxcjnio7wvb788PHqlprqnaDVAADmhorYHir33N3lf4PcRUzZLDfXGCb+9/jtrK/ro6bvtrjfWmHHPGU2AAACx0lEQVR4nO3c23KbMBhFYQwGU9cKNT7UJGnTpO//jqXpdMYc8s8gZFebrnXhKwXrG+EQk0HJ46W+rizfX0bKO52uWweuc/Du+45O7e+8R7rskrrKllxVJ2WWLLmsRKgeQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/bIcoXoI9UOoH0L9EOqHUD+E+iHUD6F+CPVDqB9C/fyEWWE0OFxjjS6a/vCNJ+WjufoIs8vB6Kl3vOZ5b3T41iN+P2/ngIaT9RFuXpzRsTfDzdka7ere2xfux9c5on5+a/iw+jh3/Nwd3Qqt4afeWVk49xpyFf+9MB8IU7fuHWJOUQpTl4dbxTiFqauDESMVpu6pmsO6nqyX8Hhz4SoYMVZhS7yEIUYrDLaK8Qp/r2KIXzcRCwOdqDELW2KAi0bUwvaiUc4mRi4MQIxdOP8POL9vT3cUzl7F+IVzv2kICFN3mrOKCsLUnWesooSwJfqv4j2E64l3MYbC1L1637sREbZE3xNVRZh634GTEbZEv1XUEfquopAwdW8+RCVhS/Q4UT2FxpxvKEzdYfp1MbxwdUNhe9GY/J8pMeHq0+T7GnLCAiFChAgRLkL4gBAhQoQIEYYWrhEiRIgQIUKECBEiRIgQYRzCHCHCRQqNKSNEiBAhQoQIESJEGKfQft4iSqH57BpCCSGfw/9OKHiWLv9ziBAhQoR3EFp7DCFEiBAhQoR/fsjc+/JlKLQaCs2NNe/07eltZ9R/kLX5aY1+fO7tX1rsvxh5PSU7XZgUW6PBHBprdDXYg7aojKZvUOsnVAqhfgj1Q6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqXlQjVQ6gfQv0Q6odQP4T6IdQPoX4I9UOoH0L9EOqHUD+E+iHUD6F+CPVrheU2W3JVnexP6+g6XZd3Kseq6/r9ZazdLzd7neVWt2xKAAAAAElFTkSuQmCC"},"3dac":function(e,t,n){e.exports=n.p+"img/me_20200827.54cfa87b.jpg"},4682:function(e,t,n){e.exports=n.p+"img/Golang.a9281350.png"},5648:function(e,t,n){e.exports=n.p+"img/Expressjs.e812bec1.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-primary",attrs:{id:"app"}},[n("language-selector"),n("intro"),n("Portfolio",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locale-changer flex absolute top-0 right-0 mt-4 mr-4"},e._l(e.langs,(function(t,i){return n("div",{key:i},[n("button",{staticClass:"mx-1 text-md text-tertiary",attrs:{value:t},on:{click:function(n){return e.handleLanguageChange(t)}}},[e._v(" "+e._s(t)+" ")]),1!=i?e._t("default",(function(){return[n("span",{staticClass:"text-tertiary"},[e._v("|")])]})):e._e()],2)})),0)},s=[],c={name:"language-selector",data:function(){return{langs:["en","es"]}},methods:{handleLanguageChange:function(e){this.$i18n.locale=e}}},l=c,p=n("2877"),g=Object(p["a"])(l,r,s,!1,null,"3a41b351",null),u=g.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"text-tertiary"},[e._v(e._s(e.$t("intro")))]),n("h2",{ref:"fancy",staticClass:"\n        font-bold\n        italic\n        text-tertiary\n        transition-color\n        duration-500\n        ease-in\n      ",attrs:{id:"fancy"},on:{click:e.behold}},[e._v(" "+e._s(e.$t("catchUpPhrase"))+" ")])])},d=[],f=(n("d3b7"),n("25f0"),n("0e54")),m=n.n(f),h={name:"intro",mounted:function(){this.behold()},data:function(){return{input:"# hello",isGettingFancy:!0,timer:null,output:""}},methods:{behold:function(){var e=this;this.isGettingFancy?this.timer=setInterval((function(){var t=Math.floor(15724527*Math.random()+1052688).toString(16);e.$refs.fancy.style.color="#".concat(t)}),750):clearInterval(this.timer),this.isGettingFancy=!this.isGettingFancy},update:function(e){this.input=e.target.value}},computed:{compiledMarkdown:function(){return m()(this.input,{sanitize:!0})}}},b=h,v=Object(p["a"])(b,A,d,!1,null,null,null),x=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"main md:flex"},[n("me"),n("experience-list"),n("sideskills")],1),n("hobbies")],1)},P=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    md:w-3/5\n    text-tertiary\n    bg-primary\n    border-lg border-secondary\n    m-4\n    py-6\n    px-10\n    text-left\n  "},[n("h1",{staticClass:"text-4xl text-center"},[e._v("What")]),e._l(e.$t("experience.list"),(function(t,i){return n("experience",{key:t,attrs:{name:t}},[i!==e.$t("experience.list").length-1?e._t("default",(function(){return[n("hr",{staticClass:"rounded-2xl border-2 border-accent"})]})):e._e()],2)}))],2)},S=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-4"},[n("p",{staticClass:"text-2xl underline my-4"},[e._v(e._s(e.$t("experience."+e.name+".title")))]),n("div",{staticClass:"pl-4"},[n("p",[n("span",{staticClass:"font-bold"},[e._v(e._s(e.$t("experience."+e.name+".company"))+" ")]),n("span",{staticClass:"italic"},[e._v(e._s(e.$t("experience."+e.name+".period")))])]),n("p",[e._v(e._s(e.$t("experience."+e.name+".project")))]),n("br"),n("p",[e._v(e._s(e.$t("experience."+e.name+".description")))]),n("h3",{staticClass:"my-4 text-xl"},[e._v(e._s(e.$t("experience.common.milestones")))]),n("ul",{staticClass:"my-4 pl-4 list-disc text-tertiary"},e._l(e.$t("experience."+e.name+".milestones"),(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0),n("h3",{staticClass:"my-4 text-xl"},[e._v(e._s(e.$t("experience.common.techStack")))]),e.$t("experience."+e.name+".frameworks").length>0?n("h4",{staticClass:"text-lg"},[e._v(" "+e._s(e.$t("experience.common.frameworks"))+" ")]):e._e(),n("div",{staticClass:"list-disc list-inside my-4 text-gray-800"},e._l(e.$t("experience."+e.name+".frameworks"),(function(t){return n("branded-tokens",{key:t,attrs:{name:t}},[e._v(e._s(e.$t("experience.common.framework."+t)))])})),1),e.$t("experience."+e.name+".languages").length>0?n("h4",{staticClass:"text-lg"},[e._v(" "+e._s(e.$t("experience.common.languages"))+" ")]):e._e(),n("div",{staticClass:"list-disc list-inside my-4 text-gray-800"},e._l(e.$t("experience."+e.name+".languages"),(function(t){return n("branded-tokens",{key:t,attrs:{name:t}},[e._v(e._s(e.$t("experience.common.language."+t)))])})),1),e.$t("experience."+e.name+".databases").length>0?n("h4",{staticClass:"text-lg"},[e._v(" "+e._s(e.$t("experience.common.databases"))+" ")]):e._e(),n("div",{staticClass:"list-disc list-inside my-4 text-gray-800"},e._l(e.$t("experience."+e.name+".databases"),(function(t){return n("branded-tokens",{key:t,attrs:{name:t}},[e._v(e._s(e.$t("experience.common.database."+t)))])})),1),e.$t("experience."+e.name+".tools").length>0?n("h4",{staticClass:"text-lg"},[e._v(" "+e._s(e.$t("experience.common.tools"))+" ")]):e._e(),n("ul",{staticClass:"list-disc list-inside my-4 text-gray-800g"},e._l(e.$t("experience."+e.name+".tools"),(function(t){return n("branded-tokens",{key:t,attrs:{name:t}},[e._v(e._s(e.$t("experience.common.tool."+t)))])})),1),e.$t("experience."+e.name+".technologies").length>0?n("h4",{staticClass:"text-lg"},[e._v(" "+e._s(e.$t("experience.common.technologies"))+" ")]):e._e(),n("div",{staticClass:"list-disc list-inside my-4 text-gray-800"},e._l(e.$t("experience."+e.name+".technologies"),(function(t){return n("branded-tokens",{key:t,attrs:{name:""}},[e._v(e._s(e.$t("experience.common.technology."+t)))])})),1)]),e._t("default")],2)},D=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inline-flex m-1 items-center px-3 py-2 bg-secondary rounded-xl overflow-auto"},[e.name?n("img",{staticClass:"h-8 rounded-lg mr-2",attrs:{src:e.imgUrl}}):e._e(),n("p",{staticClass:"font-bold text-gray-800"},[e._t("default")],2)])},w=[],E=(n("b0c0"),{name:"branded-tokens",props:{name:String},computed:{imgUrl:function(){try{return n("e062")("./".concat(this.name,".png"))}catch(e){return n("da08")}}}}),I=E,Q=Object(p["a"])(I,k,w,!1,null,null,null),j=Q.exports,G={components:{BrandedTokens:j},name:"experience",props:{name:String},data:function(){return{}}},O=G,L=Object(p["a"])(O,B,D,!1,null,"1092b07a",null),U=L.exports,F={name:"experience-list",props:{msg:String},components:{Experience:U}},M=F,H=Object(p["a"])(M,C,S,!1,null,"493ee8d2",null),J=H.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"\n      md:sticky\n      top-0\n      md:w-1/5\n      text-tertiary\n      border-lg border-secondary\n      h-full\n      m-4\n      py-6\n      px-10\n    "},[i("h1",{staticClass:"text-4xl"},[e._v("Who")]),i("div",[i("img",{staticClass:"rounded-lg my-4",attrs:{src:n("3dac"),alt:"pay the internet company, man"}})]),i("a",{staticClass:"text-color-gray-900",attrs:{href:"mailto:gabriel.galancasillas@outlook.com"}},[e._v("mail")]),i("br"),i("a",{staticClass:"text-color-gray-900",attrs:{href:"https://www.linkedin.com/in/gabrielgalancasillas/",target:"_blank"}},[e._v("linkedin")]),i("br"),i("a",{staticClass:"text-color-gray-900",attrs:{href:"https://github.com/ggc/",target:"_blank"}},[e._v("github")]),i("pre",[e._v("From\n"),i("b",[e._v("Madrid, Spain")]),e._v("\n"),i("b",[e._v("(Open to relocate)")]),e._v("\n\n\nEquiped with\n"),i("b",[e._v("Spanish (Native)")]),e._v("\n"),i("b",[e._v("English (B2+)")]),e._v("\n"),i("b",[e._v("Japanese (Basic)")]),e._v("\n        ")])])}],K={name:"me",props:{msg:String}},N=K,X=(n("c957"),Object(p["a"])(N,R,z,!1,null,"2387ecee",null)),T=X.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md:sticky top-0 md:w-1/5 text-tertiary border-lg border-secondary h-full m-4 py-6 px-10"},[n("h1",{staticClass:"text-4xl"},[e._v("How")]),e._l(e.sideskills,(function(t,i){return n("div",{key:i,staticClass:"my-4"},[n("p",{staticClass:"font-bold"},[e._v(e._s(t.title))]),t.subtitle?n("p",{staticClass:"font-bold"},[e._v(e._s(t.subtitle))]):e._e(),n("p",{staticClass:"font-bold"},[e._v("("+e._s(t.period)+")")]),n("p",[e._v(e._s(t.entity))])])}))],2)},q=[],W={name:"sideskills",props:{msg:String},data:function(){return{sideskills:[{title:"Degree in Computer Engineering",subtitle:"Computer Science and Artificial Intelligence",period:"2012 - 2017",entity:"Universidad Complutense de Madrid"},{title:"Automatic control and regulation systems",subtitle:"",period:"2009 - 2011",entity:"Colegio Salesiano de Atocha"},{title:"Team Kanban Practitioner",subtitle:"Kanban Managemente Practitioner",period:"2018 - 2018",entity:"Lean Kanban University"},{title:"Solution Architect",subtitle:"",period:"2019 - 2019",entity:"Mark Farragher"}]}}},Y=W,Z=Object(p["a"])(Y,V,q,!1,null,"29ce9740",null),_=Z.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-white border-lg border-secondary shadow-2xl m-4 py-6 px-10"},[e._m(0),n("br"),e._l(e.hobbies,(function(t){return n("div",{key:t,staticClass:"\n      inline-flex\n      shadow-md\n      text-color-green-900\n      bg-green-400\n      rounded-full\n      px-4\n      py-2\n      m-1\n    "},[n("p",[e._v(e._s(e.$t("hobbies."+t)))])])}))],2)},ee=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" When he's not making "),n("i",[e._v("this")]),e._v(" he's in ")])}],te={name:"hobbies",data:function(){return{hobbies:["3dPrint","3dDesign","iot","biking","guitar","sociology","ai","puzzles"]}}},ne=te,ie=Object(p["a"])(ne,$,ee,!1,null,"91458a3a",null),oe=ie.exports,ae={name:"Portfolio",components:{ExperienceList:J,Me:T,Sideskills:_,Hobbies:oe}},re=ae,se=Object(p["a"])(re,y,P,!1,null,"3fd27798",null),ce=se.exports,le={name:"App",components:{LanguageSelector:u,Intro:x,Portfolio:ce}},pe=le,ge=(n("034f"),Object(p["a"])(pe,o,a,!1,null,null,null)),ue=ge.exports,Ae=n("a925"),de=n("edd4"),fe=n("a306"),me=(n("7d05"),{en:de,es:fe});i["a"].use(Ae["a"]);var he=new Ae["a"]({locale:"en",messages:me});i["a"].config.productionTip=!1,new i["a"]({el:"#app",i18n:he,render:function(e){return e(ue)}})},"668c":function(e,t,n){e.exports=n.p+"img/Dynamodb.de00aaf4.png"},"70df":function(e,t){e.exports="data:image/png;base64,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"},7601:function(e,t,n){e.exports=n.p+"img/Docker.2103c445.png"},"76b8":function(e,t,n){e.exports=n.p+"img/Java6.28c804c4.png"},"7d05":function(e,t,n){},8005:function(e,t,n){e.exports=n.p+"img/ELK.72799a19.png"},"85ec":function(e,t,n){},"8dd7":function(e,t,n){e.exports=n.p+"img/Ionic.54f81bf6.png"},9843:function(e,t){e.exports="data:image/png;base64,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"},a01f:function(e,t,n){},a302:function(e,t,n){e.exports=n.p+"img/Magento.595bbd2b.png"},a306:function(e){e.exports=JSON.parse('{"intro":"Alguna idea?","catchUpPhrase":"Hagamoslo","experience":{"list":["kairos","tenea","telefonica"],"common":{"milestones":"Milestones","techStack":"Tech stack","frameworks":"Frameworks","languages":"Languages","tools":"Tools","technologies":"Technologies","framework":{"Angular":"Angular 10","Cordova":"Apache Cordova","Expressjs":"Express.js","GraphQL":"GraphQL","Ionic":"Ionic 5","Nodejs":"Node.js:","SpringBoot":"Spring Boot","SpringData":"Spring Data","SpringSecurity":"Spring Security"},"language":{"JS":"Javascript (ES 6)","Typescript":"Typescript","Java11":"Java 8 & 11","SqlServer":"SQL Server","CSharp":"C#"},"tool":{"Docker":"Docker: Dockerized all the components in the project","Kubernetes":"Kubernetes","ELK":"ELK stack","Jenkins":"Jenkins: Features and deployments","Git":"Git, Gitflow and Bitbucket","Firebase":"Google Firebase","SOLID":"SOLID principles"},"technology":{"CI/CD":"CI/CD environments","AzureCloud":"Azure cloud","ActiveDirectory":"Active Directory","PushNotifications":"Push notifications","Queues":"Queues","Authentication":"Authentication, Security and Asymetric encryption","MongoDdAtlas":"Cloud MongoDB, indexes and change events: Full and partial"}},"kairos":{"title":"Software engineer","company":"KAIROS DIGITAL SOLUTIONS","project":"MySales: Verisure sales flow management","location":"Madrid Area, Spain","period":"(May 2018 – Present)","description":"We provide an hybrid app to allow security experts to register activities, monitor operations, and display statistics and sales feedback about any client or product, sold or installed.","milestones":["Booking allocation tool: MVP functional review, technical design, implementation(Authentication, Publishing, DB connections and development) and production deployment setup ","BI integration and Push notiications with Firebase Analytics","Partial fuzzy and full search on DB items","Compile and sign production ready applications for android","Angular version upgrades: From 5 to 10","Initialization of Backend-For-Frontend app in node.js: Application that transforms and adapts backend responses for frontend with GraphQL, Express.js and dotenv","Feature testing in backend to test microservices","Canary releases segmented by Active directory Group","Token Asymetric encryption</li>","Pull request as way of working</li>"],"frameworks":["Cordova","Ionic","Angular","Nodejs","Expressjs","GraphQL","SpringBoot","SpringData","SpringSecurity"],"languages":["JS","Typescript","Java11","SqlServer","CSharp"],"tools":["Docker","Kubernetes","ELK","Jenkins","Git","Firebase","SOLID"],"technologies":["CI/CD","AzureCloud","ActiveDirectory","PushNotifications","Queues","Authentication","MongoDdAtlas"]},"tenea":{"title":"Software engineer","company":"TENEA TECNOLOGIAS","project":"Worten Online. Spanish web site and Global unification","location":"Madrid, Spain & Porto, Portugal","period":"(Sep 2017 – May 2018)","description":"Web sites and services integration to global instance as well as improving the site\'s performance, and maintaining Worten Spain web site.","milestones":["DB management and deploys with Jenkins","Micro-services integration like DB handlers, APIs or cloud services (AWS)","Front-end tasks: HTML, Templates, CMS, Angular2, CSS, Grunt tasks, testing, push notifications and npm package developing and publishing"],"frameworks":["Nodejs"],"languages":[],"tools":[],"technologies":[]},"telefonica":{"title":"Full-stack Developer","company":"TELEFÓNICA","project":"Smart District, Parking DT app","location":"Madrid Area, Spain","period":"(Jul 2016 – Sep 2017)","description":"Focused on managing Distrito Telefonica\'s parking lots to improve its occupation. Passing all the way through the proyect renewal allowed me to understand a lot from this process and solve every problem or error found.","milestones":["IoT platform deploy (FIWARE Orion, Cygnus, IoT agents, etc)","Container-ization of multiple components","Real-time DB management","UI Re-design (jQuery, jQuery mobile, sass, gulp, etc)","BI result\'s analysis with MicroStrategy","Situm interior positioning integration to work underground","App to serve multiple applications using nginx proxies","ParkingDT app mantainment (fixtures with authentication, websockets, routing, html templates, etc)","and obviously documentation."],"frameworks":[],"languages":[],"tools":["Docker"],"technologies":[]}}}')},b133:function(e,t,n){e.exports=n.p+"img/CSharp.0e18550b.png"},b194:function(e,t,n){e.exports=n.p+"img/Nodejs.28f4eb15.png"},b272:function(e,t,n){e.exports=n.p+"img/Firebase.c14435ca.png"},b594:function(e,t,n){e.exports=n.p+"img/Cordova.216157ed.png"},b6d0:function(e,t,n){e.exports=n.p+"img/JS.f00708cb.png"},ba37:function(e,t,n){e.exports=n.p+"img/Jenkins.bb04496c.png"},bbc4:function(e,t,n){e.exports=n.p+"img/SpringBoot.0881dacc.png"},bca3:function(e,t,n){e.exports=n.p+"img/GraphQL.7c64d4f7.png"},be77:function(e,t,n){e.exports=n.p+"img/Angular.3b76dd1f.png"},c8bd:function(e,t,n){e.exports=n.p+"img/pug.81fa96f6.png"},c957:function(e,t,n){"use strict";n("a01f")},cc3d:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX///9srEhZljbCv7+/vLxqq0VXlTPv7u5kqDxWlDFZlTZSkitoqkL9/vxUky5NkCPFwMNfpjNfnTxLjx+1zqj3+vVvo1LQ48Znq0B3p13V486UwXzK4L+8165joT9epjLLycnc2tpon0rn8eKfwI+11KWcxofZ5tOUuYHJ28CJs3Ssz5uBt2R6s1vl4+N0r1Lv9uytyZ+kypCPv3e/1LSwyqKFsG6JvG6ZvIeguJJroU2nupqxvKd6o2S5vrKCpG+br46NqXzDx77kkY7zAAAH20lEQVR4nO2di17iRhTGYYAoBkiURvDWRaho13Whbrs3Le3u+z9Uw1UImZnzBcM5k/q9APP/zcy5DymV9qrmcL+/t39Fo1vuJeSscfmMewk56/wwOOdeQ74a1uqn3GvIVeNuWQW/c68iTw1jQq/f5F5Gfuocl8tHKviFex25adCoTQk9v6ibOBjFgDGhCv7gXko+GpSngFNCz4u4F5OHzo9ngGUVy/+NezU56PJwDjgjVH7xYrebw3J5jbB+WjRj87gCnBMq/457Sa+r4QvgglC1C+UUL9YAl4SFCt4+rQOuCL3iJBmbgCtC5bULgjjcBHwhLMouPiYA1wiV1yqAW7xPAq4TxjH4gHuBu+rqOAm4QRjfxTH3EndTZ2sHE4Sq3ncacdCt2QhV69ThPCOqpQAmCZXvcHnxSyMFcItQ+e+5F5pVW35CQ+hsyn+ZDphCqII/uRebRYNtP6ElVE7Gbw9pVkZH6LXc8xmaS6ghjH0G94JR6S6hjtC5nH9c1p1RHaFrOf9Fqic0EqrApSD8UmdHTYT1Pvey6Rp3DYBaQpeuoumMGgjdqU2lpUwkQk+54RWbWl9vI3QlBt+uW5AJVduFczo22VEboddyIB3+ZDQzFkIX7Om55YxaCJX8EuoHs5mxEopvuxkibhqh9EGN5si6hTZCFYg2Nlf2LbQSijY2TZsdpRAqyZX+G8IW2glbn7k5tIoIt5BAqAKxHSnKLaQQ1qVWwW0h90IndkSpxUVL1gQQSh2ytYczVEKhm3hrSyoAQpk30Vy7wAhFBuDm8hNK2BKY7ZO8PZlQtcUFNkRXQSaUF53aM1+MULWlpRhDop0hE0rLEyOqnYkJj0iEnrAiPyG3BwmlOQxrhQ0nlOUwondkQDKh8iXV+IFDSicM/uLGWhNwSOmEnqAMI6LzAYSS4hpiZogSCnpZ8wgcUqrHnyrgBluKHpOChGIS4QFySBHClpTwm1Zjy0DoHQkJv6nZPUwoJnKDACFC/ys320zUEtRCvwKEXl/EMcWuIUQoxJpi1xAjlOH0EWdYxu6hjNh0jB1SbA+VhDc1UFAKE0oYcicXSjMRSghrkNwQJ/QUN59hKP9VCAWMDo8xPpyQfZjvFryGKCG/R0SKUFkI+VuJ9/RqdyZC/gyK3rDIRshuaprE7v0OhMymJjK8jnkdQm5TE6GGBibk7l9onxm+GmH9jHemFo27cUJP8RpTMMHPQMidQKGZRRZC3lFFqKCfjZDZXaC5UwZCn3dmAXb4GQh5n+vDDh8nZE7z0bg7CyHv3Dfs8HFC5vwJGMLISsg8O7SHPfROWAn3cA9Vi5UQBsxAyNvOJz0i2ZGwzUqIVkvdI/xSeEK4EOUc4f0eCHktzR7yQ2bCPeT4ymclhIv6zsU0cGOmXIMJeeNS659E7L6HzLkF8AxhKZiQNz+kvf3diZC56I13ZmBC7sYFOBGVhZB5Zv8RvogoIfdIDRzUwN6Cu4GIu3yUkPtRAu7y4T1kbuQP8rY03gkzIe4QQUL+cRPYIYKE/LN7sEMECZkbM6UMI0Pkd09zcTuLDO4CJOT/yyHYXWCEAh4kwBM1GCG/KcWbpBghd2YxFWpMMUJ+Q4OX20BCdkODj0VBhBIm2UsRWIyCCPkjmqnA/hNEKOEawlENRCjhVRD8ABEhFPGyC33LDRHyh91zYccUIWSeS1wJC00BQgFB6ULQMQUIhbx0LoFhDXBIpbxWBztQyCGV88fQSPQNHFIBecVSiEukE3LXgjcEVNzoh/Q7N9W6gGoN2ZZyt2Q2BRSGyVso7Pvk9B4UlVCSnZkqIltTMqEkOzOV7dskKCH3m7VtkVN9IqHA/y2n3kQaoIQ6aVLU56Q0Qhn/TJMQMf52dgtp3++gEorcQmrllAIo9gsQ6d/HzUDoyzOkc5HePVMAxfnClShun/L5B1kR6booAbidUPQnkAnGxkooqXiRIns9w0oo1FMs1WzYzmnfAijvL/UT6tjsqYWQ+z8UCNJ/znmmh++e+YyK6KcZZW7U1O7MhIJd4YuM/7rb+GYkrHNPItJ0ZbiK3ScjoZw6vlkX+nZb9/nMQBgIqz5pFT1ovWL3+e+6FrAlMitM1UDrFbuTf1o6QGkVUqO0XvGw8kNL6MolnEuXZXTDf30NYFvS5x4IGmoQwycNYSCm4UtUMzXhrz2Ek8B1K7NUaq5Y+xxOUu9hXcxQAqBxikFt3IXVfopDrHvSuhQkpfiMxrcwPNt2iJ7Y0pNF590kYvcpDFMcovCk16BO8h96upMwxV20RXV7MW15/kmlMkmeUpcBkw3+2kOlUgkTpqYt7CNyqDYQY2cRE25eRLd3cKrOuxdz0/gaE1ae13y+5z5gbFFfnEZsSjePqddy1oqu63bVO21MZoQra9pSTjr6bQ1Gixh1VK3MtNhE/1TEGPdrKPpwuIi7Z4Dh82wTA+m1X0TNWTLVeD8nrIQ/AuVJ+9Torro5XhqaOWK772goqlfnuHFYWSn86WC2ZNNgdBeuCKvcq8lF0c8XwGvuxeSj6+oKUXQTNLsOqgXfwlJpRXjAvZK81FseUu6F5KblRexxLyQ3LS5itce9kPxULbihWV7E6kfudeSnXsFN6dLUFJnwY+EJD94InVez8JamVHzC3huh8yo+4czlvxE6rTdC9/V/ISxwfhgnF9Vi5/hx7H1dqRabMNZBb5+n9D/neLKiiKTqcgAAAABJRU5ErkJggg=="},cdcf:function(e,t,n){e.exports=n.p+"img/nginx.bb89afc4.png"},d749:function(e,t,n){e.exports=n.p+"img/SpringSecurity.47126afb.png"},da08:function(e,t,n){e.exports=n.p+"img/default.b9afe0f1.png"},e062:function(e,t,n){var i={"./Angular.png":"be77","./Angularjs.png":"0af8","./CSharp.png":"b133","./Cordova.png":"b594","./Docker.png":"7601","./Dynamodb.png":"668c","./ELK.png":"8005","./Expressjs.png":"5648","./Firebase.png":"b272","./Git.png":"9843","./Golang.png":"4682","./GraphQL.png":"bca3","./Ionic.png":"8dd7","./JS.png":"b6d0","./Java11.png":"1140","./Java6.png":"76b8","./Jenkins.png":"ba37","./Kubernetes.png":"20a9","./Magento.png":"a302","./Nodejs.png":"b194","./Redis.png":"2986","./SOLID.png":"0242","./SQL.png":"01f5","./SpringBoot.png":"bbc4","./SpringData.png":"2279","./SpringSecurity.png":"d749","./SqlServer.png":"e2fd","./Typescript.png":"082f","./default.png":"da08","./fiware.png":"70df","./jquery.png":"2073","./microstrategy.png":"2a7e","./mongodb.png":"cc3d","./nginx.png":"cdcf","./pug.png":"c8bd"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id="e062"},e2fd:function(e,t,n){e.exports=n.p+"img/SqlServer.9c396e07.png"},edd4:function(e){e.exports=JSON.parse('{"intro":"Looking for someone?","download":"Download","catchUpPhrase":"Let\'s to something fancy","experience":{"list":["kairos","tenea","telefonica"],"common":{"milestones":"Milestones","techStack":"Tech stack","frameworks":"Frameworks","languages":"Languages","tools":"Tools","technologies":"Technologies","databases":"Databases","framework":{"Angular":"Angular 10","Angularjs":"Angularjs","Cordova":"Apache Cordova","jquery":"jQuery","Expressjs":"Express.js","GraphQL":"GraphQL","Ionic":"Ionic 5","Nodejs":"Node.js:","SpringBoot":"Spring Boot","SpringData":"Spring Data","SpringSecurity":"Spring Security","Magento":"Magento","nginx":"Nginx","pug":"Pug"},"language":{"JS":"Javascript (ES 6)","Typescript":"Typescript","Java11":"Java 8 & 11","Java6":"Java 6","SqlServer":"SQL Server","CSharp":"C#","Golang":"Golang"},"database":{"mongodb":"Mongodb","SQL":"SQL","Redis":"Redis","Dynamodb":"Dynamodb"},"tool":{"Docker":"Docker: Dockerized all the components in the project","Kubernetes":"Kubernetes","ELK":"ELK stack","Jenkins":"Jenkins: Features and deployments","Git":"Git, Gitflow and Bitbucket","Firebase":"Google Firebase","SOLID":"SOLID principles","fiware":"FIWARE","microstrategy":"Microstrategy"},"technology":{"CI/CD":"CI/CD environments","AzureCloud":"Azure cloud","ActiveDirectory":"Active Directory","PushNotifications":"Push notifications","Queues":"Queues","Authentication":"Authentication, Security and Asymetric encryption","MongoDdAtlas":"Cloud mongodb, indexes and change events: Full and partial","ReplicaSets":"ReplicaSet for High Availability","WebSockets":"WebSockets"}},"kairos":{"title":"Software engineer","company":"KAIROS DIGITAL SOLUTIONS","project":"MySales: Verisure sales flow management","location":"Madrid Area, Spain","period":"(May 2018 – Present)","description":"We provide an hybrid app to allow security experts to register activities, monitor operations, and display statistics and sales feedback about any client or product, sold or installed.","milestones":["Booking allocation tool: MVP functional review, technical design, implementation (Authentication, Publishing, DB connections and development) and production deployment setup ","BI integration and Push notiications with Firebase Analytics","Partial fuzzy and full search on DB items","Compile and sign production ready applications for android","Angular version upgrades: From 5 to 10","Initialization of Backend-For-Frontend app in node.js: Application that transforms and adapts backend responses for frontend with GraphQL, Express.js and dotenv","Feature testing in backend to test microservices","Canary releases segmented by Active directory Group","Token Asymetric encryption</li>","Pull request as way of working</li>"],"frameworks":["Cordova","Ionic","Angular","Nodejs","Expressjs","GraphQL","SpringBoot","SpringData","SpringSecurity"],"languages":["JS","Typescript","Java11","SqlServer","CSharp"],"tools":["Docker","Kubernetes","ELK","Jenkins","Git","Firebase","SOLID"],"technologies":["CI/CD","AzureCloud","ActiveDirectory","PushNotifications","Queues","Authentication","MongoDdAtlas"],"databases":["mongodb","SQL"]},"tenea":{"title":"Software engineer","company":"TENEA TECNOLOGIAS","project":"Worten Online. Spanish web site and Global unification","location":"Madrid, Spain & Porto, Portugal","period":"(Sep 2017 – May 2018)","description":"Web sites and services integration to global instance as well as improving the site\'s performance, and maintaining Worten Spain web site.","milestones":["DB management and deploys with Jenkins","Micro-services integration like DB handlers, APIs or cloud services (AWS)","Front-end tasks: HTML, Templates, CMS, Angular2, CSS, Grunt tasks, testing, push notifications and npm package developing and publishing"],"frameworks":["Nodejs","Angularjs","Angular","Magento"],"languages":["JS","Golang"],"tools":["Docker","Kubernetes","ELK","Jenkins","Git","Firebase","SOLID"],"technologies":["CI/CD","PushNotifications","Queues","Authentication","ReplicaSets"],"databases":["Redis","SQL","Dynamodb"]},"telefonica":{"title":"Full-stack Developer","company":"TELEFÓNICA","project":"Smart District, Parking DT app","location":"Madrid Area, Spain","period":"(Jul 2016 – Sep 2017)","description":"Focused on managing Distrito Telefonica\'s parking lots to improve its occupation. Passing all the way through the proyect renewal allowed me to understand a lot from this process and solve every problem or error found.","milestones":["IoT platform deploy (FIWARE Orion, Cygnus, IoT agents, etc)","Container-ization of multiple components","Real-time DB management","UI Re-design (jQuery, jQuery mobile, sass, gulp, etc)","BI result\'s analysis with MicroStrategy","Situm interior positioning integration to work underground","App to serve multiple applications using nginx proxies","ParkingDT app mantainment (fixtures with authentication, websockets, routing, html templates, etc)","and obviously documentation."],"frameworks":["Nodejs","jquery","nginx","pug"],"languages":["JS","Java6","Golang"],"tools":["Docker","fiware","microstrategy"],"technologies":["PushNotifications","Queues","WebSockets"],"databases":["mongodb"]}},"hobbies":{"3dPrint":"3d printing","3dDesign":"3d design","iot":"IoT","biking":"Biking","guitar":"Playing guitar","sociology":"Sociology","ai":"Artificial intelligence","puzzles":"Puzzles (Rubik\'s cube, puzzles, riddles)"}}')}});
//# sourceMappingURL=app.11e49de9.js.map