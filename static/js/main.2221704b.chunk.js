(this["webpackJsonpproject8-mern-frontend"]=this["webpackJsonpproject8-mern-frontend"]||[]).push([[0],{30:function(e,t,a){},33:function(e,t,a){e.exports=a(70)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),i=a.n(o),l=(a(38),a(15)),s=a(1),c=a(2),u=a(13),m=a(4),d=a(3),p=a(5),h=a(6),E=(a(39),a(40),function(e){var t=[],a=["confirm","ready","delivered","edit","create","delete","new","submitbtn","detail"];return a.includes(e.type)&&t.push("button-".concat(e.type)),a.includes(e.type)&&t.push("button-".concat(e.type,"-detail")),r.a.createElement("button",{className:t.join(" ")},e.label)}),f=(a(41),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState({value:e.target.value})},n.onSubmit=function(e){e.preventDefault(),fetch("".concat(n.props.url,"/item/name/").concat(n.state.value)).then((function(e){return e.json()})).then((function(e){n.setState({id:e[0]._id,redirect:!0}),n.props.searchSubmit(n.state.id)}))},n.state={value:"",id:"",redirect:!1},n.classList=[],n.types=["submit"],n}return Object(c.a)(a,[{key:"render",value:function(e){return this.types.includes(this.props.type)&&this.classList.push("button-".concat(this.props.type)),!0===this.state.redirect?(this.setState({redirect:!1}),r.a.createElement(h.a,{to:"/catalog/item/id/".concat(this.state.id)})):r.a.createElement("div",null,r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{style:this.props.style,placeholder:this.props.placeholder,name:this.props.name,onChange:this.onChange}),r.a.createElement("div",{className:"btn"},r.a.createElement("input",{type:"submit",className:this.classList.join(" ")})))))}}]),a}(n.Component));var b=function(e){return r.a.createElement("div",{className:"catalogue-header"},r.a.createElement("div",{className:"catalogue-searchfield"},r.a.createElement(f,{style:{border:"3px solid #F1F3F4",fontSize:"15px",height:"30px",width:"170px"},className:"catalogue-header-search",name:"Submitbtn",type:"submit",placeholder:"Search your catalogue...",small:!0,url:e.url,searchSubmit:function(t){e.searchSubmit(t)}})),r.a.createElement("div",{className:"new-item-button"},r.a.createElement(p.b,{to:"/catalog/item/new"},r.a.createElement(E,{style:{marginRight:"20px"},type:"create",label:"+ New Item"}))))},g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){fetch("".concat(n.props.url,"/item/id/").concat(n.props.id)).then((function(e){return e.json()})).then((function(e){n.setState({id:e._id,name:e.name,description:e.description,unit:e.unit,price:e.unitPrice,inventory:e.inventoryCount,image:e.image,ready:!0,deleted:!1})}))},n.editItem=function(){n.props.setId(n.state.id)},n.deleteItem=function(){var e={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.state)};fetch("".concat(n.props.url,"/item/name/").concat(n.state.name),e).then((function(e){return e.json()})).then((function(e){return n.setState({ready:!1,deleted:!0}),alert("The item has been deleted")}))},n.state={id:"",name:"",description:"",unit:0,price:0,inventory:0,image:""},n.id=n.props.id,n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this;e.id!==this.props.id&&fetch("".concat(this.props.url,"/item/id/").concat(this.props.id)).then((function(e){return e.json()})).then((function(e){t.setState({name:e.name,description:e.description,unit:e.unit,price:e.unitPrice,inventory:e.inventoryCount,image:e.image,ready:!0})}))}},{key:"render",value:function(){return!0===this.state.ready?r.a.createElement("div",{className:"item-detail"},r.a.createElement("div",{className:"item-detail-image",style:{backgroundImage:"url(".concat(this.state.image)}}),r.a.createElement("div",{className:"item-detail-row-one"},r.a.createElement("h1",null,this.state.name),r.a.createElement("h3",null,this.state.description)),r.a.createElement("div",{className:"item-detail-row-two"},r.a.createElement("div",{className:"row-two-unit-price"},r.a.createElement("h2",null,"Unit Size: ",this.state.unit),r.a.createElement("h2",null,"Price: $",this.state.price)),r.a.createElement("div",{className:"row-two-inventory"},r.a.createElement("h2",null,"In Stock: ",this.state.inventory))),r.a.createElement("div",{className:"item-detail-buttons"},r.a.createElement("div",{onClick:this.deleteItem},r.a.createElement(E,{type:"delete",label:"Delete"})),r.a.createElement(p.b,{to:"/catalog/item/edit/".concat(this.state.id),onClick:this.editItem},r.a.createElement(E,{type:"edit",label:"Edit"})))):!0===this.state.deleted?r.a.createElement("div",null,r.a.createElement(p.b,{to:"/catalog"},r.a.createElement(E,{type:"edit",label:"Back to Catalog"}))):null}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){e.preventDefault(),n.setState(Object(l.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t="";t="POST"===n.props.method?"".concat(n.props.url,"/item"):"".concat(n.props.url,"/item/name/").concat(n.state.name);var a={method:n.props.method,headers:{"Content-Type":"application/json"},body:JSON.stringify(n.state)};fetch(t,a).then((function(e){return e.json()})).then((function(e){n.setState({name:"",description:"",category:"",unit:0,unitPrice:0,inventoryCount:0,image:"",success:!0})}))},n.cancelForm=function(){},n.state={name:"",description:"",category:"",unit:0,unitPrice:0,inventoryCount:0,image:"",success:!1,ready:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.id?fetch("".concat(this.props.url,"/item/id/").concat(this.props.id)).then((function(e){return e.json()})).then((function(t){e.setState({name:t.name,description:t.description,category:t.category,unit:t.unit,unitPrice:t.unitPrice,inventoryCount:t.inventoryCount,image:t.image,ready:!0})})):this.setState({ready:!0})}},{key:"render",value:function(){return this.state.success?r.a.createElement("div",null,r.a.createElement("h2",null,"Success!")):this.state.ready&&this.props.id?r.a.createElement("form",{className:"item-form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"item-form-image",style:{backgroundImage:"url(".concat(this.state.image,")")}},r.a.createElement("input",{className:"item-form-add-image",type:"text",name:"image",value:this.state.image,onChange:this.onChange})),r.a.createElement("div",{className:"item-form-row-one"},r.a.createElement("h2",null,"Enter the details for the new item."),r.a.createElement("input",{className:"item-form-name item-form-input",type:"text",name:"name",value:this.state.name,onChange:this.onChange}),r.a.createElement("input",{className:"item-form-category item-form-input",type:"text",name:"category",value:this.state.category,onChange:this.onChange}),r.a.createElement("textarea",{className:"item-form-detail item-form-input",name:"description",value:this.state.description,onChange:this.onChange})),r.a.createElement("div",{className:"item-form-row-two"},r.a.createElement("div",{className:"item-form-row-two-unit-price"},r.a.createElement("input",{className:"item-form-unit",type:"number",name:"unit",value:this.state.unit,onChange:this.onChange}),r.a.createElement("input",{className:"item-form-unit",type:"number",name:"unitPrice",value:this.state.unitPrice,onChange:this.onChange})),r.a.createElement("div",{className:"item-form-row-two-inventory"},r.a.createElement("input",{className:"item-form-inventory",type:"number",name:"inventoryCount",value:this.state.inventoryCount,onChange:this.onChange}))),r.a.createElement("div",{className:"item-form-buttons"},r.a.createElement(p.b,{to:"/catalog"},r.a.createElement(E,{type:"delete",label:"Cancel"})),r.a.createElement(E,{as:"submit",type:"edit",label:"Submit"}))):this.state.ready?r.a.createElement("form",{className:"item-form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"item-form-image"},r.a.createElement("h3",{style:{color:"white"}},"Placeholder"),r.a.createElement("input",{className:"item-form-add-image",type:"text",name:"image",placeholder:"Image Url",onChange:this.onChange})),r.a.createElement("div",{className:"item-form-row-one"},r.a.createElement("h2",null,"Enter the details for the new item."),r.a.createElement("input",{className:"item-form-name item-form-input",type:"text",name:"name",placeholder:"Item Name",onChange:this.onChange}),r.a.createElement("input",{className:"item-form-category item-form-input",type:"text",name:"category",placeholder:"Item Category",onChange:this.onChange}),r.a.createElement("textarea",{className:"item-form-detail item-form-input",name:"description",placeholder:"Item Description",onChange:this.onChange})),r.a.createElement("div",{className:"item-form-row-two"},r.a.createElement("div",{className:"item-form-row-two-unit-price"},r.a.createElement("input",{className:"item-form-unit",type:"number",name:"unit",placeholder:"Unit Size",onChange:this.onChange}),r.a.createElement("input",{className:"item-form-unit",type:"number",name:"unitPrice",placeholder:"Unit Price",onChange:this.onChange})),r.a.createElement("div",{className:"item-form-row-two-inventory"},r.a.createElement("input",{className:"item-form-inventory",type:"number",name:"inventoryCount",placeholder:"Inventory Ct.",onChange:this.onChange}))),r.a.createElement("div",{className:"item-form-buttons"},r.a.createElement(p.b,{to:"/catalog"},r.a.createElement(E,{type:"delete",label:"Cancel"})),r.a.createElement(E,{as:"submit",type:"edit",label:"Create"}))):r.a.createElement("p",null,"something")}}]),a}(n.Component),y=a(12),N=a.n(y),C=(a(30),a(64),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"sidebar-item-box"},r.a.createElement("div",{className:"item-box-placeholder-img",style:{backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover"}}),r.a.createElement("p",null,e._id),r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.unitPrice)))}),S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={items:[],ready:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://group-project-mern-backend.herokuapp.com/item").then((function(t){e.setState({items:t.data,ready:!0})})).catch((function(e){console.log(e)}))}},{key:"displayBoxes",value:function(){var e=this,t=this.state.items;return t=t.map((function(t,a){return r.a.createElement("div",{key:a,className:"link"},r.a.createElement(p.b,{to:"/catalog/item/id/"+t._id,id:t._id,onClick:function(){e.setId(t._id)}},r.a.createElement(C,{id:t._id,name:t.name,image:t.image,price:t.unitPrice,key:a})))}))}},{key:"setId",value:function(e){this.props.setId(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"sidebar scroll"},!0===this.state.ready?this.displayBoxes():null))}}]),a}(n.Component);var O=function(){return r.a.createElement("div",{className:"item-detail"},r.a.createElement("div",{className:"catalog-home-container"},r.a.createElement("h1",null,"Welcome back!"),r.a.createElement("h2",null,"Click an item on the left or search in the search bar to show the item details.")))},j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).resetState=function(){n.setState({currentId:"",ready:!1})},n.searchSubmit=function(e){n.setState({currentId:e,ready:!0})},n.state={currentId:"",ready:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catalogue-main"},r.a.createElement(h.b,{path:"/catalog",render:function(){return r.a.createElement("div",{className:"catalogue-main"},r.a.createElement(b,{url:e.props.url,searchSubmit:e.searchSubmit}),r.a.createElement("div",{className:"catalogue-body"},r.a.createElement("div",{className:"catalogue-sidebar",style:{marginLeft:"10px",marginRight:"20px"}},r.a.createElement(S,{setId:e.searchSubmit})),r.a.createElement(h.b,{path:"/catalog",component:O,exact:!0}),r.a.createElement(h.b,{path:"/catalog/item/new",render:function(){return r.a.createElement("div",{className:"item-form-body"},r.a.createElement(v,{url:e.props.url,method:"POST"}))},exact:!0}),r.a.createElement(h.b,{path:"/catalog/item/edit/".concat(e.state.currentId),render:function(){return r.a.createElement("div",{className:"item-form-body"},r.a.createElement(v,{url:e.props.url,id:e.state.currentId,method:"PUT"}))},exact:!0}),r.a.createElement(h.b,{path:"/catalog/item/id/".concat(e.state.currentId),render:function(){return!0===e.state.ready?r.a.createElement(g,{url:e.props.url,id:e.state.currentId,setId:e.searchSubmit}):null},exact:!0})))}}))}}]),a}(n.Component);var k=function(){return r.a.createElement("div",{className:"order-header"})},I=(a(65),function(e){return r.a.createElement("div",{className:"flexbox"},r.a.createElement(p.b,{to:"/orders/id/"+e.id,className:"flexbox-link",onClick:function(){e.setId(e.id)}},r.a.createElement("div",{className:"card-order"},r.a.createElement("p",null,"Order Number: ",e.orderNumber),r.a.createElement("p",null,"Customer Name: ",e.customer),r.a.createElement("p",null,"Occasion: ",e.occasion),r.a.createElement("p",null,"Due Date: ",e.dueDate))))}),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setId=function(e){n.props.setId(e)},n.state={orders:[],ready:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://group-project-mern-backend.herokuapp.com/order").then((function(t){e.setState({orders:t.data,ready:!0})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(e){e.orderList!==this.props.orderList&&this.setState({orders:this.props.orderList,ready:!0})}},{key:"displayOrders",value:function(){var e=this,t=this.state.orders;return t=t.map((function(t,a){return r.a.createElement(I,{id:t._id,orderNumber:t.orderNumber,customer:t.customer.name,occasion:t.occasion,dueDate:t.dueDate,key:a,setId:e.setId})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"order-grid-card"},!0===this.state.ready?this.displayOrders():null)}}]),a}(n.Component);var w=function(e){var t=e.options;return r.a.createElement("select",{style:e.style,onChange:function(t){e.onChange(t.target.value)}},r.a.createElement("option",{value:"null"},"Select..."),t.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))},L=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){fetch("".concat(n.props.url,"/order/customers")).then((function(e){return e.json()})).then((function(e){n.setState({customerOptions:e,ready:!0})}))},n.typeChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.dropdownChange=function(e){n.state.statusOptions.includes(e)?n.setState({status:e}):n.setState({customer:e})},n.onSubmit=function(e){e.preventDefault(),fetch("".concat(n.props.url,"/order")).then((function(e){return e.json()})).then((function(e){return null!==n.state.status?e.map((function(e,t){var a;return e.status===n.state.status&&(a=e),a})).filter((function(e){return void 0!==e})):e})).then((function(e){return null!==n.state.dueDate?e.map((function(e,t){var a;return e.dueDate===n.state.dueDate&&(a=e),a})).filter((function(e){return void 0!==e})):e})).then((function(e){return null!==n.state.customer?e.map((function(e,t){var a;return e.customer.name===n.state.customer&&(a=e),a})).filter((function(e){return void 0!==e})):e})).then((function(e){return null!==n.state.orderNumber?e.map((function(e,t){var a;return e.orderNumber===n.state.orderNumber&&(a=e),a})).filter((function(e){return void 0!==e})):e})).then((function(e){n.props.setList(e),n.setState({orderNumber:null,status:null,customer:null,dueDate:null})}))},n.clearFilters=function(){window.location="/orders"},n.state={statusOptions:["Unconfirmed","Confirmed","Ready","Delivered"],customerOptions:[],ready:!1,orderNumber:null,status:null,customer:null,dueDate:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e={border:"3px solid #F1F3F4",fontSize:"15px",height:"30px",width:"170px"},t={border:"3px solid #F1F3F4",borderRadius:"6px",fontSize:"15px",height:"35px",width:"200px",display:"block",color:"#757575"};return r.a.createElement("div",{className:"order-sidebar-container"},r.a.createElement("h2",null,"Filters"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"order-sidebar-order-no"},r.a.createElement("h3",null,"Order #"),r.a.createElement("input",{type:"number",name:"orderNumber",style:e,onChange:this.typeChange})),r.a.createElement("div",{className:"order-sidebar-status"},r.a.createElement("h3",null,"Status"),r.a.createElement(w,{style:t,options:this.state.statusOptions,onChange:this.dropdownChange})),r.a.createElement("div",{className:"order-sidebar-customers"},r.a.createElement("h3",null,"Customer"),!0===this.state.ready?r.a.createElement(w,{style:t,options:this.state.customerOptions,onChange:this.dropdownChange}):null),r.a.createElement("div",{className:"order-sidebar-order-no"},r.a.createElement("h3",null,"Due Date"),r.a.createElement("input",{type:"text",name:"dueDate",style:e,onChange:this.typeChange})),r.a.createElement("div",{className:"order-sidebar-buttons-container"},r.a.createElement("input",{type:"submit",style:{backgroundColor:"#9fc3cc",color:"#3c3c3c",border:"none",borderRadius:"2px",padding:"12px 20px",marginRight:"20px"}}),r.a.createElement("div",{onClick:this.clearFilters},r.a.createElement(E,{type:"delete",label:"Clear"})))))}}]),a}(n.Component),D=(a(66),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).updateStatus=function(){console.log(n.state.status);var e="";"Unconfirmed"===n.state.status?e="Confirmed":"Confirmed"===n.state.status?e="Ready":"Ready"===n.state.status&&(e="Delivered"),n.setState({status:e},(function(){n.sendNewStatus()}))},n.sendNewStatus=function(){console.log(n.state);var e={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.state)};fetch("".concat(n.props.url,"/order/id/").concat(n.id),e).then((function(e){return e.json()})).then((function(e){console.log(e),console.log("Status Changed!")}))},n.setStatusButton=function(){return"Ready"===n.state.status?r.a.createElement("div",{onClick:n.updateStatus},r.a.createElement(E,{type:"delivered",label:"Mark as Delivered"})):"Unconfirmed"===n.state.status?r.a.createElement("div",{onClick:n.updateStatus},r.a.createElement(E,{type:"confirm",label:"Mark as Confirmed"})):"Confirmed"===n.state.status?r.a.createElement("div",{onClick:n.updateStatus},r.a.createElement(E,{type:"ready",label:"Mark as Ready"})):"Delivered"===n.state.status?r.a.createElement("div",null,r.a.createElement(E,{type:"delivered",label:"Delivery Complete"})):void 0},n.state={orderNumber:0,customerName:"",customerAddress:"",customerPhone:"",dueDate:"",subTotal:0,tax:0,total:0,status:"",items:[],statusColor:"",ready:!1},n.id="5f2c4dc6dd12ce0004e869b4",n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(this.props.url,"/order/id/").concat(this.props.id)).then((function(e){return e.json()})).then((function(t){e.setState({orderNumber:t.orderNumber,customerName:t.customer.name,customerAddress:t.customer.address,customerPhone:t.customer.phone,dueDate:t.dueDate,subTotal:t.subTotal,tax:t.tax,total:t.total,status:t.status,items:t.orderInfo,ready:!0}),"Ready"===e.state.status?e.setState({statusColor:"#ECE2BE"}):"Delivered"===e.state.status?e.setState({statusColor:"#bdd49a"}):"Confirmed"===e.state.status?e.setState({statusColor:"#91bfb6"}):"Unconfirmed"===e.state.status&&e.setState({statusColor:"#ba6d6b"})}))}},{key:"displayItems",value:function(){return this.state.items.map((function(e,t){return r.a.createElement("div",{className:"order-box",key:t},r.a.createElement("div",{className:"order-box-item"},r.a.createElement("p",{className:"order-val"},e.itemName)),r.a.createElement("div",{className:"order-box-item"},r.a.createElement("p",{className:"order-val"},e.quantity)),r.a.createElement("div",{className:"order-box-item"},r.a.createElement("p",{className:"order-val"},e.unitPrice)))}))}},{key:"render",value:function(){return!0===this.state.ready?r.a.createElement("div",{className:"order-detail"},r.a.createElement("div",{className:"order-detail-status"},r.a.createElement("h2",null,"Status:"," ",r.a.createElement("span",{style:{backgroundColor:"".concat(this.state.statusColor)}},this.state.status))),r.a.createElement("div",{className:"order-detail-info"},r.a.createElement("p",null,r.a.createElement("strong",null,"Order Number:")," ",this.state.orderNumber),r.a.createElement("p",null,r.a.createElement("strong",null,"Name:")," ",this.state.customerName),r.a.createElement("p",null,r.a.createElement("strong",null,"Due Date:")," ",this.state.dueDate),r.a.createElement("p",null,r.a.createElement("strong",null," Address:")," ",this.state.customerAddress),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone Number:")," ",this.state.customerPhone)),r.a.createElement("div",{className:"items-ordered-box"},r.a.createElement("div",null,r.a.createElement("h2",null,"Items Ordered")),r.a.createElement("div",{className:"order-box-header"},r.a.createElement("h4",null,"Name"),r.a.createElement("h4",null,"Quantity"),r.a.createElement("h4",null,"Price")),r.a.createElement("div",{className:"displayed-items"},this.displayItems())),r.a.createElement("div",{className:"status-button"},this.setStatusButton()),r.a.createElement("div",{className:"order-detail-cost"},r.a.createElement("p",null,r.a.createElement("strong",null,"Sub-Total:")," $",this.state.subTotal),r.a.createElement("p",null,r.a.createElement("strong",null,"Tax:")," $",this.state.tax),r.a.createElement("p",null,r.a.createElement("strong",null,"Total:")," $",this.state.total))):null}}]),a}(n.Component)),P=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setId=function(e){n.setState({currentId:e,ready:!0})},n.setList=function(e){n.setState({orderList:e})},n.state={currentId:"",orderList:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"order-main"},r.a.createElement(h.b,{path:"/orders",render:function(){return r.a.createElement("div",{className:"order-main"},r.a.createElement(k,{component:k}),r.a.createElement("div",{className:"order-body"},r.a.createElement("div",{className:"order-sidebar",style:{marginLeft:"10px",marginRight:"20px"}},r.a.createElement(L,{url:e.props.url,setList:e.setList})),r.a.createElement(h.b,{path:"/orders",render:function(){return null===e.state.orderList?r.a.createElement(x,{setId:e.setId}):r.a.createElement(x,{setId:e.setId,orderList:e.state.orderList})},exact:!0}),r.a.createElement(h.b,{path:"/orders/id/".concat(e.state.currentId),render:function(){return!0===e.state.ready?r.a.createElement(D,{url:e.props.url,setId:e.setId,id:e.state.currentId}):null},exact:!0})))}})," ")}}]),a}(n.Component),U=(a(67),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Sign Up"),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",onChange:this.props.handleInput})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"text",name:"password",onChange:this.props.handleInput})),r.a.createElement("input",{value:"Submit",type:"submit",onClick:this.props.handleSignUp})))}}]),a}(n.Component)),F=(a(68),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Log In"),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",onChange:this.props.handleInput})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"text",name:"password",onChange:this.props.handleInput})),r.a.createElement("input",{value:"Submit",type:"submit",onClick:this.props.handleLogIn})))}}]),a}(n.Component)),T=(a(69),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Log Out"),r.a.createElement("form",null,r.a.createElement("input",{value:"Log Out",type:"submit",onClick:this.props.handleLogOut})))}}]),a}(n.Component)),M="https://group-project-mern-backend.herokuapp.com",R=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={email:"",password:"",isLoggedIn:!1},e.handleLogOut=e.handleLogOut.bind(Object(u.a)(e)),e.handleInput=e.handleInput.bind(Object(u.a)(e)),e.handleLogIn=e.handleLogIn.bind(Object(u.a)(e)),e.handleSignUp=e.handleSignUp.bind(Object(u.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){localStorage.token?this.setState({isLoggedIn:!0}):this.setState({isLoggedIn:!1})}},{key:"handleLogOut",value:function(){this.setState({email:"",password:"",isLoggedIn:!1}),localStorage.clear()}},{key:"handleInput",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleSignUp",value:function(e){var t=this;e.preventDefault(),N.a.post("https://group-project-mern-backend.herokuapp.com/users/signup",{email:this.state.email,password:this.state.password}).then((function(e){localStorage.token=e.data.token,t.setState({isLoggedIn:!0})})).catch((function(e){return console.log(e)}))}},{key:"handleLogIn",value:function(e){var t=this;e.preventDefault(),N.a.post("https://group-project-mern-backend.herokuapp.com/users/login",{email:this.state.email,password:this.state.password}).then((function(e){localStorage.token=e.data.token,t.setState({isLoggedIn:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"nav"},r.a.createElement("h1",null,"Welcome to Narwhal Bakery"),r.a.createElement("div",{className:"header-buttons"},r.a.createElement(p.b,{to:"/catalog/"}," ",r.a.createElement(E,{type:"create",label:"My Catalog"})),r.a.createElement(p.b,{to:"/orders"}," ",r.a.createElement(E,{type:"create",label:"My Orders"})),r.a.createElement(p.b,{to:"/signup"},r.a.createElement(E,{type:"create",label:"Sign Up"})),r.a.createElement(p.b,{to:"/login"},r.a.createElement(E,{type:"create",label:"Log In"})),r.a.createElement(p.b,{to:"/logout"},r.a.createElement(E,{type:"create",label:"Log Out"})))),r.a.createElement("div",{className:"container"},r.a.createElement(h.b,{path:"/",render:function(){return r.a.createElement(h.a,{to:"/login"})},exact:!0}),r.a.createElement(h.b,{path:"/orders",render:function(){return r.a.createElement(P,{url:M})}}),r.a.createElement(h.b,{path:"/catalog/",render:function(){return r.a.createElement(j,{url:M})}}),r.a.createElement(h.b,{path:"/signup",render:function(t){return r.a.createElement(U,{url:M,isLoggedIn:e.state.isLoggedIn,handleInput:e.handleInput,handleSignUp:e.handleSignUp})}}),r.a.createElement(h.b,{path:"/logout",render:function(t){return r.a.createElement(T,{url:M,isLoggedIn:e.state.isLoggedIn,handleLogOut:e.handleLogOut})}}),r.a.createElement(h.b,{path:"/login",render:function(t){return r.a.createElement(F,{url:M,isLoggedIn:e.state.isLoggedIn,handleInput:e.handleInput,handleLogIn:e.handleLogIn})}})),r.a.createElement("div",null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p.a,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.2221704b.chunk.js.map