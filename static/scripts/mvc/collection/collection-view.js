define(["exports","underscore","onload/loadConfig","mvc/list/list-view","mvc/collection/collection-li","utils/localization"],function(e,t,n,i,a,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(t),o=r(i),c=r(a),d=r(l);function r(e){return e&&e.__esModule?e:{default:e}}var p=o.default.ModelListPanel,u=p.extend({_logNamespace:"collections",className:"".concat(p.prototype.className," dataset-collection-panel"),DatasetDCEViewClass:c.default.DatasetDCEListItemView,modelCollectionKey:"elements",initialize:function(e){p.prototype.initialize.call(this,e),this.linkTarget=e.linkTarget||"_blank",this.dragItems=!0,this.hasUser=e.hasUser,this.panelStack=[],this.parentName=e.parentName,this.foldoutStyle=e.foldoutStyle||"foldout",this.downloadUrl="".concat((0,n.getAppRoot)(),"api/dataset_collections/").concat(this.model.attributes.id,"/download")},getNestedDCDCEViewClass:function(){return c.default.NestedDCDCEListItemView.extend({foldoutPanelClass:u})},_queueNewRender:function(e,t){t=void 0===t?this.fxSpeed:t;var n=this;this.handleWarning(e),n.log("_queueNewRender:",e,t),n._swapNewRender(e),n.trigger("rendered",n)},handleWarning:function(e){var t=this.views.length,n=this.model.get("element_count");if(n&&n!==t){var i=(0,d.default)("displaying only ".concat(t," of ").concat(n," items"));e.find(".elements-warning").html('<div class="warningmessagesmall">'.concat(i,"</div>"))}},_filterCollection:function(){return this.model.getVisibleContents()},_getItemViewClass:function(e){switch(e.get("element_type")){case"hda":return this.DatasetDCEViewClass;case"dataset_collection":return this.getNestedDCDCEViewClass()}throw new TypeError("Unknown element type:",e.get("element_type"))},_getItemViewOptions:function(e){var t=p.prototype._getItemViewOptions.call(this,e);return s.default.extend(t,{linkTarget:this.linkTarget,hasUser:this.hasUser,foldoutStyle:this.foldoutStyle})},_setUpItemViewListeners:function(e){return p.prototype._setUpItemViewListeners.call(this,e),this.listenTo(e,{"expanded:drilldown":function(e,t){this._expandDrilldownPanel(t)},"collapsed:drilldown":function(e,t){this._collapseDrilldownPanel(t)}}),this},_expandDrilldownPanel:function(e){this.panelStack.push(e),this.$("> .controls").add(this.$list()).hide(),e.parentName=this.model.get("name"),this.$el.append(e.render().$el)},_collapseDrilldownPanel:function(e){this.panelStack.pop(),this.render()},events:{"click .navigation .back":"close"},close:function(e){this.remove(),this.trigger("close")},toString:function(){return"CollectionView(".concat(this.model?this.model.get("name"):"",")")}});function f(e){var t=e.get("collection_type");return"list"==t?(0,d.default)("list"):"paired"==t?(0,d.default)("dataset pair"):"list:paired"==t?(0,d.default)("list of pairs"):(0,d.default)("nested list")}function h(e){var t,n=e.get("element_count"),i="a ".concat(f(e));n&&(1==n?t="with 1 item":n&&(t="with ".concat(n," items")),i="".concat(i," ").concat((0,d.default)(t)));return i}u.prototype.templates=s.default.extend(s.default.clone(p.prototype.templates),{controls:function(e,t){var n=h(t.model);return'\n        <div class="controls">\n            <div class="navigation">\n            <a class="back" href="javascript:void(0)">\n                <span class="fa fa-icon fa-angle-left"></span>\n                '.concat((0,d.default)("Back to "),"\n                ").concat(s.default.escape(t.parentName),'\n            </a>\n            </div>\n            <div class="title">\n                <div class="name">').concat(s.default.escape(e.name)||s.default.escape(e.element_identifier),'</div>\n                <div class="subtitle">\n                    ').concat(n,'\n                </div>\n            </div>\n            <div class="elements-warning">\n            </div>\n            <div class="tags-display"></div>\n            <div class="actions">\n                <a class="download-btn icon-btn" href="').concat(t.downloadUrl,'"\n                   title="" download="" data-original-title="Download Collection">\n                   <span class="fa fa-floppy-o"></span>\n                </a>\n            </div>\n        </div>')}}),e.default={collectionTypeDescription:f,collectionDescription:h,CollectionView:u}});