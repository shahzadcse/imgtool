(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(50)},27:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(19),o=a.n(r),c=(a(27),a(5)),i=a(6),d=a(10),s=a(7),m=a(9),u=a(53),p=a(54),h=a(4),f=a(20),b=a.n(f),g=a(11),E=a.n(g),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(s.a)(t).call(this,e))).multipleFileChangedHandler=function(e){a.setState({selectedFiles:e.target.files}),console.log("xx"+e.target.files)},a.multipleFileUploadHandler=function(){var e=new FormData,t=a.state.selectedFiles;if(t){for(var l=0;l<t.length;l++)e.append("galleryImage",t[l],t[l].name);b.a.post("/api/profile/multiple-file-upload",e,{headers:{accept:"application/json","Accept-Language":"en-US,en;q=0.8","Content-Type":"multipart/form-data; boundary=".concat(e._boundary)}}).then(function(e){if(console.log("res >>>>",e.data.locationArray),a.setState({list:e.data.locationArray}),console.log("State list   "+a.state.list),200===e.status){if(!e.data.error)return a.ocShowAlert("File Uploaded","#3089cf"),e.data;"LIMIT_FILE_SIZE"===e.data.error.code?a.ocShowAlert("Max size: 4MB","red"):"LIMIT_UNEXPECTED_FILE"===e.data.error.code?a.ocShowAlert("Max 10 images allowed","red"):a.ocShowAlert(e.data.error,"red")}}).catch(function(e){a.ocShowAlert(e,"red")})}else a.ocShowAlert("Please upload file","red")},a.ocShowAlert=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#3089cf",a=document.querySelector("#oc-alert-container"),l=document.createElement("div"),n=document.createTextNode(e);l.setAttribute("class","oc-alert-pop-up"),E()(l).css("background",t),l.appendChild(n),a.appendChild(l),setTimeout(function(){E()(l).fadeOut("slow"),E()(l).remove()},3e3)},a.state={selectedFiles:null,list:[]},a.multipleFileUploadHandler=a.multipleFileUploadHandler.bind(Object(h.a)(Object(h.a)(a))),a.multipleFileChangedHandler=a.multipleFileChangedHandler.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"oc-alert-container"}),n.a.createElement("div",{className:"card border-light mb-3",style:{boxShadow:"0 5px 10px 2px rgba(195,192,192,.5)"}},n.a.createElement("div",{className:"card-header"},n.a.createElement("h3",{style:{color:"#555",marginLeft:"12px"}},"AH DECALS : Image Utility Tool"),n.a.createElement("p",{className:"text-muted",style:{marginLeft:"12px"}},"Image Size: Max 4MB  | Max Number of Selection : 10 Images ")),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},"Please upload the Product Images for your listing"),n.a.createElement("input",{type:"file",multiple:!0,onChange:this.multipleFileChangedHandler}),n.a.createElement("div",{className:"mt-5"},n.a.createElement("button",{className:"btn btn-info",onClick:this.multipleFileUploadHandler},"Upload!"))))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card border-light mb-3",style:{boxShadow:"0 5px 10px 2px rgba(195,192,192,.5)"}},n.a.createElement("ul",null,this.state.list.map(function(e,t){return n.a.createElement("li",{key:t},e)})))))}}]),t}(l.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u.a,null,n.a.createElement("div",null,n.a.createElement(p.a,{exact:!0,path:"/",component:v}))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.e2d11357.chunk.js.map