(this.webpackJsonpchat_js=this.webpackJsonpchat_js||[]).push([[0],{42:function(e,a,s){},43:function(e,a,s){},69:function(e,a,s){"use strict";s.r(a);var A=s(1),t=s.n(A),c=s(32),n=s.n(c),o=(s(42),s(18)),i=(s(43),s(2)),r=s.p+"static/media/messages.7c08a7a5.png",g=s(11),d=s(8),m=s.n(d),l=s(13),u=s.n(l),B=s(10),b=s(33),j=s.n(b),k=s(14),p={users:{1:{id:1,userName:"Alice Freeman",userAvatar:"https://st3.depositphotos.com/3200101/i/600/depositphotos_194261734-stock-photo-portrait-of-a-businesswoman-against.jpg"},2:{id:2,userName:"Josefina",userAvatar:"https://st3.depositphotos.com/3200101/i/600/depositphotos_194261734-stock-photo-portrait-of-a-businesswoman-against.jpg"},3:{id:3,userName:"Velazquez",userAvatar:"https://st.depositphotos.com/1743476/1276/i/950/depositphotos_12767124-stock-photo-joyful-man-face.jpg"},4:{id:4,userName:"Barrera",userAvatar:"https://st.depositphotos.com/1743476/1276/i/950/depositphotos_12767124-stock-photo-joyful-man-face.jpg"},5:{id:5,userName:"Valerra",userAvatar:"https://st.depositphotos.com/1743476/1276/i/950/depositphotos_12767124-stock-photo-joyful-man-face.jpg"}},dialogsList:[{userId:1,lastMessage:{messageId:1633119020010,userId:1,messagesContent:"ku",createdAt:1633119020010}},{userId:2,lastMessage:{messageId:1633119020009,userId:1,messagesContent:"yo",createdAt:1633119020009}},{userId:3,lastMessage:{messageId:1633119020008,userId:1,messagesContent:"shalom",createdAt:1633119020008}},{userId:4,lastMessage:{messageId:1633119020007,userId:1,messagesContent:"privet",createdAt:1633119020007}},{userId:5,lastMessage:{messageId:1633119020006,userId:1,messagesContent:"i tebe",createdAt:1633119020006}}],messageList:[{dialogId:1,messages:[{messageId:1633119020009,messagesContent:"Privet",createdAt:1633119020009,messageSenderId:1},{messageId:1633119020010,messagesContent:"ku",createdAt:1633119020010,messageSenderId:"abc"}]},{dialogId:2,messages:[{messageId:1633119020008,messagesContent:"hi",createdAt:1633119020008,messageSenderId:2},{messageId:1633119020009,messagesContent:"yo",createdAt:1633119020009,messageSenderId:"abc"}]},{dialogId:3,messages:[{messageId:1633119020007,messagesContent:"zdraste",createdAt:1633119020007,messageSenderId:3},{messageId:1633119020008,messagesContent:"shalom",createdAt:1633119020008,messageSenderId:"abc"}]},{dialogId:4,messages:[{messageId:1633119020006,messagesContent:"nihao",createdAt:1633119020006,messageSenderId:4},{messageId:1633119020007,messagesContent:"privet",createdAt:1633119020007,messageSenderId:"abc"}]},{dialogId:5,messages:[{messageId:1633119020005,messagesContent:"hello",createdAt:1633119020005,messageSenderId:5},{messageId:1633119020006,messagesContent:"i tebe",createdAt:1633119020006,messageSenderId:"abc"}]}],searchTerm:""},w="dialogskey",C=j()(Object(k.devtools)(Object(k.combine)(function(){try{var e=localStorage.getItem(w)||"";return e?JSON.parse(e):p}catch(a){return p}}(),(function(e){return{setSearchTerm:function(a){return e({searchTerm:a})},clear:function(){return e({messageList:[]})},sendMessage:function(a,s){return e((function(e){var A=m.a.cloneDeep(e.messageList),t=m.a.findIndex(A,(function(e){return e.dialogId==a})),c=m.a.cloneDeep(e.dialogsList),n=m.a.findIndex(c,(function(e){return e.userId==a}));if(t>-1&&n>-1){A[t].messages.push(s),c[n].lastMessage=s;try{localStorage.setItem(w,JSON.stringify(Object(B.a)(Object(B.a)({},e),{},{searchTerm:"",dialogsList:c,messageList:A})))}catch(o){}return Object(B.a)(Object(B.a)({},e),{},{dialogsList:c,messageList:A})}try{localStorage.setItem(w,JSON.stringify(Object(B.a)(Object(B.a)({},e),{},{searchTerm:""})))}catch(i){}return e}))}}})))),O=s(0),Q=function(){var e=C((function(e){return e.dialogsList})),a=C((function(e){return e.users})),s=C((function(e){return e.searchTerm})),t=Object(A.useState)([]),c=Object(g.a)(t,2),n=c[0],o=c[1],r=Object(i.f)();return Object(A.useEffect)((function(){var A=m.a.cloneDeep(e),t=s.toLowerCase();if(s){var c=Object.values(a).filter((function(e){return e.userName.toLowerCase().includes(t)})).map((function(e){return e.id}));A=A.filter((function(e){return c.includes(e.userId)}))}A.sort((function(e,a){if(e.lastMessage&&a.lastMessage){if(e.lastMessage.createdAt<a.lastMessage.createdAt)return 1;if(e.lastMessage.createdAt>a.lastMessage.createdAt)return-1}else{if(e.lastMessage&&!a.lastMessage)return 1;if(!e.lastMessage&&a.lastMessage)return-1}return 0})),o(A)}),[e,a,s]),n.map((function(e){return Object(O.jsxs)("button",{className:"conversation-info__card-body card-body",onClick:function(){r.push("/".concat(e.userId))},children:[Object(O.jsx)("div",{className:"card-body__img-column card-avatar",children:Object(O.jsx)("img",{src:a[e.userId].userAvatar,alt:"avatar",className:"card-avatar__avatar-img _avatar"})}),Object(O.jsxs)("div",{className:"card-body__info-column card-user-info",children:[Object(O.jsx)("div",{className:"card-user-info__user-name",children:a[e.userId].userName}),Object(O.jsx)("div",{className:"card-user-info__user-conversation",children:e.lastMessage.messagesContent})]}),Object(O.jsx)("div",{className:"card-body__date-column date-info",children:Object(O.jsx)("time",{className:"date-info__date",children:u.a.unix(e.lastMessage.createdAt/1e3).format("LL")})})]},e.userId)}))},I=function(){return Object(O.jsx)("div",{className:"main-info__search-block",children:Object(O.jsx)("div",{className:"main-info__search",children:Object(O.jsx)("input",{type:"text",className:"main-info__search-input",placeholder:"Search or start new chats...",onChange:function(e){return C.getState().setSearchTerm(e.target.value)}})})})},v=function(e){var a=e.dialog_id,s=C((function(e){return e.users})),t=Object(A.useState)([]),c=Object(g.a)(t,2),n=c[0],o=c[1],i=C((function(e){return e.messageList})),r=function(){var e=i.find((function(e){return e.dialogId==a}));e&&o(e.messages)};return Object(A.useEffect)((function(){r()}),[i]),Object(A.useEffect)((function(){r()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"content-block__title-column title-body",children:[Object(O.jsx)("div",{className:"title-body__avatar-block",children:Object(O.jsx)("img",{src:s[a].userAvatar,alt:"avatar",className:"title-body__avatar-img _avatar"})}),Object(O.jsx)("div",{className:"title-body__name-block",children:Object(O.jsx)("h2",{className:"title-body__user-name",children:s[a].userName})})]}),Object(O.jsx)("div",{className:"content-block__content-column conversation-body",children:n.map((function(e){return"abc"===e.messageSenderId?Object(O.jsx)("div",{className:"conversation-body__outcoming-message",children:Object(O.jsxs)("div",{className:"conversation-body__user-message outc-message",children:[Object(O.jsx)("div",{className:"outc-message__message",children:e.messagesContent}),Object(O.jsx)("div",{className:"outc-message__date date",children:Object(O.jsx)("time",{className:"date__message-income",children:u.a.unix(e.createdAt/1e3).format(" DD/MM/YY hh:mm a")})})]})},e.messageId):Object(O.jsxs)("div",{className:"conversation-body__incoming-message",children:[Object(O.jsx)("div",{className:"conversation-body__user-avatar",children:Object(O.jsx)("img",{src:s[a].userAvatar,alt:"avatar",className:"conversation-body__image _avatar"})}),Object(O.jsxs)("div",{className:"conversation-body__user-message inc-message",children:[Object(O.jsx)("div",{className:"inc-message__message",children:e.messagesContent}),Object(O.jsx)("div",{className:"inc-message__date date",children:Object(O.jsx)("time",{className:"date__message-income",children:u.a.unix(e.createdAt/1e3).format(" DD/MM/YY hh:mm a")})})]})]},e.messageId)}))})]})},f=s(20),S=s.n(f),N=s(36),q=s.p+"static/media/paper plane.9c72d902.png",h=s(37),F=s.n(h),J=function(e){var a=e.dialog_id,s=Object(A.useState)(""),t=Object(g.a)(s,2),c=t[0],n=t[1],o=function(){var e=Object(N.a)(S.a.mark((function e(){var s,A;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("https://api.chucknorris.io/jokes/random").then((function(e){return e.data.value})).catch((function(e){return e}));case 2:(s=e.sent)&&(A={messageId:Date.now(),messagesContent:s,createdAt:Date.now(),messageSenderId:a},C.getState().sendMessage(a,A));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"content-block__message-column message-body",children:Object(O.jsxs)("form",{className:"message-body__msg-block",onSubmit:function(e){e.preventDefault();var s=c.trim();if(s.length>0){var A={messageId:(new Date).getTime(),messagesContent:s,createdAt:(new Date).getTime(),messageSenderId:"abc"};C.getState().sendMessage(a,A),setTimeout(o,5e3)}n("")},children:[Object(O.jsx)("input",{type:"text",className:"message-body__msg-input",placeholder:"Type your message",value:c,onChange:function(e){n(e.target.value)}}),Object(O.jsx)("div",{className:"message-body__button-column button-column",children:Object(O.jsx)("input",{type:"image",src:q,alt:"paper plane",className:"button-column__msg-button"})})]})})},R=function(e){var a=e.dialog_id;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{dialog_id:a}),Object(O.jsx)(J,{dialog_id:a})]})},E=function(){var e=Object(i.g)().params.dialog_id;return Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsxs)("div",{className:"wrapper-body _container",children:[Object(O.jsxs)("div",{className:"wrapper-body__info-block",children:[Object(O.jsxs)("div",{className:"info-block__info-column main-info",children:[Object(O.jsx)("div",{className:"main-info__avatar-block",children:Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"avatar",className:"main-info__avatar-img _avatar"})}),Object(O.jsx)(I,{})]}),Object(O.jsxs)("div",{className:"info-block__conversation-column conversation-info",children:[Object(O.jsx)("div",{className:"conversation-info__title-column",children:Object(O.jsx)("h2",{className:"conversation-info__title",children:"Chats"})}),Object(O.jsx)("div",{className:"conversation-info__chatting-column",children:Object(O.jsx)(Q,{})})]})]}),e?Object(O.jsx)("div",{className:"wrapper-body__content-block content-block ",children:Object(O.jsx)(R,{dialog_id:e},e)}):Object(O.jsx)("div",{className:"wrapper-body__content-block no-content-block",children:Object(O.jsxs)("div",{className:"no-content-block__img-block",children:[Object(O.jsx)("img",{src:r,alt:"messages",className:"no-content-block__img"}),Object(O.jsx)("p",{className:"no-content-block__text",children:"Please choose dialog for chat"})]})})]})})},x=function(){return Object(O.jsx)(i.c,{children:Object(O.jsx)(i.a,{exact:!0,path:"/:dialog_id?",component:E})})};var D=function(){return Object(O.jsx)(o.a,{children:Object(O.jsx)(x,{})})};n.a.render(Object(O.jsx)(t.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a1db84cf.chunk.js.map