define(["exports","../libs/d3"],function(t,j){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create_chart=function(t,n,e,a){var r,o=t,c=[],i=(l=new Date,new Date(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate(),l.getUTCHours(),0,0));var l;for(r=0;r<24;r++)c.push((s=i,p=r,new Date(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours()-p,s.getMinutes(),s.getSeconds(),s.getMilliseconds())));var s,p;var g=[];for(r=0;r<30;r++)g.push((u=i,d=r,new Date(u.getFullYear(),u.getMonth(),u.getDate()-d,u.getHours(),u.getMinutes(),u.getSeconds(),u.getMilliseconds())));var u,d;var f={top:60,right:30,bottom:50,left:60},h=300,x=0;"hours"==e?x=12.5:"days"==e&&(x=10);var v,m=h+f.left+f.right,y=1.75,b=150;v=0!==R.max(o)?b/R.max(o):1;var w=b+f.top+f.bottom;$(".charts").css("height",w*y);var _=R.select("#".concat(n)).attr("width",m).attr("height",w).attr("preserveAspectRatio","xMidYMin").attr("viewBox","0 0 ".concat(m," ").concat(w)).on("click",function(){var t=R.select(this).attr("class");t=t.split(" "),R.selectAll(".".concat(t[0])).filter(".".concat(t[1])).style("cursor","zoom-in").transition().duration(750).attr("height",w).attr("width",m),R.select(this).style("cursor","default").transition().duration(750).attr("height",w*y).attr("width",m*y)}),M=_.selectAll("g").data(o).enter().append("g").attr("transform",function(t,e){var a=f.left;return"translate(".concat(a+=+e*x,",").concat(f.top,")")}).on("mouseenter",function(t){for(var e=1,a=t;10<=a;)a/=10,e++;var r=4*e+10;R.select(j.event.target.parentElement).select(".tool_tip").select("text").attr("transform","translate( ".concat(f.left-5,", ").concat(b-t*v+f.top+10," )")).attr("visibility","visible").text(t),R.select(j.event.target.parentElement).select(".tool_tip").attr("width","".concat(r,"px")).attr("height","15px").select("rect").attr("transform","translate( ".concat(f.left-r,", ").concat(b-t*v+f.top," )")).attr("width","".concat(r,"px")).attr("height","15px").attr("fill","#ebd9b2")}).on("mouseleave",function(t){R.select(j.event.target.parentElement).select(".tool_tip").select("text").attr("visibility","hidden"),R.select(j.event.target.parentElement).select(".tool_tip").select("rect").attr("width","0").attr("height","0").attr("fill","").text(t)});_.append("g").append("text").attr("class","title").attr("text-anchor","end").attr("transform",function(){return"translate( ".concat(h,",15 )")}).text(a),_.append("g").attr("class","axis").append("path").attr("class","x").attr("d",function(){var t=f.left,e=f.top+b,a=t+h,r=e;return"M".concat(t," ").concat(e," L ").concat(a," ").concat(r)});var D=R.scale.linear().range([b,0]),k=R.svg.axis().scale(D).orient("left").tickFormat(function(t){return R.round(t*R.max(o),0)});_.append("g").attr("class","y axis").attr("id","y_".concat(n)).attr("text-anchor","end").attr("transform","translate( ".concat(f.left,",").concat(f.top,")")).call(k).select(".domain"),_.append("g").append("text").attr("class","ax_title").attr("transform",function(){var t=R.select("#y_".concat(n)).node(),e=f.left-t.getBoundingClientRect().width-5,a=f.top+t.getBoundingClientRect().height/2-30,r="translate(".concat(e,",").concat(a,")rotate(-90)");return r}).text("Number of Jobs"),M.append("rect").attr("y",function(t){return b-t*v}).attr("height",function(t){return t*v}).attr("width",x-1);var B=!1;if("hours"==e){M.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",3).attr("stroke","black").attr("stroke-width",1).attr("pointer-events","none").attr("transform",function(){return"translate( ".concat(x/2,", ").concat(b,")")}),M.append("text").attr("fill","rgb(0,0,0)").attr("transform","translate( 10, ".concat(160," )")).text(function(t,e){return c[e].getHours()<10?"0".concat(String(c[e].getHours())):c[e].getHours()});var C="";B=!1,M.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",function(t,e){var a=0;return c[e].getDate()!=C&&(B?a=20:(a=27,B=!0),C=c[e].getDate()),a}).attr("stroke","black").attr("stroke-width",1).attr("pointer-events","none").attr("transform",function(){return"translate( 0, ".concat(b,")")});var S=C="";B=!1,M.append("text").attr("fill","rgb(0,0,0)").attr("pointer-events","none").text(function(t,e){var a="";return c[e].getDate()!=S&&(a=String(c[e].toLocaleString("en-us",{month:"long"})),a+=" ".concat(String(c[e].getDate())),S=c[e].getDate()),a}).attr("transform",function(t,e){var a=b,r=R.select(this).node().getBBox().width;return c[e].getDate()!=C&&(B?a+=18:(a+=26,B=!0),C=c[e].getDate()),"translate( ".concat(r+2,", ").concat(a," )")})}else if("days"==e){M.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",3).attr("stroke","black").attr("stroke-width",1).attr("pointer-events","none").attr("transform",function(){return"translate( ".concat(x/2,", ").concat(b,")")}),M.append("text").attr("fill","rgb(0,0,0)").attr("transform","translate( 9, ".concat(160," )")).text(function(t,e){return g[e].getDate()<10?"0".concat(String(g[e].getDate())):g[e].getDate()});var E="";B=!1,M.append("line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",function(t,e){var a=0;return g[e].getMonth()!=E&&(B?a=20:(a=27,B=!0),E=g[e].getMonth()),a}).attr("stroke","black").attr("stroke-width",1).attr("pointer-events","none").attr("transform",function(){return"translate( 0, ".concat(b,")")});var O=E="";B=!1,M.append("text").attr("fill","rgb(0,100,0)").attr("pointer-events","none").text(function(t,e){var a="";return g[e].getMonth()!=O&&(a=String(g[e].toLocaleString("en-us",{month:"long"})),a+=" ".concat(String(g[e].getFullYear())),O=g[e].getMonth()),a}).attr("transform",function(t,e){var a=b,r=R.select(this).node().getBBox().width;return g[e].getMonth()!=E&&(B?a+=18:(a+=26,B=!0),E=g[e].getMonth()),"translate( ".concat(r+2,", ").concat(a," )")})}_.append("g").attr("class","tool_tip").append("rect"),_.select(".tool_tip").append("text"),("jc_dy_chart"==n||"jc_hr_chart"==n)&&R.select("#".concat(n)).attr("height",w*y).attr("width",m*y).style("cursor","default")},t.create_histogram=function(t,n,e){var a=t,o={top:60,right:30,bottom:50,left:60},c=150,r=c+o.top+o.bottom,i=300+o.left+o.right,l=R.scale.linear().domain([0,R.max(a)]).range([0,300]);a=R.layout.histogram().bins(l.ticks(20))(a);for(var s,p=[],g=0;g<a.length;g++)p.push(a[g].length);s=0!==R.max(a)?c/R.max(p):1;var u=R.scale.linear().domain([0,R.max(a,function(t){return t.y})]).range([c,0]);var d=R.select("#".concat(n)).attr("viewBox","0 0 ".concat(i," ").concat(r)).attr("width",i).attr("height",r).attr("preserveAspectRatio","xMidYMin").on("click",function(){var t=R.select(this).attr("class");t=t.split(" "),R.selectAll(".".concat(t[0])).filter(".".concat(t[1])).style("cursor","zoom-in").transition().duration(750).attr("height",r).attr("width",i),R.select(this).style("cursor","default").transition().duration(750).attr("height",1.75*r).attr("width",1.75*i)});d.append("g").append("text").attr("class","title").attr("transform",function(){return"translate( ".concat(300,",15 )")}).text(e);var f,h=d.selectAll(".bar").data(a).enter().append("g").attr("class","bar").attr("transform",function(t){return"translate(".concat(+l(t.x)+o.left,",").concat(+u(t.y)+o.top,")")}).on("mouseenter",function(t){for(var e=0,a=t.length;1<=a;)a/=10,e++;var r=4*e+10;R.select(j.event.target.parentElement).select(".tool_tip").select("text").attr("transform","translate( ".concat(o.left-5,", ").concat(c-t.length*s+o.top+10," )")).attr("visibility","visible").text(t.length),R.select(j.event.target.parentElement).select(".tool_tip").attr("width","".concat(r,"px")).attr("height","15px").select("rect").attr("transform","translate( ".concat(o.left-r,", ").concat(c-t.length*s+o.top," )")).attr("width","".concat(r,"px")).attr("height","15px").attr("fill","#ebd9b2")}).on("mouseleave",function(){R.select(j.event.target.parentElement).select(".tool_tip").select("text").attr("visibility","hidden"),R.select(j.event.target.parentElement).select(".tool_tip").select("rect").attr("width","0").attr("height","0").attr("fill","")});f=void 0===a[0]?1:l(a[0].dx);h.append("rect").attr("x",1).attr("width",f-1).attr("height",function(t){return c-u(t.y)});var x=R.svg.axis().scale(l).orient("bottom").tickFormat(function(t){var e=Math.floor(t/60),a=Math.floor(t-60*e);e<10&&(e="0".concat(e));a<10&&(a="0".concat(a));return"".concat(e,":").concat(a)});d.append("g").attr("class","x axis").attr("id","x_".concat(n)).attr("transform","translate( ".concat(o.left,",").concat(150+o.top,")")).call(x),d.append("g").append("text").attr("class","ax_title").attr("transform",function(){var t=R.select("#x_".concat(n)).node(),e=o.left+t.getBoundingClientRect().width/2+30,a=o.top+c+t.getBoundingClientRect().height+10,r="translate(".concat(e,",").concat(a,")");return r}).text("ETA - hrs:mins");var v=R.svg.axis().scale(u).orient("left");d.append("g").attr("class","y axis").attr("id","y_".concat(n)).attr("transform","translate( ".concat(o.left,",").concat(o.top,")")).call(v),d.append("g").append("text").attr("class","ax_title").attr("transform",function(){var t=R.select("#y_".concat(n)).node(),e=o.left-t.getBoundingClientRect().width-5,a=o.top+t.getBoundingClientRect().height/2-30,r="translate(".concat(e,",").concat(a,")rotate(-90)");return r}).text("Number of Jobs"),d.append("g").attr("class","tool_tip").append("rect"),d.select(".tool_tip").append("text")};var R=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,a):{};r.get||r.set?Object.defineProperty(e,a,r):e[a]=t[a]}return e.default=t,e}}(j)});