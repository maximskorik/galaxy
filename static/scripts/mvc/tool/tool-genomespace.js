define(["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={openFileBrowser:function(a){var e=Galaxy.config.genomespace_ui_url,o="".concat(e,"upload/loadUrlToGenomespace.html?getLocation=true"),n=window.open(o,"GenomeSpace File Browser","height=360px,width=600px");window.addEventListener("message",function(e){a.successCallback&&e.data.destination&&a.successCallback(e.data)},!1),n.focus(),null!=a.errorCallback&&(n.setCallbackOnGSUploadError=config.errorCallback)}}});