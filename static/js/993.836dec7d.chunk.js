"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[993],{3993:function(t,s,e){e.r(s),e.d(s,{default:function(){return I}});var n=e(1413),r=e(5671),o=e(3144),i=e(136),u=e(516),a=e(2791),l="Profile_descriptionBlock__qLpEN",p=e(1328),d=e(184),c=(a.Component,e(9439)),f=function(t){var s=(0,a.useState)(!1),e=(0,c.Z)(s,2),n=e[0],r=e[1],o=(0,a.useState)(t.status),i=(0,c.Z)(o,2),u=i[0],l=i[1];(0,a.useEffect)((function(){l(t.status)}),[t.status]);return(0,d.jsxs)("div",{children:[!n&&(0,d.jsx)("div",{children:(0,d.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"None status"})}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{value:u,onChange:function(t){l(t.currentTarget.value)},onBlur:function(){r(!1),t.updateStatus(u)}})})]})},h=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return s?(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("img",{src:s.photos.large}),"avatar + description",(0,d.jsx)(f,{status:e,updateStatus:n})]})}):(0,d.jsx)(p.Z,{})},x=e(6070),j="Post_iteam__vcdzJ",m=function(t){return(0,d.jsxs)("div",{className:j,children:[(0,d.jsx)("img",{src:"https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"}),t.message,(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"like"})," ",t.likeCount]})]})},v="MyPost_postBlock__HUuWM",g="MyPost_post__qRVUn",P=e(6139),k=e(704),S=e(5304),_=e(767),Z=(0,S.D)(10),C=a.memo((function(t){console.log("her");var s=t.posts.map((function(t){return(0,d.jsx)(m,{message:t.message,likeCount:t.likeCounter},t.id)}));return(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("h3",{children:"My post"}),(0,d.jsx)(w,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,d.jsx)("div",{className:g,children:s})]})})),w=(0,k.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,d.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,d.jsx)("div",{children:(0,d.jsx)(P.Z,{component:_.gx,name:"newPostText",placeholder:"Post message",validate:[S.C,Z]})}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{children:"Add post"})})]})})),y=C,b=e(8687),N=(0,b.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,x.Wl)(s))}}}))(y),U=function(t){return(0,d.jsxs)("main",{children:[(0,d.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,d.jsx)(N,{})]})},T=e(7689),A=e(5927),M=e(7781),D=function(t){(0,i.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,o.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(U,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})):(0,d.jsx)(T.Fg,{to:"/login"})}}]),e}(a.Component);var I=(0,M.qC)((0,b.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:x.et,getStatus:x.lR,updateStatus:x.Nf}),(function(t){return function(s){var e=(0,T.TH)(),r=(0,T.s0)(),o=(0,T.UO)();return(0,d.jsx)(t,(0,n.Z)((0,n.Z)({},s),{},{router:{location:e,navigate:r,params:o}}))}}),A.D)(D)}}]);
//# sourceMappingURL=993.836dec7d.chunk.js.map