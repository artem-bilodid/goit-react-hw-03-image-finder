(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{19:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),s=(a(18),a(19),a(3)),i=a.n(s),u=a(13),l=a(8),h=a(9),p=a(4),b=a(5),m=a(7),j=a(6),d=a(1),f=function(t){var e=t.onClick;return Object(d.jsx)("button",{type:"button",className:"Button",onClick:e,children:"Load more"})},g=function(t){var e=t.src,a=t.alt;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:e,alt:a,className:"ImageGalleryItem-image"})})},v=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).adjustScroll=function(t,e,a){0!==e.length&&e!==a&&(e.length>=a.length?window.scrollTo({top:0}):window.scrollTo({top:t+window.innerHeight-150,behavior:"smooth"}))},t}return Object(b.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(t,e){return{scrollY:window.scrollY}}},{key:"componentDidUpdate",value:function(t,e,a){var n=t.images,r=a.scrollY,c=this.props.images;this.adjustScroll(r,n,c)}},{key:"render",value:function(){var t=this.props.images.map((function(t){var e=t.id,a=t.previewURL,n=t.tags;return Object(d.jsx)(g,{src:a,alt:n},e)}));return Object(d.jsx)("ul",{className:"ImageGallery",children:t})}}]),a}(n.Component),O=v,x=(a(22),a(12)),y=a.n(x),S=function(t){return Object(d.jsx)(y.a,{className:"Loader",type:"TailSpin",color:"#303f9f",height:50,width:50,timeout:3e3})},w=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={query:""},t.handleSubmit=function(e){e.preventDefault();var a=t.state.query;(0,t.props.onSubmit)(a.trim())},t.handleChange=function(e){var a=e.target.value;t.setState({query:a})},t}return Object(b.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",onSubmit:this.handleSubmit,children:Object(d.jsxs)("form",{className:"SearchForm",children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),k=w,C=function(){var t=Object(l.a)(i.a.mark((function t(e,a){var n,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat("https://pixabay.com/api","/?q=").concat(a,"&page=").concat(e,"&key=").concat("23157120-208317e5fddd4920b074585fd","&image_type=photo&orientation=horizontal&per_page=").concat(12),t.next=4,fetch(n);case 4:if((r=t.sent).ok){t.next=7;break}return t.abrupt("return",Promise.reject(new Error(r.statusText)));case 7:return t.next=9,r.json();case 9:return c=t.sent,t.abrupt("return",c);case 13:t.prev=13,t.t0=t.catch(0),console.log("error",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,a){return t.apply(this,arguments)}}(),L={page:1,totalHits:0,query:"",images:[],error:"",isLoading:!1},F=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=Object(h.a)({},L),t.handleSearchFormSubmit=function(){var e=Object(l.a)(i.a.mark((function e(a){var n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.state.query!==a){e.next=2;break}return e.abrupt("return");case 2:if(n=1,a){e.next=6;break}return t.setState(Object(h.a)({},L)),e.abrupt("return");case 6:return t.setState({isLoading:!0}),e.next=9,C(n,a);case 9:r=e.sent,c=r.hits,o=r.totalHits,t.setState(Object(h.a)(Object(h.a)({},L),{},{query:a,totalHits:o,images:Object(u.a)(c)}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.handleLoadMoreButtonClick=Object(l.a)(i.a.mark((function e(){var a,n,r,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.state.isLoading){e.next=2;break}return e.abrupt("return");case 2:return a=t.state,n=a.page,r=a.query,c=n+1,t.setState({isLoading:!0}),e.next=7,C(c,r);case 7:o=e.sent,s=o.hits,u=o.totalHits,t.setState((function(t){return{isLoading:!1,totalHits:u,page:c,images:t.images.concat(s)}}));case 11:case"end":return e.stop()}}),e)}))),t}return Object(b.a)(a,[{key:"render",value:function(){var t=this.state,e=t.images,a=t.totalHits,n=t.isLoading,r=e.length<a;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(k,{onSubmit:this.handleSearchFormSubmit}),Object(d.jsx)(O,{images:e}),n&&Object(d.jsx)(S,{}),r&&Object(d.jsx)(f,{onClick:this.handleLoadMoreButtonClick})]})}}]),a}(n.Component),N=F,q=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),r(t),c(t),o(t)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),q()}},[[43,1,2]]]);
//# sourceMappingURL=main.f69b326b.chunk.js.map