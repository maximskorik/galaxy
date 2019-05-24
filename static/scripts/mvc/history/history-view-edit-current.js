define(["exports","underscore","jquery","onload/loadConfig","app","mvc/history/history-view-edit","mvc/base-mvc","utils/localization"],function(e,t,n,o,i,s,r,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=f(t),d=f(n),u=f(s),c=f(r),h=f(a);function f(e){return e&&e.__esModule?e:{default:e}}var p=c.default.SessionStorageModel.extend({defaults:{tagsEditorShown:!1,annotationEditorShown:!1,scrollPosition:0},toString:function(){return"HistoryViewPrefs(".concat(JSON.stringify(this.toJSON()),")")}});p.storageKey=function(){return"history-panel"};var g,y=u.default.HistoryViewEdit,m=y.extend({className:"".concat(y.prototype.className," current-history-panel"),HDCAViewClass:y.prototype.HDCAViewClass.extend({foldoutStyle:"drilldown"}),emptyMsg:[(0,h.default)("This history is empty"),". ",(0,h.default)("You can "),'<a class="uploader-link" href="javascript:void(0)">',(0,h.default)("load your own data"),"</a>",(0,h.default)(" or "),'<a class="get-data-link" href="javascript:void(0)">',(0,h.default)("get data from an external source"),"</a>"].join(""),initialize:function(e){e=e||{},this.preferences=new p(l.default.extend({id:p.storageKey()},l.default.pick(e,l.default.keys(p.prototype.defaults)))),y.prototype.initialize.call(this,e),this.panelStack=[],this.currentContentId=e.currentContentId||null},_setUpListeners:function(){y.prototype._setUpListeners.call(this);var e=this;this.on("new-model",function(){e.preferences.set("scrollPosition",0)})},loadCurrentHistory:function(){return this.loadHistory(null,{url:"".concat((0,o.getAppRoot)(),"history/current_history_json")})},switchToHistory:function(e,t){return(0,i.getGalaxyInstance)().user.isAnonymous()?(this.trigger("error",(0,h.default)("You must be logged in to switch histories"),(0,h.default)("Anonymous user")),d.default.when()):this.loadHistory(e,{url:"".concat((0,o.getAppRoot)(),"history/set_as_current?id=").concat(e)})},createNewHistory:function(e){return(0,i.getGalaxyInstance)().user.isAnonymous()?(this.trigger("error",(0,h.default)("You must be logged in to create histories"),(0,h.default)("Anonymous user")),d.default.when()):this.loadHistory(null,{url:"".concat((0,o.getAppRoot)(),"history/create_new_current")})},setModel:function(e,t,n){return y.prototype.setModel.call(this,e,t,n),this.model&&this.model.id&&(this.log("checking for updates"),this.model.checkForUpdates()),this},_setUpModelListeners:function(){return y.prototype._setUpModelListeners.call(this),this.listenTo(this.model,{"change:nice_size change:size":function(){this.trigger("history-size-change",this,this.model,arguments)},"change:id":function(){this.once("loading-done",function(){this.model.checkForUpdates()})}})},_setUpCollectionListeners:function(){y.prototype._setUpCollectionListeners.call(this),this.listenTo(this.collection,"state:ready",function(e,t,n){e.get("visible")||this.collection.storage.includeHidden()||this.removeItemView(e)})},_setUpBehaviors:function(e){e=e||this.$el;var t=this;return y.prototype._setUpBehaviors.call(t,e),this._debouncedScrollCaptureHandler||(this._debouncedScrollCaptureHandler=l.default.debounce(function(){t.$el.is(":visible")&&t.preferences.set("scrollPosition",(0,d.default)(this).scrollTop())},40)),t.$scrollContainer(e).off("scroll",this._debouncedScrollCaptureHandler).on("scroll",this._debouncedScrollCaptureHandler),t},_buildNewRender:function(){if(!this.model)return(0,d.default)();var e=y.prototype._buildNewRender.call(this);return e.find(".search").prependTo(e.find("> .controls")),this._renderQuotaMessage(e),e},_renderQuotaMessage:function(e){return e=e||this.$el,(0,d.default)(this.templates.quotaMsg({},this)).prependTo(e.find(".messages"))},_renderTags:function(e){var t=this;y.prototype._renderTags.call(t,e),t.preferences.get("tagsEditorShown")&&t.tagsEditor.toggle(!0),t.listenTo(t.tagsEditor,"hiddenUntilActivated:shown hiddenUntilActivated:hidden",function(e){t.preferences.set("tagsEditorShown",e.hidden)})},_renderAnnotation:function(e){var t=this;y.prototype._renderAnnotation.call(t,e),t.preferences.get("annotationEditorShown")&&t.annotationEditor.toggle(!0),t.listenTo(t.annotationEditor,"hiddenUntilActivated:shown hiddenUntilActivated:hidden",function(e){t.preferences.set("annotationEditorShown",e.hidden)})},_swapNewRender:function(e){y.prototype._swapNewRender.call(this,e);var t=this;return l.default.delay(function(){var e=t.preferences.get("scrollPosition");e&&t.scrollTo(e,0)},10),this},_attachItems:function(e){y.prototype._attachItems.call(this,e);return this.currentContentId&&this._setCurrentContentById(this.currentContentId),this},addItemView:function(e,t,n){var o=y.prototype.addItemView.call(this,e,t,n);return o&&this.panelStack.length?this._collapseDrilldownPanel():o},_setUpItemViewListeners:function(e){return y.prototype._setUpItemViewListeners.call(this,e),this.listenTo(e,{"expanded:drilldown":function(e,t){this._expandDrilldownPanel(t)},"collapsed:drilldown":function(e,t){this._collapseDrilldownPanel(t)}})},setCurrentContent:function(e){this.$(".history-content.current-content").removeClass("current-content"),this.currentContentId=e?(e.$el.addClass("current-content"),e.model.id):null},_setCurrentContentById:function(e){var t=this.viewFromModelId(e)||null;this.setCurrentContent(t)},_expandDrilldownPanel:function(e){this.panelStack.push(e),this.$controls().add(this.$list()).hide(),e.parentName=this.model.get("name"),e.delegateEvents().render().$el.appendTo(this.$el)},_collapseDrilldownPanel:function(e){this.panelStack.pop(),this.$controls().add(this.$list()).show()},events:l.default.extend(l.default.clone(y.prototype.events),{"click .uploader-link":function(e){(0,i.getGalaxyInstance)().upload.show(e)},"click .get-data-link":function(e){var t=(0,d.default)(".toolMenuContainer");t.parent().scrollTop(0),t.find('span:contains("Get Data")').click()}}),listenToGalaxy:function(e){this.listenTo(e,{"center-frame:load":function(e){var n=e.fullpath,o=null;l.default.find({display:/datasets\/([a-f0-9]+)\/display/,edit:/datasets\/([a-f0-9]+)\/edit/,report_error:/dataset\/errors\?id=([a-f0-9]+)/,rerun:/tool_runner\/rerun\?id=([a-f0-9]+)/,show_params:/datasets\/([a-f0-9]+)\/show_params/},function(e,t){return o=l.default.result(n.match(e),1)}),this._setCurrentContentById(o?"dataset-".concat(o):null)},"center-panel:load":function(e){try{var t=e.model.attributes.dataset_id||null;if(null===t)throw"Invalid id";this._setCurrentContentById("dataset-".concat(t))}catch(e){this._setCurrentContentById()}},"activate-hda":function(e){this._setCurrentContentById("dataset-".concat(e))}})},connectToQuotaMeter:function(e){return e&&(this.listenTo(e,"quota:over",this.showQuotaMessage),this.listenTo(e,"quota:under",this.hideQuotaMessage),this.on("rendered rendered:initial",function(){e&&e.isOverQuota()&&this.showQuotaMessage()})),this},clearMessages:function(e){var t=l.default.isUndefined(e)?this.$messages().children('[class$="message"]'):(0,d.default)(e.currentTarget);return(t=t.not(".quota-message")).fadeOut(this.fxSpeed,function(){(0,d.default)(this).remove()}),this},showQuotaMessage:function(){var e=this.$(".quota-message");e.is(":hidden")&&e.slideDown(this.fxSpeed)},hideQuotaMessage:function(){var e=this.$(".quota-message");e.is(":hidden")||e.slideUp(this.fxSpeed)},unhideHidden:function(){var e=this;return window.confirm((0,h.default)("Really unhide all hidden datasets?"))?e.model.contents._filterAndUpdate({visible:!1,deleted:"",purged:""},{visible:!0}).done(function(){e.model.contents.includeHidden||e.renderItems()}):d.default.when()},deleteHidden:function(){return window.confirm((0,h.default)("Really delete all hidden datasets?"))?this.model.contents._filterAndUpdate({visible:!1,deleted:"",purged:""},{deleted:!0,visible:!0}):d.default.when()},toString:function(){return"CurrentHistoryView(".concat(this.model?this.model.get("name"):"",")")}});m.prototype.templates=(g=c.default.wrapTemplate(['<div class="quota-message errormessage">',(0,h.default)("You are over your disk quota"),". ",(0,h.default)("Tool execution is on hold until your disk usage drops below your allocated quota"),".","</div>"],"history"),l.default.extend(l.default.clone(y.prototype.templates),{quotaMsg:g})),e.default={CurrentHistoryView:m}});