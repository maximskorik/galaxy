define([],function(){"use strict";function _(n,t){if("number"!=typeof n||"number"!=typeof t)throw"Bad range "+n+","+t;this._min=n,this._max=t}function g(n){var t=n.sort(e),r=[],i=t.shift();t.forEach(function(n){n._min<=i._max?n._max>i._max&&(i._max=n._max):(r.push(i),i=n)}),r.push(i),this._ranges=r}function e(n,t){return n._min<t._min?-1:n._min>t._min?1:n._max<t._max?-1:t._max>n._max?1:0}return _.prototype.min=function(){return this._min},_.prototype.max=function(){return this._max},_.prototype.contains=function(n){return n>=this._min&&n<=this._max},_.prototype.isContiguous=function(){return!0},_.prototype.ranges=function(){return[this]},_.prototype._pushRanges=function(n){n.push(this)},_.prototype.toString=function(){return"["+this._min+"-"+this._max+"]"},g.prototype.min=function(){return this._ranges[0].min()},g.prototype.max=function(){return this._ranges[this._ranges.length-1].max()},g.prototype.lower_bound=function(n){var t=this.ranges();if(n>this.max())return t.length;if(n<this.min())return 0;for(var r=0,i=t.length-1;r<=i;){var e=Math.floor((r+i)/2);if(n>t[e]._max)r=e+1;else{if(!(n<t[e]._min))return e;i=e-1}}return r},g.prototype.contains=function(n){var t=this.lower_bound(n);return!!(t<this._ranges.length&&this._ranges[t].contains(n))},g.prototype.insertRange=function(n){var t=this.lower_bound(n._min);if(t!==this._ranges.length){var r=this.ranges();if(n._max<r[t]._min)this._ranges.splice(t,0,n);else{r[t]._min<n._min&&(n._min=r[t]._min);for(var i=t+1;i<r.length&&r[i]._min<=n._max;)i++;r[--i]._max>n._max&&(n._max=r[i]._max),this._ranges.splice(t,i-t+1,n)}}else this._ranges.push(n)},g.prototype.isContiguous=function(){return 1<this._ranges.length},g.prototype.ranges=function(){return this._ranges},g.prototype._pushRanges=function(n){for(var t=0;t<this._ranges.length;++t)n.push(this._ranges[t])},g.prototype.toString=function(){for(var n="",t=0;t<this._ranges.length;++t)0<t&&(n+=","),n+=this._ranges[t].toString();return n},{Range:_,union:function(n,t){return n instanceof g||(n instanceof Array||(n=[n]),n=new g(n)),t&&n.insertRange(t),n},intersection:function(n,t){for(var r=n.ranges(),i=t.ranges(),e=r.length,a=i.length,o=0,s=0,u=[];o<e&&s<a;){n=r[o],t=i[s];var m=Math.max(n.min(),t.min()),h=Math.min(n.max(),t.max());m<=h&&u.push(new _(m,h)),n.max()>t.max()?++s:++o}return 0==u.length?null:1==u.length?u[0]:new g(u)},coverage:function(n){for(var t=0,r=n.ranges(),i=0;i<r.length;++i){var e=r[i];t+=e.max()-e.min()+1}return t},rangeOver:function(n,t){return n.min()<t.min()?-1:n.min()>t.min()?1:n.max()<t.max()?-1:t.max()>n.max()?1:0},_rangeOrder:e}});