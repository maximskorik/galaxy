define(["exports","underscore","jquery","backbone","onload/loadConfig","app","libs/toastr","mvc/library/library-model","mvc/library/library-dataset-view"],function(t,e,a,o,l,d,i,n,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(e),c=u(a),f=u(o),p=u(i),_=u(n),m=u(s);function u(t){return t&&t.__esModule?t:{default:t}}var g=f.default.View.extend({events:{"click .undelete_dataset_btn":"undeleteDataset","click .undelete_folder_btn":"undeleteFolder","click .edit_folder_btn":"startModifications","click .cancel_folder_btn":"cancelModifications","click .save_folder_btn":"saveModifications"},defaults:{type:null,visibility_config:{edit_folder_btn:!1,save_folder_btn:!1,cancel_folder_btn:!1,permission_folder_btn:!1},edit_mode:!1},initialize:function(t){this.options=r.default.defaults(t||{},this.defaults),this.render(this.options)},render:function(t){this.options=r.default.extend(this.options,t);var e=this.options.model,a=null,o=(0,d.getGalaxyInstance)();return"folder"===e.get("type")||"LibraryFolder"===e.get("model_class")?(this.options.type="folder",this.prepareButtons(e),a=e.get("deleted")?this.templateRowDeletedFolder():this.templateRowFolder()):"file"===e.get("type")||"LibraryDatasetDatasetAssociation"===e.get("model_class")||"LibraryDataset"===e.get("model_class")?(this.options.type="file",a=e.get("deleted")?this.templateRowDeletedFile():this.templateRowFile()):(o.emit.error("Unknown library item type found."),o.emit.error(e.get("type")||e.get("model_class"))),this.setElement(a({content_item:e,edit_mode:this.options.edit_mode,button_config:this.options.visibility_config})),this.$el.show(),this},prepareButtons:function(t){var e=this.options.visibility_config;!1===this.options.edit_mode?(e.save_folder_btn=!1,!(e.cancel_folder_btn=!1)===t.get("deleted")?(e.edit_folder_btn=!1,e.permission_folder_btn=!1):!1===t.get("deleted")&&(e.save_folder_btn=!1,!(e.cancel_folder_btn=!1)===t.get("can_modify")&&(e.edit_folder_btn=!0),!0===t.get("can_manage")&&(e.permission_folder_btn=!0))):!0===this.options.edit_mode&&(e.edit_folder_btn=!1,e.permission_folder_btn=!1,e.save_folder_btn=!0,e.cancel_folder_btn=!0),this.options.visibility_config=e},showDatasetDetails:function(){(0,d.getGalaxyInstance)().libraries.datasetView=new m.default.LibraryDatasetView({id:this.id})},undeleteDataset:function(t){(0,c.default)(".tooltip").hide();var o=(0,d.getGalaxyInstance)(),i=this,n=(0,c.default)(t.target).closest("tr").data("id"),e=o.libraries.folderListView.collection.get(n);e.url="".concat(e.urlRoot+e.id,"?undelete=true"),e.destroy({success:function(t,e){o.libraries.folderListView.collection.remove(n);var a=new _.default.Item(e);o.libraries.folderListView.collection.add(a),o.libraries.folderListView.collection.sortFolder("name","asc"),p.default.success("Dataset undeleted. Click this to see it.","",{onclick:function(){var t=i.model.get("folder_id");window.location="".concat((0,l.getAppRoot)(),"library/list#folders/").concat(t,"/datasets/").concat(i.id)}})},error:function(t,e){void 0!==e.responseJSON?p.default.error("Dataset was not undeleted. ".concat(e.responseJSON.err_msg)):p.default.error("An error occured! Dataset was not undeleted. Please try again.")}})},undeleteFolder:function(t){var o=(0,d.getGalaxyInstance)();(0,c.default)(".tooltip").hide();var i=(0,c.default)(t.target).closest("tr").data("id"),e=o.libraries.folderListView.collection.get(i);e.url="".concat(e.urlRoot+e.id,"?undelete=true"),e.destroy({success:function(t,e){o.libraries.folderListView.collection.remove(i);var a=new _.default.FolderAsModel(e);o.libraries.folderListView.collection.add(a),o.libraries.folderListView.collection.sortFolder("name","asc"),p.default.success("Folder undeleted.")},error:function(t,e){void 0!==e.responseJSON?p.default.error("Folder was not undeleted. ".concat(e.responseJSON.err_msg)):p.default.error("An error occured! Folder was not undeleted. Please try again.")}})},startModifications:function(){this.options.edit_mode=!0,this.repaint()},cancelModifications:function(){this.options.edit_mode=!1,this.repaint()},saveModifications:function(){var t=(0,d.getGalaxyInstance)().libraries.folderListView.collection.get(this.$el.data("id")),e=!1,a=this.$el.find(".input_folder_name").val();if(void 0!==a&&a!==t.get("name")){if(!(2<a.length))return void p.default.warning("Folder name has to be at least 3 characters long.");t.set("name",a),e=!0}var o=this.$el.find(".input_folder_description").val();if(void 0!==o&&o!==t.get("description")&&(t.set("description",o),e=!0),e){var i=this;t.save(null,{patch:!0,success:function(t){i.options.edit_mode=!1,i.repaint(t),p.default.success("Changes to folder saved.")},error:function(t,e){void 0!==e.responseJSON?p.default.error(e.responseJSON.err_msg):p.default.error("An error occured while attempting to update the folder.")}})}else this.options.edit_mode=!1,this.repaint(t),p.default.info("Nothing has changed.")},repaint:function(){(0,c.default)(".tooltip").hide();var t=this.$el;this.render(),t.replaceWith(this.$el),this.$el.find('[data-toggle="tooltip"]').tooltip({trigger:"hover"})},templateRowFolder:function(){return r.default.template(['<tr class="folder_row light library-row" data-id="<%- content_item.id %>">','<td class="mid">','<span title="Folder" class="fa fa-folder-o"/>',"</td>",'<td class="mid"><input style="margin: 0;" type="checkbox"></td>',"<% if(!edit_mode) { %>","<td>",'<a href="#folders/<%- content_item.id %>"><%- content_item.get("name") %></a>',"</td>","<td>",'<%- content_item.get("description") %>',"</td>","<% } else if(edit_mode){ %>",'<td><textarea rows="4" class="form-control input_folder_name" placeholder="name" ><%- content_item.get("name") %></textarea></td>','<td><textarea rows="4" class="form-control input_folder_description" placeholder="description" ><%- content_item.get("description") %></textarea></td>',"<% } %>","<td>folder</td>","<td></td>","<td>",'<%= _.escape(content_item.get("update_time")) %>',"</td>","<td></td>","<td>","<% if(edit_mode) { %>",'<button data-toggle="tooltip" data-placement="top" title="Save changes" class="primary-button btn-sm save_folder_btn" type="button" style="<% if(button_config.save_folder_btn === false) { print("display:none;") } %>">','<span class="fa fa-floppy-o"/> Save',"</button>",'<button data-toggle="tooltip" data-placement="top" title="Discard changes" class="primary-button btn-sm cancel_folder_btn" type="button" style="<% if(button_config.cancel_folder_btn === false) { print("display:none;") } %>">','<span class="fa fa-times"/> Cancel',"</button>","<% } else if (!edit_mode){%>",'<button data-toggle="tooltip" data-placement="top" title="Modify \'<%- content_item.get("name") %>\'" class="primary-button btn-sm edit_folder_btn" type="button" style="<% if(button_config.edit_folder_btn === false) { print("display:none;") } %>">','<span class="fa fa-pencil"/> Edit',"</button>",'<a href="#/folders/<%- content_item.id %>/permissions">','<button data-toggle="tooltip" data-placement="top" class="primary-button btn-sm permission_folder_btn" title="Permissions of \'<%- content_item.get("name") %>\'" style="<% if(button_config.permission_folder_btn === false) { print("display:none;") } %>">','<span class="fa fa-group"/> Manage',"</button>","</a>","<% } %>","</td>","</tr>"].join(""))},templateRowFile:function(){return r.default.template(['<tr class="dataset_row light library-row" data-id="<%- content_item.id %>">','<td class="mid">','<span title="Dataset" class="fa fa-file-o"/>',"</td>",'<td class="mid">','<input style="margin: 0;" type="checkbox">',"</td>","<td>",'<a href="#folders/<%- content_item.get("folder_id") %>/datasets/<%- content_item.id %>" class="library-dataset">','<%- content_item.get("name") %>',"<a>","</td>",'<td><%- content_item.get("message") %></td>','<td><%= _.escape(content_item.get("file_ext")) %></td>','<td><%= _.escape(content_item.get("file_size")) %></td>','<td><%= _.escape(content_item.get("update_time")) %></td>',"<td>",'<% if ( content_item.get("state") !== "ok" ) { %>','<%= _.escape(content_item.get("state")) %>',"<% } %>","</td>","<td>",'<% if (content_item.get("is_unrestricted")) { %>','<span data-toggle="tooltip" data-placement="top" title="Unrestricted dataset" style="color:grey;" class="fa fa-globe"/>',"<% } %>",'<% if (content_item.get("is_private")) { %>','<span data-toggle="tooltip" data-placement="top" title="Private dataset" style="color:grey;" class="fa fa-key"/>',"<% } %>",'<% if ((content_item.get("is_unrestricted") === false) && (content_item.get("is_private") === false)) { %>','<span data-toggle="tooltip" data-placement="top" title="Restricted dataset" style="color:grey;" class="fa fa-shield"/>',"<% } %>",'<% if (content_item.get("can_manage")) { %>','<a href="#folders/<%- content_item.get("folder_id") %>/datasets/<%- content_item.id %>/permissions">','<button data-toggle="tooltip" data-placement="top" class="primary-button btn-sm permissions-dataset-btn" title="Permissions of \'<%- content_item.get("name") %>\'">','<span class="fa fa-group"/> Manage',"</button>","</a>","<% } %>","</td>","</tr>"].join(""))},templateRowDeletedFile:function(){return r.default.template(['<tr class="active deleted_dataset library-row" data-id="<%- content_item.id %>">','<td class="mid">','<span title="Dataset" class="fa fa-file-o"/>',"</td>","<td></td>",'<td style="color:grey;">','<%- content_item.get("name") %>',"</td>","<td>",'<%- content_item.get("message") %>',"</td>","<td>",'<%= _.escape(content_item.get("file_ext")) %>',"</td>","<td>",'<%= _.escape(content_item.get("file_size")) %>',"</td>","<td>",'<%= _.escape(content_item.get("update_time")) %>',"</td>","<td>",'<% if ( content_item.get("state") !== "ok" ) { %>','<%= _.escape(content_item.get("state")) %>',"<% } %>","</td>","<td>",'<span data-toggle="tooltip" data-placement="top" title="Marked deleted" style="color:grey;" class="fa fa-ban"/>','<button data-toggle="tooltip" data-placement="top" title="Undelete \'<%- content_item.get("name") %>\'" class="primary-button btn-sm undelete_dataset_btn" type="button" style="margin-left:1em;">','<span class="fa fa-unlock"/> Undelete',"</button>","</td>","</tr>"].join(""))},templateRowDeletedFolder:function(){return r.default.template(['<tr class="active deleted_folder light library-row" data-id="<%- content_item.id %>">','<td class="mid">','<span title="Folder" class="fa fa-folder-o"/>',"</td>","<td></td>",'<td style="color:grey;">','<%- content_item.get("name") %>',"</td>","<td>",'<%- content_item.get("description") %>',"</td>","<td>","folder","</td>","<td></td>","<td>",'<%= _.escape(content_item.get("update_time")) %>',"</td>","<td></td>","<td>",'<span data-toggle="tooltip" data-placement="top" title="Marked deleted" style="color:grey;" class="fa fa-ban"/>','<button data-toggle="tooltip" data-placement="top" title="Undelete \'<%- content_item.get("name") %>\'" class="primary-button btn-sm undelete_folder_btn" type="button" style="margin-left:1em;">','<span class="fa fa-unlock"/> Undelete',"</button>","</td>","</tr>"].join(""))}});t.default={FolderRowView:g}});