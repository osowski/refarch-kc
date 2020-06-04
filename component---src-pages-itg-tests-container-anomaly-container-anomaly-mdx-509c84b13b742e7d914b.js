(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{nISC:function(a,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return c})),t.d(e,"default",(function(){return o}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var i=t("7ljp"),n=t("013z");t("qKvR");function s(){return(s=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a}).apply(this,arguments)}var c={},l={_frontmatter:c},r=n.a;function o(a){var e=a.components,t=function(a,e){if(null==a)return{};var t,i,n={},s=Object.keys(a);for(i=0;i<s.length;i++)t=s[i],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,["components"]);return Object(i.b)(r,s({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This test case will test the use whereby a container suffers some anomaly. As a result, ContainerAnomaly events are sent to set the container for maintenance mode. A BPM process will take care of setting a container into inMaintenance mode, assigning a technician to repair the container and finally setting that container back to being empty and available. This test case will also ensure the order the container with the anomaly was carrying is marked spoilt. The following diagram depics roughly this path on a flow base fashion where the blue square rectangles, purple rounded rectangles and orange rectangles represent actions taken by the test case, events produced to the event backbone (either Kafka or IBM Event Streams) and object statuses respectively."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABpElEQVQoz6VSvU7DMBD2wMoO78NLsPACIDGwsLIy9AGQmBATEjAwVPx0oBIttKilokBRKZSkaZw0SXHixPEvV1ARSEgMfLKtz2ffne87IwPQGhaWkMjq0tATylAmGo/haMymh78Daa0V58AS33ko7Xu9TqOLj84bR1Xnb+cvJlgm4zDyBhYePds4zYX5Cyjp9drr691CQSvJtfF9TNMUDnIuaSYpk0JIIRVJWQzxpJJSxRknlHGp0bBY3EboYG4+GVmdF++4fF9t2R62+xa+qD1dt4cYO7brFsvN0uWd47oudk6v7o+rt5ZHEO33nzY2Xnd2oDTGlWVbQRRDnTmoYAwRSgC0cZPYz1LQEpJ74dsAYyY0+l5DLnQYBoRQCOSfnbZXlvHhIdhVlgXlUlgpayFhm5EgjRxQEsHUUsIAq+XRSmtw0/FHlLTWVrcQqi0tgX3cbO7OzOzNzma2Pbl2c9G7POFp/DMzVzHNKYUnm6hee97cDOp14FBaZWHhanGRUzpp6rA/fn0UeY7MP/DDWU/HhCulQSmlPr/ghItp50HPj6/zDunBX71JnJKiAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"flow",title:"flow",src:"/refarch-kc/static/100beb276d04b482c3a86519c3685b0d/2faef/Slide1.png",srcSet:["/refarch-kc/static/100beb276d04b482c3a86519c3685b0d/7fc1e/Slide1.png 288w","/refarch-kc/static/100beb276d04b482c3a86519c3685b0d/a5df1/Slide1.png 576w","/refarch-kc/static/100beb276d04b482c3a86519c3685b0d/2faef/Slide1.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h2",null,"Tests"),Object(i.b)("p",null,"The following sequence diagrams represent each of the tests within this container anomaly integration test case."),Object(i.b)("h3",null,"Test 1 - Disable BPM"),Object(i.b)("p",null,"This test will make sure that when the application is deployed, the BPM anomaly service is enabled. However, it will then disable the BPM anomaly service in order to mockup the call and be able to carry on with this container anomaly test."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABSUlEQVQoz5VRwU7DMAzt/3PmsAMSHJCQ4IaEQNoBJL4AIWhRx9hWGO3WblmbpklsByeVyrgxy3l13T6/lySSUr7F8fsk/cyyNE3jJFmXZbXZlGVZFCtjrCNCawgRrXUIQ01EEQKkN1fx5an4Xk7n8zzPd7umrLZC1GIrwLnF4/jl7Dh7uHs9Hy3ub5OLk9n4+ml0VCXPEQ9uV3n9lem2baQ0xmhjwAeyLDrXrgvxMVFlIWZTxfV8KotllcamFpFzDskZcJLJrbIWtSVmGY9kgfgrhH+AHM/i5KCAgQw8pZLM5qUUEwB5Xw6QbXES+HcCGzB0MWAgI+pOsUn26vtejcOr9dEXGB77GPUeVAe7Wnad4SbDvm3OvtAWfQ1/yayslDTWmhCHKfOtNc2263THS+uwwf/bJn82QxymHPg0kMMJ/97Hfn9o9vgD1mN9vH4EuGQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"container anomaly",title:"container anomaly",src:"/refarch-kc/static/0b0a8bd77fa8aa013f6ca965f3e94e28/2faef/Slide2.png",srcSet:["/refarch-kc/static/0b0a8bd77fa8aa013f6ca965f3e94e28/7fc1e/Slide2.png 288w","/refarch-kc/static/0b0a8bd77fa8aa013f6ca965f3e94e28/a5df1/Slide2.png 576w","/refarch-kc/static/0b0a8bd77fa8aa013f6ca965f3e94e28/2faef/Slide2.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 2 - Send Anomaly Events"),Object(i.b)("p",null,"This tests will send the ContainerAnomaly events needed to trigger the bpm call process and order spoilage."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABTklEQVQoz42RS0/CQBDH+/09e+DgQRMTD8aLByXxgB9AEg3BFkuhFKHPZbt972OW3RaBkKj8M5mdTOa3MztrFEVhmaZj29/LpW3bpmnFcYI2G2VJghKEsowAZyCEYEwKLhjtYgAwgHPn6WFyf50G69nCC4OAZDlCOCUZxmkjwB30xzeX3mv/87bnDZ6tuyv35fGjd4GskSEBisgnK4/WdV6WTUOVMa5FKQUpyyTC82kVh9h1yihMF7MiXCPbpFlqSClVhVAe1KnFuJpLmRQgu9RvXsOqdIPVqGgVkpGD1SUqoyR2hfqN2nNxEredASjVvUle+6jSbTUrd7DcBaI9jr2G84pNvNSax+Np4Pr51zJTmX3FP3Ca06EVvY1XQzMcDP13G5OCngtzAWXNKZcNg4aKolKbPnvsbkPyR+1G5GFhf8Mdv1dLHv7jOH/yVVsuFnpcgNOXjwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"container anomaly",title:"container anomaly",src:"/refarch-kc/static/05b117187395f12e9ce5252144ac95a6/2faef/Slide3.png",srcSet:["/refarch-kc/static/05b117187395f12e9ce5252144ac95a6/7fc1e/Slide3.png 288w","/refarch-kc/static/05b117187395f12e9ce5252144ac95a6/a5df1/Slide3.png 576w","/refarch-kc/static/05b117187395f12e9ce5252144ac95a6/2faef/Slide3.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 3 - Container in MaintenanceNeeded Status"),Object(i.b)("p",null,"This test will make sure the container which ContainerAnomaly events have been sent for gets into MaintenanceNeeded status as a result."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABUklEQVQoz5WRPU/DMBCG8/9ZmJAYKiEmJNgQHwMIdiZQkVIUGvpB2iS2kziNk9i+M3ZdBaliKCfrtfXePT7nEjRN8xGG08/oe7mMoiicTAihrCgYY2VZUbtRkqcpybKCUgQNSiIAKIWIAWgd3V6Fl2fVevU1X6RpxvmGsrLidVVWPWD8dPc6Oo4fb8bnJ4vn+8nFaPZw/XZ6xCbjwCCKPK2TZdtsOK/7vpdKaRcgpUJjWprz2bRjOZ/HgqTlLG6yFYtCWVeBMRY3Upu27YXout6iKBVY0C57BjTaGKfoVIFxiBPjYRSitdFLDWC2y34XanD32qx1B1XKubDNBf4awqqCkpf39TxtrLMtcz19+IP1rGqNvmDobDSYIQB3Df+E1R4MoKuS2DknScI59+TBnQFa0Qgh6rruug7+B6Mb0oHP3of9wAcY/Z9A82vtan4rfeoHjgt8BXItO84AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"maintenanceNeeded",title:"maintenanceNeeded",src:"/refarch-kc/static/6fa6405dd52386d1347bedc9ee4b224b/2faef/Slide4.png",srcSet:["/refarch-kc/static/6fa6405dd52386d1347bedc9ee4b224b/7fc1e/Slide4.png 288w","/refarch-kc/static/6fa6405dd52386d1347bedc9ee4b224b/a5df1/Slide4.png 576w","/refarch-kc/static/6fa6405dd52386d1347bedc9ee4b224b/2faef/Slide4.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 4 - Order Spoilt"),Object(i.b)("p",null,"This test will make sure that the order the container which ContainerAnomaly events have been sent for was carrying gets into spoilt status as a result."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABcElEQVQoz42STU+EMBCG+f+ePWjiwYOJh72ZGE08aOIvMMZdFEHXgmy/oCzg0nZap1SNBw9OyEMLfWfedpoMw/CYrvIsI4RkWbZKUy6EbKSUDb6NsR4cGO0AwBgP9mfsnEvA2ux8kS6Ou029JoRSqrpeyFZ1W9Uq6z25vXo43ic3l8uTw7fri/T06PXq7O5gT6b3iXduZLR5LSSnFW3HnTYYNsQ0aXB+5LQpnmfmSLUuBvous5XeqgSre++fSLeuxEvVMjloA9o4ZLDmQ8BMO0/il8gkjEALwWsqaF322w5lAB7A2Xk5ZjcG/DfDP6QNTGKisiSPGHnZj1MUYNEoDjXnQSQm/WEQg3NNN+IRr/JatB+YGjeL9ZEowAd3gcvM32JrVEsZ46rhjG7K6p1S9t/KGFXNiiIvN91O++jl37YBWjVgb5dZxcR2msxHaJjbTV+2o3+t4U8x2macCynwdnG8J33fx2PzvxoD8/R3qz4BbFN2x5rpESUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"order spoilt",title:"order spoilt",src:"/refarch-kc/static/e36db790fbb5d0f563b7758c50a2feee/2faef/Slide5.png",srcSet:["/refarch-kc/static/e36db790fbb5d0f563b7758c50a2feee/7fc1e/Slide5.png 288w","/refarch-kc/static/e36db790fbb5d0f563b7758c50a2feee/a5df1/Slide5.png 576w","/refarch-kc/static/e36db790fbb5d0f563b7758c50a2feee/2faef/Slide5.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 5 - Container To Maintenance"),Object(i.b)("p",null,"This test will call the toMaintenance API endpoint for setting a container into inMaintenance mode."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABWElEQVQoz6VRTU/DMAzt/+fGbQcEFyQkuCHxISEBfwGQaFE31LGxdmvTJv3YmsQOdlu2iR2x0lfH8fOzE6+u6w/fn4zD+WwWhqEfBGmaiTwX9OVFJkSarupSOUQw2oElRAAwBhE9sDa8ufIvz4rFfBJNkyRRqhKikKqUUmpwn4+3r6fHs+f79/PR19NdcHESPVy/jI5E8OZRyWaV1PE3ldy0rbWm1cZYNt1qdG6dpTIaN+lSRhPKLKLPerkQoa9L6TnnKEPW6ziORS433BQCuh7pqE/YIuDOZzLlqbKRSq0yOU0qJCaywUBCC8AzA4et6XzL2Cl3Ou7XWJAXbmO9Q1RCa7HXG5TJ6maj6IZUWVWNAZJyFpA0uH90vcNxdJo2+2Sq2Gq6dTCWUVs0vNixXIi3hJoSANsDMvbNuGHGoW3EXaRP47YBD8j/mRl3XH4G7H57sb/6/dEPw7V9heHABgQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"container toMaintenance",title:"container toMaintenance",src:"/refarch-kc/static/2e3a4c910a8ed08d1474db19851fafaa/2faef/Slide6.png",srcSet:["/refarch-kc/static/2e3a4c910a8ed08d1474db19851fafaa/7fc1e/Slide6.png 288w","/refarch-kc/static/2e3a4c910a8ed08d1474db19851fafaa/a5df1/Slide6.png 576w","/refarch-kc/static/2e3a4c910a8ed08d1474db19851fafaa/2faef/Slide6.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 6 - Container InMaintenance Status"),Object(i.b)("p",null,"This test will make sure that the container that was set into inMaintenance mode in the previous test, is now indeed into inMaintenance mode."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABTUlEQVQoz5WR0UvDMBDG+//75KPCwBdB0DdB9yDMd58UxU7qZrfZrV2TtematE3uzmQZHQwf9Dg+wnf3y6XXoK7rjzCcfEbfi0UUReF4nOeMbzacu8wZ44yxLFNSojEIBnSHAKA1IgZgTHR3E15flKvl12yeppkQW8aLUlRFUbYGp6Ph8+A0Ht2/X57PH4fjq0H8cPtydsLHrwEhynVaJQtVb4Wo2rbttDYuoOs0Eim2LuOJYpnTPC3iaZ0teRR2VRkQWZw6Q0q1UjZNa1HsNFjQpj0DkiFyik41kEOckIdRSmWj7QwA7dJ+Fxpw99qqdXvV2rmwqwX+mpyXG5Y/va1maW2dXZub6cMfrGfVbs039JPJAPUBuB/4K6yPYABTFrndc5IkQghP/nkygJK1lLKqqqZp4H8wuiX98dnHsF94D6P/E0gHa99z6PSlH2JHfFyawUYXAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"container inMaintenance",title:"container inMaintenance",src:"/refarch-kc/static/8264952b56fd7314b6c00af354bbdc5c/2faef/Slide7.png",srcSet:["/refarch-kc/static/8264952b56fd7314b6c00af354bbdc5c/7fc1e/Slide7.png 288w","/refarch-kc/static/8264952b56fd7314b6c00af354bbdc5c/a5df1/Slide7.png 576w","/refarch-kc/static/8264952b56fd7314b6c00af354bbdc5c/2faef/Slide7.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 7 - Container Off Maintenance"),Object(i.b)("p",null,"This test will set the container that was inMaintenance status off maintenance."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABVklEQVQoz6VRTU+DQBDl/3vz1oPGi4mJ3kz8SIzRv6AmUkNrqK2FAgu7sG3ZnZl1Foht7NHJ5DHsvvdmBgKt9UcYTifRYj6Poigcj/O8EGUpRFkIkRdFkWW1rBwRWuMQGAkRrSWiAAGim6vw8qxaLqbxLE1TpRohKqlqKaVB9/l4+3p6PH++fz8ffT3djS9O4ofrl9GRGL8FbLnOUp18s+W2bQGgNdaCD9Macm5TZDKerPOVjKfMrOJPvVqKKDS1DFwXstkkSSJKuTWIPCEnMjrqbvcRaVd7MbOk0lKprJCzpCFihg8cRASIfmdvS2C7Gjx2YmYPxMGbfNLvWV+wlBHAY88fxtZ6o1TN2TTaALdygMQ90E/h+sIisdDwy76YHVvDXx0teGSx9Ymdi0/bFYYJSO2BmPph3LDjMDbR7qSn+bGRDsT/2Zl2Wv8bqHvsnf3t31/9AJE/fW0QDvhxAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"order assigned",title:"order assigned",src:"/refarch-kc/static/6ca78490cf9eefacb991374012635d9f/2faef/Slide8.png",srcSet:["/refarch-kc/static/6ca78490cf9eefacb991374012635d9f/7fc1e/Slide8.png 288w","/refarch-kc/static/6ca78490cf9eefacb991374012635d9f/a5df1/Slide8.png 576w","/refarch-kc/static/6ca78490cf9eefacb991374012635d9f/2faef/Slide8.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 8 - Container Empty Status"),Object(i.b)("p",null,"This test will make sure that the container that was set off maintenance mode in the previous test, is now indeed empty and available."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABTklEQVQoz5VRTU/DMAzt/+fMYQckOCAhwQ0JDQkJOHNDTLSoY+yDbt2atknXdE1im6SZijRxGJbzZD372YkT1HX9EYaf4/h7sYjjOIyiLGN5UeTuFIyxImdGtYQIWhMY0AoBbIyIARgT392E1+d8tfyazdN0LcSW5SUXFS95Czh5HI4uThfP9++Xg/nTMLo6mz7cvg5O8ugtsC3lJq2SRVNvhajatlVaG2eglEaihm34dNywNZ9NZJaW00m9XuZxqCoeEFk5KUNN00q52+2UNqg0dI42BiRD5BAdaiAncUBejFI21lplAKhz+y404PrarGV71Nqx0OUC3ybLecGyl9FqltaW6crcTG8+sJxFY9AX9JPJAPUGuB/4p1gfiAEMLzO75yRJhBBeefRkgEbWUsqqquzG4H9idEs68tqHYr/wXoz+J5B+qX3Nb6VP/QA7bXy1DbRUxAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"container empty",title:"container empty",src:"/refarch-kc/static/16c98d5a57d5864a6d08c6a6e7f1f9b7/2faef/Slide9.png",srcSet:["/refarch-kc/static/16c98d5a57d5864a6d08c6a6e7f1f9b7/7fc1e/Slide9.png 288w","/refarch-kc/static/16c98d5a57d5864a6d08c6a6e7f1f9b7/a5df1/Slide9.png 576w","/refarch-kc/static/16c98d5a57d5864a6d08c6a6e7f1f9b7/2faef/Slide9.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 9 - Enable BPM"),Object(i.b)("p",null,"This test will make sure that the BPM anomaly service is enabled for the application to work as expected."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABSElEQVQoz5VRTUvDQBDN//fsoQdBD4KgN0EUelDwF4hoIqm1bbSmTdJu0t3sx8yskw2k9djH8PIyO29msomklB9x/DlJv7MsTdM4SYqirDabsqrWRWGt80ToLCGicx5h0EQUIUB6dxNfn4vf5XQ+z/O8rndltRV1I7Y1eL94Hr9dnGZPD++Xo8XjfXJ1NhvfvoxOquQ14sZqnTc/mVFqJ6W11lgLAazRe1WsxNekLVdiNm1Zz6dytazS2DYi8t4jeQteslm1zqFxZB3ajskB8SmEGiDPvTgYFDiYwdailLKV3EApNgDyd3lAXouDoHsncIFDFgMHM6LRPLPbNpRyDaOb1qMXGB6HHPU7tAbqRmrDzb22eLg2Ry/4sNPw38yT21Y5Ht3BHTcZwUkptDZaa2vMkWtTdzcDjjMHPw3mcMP7/3GYH5I9/wHozX3IZUuAygAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"container anomaly",title:"container anomaly",src:"/refarch-kc/static/95b99b3c23a288bed77e7d79a1127a85/2faef/Slide10.png",srcSet:["/refarch-kc/static/95b99b3c23a288bed77e7d79a1127a85/7fc1e/Slide10.png 288w","/refarch-kc/static/95b99b3c23a288bed77e7d79a1127a85/a5df1/Slide10.png 576w","/refarch-kc/static/95b99b3c23a288bed77e7d79a1127a85/2faef/Slide10.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-itg-tests-container-anomaly-container-anomaly-mdx-509c84b13b742e7d914b.js.map