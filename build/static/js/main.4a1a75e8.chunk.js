(this["webpackJsonpapp-music"]=this["webpackJsonpapp-music"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(4),r=t.n(n),s=(t(14),t(15),t(2)),i=t(5),m=t(6),o=t(8),u=t(7),E=t(1),d=c.a.createContext(),v=function(e,a){switch(a.type){case"SEARCH":return Object(E.a)(Object(E.a)({},e),{},{query:a.payload.query.value,valueSearch:a.payload.textSearch.value});case"SEARCHQUERY":var t=Object.values(a.payload);return Object(E.a)(Object(E.a)({},e),{},{resultQuery:t});case"TRACKLIST":var l=Object.values(a.payload[0]);return Object(E.a)(Object(E.a)({},e),{},{tracklist:l,currentItemSelected:a.payload[1]})}},p=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,c=new Array(l),n=0;n<l;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={resultQuery:{},query:"",valueSearch:"",dispatch:function(a){e.setState((function(e){return v(e,a)}))},tracklist:{},currentItemSelected:{}},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:'muse'").then((function(a){a.json().then((function(a){e.setState({resultQuery:a.data})})).catch((function(e){console.log("this is a error ".concat(e))}))})),fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/339677/tracks").then((function(a){a.json().then((function(a){e.setState({tracklist:a.data})})).catch((function(e){console.log("this is a error ".concat(e))}))}))}},{key:"render",value:function(){return c.a.createElement(d.Provider,{value:this.state},this.props.children)}}]),t}(c.a.Component),N=d.Consumer;var h=function(){var e=this,a=Object(l.useState)("album"),t=Object(s.a)(a,2),n=t[0],r=t[1],i=Object(l.useState)(""),m=Object(s.a)(i,2),o=m[0],u=m[1],E=Object(l.useState)({}),d=Object(s.a)(E,2),v=d[0],p=d[1],h=function(e){r({value:e.target.value})},f=function(e){u({value:e.target.value})},b=function(e,a){a.preventDefault(),e({type:"SEARCH",payload:{query:n,textSearch:o}})},y=function(e,a,t){fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=".concat(a,":'").concat(t,"'")).then((function(e){e.json().then((function(e){p(e.data)})).catch((function(e){console.log("this is a error ".concat(e))}))})),e({type:"SEARCHQUERY",payload:v})};return c.a.createElement(N,null,(function(a){var t=a.query,l=a.valueSearch,n=a.dispatch;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,"Search"),c.a.createElement("form",{onSubmit:b.bind(e,n)},c.a.createElement("ul",{className:"list-unstyled filterList"},c.a.createElement("li",null,c.a.createElement("div",{className:"list-select"},c.a.createElement("select",{onChange:h,className:"custom-select",placeholder:"Select a person"},c.a.createElement("option",{value:"album"},"Album"),c.a.createElement("option",{value:"artist"},"Artist"),c.a.createElement("option",{value:"track"},"Music"),"..."))),c.a.createElement("li",null,c.a.createElement("input",{type:"text",className:"form-control","aria-describedby":"Search",placeholder:"Search for ".concat(t.value),onChange:f})),c.a.createElement("li",null,c.a.createElement("input",{type:"submit",className:"btn btn-primary btnSearch",value:"Search",onClick:y.bind(e,n,t,l)})))))}))};var f=function(){var e=this,a=Object(l.useState)({}),t=Object(s.a)(a,2),n=t[0],r=t[1],i=function(e,a,t,l){l.preventDefault(),fetch("https://cors-anywhere.herokuapp.com/".concat(a)).then((function(e){e.json().then((function(e){r(e.data)})).catch((function(e){console.log("this is a error ".concat(e))}))})),e({type:"TRACKLIST",payload:[n,t]})};return c.a.createElement(N,null,(function(a){var t=a.valueSearch,l=a.resultQuery,n=a.dispatch;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h5",null,t),c.a.createElement("div",{className:"resultList"},c.a.createElement("ul",{className:"listMusic"},Object.keys(l).map((function(a,t){return c.a.createElement("li",{className:"list-inline",key:t},c.a.createElement("a",{onClick:i.bind(e,n,l[a].album.tracklist,l[a].album.cover_big)},c.a.createElement("ul",{className:"list-inline"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("div",{className:"albumMusic"},c.a.createElement("img",{src:l[a].album.cover_big,alt:"Picture of Profile",className:"img-fluid"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("div",{className:"description"},c.a.createElement("span",null,l[a].title),c.a.createElement("label",null,l[a].artist.name))))))})))))}))};var b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"background_playlist"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("ul",{className:"list-inline"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("div",{className:"picture"},c.a.createElement("img",{src:"https://ca.slack-edge.com/E27SFGS2W-WU7N48FDK-0fa4dbc7de37-512",alt:"Picture of Profile",className:"img-fluid"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("span",{className:"nameUser"},"Raphael"),c.a.createElement("span",{className:"badgeAccount"},"Premium"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(h,null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(f,null))))))};t(16);var y=function(){return c.a.createElement(N,null,(function(e){e.resultQuery;var a=e.tracklist,t=e.currentItemSelected;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"banner-Artist"},c.a.createElement("ul",{className:"list-inline artist-banner-list"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("div",{className:"artist-picture"},c.a.createElement("img",{src:t,alt:"Picture of Profile",className:"img-fluid"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("h1",null,"Boyce Avenue Acoustic Covers"),c.a.createElement("span",null,"A thousand Years")))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("ul",{className:"listMusicAlbum list-inline"},Object.keys(a).map((function(e,t){return c.a.createElement("li",{className:"list-inline",key:t},c.a.createElement("a",{href:a[e].preview,target:"_blank"},c.a.createElement("div",{className:"container-fluid noPadding"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-11 col-sm-10"},c.a.createElement("span",null,a[e].track_position," - "),c.a.createElement("span",null,a[e].title)),c.a.createElement("div",{className:"col-md-1 col-sm-1"},c.a.createElement("span",{className:"timeMusic"},c.a.createElement("i",{className:"fa fa-play","aria-hidden":"true"})))))))})))))))}))};var g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid paddingLeft16px"},c.a.createElement("div",{className:"row noPadding"},c.a.createElement("div",{className:"col-10 "},c.a.createElement("h2",null,"Featured for you")),c.a.createElement("div",{className:"col-2"},c.a.createElement("span",{className:"linkMore"},"See Others"))),c.a.createElement("div",{className:"banner-Feature"})))};var S=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"background-player"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("span",{className:"previous"},"Previous",c.a.createElement("label",null,"Photograph"))),c.a.createElement("div",{className:"col-8"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("ul",{className:"list-inline list-icon-player"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"fa fa-step-backward","aria-hidden":"true"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"fa fa-play","aria-hidden":"true"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"fa fa-step-forward","aria-hidden":"true"})))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("span",null,"01:19")),c.a.createElement("div",{className:"col-7"},c.a.createElement("div",{className:"bg-timeline"},c.a.createElement("span",null))),c.a.createElement("div",{className:"col-3"},c.a.createElement("span",null,"01:19"))))),c.a.createElement("div",{className:"col-2"},c.a.createElement("span",{className:"previous"},"Up next ",c.a.createElement("label",null,"Rise")))))))};var k=function(){return c.a.createElement(p,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 col-sm-12"},c.a.createElement(b,null)),c.a.createElement("div",{className:"col-md-9 col-sm-12"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(y,null))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(g,null)))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("footer",null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2"},c.a.createElement("ul",{className:"listMusic"},c.a.createElement("li",null,c.a.createElement("ul",{className:"list-inline"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("div",{className:"albumMusic"},c.a.createElement("img",{src:"https://images.squarespace-cdn.com/content/v1/56d1077e8a65e2c2b911c5fa/1524683962396-IP8LREI9L95WV6JEYWLU/ke17ZwdGBToddI8pDm48kNgFyjlEyNHlSWEjE-QCU1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdLKTLgsLX9_T7LnpaostY9WYLb0IFNaX6bgMhY2dUNBWIB-7cQgYKo_bDpR6cEVkg/BA_ART_NoLimits%28tunecore%29.jpg",alt:"Picture of Profile",className:"img-fluid"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("div",{className:"description"},c.a.createElement("span",null,"Photograph"),c.a.createElement("label",null,"Boyce Avenue"))))))),c.a.createElement("div",{className:"col-10"},c.a.createElement(S,null))))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.4a1a75e8.chunk.js.map