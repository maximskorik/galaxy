define(["exports","mvc/ui/ui-misc","mvc/visualization/chart/components/screenshot","utils/utils"],function(t,e,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(e),u=a(i);a(n);function a(t){return t&&t.__esModule?t:{default:t}}t.default=Backbone.View.extend({initialize:function(e){var t=this;this.app=e,this.model=new Backbone.Model({visible:!0}),this.execute_button=new r.default.Button({icon:"fa-check-square",tooltip:"Confirm",onclick:function(){e.chart.trigger("redraw",!0)}}),this.export_button=new r.default.ButtonMenu({icon:"fa-camera",tooltip:"Export"}),this.export_button.addMenu({key:"png",title:"Save as PNG",icon:"fa-file",onclick:function(){t._wait(e.chart,function(){u.default.createPNG({$el:e.viewer.$el,title:e.chart.get("title"),error:function(t){e.message.update({message:t,status:"danger"})}})})}}),this.export_button.addMenu({key:"svg",title:"Save as SVG",icon:"fa-file-text-o",onclick:function(){t._wait(e.chart,function(){u.default.createSVG({$el:e.viewer.$el,title:e.chart.get("title"),error:function(t){e.message.update({message:t,status:"danger"})}})})}}),this.export_button.addMenu({key:"pdf",title:"Save as PDF",icon:"fa-file-o",onclick:function(){e.modal.show({title:"Send visualization data for PDF creation",body:"Galaxy does not provide integrated PDF export scripts. You may click 'Continue' to create the PDF by using a 3rd party service (https://export.highcharts.com).",buttons:{Cancel:function(){e.modal.hide()},Continue:function(){e.modal.hide(),t._wait(e.chart,function(){u.default.createPDF({$el:e.viewer.$el,title:e.chart.get("title"),error:function(t){e.message.update({message:t,status:"danger"})}})})}}})}}),this.left_button=new r.default.Button({icon:"fa-angle-double-left",tooltip:"Show",onclick:function(){t.model.set("visible",!0),window.dispatchEvent(new Event("resize"))}}),this.right_button=new r.default.Button({icon:"fa-angle-double-right",tooltip:"Hide",onclick:function(){t.model.set("visible",!1),window.dispatchEvent(new Event("resize"))}}),this.save_button=new r.default.Button({icon:"fa-save",tooltip:"Save",onclick:function(){e.chart.get("title")?(e.message.update({message:"Saving '".concat(e.chart.get("title"),"'. It will appear in the list of 'Saved Visualizations'."),status:"success"}),e.chart.save({error:function(){e.message.update({message:"Could not save visualization.",status:"danger"})}})):e.message.update({message:"Please provide a name.",status:"danger"})}}),this.buttons=[this.left_button,this.right_button,this.execute_button,this.export_button,this.save_button],this.setElement("<div/>");var i=!0,n=!1,a=void 0;try{for(var s,o=this.buttons[Symbol.iterator]();!(i=(s=o.next()).done);i=!0){var l=s.value;this.$el.append(l.$el)}}catch(t){n=!0,a=t}finally{try{i||null==o.return||o.return()}finally{if(n)throw a}}this.listenTo(this.model,"change",function(){return t.render()}),this.render()},render:function(){var t=this.model.get("visible");this.app.$el[t?"removeClass":"addClass"]("charts-fullscreen"),this.execute_button.model.set("visible",t&&!!this.app.chart.plugin.specs.confirm),this.save_button.model.set("visible",t),this.export_button.model.set("visible",t),this.right_button.model.set("visible",t),this.left_button.model.set("visible",!t);var e=this.app.chart.plugin.specs.exports||[];this.export_button.collection.each(function(t){t.set("visible",-1!==e.indexOf(t.get("key")))})},_wait:function(t,e){this.app.deferred.ready()?e():this.app.message.update({message:"Your visualization is currently being processed. Please wait and try again."})}})});