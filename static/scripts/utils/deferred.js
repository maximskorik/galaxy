define(["exports","jquery","backbone","utils/utils","app"],function(e,t,i,a,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=s(t),n=s(i),r=s(a);function s(e){return e&&e.__esModule?e:{default:e}}e.default=n.default.Model.extend({initialize:function(){this.active={},this.last=null},execute:function(e){var t=this,i=r.default.uid(),a=0<e.length,n=(0,c.getGalaxyInstance)();this.active[i]=!0;var s=u.default.Deferred();s.promise().always(function(){delete t.active[i],a&&n.emit.debug("deferred::execute()","".concat(this.state().charAt(0).toUpperCase()+this.state().slice(1)," ").concat(i))}),u.default.when(this.last).always(function(){t.active[i]?(a&&n.emit.debug("deferred::execute()","Running ".concat(i)),e(s),!a&&s.resolve()):s.reject()}),this.last=s.promise()},reset:function(){var e=(0,c.getGalaxyInstance)();for(var t in e.emit.debug("deferred::execute()","Reset"),this.active)this.active[t]=!1},ready:function(){return u.default.isEmptyObject(this.active)}})});