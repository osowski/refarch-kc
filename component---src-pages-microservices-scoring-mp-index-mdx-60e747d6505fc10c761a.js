(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{uat7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("7ljp"),a=n("013z");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},b=o("InlineNotification"),s=o("PageDescription"),l=o("AnchorLinks"),p=o("AnchorLink"),m={_frontmatter:c},d=a.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(d,i({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(b,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("strong",null,"TODO")," - UNDER CONSTRUCTION"),Object(r.b)(s,{mdxType:"PageDescription"},"The Anomalous Container Scoring microservice consumes telemetry events for reefer containers and applies a predictive scoring model to determine whether or not the specific shipping container is in need of maintenance or not. The scoring service uses an analytics scoring model build using machine learning techniques, and depending upon deployment options, can be serialized and loaded into memory."),Object(r.b)(l,{mdxType:"AnchorLinks"},Object(r.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(r.b)(p,{mdxType:"AnchorLink"},"Build"),Object(r.b)(p,{mdxType:"AnchorLink"},"Run"),Object(r.b)(p,{mdxType:"AnchorLink"},"Usage Details")),Object(r.b)("h2",null,"Overview"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Description:")," This microservice is responsible for listening to the ",Object(r.b)("a",i({parentName:"p"},{href:"#reefer-telemetry-topic"}),"Reefer Telemetry Topic")," topic where the IOT sensor devices of the Reefer Containers will be sending their telemetry data to. These telemetry events will be read and used to contact a container anomaly prediction service based on Watson Machine Learning, hosted on the IBM Cloud. Depending on whether the prediction service predicts a container anomaly, this Telemetry microservice will send a ",Object(r.b)("a",i({parentName:"p"},{href:"#container-anomaly-event"}),"Container Anomaly Event")," to the ",Object(r.b)("a",i({parentName:"p"},{href:"#containers-topic"}),"Containers Topic")," for the ",Object(r.b)("a",i({parentName:"p"},{href:"#containers"}),"Containers microservice")," to handle the shipping goods spoilage."),Object(r.b)("p",null,"This microservice has been implemented using the latest ",Object(r.b)("a",i({parentName:"p"},{href:"/refarch-kc/implementation/reactive-messaging"}),"Reactive Messaging")," feature of MicroProfile 3.0. running on the OpenLiberty server."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(r.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAAA90lEQVQoz5WSOw6CQBCGOZq9Z9ArWHoCz2JhYW+ihSY22llYEiVGUFEQln3Mzuq46yM+MPplQ9hh/tmfH7zTG8ZcrkFU9CbheLZTgKcSvPcS6Iu6MwgqjWG9NYlTSePcxG9iRFRKSQXUemRqvjguwtwYQ+OU5ZtYa51lGWMF4qsXZjHPBjynEUIAAFoRncy5QK3BLqLgkoy7zjtXMSl930+SxFg223h/SN1bENQXRRvyTI/wBp1EW8/G+6jaWyOl4JwDaCznQ9qkDPciWCd5zhBLP9JrYGjDoHirzXGtNV3H3Jn6SezaUqba/WV3tGJc34t//CS/cwbmXYKgADjNSgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Telemetry diagram",title:"Telemetry diagram",src:"/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/2faef/microservice-overview-scoring-mp.png",srcSet:["/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/7fc1e/microservice-overview-scoring-mp.png 288w","/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/a5df1/microservice-overview-scoring-mp.png 576w","/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/2faef/microservice-overview-scoring-mp.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Further details:")," ",Object(r.b)("a",i({parentName:"p"},{href:"/refarch-kc/microservices/scoring-mp"}),"Microservices Details > Anomalous Container Scoring")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Github repository:")," ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml"}),"refarch-reefer-ml")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Folder:")," ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/tree/master/scoring-mp"}),"scoring-mp")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kafka topics consumed from:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#reefer-telemetry-topic"}),"Reefer Telemetry Topic"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kafka topics produced to:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#containers-topic"}),"Containers Topic"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Events reacted to:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#container-telemetry-event"}),"Container Telemetry Event"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Events produced:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"#container-anomaly-event"}),"Container Anomaly Event"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"EDA Patterns implemented:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",i({parentName:"li"},{href:"/refarch-kc/implementation/reactive-messaging/"}),"Reactive Messaging"))),Object(r.b)("h2",null,"Build"),Object(r.b)(b,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("strong",null,"TODO")," Build instructions for current scoring-mp"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reference:")," ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/docs/infuse/dev-scoring.md"}),"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/docs/infuse/dev-scoring.md")),Object(r.b)("h2",null,"Run"),Object(r.b)(b,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("strong",null,"TODO")," Run instructions for current scoring-mp"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reference:")," ",Object(r.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/docs/infuse/dev-scoring.md"}),"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/blob/master/docs/infuse/dev-scoring.md")),Object(r.b)("h2",null,"Usage Details"),Object(r.b)("h3",null,"REST APIs"),Object(r.b)(b,{kind:"info",mdxType:"InlineNotification"},Object(r.b)("strong",null,"TODO")," REST APIs documentation via Swagger"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-microservices-scoring-mp-index-mdx-60e747d6505fc10c761a.js.map