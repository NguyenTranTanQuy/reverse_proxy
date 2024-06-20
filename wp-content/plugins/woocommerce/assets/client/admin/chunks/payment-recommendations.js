"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[5396],{65847:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(69307),o=a(65736),s=a(9818),c=a(22629),i=a(55609),m=a(86020),r=a(14812),l=a(67221),d=a(14599),_=a(60538),u=a(70319),p=a(53736),y=a(52550);const w=document.querySelector('[data-gateway_id="pre_install_woocommerce_payments_promotion"]'),g=()=>{const[e,t]=(0,n.useState)(null),[a,g]=(0,n.useState)(!1),[E,h]=(0,n.useState)(!1),{installAndActivatePlugins:v,dismissRecommendedPlugins:A}=(0,s.useDispatch)(l.PLUGINS_STORE_NAME),{createNotice:N}=(0,s.useDispatch)("core/notices"),{installedPaymentGateway:S,installedPaymentGateways:T,paymentGatewaySuggestions:G,isResolving:f}=(0,s.useSelect)((t=>{const a=E&&(0,p.V7)(e);return{installedPaymentGateway:a&&t(l.PAYMENT_GATEWAYS_STORE_NAME).getPaymentGateway(a),installedPaymentGateways:t(l.PAYMENT_GATEWAYS_STORE_NAME).getPaymentGateways().reduce(((e,t)=>(a===t.id||(e[t.id]=!0),e)),{}),isResolving:t(l.ONBOARDING_STORE_NAME).isResolving("getPaymentGatewaySuggestions"),paymentGatewaySuggestions:t(l.ONBOARDING_STORE_NAME).getPaymentGatewaySuggestions()}}),[E]),P=(0,n.useRef)(!1),R=G&&G.length>0&&!(0,y.j)(G)&&!a;if((0,n.useEffect)((()=>{if((R||w&&!f)&&!P.current){P.current=!0;const e=(G||[]).reduce(((e,t)=>t.plugins&&t.plugins.length>0?{...e,[t.plugins[0].replace(/\-/g,"_")+"_displayed"]:!0}:e),{woocommerce_payments_displayed:!!w});(0,d.recordEvent)("settings_payments_recommendations_pageview",e)}}),[R,w,f]),(0,n.useEffect)((()=>{S&&(window.location.href=S.settings_url)}),[S]),!R)return null;const b=async()=>{g(!0),(0,d.recordEvent)("settings_payments_recommendations_dismiss",{}),await A("payments")||(g(!1),N("error",(0,o.__)('There was a problem hiding the "Additional ways to get paid" card.',"woocommerce")))},k=(G||[]).filter((e=>!T[e.id]&&e.plugins?.length&&(!window.wcAdminFeatures["wc-pay-promotion"]||!e.id.startsWith("woocommerce_payments")))).map((a=>({key:a.id,title:(0,n.createElement)(n.Fragment,null,a.title,a.recommended&&(0,n.createElement)(m.Pill,null,(0,o.__)("Recommended","woocommerce"))),content:(0,c.decodeEntities)(a.content),after:(0,n.createElement)(i.Button,{isSecondary:!0,onClick:()=>(a=>{e||(t(a.id),(0,d.recordEvent)("settings_payments_recommendations_setup",{extension_selected:a.plugins[0]}),v([a.plugins[0]]).then((()=>{h(!0)})).catch((e=>{(0,u.a)(e),t(null)})))})(a),isBusy:e===a.id,disabled:!!e},a.actionText||(0,o.__)("Get started","woocommerce")),before:(0,n.createElement)("img",{src:a.square_image||a.image_72x72||a.image,alt:""})})));return(0,n.createElement)(i.Card,{size:"medium",className:"woocommerce-recommended-payments-card"},(0,n.createElement)(i.CardHeader,null,(0,n.createElement)("div",{className:"woocommerce-recommended-payments-card__header"},(0,n.createElement)(r.Text,{variant:"title.small",as:"p",size:"20",lineHeight:"28px"},(0,o.__)("Recommended payment providers","woocommerce")),(0,n.createElement)(r.Text,{className:"woocommerce-recommended-payments__header-heading",variant:"caption",as:"p",size:"12",lineHeight:"16px"},(0,o.__)('We recommend adding one of the following payment extensions to your store. The extension will be installed and activated for you when you click "Get started".',"woocommerce"))),(0,n.createElement)("div",{className:"woocommerce-card__menu woocommerce-card__header-item"},(0,n.createElement)(m.EllipsisMenu,{label:(0,o.__)("Task List Options","woocommerce"),renderContent:()=>(0,n.createElement)("div",{className:"woocommerce-review-activity-card__section-controls"},(0,n.createElement)(i.Button,{onClick:b},(0,o.__)("Hide this","woocommerce")))}))),(0,n.createElement)(m.List,{items:k}),(0,n.createElement)(i.CardFooter,null,(0,n.createElement)(i.Button,{href:"https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?utm_source=payments_recommendations",target:"_blank",isTertiary:!0},(0,o.__)("Discover other payment providers","woocommerce"),(0,n.createElement)(_.Z,{size:18}))))}}}]);