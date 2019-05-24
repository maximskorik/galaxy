define([],function(){"use strict";function a(t,e){return this.numPages=null,this.currPage=0,this.init(t,e)}function s(t){return $(['<li><a href="javascript:void(0);">',t,"</a></li>"].join(""))}a.prototype.DATA_KEY="pagination",a.prototype.defaults={startingPage:0,perPage:20,totalDataSize:null,currDataSize:null},a.prototype.init=function(t,e){return e=e||{},this.$element=t,this.options=$.extend(!0,{},this.defaults,e),this.currPage=this.options.startingPage,null!==this.options.totalDataSize&&(this.numPages=Math.ceil(this.options.totalDataSize/this.options.perPage),this.currPage>=this.numPages&&(this.currPage=this.numPages-1)),this.$element.data(a.prototype.DATA_KEY,this),this._render(),this},a.prototype._render=function(){return 0===this.options.totalDataSize||1===this.numPages||(0<this.numPages?(this._renderPages(),this._scrollToActivePage()):this._renderPrevNext()),this},a.prototype._renderPrevNext=function(){var t=this,e=s("Prev"),i=s("Next"),n=$("<ul/>").addClass("pagination pagination-prev-next");return 0===this.currPage?e.addClass("disabled"):e.click(function(){t.prevPage()}),this.numPages&&this.currPage===this.numPages-1||this.options.currDataSize&&this.options.currDataSize<this.options.perPage?i.addClass("disabled"):i.click(function(){t.nextPage()}),this.$element.html(n.append([e,i])),this.$element},a.prototype._renderPages=function(){for(var e=this,t=$("<div>").addClass("pagination-scroll-container"),i=$("<ul/>").addClass("pagination pagination-page-list"),n=function(t){e.goToPage($(this).data("page"))},a=0;a<this.numPages;a+=1){var r=s(a+1).attr("data-page",a).click(n);a===this.currPage&&r.addClass("active"),i.append(r)}return this.$element.html(t.html(i))},a.prototype._scrollToActivePage=function(){var t=this.$element.find(".pagination-scroll-container");if(!t.length)return this;var e=this.$element.find("li.active"),i=t.width()/2;return t.scrollLeft(t.scrollLeft()+e.position().left-i),this},a.prototype.goToPage=function(t){return t<=0&&(t=0),this.numPages&&t>=this.numPages&&(t=this.numPages-1),t===this.currPage||(this.currPage=t,this.$element.trigger("pagination.page-change",this.currPage),this._render()),this},a.prototype.prevPage=function(){return this.goToPage(this.currPage-1)},a.prototype.nextPage=function(){return this.goToPage(this.currPage+1)},a.prototype.page=function(){return this.currPage},a.create=function(t,e){return new a(t,e)},$.fn.extend({pagination:function(t){var e=$.makeArray(arguments).slice(1);if("object"===$.type(t))return this.map(function(){return a.create($(this),t),this});var i=$(this[0]).data(a.prototype.DATA_KEY);if(i){if("string"!==$.type(t))return i;var n=i[t];if("function"===$.type(n))return n.apply(i,e)}}})});