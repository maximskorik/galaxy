define(["exports","jquery","underscore"],function(t,e,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=(r=e)&&r.__esModule?r:{default:r},a=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,o):{};r.get||r.set?Object.defineProperty(e,o,r):e[o]=t[o]}return e.default=t,e}}(o);var n=i.default;t.default=function(e){(e=e||{}).tooltipConfig=e.tooltipConfig||{placement:"bottom"},e.classes=["icon-btn"].concat(e.classes||[]),e.disabled&&e.classes.push("disabled");var t=['<a class="',e.classes.join(" "),'"',e.title?' title="'.concat(e.title,'"'):"",!e.disabled&&e.target?' target="'.concat(e.target,'"'):"",' href="',!e.disabled&&e.href?e.href:"javascript:void(0);",'">','<span class="fa ',e.faIcon,'"></span>',"</a>"].join(""),o=n(t).tooltip(e.tooltipConfig);return a.isFunction(e.onclick)&&o.click(function(t){o.tooltip("hide"),o.parent().attr("tabindex",-1).focus(),e.onclick.apply(this,arguments)}),o}});