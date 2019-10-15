(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},18:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),o=n.n(r),c=(n(18),n(7)),i=n.n(c),u=n(9),l=n(2),p=n(3),d=n(5),h=n(4),m=n(6),v=n(12),b=n(1),g=new function e(){Object(l.a)(this,e),Object(b.g)(this,{loading:!0,server:"http://10.33.156.50:3000",isLoggedIn:!1,username:"",page:"home"})},f=n(11),j=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"inputField"},s.a.createElement("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),t}(s.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"submitButton"},s.a.createElement("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},this.props.text))}}]),t}(s.a.Component),O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",buttonDisabled:!1},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(f.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("username: "+this.state.username),console.log("password: "+this.state.password),this.state.username){e.next=4;break}return e.abrupt("return");case 4:if(this.state.password){e.next=6;break}return e.abrupt("return");case 6:return this.setState({buttonDisabled:!0}),e.prev=7,e.next=10,fetch(g.server+"/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 10:return t=e.sent,e.next=13,t.json();case 13:(n=e.sent)&&n.success?(g.isLoggedIn=!0,g.username=n.username):n&&!n.success&&(this.resetForm(),alert(n.msg)),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(7),console.log(e.t0),this.resetForm();case 21:case"end":return e.stop()}}),e,this,[[7,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"loginForm"},"Login",s.a.createElement(j,{type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),s.a.createElement(j,{type:"password",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),s.a.createElement(w,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}}))}}]),t}(s.a.Component),y=(n(22),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(g.server+"/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(g.loading=!1,g.isLoggedIn=!0,g.username=n.username):(g.loading=!1,g.isLoggedIn=!1,g.username=""),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),g.loading=!1,g.isLoggedIn=!1,g.username="";case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(g.server+"/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(g.isLoggedIn=!1,g.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return g.loading?s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"container"},"Loading, please wait...")):g.isLoggedIn?"home"===g.page?s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"container"},g.page,"!")):s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"container"},"Welcome ",g.username,"!",s.a.createElement(w,{text:"Log out",disabled:!1,onClick:function(){return e.doLogout()}}))):s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"container"},s.a.createElement(O,null)))}}]),t}(s.a.Component)),k=Object(v.a)(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.9b0f0f61.chunk.js.map