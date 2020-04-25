(this["webpackJsonpreact-cs-app"]=this["webpackJsonpreact-cs-app"]||[]).push([[0],{46:function(e,t,a){e.exports=a(61)},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(20),o=a.n(r),c=(a(51),a(52),a(43)),u=a(12),m=a(14),i=a(15),s=a(17),E=a(16),d=(a(53),a(63)),p=a(69),h=a(64),g=(a(36),a(32)),f=a(21);var y=function(){return n.a.createElement(g.a.Group,{as:f.a,controlId:"formOptions"},n.a.createElement(g.a.Control,{as:"select",defaultValue:".."},n.a.createElement("option",null,"Choose Matching Attribute"),n.a.createElement("option",null,"Customer Id"),n.a.createElement("option",null,"First Name"),n.a.createElement("option",null,"Middle Name"),n.a.createElement("option",null,"Last Name"),n.a.createElement("option",null,"Full Name"),n.a.createElement("option",null,"Alias Name"),n.a.createElement("option",null,"DOB"),n.a.createElement("option",null,"Nationality"),n.a.createElement("option",null,"Personal Email"),n.a.createElement("option",null,"Business Email"),n.a.createElement("option",null,"Personal Phone"),n.a.createElement("option",null,"Business Mobile Phone"),n.a.createElement("option",null,"Home Phone"),n.a.createElement("option",null,"Home Address"),n.a.createElement("option",null,"Work Address")))},b=function(e){Object(s.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={attrArray:["First Name","Middle Name","Last Name","Alias Name","Full Name","DOB","Nationality","Personal Email","Business Email","Personal Phone","Mobile Phone","Work Address","Home Address"]},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,null,n.a.createElement(p.a,{style:{width:"100%",marginTop:"20px"}},n.a.createElement(p.a.Body,null,n.a.createElement(p.a.Title,null,"Standardization of Attributes from Multiple Sources"),n.a.createElement(h.a,{className:"table-hover table-striped",style:{marginTop:"20px"}},n.a.createElement("thead",{className:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",null,"Standardized Attributes"),n.a.createElement("th",null,"Source1 Attributes"),n.a.createElement("th",null,"Source2 Attributes"))),n.a.createElement("tbody",null,this.state.attrArray.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e),n.a.createElement("td",null,n.a.createElement(y,null)),n.a.createElement("td",null,n.a.createElement(y,null)))}))))))))}}]),a}(n.a.Component),v=a(67),C=a(68),M=function(e){Object(s.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(v.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},n.a.createElement(v.a.Brand,{href:"#home"},n.a.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"}),"","Company Name"),n.a.createElement(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(v.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(C.a,{className:"mr-auto"},n.a.createElement(C.a.Link,{href:"/Standarization"},"Standarization"),n.a.createElement(C.a.Link,{href:"/Rules"},"Rule"))))}}]),a}(n.a.Component),z=a(65),x=a(66),F=(a(57),function(e){Object(s.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).appendRule=function(){var t=e.state.rules.push({CustomerId:{matchingMethod:""},FullName:{matchingMethod:"",value:"",cutOff:""}});e.setState({allRules:t})},e.changeMatchingMethod=function(t,a,l){var n=e.state.rules[a];"customerID"===l?(n.CustomerId.matchingMethod=t.target.value,e.state.rules[a]=n,e.setState(e.state.rules[a])):(n.FullName.matchingMethod=t.target.value,e.state.rules[a]=n,e.setState(e.state.rules))},e.state={rules:[{CustomerId:{matchingMethod:""},FullName:{matchingMethod:"",value:"",cutOff:""}}]},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(d.a,null,n.a.createElement(p.a,{style:{width:"100%",marginTop:"12px"}},n.a.createElement(p.a.Body,null,n.a.createElement(p.a.Title,null,"Deduplication Rules"),n.a.createElement(z.a,null,n.a.createElement(f.a,null,n.a.createElement(g.a,null,n.a.createElement(g.a.Group,{controlId:"formRuleSetName"},n.a.createElement(g.a.Label,null,"Rule Set Name"),n.a.createElement(g.a.Control,{type:"text",placeholder:"Enter RuleSet Name"})))),n.a.createElement(f.a,null),n.a.createElement(f.a,null,n.a.createElement(g.a.Group,{controlId:"formRuleSetDescription"},n.a.createElement(g.a.Label,null,"Description"),n.a.createElement(g.a.Control,{as:"textarea",rows:"2",placeholder:"Enter RuleSet Description "})))),n.a.createElement(z.a,{style:{marginTop:"10px"}},n.a.createElement(f.a,null,n.a.createElement(g.a.Group,{controlId:"formAggregationMethod"},n.a.createElement(g.a.Label,null,"Selection Aggregation Method"),n.a.createElement(g.a.Control,{as:"select",defaultValue:".."},n.a.createElement("option",null,"Choose Aggregation Method"),n.a.createElement("option",null,"Minimum"),n.a.createElement("option",null,"maxiumum"),n.a.createElement("option",null,"Average")))),n.a.createElement(f.a,null),n.a.createElement(f.a,null,"RuleSet Score Threshold ",n.a.createElement(g.a.Control,{type:"text",placeholder:"RuleSet Threshold Score"}))))),n.a.createElement(x.a,{variant:"primary",style:{margin:"10px"},onClick:this.appendRule},"Add Rule"),this.state.rules.map((function(t,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{key:a,style:{marginBottom:"10px"}},n.a.createElement(p.a.Body,{id:"ruleSet"},n.a.createElement(z.a,null,n.a.createElement(f.a,null,n.a.createElement(g.a.Label,null,"Rule Name"),n.a.createElement(g.a.Control,{type:"Text",placeholder:"Enter Rule Name"})),n.a.createElement(f.a,null),n.a.createElement(f.a,null,n.a.createElement(g.a.Label,null,"Rule Weightage"),n.a.createElement(g.a.Control,{type:"Text",placeholder:"Enter Rule Weightage"}))),n.a.createElement(z.a,{style:{marginTop:"10px",backgroundColor:"#d4d3d3",borderRadius:"4px",padding:"10px"}},n.a.createElement(f.a,null,"Customer ID"),n.a.createElement("br",null),n.a.createElement(f.a,null,n.a.createElement(g.a.Label,null,"Matching Method"),n.a.createElement(g.a.Control,{as:"select",defaultValue:"..",onChange:function(t){return e.changeMatchingMethod(t,a,"customerID")}},n.a.createElement("option",null,"Choose Matching Method"),n.a.createElement("option",{value:"ExactMatch"},"Exact Match"),n.a.createElement("option",{value:"Fuzzy"},"Fuzzy"))),"Fuzzy"===e.state.rules[a].CustomerId.matchingMethod?n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,null,n.a.createElement(g.a.Label,null,"Fuzzy Value"),n.a.createElement(g.a.Control,{type:"text",placeholder:"Enter Fuzzy Value"})),n.a.createElement(f.a,null,n.a.createElement(g.a.Label,null,"Fuzzy Cut Off"),n.a.createElement(g.a.Control,{type:"text",placeholder:"Enter Fuzzy Cut off"}))):n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,null),n.a.createElement(f.a,null))),n.a.createElement(z.a,{style:{marginTop:"10px",backgroundColor:"#d4d3d3",borderRadius:"4px",padding:"10px"}},n.a.createElement(f.a,null,"Full Name"),n.a.createElement("br",null),n.a.createElement(f.a,null,n.a.createElement(g.a.Label,null,"Matching Method"),n.a.createElement(g.a.Control,{as:"select",defaultValue:"..",onChange:function(t){return e.changeMatchingMethod(t,a,"FullName")}},n.a.createElement("option",null,"Choose Matching Method"),n.a.createElement("option",{value:"ExactMatch"},"Exact Match"),n.a.createElement("option",{value:"Fuzzy"},"Fuzzy"))),"Fuzzy"===e.state.rules[a].FullName.matchingMethod?n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,null,n.a.createElement(g.a.Label,null,"Fuzzy Value"),n.a.createElement(g.a.Control,{type:"text",placeholder:"Enter Fuzzy Value"})),n.a.createElement(f.a,null,n.a.createElement(g.a.Label,null,"Fuzzy Cut Off"),n.a.createElement(g.a.Control,{type:"text",placeholder:"Enter Fuzzy Cut off"}))):n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,null),n.a.createElement(f.a,null))))))})),this.state.rules.length>=3?n.a.createElement(x.a,{variant:"primary",style:{margin:"10px"},onClick:this.appendRule},"Add Rule"):n.a.createElement("div",null))}}]),a}(n.a.Component));var N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(M,null),n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/Standarization",component:b}),n.a.createElement(u.a,{exact:!0,path:"/Rules",component:F}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.57dfe899.chunk.js.map