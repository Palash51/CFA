(this.webpackJsonpcfa=this.webpackJsonpcfa||[]).push([[0],{48:function(e,a,t){e.exports=t(99)},50:function(e,a,t){},91:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=(t(50),t(19)),i=(t(54),t(23)),c=t(16),m=t(35),s=Object(c.c)({}),o=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,d=Object(c.e)(s,{},o(Object(c.a)(m.a))),u=t(14),p=t(5),f=t(44),E=t.n(f),g=t(9),h=t.n(g),b=t(36),v=t(32),y=t(37),N=t(38),w=t(46),C=t(47),T=t(40),x=t(39),k=t.n(x),j=function(e){var a=e.isOverlay,t=e.innerLoader;return l.a.createElement("div",{className:k()("sweet-loading",{overlay:a},{innerLoader:t})},l.a.createElement(T.ClipLoader,{sizeUnit:"px",size:150,color:"red",loading:!0}))};j.defaultProps={isOverlay:!1,innerLoader:!1};var O=j,S=function(e){Object(C.a)(t,e);var a=Object(w.a)(t);function t(e){var r;return Object(y.a)(this,t),(r=a.call(this,e)).handleRender=function(e){var a=r.props,t=(a.history,a.layout),i=a.component,c=a.render,m=Object(v.a)(a,["history","layout","component","render"]);return console.log("-=-=-=-=-=-=-=",r.props),t?l.a.createElement(t,m,i?l.a.createElement(n.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(i,e)):c?l.a.createElement(n.Suspense,{fallback:l.a.createElement(O,null)},c(e)):null):l.a.createElement(n.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(i,e))},r.state={refreshLoading:!0},r}return Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=this.props,a.history,a.location,this.setState({refreshLoading:!1});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.refreshLoading,a=this.props,t=(a.component,a.render,Object(v.a)(a,["component","render"]));return e?l.a.createElement(O,null):l.a.createElement(p.a,Object.assign({render:this.handleRender},t))}}]),t}(n.PureComponent);S.defaultProps={};var A=Object(i.b)((function(e){return{}}),{})(Object(p.g)(S)),_=t(11),F=t(1),I=t(41),L=t(42);t(91);var M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement("div",{className:"p-5",style:{width:"900px",height:"288px"}},l.a.createElement(F.e,{className:"h-100 w-100 bg-light",shadow:"light"},l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement("div",{className:"Contact-detail-heading"},l.a.createElement("div",{as:"h5",style:{display:"block",fontSize:16,fontWeight:700}},"Contact Details"),l.a.createElement("div",{className:"h-50"},l.a.createElement(F.d,{appearance:"basic",icon:"edit",size:"tiny"}))),l.a.createElement("div",{className:"Contact-info"},l.a.createElement(F.g,{name:"call"}),l.a.createElement("div",{as:"h5",className:"w-50 ml-4"},"Phone Numbers"),l.a.createElement("div",{className:"h-50"},"1234567890")),l.a.createElement("div",{className:"Contact-info"},l.a.createElement(F.g,{name:"place"}),l.a.createElement("div",{as:"h5",className:"w-50 ml-4"},"Address"),l.a.createElement("div",{className:"h-50"},"1234567890")),l.a.createElement("div",{className:"Contact-info"},l.a.createElement(F.g,{name:"email"}),l.a.createElement("div",{as:"h5",className:"w-50 ml-4"},"Email Address"),l.a.createElement("div",{className:"h-50"},"1234567890")),l.a.createElement("div",{className:"Contact-info"},l.a.createElement(F.g,{name:"healing"}),l.a.createElement("div",{as:"h5",className:"w-50 ml-4"},"Emergency Contact"),l.a.createElement("div",{className:"h-50"},"1234567890"))))),l.a.createElement("div",{style:{padding:16}},"Assignee Name",l.a.createElement(F.d,{appearance:"basic",size:"regular",className:"Assign-button"},"Assign"),l.a.createElement("div",{style:{marginTop:16}},l.a.createElement(F.q,null,"Assigned on")),l.a.createElement("div",null,l.a.createElement(F.r,{appendToBody:!0,position:"bottom",tooltip:"01/01/2020"},l.a.createElement(F.q,null,"01/01/2020"))))))},P=Object(p.g)((function(e){var a=e.goToFarmersList,t=Object(p.f)(),n=l.a.useState({name:"personal_details",label:"Personal details"}),r=Object(_.a)(n,2),i=r[0],c=r[1],m=l.a.useState(!0),s=Object(_.a)(m,2),o=(s[0],s[1],{navigationPosition:"center",title:"Farmer Details",navigation:l.a.createElement(F.j,{menus:[{name:"personal_details",label:"Personal details",icon:"event"},{name:"linked_activities",label:"Linked activities"}],onClick:function(e){return function(e){c(e)}(e)},active:i}),actions:l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"}},l.a.createElement(F.d,{appearance:"alert"},"Deactivate")),breadcrumbs:l.a.createElement(F.c,{list:[{label:"All farmers",link:"/farmers"}],onClick:function(){a(),t.push("/farmers")}}),badge:l.a.createElement(F.b,{appearance:"success"},"Active")});return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-100 p-1"},l.a.createElement(F.k,Object.assign({},o,{separator:!1}))),l.a.createElement("div",null,"personal_details"===i.name&&l.a.createElement(M,null)))})),z=function(){var e=l.a.useState(!0),a=Object(_.a)(e,2),t=a[0],n=a[1],r={onClose:function(){n(!t)},open:t,headerOptions:{backIconCallback:function(e){console.log("back icon clicked")},backIcon:!0,heading:"Add farmer details"},stickFooter:!0,footer:l.a.createElement(l.a.Fragment,null,l.a.createElement(F.d,{appearance:"primary",className:"mr-4"},"Primary"),l.a.createElement(F.d,{appearance:"basic"},"Basic"))},i={title:"Description Title",description:"Adding a subheading clearly indicates the hierarchy of the information.",removePadding:!0},c={description:"Card Sections include supporting text like an article summary or a restaurant description.",removePadding:!0};return l.a.createElement("div",null,l.a.createElement(F.o,r,l.a.createElement(F.q,null,"Modal Body"),l.a.createElement(F.i,i),l.a.createElement(F.i,c),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",l.a.createElement("br",null),"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",l.a.createElement("br",null),"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",l.a.createElement("br",null),"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",l.a.createElement("br",null)))};function W(){var e=Object(I.a)(["\n  \n"]);return W=function(){return e},e}L.a.div(W());var D=Object(p.g)((function(){var e=Object(p.f)(),a=[{name:"name",displayName:"Name",width:"20%",sorting:!1,tooltip:!0,translate:function(e){return{title:"".concat(e.firstName," ").concat(e.lastName),firstName:e.firstName,lastName:e.lastName}},cellType:"AVATAR_WITH_TEXT"},{name:"email",displayName:"Email",width:"20%",resizable:!0,sorting:!1,cellType:"WITH_META_LIST"},{name:"gender",displayName:"Gender",width:"15%",sorting:!1,comparator:function(e,a){return e.gender.localeCompare(a.gender)},cellType:"STATUS_HINT",translate:function(e){return{title:e.gender,statusAppearance:"Female"===e.gender?"alert":"success"}}},{name:"status",displayName:"Status",width:"15%",resizable:!0,align:"left",sorting:!1,cellRenderer:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"Active"))}},{name:"email",displayName:"Timeline",width:"30%",resizable:!0,cellType:"WITH_META_LIST",sorting:!1,cellRenderer:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-75"},l.a.createElement(F.m,{max:100,value:40})))}}],t=Object(n.useState)(!1),r=Object(_.a)(t,2),i=r[0],c=r[1],m=Object(n.useState)(!1),s=Object(_.a)(m,2),o=s[0],d=s[1],u={title:"All Farmers",actions:l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginRight:20}},l.a.createElement(F.d,{appearance:"primary",onClick:function(){d(!0)}},"Add Farmer"))};return l.a.createElement(l.a.Fragment,null,!i&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-100 p-1"},l.a.createElement(F.k,Object.assign({separator:!1},u))),o&&l.a.createElement(z,null),l.a.createElement("div",{className:"flex-grow-1 overflow-hidden p-1",style:{height:0,width:1220,overflowX:"hidden",marginBottom:48}},l.a.createElement("div",{className:"h-100 d-flex flex-column overflow-hidden"},l.a.createElement(F.e,{className:"m-6 bg-light flex-grow-1 overflow-hidden d-flex flex-column",shadow:"light"},l.a.createElement("div",{style:{height:"90%"}},l.a.createElement(F.p,{className:"flex-grow-1 overflow-hidden",loaderSchema:[{name:"name",displayName:"Name",tooltip:!0,cellType:"AVATAR_WITH_TEXT"},{name:"email",displayName:"Email",resizable:!0,sorting:!1,cellType:"WITH_META_LIST"},{name:"gender",displayName:"Gender",resizable:!0,cellType:"STATUS_HINT",filters:[{label:"Male",value:"male"},{label:"Female",value:"female"}]},{name:"status",displayName:"Status",resizable:!0,align:"center"},{name:"progress",displayName:"Timeline",resizable:!0,cellType:"WITH_META_LIST"}],withCheckbox:!1,type:"resource",showHead:!0,showMenu:!1,data:[{firstName:"Brooke",lastName:"Heeran",email:"bheeran0@altervista.org",gender:"Female"},{firstName:"Frazer",lastName:"Cathro",email:"fcathro1@ucla.edu",gender:"Male"},{firstName:"Lemmie",lastName:"Ciric",email:{title:"lciric2@dmoz.org",metaList:["First","Second"]},gender:"Male"},{firstName:"Randy",lastName:"Boatwright",email:"rboatwright3@arstechnica.com",gender:"Male"},{firstName:"Rolando",lastName:"Cyples",email:"rcyples4@biglobe.ne.jp",gender:"Male"},{firstName:"Lem",lastName:"Males",email:"lmales5@admin.ch",gender:"Male"},{firstName:"Sayres",lastName:"Adelberg",email:"sadelberg6@uol.com.br",gender:"Male"},{firstName:"Murray",lastName:"Bravington",email:"mbravington7@drupal.org",gender:"Male"},{firstName:"Jena",lastName:"Swatheridge",email:"jswatheridge8@npr.org",gender:"Female"},{firstName:"Lem",lastName:"Males",email:"lmales5@admin.ch",gender:"Male"},{firstName:"Sayres",lastName:"Adelberg",email:"sadelberg6@uol.com.br",gender:"Male"},{firstName:"Murray",lastName:"Bravington",email:"mbravington7@drupal.org",gender:"Male"},{firstName:"Jena",lastName:"Swatheridge",email:"jswatheridge8@npr.org",gender:"Female"}],schema:a,draggable:!1,multipleSorting:!1,withHeader:!0,headerOptions:{withSearch:!0,dynamicColumn:!1},onRowClick:function(a){!function(a){c(!0),e.push("/farmers/".concat(a.firstName))}(a)},onSearch:function(e,a){return e.filter((function(e){return e.firstName.toLowerCase().match(a.toLowerCase())||e.lastName.toLowerCase().match(a.toLowerCase())}))},onSelect:function(e,a,t,n){return console.log("on-select:- rowIndex: ".concat(e," selected: ").concat(a," selectedList: ").concat(JSON.stringify(t)," selectAll: ").concat(n))},withPagination:!1,pageSize:10})),l.a.createElement("div",null,l.a.createElement(F.l,{type:"jump",className:"py-4 justify-content-center"})))))),i&&l.a.createElement(P,{goToFarmersList:function(){c(!1)}}))}));t(93);var H=function(){return Object(p.f)(),console.log("company 360 page rendering"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-flex mt-8 ml-8"},l.a.createElement("div",{className:"Card-company-dashboard"},l.a.createElement(F.e,{className:"Card-info",shadow:"medium"},l.a.createElement("div",{className:"Card-content"},l.a.createElement("div",{className:"Card-heading"},"Total Customers"),l.a.createElement("div",{className:"Card-body"},"1000")))),l.a.createElement("div",{className:"Card-company-dashboard"},l.a.createElement(F.e,{className:"Card-info",shadow:"medium"},l.a.createElement("div",{className:"Card-content"},l.a.createElement("div",{className:"Card-heading"},"Total Customers"),l.a.createElement("div",{className:"Card-body"},"1000")))),l.a.createElement("div",{className:"Card-company-dashboard"},l.a.createElement(F.e,{className:"Card-info",shadow:"medium"},l.a.createElement("div",{className:"Card-content"},l.a.createElement("div",{className:"Card-heading"},"Total Customers"),l.a.createElement("div",{className:"Card-body"},"1000")))),l.a.createElement("div",{className:"Card-company-dashboard"},l.a.createElement(F.e,{className:"Card-info",shadow:"medium"},l.a.createElement("div",{className:"Card-content"},l.a.createElement("div",{className:"Card-heading"},"Total Customers"),l.a.createElement("div",{className:"Card-body"},"1000"))))))};t(94);function R(){return console.log("wip -=-=-=-=--="),l.a.createElement(F.n,{className:"work-in-progress-row"},l.a.createElement(F.f,{size:"4"},l.a.createElement(F.h,{appearance:"alert",description:"We are working on this awesome feature. Coming soon!!"})))}var B=function(e){var a={title:"CFA",actions:l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"}},l.a.createElement(F.a,{firstName:"CFA",lastName:"F",size:"regular",tooltipPosition:"bottom",withTooltip:!0}))},t=l.a.useState({name:"dashboard",label:"Company 360"}),n=Object(_.a)(t,2),r=n[0],i=n[1],c=l.a.useState(!0),m=Object(_.a)(c,2),s=m[0],o=m[1],d=Object(p.f)();return console.log("active.name",r.name),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-10 h-25 p-2 bg-light",style:{background:"#f4f4f4",borderBottom:"1px ridge #d5d5d5"}},l.a.createElement(F.k,Object.assign({},a,{separator:!1}))),l.a.createElement(F.n,{className:"vh-100 bg-secondary-lightest"},l.a.createElement("div",{className:"d-flex bg-secondary-lighter w-100"},l.a.createElement(F.j,{className:"bg-light",type:"vertical",menus:[{name:"company_360",label:"Company 360",icon:"assignment_ind",link:"/"},{name:"farmers",label:"All Farmers",icon:"forum",link:"/farmers"},{name:"analytics",label:"Analytics",icon:"favorite",link:"/timeline",subMenu:[{name:"timeline",label:"Timeline",link:"/timeline"},{name:"stats",label:"Stats",link:"/stats"},{name:"plans",label:"Plans",link:"/plans"}]},{name:"inventory",label:"Inventory",icon:"local_mall",link:"/inventory"},{name:"form",label:"Contract Form",icon:"border_color",link:"/form"},{name:"claims",label:"Claims",icon:"receipt",link:"/claims"},{name:"documents",label:"Documents",icon:"assignment",link:"/documents"},{name:"profile",label:"Profile",icon:"account_circle",link:"/profile"}],expanded:s,footer:!0,onToggle:function(e){return o(e)},active:r,onClick:function(e){i(e),d.push(e.link)},key:r.name}),"farmers"===r.name&&l.a.createElement("div",{class:"h-100 w-100 d-flex flex-column"},l.a.createElement(D,null)),("company_360"===r.name||"dashboard"===r.name)&&l.a.createElement("div",{class:"h-100 w-100 d-flex flex-column"},l.a.createElement(H,null)),("inventory"===r.name||"timeline"===r.name||"stats"===r.name||"plans"===r.name||"manula_entry"===r.name||"claims"===r.name||"documents"===r.name||"profile"===r.name)&&l.a.createElement("div",{class:"h-100 w-100 d-flex flex-column"},l.a.createElement(R,null)))))},q=(E()(),function(){return l.a.createElement(u.a,null,l.a.createElement(p.c,null,l.a.createElement(A,{layout:B,exact:!0,path:"/farmers",pageTitle:"Farmers",render:function(e){return l.a.createElement(D,e)}}),l.a.createElement(A,{layout:B,exact:!0,path:"/farmers/:id",pageTitle:"Farmer",render:function(e){return l.a.createElement(P,e)}}),l.a.createElement(A,{layout:B,exact:!0,path:"/",pageTitle:"Dashboard",render:function(e){return l.a.createElement(H,e)}}),l.a.createElement(A,{layout:B,exact:!0,path:"/timeline",pageTitle:"WIP",render:function(e){return l.a.createElement(R,e)}}),l.a.createElement(A,{layout:B,exact:!0,path:"/stats",pageTitle:"WIP",render:function(e){return l.a.createElement(R,e)}}),l.a.createElement(A,{layout:B,exact:!0,path:"/plans",pageTitle:"WIP",render:function(e){return l.a.createElement(R,e)}}),l.a.createElement(A,{layout:B,exact:!0,path:"/inventory",pageTitle:"WIP",render:function(e){return l.a.createElement(R,e)}}),l.a.createElement(A,{layout:B,exact:!0,path:"/form",pageTitle:"WIP",render:function(e){return l.a.createElement(R,e)}}),l.a.createElement(A,{layout:B,exact:!0,path:"/claims",pageTitle:"WIP",render:function(e){return l.a.createElement(R,e)}}),l.a.createElement(A,{layout:B,exact:!0,path:"/profile",pageTitle:"WIP",render:function(e){return l.a.createElement(R,e)}}),l.a.createElement(A,{layout:B,exact:!0,path:"/documents",pageTitle:"WIP",render:function(e){return l.a.createElement(R,e)}})))});var J=function(){return l.a.createElement(i.a,{store:d},l.a.createElement(q,null))},U=t(45);Object(r.render)(l.a.createElement(U.AppContainer,null,l.a.createElement(J,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.e9267ebd.chunk.js.map