export default function(e){const t=SEMICOLON.Core;t.loadJS({file:"js/plugins.parallax.js",id:"canvas-parallax-js"}),t.isFuncTrue(()=>"undefined"!=typeof simpleParallax).then(a=>{if(!a)return!1;if(t.initFunction({class:"has-plugin-parallax",event:"pluginParallaxReady"}),(e=t.getSelector(e,!1)).length<1)return!0;let s=[],u=0;e.forEach(a=>{let e=a.getAttribute("data-parallax-speed")||.4,t=a.getAttribute("data-parallax-scale")||1.25,l=a.getAttribute("data-parallax-overflow")||!1,r=a.getAttribute("data-parallax-max-transition")||0,i=a.getAttribute("data-mobile")||"false",n=a.getAttribute("data-direction")||"up";"true"==l&&(l=!0),SEMICOLON.Mobile.any()&&"false"==i?a.classList.add("mobile-parallax"):s[u]=new simpleParallax(a,{orientation:n,scale:Number(t),overflow:l,delay:Number(e),maxTransition:Number(r)}),u++}),t.getVars.resizers.parallax=()=>SEMICOLON.Modules.parallax()})}