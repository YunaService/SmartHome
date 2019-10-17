(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},18:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),i=n.n(s),c=(n(18),n(7)),o=n.n(c),u=n(8),l=n(1),m=n(2),p=n(4),h=n(3),d=n(5),g=n(12),v=n(6),f=new function e(){Object(l.a)(this,e),Object(v.g)(this,{loading:!1,isLoggedIn:!0,username:"Test",page:"home"})},b=n(11),j=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputField"},r.a.createElement("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),t}(r.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"submitButton"},r.a.createElement("button",{className:"btn",style:this.props.style,disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},this.props.text))}}]),t}(r.a.Component),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",buttonDisabled:!1},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(b.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("username: "+this.state.username),console.log("password: "+this.state.password),this.state.username){e.next=4;break}return e.abrupt("return");case 4:if(this.state.password){e.next=6;break}return e.abrupt("return");case 6:return this.setState({buttonDisabled:!0}),e.prev=7,e.next=10,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 10:return t=e.sent,e.next=13,t.json();case 13:(n=e.sent)&&n.success?(f.isLoggedIn=!0,f.username=n.username):n&&!n.success&&(this.resetForm(),alert(n.msg)),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(7),console.log(e.t0),this.resetForm();case 21:case"end":return e.stop()}}),e,this,[[7,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm"},r.a.createElement("img",{src:"/img/schwabbel.png",alt:"logo"}),r.a.createElement(j,{type:"text",placeholder:"Benutzername",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),r.a.createElement(j,{type:"password",placeholder:"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),r.a.createElement(E,{text:"EINLOGGEN",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}}))}}]),t}(r.a.Component),O=(n(22),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homeBox"},r.a.createElement("img",{src:"img/homepageimg.svg",alt:"homepageimg",height:"100%",margin:"auto",width:"100%",top:"0"}),r.a.createElement("h1",null,"WIP"))}}]),t}(r.a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"btn",src:this.props.src,alt:this.props.alt,onClick:function(){return e.props.onClick()}}))}}]),t}(r.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(y,{src:"/img/lamph.svg",alt:"home",onClick:function(){f.page="home"}}),r.a.createElement(y,{src:"/img/temperature.svg",alt:"temperature",onClick:function(){f.page="temperature"}}),r.a.createElement(y,{src:"/img/shortcuts.svg",alt:"shortcuts",onClick:function(){f.page="shortcuts"}}),r.a.createElement(y,{src:"/img/settings.svg",alt:"settings",onClick:function(){f.page="settings"}}))}}]),t}(r.a.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"settingsblock"},r.a.createElement("div",{"background-color":"#7289DA",weight:"80%",onClick:function(){return e.props.onClick()}},r.a.createElement("div",{"background-color":"#7289DA"}," "),r.a.createElement("img",{alt:"",src:this.props.img,weight:"20px"}),r.a.createElement("div",null,this.props.name)))}}]),t}(r.a.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"doLogout",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(f.isLoggedIn=!1,f.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"settings"},r.a.createElement("p",null,"Dein Zuhause"),r.a.createElement(C,{img:"/img/settings.svg",name:"Hue Bridges",onClick:function(){return alert("This feature is not available yet!")}}),r.a.createElement(C,{img:"/img/settings.svg",name:"Zubeh\xf6r",onClick:function(){return alert("This feature is not available yet!")}}),r.a.createElement(C,{img:"/img/settings.svg",name:"Lampeneinstellungen",onClick:function(){return alert("This feature is not available yet!")}}),r.a.createElement("p",null,"Automatiche Lichtsteuerung"),r.a.createElement(C,{img:"/img/settings.svg",name:"Widgets",onClick:function(){return alert("This feature is not available yet!")}}),r.a.createElement("p",null,"APP"),r.a.createElement(C,{img:"/img/settings.svg",name:"Softwareupdate",onClick:function(){return alert("This feature is not available yet!")}}),r.a.createElement(C,{img:"/img/settings.svg",name:"\xdcber",onClick:function(){return alert("This feature is not available yet!")}}),r.a.createElement(C,{img:"/img/settings.svg",name:"Auslogen",onClick:function(){return e.doLogout()}}))}}]),t}(r.a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"temperaturepageBox"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, est et quis constituam. His graecis persequeris liberavisse te, accusam consequuntur vel ne. Eu suscipit abhorreant vel, soleat delicatissimi pro an. Duo tibique abhorreant delicatissimi id, dignissim adolescens ea sea. Eu eum minimum iudicabit, id eirmod appellantur duo, eros cibo adversarium te usu. Et vis verterem phaedrum salutatus. Ad tamquam euismod perfecto pro, an ius fugit instructior, has nostrum adolescens honestatis ad."))}}]),t}(r.a.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"shortcutelement"},r.a.createElement("div",{"background-color":"#7289DA",weight:"80%",onClick:function(){return e.props.onClick()}},r.a.createElement("div",{"background-color":"#7289DA"}," "),r.a.createElement("img",{alt:"",src:this.props.img,weight:"20px"}),r.a.createElement("div",null,this.props.name)))}}]),t}(r.a.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"lichtaus",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/lichtaus",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,alert(n.msg);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"lichtan",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/lichtan",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,alert(n.msg);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"customeValue",value:function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,n),e.next=3,fetch("/customevalue",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:this.id,value:this.value})});case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,alert(r.msg);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"shortcutbox"},r.a.createElement(L,{img:"/img/settings.svg",name:"Licht Aus!",onClick:function(){return e.lichtaus()}}),r.a.createElement(L,{img:"/img/settings.svg",name:"Licht An!",onClick:function(){return e.lichtan()}}),r.a.createElement(L,{img:"/img/settings.svg",name:"Custome Aus!",onClick:function(){return e.customeValue(1,0)}}),r.a.createElement(L,{img:"/img/settings.svg",name:"Custome An!",onClick:function(){return e.customeValue(1,1)}}))}}]),t}(r.a.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,f.loading=!1,f.isLoggedIn=!0,f.username="Test",e.next=14;break;case 7:return e.next=9,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 9:return t=e.sent,e.next=12,t.json();case 12:(n=e.sent)&&n.success?(f.loading=!1,f.isLoggedIn=!0,f.username=n.username):(f.loading=!1,f.isLoggedIn=!1,f.username="");case 14:e.next=21;break;case 16:e.prev=16,e.t0=e.catch(0),f.loading=!1,f.isLoggedIn=!1,f.username="";case 21:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(f.isLoggedIn=!1,f.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return f.loading?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},"Loading, please wait...")):f.isLoggedIn?"settings"===f.page?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},"SmartHome"),r.a.createElement(x,null)),r.a.createElement(w,null)):"temperature"===f.page?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},"SmartHome"),r.a.createElement(N,null)),r.a.createElement(w,null)):"shortcuts"===f.page?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},"Shortcuts"),r.a.createElement(A,null)),r.a.createElement(w,null)):"home"===f.page?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},"SmartHome"),r.a.createElement(O,null)),r.a.createElement(w,null)):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},"Welcome ",f.username,"!",r.a.createElement(E,{text:"Log out",disabled:!1,onClick:function(){return e.doLogout()}}))):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement(k,null)))}}]),t}(r.a.Component),I=Object(g.a)(T),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(I,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");S?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.da9c44a7.chunk.js.map