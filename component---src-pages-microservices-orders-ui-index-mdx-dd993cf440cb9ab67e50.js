(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{AfQT:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=s("InlineNotification"),l=s("PageDescription"),p=s("AnchorLinks"),b=s("AnchorLink"),d={_frontmatter:o},u=i.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(u,r({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{kind:"warning",mdxType:"InlineNotification"},"UNDER CONSTRUCTION"),Object(n.b)(l,{mdxType:"PageDescription"},"The user interface for our Reefer Container Shipment reference application is implemented as a single microservice using Node.js and Angular.js."),Object(n.b)(p,{mdxType:"AnchorLinks"},Object(n.b)(b,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(b,{mdxType:"AnchorLink"},"Build"),Object(n.b)(b,{mdxType:"AnchorLink"},"Run"),Object(n.b)(b,{mdxType:"AnchorLink"},"Integration Tests"),Object(n.b)(b,{mdxType:"AnchorLink"},"Implementation Details")),Object(n.b)("h2",null,"Overview"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABMklEQVQoz2P4Txz48/ffnz//gCSyIAN+PX//gVQ/evk1vedcctfZxPYzD198AYr8A4ujaP6L0AOUBpEQzbeffErqOBPbeiaq+dT9Z1/ghhKwGWLDy3ffq2ddKZx8sXDyhRfvvqPYDPHH6++/l997C2R8+/Fn5qa7HUtvtC6+ce3BR6DItQcfvCuOBlSfcCk6fPfpZxSbIayDzz/57r3348/fD59/+Vcds887ZJK2b9vxZ0CpF2+/l02/mNp9Nn/i+ZdYbf708/f9j9+AngWadeX+x5PX3p66/vb9559AqesPPvqUHw1vOOVWfOTGw0+k+fnV+x8tC6+VTb9UNesyzGbUqPoHDmRoaP/9B0dA7s2Hn1wKD3uWHrPNOXjzEYk2v/7wo2XR9cYF1+rmXsVuMxkAAAlyXhvtiIE6AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"User Interface diagram",title:"User Interface diagram",src:"/refarch-kc/static/e3b44a691d95c74491257bb57fe3ac6f/2faef/kc-ui-overview.png",srcSet:["/refarch-kc/static/e3b44a691d95c74491257bb57fe3ac6f/7fc1e/kc-ui-overview.png 288w","/refarch-kc/static/e3b44a691d95c74491257bb57fe3ac6f/a5df1/kc-ui-overview.png 576w","/refarch-kc/static/e3b44a691d95c74491257bb57fe3ac6f/2faef/kc-ui-overview.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Description: The goal of this component is to serve a user interface for customers to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Log in"),Object(n.b)("li",{parentName:"ul"},"Create an order"),Object(n.b)("li",{parentName:"ul"},"List all orders"),Object(n.b)("li",{parentName:"ul"},"List all containers"),Object(n.b)("li",{parentName:"ul"},"Initiate shipping simulation")),Object(n.b)("p",null,"Github repository: ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ui"}),"refarch-kc-ui")),Object(n.b)("p",null,"Kafka topics it subscribes to: None"),Object(n.b)("p",null,"Kafka topics it produces to: None"),Object(n.b)("h2",null,"Build"),Object(n.b)("p",null,"TBD Appsody"),Object(n.b)("h2",null,"Run"),Object(n.b)("p",null,"TBD Appsody"),Object(n.b)("h2",null,"Integration Tests"),Object(n.b)("p",null,"TBD"),Object(n.b)("h2",null,"Implementation Details"),Object(n.b)("h3",null,"User stories to support"),Object(n.b)("p",null,"This project is in light development so the following user stories are in plan (or done):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"As a fleet manager I want to login to the webapp to access the fleet management feature. Use ",Object(n.b)("a",r({parentName:"li"},{href:"mailto:eddie@email.com"}),"eddie@email.com"),"."),Object(n.b)("li",{parentName:"ul"},"As a fleet manager I want to select one of the fleet to get the list of ships with their attributes in a table format, and plot the ship on a map at their respective position (latitude, longitude)"),Object(n.b)("li",{parentName:"ul"},"As a demoer I want to start ship movement so the ships move on the map"),Object(n.b)("li",{parentName:"ul"},"As a fleet manager I want to select one ship from the table of ships and present a detail view of it with its containers loaded in the boat"),Object(n.b)("li",{parentName:"ul"},"As a demoer I want to start the fire to container or heat wave or container down simulation from the detailed ship view"),Object(n.b)("li",{parentName:"ul"},"As a demoer I want to see the message coming back from the streaming analytics about next best action from my simulation"),Object(n.b)("li",{parentName:"ul"},"As a manufacturer manager I want to enter container shipment order information like product reference, quantity,  pickup from address, earliest pickup date, shipment to address,  shipment by date, and required temperature in transit range so the shipping company can give me back an order confirmation ( including the orderID), expected pickup and delivery dates, the assigned voyage and ship name as the microservice will not have a dedicated UI, we are using the demonstration UI to define the forms to gather the data. So this user story is implemented in the kc-ui project, and in this microservice we need to offer the create and update operations and get by order ID"),Object(n.b)("li",{parentName:"ul"},"As a manufacturer manager I want to read the status of an order given its order id and receive a report with the full event history of related order, voyage ship and container events.\nThe order id is generated by the order create operation, and is immutable. An order is assigned to a voyage at the time it is created.")),Object(n.b)("h3",null,"UI Development"),Object(n.b)("p",null,"This is a traditional Angular 7 app with the app.module.ts using ",Object(n.b)("inlineCode",{parentName:"p"},"shared")," and ",Object(n.b)("inlineCode",{parentName:"p"},"features")," modules. ",Object(n.b)("inlineCode",{parentName:"p"},"Shared")," is for UI generic widgets, while ",Object(n.b)("inlineCode",{parentName:"p"},"features")," are for supporting the UI specific components linked to the business logic.\nThere is no login page yet, but the home page displays a set of tiles to support the demonstration of the full shipment process as illustrated in the figure below:"),Object(n.b)("img",{src:"kc-ui.png",alt:"kc-ui"}),Object(n.b)("p",null,"For the BFF code the server code is under the ",Object(n.b)("inlineCode",{parentName:"p"},"server")," folder and uses the standard patterns for expressjs middleware. The ",Object(n.b)("a",r({parentName:"p"},{href:"./server/README.md"}),"readme file")," goes into the details on this implementation."),Object(n.b)("p",null,"This project was generated with ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/angular/angular-cli"}),"Angular CLI")," version 7.1. The user interface features are under the features folder. We are using a TDD approach as described in ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-caseportal-app/blob/master/docs/tdd.md"}),"this note.")," The tests run with ",Object(n.b)("inlineCode",{parentName:"p"},"ng test"),". We also encourage to read the ",Object(n.b)("a",r({parentName:"p"},{href:"https://angular.io/guide/testing"}),"angular.io testing guide")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-microservices-orders-ui-index-mdx-dd993cf440cb9ab67e50.js.map