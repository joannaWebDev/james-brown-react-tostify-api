(this["webpackJsonpjames-brown"]=this["webpackJsonpjames-brown"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={cards:"Cards_cards__-tj0j",cardsWrapper:"Cards_cardsWrapper__1rW1e",cardsItems:"Cards_cardsItems__2XmRJ",cardsItem:"Cards_cardsItem__XB88M",cardsItemLink:"Cards_cardsItemLink__2YQ57",cardsItemPicWrap:"Cards_cardsItemPicWrap__1gqdG",cardsItemImg:"Cards_cardsItemImg__1jM6Z",cardsItemInfo:"Cards_cardsItemInfo__HYtPi",cardsItemText:"Cards_cardsItemText__2GknR"}},,,function(e,t,a){e.exports={imageCardContainer:"ImageCard_imageCardContainer__HRFUH",imageCard:"ImageCard_imageCard__Y-lOV",imageTextContainer:"ImageCard_imageTextContainer__RuWkE",imageCardTagContainer:"ImageCard_imageCardTagContainer__iMa-D"}},function(e,t,a){e.exports={productsPage:"Products_productsPage__1JV-h",products:"Products_products__14YxB",product:"Products_product__1WVeW",productsCost:"Products_productsCost__1_6D-",description:"Products_description__GfXYx"}},,,function(e,t,a){e.exports={heroContainer:"Hero_heroContainer__3008x",heroBtns:"Hero_heroBtns__296EG",btn:"Hero_btn__2cfPd"}},function(e,t,a){e.exports={imageSearchContainer:"ImageSearch_imageSearchContainer__2udOk",imageSearch:"ImageSearch_imageSearch__1oMn1",searchInput:"ImageSearch_searchInput__3Rfbb"}},,,,,,,function(e,t,a){e.exports={popUpText:"PopUp_popUpText__Xkzxp",popUp:"PopUp_popUp__3R0WY"}},function(e,t,a){e.exports={repertoire:"Repertoire_repertoire__3qucQ",displayOrder:"Repertoire_displayOrder__qGC5z"}},function(e,t,a){e.exports={footerContainer:"Footer_footerContainer__3tqBX",footerLinks:"Footer_footerLinks__31a30"}},,function(e,t,a){e.exports={logo:"Logo_logo__1x69M"}},,function(e,t,a){e.exports={headerContainer:"Header_headerContainer__3rc8C"}},function(e,t,a){e.exports={navigationMenu:"Navigation_navigationMenu__2RCWt"}},,,function(e,t,a){e.exports={shared_section_container:"Section_shared_section_container__1Qct9"}},function(e,t,a){e.exports={displayOrder:"About_displayOrder__3c55R"}},,,,function(e,t,a){e.exports={portfolioContainer:"Portfolio_portfolioContainer__1D1rg"}},function(e,t,a){e.exports={backToTop:"BackToTop_backToTop__2nq_N"}},,,,,,,,,,,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),s=a.n(n),i=a(9),o=a.n(i),c=a(4),l=a(2),d=a(29),h=a.n(d),m=function(){return Object(r.jsx)("div",{className:h.a.logo,children:Object(r.jsx)(c.Link,{to:"/",children:Object(r.jsx)("img",{src:"/logo.png",alt:"An alter me",width:"180",height:"70"})})})},j=a(31),u=a.n(j),b=function(){return Object(r.jsx)("div",{className:u.a.headerContainer,children:Object(r.jsx)(m,{})})},p=a(15),g=a(32),f=a.n(g),O=function(){return Object(r.jsxs)("ul",{className:f.a.navigationMenu,children:[Object(r.jsx)("li",{children:Object(r.jsx)(p.HashLink,{to:"/#about",scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"start"})},children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)(c.NavLink,{to:"/portfolio",children:"Portfolio"})}),Object(r.jsx)("li",{children:Object(r.jsx)(c.NavLink,{to:"/repertoire",children:"Repertoire"})}),Object(r.jsx)("li",{children:Object(r.jsx)(p.HashLink,{to:"/#contact",scroll:function(e){return e.scrollIntoView({behavior:"smooth",block:"start"})},children:"Contact"})})]})},x=(a(55),["btn--primary","btn--outline","btn--test"]),_=["btn--medium","btn--large","btn--small"],v=function(e){var t=e.children,a=e.type,n=e.onClick,s=e.buttonStyle,i=e.buttonSize,o=x.includes(s)?s:x[0],c=_.includes(i)?i:_[0];return Object(r.jsx)("button",{className:"btn ".concat(o," ").concat(c),onClick:n,type:a,children:t})},y=a(17),C=a.n(y),k=function(){return Object(r.jsxs)("div",{className:C.a.heroContainer,children:[Object(r.jsx)("video",{src:"/video/women-modelling_conv.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(r.jsx)("h1",{children:"PROFESSIONAL PHOTOSHOOT"}),Object(r.jsx)("p",{children:"What are you waiting for?"}),Object(r.jsx)("div",{className:C.a.heroBtns,children:Object(r.jsx)(c.NavLink,{to:"/portfolio",children:Object(r.jsx)(v,{className:C.a.btns,buttonStyle:"btn--outline",buttonSize:"btn--large",children:"WATCH MORE"})})})]})},w=a(6),I=a(24),N=a.n(I),S=a(33),P=function(e){var t=Object(n.useState)([]),a=Object(w.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(!0),o=Object(w.a)(i,2),c=o[0],l=o[1];function d(){return(d=Object(S.a)(N.a.mark((function t(){var a,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,s(r),l(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),[r,c]},M=a(10),T=a.n(M),B=function(){var e=P("".concat("","/data.json")),t=Object(w.a)(e,2),a=t[0],n=t[1];return Object(r.jsx)(r.Fragment,{children:n?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsx)("ul",{className:T.a.cardsWrapper,children:a.map((function(e){var t=e.id,a=e.src,n=e.label,s=e.description;return Object(r.jsx)("li",{className:T.a.cardsItem,children:Object(r.jsxs)(c.Link,{to:"/portfolio",className:T.a.cardsItemLink,children:[Object(r.jsx)("figure",{className:T.a.cardsItemPicWrap,"data-category":n.split(" ")[0],children:Object(r.jsx)("img",{alt:s,src:"".concat("","/").concat(a),className:T.a.cardsItemImg,width:"300"})}),Object(r.jsx)("div",{className:T.a.cardsItemInfo,children:Object(r.jsxs)("h5",{className:T.a.cardsItemText,children:[s," "]})})]})},"photo-".concat(t))}))})})},H=a(34),W=(a(57),a(25)),E=a.n(W),L=function(){return Object(r.jsx)(H.a,{trigger:Object(r.jsx)("p",{className:E.a.popUp,children:"Click me"}),position:"bottom left",children:Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:E.a.popUpText,style:{width:"200px",marginRight:"20px"},children:"\u201cPhotography is a way of feeling, of touching, of loving. What you have caught on film is captured forever\u2026 It remembers little things, long after you have forgotten everything.\u201d"})})})},A=function(){return Object(r.jsxs)("div",{className:T.a.cards,children:[Object(r.jsx)("h2",{children:"Moments suspended in soulful imagery + an enduring legacy"}),Object(r.jsx)(L,{}),Object(r.jsx)(B,{})]})},D=a(35),z=a.n(D),R=function(e){var t=e.imgSrc,a=e.title,n=e.subtitle,s=e.firstParagraph,i=e.secondParagraph,o=e.displayOrder;return Object(r.jsxs)("div",{className:o,style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"2%",margin:"2% ",textAlign:"left"},children:[Object(r.jsx)("img",{loading:"lazy",src:t,alt:"snapshoot of the man himself",width:"300"}),Object(r.jsxs)("div",{className:z.a.shared_section_container,children:[Object(r.jsx)("h1",{children:a}),Object(r.jsx)("p",{children:n}),Object(r.jsx)("p",{children:s}),Object(r.jsx)("p",{children:i})]})]})},F=a(36),J=a.n(F),q=function(e){return Object(r.jsx)("div",{id:"about",children:Object(r.jsx)(R,{displayOrder:J.a.displayOrder,imgSrc:"/img/james-brown.jpg",title:"James Brown",subtitle:"Creative photographer",firstParagraph:"A photographer is a professional that focuses on the art of taking photographs with a digital or film camera. Photographers use artificial and/or natural lighting to snap pictures\r of various people, places and things in a variety of settings.",secondParagraph:" The charges of this position are requiring the complete art direction\r of the brand, the creation and distribution of all contents through\r social networks, the start up of new communication initiatives,\r campaigns management in the most relevant social media, events\r organization, an improvement on the brand\u2019s image, and what I enjoy\r most of all, being the photographer and creative director of all the\r fashion campaigns and the studio manager. I consider myself an active person, I have plenty of good ideas and\r initiative. I\u2019ve worked in very competitive companies where I had to\r develop my ideas from different positions. I love to put everything in\r and try to reach the highest potencial of the brand."})})},V=a(16),Y=a(37),U=a(38),K=a(39),Z=a(43),G=a(42),Q=a(44),X=a(19),$=(a(58),a(59),RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)),ee=function(e){Object(Z.a)(a,e);var t=Object(G.a)(a);function a(e){var r;return Object(U.a)(this,a),(r=t.call(this,e)).handleSubmit=function(e){if(e.preventDefault(),function(e){var t=e.formErrors,a=Object(Q.a)(e,["formErrors"]),r=!0;return Object.values(t).forEach((function(e){e.length>0&&(r=!1)})),Object.values(a).forEach((function(e){""===e&&(r=!1)})),r}(r.state)){var t=r.state,a=t.name,n=t.email,s=t.subject,i=t.message;console.log("\n        --SUBMITTING--\n        Name: ".concat(a,"\n        Email: ").concat(n,"\n        Subject: ").concat(s,"\n        Message: ").concat(i,"\n      ")),r.toastifySuccess(),r.resetForm()}else r.toastifyFail()},r.handleChange=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value,s=Object(Y.a)({},r.state.formErrors);switch(a){case"name":s.name=n.length<3?"Please enter your name. At least 3 characters":"";break;case"email":s.email=$.test(n)?"":"Please enter a valid email address.";break;case"subject":s.subject=n.length<3?"Please enter a subject.At least 3 characters":"";break;case"message":s.message=n.length<10?"Please enter a message. At least 10 characters":""}r.setState(Object(V.a)({formErrors:s},a,n))},r.state={name:"",email:"",subject:"",message:"",formErrors:{name:"",email:"",subject:"",message:""}},r}return Object(K.a)(a,[{key:"toastifySuccess",value:function(){X.b.success("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success"})}},{key:"toastifyFail",value:function(){X.b.error("Form failed to send!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback fail"})}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){var e=this.state.formErrors;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Contact"}),Object(r.jsxs)("form",{id:"contact",onSubmit:this.handleSubmit,noValidate:!0,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",name:"name",value:this.state.name,className:"form-control formInput ".concat(e.name.length>0?"error":null),onChange:this.handleChange,placeholder:"Full Name",noValidate:!0}),e.name.length>0&&Object(r.jsx)("span",{className:"errorMessage",children:e.name})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"email",name:"email",value:this.state.email,className:"form-control formInput ".concat(e.email.length>0?"error":null),onChange:this.handleChange,placeholder:"Email",noValidate:!0}),e.email.length>0&&Object(r.jsx)("span",{className:"errorMessage",children:e.email})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"subject",name:"subject",value:this.state.subject,className:"form-control formInput ".concat(e.subject.length>0?"error":null),onChange:this.handleChange,placeholder:"Subject",noValidate:!0}),e.subject.length>0&&Object(r.jsx)("span",{className:"errorMessage",children:e.subject})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("textarea",{rows:"5",name:"message",value:this.state.message,className:"form-control formInput ".concat(e.message.length>0?"error":null),onChange:this.handleChange,placeholder:"Message",noValidate:!0}),e.message.length>0&&Object(r.jsx)("span",{className:"errorMessage",children:e.message})]}),Object(r.jsx)(v,{className:"submitBtn",buttonStyle:"btn--primary",buttonSize:"btn--medium",type:"submit",children:"Submit"})]}),Object(r.jsx)(X.a,{})]})}}]),a}(n.Component),te=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{}),Object(r.jsx)(A,{}),Object(r.jsx)(q,{}),Object(r.jsx)(ee,{})]})},ae=a(13),re=a.n(ae),ne=function(e){var t=e.image,a=t.tags.split(",");return Object(r.jsxs)("div",{className:re.a.imageCardContainer,children:[Object(r.jsx)("img",{src:t.webformatURL,alt:t.tags,className:re.a.imageCard,width:"480"}),Object(r.jsxs)("div",{className:re.a.imageTextContainer,children:[Object(r.jsxs)("h2",{children:["Photo by ",t.user]}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"Views: "}),t.views]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"Downloads: "}),t.downloads]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("strong",{children:"Likes: "}),t.likes]})]})]}),Object(r.jsx)("div",{className:re.a.imageCardTagContainer,children:a.filter((function(e,t){return t>0&&t<4})).map((function(e,t){return Object(r.jsxs)("span",{className:re.a.imageCardTag,children:["#",e]},t)}))})]})},se=a(18),ie=a.n(se),oe=function(e){var t=e.searchText,a=Object(n.useState)(""),s=Object(w.a)(a,2),i=s[0],o=s[1];return Object(r.jsx)("div",{className:ie.a.imageSearchContainer,children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(i)},children:Object(r.jsxs)("div",{className:ie.a.imageSearch,children:[Object(r.jsx)("input",{onChange:function(e){return o(e.target.value)},className:ie.a.searchInput,type:"text",placeholder:"Search Image Term..."}),Object(r.jsx)(v,{buttonStyle:"btn--primary",buttonSize:"btn--small",type:"submit",children:"Search"})]})})})},ce=a(40),le=a.n(ce),de=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(!0),o=Object(w.a)(i,2),c=o[0],l=o[1],d=Object(n.useState)("model"),h=Object(w.a)(d,2),m=h[0],j=h[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("19199393-6d3b6b7d7d8e747d40c7d3776","&q=").concat(m,"&image_type=photo&safesearch=true&per_page=36")).then((function(e){return e.json()})).then((function(e){s(e.hits),l(!1)})).catch((function(e){return console.log(e)}))}),[m]),Object(r.jsxs)("div",{children:[Object(r.jsx)(oe,{searchText:function(e){return j(e)}}),!c&&0===a.length&&Object(r.jsx)("h1",{children:"No Images Found"}),c?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsx)("div",{className:le.a.portfolioContainer,children:a.map((function(e){return Object(r.jsx)(ne,{image:e},e.id)}))})]})},he=a(14),me=a.n(he),je="workshop",ue=function(){var e=Object(n.useState)([{category:je,name:'The "Real" Wedding II',cost:1250,about:"Build your skills and portfolio with the Chinese Bridal Portraiture class with James Brown.",description:"Celebrate diversity with classic, natural light bridal portraits with a Chinese model in traditional wedding attire and headdresses from the new East Meets West collection. With hair and makeup by the legendary Chiali Meng Artistry and floral details by the botanical genius, Camille Panzarello. ",image:"https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1600286777822-IPCIWZEMVLH9UK93TO57/ke17ZwdGBToddI8pDm48kO6t_FIigFZlD-2ukJs68NZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdQnRCmyfmE32mt8hf8jTbpNOvskeoRv-ygqK_y0NLe3pygZMNSAPtQr-kV0SxGO-A/Jen_BTS_Studio-1-Jen_Huang-205353_0031.jpg?format=500w"},{category:je,name:"Bridal Portraiture",cost:750,about:"Build your skills and portfolio with the Chinese Bridal Portraiture class with James Brown.",description:"Celebrate diversity with classic, natural light bridal portraits with a Chinese model in traditional wedding attire and headdresses from the new East Meets West collection. With hair and makeup by the legendary Chiali Meng Artistry and floral details by the botanical genius, Camille Panzarello. ",image:"https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1606278441334-KAGR4X3Z4Y5E486B3HCD/ke17ZwdGBToddI8pDm48kNQ0Dds4OaVwXKz4lIliiXZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0rQeu_A0VlcGJEiWdfSJ_zX7AkVwxbMIAYVxku088aqE12hBAAPy02Op6r73ckLiPQ/Beautiful-Wedding-Makeup-Jen-Huang-Photo-88-371103_0011.jpg?format=500w"},{category:je,name:"Natural Engagement",cost:750,about:"Build your skills and portfolio with the Chinese Bridal Portraiture class with James Brown.",description:"Celebrate diversity with classic, natural light bridal portraits with a Chinese model in traditional wedding attire and headdresses from the new East Meets West collection. With hair and makeup by the legendary Chiali Meng Artistry and floral details by the botanical genius, Camille Panzarello. ",image:"https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1600290492349-L6U29KOMAYET1LO5JEIJ/ke17ZwdGBToddI8pDm48kGDhYzKEs-g3IW1vEZk4IP57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0lqfkVpRp1g_2L-WsTQRP4KxYMVT_2jf6Ixn4lDglP4s9BJebir6FMbnuZFo76Jo4Q/image-asset.jpeg?format=500w"},{category:je,name:"Chinese Bridal Portraiture",cost:950,about:"Build your skills and portfolio with the Chinese Bridal Portraiture class with James Brown.",description:"Celebrate diversity with classic, natural light bridal portraits with a Chinese model in traditional wedding attire and headdresses from the new East Meets West collection. With hair and makeup by the legendary Chiali Meng Artistry and floral details by the botanical genius, Camille Panzarello. ",image:"https://images.squarespace-cdn.com/content/v1/5a009d38914e6b473ffe5615/1614800042581-E2PJF26W3N8E2SREAULL/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/Refined-Film-Jen-Huang-Photo-49-398477_024.jpg?format=300w"}]),t=Object(w.a)(e,1)[0],a=Object(n.useState)(je),s=Object(w.a)(a,2),i=s[0];s[1];return Object(r.jsxs)("div",{className:me.a.productsPage,children:[Object(r.jsx)("h1",{children:"WORKSHOPS"}),Object(r.jsx)("div",{className:me.a.products,children:t.filter((function(e){return e.category===i})).map((function(e,t){return Object(r.jsxs)("div",{className:me.a.product,children:[Object(r.jsx)("img",{src:e.image,alt:e.name}),Object(r.jsx)("h3",{children:e.name}),Object(r.jsxs)("p",{className:me.a.productsCost,children:["$",e.cost]}),Object(r.jsx)("p",{children:e.about}),Object(r.jsx)("p",{className:me.a.description,children:e.description})]},t)}))})]})},be=a(26),pe=a.n(be),ge=function(e){return Object(r.jsxs)("div",{className:pe.a.repertoire,children:[Object(r.jsx)(R,{displayOrder:pe.a.displayOrder,imgSrc:"/img/james-brown.jpg",title:"Welcome to Repertoire,",subtitle:"James Brown\u2019s new portfolio building\r workshop series.",firstParagraph:"An important distinction between Repertoire and other group workshops:all\r\nparticipants will be given ample time to work with models on their own without the disruption of a group. This way you have the chance to learn at your own pace without competing for time and attention."}),Object(r.jsx)(ue,{})]})},fe=a(27),Oe=a.n(fe),xe=function(){return Object(r.jsxs)("div",{className:Oe.a.footerContainer,children:[Object(r.jsxs)("ul",{className:Oe.a.footerLinks,children:[Object(r.jsx)("li",{children:Object(r.jsx)(c.NavLink,{to:"/portfolio",children:"Portfolio"})}),Object(r.jsx)("li",{children:Object(r.jsx)(c.NavLink,{to:"/repertoire",children:"Repertoire"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://joannasmerea.com/",className:"fa fa-instagram",target:"_blank",rel:"noopener noreferrer",title:"dev's Portfolio",children:"Instagram"})})]}),Object(r.jsx)("p",{children:"\xa9 James Brown"})]})},_e=a(41),ve=a.n(_e),ye=function(){return Object(r.jsx)("div",{className:ve.a.backToTop,children:Object(r.jsx)(p.HashLink,{to:"#top",scroll:function(e){return e.scrollIntoView({behavior:"smooth"})},children:"\u27ba"})})},Ce=(a(60),function(){return Object(r.jsx)(c.BrowserRouter,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(b,{}),Object(r.jsx)(O,{}),Object(r.jsx)(l.d,{path:"/",exact:!0,component:te}),Object(r.jsx)(l.d,{path:"/portfolio",exact:!0,component:de}),Object(r.jsx)(l.d,{path:"/repertoire",exact:!0,component:ge}),Object(r.jsx)(ye,{}),Object(r.jsx)(xe,{})]})})});o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(Ce,{})}),document.getElementById("root"))}],[[61,1,2]]]);
//# sourceMappingURL=main.f2b83380.chunk.js.map