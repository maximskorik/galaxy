define("mvc/workflow/workflow-node",["exports","utils/utils","mvc/workflow/workflow-view-node"],function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(o),a=n(e),s=Backbone.Model.extend({initialize:function(t,o){this.app=t,this.element=o.element,this.input_terminals={},this.output_terminals={},this.errors={},this.workflow_outputs=[]},getWorkflowOutput:function(t){return _.findWhere(this.workflow_outputs,{output_name:t})},isWorkflowOutput:function(t){return void 0!==this.getWorkflowOutput(t)},removeWorkflowOutput:function(t){for(;this.isWorkflowOutput(t);){var o=this.getWorkflowOutput(t);this.workflow_outputs.splice(_.indexOf(this.workflow_outputs,o),1)}},addWorkflowOutput:function(t,o){if(!this.isWorkflowOutput(t)){var e={output_name:t};return o&&(e.label=o),this.workflow_outputs.push(e),!0}return!1},labelWorkflowOutput:function(t,o){var e=!1,n=null;if(this.isWorkflowOutput(t)){var i=this.getWorkflowOutput(t);n=i.label,i.label=o,e=n!=o}else e=this.addWorkflowOutput(t,o);return e&&(this.app.workflow.updateOutputLabel(n,o),this.markChanged(),this.nodeView.redrawWorkflowOutputs()),e},connectedOutputTerminals:function(){return this._connectedTerminals(this.output_terminals)},_connectedTerminals:function(t){var o=[];return $.each(t,function(t,e){e.connectors.length>0&&o.push(e)}),o},hasConnectedOutputTerminals:function(){var t=this.output_terminals;for(var o in t)if(t[o].connectors.length>0)return!0;return!1},connectedMappedInputTerminals:function(){return this._connectedMappedTerminals(this.input_terminals)},hasConnectedMappedInputTerminals:function(){var t=this.input_terminals;for(var o in t){var e=t[o];if(e.connectors.length>0&&e.isMappedOver())return!0}return!1},_connectedMappedTerminals:function(t){var o=[];return $.each(t,function(t,e){e.mapOver().isCollection&&e.connectors.length>0&&o.push(e)}),o},mappedInputTerminals:function(){return this._mappedTerminals(this.input_terminals)},_mappedTerminals:function(t){var o=[];return $.each(t,function(t,e){e.mapOver().isCollection&&o.push(e)}),o},hasMappedOverInputTerminals:function(){var t=!1;return _.each(this.input_terminals,function(o){o.mapOver().isCollection&&(t=!0)}),t},redraw:function(){$.each(this.input_terminals,function(t,o){o.redraw()}),$.each(this.output_terminals,function(t,o){o.redraw()})},clone:function(){var t=this,o={name:this.name,label:this.label,annotation:this.annotation,post_job_actions:this.post_job_actions},e=this.app.workflow.create_node(this.type,this.name,this.content_id);i.default.request({type:"POST",url:Galaxy.root+"api/workflows/build_module",data:{type:this.type,tool_id:this.content_id,tool_state:this.tool_state},success:function(n){var i=Object.assign({},n,o);e.init_field_data(i),e.update_field_data(i),t.app.workflow.activate_node(e)}})},destroy:function(){$.each(this.input_terminals,function(t,o){o.destroy()}),$.each(this.output_terminals,function(t,o){o.destroy()}),this.app.workflow.remove_node(this),$(this.element).remove()},make_active:function(){$(this.element).addClass("toolForm-active")},make_inactive:function(){var t=this.element.get(0);!function(o){o.removeChild(t),o.appendChild(t)}(t.parentNode),$(t).removeClass("toolForm-active")},set_tool_version:function(){"tool"===this.type&&this.config_form&&(this.tool_version=this.config_form.version,this.content_id=this.config_form.id)},init_field_data:function(t){t.type&&(this.type=t.type),this.name=t.name,this.config_form=t.config_form,this.set_tool_version(),this.tool_state=t.tool_state,this.errors=t.errors,this.tooltip=t.tooltip?t.tooltip:"",this.annotation=t.annotation,this.post_job_actions=t.post_job_actions?t.post_job_actions:{},this.label=t.label,this.uuid=t.uuid,this.workflow_outputs=t.workflow_outputs?t.workflow_outputs:[];var o=this,e=new a.default({el:this.element[0],node:o});o.nodeView=e,$.each(t.data_inputs,function(t,o){e.addDataInput(o)}),t.data_inputs.length>0&&t.data_outputs.length>0&&e.addRule(),$.each(t.data_outputs,function(t,o){e.addDataOutput(o)}),e.render(),this.app.workflow.node_changed(this,!0)},update_field_data:function(t){var o=this,e=o.nodeView,n=[];if($.each(e.outputViews,function(o,e){var i=e.output.name,a=t.data_outputs,s=!1;_.each(a,function(t){t.name==i&&(s=!0)}),!1===s&&n.push(i)}),_.each(n,function(t){_.each(e.outputViews[t].terminalElement.terminal.connectors,function(t){t&&t.destroy()}),e.outputViews[t].remove(),delete e.outputViews[t],delete o.output_terminals[t]}),$.each(o.workflow_outputs,function(t,e){e&&!o.output_terminals[e.output_name]&&o.workflow_outputs.splice(t,1)}),$.each(t.data_outputs,function(t,n){e.outputViews[n.name]?(o.output_terminals[n.name].datatypes=n.extensions,o.output_terminals[n.name].destroyInvalidConnections()):e.addDataOutput(n)}),this.tool_state=t.tool_state,this.config_form=t.config_form,this.set_tool_version(),this.errors=t.errors,this.annotation=t.annotation,this.label=t.label,"post_job_actions"in t){var i=t.post_job_actions;this.post_job_actions=i||{}}o.nodeView.renderToolErrors();var a=e.$("div.inputs"),s=e.newInputsDiv(),u={};_.each(t.data_inputs,function(t){var e=o.nodeView.addDataInput(t,s);u[t.name]=e}),_.each(_.difference(_.values(e.terminalViews),_.values(u)),function(t){t.el.terminal.destroy()}),e.terminalViews=u,o.nodeView.render(),1==t.data_outputs.length&&"collection_type"in t.data_outputs[0]&&e.updateDataOutput(t.data_outputs[0]),a.replaceWith(s),"workflow_outputs"in t&&(this.workflow_outputs=t.workflow_outputs?t.workflow_outputs:[]),this.markChanged(),this.redraw()},error:function(t){var o=$(this.element).find(".toolFormBody");o.find("div").remove();var e="<div style='color: red; text-style: italic;'>"+t+"</div>";this.config_form=e,o.html(e),this.app.workflow.node_changed(this)},markChanged:function(){this.app.workflow.node_changed(this)}});t.default=s});