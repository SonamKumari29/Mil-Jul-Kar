(this.webpackJsonpmiljulkar=this.webpackJsonpmiljulkar||[]).push([[0],{52:function(n,e,t){},53:function(n,e,t){},87:function(n,e,t){"use strict";t.r(e);var i=t(3),a=t.n(i),r=t(29),c=t.n(r),s=(t(52),t(53),t(4)),o=t(5),d=t(13),l=t(28),x=t.n(l),b=t(35),j=t(24),g=j.a.initializeApp({apiKey:"AIzaSyBsjOfSSqjd8pZxLZqSEff6sO8J37PCky8",authDomain:"miljulkar-d0222.firebaseapp.com",projectId:"miljulkar-d0222",storageBucket:"miljulkar-d0222.appspot.com",messagingSenderId:"397453023108",appId:"1:397453023108:web:0cf955de16e9c9aaea2fd1",measurementId:"G-PE1BY9S80Z"}).firestore(),p=j.a.auth(),h=new j.a.auth.GoogleAuthProvider,u=j.a.storage(),m=g,O="SET_USER",f="SET_LOADING_STATUS",v="GET_ARTICLES",w=function(n){return{type:O,user:n}},y=function(n){return{type:f,status:n}};function k(){return function(n){var e;m.collection("articles").orderBy("actor.date","desc").onSnapshot((function(t){e=t.docs.map((function(n){return n.data()})),n(function(n){return{type:v,payload:n}}(e))}))}}var z,S,C,A,I,R,L,N,U,T,E,F,M,P,D,B,G,J,W,V,_,K,Z,q,H,X,Y,Q,$,nn,en,tn,an,rn,cn,sn,on,dn,ln,xn,bn,jn,gn,pn,hn,un,mn,On,fn,vn,wn,yn,kn,zn,Sn,Cn,An,In,Rn,Ln,Nn,Un,Tn,En=t(11),Fn=t(2),Mn=o.a.img(z||(z=Object(s.a)(["\n  border-radius: 50px;\n"]))),Pn=o.a.div(S||(S=Object(s.a)(["\n  padding: 0px;\n"]))),Dn=o.a.nav(C||(C=Object(s.a)(["\n  max-width: 1128px;\n  margin: auto;\n  padding: 12px 0 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n\n  & > a {\n    width: 135px;\n    height: 34px;\n\n    @media (max-width: 768px) {\n      padding: 0 5px;\n    }\n  }\n"]))),Bn=o.a.a(A||(A=Object(s.a)(["\n  font-size: 16px;\n  padding: 10px 12px;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.6);\n  margin-right: 12px;\n  border-radius: 4px;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.08);\n    color: rgba(0, 0, 0, 0.9);\n    text-decoration: none;\n  }\n"]))),Gn=o.a.a(I||(I=Object(s.a)(["\n  box-shadow: inset 0 0 0 1px #0a66c2;\n  color: #0a66c2;\n  border-radius: 24px;\n  transition-duration: 167ms;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 40px;\n  padding: 10px 24px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0);\n\n  &:hover {\n    background-color: rgba(112, 181, 249, 0.15);\n    color: #0a66c2;\n    text-decoration: none;\n  }\n"]))),Jn=o.a.section(R||(R=Object(s.a)(["\n  display: flex;\n  align-content: start;\n  min-height: 700px;\n  padding-bottom: 138px;\n  padding-top: 40px;\n  padding: 60px 0;\n  position: relative;\n  flex-wrap: wrap;\n  width: 100%;\n  max-width: 1128px;\n  align-items: center;\n  margin: auto;\n\n  @media (max-width: 768px) {\n    margin: auto;\n    min-height: 0px;\n  }\n"]))),Wn=o.a.div(L||(L=Object(s.a)(["\n  width: 100%;\n\n  h1 {\n    padding-bottom: 0;\n    padding-top: -20%;\n    width: 55%;\n    font-size: 56px;\n    color: #355326;\n    font-weight: 200;\n    line-height: 70px;\n    up: 80px;\n\n    @media (max-width: 768px) {\n      text-align: center;\n      font-size: 20px;\n      width: 100%;\n      line-height: 2;\n    }\n  }\n img {\n    width: 700px;\n    position: absolute;\n    \n    /* Additional styles */\n    @media (max-width: 768px) {\n      top: 230px;\n      width: initial;\n      position: initial;\n      height: initial;\n      right: auto; /* Reset to default */\n      left: 0; /* Align to the left on smaller screens */\n    }\n}\n\n  }\n"]))),Vn=o.a.div(N||(N=Object(s.a)(["\n  margin-top: 100px;\n  width: 408px;\n  padding-left: 90px;\n\n  @media (max-width: 768px) {\n    margin-top: 20px;\n  }\n"]))),_n=o.a.button(U||(U=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  align-items: center;\n  height: 56px;\n  width: 100%;\n  border-radius: 28px;\n  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),\n    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);\n  vertical-align: middle;\n  z-index: 0;\n  transition-duration: 167ms;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.6);\n\n  &:hover {\n    background-color: rgba(207, 207, 207, 0.25);\n    color: rgba(0, 0, 0, 0.75);\n  }\n"]))),Kn=Object(d.b)((function(n){return{user:n.userState.user}}),(function(n){return{signIn:function(){return n((function(n){p.signInWithPopup(h).then((function(e){n(w(e.user))})).catch((function(n){return alert(n.message)}))}))}}}))((function(n){return Object(Fn.jsxs)(Pn,{children:[n.user&&Object(Fn.jsx)(En.a,{to:"/home"}),Object(Fn.jsxs)(Dn,{children:[Object(Fn.jsx)("a",{href:"/",children:Object(Fn.jsx)(Mn,{src:"/images/login-logo.svg",alt:"",width:80})}),Object(Fn.jsxs)("div",{children:[Object(Fn.jsx)(Bn,{children:"Join Now"}),Object(Fn.jsx)(Gn,{children:"Sign In"})]})]}),Object(Fn.jsxs)(Jn,{children:[Object(Fn.jsxs)(Wn,{children:[Object(Fn.jsx)("h1",{children:"Welcome to MilJulKar"}),Object(Fn.jsx)("img",{src:"/images/login-hero.svg",alt:""})]}),Object(Fn.jsx)(Vn,{children:Object(Fn.jsxs)(_n,{onClick:function(){return n.signIn()},children:[Object(Fn.jsx)("img",{src:"/images/google.svg",alt:""}),"Sign in with Google"]})})]})]})})),Zn=t(34),qn=o.a.div(T||(T=Object(s.a)(["\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  left: 0;\n  padding: 0 24px;\n  top: 0;\n  position: fixed;\n  width: 100vw;\n  z-index: 100;\n"]))),Hn=o.a.div(E||(E=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  min-height: 100%;\n  max-width: 1128px;\n"]))),Xn=o.a.span(F||(F=Object(s.a)(["\n  margin-right: 8px;\n  font-size: 0px;\n"]))),Yn=o.a.div(M||(M=Object(s.a)(["\n  opacity: 1;\n  flex-grow: 1;\n  position: relative;\n\n  & > div {\n    max-width: 280px;\n\n    input {\n      border: none;\n      box-shadow: none;\n      background-color: #eef3f8;\n      border-radius: 2px;\n      color: rgba(0, 0, 0, 0.9);\n      width: 218px;\n      padding: 0 8px 0 40px;\n      line-height: 1.75;\n      font-weight: 400;\n      font-size: 14px;\n      height: 34px;\n      border-color: #dce6f1;\n      vertical-align: text-top;\n    }\n  }\n"]))),Qn=o.a.div(P||(P=Object(s.a)(["\n  width: 40px;\n  position: absolute;\n  z-index: 1;\n  top: 10px;\n  left: 2px;\n  border-radius: 0 2px 2px 0;\n  margin: 0;\n  pointer-events: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),$n=o.a.div(D||(D=Object(s.a)(["\n  margin-left: auto;\n  display: block;\n\n  @media (max-width: 768px) {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    background: white;\n    width: 100%;\n  }\n"]))),ne=o.a.ul(B||(B=Object(s.a)(['\n  display: flex;\n  flex-wrap: nowrap;\n  list-style-type: none;\n\n  .active {\n    span:after {\n      content: "";\n      transform: scaleX(1);\n      border-bottom: 2px solid var(--white, #fff);\n      bottom: 0;\n      left: 0;\n      position: absolute;\n      transition: transform 0.2s ease-in-out;\n      width: 100%;\n      border-color: rgba(0, 0, 0, 0.9);\n    }\n  }\n']))),ee=o.a.li(G||(G=Object(s.a)(["\n  display: flex;\n  align-items: center;\n\n  a {\n    align-items: center;\n    background: transparent;\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    font-weight: 400;\n    justify-content: center;\n    line-height: 1.5;\n    min-height: 42px;\n    min-width: 80px;\n    position: relative;\n    text-decoration: none;\n\n    span {\n      color: rgba(0, 0, 0, 0.6);\n      display: flex;\n      align-items: center;\n    }\n    @media (max-width: 768px) {\n      min-width: 70px;\n    }\n  }\n\n  &:hover,\n  &:active {\n    a {\n      span {\n        color: rgba(0, 0, 0, 0.9);\n      }\n    }\n  }\n"]))),te=o.a.div(J||(J=Object(s.a)(["\n  position: absolute;\n  top: 45px;\n  background: white;\n  border-radius: 0 0 5px 5px;\n  width: 100px;\n  height: 40px;\n  font-size: 16px;\n  transition-duration: 167ms;\n  text-align: center;\n  display: none;\n"]))),ie=Object(o.a)(ee)(W||(W=Object(s.a)(["\n  //borrow styled from Navlist\n\n  a > img {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n  }\n\n  span {\n    display: flex;\n    align-items: center;\n  }\n\n  &:hover {\n    "," {\n      align-items: center;\n      display: flex;\n      justify-content: center;\n    }\n  }\n"])),te),ae=Object(o.a)(ie)(V||(V=Object(s.a)(["\n  border-left: 1px solid rgba(0, 0, 0, 0.08);\n"]))),re=Object(d.b)((function(n){return{user:n.userState.user}}),(function(n){return{signOut:function(){return n((function(n){p.signOut().then((function(){n(w(null))})).catch((function(n){console.log(n.message)}))}))}}}))((function(n){return Object(Fn.jsx)(qn,{children:Object(Fn.jsxs)(Hn,{children:[Object(Fn.jsx)(Xn,{children:Object(Fn.jsx)("a",{href:"/home",children:Object(Fn.jsx)("img",{src:"/images/home-logo.svg",width:80})})}),Object(Fn.jsxs)(Yn,{children:[Object(Fn.jsx)("div",{children:Object(Fn.jsx)("input",{type:"text",placeholder:"Search for organizations"})}),Object(Fn.jsx)(Qn,{children:Object(Fn.jsx)("img",{src:"/images/search-icon.svg",alt:""})})]}),Object(Fn.jsx)($n,{children:Object(Fn.jsxs)(ne,{children:[Object(Fn.jsx)(ee,{className:"active",children:Object(Fn.jsxs)("a",{children:[Object(Fn.jsx)("img",{src:"/images/nav-home.svg",alt:" "}),Object(Fn.jsx)("span",{children:"Home"})]})}),Object(Fn.jsx)(ee,{children:Object(Fn.jsxs)("a",{children:[Object(Fn.jsx)("img",{src:"/images/nav-network.svg",alt:" "}),Object(Fn.jsx)("span",{children:"Connections"})]})}),Object(Fn.jsx)(ee,{children:Object(Fn.jsxs)("a",{children:[Object(Fn.jsx)("img",{src:"/images/nav-jobs.svg",alt:" "}),Object(Fn.jsx)("span",{children:"Volunteer"})]})}),Object(Fn.jsx)(ee,{children:Object(Fn.jsxs)("a",{children:[Object(Fn.jsx)("img",{src:"/images/nav-messaging.svg",alt:" "}),Object(Fn.jsx)("span",{children:"Messaging"})]})}),Object(Fn.jsx)(ee,{children:Object(Fn.jsxs)("a",{children:[Object(Fn.jsx)("img",{src:"/images/nav-notifications.svg",alt:" "}),Object(Fn.jsx)("span",{children:"Notifications"})]})}),Object(Fn.jsxs)(ie,{children:[Object(Fn.jsxs)("a",{children:[n.user&&n.user.photoURL?Object(Fn.jsx)("img",{src:n.user.photoURL,alt:""}):Object(Fn.jsx)("img",{src:"/images/user.svg",alt:""}),Object(Fn.jsxs)("span",{children:["Me",Object(Fn.jsx)("img",{src:"/images/down-icon.svg",alt:""})]})]}),Object(Fn.jsx)(te,{onClick:function(){return n.signOut()},children:Object(Fn.jsx)("a",{children:"Sign Out"})})]}),Object(Fn.jsx)(ae,{children:Object(Fn.jsxs)("a",{children:[Object(Fn.jsx)("img",{src:"/images/nav-work.svg",alt:""}),Object(Fn.jsxs)("span",{children:["My NGOs",Object(Fn.jsx)("img",{src:"/images/down-icon.svg",alt:""})]})]})})]})})]})})})),ce=o.a.div(_||(_=Object(s.a)(["\n  grid-area: leftside;\n"]))),se=o.a.div(K||(K=Object(s.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  transition: box-shadow 83ms;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n"]))),oe=o.a.div(Z||(Z=Object(s.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding: 12px 12px 16px;\n  word-wrap: break-word;\n  word-break: break-word;\n"]))),de=o.a.div(q||(q=Object(s.a)(['\n  background: url("/images/card-bg.svg");\n  background-position: center;\n  background-size: 462px;\n  height: 54px;\n  margin: -12px -12px 0;\n']))),le=o.a.div(H||(H=Object(s.a)(['\n  box-shadow: none;\n  background: url("/images/photo.svg");\n  width: 72px;\n  height: 72px;\n  box-sizing: border-box;\n  background-clip: content-box;\n  background-color: white;\n  background-position: center;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  border: 2px solid white;\n  margin: -38px auto 12px;\n  border-radius: 50%;\n']))),xe=o.a.div(X||(X=Object(s.a)(["\n  font-size: 16px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.9);\n  font-weight: 600;\n"]))),be=o.a.div(Y||(Y=Object(s.a)(["\n  color: #6d9775;\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 1.33;\n  font-weight: 400;\n"]))),je=o.a.div(Q||(Q=Object(s.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding-top: 12px;\n  padding-bottom: 12px;\n\n  & > a {\n    text-decoration: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 4px 12px;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.08);\n    }\n    div {\n      display: flex;\n      flex-direction: column;\n      text-align: left;\n      span {\n        font-size: 12px;\n        line-height: 1.333;\n        &:first-child {\n          color: rgba(0, 0, 0, 0.6);\n        }\n        &:nth-child(2) {\n          color: rgba(0, 0, 0, 1);\n        }\n      }\n    }\n  }\n  svg {\n    color: rgba(0, 0, 0, 1);\n  }\n"]))),ge=o.a.a($||($=Object(s.a)(["\n  border-color: rgba(0, 0, 0, 0.8);\n  text-align: left;\n  padding: 12px;\n  font-size: 12px;\n  display: block;\n\n  span {\n    display: flex;\n    align-items: center;\n    color: rgba(0, 0, 0, 1);\n\n    svg {\n      color: rgba(0, 0, 0, 0.6);\n    }\n  }\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.08);\n  }\n"]))),pe=Object(o.a)(se)(nn||(nn=Object(s.a)(["\n  padding: 8px 0 0;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  a {\n    color: black;\n    padding: 4px 12px 4px 12px;\n    font-size: 12px;\n\n    &:hover {\n      color: #0a66c2;\n    }\n\n    span {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    &:last-child {\n      color: rgba(0, 0, 0, 0.6);\n      text-decoration: none;\n      border-top: 1px solid #d6cec2;\n\n      padding: 12px;\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.08);\n      }\n    }\n  }\n"]))),he=Object(d.b)((function(n){return{user:n.userState.user}}))((function(n){return Object(Fn.jsxs)(ce,{children:[Object(Fn.jsxs)(se,{children:[Object(Fn.jsxs)(oe,{children:[Object(Fn.jsx)(de,{}),Object(Fn.jsxs)("a",{children:[Object(Fn.jsx)(le,{}),Object(Fn.jsxs)(xe,{children:["Welcome, ",n.user?n.user.displayName:"there","!"]})]}),Object(Fn.jsx)("a",{children:Object(Fn.jsx)(be,{children:"Add a Photo"})})]}),Object(Fn.jsx)(je,{children:Object(Fn.jsxs)("a",{children:[Object(Fn.jsxs)("div",{children:[Object(Fn.jsx)("span",{children:"Connections"}),Object(Fn.jsx)("span",{children:"Do good feel good"})]}),Object(Fn.jsx)("img",{src:"/images/widget-icon.svg",alt:""})]})}),Object(Fn.jsx)(ge,{children:Object(Fn.jsxs)("span",{children:[Object(Fn.jsx)("img",{src:"/images/item-icon.svg",alt:""}),"My Item"]})})]}),Object(Fn.jsxs)(pe,{children:[Object(Fn.jsx)("a",{children:Object(Fn.jsx)("span",{children:"Organizations"})}),Object(Fn.jsx)("a",{children:Object(Fn.jsxs)("span",{children:["Events",Object(Fn.jsx)("img",{src:"/images/plus-icon.svg"})]})}),Object(Fn.jsx)("a",{children:Object(Fn.jsx)("span",{children:"Follow Hashtags"})}),Object(Fn.jsx)("a",{children:Object(Fn.jsx)("span",{children:"Discover More"})})]})]})})),ue=t(25),me=t(30),Oe=t.n(me),fe=o.a.div(en||(en=Object(s.a)(["\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    z-index:9999;\n    color:black;\n    background-color:rgba(0,0,0,0.8);\n    animation:fadeIn 0.3s;\n"]))),ve=o.a.div(tn||(tn=Object(s.a)(["\n    width:100%;\n    max-width:552px;\n    background-color:white;\n    max-height:90%;\n    overflow:initial;\n    border-radius:5px;\n    position:relative;\n    display:flex;\n    flex-direction:column;\n    top:32px;\n    margin:0 auto;\n\n"]))),we=o.a.div(an||(an=Object(s.a)(["\ndisplay:block;\npadding:16px 20px;\nborder-bottom:1px solid rgba(0,0,0,0.15);\nfont-size:16px;\nline-height:1.5;\ncolor:rgba(0,0,0,0.6);\nfont-weight:400;\ndisplay:flex;\njustify-content:space-between;\nalign-items:center;\n\nbutton{\n    height:40px;\n    width:40px;\n    min-width:auto;\n    border:none;\n    background-color:white;\n    color:rgba(0,0,0,0.15);\n    svg,img{\n        pointer-events:none;\n    }\n}\n"]))),ye=o.a.div(rn||(rn=Object(s.a)(["\ndisplay:flex;\nflex-direction:column;\nflex-grow:1;\noverflow-y:auto;\nvertical-align:baseline;\nbackground:transparent;\npadding:8px 12px;\n"]))),ke=o.a.div(cn||(cn=Object(s.a)(["\n    display:flex;\n    align-items:center;\n    padding:12px 12px;\n    svg,img {\n        width:48px;\n        height:48px;\n        background-clip:content-box;\n        border:2px solid transparent;\n        border-radius:50%;\n    }\n    span{\n        font-size:16px;\n        font-weight:600;\n        line-height:1.5%;\n        margin-left:5px;\n    }\n"]))),ze=o.a.div(sn||(sn=Object(s.a)(["\ndisplay:flex;\njustify-content:space-between;\npadding:12px 24px 12px 16px;\n"]))),Se=o.a.button(on||(on=Object(s.a)(["\ndisplay:flex;\nalign-items:center;\nheight:40px;\nmin-width:auto;\ncolor:rgba(0,0,0,0.5);\nborder:none;\nbackground-color:white;\nimg{\n    margin-right:5px;\n}\n"]))),Ce=o.a.div(dn||(dn=Object(s.a)(["\ndisplay:flex;\nalign-items:center;\npadding-right:8px;\n\n","{\n    width:40px;\n\n}\n"])),Se),Ae=o.a.div(ln||(ln=Object(s.a)(["\n    padding-left:8px;\n    margin-right:auto;\n    border-left:1px solid rgba(0,0,0,0.15);\n    ","{\n        svg{\n            margin-right:5px;\n        }\n    }\n\n"])),Se),Ie=o.a.button(xn||(xn=Object(s.a)(["\n    min-width:60px;\n    border-radius:20px;\n    padding-left:16px;\n    padding-right:16px;\n    background:",";\n    color:",";\n    border:none;\n    background-color:white;\n  \n\n    &:hover{\n        background:",";\n    }\n"])),(function(n){return n.disabled?"rgba(0,0,0,0.08)":"#0a66c2"}),(function(n){return n.disabled?"rgba(1,1,1,0.2)":"grey"}),(function(n){return n.disabled?"rgba(0,0,0,0.08)":"#004182"})),Re=o.a.div(bn||(bn=Object(s.a)(["\n    padding:12px 24px;\n    textarea{\n        width:100%;\n        min-height:100px;\n        resize:none;\n    }\n    input{\n        width:100%;\n        height:35px;\n        font-size:16px;\n        margin-bottom:20px;\n\n    }\n"]))),Le=o.a.div(jn||(jn=Object(s.a)(["\n    text-align:center;\n    img{\n        width:100%;\n    }\n"]))),Ne=Object(d.b)((function(n){return{user:n.userState.user}}),(function(n){return{postArticle:function(e){return n(function(n){return function(e){if(e(y(!0)),""!=n.image){var t=u.ref("images/".concat(n.image.name)).put(n.image);t.on("state_changed",(function(n){var e=n.bytesTransferred/n.totalBytes*100;console.log("progress: ".concat(e,"%")),"RUNNING"===n.state&&console.log("progress: ".concat(e,"%"))}),(function(n){return console.log(n.code)}),Object(b.a)(x.a.mark((function i(){var a;return x.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.snapshot.ref.getDownloadURL();case 2:a=i.sent,m.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timestamp,image:n.user.photoURL},video:n.video,sharedImg:a,comments:0,description:n.description}),e(y(!1));case 5:case"end":return i.stop()}}),i)}))))}else n.video&&(m.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timestamp,image:n.user.photoURL},video:n.video,sharedImg:" ",comments:0,description:n.description}),e(y(!1)))}}(e))}}}))((function(n){var e=Object(i.useState)(" "),t=Object(ue.a)(e,2),a=t[0],r=t[1],c=Object(i.useState)(""),s=Object(ue.a)(c,2),o=s[0],d=s[1],l=Object(i.useState)(""),x=Object(ue.a)(l,2),b=x[0],g=x[1],p=Object(i.useState)(""),h=Object(ue.a)(p,2),u=h[0],m=h[1],O=function(n){d(""),g(""),m(n)},f=function(e){r(""),d(""),g(""),m(""),n.handleClick(e)};return Object(Fn.jsx)(Fn.Fragment,{children:"open"===n.showModal&&Object(Fn.jsx)(fe,{children:Object(Fn.jsxs)(ve,{children:[Object(Fn.jsxs)(we,{children:[Object(Fn.jsx)("h2",{children:"Create a Post"}),Object(Fn.jsx)("button",{onClick:function(n){return f(n)},children:Object(Fn.jsx)("img",{src:"/images/close-icon.svg",alt:""})})]}),Object(Fn.jsxs)(ye,{children:[Object(Fn.jsxs)(ke,{children:[n.user.photoURL?Object(Fn.jsx)("img",{src:n.user.photoURL,alt:""}):Object(Fn.jsx)("img",{src:"/images/user.svg",alt:""}),n.user.displayName?Object(Fn.jsx)("span",{children:n.user.displayName}):Object(Fn.jsx)("span",{children:"Name"})]}),Object(Fn.jsxs)(Re,{children:[Object(Fn.jsx)("textarea",{value:a,onChange:function(n){return r(n.target.value)},placeholder:"What do you want to talk about?",autoFocus:!0}),"image"===u?Object(Fn.jsxs)(Le,{children:[Object(Fn.jsx)("input",{type:"file",accept:"image/gif, image/jpeg ,image/png",name:"image",id:"file",style:{display:"none"},onChange:function(n){var e=n.target.files[0];""!==e&&void 0!==e?d(e):alert("not an image,the file is a ".concat(typeof e))}}),Object(Fn.jsx)("p",{children:Object(Fn.jsx)("label",{htmlFor:"file",children:"Select an image to share"})}),o&&Object(Fn.jsx)("img",{src:URL.createObjectURL(o)})]}):"media"===u&&Object(Fn.jsxs)(Fn.Fragment,{children:[Object(Fn.jsx)("input",{type:"text",placeholder:"Please input a video link",value:b,onChange:function(n){return g(n.target.value)}}),b&&Object(Fn.jsx)(Oe.a,{width:"100%",url:b})]})]})]}),Object(Fn.jsxs)(ze,{children:[Object(Fn.jsxs)(Ce,{children:[Object(Fn.jsx)(Se,{onClick:function(){return O("image")},children:Object(Fn.jsx)("img",{src:"/images/shared-image.svg",alt:""})}),Object(Fn.jsx)(Se,{onClick:function(){return O("media")},children:Object(Fn.jsx)("img",{src:"/images/shared-video.svg",alt:""})})]}),Object(Fn.jsx)(Ae,{children:Object(Fn.jsxs)(Se,{children:[Object(Fn.jsx)("img",{src:"/images/shared-comment.svg",alt:""}),"Anyone"]})}),Object(Fn.jsx)(Ie,{disabled:!a,onClick:function(e){return function(e){if(e.preventDefault(),e.target===e.currentTarget){var t={image:o,video:b,user:n.user,description:a,timestamp:j.a.firestore.Timestamp.now()};n.postArticle(t),f(e)}}(e)},children:"post"})]})]})})})})),Ue=o.a.div(gn||(gn=Object(s.a)(["\n  grid-area: main;\n"]))),Te=o.a.div(pn||(pn=Object(s.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/ 20%);\n"]))),Ee=Object(o.a)(Te)(hn||(hn=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #958b7b;\n  margin: 0 0 8px;\n  background: white;\n\n  div {\n    button {\n      outline: none;\n      color: #355326;\n      font-size: 14px;\n      line-height: 1.5;\n      min-height: 48px;\n      background: transparent;\n      border: none;\n      display: flex;\n      align-items: center;\n      font-weight: 600;\n    }\n    &:first-child {\n      display: flex;\n      align-items: center;\n      padding: 8px 16px 0px 16px;\n\n      img {\n        width: 48px;\n        border-radius: 50%;\n        margin-right: 8px;\n      }\n      button {\n        margin: 4px 0;\n        flex-grow: 1;\n        border-radius: 35px;\n        padding-left: 16px;\n        border: 1px solid rgba(0, 0, 0, 0.15);\n        background-color: white;\n        text-align: left;\n      }\n    }\n    &:nth-child(2) {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-around;\n      padding-bottom: 4px;\n\n      button {\n        img {\n          margin: o 4px 0 -2px;\n        }\n        span {\n          color: #6d9775;\n        }\n      }\n    }\n  }\n"]))),Fe=Object(o.a)(Te)(un||(un=Object(s.a)(["\n  padding: 0;\n  margin: 0 0 8px;\n  overflow: vissible;\n"]))),Me=o.a.div(mn||(mn=Object(s.a)(["\n  padding-right: 40px;\n  flex-wrap: nowrap;\n  padding: 12px 16px 0;\n  margin-bottom: 8px;\n  align-items: center;\n  display: flex;\n\n  a {\n    margin-right: 12px;\n    flex-grow: 1;\n    overflow: hidden;\n    display: flex;\n    text-decoration: none;\n\n    img {\n      width: 48px;\n      height: 48px;\n    }\n\n    & > div {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      flex-basis: 0;\n      margin-left: 8px;\n      overflow: hidden;\n\n      span {\n        text-align: left;\n        &:first-child {\n          font-size: 14px;\n          font-weight: 700;\n          color: rgba(0, 0, 0, 1);\n        }\n        &:nth-child(n + 1) {\n          font-size: 12px;\n          color: rgba(0, 0, 0, 0.6);\n        }\n      }\n    }\n  }\n  button {\n    position: absolute;\n    right: 12px;\n    top: 0;\n    background: transparent;\n    border: none;\n    outline: none;\n  }\n"]))),Pe=o.a.div(On||(On=Object(s.a)(["\n  padding: 0 16px;\n  overflow: hidden;\n  color: rgbs(0, 0, 0, 0.9);\n  font-size: 14px;\n  text-align: left;\n"]))),De=o.a.div(fn||(fn=Object(s.a)(["\n  margin-top: 8px;\n  width: 100%;\n  display: block;\n  position: relative;\n  background-color: #f9fafb;\n\n  img {\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n  }\n"]))),Be=o.a.ul(vn||(vn=Object(s.a)(["\n  line-height: 1.3;\n  display: flex;\n  align-items: flex-start;\n  overflow: auto;\n  margin: 0 16px;\n  padding: 8px 0;\n  border-bottom: 1px solid #e9e5df;\n  list-style: none;\n\n  li {\n    margin-right: 5px;\n    font-size: 12px;\n\n    button {\n      display: flex;\n      border: none;\n      background-color: white;\n    }\n  }\n"]))),Ge=o.a.div(wn||(wn=Object(s.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: flex-start;\n  margin: 0;\n  min-height: 40px;\n  padding: 4px 8px;\n  button {\n    display: inline-flex;\n    align-items: center;\n    padding: 8px;\n    color: #6d9775;\n    border: none;\n    background-color: white;\n\n    @media (min-width: 768px) {\n      span {\n        margin-left: 8px;\n      }\n    }\n  }\n"]))),Je=o.a.div(yn||(yn=Object(s.a)(["\n  text-align: center;\n\n  & > img {\n    width: 30px;\n  }\n"]))),We=Object(d.b)((function(n){return{loading:n.articleReducer.loading,user:n.userState.user,articles:n.articleReducer.articles}}),(function(n){return{getArticles:function(){return n(k())}}}))((function(n){var e=Object(i.useState)("close"),t=Object(ue.a)(e,2),a=t[0],r=t[1];Object(i.useEffect)((function(){n.getArticles()}),[]);var c=function(n){if(n.target===n.currentTarget)switch(a){case"open":r("close");break;case"close":r("open");break;default:r("close")}};return Object(Fn.jsx)(Fn.Fragment,{children:0===n.articles.length?Object(Fn.jsx)("p",{children:"There are no Articles"}):Object(Fn.jsxs)(Ue,{children:[Object(Fn.jsxs)(Ee,{children:[Object(Fn.jsxs)("div",{children:[n.user&&n.user.photoURL?Object(Fn.jsx)("img",{src:n.user.photoURL,alt:""}):Object(Fn.jsx)("img",{src:"/images/user.svg",alt:""}),Object(Fn.jsx)("button",{onClick:c,disabled:!!n.loading,children:"Start a post"})]}),Object(Fn.jsxs)("div",{children:[Object(Fn.jsxs)("button",{children:[Object(Fn.jsx)("img",{src:"/images/shared-image.svg",alt:"",style:{fill:"blue"}}),Object(Fn.jsx)("span",{children:"Photo"})]}),Object(Fn.jsxs)("button",{children:[Object(Fn.jsx)("img",{src:"/images/shared-video.svg",alt:""}),Object(Fn.jsx)("span",{children:"Video"})]}),Object(Fn.jsxs)("button",{children:[Object(Fn.jsx)("img",{src:"/images/event-icon.svg",alt:""}),Object(Fn.jsx)("span",{children:"Event"})]}),Object(Fn.jsxs)("button",{children:[Object(Fn.jsx)("img",{src:"/images/article-icon.svg",alt:""}),Object(Fn.jsx)("span",{children:"Write Article"})]})]})]}),Object(Fn.jsxs)(Je,{children:[n.loading&&Object(Fn.jsx)("img",{src:"./images/spin-loader.svg",alt:""}),n.articles.length>0&&n.articles.map((function(n,e){return Object(Fn.jsxs)(Fe,{children:[Object(Fn.jsxs)(Me,{children:[Object(Fn.jsxs)("a",{children:[n.actor.image?Object(Fn.jsx)("img",{src:n.actor.image,alt:""}):Object(Fn.jsx)("img",{src:"/images/user.svg",alt:""}),Object(Fn.jsxs)("div",{children:[Object(Fn.jsx)("span",{children:n.actor.title}),Object(Fn.jsx)("span",{children:n.actor.description}),Object(Fn.jsx)("span",{children:n.actor.date.toDate().toLocaleDateString()})]})]}),Object(Fn.jsx)("button",{children:Object(Fn.jsx)("img",{src:"/images/ellipsis.svg",alt:""})})]}),Object(Fn.jsx)(Pe,{children:n.description}),Object(Fn.jsx)(De,{children:Object(Fn.jsx)("a",{children:!n.sharedImg&&n.video?Object(Fn.jsx)(Oe.a,{width:"100%",url:n.video}):n.sharedImg&&Object(Fn.jsx)("img",{src:n.sharedImg,alt:""})})}),Object(Fn.jsxs)(Be,{children:[Object(Fn.jsx)("li",{children:Object(Fn.jsxs)("button",{children:[Object(Fn.jsx)("img",{src:"https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb",alt:""}),Object(Fn.jsx)("img",{src:"https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f",alt:""}),Object(Fn.jsx)("span",{children:"75"})]})}),Object(Fn.jsx)("li",{children:Object(Fn.jsx)("a",{children:n.comments})})]}),Object(Fn.jsxs)(Ge,{children:[Object(Fn.jsxs)("button",{children:[Object(Fn.jsx)("img",{src:"/images/like-icon.svg",alt:""}),Object(Fn.jsx)("span",{children:"Like"})]}),Object(Fn.jsxs)("button",{children:[Object(Fn.jsx)("img",{src:"/images/comment-icon.svg",alt:""}),Object(Fn.jsx)("span",{children:"Comments"})]}),Object(Fn.jsxs)("button",{children:[Object(Fn.jsx)("img",{src:"/images/share-icon.svg",alt:""}),Object(Fn.jsx)("span",{children:"Share"})]}),Object(Fn.jsxs)("button",{children:[Object(Fn.jsx)("img",{src:"/images/send-icon.svg",alt:""}),Object(Fn.jsx)("span",{children:"Sent"})]})]})]},e)}))]}),Object(Fn.jsx)(Ne,{showModal:a,handleClick:c})]})})})),Ve=o.a.div(kn||(kn=Object(s.a)(["\n  grid-area: rightside;\n"]))),_e=o.a.div(zn||(zn=Object(s.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n  padding: 12px;\n"]))),Ke=o.a.div(Sn||(Sn=Object(s.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.6);\n"]))),Ze=o.a.ul(Cn||(Cn=Object(s.a)(["\n  margin-top: 16px;\n  li {\n    display: flex;\n    align-items: center;\n    margin: 12px 0;\n    position: relative;\n    font-size: 14px;\n\n    & > div {\n      display: flex;\n      flex-direction: column;\n    }\n\n    button {\n      background-color: transparent;\n      color: rgba(0, 0, 0, 0.6);\n      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);\n      padding: 16px;\n      align-items: center;\n      border-radius: 15px;\n      box-sizing: border-box;\n      font-weight: 600;\n      display: inline-flex;\n      justify-content: center;\n      max-height: 32px;\n      max-width: 480px;\n      text-align: center;\n      outline: none;\n    }\n  }\n"]))),qe=o.a.div(An||(An=Object(s.a)(['\n  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 48px;\n  height: 48px;\n  margin-right: 8px;\n']))),He=o.a.a(In||(In=Object(s.a)(["\n  color: #6d9775;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n"]))),Xe=(Object(o.a)(_e)(Rn||(Rn=Object(s.a)(["\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),function(n){return Object(Fn.jsx)(Ve,{children:Object(Fn.jsxs)(_e,{children:[Object(Fn.jsxs)(Ke,{children:[Object(Fn.jsx)("h2",{children:"Add to your feed"}),Object(Fn.jsx)("img",{src:"/images/feed-icon.svg",alt:""})]}),Object(Fn.jsxs)(Ze,{children:[Object(Fn.jsxs)("li",{children:[Object(Fn.jsx)("a",{children:Object(Fn.jsx)(qe,{})}),Object(Fn.jsxs)("div",{children:[Object(Fn.jsx)("span",{children:"#MilJulKar"}),Object(Fn.jsx)("button",{children:"Follow"})]})]}),Object(Fn.jsxs)("li",{children:[Object(Fn.jsx)("a",{children:Object(Fn.jsx)(qe,{})}),Object(Fn.jsxs)("div",{children:[Object(Fn.jsx)("span",{children:"#Video"}),Object(Fn.jsx)("button",{children:"Follow"})]})]})]}),Object(Fn.jsxs)(He,{children:["View all Recommendation",Object(Fn.jsx)("img",{src:"/images/right-icon.svg",alt:""})]})]})})}),Ye=o.a.div(Ln||(Ln=Object(s.a)(["\n  padding-top: 52px;\n  max-width: 100%;\n"]))),Qe=(o.a.div(Nn||(Nn=Object(s.a)(["\n  max-width: 1128px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),o.a.section(Un||(Un=Object(s.a)(["\n  min-height: 50px;\n  box-sizing: content-box;\n  text-align: center;\n  text-decoration: underline;\n  display: flex;\n  justify-content: center;\n\n  h5 {\n    color: #6d9775;\n    font-size: 14px;\n    a {\n      font-weight: 700;\n    }\n  }\n\n  p {\n    font-size: 14px;\n    color: #434649;\n    font-weight: 600;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    padding: 0 5px;\n  }\n"])))),$e=o.a.div(Tn||(Tn=Object(s.a)(['\n  display: grid;\n  grid-template-areas: "leftside main rightside";\n  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);\n  column-gap: 25px;\n  row-gap: 25px;\n  // grid-template-rows:auto;\n  margin: 15px 0;\n\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    padding: 0 5px;\n  }\n']))),nt=Object(d.b)((function(n){return{user:n.userState.user}}))((function(n){return Object(Fn.jsxs)(Ye,{children:[!n.user&&Object(Fn.jsx)(En.a,{to:"/"}),Object(Fn.jsxs)(Qe,{children:[Object(Fn.jsx)("h5",{children:Object(Fn.jsx)("a",{children:"Want to volunteer? -"})}),Object(Fn.jsx)("p",{children:"Volunteer for a good cause and help the community."})]}),Object(Fn.jsxs)($e,{children:[Object(Fn.jsx)(he,{}),Object(Fn.jsx)(We,{}),Object(Fn.jsx)(Xe,{})]})]})}));var et=Object(d.b)((function(n){return{}}),(function(n){return{getUserAuth:function(){return n((function(n){p.onAuthStateChanged(function(){var e=Object(b.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&n(w(t));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}))}}}))((function(n){return Object(i.useEffect)((function(){n.getUserAuth()}),[]),Object(Fn.jsx)("div",{className:"App",children:Object(Fn.jsx)(Zn.a,{children:Object(Fn.jsxs)(En.d,{children:[Object(Fn.jsx)(En.b,{exact:!0,path:"/",children:Object(Fn.jsx)(Kn,{})}),Object(Fn.jsxs)(En.b,{path:"/home",children:[Object(Fn.jsx)(re,{}),Object(Fn.jsx)(nt,{})]})]})})})})),tt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,88)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),i(n),a(n),r(n),c(n)}))},it=t(27),at=t(47),rt=t(20),ct={user:null},st=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(rt.a)(Object(rt.a)({},n),{},{user:e.user});default:return n}},ot={articles:[],loading:!1},dt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(rt.a)(Object(rt.a)({},n),{},{articles:e.payload});case f:return Object(rt.a)(Object(rt.a)({},n),{},{loading:e.status});default:return n}},lt=Object(it.b)({userState:st,articleReducer:dt}),xt=Object(it.c)(lt,Object(it.a)(at.a));c.a.render(Object(Fn.jsx)(a.a.StrictMode,{children:Object(Fn.jsx)(d.a,{store:xt,children:Object(Fn.jsx)(et,{})})}),document.getElementById("root")),tt()}},[[87,1,2]]]);
//# sourceMappingURL=main.8a5940b8.chunk.js.map