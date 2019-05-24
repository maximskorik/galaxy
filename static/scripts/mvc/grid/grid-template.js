define(["exports","utils/utils","underscore"],function(t,a,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=a)&&n.__esModule?n:{default:n},l=function(t){{if(t&&t.__esModule)return t;var a={};if(null!=t)for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,e):{};n.get||n.set?Object.defineProperty(a,e,n):a[e]=t[e]}return a.default=t,a}}(e);t.default={grid:function(t){var a;return a=t.embedded?this.grid_header(t)+this.grid_table(t):'\n                <div class="loading-elt-overlay"></div>\n                <table class="grid-table">\n                    <tr>\n                        <td width="75%">'.concat(this.grid_header(t),'</td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td width="100%" id="grid-message" valign="top"></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                </table>\n                ').concat(this.grid_table(t),"\n            "),t.info_text&&(a+='<br><div class="toolParamHelp" style="clear: both;">'.concat(t.info_text,"</div>")),a},grid_table:function(){return'\n            <form method="post" onsubmit="return false;">\n                <table id="grid-table" class="grid">\n                    <thead id="grid-table-header"></thead>\n                    <tbody id="grid-table-body"></tbody>\n                    <tfoot id="grid-table-footer"></tfoot>\n                </table>\n            </form>'},grid_header:function(t){var a='<div class="grid-header">';if(!t.embedded){var e="";t.title_id&&(e+=' id="'.concat(t.title_id,'"')),a+="<h2".concat(e,">").concat(t.title,"</h2>")}if(t.global_actions){a+='<ul class="manage-table-actions">';var n=3<=t.global_actions.length;n&&(a+='<li><a class="action-button" id="popup-global-actions" class="menubutton">Actions</a></li><div popupmenu="popup-global-actions">');var r=!0,l=!1,i=void 0;try{for(var o,c=t.global_actions[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var s=o.value;a+='<li><a class="action-button use-target" target="'.concat(s.target,'" href="').concat(s.url_args,'" onclick="return false;" >').concat(s.label,"</a></li>")}}catch(t){l=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(l)throw i}}n&&(a+="</div>"),a+="</ul>"}return t.insert&&(a+=t.insert),a+=this.grid_filters(t),a+="</div>"},header:function(t){var a="<tr>";t.show_item_checkboxes&&(a+="<th>",0<t.items.length&&(a+='<input type="checkbox" id="check_all" name=select_all_checkbox value="true"><input type="hidden" name=select_all_checkbox value="true">'),a+="</th>");var e=!0,n=!1,r=void 0;try{for(var l,i=t.columns[Symbol.iterator]();!(e=(l=i.next()).done);e=!0){var o=l.value;o.visible&&(a+='<th id="'.concat(o.key,'-header">'),o.sortable?a+='<a href="javascript:void(0)" class="sort-link" sort_key="'.concat(o.key,'">').concat(o.label,"</a>"):a+=o.label,a+='<span class="sort-arrow">'.concat(o.extra,"</span></th>"))}}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}return a+="</tr>"},body:function(t){var a="";0===t.items.length&&(a+='<tr><td colspan="100"><em>No Items</em></td></tr>');var e=!0,n=!1,r=void 0;try{for(var l,i=t.items[Symbol.iterator]();!(e=(l=i.next()).done);e=!0){var o=l.value;a+="<tr ",t.current_item_id==o.id&&(a+='class="current"'),a+=">",t.show_item_checkboxes&&(a+='<td style="width: 1.5em;"><input type="checkbox" name="id" value="'.concat(o.encode_id,'" id="').concat(o.encode_id,'" class="grid-row-select-checkbox" /></td>'));var c=!0,s=!1,d=void 0;try{for(var u,f=t.columns[Symbol.iterator]();!(c=(u=f.next()).done);c=!0){var p=u.value;if(p.visible){var v="";p.nowrap&&(v='style="white-space:nowrap;"');var g=o.column_config[p.label],b=g.link,y=g.value,h=g.target;"string"===$.type(y)&&(y=y.replace(/\/\//g,"/"));var _="";p.attach_popup&&(_="grid-".concat(o.encode_id,"-popup")),a+="<td ".concat(v,">"),p.delayed?a+='<div class="delayed-value-'.concat(p.key,'" data-id="').concat(o.encode_id,'" data-value="').concat(y,'"><span class="fa fa-spinner fa-spin"></span></div>'):p.attach_popup&&b?a+='<div class="btn-group">\n                                    <button class="btn btn-secondary use-target" target="'.concat(h,'" href="').concat(b,'" onclick="return false;">').concat(y,'</button>\n                                    <button id="').concat(_,'" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"/>\n                                </div>'):p.attach_popup?a+='<button id="'.concat(_,'" class="btn dropdown-toggle" data-toggle="dropdown">').concat(y,"</button>"):a+=b?'<a class="use-target" target="'.concat(h,'" href="').concat(b,'" onclick="return false;">').concat(y,"</a>"):"<label>".concat(y||"","</label>"),a+="</td>"}}}catch(t){s=!0,d=t}finally{try{c||null==f.return||f.return()}finally{if(s)throw d}}a+="</tr>"}}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}return a},footer:function(t){var a="";if(t.use_paging&&1<t.num_pages){var e=t.num_page_links,n=t.cur_page_num,r=t.num_pages,l=e/2,i=n-l,o=0;i<=0&&(o=l-(n-(i=1)));var c,s=l+o,d=n+s;0!==(c=d<=r?0:s-((d=r)+1-n))&&(i-=c)<1&&(i=1),a+='<tr id="page-links-row">',t.show_item_checkboxes&&(a+="<td></td>"),a+='<td colspan="100"><span id="page-link-container">Page:',1<i&&(a+='<span class="page-link-grid" id="page-link-1"><a href="javascript:void(0);" page_num="1" onclick="return false;">1</a></span> ...');for(var u=i;u<d+1;u++)u==t.cur_page_num?a+='<span class="page-link-grid inactive-link" id="page-link-'.concat(u,'">').concat(u,"</span>"):a+='<span class="page-link-grid" id="page-link-'.concat(u,'"><a href="javascript:void(0);" onclick="return false;" page_num="').concat(u,'">').concat(u,"</a></span>");d<r&&(a+='...<span class="page-link-grid" id="page-link-'.concat(r,'"><a href="javascript:void(0);" onclick="return false;" page_num="').concat(r,'">').concat(r,"</a></span>")),a+="</span>",a+='\n                    <span class="page-link-grid" id="show-all-link-span"> | <a href="javascript:void(0);" onclick="return false;" page_num="all">Show All</a></span>\n                    </td>\n                </tr>'}if(t.show_item_checkboxes){a+='\n                <tr>\n                    <input type="hidden" id="operation" name="operation" value="">\n                    <td></td>\n                    <td colspan="100">\n                        For <span class="grid-selected-count"></span> selected items: \n            ';var f=!0,p=!1,v=void 0;try{for(var g,b=t.operations[Symbol.iterator]();!(f=(g=b.next()).done);f=!0){var y=g.value;y.allow_multiple&&(a+='<input type="button" value="'.concat(y.label,'" class="operation-button action-button">&nbsp;'))}}catch(t){p=!0,v=t}finally{try{f||null==b.return||b.return()}finally{if(p)throw v}}a+="</td></tr>"}var h=!1,_=!0,m=!1,k=void 0;try{for(var x,w=t.operations[Symbol.iterator]();!(_=(x=w.next()).done);_=!0){if(x.value.global_operation){h=!0;break}}}catch(t){m=!0,k=t}finally{try{_||null==w.return||w.return()}finally{if(m)throw k}}if(h){a+='<tr><td colspan="100">';var S=!0,j=!1,O=void 0;try{for(var P,A=t.operations[Symbol.iterator]();!(S=(P=A.next()).done);S=!0){var C=P.value;C.global_operation&&(a+='<a class="action-button" href="'.concat(C.global_operation,'">').concat(C.label,"</a>"))}}catch(t){j=!0,O=t}finally{try{S||null==A.return||A.return()}finally{if(j)throw O}}a+="</td></tr>"}return t.legend&&(a+='<tr><td colspan="100">'.concat(t.legend,"</td></tr>")),a},message:function(t){var a=t.status;return-1!=["success","ok"].indexOf(a)&&(a="done"),'<p><div class="'.concat(a,'message transient-message">').concat(l.escape(t.message),'</div><div style="clear: both"></div></p>')},grid_filters:function(t){var a=t.default_filter_dict,e=t.filters,n="none";t.advanced_search&&(n="block");var r=!1,l=!0,i=!1,o=void 0;try{for(var c,s=t.columns[Symbol.iterator]();!(l=(c=s.next()).done);l=!0){var d=c.value;if("advanced"==d.filterable){var u=d.key,f=e[u],p=a[u];f&&p&&f!=p&&(n="block"),r=!0}}}catch(t){i=!0,o=t}finally{try{l||null==s.return||s.return()}finally{if(i)throw o}}var v="block";"block"==n&&(v="none");var g='<div id="standard-search" style="display: '.concat(v,';"><table><tr><td style="padding: 0;"><table>'),b=!0,y=!1,h=void 0;try{for(var _,m=t.columns[Symbol.iterator]();!(b=(_=m.next()).done);b=!0){var k=_.value;"standard"==k.filterable&&(g+=this.grid_column_filter(t,k))}}catch(t){y=!0,h=t}finally{try{b||null==m.return||m.return()}finally{if(y)throw h}}g+="</table></td></tr><tr><td>",r&&(g+='<a href="" class="advanced-search-toggle">Advanced Search</a>'),g+="</td></tr></table></div>",g+='<div id="advanced-search" style="display: '.concat(n,'; margin-top: 5px; border: 1px solid #ccc;"><table><tr><td style="text-align: left" colspan="100"><a href="" class="advanced-search-toggle">Close Advanced Search</a></td></tr>');var x=!0,w=!1,S=void 0;try{for(var j,O=t.columns[Symbol.iterator]();!(x=(j=O.next()).done);x=!0){var P=j.value;"advanced"==P.filterable&&(g+=this.grid_column_filter(t,P))}}catch(t){w=!0,S=t}finally{try{x||null==O.return||O.return()}finally{if(w)throw S}}return g+="</table></div>"},grid_column_filter:function(t,a){var e=t.filters,n=a.label,r=a.key;"advanced"==a.filterable&&(n=n.toLowerCase());var l="<tr>";if("advanced"==a.filterable&&(l+='<td align="left" style="padding-left: 10px">'.concat(n,":</td>")),l+='<td style="padding-bottom: 1px;">',a.is_text){l+='<form class="text-filter-form" column_key="'.concat(r,'" action="').concat(t.url,'" method="get" >');var i=!0,o=!1,c=void 0;try{for(var s,d=t.columns[Symbol.iterator]();!(i=(s=d.next()).done);i=!0){var u=s.value,f=e[u.key];f&&"All"!=f&&(u.is_text&&(f=JSON.stringify(f)),l+='<input type="hidden" id="'.concat(u.key,'" name="f-').concat(u.key,'" value="').concat(f,'"/>'))}}catch(t){o=!0,c=t}finally{try{i||null==d.return||d.return()}finally{if(o)throw c}}l+='<span id="'.concat(r,'-filtering-criteria">');var p=e[r];if(p){var v=$.type(p);if("string"==v&&"All"!=p&&(l+=this.filter_element(r,p)),"array"==v)for(var g in p){p.slice(g),l+=this.filter_element(r,p[g])}}l+="</span>";var b="",y=20;"standard"==a.filterable&&((b=a.label.toLowerCase()).length<20&&(y=b.length),y+=4),l+='\n                <span class="search-box">\n                    <input class="search-box-input" id="input-'.concat(r,'-filter" name="f-').concat(r,'" type="text" placeholder="').concat(b,'" size="').concat(y,'"/>\n                    <button type="submit" style="background: transparent; border: none; padding: 4px; margin: 0px;">\n                        <i class="fa fa-search"></i>\n                    </button>\n                </span>\n            </form>')}else{l+='<span id="'.concat(r,'-filtering-criteria">');var h=!1;for(var _ in t.categorical_filters[r]){var m=t.categorical_filters[r][_],k="",x="";for(var w in m)x=m[k=w];h&&(l+=" | "),h=!0;var S=e[r];S&&m[r]&&S==x?l+='<span class="categorical-filter '.concat(r,'-filter current-filter">').concat(_,"</span>"):l+='<span class="categorical-filter '.concat(r,'-filter"><a href="javascript:void(0);" filter_key="').concat(k,'" filter_val="').concat(x,'">').concat(_,"</a></span>")}l+="</span>"}return l+="</td></tr>"},filter_element:function(t,a){return a=r.default.sanitize(a),'<span class="text-filter-val">'.concat(a,'<a href="javascript:void(0);" filter_key="').concat(t,'" filter_val="').concat(a,'"><i class="fa fa-times" style="padding-left: 5px; padding-bottom: 6px;"/></a></span>')}}});