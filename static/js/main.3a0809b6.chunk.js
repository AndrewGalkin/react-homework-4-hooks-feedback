(this["webpackJsonpreact-homework-4-hooks-feedback"]=this["webpackJsonpreact-homework-4-hooks-feedback"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(5),i=c.n(a),o=(c(10),c(3)),j=c(2),r=c.n(j),l=c(0),b=function(t){var e=t.goodIncrement,c=t.badIncrement,n=t.neutralIncrement,s=t.total;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:function(){e(),s()},children:"Good"}),Object(l.jsx)("button",{onClick:function(){n(),s(),console.log(2)},children:"Neutral"}),Object(l.jsx)("button",{onClick:function(){c(),s(),console.log(1)},children:"Bad"})]})},d=function(t){var e=t.good,c=t.bad,n=t.total,s=t.neutral,a=t.feedbacks;return Object(l.jsxs)("div",{className:r.a.statistics,children:[Object(l.jsx)("h2",{children:"Statistics"}),Object(l.jsxs)("ul",{className:r.a.statistics_list,children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Good:"}),Object(l.jsx)("span",{children:e})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Neutral:"}),Object(l.jsx)("span",{children:s})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Bad:"}),Object(l.jsx)("span",{children:c})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Total:"}),Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"Positive Feedbacks:"}),Object(l.jsxs)("span",{children:[Math.round(a,2),"%"]})]})]})]})},u=function(){var t=Object(n.useState)(0),e=Object(o.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)(0),i=Object(o.a)(a,2),j=i[0],u=i[1],O=Object(n.useState)(0),h=Object(o.a)(O,2),x=h[0],f=h[1],_=Object(n.useState)(0),k=Object(o.a)(_,2),m=k[0],p=k[1],v=Object(n.useState)(0),N=Object(o.a)(v,2),S=N[0],g=N[1];return Object(l.jsxs)("div",{className:r.a.all_content,children:[Object(l.jsx)("h1",{children:"Please leave your feedback"}),Object(l.jsx)("div",{className:r.a.buttons_content,children:Object(l.jsx)(b,{goodIncrement:function(){s((function(t){return t+1})),g(100*(c+1)/(m+1))},badIncrement:function(){f((function(t){return t+1})),g(100*c/(m+1))},neutralIncrement:function(){u((function(t){return t+1})),g(100*c/(m+1))},total:function(){p((function(t){return t+1}))}})}),0===m?"NO MESSAGE":Object(l.jsx)(d,{good:c,bad:x,neutral:j,total:m,feedbacks:S})]})};function O(){return Object(l.jsx)("div",{className:"main_content",children:Object(l.jsx)(u,{})})}i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))},2:function(t,e,c){t.exports={all_content:"Feedback_all_content__3VJAj",buttons_content:"Feedback_buttons_content__GDQX4",statistics:"Feedback_statistics__1BNJa",statistics_list:"Feedback_statistics_list__3B1eW"}}},[[12,1,2]]]);
//# sourceMappingURL=main.3a0809b6.chunk.js.map