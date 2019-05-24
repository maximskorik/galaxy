define(["exports","libs/underscore"],function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var F=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,a):{};i.get||i.set?Object.defineProperty(e,a,i):e[a]=t[a]}return e.default=t,e}}(e);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}var s=1001,Z=1002,$=1003,tt=1004,et=1005,o=1006,at="#ccc";function it(t,e){var a=t[0],i=t[1],r=e[0],n=e[1];return a<r?i<=r?s:i<=n?$:Z:n<a?o:i<=n?et:tt}function rt(t,e){var a=it(t,e);return a!==s&&a!==o}function nt(t,e,a,i){var r=e-i/2,n=e+i/2,l=a-Math.sqrt(3*i/2);t.beginPath(),t.moveTo(r,l),t.lineTo(n,l),t.lineTo(e,a),t.lineTo(r,l),t.strokeStyle=this.fillStyle,t.fill(),t.stroke(),t.closePath()}var h=function(){function e(t){_(this,e),this.default_val=t||1}return l(e,[{key:"gen_val",value:function(t){return this.default_val}}]),e}(),p=function t(e){_(this,t),this.incomplete_features=e.incomplete_features,this.feature_mapper=e.feature_mapper},d=function(){function n(t,e,a,i,r){_(this,n),this.data=t,this.default_prefs={},this.view_start=e,this.view_end=a,this.prefs=F.extend({},this.default_prefs,i),this.mode=r}return l(n,[{key:"draw",value:function(t,e,a,i){}},{key:"get_start_draw_pos",value:function(t,e){return this._chrom_pos_to_draw_pos(t,e,-.5)}},{key:"get_end_draw_pos",value:function(t,e){return this._chrom_pos_to_draw_pos(t,e,.5)}},{key:"get_draw_pos",value:function(t,e){return this._chrom_pos_to_draw_pos(t,e,0)}},{key:"_chrom_pos_to_draw_pos",value:function(t,e,a){return Math.floor(e*(Math.max(0,t-this.view_start)+a))}}],[{key:"default_prefs",get:function(){return{}}}]),n}(),f=function(t){function n(t,e,a,i,r){return _(this,n),u(this,c(n).call(this,t,e,a,i,r))}return i(n,d),l(n,[{key:"draw",value:function(t,e,a,i){var r=!1,n=this.prefs.min_value,l=this.prefs.max_value,s=l-n,o=a,h=this.view_start,f=this.mode,u=this.data;t.save();var c,_,d,v=Math.round(a+n/s*a);"Intensity"!==f&&(t.fillStyle="#aaa",t.fillRect(0,v,e,1)),t.beginPath(),d=1<u.length?F.map(u.slice(0,-1),function(t,e){return Math.ceil((u[e+1][0]-u[e][0])*i)}):[10];for(var p,g=this.prefs.block_color||this.prefs.color,m=parseInt(g.slice(1),16),y=(16711680&m)>>16,w=(65280&m)>>8,b=255&m,M=!1,k=!1,x=0,S=u.length;x<S;x++)if(t.fillStyle=t.strokeStyle=g,M=k=!1,p=d[x],c=Math.floor((u[x][0]-h-.5)*i),null!==(_=u[x][1])){if(_<n?(k=!0,_=n):l<_&&(M=!0,_=l),"Histogram"===f)_=Math.round(_/s*o),t.fillRect(c,v,p,-_);else if("Intensity"===f){var P=(_-n)/s,R=Math.round(y+(255-y)*(1-P)),O=Math.round(w+(255-w)*(1-P)),T=Math.round(b+(255-b)*(1-P));t.fillStyle="rgb(".concat(R,",").concat(O,",").concat(T,")"),t.fillRect(c,0,p,o)}else _=Math.round(o-(_-n)/s*o),r?t.lineTo(c,_):(r=!0,"Filled"===f?(t.moveTo(c,o),t.lineTo(c,_)):t.moveTo(c,_));var A;if(t.fillStyle=this.prefs.overflow_color,M||k)A="Histogram"===f||"Intensity"===f?p:(c-=2,4),M&&t.fillRect(c,0,A,3),k&&t.fillRect(c,o-3,A,3);t.fillStyle=g}else r&&"Filled"===f&&t.lineTo(c,o),r=!1;"Filled"===f?(r&&(t.lineTo(c,v),t.lineTo(0,v)),t.fill()):t.stroke(),t.restore()}}],[{key:"default_prefs",get:function(){return{min_value:void 0,max_value:void 0,mode:"Histogram",color:"#000",overflow_color:"#F66"}}}]),n}(),g=function(){function e(t){_(this,e),this.feature_positions={},this.slot_height=t,this.translation=0,this.y_translation=0}return l(e,[{key:"map_feature_data",value:function(t,e,a,i){this.feature_positions[e]||(this.feature_positions[e]=[]),this.feature_positions[e].push({data:t,x_start:a,x_end:i})}},{key:"get_feature_data",value:function(t,e){var a,i=Math.floor((e-this.y_translation)/this.slot_height);if(!this.feature_positions[i])return null;t+=this.translation;for(var r=0;r<this.feature_positions[i].length;r++)if(t>=(a=this.feature_positions[i][r]).x_start&&t<=a.x_end)return a.data}}]),e}(),v=function(t){function o(t,e,a,i,r,n,l){var s;return _(this,o),(s=u(this,c(o).call(this,t,e,a,i,r))).alpha_scaler=n||new h,s.height_scaler=l||new h,s.max_label_length=200,s}return i(o,d),l(o,[{key:"get_required_height",value:function(t,e){var a=this.get_row_height(),i=a,r=this.mode;return"no_detail"!==r&&"Squish"!==r&&"Pack"!==r||(a=t*i),a+this.get_top_padding(e)}},{key:"get_top_padding",value:function(t){return 0}},{key:"draw",value:function(t,e,a,i,r){t.save(),t.fillStyle=this.prefs.block_color,t.textAlign="right";for(var n,l=this.get_row_height(),s=new g(l),o=[],h=0,f=this.data.length;h<f;h++){var u=this.data[h],c=u[0],_=u[1],d=u[2],v=r&&void 0!==r[c]?r[c].slot:null;("Dense"===this.mode||null!==v)&&_<this.view_end&&d>this.view_start&&(n=this.draw_element(t,this.mode,u,v,this.view_start,this.view_end,i,l,e),s.map_feature_data(u,v,n[0],n[1]),(_<this.view_start||d>this.view_end)&&o.push(u))}return t.restore(),s.y_translation=this.get_top_padding(e),new p({incomplete_features:o,feature_mapper:s})}},{key:"draw_element",value:function(t,e,a,i,r,n,l,s,o){return[0,0]}}],[{key:"default_prefs",get:function(){return{block_color:"#FFF",connector_color:"#FFF"}}}]),o}(),m=function(t){function o(t,e,a,i,r,n,l){var s;return _(this,o),(s=u(this,c(o).call(this,t,e,a,i,r,n,l))).draw_background_connector=!0,s.draw_individual_connectors=!1,s}return i(o,v),l(o,[{key:"get_row_height",value:function(){var t=this.mode;return"Dense"===t?10:"no_detail"===t?3:"Squish"===t?5:10}},{key:"draw_element",value:function(t,e,a,i,r,n,l,s,o){var h=a[1],f=a[2],u=a[3],c=a[4],_=Math.floor(Math.max(0,(h-r-.5)*l)),d=Math.ceil(Math.min(o,Math.max(0,(f-r-.5)*l))),v=_,p=d,g=("Dense"===e?0:0+i)*s+this.get_top_padding(o),m=null,y=null,w=c&&"+"!==c&&"."!==c?this.prefs.reverse_strand_color:this.prefs.block_color,b=this.prefs.label_color;if(t.globalAlpha=this.alpha_scaler.gen_val(a),"Dense"===e&&(i=1),"no_detail"===e)t.fillStyle=w,t.fillRect(_,g+5,d-_,1);else{var M,k,x=a[5],S=a[6],P=a[7],R=!0;if(x&&S&&(m=Math.floor(Math.max(0,(x-r)*l)),y=Math.ceil(Math.min(o,Math.max(0,(S-r)*l)))),"Squish"===e?(M=1,R=!(k=3)):k=(M=5,9),P){var O,T;T="Squish"===e||"Dense"===e?(O=g+Math.floor(1.5)+1,1):c?(O=g,k):(O+=2.5,1),this.draw_background_connector&&("Squish"===e||"Dense"===e?t.fillStyle=at:c?"+"===c?t.fillStyle=t.canvas.manager.get_pattern("right_strand"):"-"===c&&(t.fillStyle=t.canvas.manager.get_pattern("left_strand")):t.fillStyle=at,t.fillRect(_,O,d-_,T));for(var A=0,F=P.length;A<F;A++){var D,I,q=P[A],j=Math.floor(Math.max(0,(q[0]-r-.5)*l)),H=Math.ceil(Math.min(o,Math.max((q[1]-r-.5)*l)));if(!(H<j)){if(t.fillStyle=w,t.fillRect(j,g+(k-M)/2+1,H-j,M),void 0!==m&&x<S&&!(y<j||H<m)){var X=Math.max(j,m),L=Math.min(H,y);t.fillRect(X,g+1,L-X,k),1===P.length&&"Pack"===e&&("+"===c?t.fillStyle=t.canvas.manager.get_pattern("right_strand_inv"):"-"===c&&(t.fillStyle=t.canvas.manager.get_pattern("left_strand_inv")),X+14<L&&(X+=2,L-=2),t.fillRect(X,g+1,L-X,k))}this.draw_individual_connectors&&D&&this.draw_connector(t,D,I,j,H,g),D=j,I=H}}if("Pack"===e){t.globalAlpha=1,t.fillStyle="white";var N=this.height_scaler.gen_val(a),C=Math.ceil(k*N),E=Math.round((k-C)/2);1!==N&&(t.fillRect(_,O+1,d-_,E),t.fillRect(_,O+k-E+1,d-_,E))}}else t.fillStyle=w,t.fillRect(_,g+1,d-_,k),c&&R&&("+"===c?t.fillStyle=t.canvas.manager.get_pattern("right_strand_inv"):"-"===c&&(t.fillStyle=t.canvas.manager.get_pattern("left_strand_inv")),t.fillRect(_,g+1,d-_,k));t.globalAlpha=1,u&&"Pack"===e&&r<h&&(t.fillStyle=b,0===r&&_-t.measureText(u).width<0?(t.textAlign="left",t.fillText(u,d+2,g+8,this.max_label_length),p+=t.measureText(u).width+2):(t.textAlign="right",t.fillText(u,_-2,g+8,this.max_label_length),v-=t.measureText(u).width+2))}return t.globalAlpha=1,[v,p]}}]),o}(),y=function(t){function f(t,e,a,i,r,n,l,s,o){var h;return _(this,f),(h=u(this,c(f).call(this,t,e,a,i,r,n,l))).ref_seq=s?s.data:null,h.base_color_fn=o,h}return i(f,v),l(f,[{key:"get_row_height",value:function(){var t,e=this.mode;return"Dense"===e?t=10:"Squish"===e?t=5:(t=10,this.prefs.show_insertions&&(t*=2)),t}},{key:"_parse_cigar",value:function(t){var i=[[0,0]],r=i[0],n=0,e=F.map(t.match(/[0-9]+[MIDNSHP=X]/g),function(t){var e=parseInt(t.slice(0,-1),10),a=t.slice(-1);return"N"===a?0!==r[1]&&(r=[n+e,n+e],i.push(r)):-1==="ISHP".indexOf(a)&&(r[1]+=e,n+=e),["MIDNSHP=X".indexOf(a),e]});return{blocks:i,cigar:e}}},{key:"draw_read",value:function(t,e,a,i,r,n,l,s,o,h){var f=function(t){return Math.floor(Math.max(0,(t-r-.5)*a))};t.textAlign="center";var u,c,_,d,v,p,g,m,y,w,b=[r,n],M=0,k=0,x=Math.round(a/2),S=t.canvas.manager.char_width_px,P="+"===o?this.prefs.detail_block_color:this.prefs.reverse_strand_color,R="Pack"===e,O=R?9:3,T=i+1,A=new lt(t,O,a,e),F=[],D=this._parse_cigar(s);s=D.cigar,u=D.blocks;for(var I=0;I<u.length;I++){var q=u[I];rt([l+q[0],l+q[1]],b)&&((c=f(l+q[0]))===(_=f(l+q[1]))&&(_+=1),t.fillStyle=P,t.fillRect(c,T,_-c,O))}for(var j=0,H=s.length;j<H;j++){var X=s[j],L="MIDNSHP=X"[X[0]],N=X[1],C=l+M;if(c=f(C),_=f(C+N),rt([C,C+N],b))switch(c===_&&(_+=1),L){case"H":case"S":case"P":break;case"M":M+=N;break;case"=":case"X":var E="";"X"===L?E=h.slice(k,k+N):this.ref_seq&&(E=this.ref_seq.slice(Math.max(0,C-r),Math.min(C-r+N,n-r)));for(var B=Math.max(C,r),G=0;G<E.length;G++)if(E&&!this.prefs.show_differences||"X"===L){var V=Math.floor(Math.max(0,(B+G-r)*a));t.fillStyle=this.base_color_fn(E[G]),R&&S<a?t.fillText(E[G],V,i+9):.05<a&&t.fillRect(V-x,T,Math.max(1,Math.round(a)),O)}"X"===L&&(k+=N),M+=N;break;case"N":t.fillStyle=at,t.fillRect(c,T+(O-1)/2,_-c,1),M+=N;break;case"D":A.draw_deletion(c,T,N),M+=N;break;case"I":var z=c-x;if(rt([C,C+N],b)){var J=h.slice(k,k+N);if(this.prefs.show_insertions){var K=c-(_-c)/2;if(("Pack"===e||"Auto"===this.mode)&&void 0!==h&&S<a){switch(t.fillStyle="yellow",t.fillRect(K-x,i-9,_-c,9),F[F.length]={type:"triangle",data:[z,i+4,5]},t.fillStyle=at,it([C,C+N],b)){case $:J=J.slice(r-C);break;case tt:J=J.slice(0,C-n);break;case et:break;case Z:J=J.slice(r-C,C-n)}for(var Q=0,U=J.length;Q<U;Q++){var W=Math.floor(Math.max(0,(C+Q-r)*a));t.fillText(J[Q],W-(_-c)/2,i)}}else t.fillStyle="yellow",t.fillRect(K,i+("Dense"!==this.mode?2:5),_-c,"Dense"!==e?3:9)}else("Pack"===e||"Auto"===this.mode)&&void 0!==h&&S<a&&F.push({type:"text",data:[J.length,z,i+9]})}k+=N}else p=M,g=N,-1!=="M=NXD".indexOf(L)&&(p+=g),M=p,d=k,v=N,-1!=="IX".indexOf(L)&&(d+=v),k=d}t.fillStyle="yellow";for(var Y=0;Y<F.length;Y++)y=(m=F[Y]).type,w=m.data,"text"===y?(t.save(),t.font="bold ".concat(t.font),t.fillText(w[0],w[1],w[2]),t.restore()):"triangle"===y&&nt(t,w[0],w[1],w[2])}},{key:"draw_element",value:function(t,e,a,i,r,n,l,s,o){var h=a[1],f=a[2],u=a[3],c=Math.floor(Math.max(-.5*l,(h-r-.5)*l)),_=Math.ceil(Math.min(o,Math.max(0,(f-r-.5)*l))),d=("Dense"===e?0:0+i)*s,v="Pack"===e?9:3;if(a[5]instanceof Array){var p=!0;a[4][1]>=r&&a[4][0]<=n&&a[4][2]?this.draw_read(t,e,l,d,r,n,a[4][0],a[4][2],a[4][3],a[4][4]):p=!1,a[5][1]>=r&&a[5][0]<=n&&a[5][2]?this.draw_read(t,e,l,d,r,n,a[5][0],a[5][2],a[5][3],a[5][4]):p=!1;var g=Math.ceil(Math.min(o,Math.max(-.5*l,(a[4][1]-r-.5)*l))),m=Math.floor(Math.max(-.5*l,(a[5][0]-r-.5)*l));if(p&&g<m){t.fillStyle=at;var y=d+1+(v-1)/2;!function(t,e,a,i,r,n){void 0===n&&(n=4);var l,s=i-e,o=r-a,h=Math.floor(Math.sqrt(s*s+o*o)/n),f=s/h,u=o/h;for(l=0;l<h;l++,e+=f,a+=u)l%2==0&&t.fillRect(e,a,n,1)}(t,g,y,m,y)}}else this.draw_read(t,e,l,d,r,n,h,a[4],a[5],a[6]);return"Pack"===e&&r<=h&&"."!==u&&(t.fillStyle=this.prefs.label_color,0===r&&c-t.measureText(u).width<0?(t.textAlign="left",t.fillText(u,_+2,d+9,this.max_label_length)):(t.textAlign="right",t.fillText(u,c-2,d+9,this.max_label_length))),[0,0]}}]),f}(),w=function(t){function o(t,e,a,i,r,n,l){var s;return _(this,o),(s=u(this,c(o).call(this,t,e,a,i,r,n,l))).longest_feature_length=s.calculate_longest_feature_length(),s.draw_background_connector=!1,s.draw_individual_connectors=!0,s}return i(o,m),l(o,[{key:"calculate_longest_feature_length",value:function(){for(var t=0,e=0,a=this.data.length;e<a;e++){var i=this.data[e],r=i[1],n=i[2];t=Math.max(t,n-r)}return t}},{key:"get_top_padding",value:function(t){var e=t/(this.view_end-this.view_start);return Math.min(128,Math.ceil(this.longest_feature_length/2*e))}},{key:"draw_connector",value:function(t,e,a,i,r,n){var l=(a+i)/2;0<i-l&&(t.beginPath(),t.arc(l,n,i-l,Math.PI,0),t.stroke())}}]),o}(),b=function(){function o(t,e){_(this,o),Array.isArray(t)?this.rgb=t:6==t.length?this.rgb=t.match(/.{2}/g).map(function(t){return parseInt(t,16)}):7==t.length?this.rgb=t.substring(1,7).match(/.{2}/g).map(function(t){return parseInt(t,16)}):this.rgb=t.split("").map(function(t){return parseInt(t+t,16)}),this.alpha="number"==typeof e?e:1}return l(o,[{key:"eval",value:function(){return this}},{key:"toCSS",value:function(){return this.alpha<1?"rgba(".concat(this.rgb.map(function(t){return Math.round(t)}).concat(this.alpha).join(", "),")"):"#".concat(this.rgb.map(function(t){return 1===(t=(255<(t=Math.round(t))?255:t<0?0:t).toString(16)).length?"0".concat(t):t}).join(""))}},{key:"toHSL",value:function(){var t,e,a=this.rgb[0]/255,i=this.rgb[1]/255,r=this.rgb[2]/255,n=this.alpha,l=Math.max(a,i,r),s=Math.min(a,i,r),o=(l+s)/2,h=l-s;if(l===s)t=e=0;else{switch(e=.5<o?h/(2-l-s):h/(l+s),l){case a:t=(i-r)/h+(i<r?6:0);break;case i:t=(r-a)/h+2;break;case r:t=(a-i)/h+4}t/=6}return{h:360*t,s:e,l:o,a:n}}},{key:"toARGB",value:function(){var t=[Math.round(255*this.alpha)].concat(this.rgb);return"#".concat(t.map(function(t){return 1===(t=(255<(t=Math.round(t))?255:t<0?0:t).toString(16)).length?"0".concat(t):t}).join(""))}},{key:"mix",value:function(t,e){var a=this,i=e,r=2*i-1,n=a.toHSL().a-t.toHSL().a,l=((r*n==-1?r:(r+n)/(1+r*n))+1)/2,s=1-l;return new o([a.rgb[0]*l+t.rgb[0]*s,a.rgb[1]*l+t.rgb[1]*s,a.rgb[2]*l+t.rgb[2]*s],a.alpha*i+t.alpha*(1-i))}}]),o}(),M=function(){function r(t,e,a,i){_(this,r),this.start_color=new b(t),this.end_color=new b(e),this.start_value=a,this.end_value=i,this.value_range=i-a}return l(r,[{key:"map_value",value:function(t){return t=Math.max(t,this.start_value),t=((t=Math.min(t,this.end_value))-this.start_value)/this.value_range,this.start_color.mix(this.end_color,1-t).toCSS()}}]),r}(),k=function(){function n(t,e,a,i,r){_(this,n),this.positive_ramp=new M(e,a,0,r),this.negative_ramp=new M(e,t,0,-i),this.start_value=i,this.end_value=r}return l(n,[{key:"map_value",value:function(t){return t=Math.max(t,this.start_value),0<=(t=Math.min(t,this.end_value))?this.positive_ramp.map_value(t):this.negative_ramp.map_value(-t)}}]),n}(),x=function(t){function f(t,e,a,i,r){var n,l,s;if(_(this,f),void 0===(n=u(this,c(f).call(this,t,e,a,i,r))).prefs.min_value){var o=1/0;for(l=0,s=n.data.length;l<s;l++)o=Math.min(o,n.data[l][6]);n.prefs.min_value=o}if(void 0===n.prefs.max_value){var h=-1/0;for(l=0,s=n.data.length;l<s;l++)h=Math.max(h,n.data[l][6]);n.prefs.max_value=h}return n}return i(f,d),l(f,[{key:"draw",value:function(t,e,a,i){var r,n,l,s,o,h,f=this.prefs.min_value,u=this.prefs.max_value,c=this.view_start,_=1/Math.sqrt(2),d=new k(this.prefs.neg_color,"#FFFFFF",this.prefs.pos_color,f,u),v=function(t){return(t-c)*i};t.save(),t.rotate(-45*Math.PI/180),t.scale(_,_);for(var p=0,g=this.data.length;p<g;p++)n=v((r=this.data[p])[1]),l=v(r[2]),s=v(r[4]),o=v(r[5]),h=r[6],t.fillStyle=d.map_value(h),t.fillRect(n,s,l-n,o-s);t.restore()}}],[{key:"default_prefs",get:function(){return{min_value:void 0,max_value:void 0,mode:"Heatmap",pos_color:"#FF8C00",neg_color:"#4169E1"}}}]),f}(),lt=function(){function r(t,e,a,i){_(this,r),this.ctx=t,this.row_height=e,this.px_per_base=a,this.draw_details=("Pack"===i||"Auto"===i)&&a>=t.canvas.manager.char_width_px,this.delete_details_thickness=.2}return l(r,[{key:"draw_deletion",value:function(t,e,a){this.ctx.fillStyle="black";var i=(this.draw_details?this.delete_details_thickness:1)*this.row_height;e+=.5*(this.row_height-i),this.ctx.fillRect(t,e,a*this.px_per_base,i)}}]),r}(),S=function(t){function s(t,e,a,i,r,n){var l;return _(this,s),(l=u(this,c(s).call(this,t,e,a,i,r))).base_color_fn=n,l.divider_height=1,l}return i(s,d),l(s,[{key:"get_row_height",value:function(){var t=this.mode;return"Dense"===t?10:"Squish"===t?5:10}},{key:"get_required_height",value:function(t){var e=this.prefs.summary_height;return 1<t&&this.prefs.show_sample_data&&(e+=this.divider_height+t*this.get_row_height()),e}},{key:"draw",value:function(t,e,a,i){t.save();var r,n,f,l,s,o,h,u,c,_,d,v=Math.max(1,Math.floor(i)),p=this.data.length?this.data[0][7].split(",").length:0,g="Squish"===this.mode?5:10,m=i<.1?g:"Squish"===this.mode?3:9,y=!0,w=new lt(t,g,i,this.mode);1===p&&(g=m=i<t.canvas.manager.char_width_px?this.prefs.summary_height:g,w.row_height=g,y=!1),this.prefs.show_sample_data&&y&&(t.fillStyle="#F3F3F3",t.globalAlpha=1,t.fillRect(0,this.prefs.summary_height-this.divider_height,e,this.divider_height)),t.textAlign="center";for(var b=0;b<this.data.length;b++)if(n=(r=this.data[b])[1],f=r[3],l=[r[4].split(",")],s=r[7].split(","),o=r.slice(8),l=F.map(F.flatten(l),function(t){var e,a,i,r,n,l,s,o={type:"snp",value:t,start:0},h=(a=t,i=(e=f).length,r=a.length,n=0,l=1,s=null,"-"===a?(s="deletion",l=e.length):0===e.indexOf(a)&&r<i?(s="deletion",l=i-r,n=r):0===a.indexOf(e)&&i<r&&(s="insertion",l=r-i,n=r),null!==s?{type:s,start:n,len:l}:{});return F.extend(o,h)}),!(n<this.view_start||n>this.view_end)){if(y)for(t.fillStyle="#999999",t.globalAlpha=1,d=0;d<l.length;d++)for(u=this.get_start_draw_pos(n+l[d].start,i),t.fillRect(u,0,v,this.prefs.summary_height),c=this.prefs.summary_height,d=0;d<l.length;d++){t.fillStyle="deletion"===l[d].type?"black":this.base_color_fn(l[d].value);var M=o/s.length,k=Math.ceil(this.prefs.summary_height*M);t.fillRect(u,c-k,v,k),c-=k}if(this.prefs.show_sample_data)for(c=y?this.prefs.summary_height+this.divider_height:0,d=0;d<s.length;d++,c+=g)if(h=null,(_=s[d]?s[d].split(/\/|\|/):["0","0"])[0]===_[1]?"."===_[0]||"0"!==_[0]&&(h=l[parseInt(_[0],10)-1],t.globalAlpha=1):(h="0"!==_[0]?_[0]:_[1],h=l[parseInt(h,10)-1],t.globalAlpha=.5),h)if(u=this.get_start_draw_pos(n+h.start,i),"snp"===h.type){var x=h.value;t.fillStyle=this.base_color_fn(x),w.draw_details?t.fillText(x,this.get_draw_pos(n,i),c+g):t.fillRect(u,c+1,v,m)}else"deletion"===h.type&&w.draw_deletion(u,c+1,h.len)}t.restore()}}]),s}();t.default={Scaler:h,LinePainter:f,LinkedFeaturePainter:m,ReadPainter:y,ArcLinkedFeaturePainter:w,DiagonalHeatmapPainter:x,VariantPainter:S}});