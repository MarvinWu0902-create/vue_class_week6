import{a as u}from"./axios-G2rPRu76.js";import{_,r as p,o as a,c as i,a as t,F as m,f,t as s,d as l,b as g}from"./index-HcxGUWAP.js";var h={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"marvinapipath",BASE_URL:"/vue_class_week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:v,VITE_PATH:D}=h,x={data(){return{productionData:[],isLoading:!1,fullPage:!0}},methods:{getData(){const{id:c}=this.$route.params;this.isLoading=!0,u.get(`${v}/api/${D}/product/${c}`).then(o=>{const{product:n}=o.data;this.productionData=n,this.isLoading=!1}).catch(o=>{alert(o.data.message)})}},mounted(){this.getData()}},V={class:"container"},L={class:"d-flex my-3"},E={class:"d-flex flex-column mx-3"},T={class:"mb-3"},b=["src"],P={class:"d-flex justify-content-between"},y=["Key"],I=["src"],R={class:"mx-3"},U={class:"mb-3"},B={class:"fs-2 text-danger"};function N(c,o,n,S,e,j){const d=p("VueLoading");return a(),i("div",null,[t("div",V,[t("div",L,[t("div",E,[t("div",T,[t("img",{class:"img-fluid image-object image-main",src:e.productionData.imageUrl,alt:"productionData.title"},null,8,b)]),t("div",P,[(a(!0),i(m,null,f(e.productionData.imagesUrl,r=>(a(),i("div",{Key:r},[t("img",{class:"img-fluid image-object image-others",src:r,alt:"#"},null,8,I)],8,y))),256))])]),t("div",R,[t("h3",U,s(e.productionData.title),1),t("p",null,s(e.productionData.description),1),t("p",null,[t("span",B,"$"+s(e.productionData.price),1),l(s(" ")),t("del",null,s(e.productionData.origin_price),1),l("NTD / "+s(e.productionData.unit),1)])])])]),g(d,{active:e.isLoading,"can-cancel":!0,"is-full-page":e.fullPage},null,8,["active","is-full-page"])])}const A=_(x,[["render",N],["__scopeId","data-v-7c1f7fdf"]]);export{A as default};
