"use strict";(self.webpackChunkcrud_redux_router=self.webpackChunkcrud_redux_router||[]).push([[404],{2404:function(e,i,r){r.r(i);var n=r(7689),t=r(9186),o=r(6157),a=r(9434),s=r(9561),l=r(5705),c=r(2622),u=r(8257),d=r(2052),h=r(184);i.default=(0,d.Z)((function(){var e=(0,a.I0)(),i=(0,a.v9)((function(e){return e.posts})),r=i.loading,d=i.error,p=(0,n.s0)(),f=(0,l.TA)({initialValues:{title:"",description:""},validationSchema:c.R,onSubmit:function(i){var r=Math.floor(200*Math.random());e((0,s.SF)({id:r,title:i.title,description:i.description})).unwrap().then((function(){p("/")})).catch((function(e){console.log(e)}))}});return(0,h.jsxs)(t.Z,{onSubmit:f.handleSubmit,children:[(0,h.jsxs)(t.Z.Group,{className:"mb-3",children:[(0,h.jsx)(t.Z.Label,{children:"Title"}),(0,h.jsx)(t.Z.Control,{type:"text",placeholder:"Title",name:"title",value:f.values.title,onChange:f.handleChange,isInvalid:!!f.errors.title}),(0,h.jsx)(t.Z.Control.Feedback,{type:"invalid",children:f.errors.title})]}),(0,h.jsxs)(t.Z.Group,{className:"mb-3",children:[(0,h.jsx)(t.Z.Label,{children:"Description"}),(0,h.jsx)(t.Z.Control,{as:"textarea",placeholder:"Description",rows:3,name:"description",value:f.values.description,onChange:f.handleChange,isInvalid:!!f.errors.description}),(0,h.jsx)(t.Z.Control.Feedback,{type:"invalid",children:f.errors.description})]}),(0,h.jsx)(u.Z,{loading:r,error:d,children:(0,h.jsx)(o.Z,{variant:"primary",type:"submit",children:"Submit"})})]})}))},2622:function(e,i,r){r.d(i,{R:function(){return t}});var n=r(6727),t=n.Ry().shape({title:n.Z_().min(2,"Character is to Short").max(30,"Character is to Long").required("This field is Required"),description:n.Z_().required("This field is Required")})},2052:function(e,i,r){var n=r(1413),t=r(9434),o=r(184);i.Z=function(e){return function(i){return(0,t.v9)((function(e){return e.auth})).isLoggedIn?(0,o.jsx)(e,(0,n.Z)({},i)):"Please Sign in first "}}}}]);
//# sourceMappingURL=404.13d753fe.chunk.js.map