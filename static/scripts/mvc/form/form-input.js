define(["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=Backbone.View.extend({initialize:function(e,t){var i=this;this.app=e,this.app_options=e.model?e.model.attributes:{},this.field=t&&t.field||new Backbone.View,this.model=t&&t.model||new Backbone.Model({text_enable:this.app_options.text_enable||"Enable",text_disable:this.app_options.text_disable||"Disable",text_connected_enable:this.app_options.text_connected_enable||"Add connection to module",text_connected_disable:this.app_options.text_connected_disable||"Remove connection from module",cls_enable:this.app_options.cls_enable||"fa fa-caret-square-o-down",cls_disable:this.app_options.cls_disable||"fa fa-caret-square-o-up",always_refresh:this.app_options.always_refresh}).set(t),this.setElement(this._template()),this.$field=this.$(".ui-form-field"),this.$info=this.$(".ui-form-info"),this.$preview=this.$(".ui-form-preview"),this.$collapsible=this.$(".ui-form-collapsible"),this.$collapsible_text=this.$(".ui-form-collapsible-text"),this.$collapsible_icon=this.$(".ui-form-collapsible-icon"),this.$connected_icon=this.$(".ui-form-connected-icon"),this.$title=this.$(".ui-form-title"),this.$title_text=this.$(".ui-form-title-text"),this.$error_text=this.$(".ui-form-error-text"),this.$error=this.$(".ui-form-error"),this.$backdrop=this.$(".ui-form-backdrop"),this.$field.prepend(this.field.$el);var s=this.model.get("collapsible_value"),l=JSON.stringify(this.model.get("value"));this.field.connected=l==JSON.stringify({__class__:"ConnectedValue"}),this.field.collapsed=this.field.connected||void 0!==s&&JSON.stringify(this.model.get("value"))==JSON.stringify(s),this.listenTo(this.model,"change",this.render,this),this.render();var o=this;this.$collapsible_icon.on("click",function(){o.field.collapsed=!o.field.collapsed,o.field.connected=!1,e.trigger&&e.trigger("change"),o.render()}),this.$connected_icon.on("click",function(){o.field.connected=!o.field.connected,o.field.collapsed=o.field.connected,e.trigger&&e.trigger("change"),o.render()}),this.field.model&&!this.model.get("always_refresh")&&this.listenTo(this.field.model,"change:value",function(){o.reset()}),this.field.model&&this.listenTo(this.field.model,"error",function(e){e?i.error(e):i.reset()})},backdrop:function(){this.model.set("backdrop",!0)},error:function(e){this.model.set("error_text",e)},reset:function(){!this.model.get("fixed")&&this.model.set("error_text",null)},render:function(){$(".tooltip").hide();var e=this.model.get("help",""),t=this.model.get("argument");t&&-1==e.indexOf("(".concat(t,")"))&&(e+=" (".concat(t,")")),this.$info.html(e),this.$el[this.model.get("hidden")?"hide":"show"]();var i=_.escape(this.model.get("text_value")).replace(/\n/g,"<br />");this.$preview[this.field.collapsed&&this.model.get("collapsible_preview")||this.model.get("disabled")?"show":"hide"]().html(i);var s=this.model.get("error_text");this.$error[s?"show":"hide"](),this.$el[s?"addClass":"removeClass"]("alert alert-danger"),this.$error_text.html(s),this.$backdrop[this.model.get("backdrop")?"show":"hide"](),this.field.collapsed||this.model.get("disabled")?this.$field.hide():this.$field.show(),this.field.model&&this.field.model.set({color:this.model.get("color"),style:this.model.get("style")});var l=this.field.connected,o=!this.field.collapsible_disabled&&!this.model.get("disabled")&&void 0!==this.model.get("collapsible_value"),d=o&&this.model.get("connectable");if(o||d){var a=this.field.collapsed?"enable":"disable";if(this.$title_text.hide(),this.$collapsible.show(),this.$collapsible_text.text(this.model.get("label")),o&&!l?this.$collapsible_icon.removeClass().addClass("icon ui-form-collapsible-icon").addClass(this.model.get("cls_".concat(a))).tooltip("dispose").attr("data-original-title",this.model.get("text_".concat(a))).tooltip({placement:"bottom"}).show():this.$collapsible_icon.hide(),d){var n=this.field.connected?"fa fa-times":"fa fa-arrows-h",r=!l&&o?"ml-1":"",c=this.field.connected?"disable":"enable";this.$connected_icon.removeClass().addClass("icon ui-form-connected-icon").addClass(n).addClass(r).tooltip("dispose").attr("data-original-title",this.model.get("text_connected_".concat(c))).tooltip({placement:"bottom"}).show()}else this.$connected_icon.hide()}else this.$title_text.show().text(this.model.get("label")),this.$collapsible.hide()},_template:function(){return $("<div/>").addClass("ui-form-element").append($("<div/>").addClass("ui-form-error").append($("<span/>").addClass("fa fa-arrow-down mr-1")).append($("<span/>").addClass("ui-form-error-text"))).append($("<div/>").addClass("ui-form-title").append($("<div/>").addClass("ui-form-collapsible").append($("<i/>").addClass("ui-form-collapsible-icon")).append($("<i/>").addClass("ui-form-connected-icon")).append($("<span/>").addClass("ui-form-collapsible-text ml-1"))).append($("<span/>").addClass("ui-form-title-text"))).append($("<div/>").addClass("ui-form-field").append($("<span/>").addClass("ui-form-info form-text text-muted mt-2")).append($("<div/>").addClass("ui-form-backdrop"))).append($("<div/>").addClass("ui-form-preview"))}})});