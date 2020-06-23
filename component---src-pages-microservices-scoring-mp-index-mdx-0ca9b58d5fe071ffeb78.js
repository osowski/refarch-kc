(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{uat7:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return c})),r.d(t,"default",(function(){return u}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var a=r("7ljp"),n=r("013z");r("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},s=o("InlineNotification"),l=o("PageDescription"),b=o("AnchorLinks"),p=o("AnchorLink"),m={_frontmatter:c},h=n.a;function u(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(h,i({},m,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{kind:"warning",mdxType:"InlineNotification"},"UNDER CONSTRUCTION"),Object(a.b)(l,{mdxType:"PageDescription"},"TODO"),Object(a.b)(b,{mdxType:"AnchorLinks"},Object(a.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(a.b)(p,{mdxType:"AnchorLink"},"Build"),Object(a.b)(p,{mdxType:"AnchorLink"},"Run"),Object(a.b)(p,{mdxType:"AnchorLink"},"Integration Tests"),Object(a.b)(p,{mdxType:"AnchorLink"},"Implementation Details")),Object(a.b)("h2",null,"Overview"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description:")," This microservice is responsible for listening to the ",Object(a.b)("a",i({parentName:"p"},{href:"#reefer-telemetry-topic"}),"Reefer Telemetry Topic")," topic where the IOT sensor devices of the Reefer Containers will be sending their telemetry data to. These telemetry events will be read and used to contact a container anomaly prediction service based on Watson Machine Learning hosted on the IBM Cloud. Depending on whether the prediction service predicts a container anomaly, this Telemetry microservice will send a ",Object(a.b)("a",i({parentName:"p"},{href:"#container-anomaly-event"}),"Container Anomaly Event")," to the ",Object(a.b)("a",i({parentName:"p"},{href:"#containers-topic"}),"Containers Topic")," for the ",Object(a.b)("a",i({parentName:"p"},{href:"#containers"}),"Containers microservice")," to handle the shipping goods spoilage."),Object(a.b)("p",null,"This microservice has been implemented using the latest ",Object(a.b)("a",i({parentName:"p"},{href:"#reactive-messaging"}),"Reactive Messaging")," feature of MicroProfile 3.0. running on the OpenLiberty server."),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(a.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAAA90lEQVQoz5WSOw6CQBCGOZq9Z9ArWHoCz2JhYW+ihSY22llYEiVGUFEQln3Mzuq46yM+MPplQ9hh/tmfH7zTG8ZcrkFU9CbheLZTgKcSvPcS6Iu6MwgqjWG9NYlTSePcxG9iRFRKSQXUemRqvjguwtwYQ+OU5ZtYa51lGWMF4qsXZjHPBjynEUIAAFoRncy5QK3BLqLgkoy7zjtXMSl930+SxFg223h/SN1bENQXRRvyTI/wBp1EW8/G+6jaWyOl4JwDaCznQ9qkDPciWCd5zhBLP9JrYGjDoHirzXGtNV3H3Jn6SezaUqba/WV3tGJc34t//CS/cwbmXYKgADjNSgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Telemetry diagram",title:"Telemetry diagram",src:"/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/2faef/microservice-overview-scoring-mp.png",srcSet:["/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/7fc1e/microservice-overview-scoring-mp.png 288w","/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/a5df1/microservice-overview-scoring-mp.png 576w","/refarch-kc/static/3a7420a36aa0ddfcbfadfb7b4241301d/2faef/microservice-overview-scoring-mp.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Further details:")," ",Object(a.b)("a",i({parentName:"p"},{href:"/refarch-kc/microservices/scoring-mp"}),"Microservices Details > Anomalous Container Scoring")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Github repository:")," ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml"}),"refarch-reefer-ml")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Folder:")," ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/tree/master/scoring-mp"}),"scoring-mp")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kafka topics consumed from:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#reefer-telemetry-topic"}),"Reefer Telemetry Topic"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kafka topics produced to:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#containers-topic"}),"Containers Topic"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events reacted to:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#container-telemetry-event"}),"Container Telemetry Event"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events produced:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#container-anomaly-event"}),"Container Anomaly Event"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"EDA Patterns implemented:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"#reactive-messaging"}),"Reactive Messaging"))),Object(a.b)("h2",null,"Build"),Object(a.b)("p",null,"TBD"),Object(a.b)("h2",null,"Run"),Object(a.b)("p",null,"TBD"),Object(a.b)("h2",null,"Integration Tests"),Object(a.b)("p",null,"TBD"),Object(a.b)("h2",null,"Implementation Details"),Object(a.b)("p",null,"TBD To be sourced from ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/tree/master/scoring-mp"}),"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/tree/master/scoring-mp")),Object(a.b)("p",null,"Reactive Systems provide an architecture style to deliver responsive systems. By infusing asynchronous messaging passing at the core of the system, applications enforcing the reactive system’s characteristics are inherently resilient and become more elastic by scaling up and down the number of message consumers. Microservices as part of reactive systems interact using messages. The MicroProfile Reactive Messaging specification aims to deliver applications embracing the characteristics of reactive systems."),Object(a.b)("p",null,"You can read more about how we have implemented the ",Object(a.b)("a",i({parentName:"p"},{href:"/refarch-kc/refarch-kc/business-scenario/microservices-overview/#telemetry"}),"Telemetry")," component as a reactive system by using the MicroProfile Reactive Messaging feature ",Object(a.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-reefer-ml/infuse/dev-scoring/"}),"here")),Object(a.b)("p",null,"Again, the Container Anomaly is more of a use case than a pattern itself. We have implemented a Container Anomaly use case whereby our ",Object(a.b)("a",i({parentName:"p"},{href:"#simulator"}),"Reefer containers will send telemetry health status"),", in terms of temperature, CO2 level, power level, etc, to a ",Object(a.b)("a",i({parentName:"p"},{href:"#telemetry"}),"Reefer Telemetry Agent"),", that we have built using the Reactive Messaging feature from the MicroProfile 3.0 specification onwards, through a ",Object(a.b)("a",i({parentName:"p"},{href:"#reefer-telemetry-topic"}),"Reefer Telemetry Topic"),". This ",Object(a.b)("a",i({parentName:"p"},{href:"#telemetry"}),"Reefer Telemetry Agent")," will, in turn, call an Anomaly Detection Scoring service we have built following our Data and AI Reference Architecture that will determine whether there is an anomaly in a given containers based on the data sent by their IoT sensors. If an anomaly is predicted, a ",Object(a.b)("a",i({parentName:"p"},{href:"#container-anomaly-event"}),"Container Anomaly Event")," will get dropped into the ",Object(a.b)("a",i({parentName:"p"},{href:"#containers-topic"}),"Containers Topic")," the ",Object(a.b)("a",i({parentName:"p"},{href:"#containers"}),"container management component")," of our Reefer Container Reference Application listens to. The ",Object(a.b)("a",i({parentName:"p"},{href:"#containers"}),"container management component")," will call an IBM Business Process Management (BPM) process which will end up with a field engineer fixing the container."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-microservices-scoring-mp-index-mdx-0ca9b58d5fe071ffeb78.js.map