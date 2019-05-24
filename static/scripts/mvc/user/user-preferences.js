define(["exports","underscore","jquery","backbone","onload/loadConfig","app","utils/localization","mvc/ui/ui-misc","utils/query-string-parsing"],function(e,t,a,i,n,r,o,s,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=_(t),l=_(a),d=_(i),f=_(o),p=_(s),m=_(u);function _(e){return e&&e.__esModule?e:{default:e}}var h=d.default.Model.extend({initialize:function(e){var t=(0,r.getGalaxyInstance)();(e=e||{}).user_id=e.user_id||t.user.id,this.set({user_id:e.user_id,information:{title:(0,f.default)("Manage information"),description:"Edit your email, addresses and custom parameters or change your username.",url:"api/users/".concat(e.user_id,"/information/inputs"),icon:"fa-user",redirect:"user"},password:{title:(0,f.default)("Change password"),description:(0,f.default)("Allows you to change your login credentials."),icon:"fa-unlock-alt",url:"api/users/".concat(e.user_id,"/password/inputs"),submit_title:"Save password",redirect:"user"},communication:{title:(0,f.default)("Change communication settings"),description:(0,f.default)("Enable or disable the communication feature to chat with other users."),url:"api/users/".concat(e.user_id,"/communication/inputs"),icon:"fa-comments-o",redirect:"user"},permissions:{title:(0,f.default)("Set dataset permissions for new histories"),description:"Grant others default access to newly created histories. Changes made here will only affect histories created after these settings have been stored.",url:"api/users/".concat(e.user_id,"/permissions/inputs"),icon:"fa-users",submit_title:"Save permissions",redirect:"user"},make_data_private:{title:(0,f.default)("Make all data private"),description:(0,f.default)("Click here to make all data private."),icon:"fa-lock",onclick:function(){confirm((0,f.default)("WARNING: This will make all datasets (excluding library datasets) for which you have 'management' permissions, in all of your histories private, and will set permissions such that all of your new data in these histories is created as private.  Any datasets within that are currently shared will need to be re-shared or published.  Are you sure you want to do this?"))&&l.default.post("".concat(t.root,"history/make_private"),{all_histories:!0},function(){t.modal.show({title:(0,f.default)("Datasets are now private"),body:"All of your histories and datsets have been made private.  If you'd like to make all *future* histories private please use the <a href=\"".concat(t.root,'user/permissions">User Permissions</a> interface.'),buttons:{Close:function(){t.modal.hide()}}})})}},api_key:{title:(0,f.default)("Manage API key"),description:(0,f.default)("Access your current API key or create a new one."),url:"api/users/".concat(e.user_id,"/api_key/inputs"),icon:"fa-key",submit_title:"Create a new key",submit_icon:"fa-check"},toolbox_filters:{title:(0,f.default)("Manage Toolbox filters"),description:(0,f.default)("Customize your Toolbox by displaying or omitting sets of Tools."),url:"api/users/".concat(e.user_id,"/toolbox_filters/inputs"),icon:"fa-filter",submit_title:"Save filters",redirect:"user"},openids:{title:(0,f.default)("Manage OpenIDs"),description:(0,f.default)("Associate OpenIDs with your account."),icon:"fa-openid",onclick:function(){t.page.router.push("".concat((0,n.getAppRoot)(),"openids/list"))}},custom_builds:{title:(0,f.default)("Manage custom builds"),description:(0,f.default)("Add or remove custom builds using history datasets."),icon:"fa-cubes",onclick:function(){t.page.router.push("".concat((0,n.getAppRoot)(),"custom_builds"))}},logout:{title:(0,f.default)("Sign out"),description:(0,f.default)("Click here to sign out of all sessions."),icon:"fa-sign-out",onclick:function(){t.modal.show({title:(0,f.default)("Sign out"),body:"Do you want to continue and sign out of all active sessions?",buttons:{Cancel:function(){t.modal.hide()},"Sign out":function(){window.location.href="".concat((0,n.getAppRoot)(),"user/logout?session_csrf_token=").concat(t.session_csrf_token)}}})}}})}}),g=d.default.View.extend({title:(0,f.default)("User Preferences"),active_tab:"user",initialize:function(){this.model=new h,this.setElement("<div/>"),this.render()},render:function(){var i=this,o=(0,r.getGalaxyInstance)(),s=o.config;l.default.getJSON("".concat((0,n.getAppRoot)(),"api/users/").concat(o.user.id),function(e){i.$preferences=(0,l.default)("<div/>").append((0,l.default)("<h2/>").append("User preferences")).append((0,l.default)("<p/>").append("You are logged in as <strong>".concat(c.default.escape(e.email),"</strong>."))).append(i.$table=(0,l.default)("<table/>"));var t=m.default.get("message"),a=m.default.get("status");t&&a&&i.$preferences.prepend(new p.default.Message({message:t,status:a}).$el),s.use_remote_user||(i._addLink("information"),i._addLink("password")),s.enable_communication_server&&i._addLink("communication"),i._addLink("custom_builds"),i._addLink("permissions"),i._addLink("make_data_private"),i._addLink("api_key"),s.has_user_tool_filters&&i._addLink("toolbox_filters"),s.enable_openid&&!s.use_remote_user&&i._addLink("openids"),o.session_csrf_token&&i._addLink("logout"),i.$preferences.append(i._templateFooter(e)),i.$el.empty().append(i.$preferences)})},_addLink:function(e){var t=this.model.get(e),a=(0,l.default)(this._templateLink(t)),i=a.find("a");t.onclick?i.on("click",function(){t.onclick()}):i.attr("href","".concat((0,n.getAppRoot)(),"user/").concat(e)),this.$table.append(a)},_templateLink:function(e){return'<tr>\n                    <td class="align-top">\n                        <i class="ml-3 mr-3 fa fa-lg '.concat(e.icon,'">\n                    </td>\n                    <td>\n                        <a href="javascript:void(0)"><b>').concat(e.title,'</b></a>\n                        <div class="form-text text-muted">').concat(e.description,"</div>\n                    </td>\n                </tr>")},_templateFooter:function(e){var t=(0,r.getGalaxyInstance)();return'<p class="mt-2">You are using <strong>'.concat(e.nice_total_disk_usage,"</strong> of disk space in this Galaxy instance. ").concat(t.config.enable_quotas?"Your disk quota is: <strong>".concat(e.quota,"</strong>. "):"",'Is your usage more than expected? See the <a href="https://galaxyproject.org/learn/managing-datasets/" target="_blank"><b>documentation</b></a> for tips on how to find all of the data in your account.</p>')}});e.default={View:g,Model:h}});