(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{mKPe:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return h}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},s=c("InlineNotification"),l=c("PageDescription"),p=c("AnchorLinks"),b=c("AnchorLink"),m={_frontmatter:o},u=i.a;function h(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(u,r({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{kind:"warning",mdxType:"InlineNotification"},"UNDER CONSTRUCTION"),Object(a.b)(l,{mdxType:"PageDescription"},'This microservice is responsible to support simulation of fleet of container carrier vessels. It used for demonstration purpose, but it is still using an event-driven microservice implementation approach. It supports the event, actors, and commands discovered during the event storming workshop and illustrated by the following figure for the "ship actor".'),Object(a.b)(p,{mdxType:"AnchorLinks"},Object(a.b)(b,{mdxType:"AnchorLink"},"Overview"),Object(a.b)(b,{mdxType:"AnchorLink"},"Build"),Object(a.b)(b,{mdxType:"AnchorLink"},"Run"),Object(a.b)(b,{mdxType:"AnchorLink"},"Integration Tests"),Object(a.b)(b,{mdxType:"AnchorLink"},"Implementation Details")),Object(a.b)("h2",null,"Overview"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description:")," This microservice will manage the fleet of ships. The service exposes simple REST API to support getting ships and fleets information, and start and stop simulator to emulate ship movements and container metrics events generation. When a ship leaves or enters it will also generate the events as listed in the analysis."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Github repository:")," ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms"}),"refarch-kc-ms")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Folder:")," ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms/tree/master/fleet-ms"}),"fleet-ms")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kafka topics consumed from:")," TBD"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kafka topics produced to:")," TBD"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events reacted to:")," TBD"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events produced:")," TBD"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"EDA Patterns implemented:")," TBD"),Object(a.b)("h2",null,"Build"),Object(a.b)("p",null,"TBD Appsody"),Object(a.b)("h2",null,"Run"),Object(a.b)("p",null,"TBD Appsody"),Object(a.b)("h2",null,"Integration Tests"),Object(a.b)("p",null,"TBD Source from ",Object(a.b)("a",r({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc-ms/fleetms/#running-integration-tests-with-kafka"}),"https://ibm-cloud-architecture.github.io/refarch-kc-ms/fleetms/#running-integration-tests-with-kafka")),Object(a.b)("h2",null,"Implementation Details"),Object(a.b)("p",null,"TBD Source from ",Object(a.b)("a",r({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc-ms/fleetms/"}),"https://ibm-cloud-architecture.github.io/refarch-kc-ms/fleetms/")),Object(a.b)("h3",null,"What you will learn"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using JAXRS API to define REST resources"),Object(a.b)("li",{parentName:"ul"},"Using microprofile for API documentation"),Object(a.b)("li",{parentName:"ul"},"How to leverage WebSphere Liberty in container to support simple JEE and microprofile services"),Object(a.b)("li",{parentName:"ul"},"Kafka producer code example"),Object(a.b)("li",{parentName:"ul"},"Test Driven Development with JAXRS and Integration test with Kafka")),Object(a.b)("p",null,"We recommend also reading the ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/docs/kafka/producers.md"}),"producer design and coding considerations article")),Object(a.b)("h3",null,"Pre-Requisites"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://maven.apache.org/install.html"}),"Maven")," used to compile and package the application."),Object(a.b)("li",{parentName:"ul"},"Java 8: Any compliant JVM should work.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"}),"Java 8 JDK from Oracle")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"http://www.ibm.com/developerworks/java/jdk/"}),"Java 8 JDK from IBM (AIX, Linux, z/OS, IBM i)"),",\nor ",Object(a.b)("a",r({parentName:"li"},{href:"https://developer.ibm.com/assets/wasdev/#filter/assetTypeFilters=PRODUCT"}),"Download a Liberty server package"),"\nthat contains the IBM JDK (Windows, Linux)"))),Object(a.b)("li",{parentName:"ul"},"We used ",Object(a.b)("a",r({parentName:"li"},{href:"https://www.eclipse.org/downloads/"}),"Eclipse 2018 edition")," IDE for Java development."),Object(a.b)("li",{parentName:"ul"},"Clone the parent project to get access to docker compose yml files: ",Object(a.b)("inlineCode",{parentName:"li"},"git clone https://github.com/ibm-cloud-architecture/refarch-kc"),". Normally you should have access to this repository from the main reference implementation repository using the ",Object(a.b)("inlineCode",{parentName:"li"},"clone.sh")," script."),Object(a.b)("li",{parentName:"ul"},"Have docker engine installed on your computer.")),Object(a.b)("h3",null,"User stories"),Object(a.b)("p",null,"This service keeps track of each of the container ships available for transporting containers. Each ship has a unique shipID. We limit the scope of a minimum viable product so the following user stories are implemented:"),Object(a.b)("ul",{className:"contains-task-list"},Object(a.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",r({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","The information about each ship is kept in a json file for a fleet. Ships are uniquely identified by their name (as shipID)."),Object(a.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",r({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","The capacity of a ship is represented by a matrix, number of rows x number of columns to make it simpler. Therefore the total number of container is rows*columns."),Object(a.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",r({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Support GPS lat/log position reports, as ship position event, of the position of the ship a different point in time. This is modeled as csv file with one row of (lat,log) pair, a row representing a time stamp. (1h?)"),Object(a.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Generate ship event when leaving source port and when entering destination port, and when docked."),Object(a.b)("li",r({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",r({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Define query of what happen to a ship from a given time to retrace its past voyages.")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-microservices-fleet-index-mdx-27edd31bcdb6ea0f07a7.js.map