import{C as m}from"./Common.776731ff.js";import{a1 as h,_ as g,d as y,E as b,h as f,o as a,b as v,w as k,a as e,t as n,g as l,e as M,c as s,q as _,F as p,C as d}from"./app.e8938817.js";import{S as C}from"./SNS.00c67898.js";const x=()=>h();const L={class:"about-me__wrapper"},w={class:"about-me__title"},B={class:"about-me__description"},N=["src"],A={class:"about-me__description__text"},S=["href"],V=e("h2",null,"Experience",-1),$={class:"line-content"},D={key:0,style:{display:"inline"}},E=["href"],F={key:0,class:"line-content__description"},T=e("h2",null,"Miscellaneous",-1),q=y({__name:"About-Me",setup(P){const c=x(),o=b();return f(()=>{var i;const r=c.value.pages&&c.value.pages.aboutMe?c.value.pages.aboutMe:{};return r.title===void 0&&(r.title=(i=c.value.pageText)==null?void 0:i.aboutMe),r}),(r,i)=>(a(),v(m,null,{page:k(()=>[e("section",L,[e("h1",w,n(l(o).me),1),M(C,{large:""}),e("div",B,[e("img",{src:r.$withBase(l(o).image),alt:"me"},null,8,N),e("div",A,[e("p",null,n(l(o).description),1)])]),l(o).cvLink?(a(),s("a",{key:0,href:l(o).cvLink,style:{display:"block","margin-top":"20px"},target:"_blank"}," Curriculum Vitae ",8,S)):_("",!0),V,(a(!0),s(p,null,d(l(o).experience,(t,u)=>(a(),s("div",{key:`experience-group-${u}`,class:"top-line-wrapper"},[e("div",$,[e("p",null,[e("span",null,[e("b",null,n(t.name),1),t.company?(a(),s("span",D,", ")):_("",!0),t.company?(a(),s("a",{key:1,href:t.company.url,target:"_blank"},n(t.company.placeName),9,E)):_("",!0)]),e("span",null,n(t.year),1)]),t.extras?(a(),s("span",F,n(t.extras),1)):_("",!0)])]))),128)),T,e("ul",null,[(a(!0),s(p,null,d(l(o).miscellaneous,(t,u)=>(a(),s("li",{key:`experience-group-${u}`},n(t.desc),1))),128))])])]),_:1}))}});var H=g(q,[["__file","About-Me.vue"]]);export{H as default};
