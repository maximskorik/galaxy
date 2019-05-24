define(["exports","underscore","jquery","backbone","onload/loadConfig","mvc/toolshed/toolshed-model","mvc/toolshed/util","libs/jquery/jquery-ui"],function(e,t,o,i,a,s,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=u(t),d=u(o),n=u(i),c=u(s),h=u(r);function u(e){return e&&e.__esModule?e:{default:e}}var p=n.default.View.extend({el:"#center",initialize:function(e){this.model=new c.default.CategoryCollection,this.listenTo(this.model,"sync",this.render);var t=e.tool_shed.replace(/\//g,"%2f");this.model.url+="?tool_shed_url=".concat(t,"&category_id=").concat(e.category_id),this.model.tool_shed=t,this.model.category=e.category_id,this.model.fetch()},render:function(e){this.options=l.default.extend(this.options,e);var t=this.templateCategoryContents;this.$el.html(t({category:this.model.models[0],tool_shed:this.model.tool_shed,queue:h.default.queueLength()})),(0,d.default)("#center").css("overflow","auto"),this.bindEvents()},bindEvents:function(){var r=this;(0,d.default)("#search_box").autocomplete({source:function(e,o){var t=r.model.tool_shed.replace(/%2f/g,"/"),i="".concat((0,a.getAppRoot)(),"api/tool_shed/search"),s={term:e.term,tool_shed_url:t};d.default.post(i,s,function(e){var t=h.default.shedParser(e);o(t)})},minLength:3,select:function(e,t){var o=t.item.value,i="repository/s/".concat(this.model.tool_shed,"/r/").concat(o);n.default.history.navigate(i,{trigger:!0,replace:!0})}})},templateCategoryContents:l.default.template(['<style type="text/css">',".ui-autocomplete { background-color: #fff; }","li.ui-menu-item { list-style-type: none; }","</style>",'<div class="unified-panel-header" id="panel_header" unselectable="on">','<div class="unified-panel-header-inner">Repositories in <%= category.get("name") %><a class="ml-auto" href="#/queue">Repository Queue (<%= queue %>)</a></div>',"</div>",'<div class="unified-panel-body" id="list_repositories">','<div id="standard-search" style="height: 2em; margin: 1em;">','<span class="ui-widget" >','<input class="search-box-input" id="search_box" name="search" data-shedurl="<%= tool_shed.replace(/%2f/g, "/") %>" placeholder="Search repositories by name or id" size="60" type="text" />',"</span>","</div>",'<div style="clear: both; margin-top: 1em;">','<table class="grid">','<thead id="grid-table-header">',"<tr>",'<th style="width: 10%;">Owner</th>','<th style="width: 15%;">Name</th>',"<th>Synopsis</th>",'<th style="width: 10%;">Type</th>',"</tr>","</thead>",'<% _.each(category.get("repositories"), function(repository) { %>',"<tr>","<td><%= repository.owner %></td>","<td>",'<div style="float: left; margin-left: 1px;" class="menubutton split">','<a href="#/repository/s/<%= tool_shed %>/r/<%= repository.id %>"><%= repository.name %></a>',"</div>","</td>","<td><%= repository.description %></td>","<td><%= repository.type %></td>","</tr>","<% }); %>","</table>","</div>","</div>"].join(""))});e.default={Category:p}});