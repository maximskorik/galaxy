define(["exports","underscore","jquery","backbone","app","onload/loadConfig","mvc/history/history-contents","mvc/base/controlled-fetch-collection","utils/utils","mvc/base-mvc","utils/localization"],function(t,e,n,i,r,s,o,u,c,a,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryCollection=t.History=void 0;var l=_(e),h=_(n),f=_(i),p=_(u),g=_(c),m=_(a),y=_(d);function _(t){return t&&t.__esModule?t:{default:t}}var v=t.History=f.default.Model.extend(m.default.LoggableMixin).extend(m.default.mixin(m.default.SearchableModelMixin,{_logNamespace:"history",UPDATE_DELAY:4e3,defaults:{model_class:"History",id:null,name:"Unnamed History",state:"new",deleted:!1,contents_active:{},contents_states:{}},contentsClass:o.HistoryContents,searchAttributes:["name","annotation","tags"],searchAliases:{title:"name",tag:"tags"},initialize:function(t,e){e=e||{},this.logger=e.logger||null,this.log("".concat(this,".initialize:"),t,e),this.urlRoot="".concat((0,s.getAppRoot)(),"api/histories"),this.contents=new this.contentsClass([],{history:this,historyId:this.get("id"),order:e.order}),this._setUpListeners(),this._setUpCollectionListeners(),this.updateTimeoutId=null},_setUpListeners:function(){return this.on({error:function(t,e,n,i,r){this.clearUpdateTimeout()},"change:id":function(t,e){this.contents&&(this.contents.historyId=e)}})},_setUpCollectionListeners:function(){return this.contents?this.listenTo(this.contents,{error:function(){this.trigger.apply(this,h.default.makeArray(arguments))}}):this},contentsShown:function(){var t=this.get("contents_active"),e=t.active||0;return e+=this.contents.includeDeleted?t.deleted:0,e+=this.contents.includeHidden?t.hidden:0},nice_size:function(){var t=this.get("size");return t?g.default.bytesToString(t,!0,2):(0,y.default)("(empty)")},toJSON:function(){return l.default.extend(f.default.Model.prototype.toJSON.call(this),{nice_size:this.nice_size()})},get:function(t){return"nice_size"===t?this.nice_size():f.default.Model.prototype.get.apply(this,arguments)},ownedByCurrUser:function(){var t=(0,r.getGalaxyInstance)();return!(!t||!t.user)&&(!t.user.isAnonymous()&&t.user.id===this.get("user_id"))},numOfUnfinishedJobs:function(){var t=this.get("non_ready_jobs");return t?t.length:0},numOfUnfinishedShownContents:function(){return this.contents.runningAndActive().length||0},_fetchContentRelatedAttributes:function(){return this.fetch({data:h.default.param({keys:["size","non_ready_jobs","contents_active","hid_counter"].join(",")})})},refresh:function(r){var s=this;r=r||{};var t=this.lastUpdateTime;return this.contents.allFetched=!1,(0!==this.contents.currentPage?function(){return s.contents.fetchPage(s.contents.currentPage)}:function(){return s.contents.fetchUpdated(t)})().done(function(t,e,n){var i;try{i=new Date(n.getResponseHeader("Date"))}catch(t){console.error(t)}s.lastUpdateTime=i||new Date,s.checkForUpdates(r)})},checkForUpdates:function(t){var e=this;t=t||{};var n=this.UPDATE_DELAY;if(this.id){var i=function(){e.clearUpdateTimeout(),e.updateTimeoutId=setTimeout(function(){e.refresh(t)},n)};0<this.numOfUnfinishedShownContents()?i():this._fetchContentRelatedAttributes().done(function(t){0<e.numOfUnfinishedJobs()?i():e.trigger("ready")})}},clearUpdateTimeout:function(){this.updateTimeoutId&&(clearTimeout(this.updateTimeoutId),this.updateTimeoutId=null)},stopPolling:function(){this.clearUpdateTimeout(),this.contents&&this.contents.stopPolling()},parse:function(t,e){var n=f.default.Model.prototype.parse.call(this,t,e);return n.create_time&&(n.create_time=new Date(n.create_time)),n.update_time&&(n.update_time=new Date(n.update_time)),n},fetchWithContents:function(t,e){var n=this;return(t=t||{}).view="dev-detailed",this.fetch(t).then(function(t){return(n.contents.history=n).contents.setHistoryId(t.id),n.fetchContents(e)})},fetchContents:function(t){return t=t||{},this.lastUpdateTime=new Date,this.contents.fetchCurrentPage(t)},_delete:function(t){return this.get("deleted")?h.default.when():this.save({deleted:!0},t)},purge:function(t){return this.get("purged")?h.default.when():this.save({deleted:!0,purged:!0},t)},undelete:function(t){return this.get("deleted")?this.save({deleted:!1},t):h.default.when()},copy:function(t,e,n){if(t=void 0===t||t,!this.id)throw new Error("You must set the history ID before copying it.");var i={history_id:this.id};t&&(i.current=!0),e&&(i.name=e),n||(i.all_datasets=!1),i.view="dev-detailed";var r=this,s=h.default.post(this.urlRoot,i);return t?s.then(function(t){return new v(t).setAsCurrent().done(function(){r.trigger("copied",r,t)})}):s.done(function(t){r.trigger("copied",r,t)})},setAsCurrent:function(){var t=this,e=h.default.getJSON("".concat((0,s.getAppRoot)(),"history/set_as_current?id=").concat(this.id));return e.done(function(){t.trigger("set-as-current",t)}),e},toString:function(){return"History(".concat(this.get("id"),",").concat(this.get("name"),")")}})),C=p.default.InfinitelyScrollingCollection;t.HistoryCollection=C.extend(m.default.LoggableMixin).extend({_logNamespace:"history",model:v,order:"update_time",limitOnFirstFetch:10,limitPerFetch:10,initialize:function(t,e){e=e||{},this.log("HistoryCollection.initialize",t,e),this.urlRoot="".concat((0,s.getAppRoot)(),"api/histories"),C.prototype.initialize.call(this,t,e),this.includeDeleted=e.includeDeleted||!1,this.currentHistoryId=e.currentHistoryId,this.setUpListeners()},url:function(){return this.urlRoot},setUpListeners:function(){return this.on({"change:deleted":function(t){this.debug("change:deleted",this.includeDeleted,t.get("deleted")),!this.includeDeleted&&t.get("deleted")&&this.remove(t)},copied:function(t,e){this.setCurrent(new v(e,[]))},"set-as-current":function(t){var e=this.currentHistoryId;this.trigger("no-longer-current",e),this.currentHistoryId=t.id}})},_buildFetchData:function(t){return l.default.extend(C.prototype._buildFetchData.call(this,t),{view:"dev-detailed"})},_buildFetchFilters:function(t){var e=C.prototype._buildFetchFilters.call(this,t)||{},n={};return!0!==this.includeDeleted?(n.deleted=!1,n.purged=!1):n.deleted=null,l.default.defaults(e,n)},fetchFirst:function(t){var e=this,n=h.default.when();return this.currentHistoryId&&(n=C.prototype.fetchFirst.call(this,{silent:!0,limit:1,filters:{"encoded_id-in":this.currentHistoryId,deleted:null,purged:""}})),n.then(function(){return(t=t||{}).offset=0,e.fetchMore(t)})},comparators:l.default.extend(l.default.clone(C.prototype.comparators),{name:m.default.buildComparator("name",{ascending:!0}),"name-dsc":m.default.buildComparator("name",{ascending:!1}),size:m.default.buildComparator("size",{ascending:!1}),"size-asc":m.default.buildComparator("size",{ascending:!0})}),sort:function(t){var e=(t=t||{}).silent,n=this.remove(this.get(this.currentHistoryId));return C.prototype.sort.call(this,l.default.defaults({silent:!0},t)),this.unshift(n,{silent:!0}),e||this.trigger("sort",this,t),this},create:function(t,e,n,i){var r=this;return h.default.getJSON("".concat((0,s.getAppRoot)(),"history/create_new_current")).done(function(t){r.setCurrent(new v(t,[],n||{}))})},setCurrent:function(t,e){return e=e||{},this.unshift(t,e),this.currentHistoryId=t.get("id"),e.silent||this.trigger("new-current",t,this),this},toString:function(){return"HistoryCollection(".concat(this.length,",current:").concat(this.currentHistoryId,")")}})});