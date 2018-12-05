define("mvc/upload/composite/composite-row",["exports","utils/localization","utils/utils","mvc/upload/upload-settings","mvc/upload/upload-ftp","mvc/ui/ui-popover","mvc/ui/ui-misc","mvc/ui/ui-select","utils/uploadbox"],function(e,t,s,i,o,n,a,l){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var h=d(t),r=d(s),u=d(i),f=d(o),c=d(n),p=d(a);d(l);e.default=Backbone.View.extend({status_classes:{init:"upload-mode fa fa-exclamation text-primary",ready:"upload-mode fa fa-check text-success",running:"upload-mode fa fa-spinner fa-spin",success:"upload-mode fa fa-check",error:"upload-mode fa fa-exclamation-triangle"},initialize:function(e,t){var s=this;this.app=e,this.model=t.model,this.setElement(this._template()),this.$source=this.$(".upload-source"),this.$settings=this.$(".upload-settings"),this.$status=this.$(".upload-status"),this.$text=this.$(".upload-text"),this.$text_content=this.$(".upload-text-content"),this.$info_text=this.$(".upload-info-text"),this.$info_progress=this.$(".upload-info-progress"),this.$file_name=this.$(".upload-file-name"),this.$file_desc=this.$(".upload-file-desc"),this.$file_size=this.$(".upload-file-size"),this.$progress_bar=this.$(".upload-progress-bar"),this.$percentage=this.$(".upload-percentage"),this.uploadinput=this.$el.uploadinput({ondragover:function(){s.model.get("enabled")&&s.$el.addClass("warning")},ondragleave:function(){s.$el.removeClass("warning")},onchange:function(e){"running"!=s.model.get("status")&&e&&e.length>0&&(s.model.reset({file_data:e[0],file_name:e[0].name,file_size:e[0].size,file_mode:e[0].mode||"local"}),s._refreshReady())}}),this.button_menu=new p.default.ButtonMenu({icon:"fa-caret-down",title:(0,h.default)("Select"),pull:"left"}),this.$source.append(this.button_menu.$el),this.button_menu.addMenu({icon:"fa-laptop",title:(0,h.default)("Choose local file"),onclick:function(){s.uploadinput.dialog()}}),this.app.ftp_upload_site&&this.button_menu.addMenu({icon:"fa-folder-open-o",title:(0,h.default)("Choose FTP file"),onclick:function(){s._showFtp()}}),this.button_menu.addMenu({icon:"fa-edit",title:"Paste/Fetch data",onclick:function(){s.model.reset({file_mode:"new",file_name:"New File"})}}),this.ftp=new c.default.View({title:"Choose FTP file:",container:this.$source.find(".ui-button-menu"),placement:"right"}),this.settings=new c.default.View({title:(0,h.default)("Upload configuration"),container:this.$settings,placement:"bottom"}),this.$text_content.on("change input",function(e){s.model.set({url_paste:$(e.target).val(),file_size:$(e.target).val().length}),s._refreshReady()}),this.$settings.on("click",function(e){s._showSettings()}).on("mousedown",function(e){e.preventDefault()}),this.listenTo(this.model,"change:percentage",function(){s._refreshPercentage()}),this.listenTo(this.model,"change:status",function(){s._refreshStatus()}),this.listenTo(this.model,"change:info",function(){s._refreshInfo()}),this.listenTo(this.model,"change:file_name",function(){s._refreshFileName()}),this.listenTo(this.model,"change:file_mode",function(){s._refreshMode()}),this.listenTo(this.model,"change:file_size",function(){s._refreshFileSize()}),this.listenTo(this.model,"remove",function(){s.remove()}),this.app.collection.on("reset",function(){s.remove()})},render:function(){this.$el.attr("id","upload-row-"+this.model.id),this.$file_name.html(_.escape(this.model.get("file_name")||"-")),this.$file_desc.html(this.model.get("file_desc")||"Unavailable"),this.$file_size.html(r.default.bytesToString(this.model.get("file_size"))),this.$status.removeClass().addClass(this.status_classes.init)},remove:function(){Backbone.View.prototype.remove.apply(this)},_refreshReady:function(){this.app.collection.each(function(e){e.set("status",e.get("file_size")>0&&"ready"||"init")})},_refreshMode:function(){"new"==this.model.get("file_mode")?(this.height=this.$el.height(),this.$text.css({width:this.$el.width()-16+"px",top:this.$el.height()-8+"px"}).show(),this.$el.height(this.$el.height()-8+this.$text.height()+16),this.$text_content.val("").trigger("keyup")):(this.$el.height(this.height),this.$text.hide())},_refreshInfo:function(){var e=this.model.get("info");e?this.$info_text.html("<strong>Failed: </strong>"+e).show():this.$info_text.hide()},_refreshPercentage:function(){var e=parseInt(this.model.get("percentage"));0!=e?this.$progress_bar.css({width:e+"%"}):(this.$progress_bar.addClass("no-transition"),this.$progress_bar.css({width:"0%"}),this.$progress_bar[0].offsetHeight,this.$progress_bar.removeClass("no-transition")),this.$percentage.html(100!=e?e+"%":"Adding to history...")},_refreshStatus:function(){var e=this.model.get("status");this.$status.removeClass().addClass(this.status_classes[e]),this.model.set("enabled","running"!=e),this.$text_content.attr("disabled",!this.model.get("enabled")),this.$el.removeClass("table-success table-danger table-warning"),"running"!=e&&"ready"!=e||this.model.set("percentage",0),this.$source.find(".button")["running"==e?"addClass":"removeClass"]("disabled"),"success"==e&&(this.$el.addClass("table-success"),this.model.set("percentage",100),this.$percentage.html("100%")),"error"==e?(this.$el.addClass("table-danger"),this.model.set("percentage",0),this.$info_progress.hide(),this.$info_text.show()):(this.$info_progress.show(),this.$info_text.hide())},_refreshFileName:function(){this.$file_name.html(this.model.get("file_name")||"-")},_refreshFileSize:function(){this.$file_size.html(r.default.bytesToString(this.model.get("file_size")))},_showFtp:function(){if(this.ftp.visible)this.ftp.hide();else{var e=this;this.ftp.empty(),this.ftp.append(new f.default({ftp_upload_site:this.app.ftp_upload_site,onchange:function(t){e.ftp.hide(),"running"!=e.model.get("status")&&t&&(e.model.reset({file_mode:"ftp",file_name:t.path,file_size:t.size,file_path:t.path}),e._refreshReady())}}).$el),this.ftp.show()}},_showSettings:function(){this.settings.visible?this.settings.hide():(this.settings.empty(),this.settings.append(new u.default(this).$el),this.settings.show())},_template:function(){return'<tr class="upload-row"><td><div class="upload-source"/><div class="upload-text-column"><div class="upload-text"><div class="upload-text-info">You can tell Galaxy to download data from web by entering URL in this box (one per line). You can also directly paste the contents of a file.</div><textarea class="upload-text-content form-control"/></div></div></td><td><div class="upload-status"/></td><td><div class="upload-file-desc upload-title"/></td><td><div class="upload-file-name upload-title"/></td><td><div class="upload-file-size upload-size"/></td><td><div class="upload-settings upload-icon-button fa fa-gear"/></td><td><div class="upload-info"><div class="upload-info-text"/><div class="upload-info-progress progress"><div class="upload-progress-bar progress-bar progress-bar-success"/><div class="upload-percentage">0%</div></div></div></td></tr>'}})});