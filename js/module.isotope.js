export default function(o){const r=SEMICOLON.Core;r.loadJS({file:"js/plugins.isotope.js",id:"canvas-isotope-js"}),r.isFuncTrue(()=>"undefined"!=typeof Isotope).then(t=>!!t&&(r.initFunction({class:"has-plugin-isotope",event:"pluginIsotopeReady"}),(o=r.getSelector(o)).length<1||void o.each(function(){let t=jQuery(this),o=t.attr("data-transition")||"0.65s",e=t.attr("data-layout")||"masonry",i=t.attr("data-stagger")||0,a=t.attr("data-basewidth")||".portfolio-item:not(.wide):eq(0)",s=!0,n;jQuery("body").hasClass("rtl")&&(s=!1),n=t.hasClass("portfolio")||t.hasClass("post-timeline")?t.isotope({layoutMode:e,isOriginLeft:s,transitionDuration:o,stagger:Number(i),percentPosition:!0,masonry:{columnWidth:t.find(a)[0]}}):t.isotope({layoutMode:e,isOriginLeft:s,transitionDuration:o,stagger:Number(i),percentPosition:!0}),t.data("isotope")&&t.addClass("has-init-isotope");let l=setInterval(function(){t.find(".lazy.lazy-loaded").length==t.find(".lazy").length&&(setTimeout(function(){t.filter(".has-init-isotope").isotope("layout")},800),clearInterval(l))},1e3);jQuery(window).on("lazyLoadLoaded",function(){t.filter(".has-init-isotope").isotope("layout")}),r.getVars.resizers.isotope=()=>{t.filter(".has-init-isotope").isotope("layout")}})))}