(this["webpackJsonpreact-slider"]=this["webpackJsonpreact-slider"]||[]).push([[0],{12:function(e,t,a){e.exports=a(37)},17:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),s=(a(17),a(7)),l=a(8),c=a(10),m=a(11),d=a(9),u=a.n(d);a(33),a(34),a(35);var h=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={error:null,isLoaded:!1,items:[],copyright:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=30&apikey=".concat("f2dc2258ad03d097b0bef9c26d00b2c1")).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.data.results,copyright:t.attributionHTML})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items,i=e.copyright;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",null,r.a.createElement(u.a,Object.assign({},{dots:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:2,arrows:!0,responsive:[{breakpoint:1290,settings:{slidesToShow:5}},{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:4,arrows:!1}}]},{"data-testid":"slickSlider"}),n.map((function(e,t){if(!e.thumbnail.path.includes("image_not_available"))return r.a.createElement("div",{key:e.name,className:"slider-item","data-testid":"slider-".concat(t)},r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{src:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),alt:e.name})),r.a.createElement("h2",null,e.name))}))),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:i}})):r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:"./assets/spider-man.gif",alt:"Loading..."}),r.a.createElement("h2",null,"Loading..."))}}]),a}(n.Component);a(36);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{className:"logo",src:"./assets/marvel-logo-header.jpg",alt:"Marvel"}),r.a.createElement("h1",{className:"title"},"Are you a ",r.a.createElement("span",{className:"hero-text"},"hero")," or a ",r.a.createElement("span",{className:"villian-text"},"villian"),"?"),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.c7a95b27.chunk.js.map