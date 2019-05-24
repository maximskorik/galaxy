define(["exports"],function(e){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function o(e,t,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function t(e){s(this,t),this.deferred=jQuery.Deferred(),this.queue=[],this.responses=[],this.numToProcess=0,this.running=!1,this.init(e||[]),this.start()}return a(t,[{key:"init",value:function(e){var t=this;e.forEach(function(e){t.add(e)})}},{key:"add",value:function(n){var r=this,o=this.queue.length;return this.numToProcess+=1,this.queue.push(function(){var t=o,e=n();e.done(function(e){r.deferred.notify({curr:t,total:r.numToProcess,response:e})}),e.always(function(e){r.responses.push(e),r.queue.length?r.queue.shift()():r.stop()})}),this}},{key:"start",value:function(){return this.queue.length&&(this.running=!0,this.queue.shift()()),this}},{key:"stop",value:function(e,t){return this.running=!1,this.queue=[],e?this.deferred.reject(t):this.deferred.resolve(this.responses),this.numToProcess=0,this.deferred=jQuery.Deferred(),this}},{key:"done",value:function(e){return this.deferred.done(e)}},{key:"fail",value:function(e){return this.deferred.fail(e)}},{key:"always",value:function(e){return this.deferred.always(e)}},{key:"progress",value:function(e){return this.deferred.progress(e)}}],[{key:"create",value:function(e){return new t(e).deferred}}]),t}(),c=function(e){function n(e){var t;return s(this,n),(t=r(this,u(n).call(this,e))).names={},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,t),a(n,[{key:"add",value:function(e){if(!e.hasOwnProperty("name")||!e.hasOwnProperty("fn"))throw new Error('NamedAjaxQueue.add requires an object with both "name" and "fn": '.concat(JSON.stringify(e)));if(!this.names.hasOwnProperty(e.name))return this.names[e.name]=!0,o(u(n.prototype),"add",this).call(this,e.fn)}},{key:"clear",value:function(){return this.names={},this}}],[{key:"create",value:function(e){return new n(e).deferred}}]),n}();e.default={AjaxQueue:t,NamedAjaxQueue:c}});