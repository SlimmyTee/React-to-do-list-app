(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/Create Task.bdcc0fe6.mp4"},39:function(e,t,a){e.exports=a.p+"static/media/Newlist.0c664a84.mp4"},40:function(e,t,a){e.exports=a.p+"static/media/Editing_Reminder.30c75d32.mp4"},41:function(e,t,a){e.exports=a.p+"static/media/RenameList.f9b62236.mp4"},42:function(e,t,a){e.exports=a.p+"static/media/new.dd029f19.PNG"},43:function(e,t,a){e.exports=a.p+"static/media/near.5714c663.PNG"},44:function(e,t,a){e.exports=a.p+"static/media/passed.eed007e1.PNG"},45:function(e,t,a){e.exports=a.p+"static/media/lock.11b02c8a.png"},46:function(e,t,a){e.exports=a.p+"static/media/opt.8d0d4dc3.png"},48:function(e,t,a){e.exports=a(81)},53:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(34),o=a.n(c),r=(a(53),a(27)),s=a.n(r),i=a(35),m=a(8),u=a(2),d=a(19),p=a.n(d),E=a(3),f=["Cook Dinner","Wash clothes","See a Friend","Wash the Car","Read a Book","Hit the Gym","Pay Electricity Bill","Drink Plenty of water"];function h(e){var t=e.props.sendProps,a=Object(n.useState)(!1),c=Object(u.a)(a,2),o=c[0],r=c[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),m=i[0],d=i[1],p=Object(n.useState)(""),h=Object(u.a)(p,2),v=h[0],b=h[1];return Object(n.useEffect)((function(){d(o?"What Do you want Todo?...":"eg. "+f[Math.floor(8*Math.random())])}),[o]),l.a.createElement("form",{className:"inputBlock",onSubmit:function(e){e.preventDefault(),t(v)}},l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input",name:"inputBlock",onChange:function(e){var t=e.target.value;b(t)},onFocus:function(){r(!0)},onBlur:function(e){e.target.value||r(!1)},autoComplete:"off",required:"required"}),l.a.createElement("svg",{className:"border",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transform:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"})),l.a.createElement("span",null,m)),l.a.createElement("button",{className:"plus",type:"submit"},l.a.createElement(E.a,{fill:"#222",className:"icon",size:"1.2rem"})))}var v=a(14),b=a(36),y=a(6),g=a(4),N=a.n(g),k=a(37),w=a.n(k),O=a(11),C=a.n(O),j=a(7),S=a.n(j),L=a(15);function x(){return l.a.createElement("svg",{className:"border",viewBox:"0 0 275.05 40",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M139,39H268.22c4,0,7.3-2.78,7.3-6.21V8.21c0-3.43-3.27-6.21-7.3-6.21H139",transdiv:"translate(-1.3 -0.77)"}),l.a.createElement("path",{className:"cls-2 path",d:"M164,2H11.24C6.43,2,2.52,4.78,2.52,8.21V32.79c0,3.43,3.91,6.21,8.72,6.21H160.32v0H164",transform:"translate(-1.3 -0.77)"}))}var T=a(5),I=a.n(T);var A=function(e){var t=e.props,a=t.eachTodo,c=a.id,o=a.completed,r=a.Todo,s=a.DateOptions,i=(s=void 0===s?{}:s).futureDate,m=void 0===i?null:i,d=s.reminder,p=void 0!==d&&d,f=t.updateTodo,h=t.removeTodo,g=t.AddUpdate,k=t.removeReminder,C=Object(n.useState)({name:"",date:"",reminder:!1}),j=Object(u.a)(C,2),T=j[0],A=j[1],D=Object(n.useState)((function(){return Date.now()>=Date.parse(m)?"passed":Date.now()>=Date.parse(m)-18e5?"close":p?"normal":""})),B=Object(u.a)(D,2),R=B[0],M=B[1],Y=Object(n.useState)("edit"),P=Object(u.a)(Y,2),W=P[0],z=P[1],F=Object(n.useState)(!1),U=Object(u.a)(F,2),H=U[0],_=U[1],V=Object(b.useInterval)((function(){var e=S.a.get("Rem_".concat(c));(e=null!==e&&JSON.parse(e))||(p&&!o&&Date.now()>=Date.parse(m)&&!e?(w.a.create("Reminder: ".concat(r),{requireInteraction:!0,vibrate:[500,200,500]}),M("passed"),q(),S.a.set("Rem_".concat(c),!0)):p&&!1===o&&Date.now()>=Date.parse(m)-18e5&&!e?M("close"):p&&!1===o&&M("normal"))}),1e3,{autoStart:!1}),J=V.start,q=V.stop;Object(n.useEffect)((function(){z(p&&!o?"reminder":o?"completed":"edit")}),[p,o]),Object(n.useEffect)((function(){H&&setTimeout((function(){return N()(".TodoEdit .Input[type='text']").val(r).select()}))}),[H,r]);var G=Object(L.b)(W,null,{from:{transform:"scale(0)"},enter:{transform:"scale(1)"},leave:{transform:"scale(0)"}});return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"label"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:o,onChange:function(){f(c),o||(k(c),q())}}),l.a.createElement("div",{className:"Todo"},l.a.createElement("div",{className:"checkbox-container"},l.a.createElement("svg",{viewBox:"0 0 100 100",className:"checkbox"},l.a.createElement("path",{className:"st0",d:"M85,92H15c-3.9,0-7-3.1-7-7V15c0-3.9,3.1-7,7-7h70c3.9,0,7,3.1,7,7v70C92,88.9,88.9,92,85,92z"}),l.a.createElement("polyline",{className:"check",points:"22.5,47.5 42.5,67.5 78.5,31.5 "}))),l.a.createElement("span",{style:o?{opacity:.4,textDecoration:"line-through"}:null},r))),l.a.createElement("div",{className:"op-cont"},G.map((function(e){var t=e.item,a=e.props,n=e.key;switch(t){case"completed":return l.a.createElement(L.a.div,{style:a,key:n,className:"op"},l.a.createElement(E.e,{className:"bin icon",size:"1.5rem",onClick:function(){h(c)}}));case"reminder":return l.a.createElement(L.a.div,{style:a,key:n,className:"op"},l.a.createElement(E.j,{className:"icon settings",id:R,size:"1.5rem",onClick:function(){_(!0),N()(".TodoEdit .Input[type='text']").val(r).select()}}));default:return l.a.createElement(L.a.div,{style:a,key:n,className:"op"},l.a.createElement(y.b,{size:"1.5rem",onClick:function(){_(!0)}}))}})))),l.a.createElement(I.a,{component:!1,appear:{translateY:50,opacity:0},enter:{opacity:1,translateY:0},leave:{translateY:-50,opacity:0}},H&&l.a.createElement("div",{className:"modalCont TodoEdit right",key:"modal"},l.a.createElement("div",{className:"modal"},l.a.createElement("h3",null,"More Options"),l.a.createElement("h4",null,"Edit task"),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input",autoComplete:"off",onChange:function(e){var t=e.target.value;A((function(e){return Object(v.a)(Object(v.a)({},e),{},{name:t})}))}}),l.a.createElement(x,null),l.a.createElement("span",null,"Edit Task")),l.a.createElement("h4",null,"Set Reminder for"),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{className:"Input",type:"datetime-local",defaultValue:T.date,onChange:function(e){var t=e.target.value;A((function(e){return Object(v.a)(Object(v.a)({},e),{},{date:t})}))}}),l.a.createElement(x,null)),p?l.a.createElement("button",{className:"modalBtn del",style:{float:"none",margin:"0 0 20px 0",display:"grid"},onClick:function(){k(c),q(),N()(".TodoEdit").fadeOut()}},l.a.createElement(E.c,null),l.a.createElement("span",null," Remove Current Reminder?")):null,l.a.createElement("button",{className:"modalBtn save",onClick:function(){Date.parse(T.date)<=Date.now()?O.store.addNotification({message:"Setting Date in the Past will not trigger Reminder!",type:"warning",container:"top-center",insert:"top",animationIn:["animated","bounceIn"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,onScreen:!0,showIcon:!0,touch:!0,click:!0}}):(g(c,T),J(),S.a.set("Rem_".concat(c),!1),_(!1))}},l.a.createElement(E.b,null),l.a.createElement("span",null,"Save")),l.a.createElement("button",{className:"modalBtn cancel",type:"button",onClick:function(){_(!1)}},l.a.createElement(E.c,null),l.a.createElement("span",null,"Cancel"))))),l.a.createElement(I.a,{component:!1,enter:{opacity:1},leave:{opacity:0}},H&&l.a.createElement("div",{key:"underlay",className:"ModalUnderLay",onClick:function(){_(!1)}})))};function D(e){var t=e.props,a=t.removeTodo,n=t.updateTodo,c=t.TodoListArray,o=t.filtered,r=t.AddUpdate,s=t.removeReminder,i=o.map((function(e,t){return l.a.createElement(A,{key:t,props:{eachTodo:e,updateTodo:n,removeTodo:a,AddUpdate:r,removeReminder:s}})}));return l.a.createElement("div",{className:"listContainer"},0===c.length?"":i)}function B(e){var t=e.props,a=t.id,n=t.progress,c=t.TodoListArray,o=t.clearDone,r=t.done,s=t.statusHandler,i=t.status,m=t.whichMode;return l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"percent"},l.a.createElement("svg",null,l.a.createElement("linearGradient",{id:"grad_".concat(a),x1:"0",y1:"0",x2:"100%",y2:"100%"},l.a.createElement("stop",{offset:"0%",stopColor:"#ff0612"}),l.a.createElement("stop",{offset:"100%",stopColor:"#6544ff"})),l.a.createElement("circle",{cx:"50%",cy:"50%",r:"40",className:"dark circle"}),l.a.createElement("circle",{cx:"50%",cy:"50%",r:"40",className:"grad circle",style:{strokeDashoffset:250.92137145996094-250.92137145996094*n/100,strokeWidth:0===n?"0px":"10px",stroke:'url("#grad_'.concat(a,'")')}})),l.a.createElement("div",{className:"number ".concat(m?"darkMode":"LightMode")},0!==n||0!==c.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,n,l.a.createElement("span",{className:"perc"},"%")),l.a.createElement("span",{className:"comp"},"completed")):l.a.createElement("h2",{className:"empty"},"No Task")))),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:o,disabled:0===r,className:0===r?"disable":"clear"},"\u2715 Clear Done"),l.a.createElement("select",{name:"filter",id:"filter",onChange:s,value:i},l.a.createElement("option",{value:"All"},"All"),l.a.createElement("option",{value:"Completed"},"Completed"),l.a.createElement("option",{value:"Uncompleted"},"Uncompleted"))))}function R(e){var t=e.props.app,a=Object(n.useState)(t.id),c=Object(u.a)(a,1)[0],o=Object(n.useState)({}),r=Object(u.a)(o,2),s=r[0],i=r[1],d=Object(n.useState)((function(){return null===S.a.get(c)?[]:S.a.get(c)})),E=Object(u.a)(d,2),f=E[0],v=E[1],b=Object(n.useState)(0),y=Object(u.a)(b,2),g=y[0],k=y[1],w=Object(n.useState)(""),O=Object(u.a)(w,2),C=O[0],j=O[1],L=Object(n.useState)([]),x=Object(u.a)(L,2),T=x[0],I=x[1],A=Object(n.useState)("All"),R=Object(u.a)(A,2),M=R[0],Y=R[1];function P(e){e?(N()(".checkbox path").css("transition",".4s"),N()(".check").css("transition",".4s")):(N()(".checkbox path").css("transition","none"),N()(".check").css("transition","none"))}return Object(n.useEffect)((function(){S.a.set(c,f)}),[f,c]),Object(n.useEffect)((function(){var e=f.filter((function(e){return!0===e.completed})),t=Math.floor(e.length/f.length*100);isNaN(t)&&(t=0),j(t),k(e.length)}),[f]),Object(n.useEffect)((function(){switch(M){case"Completed":I(f.filter((function(e){return!0===e.completed})));break;case"Uncompleted":I(f.filter((function(e){return!1===e.completed})));break;default:I(f)}}),[f,M]),Object(n.useEffect)((function(){P(!1)}),[M]),l.a.createElement("div",{className:"container","data-id":c},l.a.createElement("h1",{className:"ListName"},t.name),l.a.createElement(B,{props:{id:c,progress:C,TodoListArray:f,clearDone:function(){P(!1),v(f.filter((function(e){return!1===e.completed})))},done:g,status:M,statusHandler:function(e){var t=e.target.value;Y(t)}}}),l.a.createElement(h,{props:{sendProps:function(e){var t=N()(".Input");if(""===e.trim()||void 0===e.trim())return t.val(null).focus(),alert("Please write a Task");s.Todo=e,s.id=p.a.v4(),s.completed=!1,s.DateOptions={futureDate:null,reminder:!1},v((function(e){return[].concat(Object(m.a)(e),[s])})),t.val(null).focus(),i({}),Y("All")}}}),l.a.createElement(D,{props:{removeTodo:function(e){P(!1),v(f.filter((function(t){return t.id!==e}))),S.a.remove("Rem_".concat(e))},updateTodo:function(e){P(!0),v(f.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},TodoListArray:f,filtered:T,AddUpdate:function(e,t){var a=t.name,n=t.date;a&&v(f.map((function(t){return t.id===e&&(t.Todo=a),t}))),n&&function(e,t){v(f.map((function(a){return a.id===e&&(a.DateOptions={futureDate:t,reminder:!0}),a})))}(e,n)},removeReminder:function(e){v(f.map((function(t){return t.id===e&&(t.DateOptions.reminder=!1,t.DateOptions.futureDate=null),t}))),S.a.remove("Rem_".concat(e))}}}))}var M=a(12),Y=a(0),P=a(38),W=a.n(P),z=a(39),F=a.n(z),U=a(40),H=a.n(U),_=a(41),V=a.n(_),J=a(42),q=a.n(J),G=a(43),K=a.n(G),X=a(44),Q=a.n(X),$=a(45),Z=a.n($),ee=a(46),te=a.n(ee);var ae=function(e){var t=e.props,a=t.app,c=t.addList,o=t.setCurrentList,r=t.updateList,s=t.deleteList,i=t.currentList,m=t.clearList,d=t.whichMode,p=t.setwhichMode,f=t.sendForm,h=t.formStatus,v=t.setFormStatus,b=Object(n.useState)(!1),g=Object(u.a)(b,2),k=g[0],w=g[1],C=Object(n.useState)([]),j=Object(u.a)(C,2),S=j[0],L=j[1],T=Object(n.useState)(""),A=Object(u.a)(T,2),D=A[0],B=A[1],R=Object(n.useState)(!1),P=Object(u.a)(R,2),z=P[0],U=P[1],_=Object(n.useState)(""),J=Object(u.a)(_,2),G=J[0],X=J[1],$=Object(n.useState)(!1),ee=Object(u.a)($,2),ae=ee[0],ne=ee[1],le=Object(n.useState)(!1),ce=Object(u.a)(le,2),oe=ce[0],re=ce[1],se=Object(n.useState)(!1),ie=Object(u.a)(se,2),me=ie[0],ue=ie[1],de=Object(n.useState)(!1),pe=Object(u.a)(de,2),Ee=pe[0],fe=pe[1],he=Object(n.useState)(!1),ve=Object(u.a)(he,2),be=ve[0],ye=ve[1],ge=Object(n.useState)(!1),Ne=Object(u.a)(ge,2),ke=Ne[0],we=Ne[1],Oe=Object(n.useState)(!1),Ce=Object(u.a)(Oe,2),je=Ce[0],Se=Ce[1],Le=Object(n.useState)(!1),xe=Object(u.a)(Le,2),Te=xe[0],Ie=xe[1],Ae=Object(n.useState)(!1),De=Object(u.a)(Ae,2),Be=De[0],Re=De[1],Me=Object(n.useState)(!1),Ye=Object(u.a)(Me,2),Pe=Ye[0],We=Ye[1];function ze(e){var t=e.target.value.trim();/@/.test(t)&&""!==t?Re(!1):Re(!0)}function Fe(e){var t=e.target.value;return console.log(t),""===t.trim()}Object(n.useEffect)((function(){var e=a.map((function(e,t){return l.a.createElement(Y.b.Provider,{value:{size:"1.5rem",className:"ListSetIcon ".concat(d?"":"light"),style:{fill:d?"white":"#333"}},key:t},l.a.createElement("li",{className:"listSet ".concat(d?"dark":"light"," ").concat(a[i].id===e.id?"active":""),onClick:function(e){e.persist(),"svg"!==e.target.tagName&&"path"!==e.target.tagName&&(o(t),w(!1))}},l.a.createElement(E.h,{className:"icon"}),l.a.createElement("h3",null,e.name),l.a.createElement(y.b,{style:{stroke:d?"white":"#333",fill:"none"},className:"icon edit",onClick:function(){B(e.id),re(!0),setTimeout((function(){return N()(".renamebox").val(e.name).select()}))}}),l.a.createElement(E.e,{className:"icon bin",onClick:function(){ue(!0),B(e.id)}})))}));L(e)}),[a,o,d,i]);var Ue={className:"",icon:"",text:""};switch(h){case"sending":Ue.className=Ue.text="Sending",Ue.icon=l.a.createElement(y.e,{className:"loading"});break;case"sent":Ue.className=Ue.text="Sent",Ue.icon=l.a.createElement(E.b,null);break;case"error":Ue.className="Error",Ue.text="An Error Occured!",Ue.icon=l.a.createElement(E.g,null);break;default:Ue.className=Ue.text="Send",Ue.icon=l.a.createElement(E.i,null)}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"ham"},l.a.createElement(E.d,{size:"1.5rem",className:"icon",onClick:function(){w(!0)}})),l.a.createElement(I.a,{component:!1,enter:{opacity:1},leave:{opacity:0}},(k||ae)&&l.a.createElement("div",{key:"underlay",className:"sideBarUnderLay",onClick:function(){w(!1)}})),l.a.createElement(I.a,{component:!1,enter:{translateX:0,opacity:1},leave:{translateX:-500,opacity:0}},k&&l.a.createElement("div",{key:"sideBar",className:"sideBar"},l.a.createElement("h2",null,"Your List Set",l.a.createElement(E.c,{size:"1.5rem",className:"icon",onClick:function(){w(!1)}})),l.a.createElement("ul",null,S,l.a.createElement("hr",null),l.a.createElement(Y.b.Provider,{value:{size:"1.5rem",style:{fill:d?"white":"#333"}}},l.a.createElement("li",{className:"subList",onClick:function(){ne(!0)}},l.a.createElement(E.a,null),l.a.createElement("h3",null,"Add New List")),l.a.createElement("li",{className:"subList",onClick:function(){fe(!0)}},l.a.createElement(E.f,null),l.a.createElement("h3",null,"Clear All Lists")),l.a.createElement("li",{className:"subList",onClick:function(){w(!1),p(!d)}},d?l.a.createElement(y.h,{fill:"white"}):l.a.createElement(y.f,{stroke:"transparent"}),l.a.createElement("h3",null,"Turn on ",d?"Light":"Dark"," Mode")),l.a.createElement("hr",null),l.a.createElement("li",{className:"subList",onClick:function(){Se(!0)}},l.a.createElement(y.d,{style:{fill:d?"none":"#333"}}),l.a.createElement("h3",null,"How to use")),l.a.createElement("li",{className:"subList",onClick:function(){ye(!0)}},l.a.createElement(y.g,{style:{strokeWidth:0}}),l.a.createElement("h3",null,"Contact Me")),l.a.createElement("li",{className:"subList",onClick:function(){we(!0)}},l.a.createElement(y.c,{style:{strokeWidth:0}}),l.a.createElement("h3",null,"Donate"))),l.a.createElement("hr",null)))),l.a.createElement(I.a,{component:!1,appear:{translateY:50,opacity:0},enter:{opacity:1,translateY:0},leave:{translateY:-50,opacity:0}},ae&&l.a.createElement("div",{className:"modalCont newModal right",key:"newListModal"},l.a.createElement("form",{className:"modal",onSubmit:function(e){e.preventDefault(),ne(!1),c(G),w(!1),X("")}},l.a.createElement("h3",null,"list Name"),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input",name:"inputBlock",value:G,onChange:function(e){var t=e.target.value;X(t)},autoComplete:"off",required:!0}),l.a.createElement(x,null),l.a.createElement("span",null,"List Name...")),l.a.createElement("button",{className:"modalBtn save",type:"submit"},l.a.createElement(E.b,null),l.a.createElement("span",null,"Save")),l.a.createElement("button",{className:"modalBtn cancel",type:"button",onClick:function(){ne(!1),X("")}},l.a.createElement(E.c,null),l.a.createElement("span",null,"Cancel"))))),l.a.createElement(I.a,{component:!1,appear:{translateY:50,opacity:0},enter:{opacity:1,translateY:0},leave:{translateY:-50,opacity:0}},oe&&l.a.createElement("div",{className:"modalCont rename right",key:"renameList"},l.a.createElement("form",{className:"modal",onSubmit:function(e){e.preventDefault(),re(!1),r(D,G),B("")}},l.a.createElement("h3",null,"Rename Todo"),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"text",className:"Input renamebox",name:"inputBlock",onChange:function(e){var t=e.target.value;X(t)},autoComplete:"off",required:!0}),l.a.createElement(x,null)),l.a.createElement("button",{className:"modalBtn save",type:"submit"},l.a.createElement(E.b,null),l.a.createElement("span",null,"Save")),l.a.createElement("button",{className:"modalBtn cancel",type:"button",onClick:function(){re(!1)}},l.a.createElement(E.c,null),l.a.createElement("span",null,"Cancel"))))),l.a.createElement(I.a,{component:!1,appear:{translateY:50,opacity:0},enter:{opacity:1,translateY:0},leave:{translateY:-50,opacity:0}},me&&l.a.createElement("div",{className:"modalCont delete center",key:"delete"},l.a.createElement("div",{className:"modal"},l.a.createElement(E.e,{fontSize:"3rem",className:"bin"}),l.a.createElement("h3",null,"Are you sure You want to Delete this List?"),l.a.createElement("p",null,"Entire List will be removed permanently"),l.a.createElement("button",{className:"modalBtn cancel",type:"button",onClick:function(){ue(!1)}},l.a.createElement(E.c,null),l.a.createElement("span",null,"Cancel")),l.a.createElement("button",{className:"modalBtn del",type:"submit",onClick:function(){ue(!1),s(D),w(!1)}},l.a.createElement(E.b,null),l.a.createElement("span",null,"OK"))))),l.a.createElement(I.a,{component:!1,appear:{translateY:50,opacity:0},enter:{opacity:1,translateY:0},leave:{translateY:-50,opacity:0}},Ee&&l.a.createElement("div",{className:"modalCont clearListModal center",key:"clear"},l.a.createElement("div",{className:"modal"},l.a.createElement(E.f,{fontSize:"3rem",className:"bin"}),l.a.createElement("h3",null,"Are you sure You want to Clear All Your Lists?"),l.a.createElement("p",null,"All Lists will be removed permanently and Cannot be recovered!"),l.a.createElement("button",{className:"modalBtn cancel",onClick:function(){fe(!1)}},l.a.createElement(E.c,null),l.a.createElement("span",null,"Cancel")),l.a.createElement("button",{className:"modalBtn del",onClick:function(){fe(!1),m(),w(!1)}},l.a.createElement(E.f,null),l.a.createElement("span",null," Clear all Lists"))))),l.a.createElement(I.a,{component:!1,appear:{translateY:50,opacity:0},enter:{opacity:1,translateY:0},leave:{translateY:-50,opacity:0}},be&&l.a.createElement("div",{key:"contact",className:"modalCont contactModal",style:{userSelect:"text"}},l.a.createElement("div",{className:"modal"},l.a.createElement(E.c,{className:"icon closeModal",size:"1.5rem",onClick:function(){ye(!1),v("send"),Ie(!1),Re(!1),We(!1)}}),l.a.createElement("form",{className:"contact",onSubmit:function(e){e.preventDefault(),f(e),v("sending")}},l.a.createElement("h3",null,"Contact Me"),l.a.createElement("div",{className:"input-container "},l.a.createElement("input",{type:"text",className:"Input ".concat(Te?"err":""),name:"from_name",autoComplete:"off",required:!0,onKeyUp:function(e){Ie(Fe(e))},onBlur:function(e){Ie(Fe(e))}}),l.a.createElement(x,null),l.a.createElement("span",null,"Full Name")),l.a.createElement("div",{className:"input-container"},l.a.createElement("input",{type:"email",className:"Input email ".concat(Be?"err":""),name:"from_email",autoComplete:"off",required:!0,onKeyUp:ze,onBlur:ze}),l.a.createElement(x,null),l.a.createElement("span",null,"email")),l.a.createElement("div",{className:"input-container message"},l.a.createElement("textarea",{className:"Input ".concat(Pe?"err":""),name:"message",required:!0,onKeyUp:function(e){We(Fe(e))},onBlur:function(e){We(Fe(e))}}),l.a.createElement("svg",{className:"border textarea",viewBox:"0 0 309 277",preserveAspectRatio:"none"},l.a.createElement("path",{className:"cls-1 path",d:"M154.5,1.5h138a15,15,0,0,1,15,15v244a15,15,0,0,1-15,15h-138"}),l.a.createElement("path",{className:"cls-2 path",d:"M154.5,275.5H16.5a15,15,0,0,1-15-15V16.5a15,15,0,0,1,15-15h138"})),l.a.createElement("span",null,"Message")),l.a.createElement("button",{className:"modalBtn sendBtn ".concat(Ue.className),type:"submit"},Ue.icon,l.a.createElement("span",null,Ue.text))),l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:"https://www.facebook.com/crimson.oluwatowo/",className:"facebook"},l.a.createElement(M.a,null)),l.a.createElement("a",{href:"https://www.instagram.com/crimson_corp/",className:"instagram"},l.a.createElement(M.d,null)),l.a.createElement("a",{href:"m.me/oluwatowo_rosanwo",className:"messenger"},l.a.createElement(M.b,null)),l.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=+2348024537884&text=Hi20%Crimson%20%",className:"whatsapp"},l.a.createElement(M.e,null)),l.a.createElement("a",{href:"https://github.com/CRIMSON-CORP",className:"github"},l.a.createElement(M.c,null)))))),l.a.createElement(I.a,{component:!1,appear:{translateY:50,opacity:0},enter:{opacity:1,translateY:0},leave:{translateY:-50,opacity:0}},ke&&l.a.createElement("div",{key:"donate",className:"modalCont donateModal",style:{userSelect:"text"}},l.a.createElement("div",{className:"modal"},l.a.createElement(E.c,{className:"icon closeModal",size:"1.5rem",onClick:function(){we(!1),U(!1)}}),l.a.createElement("h3",null,"Donate"),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"- About Me"),l.a.createElement("p",null,"My Name is Oluwatowo Rosanwo Mayowa, I'm a 200L Student of The University Of Ibadan studying Food Technology, I started Web Development in 2018 and Now I'm a Self Taught Intermediate Full Stack Web Developer and Aspiring UI/UX Deisgner, Im also a Logo/Video Editor."),l.a.createElement("p",null,"I've had intense Self training on basics of Web Development which include HTML,CSS and Vanilla JAVASCRIPT, I Studied jQuery and React (This PWA was build With React), as well as back-end Frameworks Like NodeJS Express, and Database Query Language MySQL and Ive Built Projects With all These Technologies."),l.a.createElement("p",null,"I'm really good at solving problems and really bad at giving up on a project, I aspire to be hired as an Intern and Then gradute to Being a Frelance Developer.")),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"- Donate"),l.a.createElement("p",null,"Please if You really Like my Work and have a some money to spare, Kindly make a Donation To me as This will enhance my Progress and Productivity and also make me work harder and Develop more Apps that you will Definately find usefull")),l.a.createElement("h4",null,"Account Details:"),l.a.createElement("pre",null,"Bank: First Bank ",l.a.createElement("br",null),"Account Number: ",l.a.createElement("span",{id:"acc"},"3123872415")," ",l.a.createElement("br",null),"Account Name: Oluwatowo Rosanwo ",l.a.createElement("br",null)),l.a.createElement("button",{className:"copy modalBtn sendBtn ".concat(z?"Sent":"Send"),onClick:function(){var e=N()("<input>");N()(".donateModal .modal").append(e),e.val(N()("#acc").text()).select(),document.execCommand("copy"),e.remove(),U(!0),O.store.addNotification({title:"Copied!",message:"Account Number Copied, Thank You so Much!",type:"success",container:"top-center",animationIn:["animated","jackInTheBox"],animationOut:["animated","bounceOut"],dismiss:{duration:3e3,onScreen:!0,showIcon:!0,touch:!0,click:!0}})}},z?l.a.createElement(l.a.Fragment,null,l.a.createElement(E.b,null),l.a.createElement("span",null,"Copied")):l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null),l.a.createElement("span",null,"Copy Account Number")))))),l.a.createElement(I.a,{component:!1,appear:{translateY:50,opacity:0},enter:{opacity:1,translateY:0},leave:{translateY:-50,opacity:0}},je&&l.a.createElement("div",{key:"help",className:"modalCont helpModal"},l.a.createElement("div",{className:"modal"},l.a.createElement(E.c,{className:"icon closeModal",size:"1.5rem",onClick:function(){Se(!1)}}),l.a.createElement("h3",null,l.a.createElement("u",null,"How To Use")),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"What the App is used for"),l.a.createElement("p",null,"Todo App is a Web Application Designed By Crimson Corp, it is designed specifically for creating Todo Lists."),l.a.createElement("p",null,"Now, one of the most important reasons for keeping a Todo list is the organization, Organizing your tasks with a list can make everything much more managable and make you feel grounded. Seeing a clear outline of your completed and uncompleted tasks will help you feel organized and mentally focused")),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"Note!"),l.a.createElement("p",null,"Video Illustrations are made with Desktop interface so you can see what exactly is beign clicked"),l.a.createElement("p",null,"if Video Illustration dosen't play, Kindly refresh the page ")),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"Creating a List"),l.a.createElement("p",null,'To Create a List, Click the three line icon at Top left corner and click "Add New List", then Write the name of the list and Click Save'),l.a.createElement("video",{autoPlay:!0,loop:!0},l.a.createElement("source",{src:F.a,type:"video/mp4"}))),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"Creating a Task"),l.a.createElement("p",null,"To Create a task, wimply write it in the Input Field and press the Plus Button to add it to the List"),l.a.createElement("video",{autoPlay:!0,loop:!0},l.a.createElement("source",{src:W.a,type:"video/mp4"}))),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"Editing a Task and Setting Reminder"),l.a.createElement("p",null,"To Edit a Task Simply Click the pen on paper icon at the right of every task, you can decide to change the task name if you wish, to set Reminder Simply add the Date you want to set reminder for and Click Save"),l.a.createElement("video",{autoPlay:!0,loop:!0},l.a.createElement("source",{src:H.a,type:"video/mp4"}))),l.a.createElement("div",{className:"info-block"},l.a.createElement("h4",null,"Rename a List"),l.a.createElement("p",null,"To Rename a List Simply Click the pen on paper icon at the right of every List, write the New name of the List and Click Save"),l.a.createElement("video",{autoPlay:!0,loop:!0},l.a.createElement("source",{src:V.a,type:"video/mp4"}))),l.a.createElement("div",{className:"info-block"},l.a.createElement("h3",null,"Icon wheel Description"),l.a.createElement("div",{className:"icon_descript"},l.a.createElement("img",{src:q.a,alt:"Blue wheel"}),l.a.createElement("p",null,"Blue wheel means that your task Reminder is Running")),l.a.createElement("div",{className:"icon_descript"},l.a.createElement("img",{src:K.a,alt:"Yellow wheel"}),l.a.createElement("p",null,"Yellow wheel means that your task Reminder has Thirty minutes Left to Due Time!")),l.a.createElement("div",{className:"icon_descript"},l.a.createElement("img",{src:Q.a,alt:"Red wheel"}),l.a.createElement("p",null,"Red wheel means that your task Reminder has passed Due Time!"))),l.a.createElement("h3",null,l.a.createElement("u",null,"Performance Improvement Tips")),l.a.createElement("div",{className:"info-block"},l.a.createElement("p",null,"For better user Experience, its best that the app continues to fuction even when not beign used so as to give Reminders at Appropriate times, to achieved this, Ive highlighted two Easy ways to achieve this feat, although there are more complex ways that Garuatee"),l.a.createElement("h4",null,"Locking the App from Closing"),l.a.createElement("p",null,"This is very easy to accomplish, you just need to minimize the App and the click the icon that looks like a Lock, You will have to lock Google Chrome or any Browser used to Install this App is a extension of the Browser, if your Browser shuts down, the app shuts down with it"),l.a.createElement("img",{src:Z.a,alt:"lock"}),l.a.createElement("h4",null,"Removig the App from Optiization List"),l.a.createElement("p",null,"There are a lot of Inbuilt system Apps that constantly optimize our device for us, This sounds Good but it removes the Apps that we need to function even when were not using it, a way around this is to remove the App from any optimization List as much as possible for it to continue running and Reminding you in future"),l.a.createElement("img",{src:te.a,alt:"optimize"}),l.a.createElement("p",null,"Although these tips do not assure Maximum effectivenes of the App, but they have been proven to improve it"))))),l.a.createElement(I.a,{component:!1,enter:{opacity:1},leave:{opacity:0}},(ae||oe||me||ke||je||Ee||be)&&l.a.createElement("div",{key:"underlay",className:"ModalUnderLay",onClick:function(){ne(!1),re(!1),ue(!1),we(!1),Se(!1),ye(!1),ye(!1)}})))},ne=(a(76),a(47)),le=a.n(ne);var ce=function(){var e,t=localStorage,a=Object(n.useState)((function(){return null===t.getItem("AppLocal")?[]:JSON.parse(t.getItem("AppLocal"))})),c=Object(u.a)(a,2),o=c[0],r=c[1],d=Object(n.useState)((function(){return null===t.getItem("Index")?0:Number.parseInt(t.getItem("Index"))})),f=Object(u.a)(d,2),h=f[0],v=f[1],b=Object(n.useState)((function(){return null===t.getItem("mode")||JSON.parse(t.getItem("mode").toLowerCase())})),y=Object(u.a)(b,2),g=y[0],k=y[1],w=Object(n.useState)("send"),O=Object(u.a)(w,2),C=O[0],j=O[1];function S(){return(S=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.a.sendForm("jesutofunmi","template_u504ag9",t.target,"user_cqIkD8iC06p5aXPXjcJEo");case 3:if(1!==(a=e.sent).status&&"OK"!==a.text){e.next=8;break}j("sent"),e.next=9;break;case 8:throw a;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0&&j("error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){localStorage.setItem("AppLocal",JSON.stringify(o))}),[o]),Object(n.useEffect)((function(){t.setItem("Index",JSON.stringify(h)),N()(".container").css({display:"none"}),N()('.container[data-id="'.concat(o[h]?o[h].id:"",'"]')).css({display:"block"})}),[h,o]),Object(n.useEffect)((function(){localStorage.setItem("mode",g)}),[g]),e=o.length<=0?l.a.createElement("div",{className:"noList"},l.a.createElement("div",null,l.a.createElement("h1",null,"No Lists"),l.a.createElement("p",null,"Click ",l.a.createElement(E.d,{size:"1.2rem",style:{margin:"0 5px"}})," to make a List"))):o.map((function(e,t){return l.a.createElement(R,{key:t,props:{app:e}})})),l.a.createElement("div",{className:"main ".concat(g?"":"light")},l.a.createElement(ae,{props:{app:o,addList:function(e){var t={id:p.a.v4(),name:e};v(o.length),r((function(e){return[].concat(Object(m.a)(e),[t])}))},setCurrentList:v,updateList:function(e,t){r(o.map((function(a){return a.id===e&&(a.name=t),a})))},deleteList:function(e){t.removeItem(e);var a=o.filter((function(t){return t.id!==e}));v(a.length-1),r(a)},currentList:h,clearList:function(){r([]),t.clear()},setwhichMode:k,whichMode:g,sendForm:function(e){return S.apply(this,arguments)},formStatus:C,setFormStatus:j}}),e)},oe=(a(79),a(80),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function re(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{className:"notif"}),l.a.createElement(ce,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):re(t,e)}))}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.74439c5c.chunk.js.map