(function(t){function e(e){for(var a,o,i=e[0],l=e[1],c=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},r={app:0},n=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("Future Table")]),s("div",{staticClass:"btn__tables text-center"},[s("h3",[t._v("Выбор таблицы")]),s("button",{staticClass:"btn btn-outline-dark mr-1",on:{click:t.onBigTable}},[t._v("Большая таблица")]),s("button",{staticClass:"btn btn-outline-dark",on:{click:t.onLittleTable}},[t._v("Маленькая таблица")])]),s("div",[t.loading?s("Preloader"):t._e(),s("Table",{staticClass:"d-none",class:{"d-block":!1===t.loading},attrs:{users_data:t.users}})],1)])])},n=[],o=(s("96cf"),s("1da1")),i=s("5530"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex justify-content-between m-4"},[s("AddForm"),s("div",{staticClass:" d-flex "},[s("div",[s("form",{staticClass:"d-flex",on:{submit:function(e){return e.preventDefault(),t.searchClick(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"Поиск по имени"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),s("button",{staticClass:"btn btn-success ml-2 mb-2"},[t._v("Найти")])])]),s("div",[s("button",{staticClass:"btn btn-danger ml-2 mb-2",on:{click:t.searchRemove}},[t._v("Сбросить")])])]),s("div",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.showUsers,expression:"showUsers"}],staticClass:"custom-select  mb-2 d-block",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.showUsers=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"10"}},[t._v("10")]),s("option",{attrs:{value:"20"}},[t._v("20")]),s("option",{attrs:{value:"30"}},[t._v("30")]),s("option",{attrs:{value:"40"}},[t._v("40")]),s("option",{attrs:{value:"50"}},[t._v("50")])]),s("span",{staticClass:"text-success font-weight-bold"},[t._v("Пользователей на странице")])])],1),s("table",{staticClass:"table table-bordered table-striped"},[s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"},on:{click:t.sortById}},[t._v("id "),s("i",{staticClass:"fas fa-sort-down",class:{"fa-sort-up":t.sortId}})]),s("th",{attrs:{scope:"col"},on:{click:t.sortByFirstName}},[t._v("First Name "),s("i",{staticClass:"fas fa-sort-down",class:{"fa-sort-up":t.sortFirstName}})]),s("th",{attrs:{scope:"col"},on:{click:t.sortByLastName}},[t._v("Last Name "),s("i",{staticClass:"fas fa-sort-down",class:{"fa-sort-up":t.sortLastName}})]),s("th",{attrs:{scope:"col"}},[t._v("Email")]),s("th",{attrs:{scope:"col"}},[t._v("Phone ")])])]),s("tbody",t._l(t.paginationUsers,(function(e){return s("TableRow",{key:e.email,attrs:{rowData:e},on:{userInfo:t.userData}})})),1)]),t.showUserInfo?s("UserInfo",{attrs:{userInfo:t.userInfo}}):s("p",[t._v("Вы никого не выбрали")]),s("Paginate",{attrs:{"page-count":t.pages,"click-handler":t.pageOn,"prev-text":"Назад","next-text":"Вперед","prev-class":"page-item","prev-link-class":"page-link","next-class":"page-item","next-link-class":"page-link","container-class":"pagination","page-class":"page-item","page-link-class":"page-link"}})],1)},c=[],u=(s("4de4"),s("caad"),s("fb6a"),s("ac1f"),s("2532"),s("841c"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.showModal=!0}}},[t._v("Добавить в таблицу")]),t.showModal?s("div",{staticClass:"modal d-block",attrs:{tabindex:"-1",role:"dialog"},on:{close:function(e){t.showModal=!1}}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addUsers(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control",attrs:{type:"number",required:"",placeholder:"id"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"First Name"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"Last Name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",required:"",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"Phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),s("button",{staticClass:"btn btn-success mr-1"},[t._v("Добавить в таблицу")]),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.showModal=!1}}},[t._v("Закрыть")])])])])])]):t._e()])}),d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Добавить в таблицу")])])}],m=s("2f62"),f={name:"AddForm",data:function(){return{showModal:!1,id:0,firstName:"",lastName:"",email:"",phone:""}},methods:Object(i["a"])(Object(i["a"])({},Object(m["d"])(["createUser"])),{},{addUsers:function(){this.createUser({id:this.id,firstName:this.firstName,lastName:this.lastName,email:this.email,phone:this.phone,address:{city:"Информации нет, так как, вы добавили этого пользователя сами",state:"Информации нет, так как, вы добавили этого пользователя сами",streetAddress:"Информации нет, так как, вы добавили этого пользователя сами",zip:0},description:"Информации нет, так как, вы добавили этого пользователя сами"}),this.id=this.firstName=this.lastName=this.email=this.phone="",this.showModal=!1}})},p=f,h=s("2877"),v=Object(h["a"])(p,u,d,!1,null,"6fef95e2",null),b=v.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",{on:{click:function(e){return t.onClick(t.rowData)}}},[s("th",{attrs:{scope:"row"}},[t._v(t._s(t.rowData.id))]),s("td",[t._v(t._s(t.rowData.firstName||t.rowData.name))]),s("td",[t._v(t._s(t.rowData.lastName))]),s("td",[t._v(t._s(t.rowData.email))]),s("td",[t._v(t._s(t.rowData.phone))])])},g=[],w={name:"TableRow",data:function(){return{userInfo:{}}},props:{rowData:{type:Object,default:function(){return{}}}},methods:{onClick:function(t){this.$emit("userInfo",t)}}},x=w,N=Object(h["a"])(x,_,g,!1,null,"0a3a68a4",null),C=N.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-50"},[s("div",{staticClass:"card mb-2"},[s("h3",[t._v(t._s(t.userInfo.firstName+" "+t.userInfo.lastName)+": "+t._s(t.userInfo.id))]),s("p",[t._v(" "+t._s(t.userInfo.description)+" ")]),s("p",[s("span",[t._v("Адрес проживания: "),s("b",[t._v(t._s(t.userInfo.address.streetAddress))])])]),s("p",[s("span",[t._v("Город: "),s("b",[t._v(t._s(t.userInfo.address.city))])])]),s("p",[s("span",[t._v("Провинция/штат: "),s("b",[t._v(t._s(t.userInfo.address.state))])])]),s("p",[s("span",[t._v("Индекс: "),s("b",[t._v(t._s(t.userInfo.address.zip))])])])])])},k=[],O={name:"UserInfo",props:{userInfo:{type:Object,default:function(){return{}}}}},j=O,I=Object(h["a"])(j,y,k,!1,null,"6fb207e4",null),U=I.exports,D={name:"Table",components:{TableRow:C,AddForm:b,UserInfo:U},props:{users_data:{type:Array,default:function(){return[]}}},data:function(){return{showUsers:10,pageNumber:1,sortFirstName:!0,sortLastName:!0,sortId:!0,userInfo:{},showUserInfo:!1,search:"",searchResult:""}},computed:{pages:function(){return Math.ceil(this.users_data.length/this.showUsers)},paginationUsers:function(){var t=this,e=(this.pageNumber-1)*this.showUsers,s=e+this.showUsers;return this.users_data.slice(e,s).filter((function(e){return e.firstName.toLowerCase().includes(t.searchResult.toLowerCase())}))}},methods:{searchClick:function(){this.searchResult=this.search},searchRemove:function(){this.search="",this.searchResult=""},userData:function(t){this.userInfo=t,this.showUserInfo=!0},pageOn:function(t){this.pageNumber=t},sortByFirstName:function(){this.sortFirstName?(this.users_data.sort((function(t,e){return t.firstName.localeCompare(e.firstName)})),this.sortFirstName=!1):(this.users_data.sort((function(t,e){return e.firstName.localeCompare(t.firstName)})),this.sortFirstName=!0)},sortByLastName:function(){this.sortLastName?(this.users_data.sort((function(t,e){return t.lastName.localeCompare(e.lastName)})),this.sortLastName=!1):(this.users_data.sort((function(t,e){return e.firstName.localeCompare(t.lastName)})),this.sortLastName=!0)},sortById:function(){this.sortId?(this.users_data.sort((function(t,e){return t.id-e.id})),this.sortId=!1):(this.users_data.sort((function(t,e){return e.id-t.id})),this.sortId=!0)}}},P=D,L=(s("76a5"),Object(h["a"])(P,l,c,!1,null,null,null)),B=L.exports,R={name:"App",data:function(){return{tableLink:"",loading:null}},components:{Table:B},computed:Object(i["a"])({},Object(m["c"])(["users"])),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(m["b"])(["getUsers"])),Object(m["d"])(["setUsers"])),{},{onBigTable:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.getUsers(t.tableLink="http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D");case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},onLittleTable:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.getUsers(t.tableLink="http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}");case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}}),mounted:function(){}},T=R,F=(s("034f"),Object(h["a"])(T,r,n,!1,null,null,null)),E=F.exports,M=s("bc3a"),$=s.n(M);a["a"].use(m["a"]);var A=new m["a"].Store({state:{users:[]},mutations:{setUsers:function(t,e){t.users=e},createUser:function(t,e){t.users.unshift(e)}},actions:{getUsers:function(t,e){return Object(o["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t.commit,s.next=3,$()(e,{method:"GET"}).then((function(t){a("setUsers",t.data)}));case 3:return s.abrupt("return",s.sent);case 4:case"end":return s.stop()}}),s)})))()}},getters:{users:function(t){return t.users}}}),q=(s("ab8b"),s("becf"),s("8832")),S=s.n(q),z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"d-flex justify-content-center  mt-5 mb-1"},[s("div",{staticClass:"spinner-border",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])]),s("span",{staticClass:"d-flex justify-content-center text-info font-weight-bold"},[t._v("Прогружаем таблицу")])])}],G={name:"Preloader"},H=G,K=Object(h["a"])(H,z,J,!1,null,"17c99e24",null),Q=K.exports;a["a"].component("Paginate",S.a),a["a"].component("Preloader",Q),a["a"].config.productionTip=!1,new a["a"]({store:A,render:function(t){return t(E)}}).$mount("#app")},"694f":function(t,e,s){},"76a5":function(t,e,s){"use strict";var a=s("694f"),r=s.n(a);r.a},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.2fb77403.js.map