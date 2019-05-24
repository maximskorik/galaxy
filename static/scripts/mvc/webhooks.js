define(["exports","backbone","onload/loadConfig","utils/utils"],function(t,e,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(e),i=a(r);function a(t){return t&&t.__esModule?t:{default:t}}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=o.default.Collection.extend({url:function(){return"".concat((0,n.getAppRoot)(),"api/webhooks")}}),u=o.default.View.extend({el:"#webhook-view",initialize:function(e){var n=this,t=e.toolId||"",r=e.toolVersion||"";this.$el.attr("tool_id",t),this.$el.attr("tool_version",r),(new l).fetch({success:function(t){e.type&&t.reset(c(t,e.type)),0<t.length&&n.render(function(t){var e=t.pluck("weight"),n=e.reduce(function(t,e){return t+e}),r=new Map;e.forEach(function(t,e){r.set(e,parseFloat((t/n).toFixed(2)))});var o=[],i=!0,a=!1,l=void 0;try{for(var u,c=r[Symbol.iterator]();!(i=(u=c.next()).done);i=!0)for(var f=y(u.value,2),d=f[0],s=f[1],h=0;h<100*s;h++)o.push(d)}catch(t){a=!0,l=t}finally{try{i||null==c.return||c.return()}finally{if(a)throw l}}return t.at(o[Math.floor(Math.random()*o.length)])}(t))}})},render:function(t){var e=t.toJSON();return this.$el.html('<div id="'.concat(e.id,'"></div>')),i.default.appendScriptStyle(e),this}});function c(t,n){return t.models.filter(function(t){var e=t.get("type");return!!e&&-1!==e.indexOf(n)})}t.default={WebhookView:u,load:function(e){(new l).fetch({async:void 0===e.async||e.async,success:function(t){e.type&&t.reset(c(t,e.type)),e.callback(t)}})}}});