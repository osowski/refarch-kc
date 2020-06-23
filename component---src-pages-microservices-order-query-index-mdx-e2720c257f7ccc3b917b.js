(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{GIY3:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return i})),r.d(t,"default",(function(){return u}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var n=r("7ljp"),a=r("013z");r("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=c("InlineNotification"),b=c("PageDescription"),s=c("AnchorLinks"),p=c("AnchorLink"),m={_frontmatter:i},d=a.a;function u(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(n.b)(d,o({},m,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{kind:"warning",mdxType:"InlineNotification"},"UNDER CONSTRUCTION"),Object(n.b)(b,{mdxType:"PageDescription"},"This project is demonstrating, one of the possible implementation of the Command Query Responsibility Segregation and event sourcing patterns applied to Reefer shipment order subdomain. It is part of the Event Driven Architecture solution implementation. From a use case point of view, it implements the order management component, responsible to manage the full life cycle of a shipping order issued by a customer who wants to ship fresh goods overseas."),Object(n.b)(s,{mdxType:"AnchorLinks"},Object(n.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(p,{mdxType:"AnchorLink"},"Build"),Object(n.b)(p,{mdxType:"AnchorLink"},"Run"),Object(n.b)(p,{mdxType:"AnchorLink"},"Integration Tests"),Object(n.b)(p,{mdxType:"AnchorLink"},"Implementation Details")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Description:")," Main goal of the Orders component is to manage the shipping orders. This component is made up of two microservices, one called Order Command and the other Order Query. The reason for this component to be split into two microservices is to implement the ",Object(n.b)("a",o({parentName:"p"},{href:"#command-query-responsibility-segregation-(cqrs)"}),Object(n.b)("strong",{parentName:"a"},"Command Query Responsibility Segregation (CQRS)"))," pattern."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABZElEQVQoz5VSy0rDQBTNV/kB/oG40T9wqXsR+gnqzqXr4sKVCoJVF00prdUS1IGmD7Vp0kxezUwn84g3SS3UKOhZhLnhnnvnnDNaugqlsm9Mee3BvmpYbsCWP8vQvtUybxzZZPNAX9+9a754UAqp/kQu8DGe6J1BB2EXh0rJNE3/QTYMY9jveRi3Wy2EEOf8V7IQgtI5dEgJR0kIGY2Gk4kT04TzBEpKqShhQWaMmaaJsSdlyhLuTF0h04RLGAgH7EdTN1MOuuUXYJNSSsvNVLBwzkRMqG07QRSL3CLwDvqgwXPtQd8MQ9CvlvzFZhhDZmGqBEuYYXTjWZylRQjcCMxHb7PrOuoar9Z4DENXNMs8hvtHZ++4c3ox4EJZeB6RBAz3/QCHbKuir+3Ums/ZzeVqZlqR4WXD2q40jqrosIo29utnt+/F2xBCPfUC3XCjmBeyf45K5c/jpm2fnPe6ZlDeU8YnTmxytIcI4jYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Order Query diagram",title:"Order Query diagram",src:"/refarch-kc/static/4516a96b7f6314660d9bb44b93946abc/2faef/microservice-overview-order-query.png",srcSet:["/refarch-kc/static/4516a96b7f6314660d9bb44b93946abc/7fc1e/microservice-overview-order-query.png 288w","/refarch-kc/static/4516a96b7f6314660d9bb44b93946abc/a5df1/microservice-overview-order-query.png 576w","/refarch-kc/static/4516a96b7f6314660d9bb44b93946abc/2faef/microservice-overview-order-query.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"This microservice will implement the query logic in the CQRS pattern. That is, will be in charge of implementing any type of query that is needed based on building the necessary projections over the totality of the data. In order to build those projections, this microservice might well listen to several topics and events."),Object(n.b)("p",null,"This microservice has been implemented using MicroProfile 3.0. and runs on OpenLiberty."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Github repository:")," ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms"}),"refarch-kc-order-ms")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Folder:")," ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms/order-query-ms"}),"order-query-ms")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Kafka topics consumed from:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#orders-topic"}),"Order Topic")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#containers-topic"}),"Containers Topic"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Kafka topics produced to:")," None"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Events reacted to:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#order-created-event"}),"Order Created Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#order-updated-event"}),"Order Updated Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#order-reject-event"}),"Order Reject Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#order-cancel-event"}),"Order Cancel Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#order-spoilt-event"}),"Order Spoilt Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#voyage-assigned-event"}),"Voyage Assigned Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#container-allocated-event"}),"Container Allocated Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#container-added-event"}),"Container Added Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#container-on-maintenance-event"}),"Container On Maintenance Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#container-off-maintenance-event"}),"Container Off Maintenance Event")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#container-assigned-event"}),"Container Assigned Event"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Events produced:")," None"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"EDA Patterns implemented:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#command-query-responsibility-segregation-(cqrs)"}),"Command Query Responsibility Segregation (CQRS)"))),Object(n.b)("h2",null,"Build"),Object(n.b)("p",null,"TBD Appsody"),Object(n.b)("h2",null,"Run"),Object(n.b)("p",null,"TBD Appsody"),Object(n.b)("h2",null,"Integration Tests"),Object(n.b)("p",null,"TBD"),Object(n.b)("h2",null,"Implementation Details"),Object(n.b)("p",null,"TBD Merge the following:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms/blob/master/docs/implementation-considerations.md"}),"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms/blob/master/docs/implementation-considerations.md")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms/blob/master/docs/ddd-applied.md"}),"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms/blob/master/docs/ddd-applied.md"))),Object(n.b)("h3",null,"What you will learn"),Object(n.b)("p",null,"By studying this repository, you will be able to learn the following subjects:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"How to apply domain driven design for a CQRS microservice"),Object(n.b)("li",{parentName:"ul"},"How to adopt CQRS pattern for the shipping order management"),Object(n.b)("li",{parentName:"ul"},"How to apply ubiquituous language in the code"),Object(n.b)("li",{parentName:"ul"},"Develop and deploy a microprofile 2.2 application, using open Liberty, on openshift or kubernetes")),Object(n.b)("h3",null,"Requirements"),Object(n.b)("p",null,"The key business requirements we need to support are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Be able to book a fresh product shipment order, including the allocation of the voyage and the assignment of a reefer container to the expected cargo."),Object(n.b)("li",{parentName:"ul"},"Be able to understand what happen to the order over time:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"How frequently does an order get cancelled after it is placed but before an empty container is delivered to pick up location or loaded ?"),Object(n.b)("li",{parentName:"ul"},"Track key issue or step in the reefer shipment process"),Object(n.b)("li",{parentName:"ul"},"How often does an order get cancelled after the order is confirmed, a container assigned and goods loaded into it?"))),Object(n.b)("li",{parentName:"ul"},"Be able to support adhoc query on the order that span across subdomains of the shipment domain.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"What are all events for a particular order and associated container shipment?"),Object(n.b)("li",{parentName:"ul"},"Has the cold chain been protected on this particular order?"),Object(n.b)("li",{parentName:"ul"},"How long it takes to deliver a fresh food order from california to China?")))),Object(n.b)("p",null,"Those requirements force use to consider event sourcing (understanding facts about the order over time) and CQRS patterns to separate queries from command so our architecture will be more flexible and may address different scaling requirements."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-microservices-order-query-index-mdx-e2720c257f7ccc3b917b.js.map