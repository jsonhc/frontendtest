(()=>{"use strict";var e={368:(e,a,t)=>{var o=t(751),n=t(641),s=t(953),l=t(220);const r={class:"container"},i={class:"d-flex justify-content-center py-3"},u={class:"nav nav-pills"},c={class:"nav-item"},d={class:"nav-item"},k={class:"nav-item"},m={class:"nav-item"},v={class:"nav-item"},p={class:"nav-item"},h={key:0,class:"nav-item"},b={class:"nav-item"},g={class:"nav-item"},f={class:"nav-item"},L={class:"nav-item"},w={class:"nav-item"};function y(e,a,t,o,s,l){const y=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("header",i,[(0,n.Lk)("ul",u,[(0,n.Lk)("li",c,[(0,n.bF)(y,{to:"/",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("Home")])),_:1})]),(0,n.Lk)("li",d,[(0,n.bF)(y,{to:"/about",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("About")])),_:1})]),(0,n.Lk)("li",k,[(0,n.bF)(y,{to:"/addbook",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("Add Book")])),_:1})]),(0,n.Lk)("li",m,[(0,n.bF)(y,{to:"/GetBookCount",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("Get Book Count")])),_:1})]),(0,n.Lk)("li",v,[(0,n.bF)(y,{to:"/AddBookCloundFunction",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("Get Book Clound Count")])),_:1})]),(0,n.Lk)("li",p,[(0,n.bF)(y,{to:"/login",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("Login")])),_:1})]),s.loginStatus?((0,n.uX)(),(0,n.CE)("li",h,[(0,n.Lk)("button",{onClick:a[0]||(a[0]=(...e)=>l.performLogout&&l.performLogout(...e)),class:"btn btn-link nav-link"},"Logout")])):(0,n.Q3)("",!0),(0,n.Lk)("li",b,[(0,n.bF)(y,{to:"/FireLogin",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("Firebase Login")])),_:1})]),(0,n.Lk)("li",g,[(0,n.bF)(y,{to:"/FireRegister",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("Firebase Register")])),_:1})]),(0,n.Lk)("li",f,[(0,n.bF)(y,{to:"/WeatherCheck",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("Get Weather")])),_:1})]),(0,n.Lk)("li",L,[(0,n.bF)(y,{to:"/CountBookAPI",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("Count Book API")])),_:1})]),(0,n.Lk)("li",w,[(0,n.bF)(y,{to:"/GetAllBookAPI",class:"nav-link","active-class":"active"},{default:(0,n.k6)((()=>[(0,n.eW)("Get All Book API")])),_:1})])])])])}var C=t(278);const A={data(){return{loginStatus:!1}},computed:{...(0,C.aH)(["isAuthenticated"])},methods:{...(0,C.i0)(["logout"]),performLogout(){this.logout(),this.$router.push({name:"Login"})}},mounted(){const e=sessionStorage.getItem("token");this.loginStatus=!!e}};var B=t(262);const _=(0,B.A)(A,[["render",y]]),E=_,F=e=>((0,n.Qi)("data-v-080df58e"),e=e(),(0,n.jt)(),e),P={class:"main-container"},S={key:0},I={key:1},X=F((()=>(0,n.Lk)("p",null,"User is logged in",-1))),U=[X],x={class:"main-box"},D={__name:"App",setup(e){const a=(0,s.KR)(!1),t=(0,l.lq)(),o=(0,n.EW)((()=>"CountBookAPI"!==t.name));return(0,n.wB)((()=>t.name),(e=>{if(e){const e=sessionStorage.getItem("token");a.value=!!e}}),{immediate:!0}),(e,t)=>{const s=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",P,[o.value?((0,n.uX)(),(0,n.CE)("header",S,[(0,n.bF)(E)])):(0,n.Q3)("",!0),a.value?((0,n.uX)(),(0,n.CE)("header",I,U)):(0,n.Q3)("",!0),(0,n.Lk)("main",x,[(0,n.bF)(s)])])}}},R=(0,B.A)(D,[["__scopeId","data-v-080df58e"]]),W=R;var V=t(33);const j=e=>((0,n.Qi)("data-v-799b3640"),e=e(),(0,n.jt)(),e),J={class:"container mt-5"},Q={class:"row"},G={class:"col-md-8 offset-md-2"},K=j((()=>(0,n.Lk)("h1",{class:"text-center"},"🗄️ W5.Library Registration Form",-1))),O={class:"row mb-3"},q={class:"col-md-6"},$=j((()=>(0,n.Lk)("label",{for:"username",class:"form-label"},"Username",-1))),N={key:0,class:"text-danger"},H={class:"col-md-6"},M=j((()=>(0,n.Lk)("label",{for:"gender",class:"form-label"},"Gender",-1))),T=j((()=>(0,n.Lk)("option",{value:""},"Select Gender",-1))),z=j((()=>(0,n.Lk)("option",{value:"male"},"Male",-1))),Z=j((()=>(0,n.Lk)("option",{value:"female"},"Female",-1))),Y=j((()=>(0,n.Lk)("option",{value:"other"},"Other",-1))),ee=[T,z,Z,Y],ae={key:0,class:"text-danger"},te={class:"col-md-6"},oe=j((()=>(0,n.Lk)("label",{for:"password",class:"form-label"},"Password",-1))),ne={key:0,class:"text-danger"},se={class:"col-md-6"},le=j((()=>(0,n.Lk)("label",{for:"confirm-password",class:"form-label"},"Confirm password",-1))),re={key:0,class:"text-danger"},ie={class:"row mb-3"},ue={class:"col-md-6"},ce={class:"form-check"},de=j((()=>(0,n.Lk)("label",{class:"form-check-label",for:"isAustralian"},"Australian Resident?",-1))),ke={key:0,class:"text-danger"},me={class:"mb-3"},ve=j((()=>(0,n.Lk)("label",{for:"reason",class:"form-label"},"Reason for joining",-1))),pe={key:0,class:"text-danger"},he={key:1,class:"text-success"},be={class:"mb-3"},ge=j((()=>(0,n.Lk)("label",{for:"reason",class:"form-label"},"Suburb",-1))),fe=["value"],Le=j((()=>(0,n.Lk)("button",{type:"submit",class:"btn btn-primary me-2"},"Submit",-1))),we={class:"row mt-5"},ye={class:"d-flex flex-wrap justify-content-start"},Ce=(0,n.Fv)('<div class="card-header" data-v-799b3640><div class="header_item" data-v-799b3640>Username</div><div class="header_item" data-v-799b3640>Password</div><div class="header_item" data-v-799b3640>Australian Resident</div><div class="header_item" data-v-799b3640>Gender</div><div class="header_item" data-v-799b3640>Reason</div></div>',1),Ae={class:"content-group"},Be={class:"content-group-item"},_e={class:"content-group-item"},Ee={class:"content-group-item"},Fe={class:"content-group-item"},Pe={class:"content-group-item"},Se={__name:"HomeView",setup(e){const a=(0,s.KR)({username:"",password:"",confirmPassword:"",isAustralian:!1,reason:"",gender:"",suburb:"Clayton"}),t=e=>{a.value.password!==a.value.confirmPassword?e&&(d.value.confirmPassword="Passwords do not match."):d.value.confirmPassword=null},l=(0,s.KR)([]),r=(0,s.KR)(!1),i=(0,s.KR)(!1),u=()=>{k(!0),m(!0),v(!0),p(!0),h(!1),d.value.username||d.value.password||d.value.gender||d.value.reason||d.value.gender||(l.value.push({...a.value}),r.value=!0,c())},c=()=>{a.value={username:"",password:"",isAustralian:!1,reason:"",gender:""}},d=(0,s.KR)({username:null,password:null,comfirmPassword:null,resident:null,gender:null,reason:null}),k=e=>{a.value.username.length<3?e&&(d.value.username="Name must be at least 3 characters"):d.value.username=null},m=e=>{const t=a.value.password,o=8,n=/[A-Z]/.test(t),s=/[a-z]/.test(t),l=/\d/.test(t),r=/["!@#$%^&*(),.?":{}|<>]/.test(t);t.length<o?e&&(d.value.password=`Password must be at least ${o} characters long.`):n?s?l?r?d.value.password=null:e&&(d.value.password="Password must contain at least one special character."):e&&(d.value.password="Password must contain at least one number."):e&&(d.value.password="Password must contain at least one lowcase letter."):e&&(d.value.password="Password must contain at least one uppercase letter.")},v=e=>{a.value.gender?d.value.gender=null:e&&(d.value.gender="Please select a gender.")},p=e=>{a.value.isAustralian?d.value.resident=null:e&&(d.value.resident="Please comfirm if you are an Australian resident.")},h=e=>{const t=a.value.reason.trim();t?t.length<10?e&&(d.value.reason="Reason must be at least 10 characters long.",i.value=!1):(d.value.reason=null,i.value=!0):e&&(d.value.reason="Please provide a reason for joining.",i.value=!1)};return(e,s)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",J,[(0,n.Lk)("div",Q,[(0,n.Lk)("div",G,[K,(0,n.Lk)("form",{onSubmit:(0,o.D$)(u,["prevent"])},[(0,n.Lk)("div",O,[(0,n.Lk)("div",q,[$,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control",id:"username",onBlur:s[0]||(s[0]=()=>k(!0)),onInput:s[1]||(s[1]=()=>k(!1)),"onUpdate:modelValue":s[2]||(s[2]=e=>a.value.username=e)},null,544),[[o.Jo,a.value.username]]),d.value.username?((0,n.uX)(),(0,n.CE)("div",N,(0,V.v_)(d.value.username),1)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",H,[M,(0,n.bo)((0,n.Lk)("select",{class:"form-select",id:"gender","onUpdate:modelValue":s[3]||(s[3]=e=>a.value.gender=e)},ee,512),[[o.u1,a.value.gender]]),d.value.gender?((0,n.uX)(),(0,n.CE)("div",ae,(0,V.v_)(d.value.gender),1)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",te,[oe,(0,n.bo)((0,n.Lk)("input",{type:"password",class:"form-control",id:"password",onBlur:s[4]||(s[4]=()=>m(!0)),onInput:s[5]||(s[5]=()=>m(!1)),"onUpdate:modelValue":s[6]||(s[6]=e=>a.value.password=e)},null,544),[[o.Jo,a.value.password]]),d.value.confirmPassword?((0,n.uX)(),(0,n.CE)("div",ne,(0,V.v_)(d.value.confirmPassword),1)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",se,[le,(0,n.bo)((0,n.Lk)("input",{type:"password",class:"form-control",id:"confirm-password","onUpdate:modelValue":s[7]||(s[7]=e=>a.value.confirmPassword=e),onBlur:s[8]||(s[8]=()=>t(!0))},null,544),[[o.Jo,a.value.confirmPassword]]),d.value.confirmPassword?((0,n.uX)(),(0,n.CE)("div",re,(0,V.v_)(d.value.confirmPassword),1)):(0,n.Q3)("",!0)])]),(0,n.Lk)("div",ie,[(0,n.Lk)("div",ue,[(0,n.Lk)("div",ce,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox",class:"form-check-input",id:"isAustralian","onUpdate:modelValue":s[9]||(s[9]=e=>a.value.isAustralian=e),onBlur:s[10]||(s[10]=()=>p(!0))},null,544),[[o.lH,a.value.isAustralian]]),de,d.value.resident?((0,n.uX)(),(0,n.CE)("div",ke,(0,V.v_)(d.value.resident),1)):(0,n.Q3)("",!0)])])]),(0,n.Lk)("div",me,[ve,(0,n.bo)((0,n.Lk)("textarea",{class:"form-control",id:"reason",rows:"3","onUpdate:modelValue":s[11]||(s[11]=e=>a.value.reason=e),onBlur:s[12]||(s[12]=()=>h(!0))},null,544),[[o.Jo,a.value.reason]]),d.value.reason?((0,n.uX)(),(0,n.CE)("div",pe,(0,V.v_)(d.value.reason),1)):(0,n.Q3)("",!0),i.value?((0,n.uX)(),(0,n.CE)("div",he," Great to have a friend ")):(0,n.Q3)("",!0)]),(0,n.Lk)("div",be,[ge,(0,n.Lk)("input",{type:"text",class:"form-control",id:"suburb",value:a.value.suburb},null,8,fe)]),(0,n.Lk)("div",{class:"text-center"},[Le,(0,n.Lk)("button",{type:"button",class:"btn btn-secondary",onClick:c},"Clear")])],32)])])]),(0,n.Lk)("div",we,[(0,n.Lk)("div",ye,[Ce,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.value,((e,a)=>((0,n.uX)(),(0,n.CE)("div",{key:a,class:"content m-2"},[(0,n.Lk)("ul",Ae,[(0,n.Lk)("li",Be,(0,V.v_)(e.username),1),(0,n.Lk)("li",_e,(0,V.v_)(e.password),1),(0,n.Lk)("li",Ee,(0,V.v_)(e.isAustralian?"true":"false"),1),(0,n.Lk)("li",Fe,(0,V.v_)(e.gender),1),(0,n.Lk)("li",Pe,(0,V.v_)(e.reason),1)])])))),128))])])],64))}},Ie=(0,B.A)(Se,[["__scopeId","data-v-799b3640"]]),Xe=Ie,Ue={class:"about"},xe=(0,n.Lk)("h1",null,"About Our Library",-1),De=(0,n.Lk)("p",null,"Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.",-1),Re=[xe,De],We={__name:"AboutView",setup(e){return(e,a)=>((0,n.uX)(),(0,n.CE)("div",Ue,Re))}},Ve=We,je=Ve,Je=e=>((0,n.Qi)("data-v-27d0fabf"),e=e(),(0,n.jt)(),e),Qe=Je((()=>(0,n.Lk)("h2",null," Login",-1))),Ge={key:0,class:"msg"},Ke=Je((()=>(0,n.Lk)("label",{for:"username"},"Username:",-1))),Oe=Je((()=>(0,n.Lk)("label",{for:"password"},"Password:",-1))),qe=Je((()=>(0,n.Lk)("button",{type:"submit"},"Login",-1)));function $e(e,a,t,s,l,r){return(0,n.uX)(),(0,n.CE)("div",null,[Qe,l.loginStatus?((0,n.uX)(),(0,n.CE)("h3",Ge,"Login Failed, Wrong Username or Password")):(0,n.Q3)("",!0),(0,n.Lk)("form",{onSubmit:a[2]||(a[2]=(0,o.D$)(((...e)=>r.handleLogin&&r.handleLogin(...e)),["prevent"]))},[(0,n.Lk)("div",null,[Ke,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>l.username=e),required:""},null,512),[[o.Jo,l.username]])]),(0,n.Lk)("div",null,[Oe,(0,n.bo)((0,n.Lk)("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=e=>l.password=e),required:""},null,512),[[o.Jo,l.password]])]),qe],32)])}const Ne={data(){return{username:"",password:"",loginStatus:!1}},methods:{...(0,C.i0)(["login"]),async handleLogin(){const e={username:this.username,password:this.password},a=await this.login(e);console.log(a,"res"),200==a.code?(this.loginStatus=!1,sessionStorage.setItem("token",a.data.token),this.$router.push({name:"Home"})):this.loginStatus=!0}}},He=(0,B.A)(Ne,[["render",$e],["__scopeId","data-v-27d0fabf"]]),Me=He;var Te=t(37);const ze=(0,n.Lk)("h1",null,"Sign In",-1),Ze={__name:"FirebaseSigninView",setup(e){const a=(0,s.KR)(""),t=(0,s.KR)(""),r=(0,l.rd)(),i=(0,Te.xI)(),u=async()=>{try{const e=await(0,Te.x9)(i,a.value,t.value);console.log("Firebase Sign-in Successful!",e.user),sessionStorage.setItem("token",e.user.accessToken),r.push("/")}catch(e){console.error("Error during sign-in:",e.message)}};return(e,s)=>((0,n.uX)(),(0,n.CE)("div",null,[ze,(0,n.bo)((0,n.Lk)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":s[0]||(s[0]=e=>a.value=e)},null,512),[[o.Jo,a.value]]),(0,n.bo)((0,n.Lk)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=e=>t.value=e)},null,512),[[o.Jo,t.value]]),(0,n.Lk)("button",{onClick:u},"Sign In")]))}},Ye=Ze,ea=Ye,aa=(0,n.Lk)("h1",null,"Create an Account",-1),ta={__name:"FirebaseRegisterView",setup(e){const a=(0,s.KR)(""),t=(0,s.KR)(""),r=(0,l.rd)(),i=(0,Te.xI)(),u=()=>{(0,Te.eJ)(i,a.value,t.value).then((e=>{console.log("Firebase Register Successful!",e),r.push("/FireLogin")})).catch((e=>{console.error("Error during registration:",e.message)}))};return(e,s)=>((0,n.uX)(),(0,n.CE)("div",null,[aa,(0,n.bo)((0,n.Lk)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":s[0]||(s[0]=e=>a.value=e)},null,512),[[o.Jo,a.value]]),(0,n.bo)((0,n.Lk)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=e=>t.value=e)},null,512),[[o.Jo,t.value]]),(0,n.Lk)("button",{onClick:u},"Register")]))}},oa=ta,na=oa,sa=(0,n.Lk)("h1",null,"Add Book",-1),la=(0,n.Lk)("label",{for:"isbn"},"ISBN:",-1),ra=(0,n.Lk)("label",{for:"name"},"Name:",-1),ia=(0,n.Lk)("button",{type:"submit"},"Add Book",-1);function ua(e,a,t,s,l,r){const i=(0,n.g2)("book-list");return(0,n.uX)(),(0,n.CE)("div",null,[sa,(0,n.Lk)("form",{onSubmit:a[2]||(a[2]=(0,o.D$)(((...e)=>s.addBook&&s.addBook(...e)),["prevent"]))},[(0,n.Lk)("div",null,[la,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>s.isbn=e),id:"isbn",required:""},null,512),[[o.Jo,s.isbn]])]),(0,n.Lk)("div",null,[ra,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>s.name=e),id:"name",required:""},null,512),[[o.Jo,s.name]])]),ia],32),(0,n.bF)(i)])}var ca=t(223),da=t(884);const ka={apiKey:"AIzaSyD-Zhl0wK5s6SZtdH7IaSlNdlKwzaq_0tQ",authDomain:"week7-ziqipei.firebaseapp.com",projectId:"week7-ziqipei",storageBucket:"week7-ziqipei.appspot.com",messagingSenderId:"477632597998",appId:"1:477632597998:web:6d5684d3d95ff74dd648ff"};(0,ca.Wp)(ka);const ma=(0,da.aU)(),va=ma,pa={class:"list-container"},ha=(0,n.Lk)("h1",null,"Book with ISBN > 1000",-1),ba=["onUpdate:modelValue"],ga=["onUpdate:modelValue"],fa=["onClick"],La=["onClick"];function wa(e,a,t,s,l,r){return(0,n.uX)(),(0,n.CE)("div",pa,[ha,(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.books,(e=>((0,n.uX)(),(0,n.CE)("li",{class:"list-item",key:e.id},[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":a=>e.name=a,placeholder:"Enter book name"},null,8,ba),[[o.Jo,e.name]]),(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":a=>e.isbn=a,placeholder:"Enter ISBN"},null,8,ga),[[o.Jo,e.isbn,void 0,{number:!0}]]),(0,n.Lk)("button",{onClick:a=>s.updateBook(e.id,e.name,e.isbn)},"Save",8,fa),(0,n.Lk)("button",{onClick:a=>s.deleteBook(e.id)},"Delete",8,La)])))),128))])])}const ya={setup(){const e=(0,s.KR)([]),a=async()=>{const a=(0,da.P)((0,da.rJ)(va,"books"),(0,da._M)("isbn",">",1e3),(0,da.My)("isbn","desc"),(0,da.AB)(5)),t=await(0,da.GG)(a);e.value=t.docs.map((e=>{const a=e.data();return{id:e.id,name:a.name||"Unnamed",isbn:a.isbn||0}})),console.log("Books loaded:",e.value)},t=async(e,t,o)=>{const n=(0,da.H9)(va,"books",e);try{const s=await(0,da.x7)(n);if(s.exists()){const l=s.data();await(0,da.mZ)(n,{name:t||l.name,isbn:o?Number(o):l.isbn}),console.log("Document updated with ID:",e),await a()}else console.log("No such document!")}catch(s){console.error("Error updating document: ",s)}},o=async e=>{const t=(0,da.H9)(va,"books",e);try{await(0,da.kd)(t),console.log("Document deleted with ID:",e),await a()}catch(o){console.error("Error removing document: ",o)}};return(0,n.sV)(a),{books:e,updateBook:t,deleteBook:o}}},Ca=(0,B.A)(ya,[["render",wa]]),Aa=Ca,Ba={setup(){const e=(0,s.KR)(""),a=(0,s.KR)(""),t=async()=>{try{const t=Number(e.value);if(isNaN(t))return void alert("ISBN must be a valid number");await(0,da.gS)((0,da.rJ)(va,"books"),{isbn:t,name:a.value}),e.value="",a.value="",alert("Book added successfully !")}catch(t){console.error("Error adding book: ",t)}};return{isbn:e,name:a,addBook:t}},components:{BookList:Aa}},_a=(0,B.A)(Ba,[["render",ua]]),Ea=_a,Fa={id:"app"},Pa=(0,n.Lk)("h1",null," Book Counter",-1),Sa={key:0},Ia={key:1};function Xa(e,a,t,o,s,l){return(0,n.uX)(),(0,n.CE)("div",Fa,[Pa,(0,n.Lk)("button",{onClick:a[0]||(a[0]=(...e)=>l.getBookCount&&l.getBookCount(...e))},"Get Book Count"),null!==s.count?((0,n.uX)(),(0,n.CE)("p",Sa,"Total number of books:"+(0,V.v_)(s.count),1)):(0,n.Q3)("",!0),s.error?((0,n.uX)(),(0,n.CE)("p",Ia,(0,V.v_)(s.error),1)):(0,n.Q3)("",!0)])}var Ua=t(335);const xa={data(){return{count:null,error:null}},methods:{async getBookCount(){try{const e=await Ua.A.get("https://countbooks-kkfr2aoqna-uc.a.run.app");this.count=e.data.count,this.error=null}catch(e){console.error("Error fetching book count:",e),this.error=e,this.count=null}}}},Da=(0,B.A)(xa,[["render",Xa]]),Ra=Da,Wa={id:"app"},Va=(0,n.Lk)("h1",null,"Add Book",-1),ja=(0,n.Lk)("label",{for:"title"},"Book Title:",-1),Ja=(0,n.Lk)("label",{for:"author"},"Author:",-1),Qa=(0,n.Lk)("button",{type:"submit"},"Add Book",-1),Ga={key:0},Ka={key:1},Oa={key:2};function qa(e,a,t,s,l,r){return(0,n.uX)(),(0,n.CE)("div",Wa,[Va,(0,n.Lk)("form",{onSubmit:a[2]||(a[2]=(0,o.D$)(((...e)=>r.addBook&&r.addBook(...e)),["prevent"]))},[ja,(0,n.bo)((0,n.Lk)("input",{id:"title","onUpdate:modelValue":a[0]||(a[0]=e=>l.newBook.title=e),placeholder:"Enter book title",required:""},null,512),[[o.Jo,l.newBook.title]]),Ja,(0,n.bo)((0,n.Lk)("input",{id:"author","onUpdate:modelValue":a[1]||(a[1]=e=>l.newBook.author=e),placeholder:"Enter author's name",required:""},null,512),[[o.Jo,l.newBook.author]]),Qa],32),l.successMessage?((0,n.uX)(),(0,n.CE)("p",Ga,(0,V.v_)(l.successMessage),1)):(0,n.Q3)("",!0),l.bookDetails?((0,n.uX)(),(0,n.CE)("p",Ka,"Added Book - ID: "+(0,V.v_)(l.bookDetails.id)+", Title: "+(0,V.v_)(l.bookDetails.title)+", Author: "+(0,V.v_)(l.bookDetails.author),1)):(0,n.Q3)("",!0),l.error?((0,n.uX)(),(0,n.CE)("p",Oa,(0,V.v_)(l.error),1)):(0,n.Q3)("",!0)])}const $a={data(){return{newBook:{title:"",author:""},bookDetails:null,successMessage:null,error:null}},methods:{async addBook(){try{const e=await Ua.A.post("https://addbook-kkfr2aoqna-uc.a.run.app",{title:this.newBook.title.toUpperCase(),author:this.newBook.author.toUpperCase()},{headers:{"Content-Type":"application/json"}});this.successMessage="Book added successfully: "+e.data.message,this.bookDetails={id:e.data.id,title:e.data.title,author:e.data.author},this.newBook={title:"",author:""},this.error=null}catch(e){console.error("Error adding book:",e),this.error="Failed to add book",this.successMessage=null}}}},Na=(0,B.A)($a,[["render",qa]]),Ha=Na,Ma=e=>((0,n.Qi)("data-v-3ef3a3e8"),e=e(),(0,n.jt)(),e),Ta={class:"container"},za={class:"header"},Za=Ma((()=>(0,n.Lk)("h1",null,"WEATHER APP",-1))),Ya={class:"search-bar"},et={key:0},at=["src"],tt={key:1},ot=Ma((()=>(0,n.Lk)("p",null,"No weather data available. Please try again.",-1))),nt=[ot];function st(e,a,t,s,l,r){return(0,n.uX)(),(0,n.CE)("div",Ta,[(0,n.Lk)("div",za,[Za,(0,n.Lk)("div",Ya,[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>l.city=e),placeholder:"Enter city name",class:"search-input"},null,512),[[o.Jo,l.city]]),(0,n.Lk)("button",{onClick:a[1]||(a[1]=(...e)=>r.searchByCity&&r.searchByCity(...e)),class:"search-button"},"Search")])]),(0,n.Lk)("main",null,[l.weatherData?((0,n.uX)(),(0,n.CE)("div",et,[(0,n.Lk)("h2",null,(0,V.v_)(l.weatherData.name)+", "+(0,V.v_)(l.weatherData.sys.country),1),(0,n.Lk)("div",null,[(0,n.Lk)("img",{src:r.iconUrl,alt:"Weather Icon"},null,8,at),(0,n.Lk)("p",null,(0,V.v_)(r.temperature)+" °C",1)]),(0,n.Lk)("span",null,(0,V.v_)(l.weatherData.weather[0].description),1)])):((0,n.uX)(),(0,n.CE)("div",tt,nt))])])}const lt="c51107192474bc4ebed3db2c821f061e",rt={name:"App",data(){return{city:"",weatherData:null,hourlyForecast:[],dailyForecast:[]}},computed:{temperature(){return this.weatherData?Math.floor(this.weatherData.main.temp-273.15):null},iconUrl(){return this.weatherData?`https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`:null}},mounted(){this.fetchCurrentLocationWeather()},methods:{async fetchCurrentLocationWeather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((async e=>{const{latitude:a,longitude:t}=e.coords,o=`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${t}&appid=${lt}`;await this.fetchWeatherData(o)}))},async fetchWeatherData(e){try{const a=await Ua.A.get(e);this.weatherData=a.data}catch(a){console.error("Error fetching weather data:",a)}},async searchByCity(){if(this.city){const e=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${lt}`;await this.fetchWeatherData(e)}}}},it=(0,B.A)(rt,[["render",st],["__scopeId","data-v-3ef3a3e8"]]),ut=it;function ct(e,a,t,o,s,l){return(0,n.uX)(),(0,n.CE)("pre",null,(0,V.v_)(s.jsondata),1)}const dt={data(){return{jsondata:null,error:null}},mounted(){this.getBookCountAPI()},methods:{async getBookCountAPI(){try{const e=await Ua.A.get("https://countbooks-kkfr2aoqna-uc.a.run.app");this.jsondata=e.data,console.log("Response:",this.jsondata),this.error=null}catch(e){console.error("Error fetching book count:",e),this.error=e,this.count=null}}}},kt=(0,B.A)(dt,[["render",ct]]),mt=kt,vt=(0,n.Lk)("h1",null,"All Books in JSON Format",-1),pt={key:0};function ht(e,a,t,o,s,l){return(0,n.uX)(),(0,n.CE)("div",null,[vt,(0,n.Lk)("pre",null,(0,V.v_)(s.jsondata),1),s.error?((0,n.uX)(),(0,n.CE)("p",pt,(0,V.v_)(s.error),1)):(0,n.Q3)("",!0)])}const bt={data(){return{jsondata:null,error:null}},mounted(){this.getBookData()},methods:{async getBookData(){try{const e=await(0,da.GG)((0,da.rJ)(va,"books")),a=[];e.forEach((e=>{a.push({id:e.id,...e.data()})})),this.jsondata=a}catch(e){console.error("Error fetching books data:",e),this.error="Failed to load book data"}}}},gt=(0,B.A)(bt,[["render",ht]]),ft=gt,Lt=[{path:"/GetBookCount",name:"GetBookCount",component:Ra},{path:"/AddBookCloundFunction",name:"AddBookCloundFunction",component:Ha},{path:"/",name:"Home",component:Xe},{path:"/about",name:"About",component:je},{path:"/addbook",name:"AddBook",component:Ea},{path:"/login",name:"Login",component:Me},{path:"/FireLogin",name:"FireLogin",component:ea},{path:"/FireRegister",name:"FireRegister",component:na},{path:"/WeatherCheck",name:"WeatherCheck",component:ut},{path:"/CountBookAPI",name:"CountBookAPI",component:mt},{path:"/GetAllBookAPI",name:"GetAllBookAPI",component:ft}],wt=(0,l.aE)({history:(0,l.LA)((void 0).BASE_URL),routes:Lt});wt.beforeEach(((e,a,t)=>{const o=(0,Te.xI)();(0,Te.hg)(o,(a=>{a?t():"Login"!==e.name&&"FireLogin"!==e.name&&"FireRegister"!==e.name?t("/login"):t()}))}));const yt=wt,Ct=(0,C.y$)({state:{isAuthenticated:!1,user:null},mutations:{setAuthentication(e,a){e.isAuthenticated=a},setUser(e,a){e.user=a}},actions:{login({commit:e},a){const t="admin",o="abc12fghH234";let n={};return a.username==t&&a.password==o?(e("setAuthentication",!0),e("setUser",a),n={code:200,data:{token:"abc12fghH234"},msg:"Login Success"},n):(n={code:6e3,data:null,msg:"Login Failed"},n)},logout({commit:e}){e("setAuthentication",!1),e("setUser",null),sessionStorage.removeItem("token")}}});var At=t(163),Bt=t(22);const _t=(0,o.Ef)(W);_t.use(At.Ay,{theme:{preset:Bt.A}}),_t.use(Ct),_t.use(yt),_t.mount("#app")}},a={};function t(o){var n=a[o];if(void 0!==n)return n.exports;var s=a[o]={exports:{}};return e[o](s,s.exports,t),s.exports}t.m=e,(()=>{var e=[];t.O=(a,o,n,s)=>{if(!o){var l=1/0;for(c=0;c<e.length;c++){for(var[o,n,s]=e[c],r=!0,i=0;i<o.length;i++)(!1&s||l>=s)&&Object.keys(t.O).every((e=>t.O[e](o[i])))?o.splice(i--,1):(r=!1,s<l&&(l=s));if(r){e.splice(c--,1);var u=n();void 0!==u&&(a=u)}}return a}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,n,s]}})(),(()=>{t.d=(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{var e={524:0};t.O.j=a=>0===e[a];var a=(a,o)=>{var n,s,[l,r,i]=o,u=0;if(l.some((a=>0!==e[a]))){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(i)var c=i(t)}for(a&&a(o);u<l.length;u++)s=l[u],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(c)},o=self["webpackChunkzpei_library"]=self["webpackChunkzpei_library"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))})();var o=t.O(void 0,[504],(()=>t(368)));o=t.O(o)})();
//# sourceMappingURL=app.9936d9d5.js.map