define(["exports","mvc/history/history-view","mvc/history/hda-li","mvc/history/hdca-li","mvc/base-mvc","utils/localization"],function(t,e,n,o,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(e),s=(c(n),c(o),c(i),c(r));function c(t){return t&&t.__esModule?t:{default:t}}var d=a.default.HistoryView,l=d.extend({className:"".concat(d.prototype.className," annotated-history-panel"),_buildNewRender:function(){var t=d.prototype._buildNewRender.call(this);return this.renderHistoryAnnotation(t),t},renderHistoryAnnotation:function(t){var e=this.model.get("annotation");e&&t.find("> .controls .subtitle").text(e)},renderItems:function(t){t=t||this.$el,d.prototype.renderItems.call(this,t);var e=t.find("> .controls");e.find(".contents-container.headers").remove();$('<div class="contents-container headers"/>').append([$('<div class="history-content header"/>').text((0,s.default)("Dataset")),$('<div class="additional-info header"/>').text((0,s.default)("Annotation"))]).appendTo(e);return self.views},_renderItemView$el:function(t){return $('<div class="contents-container"/>').append([t.render(0).$el,$('<div class="additional-info"/>').text(t.model.get("annotation")||"")])},events:_.extend(_.clone(d.prototype.events),{"click .contents-container":function(t){t.stopPropagation(),$(t.currentTarget).find(".list-item .title-bar").click()},"click .icon-btn":function(t){t.stopPropagation();var e=$(t.currentTarget);e.length&&"dropdown"===e.attr("data-toggle")&&e.dropdown("toggle")}}),_clickSectionLink:function(t){var e=$(t.currentTarget).parent().parent().data("section");this.openSection(e)},toString:function(){return"AnnotatedHistoryView(".concat(this.model?this.model.get("name"):"",")")}});t.default={AnnotatedHistoryView:l}});