(this.webpackJsonpemploydirect=this.webpackJsonpemploydirect||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var o=a(6),r=a(1),n=a.n(r),s=a(9),c=a.n(s),i=a(39),l=a(40),d=a(50),m=a(49),u=a(48),b=function(e){var t={columns:[{label:"Name",field:"name",sort:"asc",width:500},{label:"Email",field:"email",sort:"asc",width:500},{label:"Image",field:"image",sort:"asc",width:500},{label:"City",field:"city",sort:"asc",width:300},{label:"DOB",field:"dob",sort:"asc",width:250}],rows:e.employees};return console.log("Props",e),Object(o.jsx)(u.c,{sorting:!0,striped:!0,bordered:!0,data:t})},h=a(46),p=a.n(h),j=function(){return p.a.get("https://randomuser.me/api/?results=30&nat=us")},f=a(47),y=a.n(f),O=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={employeeRecords:[]},e.componentDidMount=function(){j().then((function(t){var a=t.data.results,r=[];console.log(a);for(var n=0;n<a.length;n++){var s={name:a[n].name.first+" "+a[n].name.last,email:a[n].email,image:Object(o.jsx)("img",{alt:"employee headshot",src:a[n].picture.thumbnail}),city:a[n].location.city,dob:y()(a[n].dob.date).format("DD-MM-YYYY")};r.push(s)}console.log(r),e.setState({employeeRecords:r})}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Employee Details"}),Object(o.jsx)("h4",{children:"Search for Staff Details by Name"}),Object(o.jsx)(b,{employees:this.state.employeeRecords})]})}}]),a}(n.a.Component);var g=function(){return Object(o.jsx)(O,{})};a(99);c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.f7542421.chunk.js.map