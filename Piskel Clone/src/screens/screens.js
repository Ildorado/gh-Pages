!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(0),n(3),n(4),n(5),n(6),n(7);const r=n(8),i=document.getElementById("canvas"),o=document.querySelector(".mainColor"),c=i.getContext("2d"),s="lightgray";c.fillStyle=s,c.fillRect(0,0,i.width,i.height);const a=document.querySelector(".main__frames"),l=document.querySelector(".addNewFrame"),u=[];let d=1;const f=JSON.parse(localStorage.getItem("stateObject")),h={},[m,y]=[r.areArraysEqual,r.getRandomInt];function g(){const e=i.toDataURL(),t=new Image;t.src=e,u[d-1]?u[d-1]=t:u.push(t),a.children[d-1].style.backgroundImage=`url(${e})`}function v(e){g();const t=u[e-1];d=e,c.clearRect(0,0,i.width,i.height),c.drawImage(t,0,0)}function w(){g();const e=document.querySelector(".frame").cloneNode(!0);e.classList.contains("firstFrame")&&e.classList.remove("firstFrame"),e.children[0].innerText=Number(a.children[a.children.length-2].children[0].innerText)+1,a.insertBefore(e,a.children[a.children.length-1]),d=a.children.length-1,c.clearRect(0,0,i.width,i.height),c.fillStyle=s,c.fillRect(0,0,i.width,i.height),v(d)}function p(e){const t=document.querySelectorAll(".frame")[e-1].cloneNode(!0);t.classList.contains("firstFrame")&&t.classList.remove("firstFrame"),c.clearRect(0,0,i.width,i.height),t.children[0].innerText=a.children.length,a.insertBefore(t,a.children[a.children.length-1]),d=a.children.length-1,c.drawImage(u[e-1],0,0),g()}function L(e){if(a.children.length>2){e===d?u.length===d?v(d-1):u.length>d&&(v(d+1),d-=1):e<d&&(d-=1),a.children[e-1].remove(),u.splice(e-1,1);for(let e=0;e<a.children.length-1;e+=1)a.children[e].classList.contains("frame")&&(a.children[e].children[0].innerText=e+1)}}l.addEventListener("click",w),a.addEventListener("click",function(e){e.target.classList.contains("numberOfFrame")?v(Number(e.target.innerText)):e.target.classList.contains("frame")?v(Number(e.target.children[0].innerText)):e.target.classList.contains("duplicateIcon")?p(e.target.parentElement.children[0].innerText):e.target.classList.contains("deleteIcon")&&L(e.target.parentElement.children[0].innerText)}),g();const b=document.querySelector(".FPS");let k=null;const E=document.querySelector(".showAnimation");let S=0;function B(e,t){E.innerHTML="",e[S].classList.contains("AnimationImg")||e[S].classList.add("AnimationImg"),E.appendChild(e[S]),S===e.length-1?m(e,u)&&t===b.value?S=0:(S=0,I()):S+=1}function I(){const e=u.slice();let t=b.value;t<1?t=1:t>24&&(t=24),clearInterval(k),k=window.setInterval(B,1e3/t,e,t)}I();const P=document.querySelector(".FullscreenButton");P.addEventListener("click",function(){""!==E.innerHTML&&E.requestFullscreen()});const R=document.querySelector(".size-picker-container");let T=1,F=R.children[0];R.addEventListener("click",function(e){e.target.parentElement===R&&(T=e.target.attributes[1].value,F.classList.remove("selected"),(F=e.target).classList.add("selected"))});const K=document.querySelector(".main__pallete__tool-picker"),x=[];let q,M=!1,A=0,C=0,N=i.clientWidth/i.width;function O(e){A=e.offsetX,C=e.offsetY}function j(e){O(e),M=!0}function W(e){!0===M&&(Y(c,A,C,e.offsetX,e.offsetY),O(e))}function X(e){!0===M&&(Y(c,A,C,e.offsetX,e.offsetY),A=0,C=0,M=!1)}function Y(e,t,n,r,i){e.beginPath(),e.strokeStyle=o.value,e.lineWidth=T,e.moveTo(t/N,n/N),e.lineTo(r/N,i/N),e.stroke(),e.closePath()}function _(){i.addEventListener("mousedown",j),i.addEventListener("mousemove",W),i.addEventListener("mouseup",X),x.push(["mousedown",j]),x.push(["mousemove",W]),x.push(["mouseup",X])}function z(){c.fillStyle=o.value,c.fillRect(0,0,i.width,i.height)}function D(e){O(e),M=!0}function U(e){!0===M&&($(c,A,C,e.offsetX,e.offsetY),O(e))}function G(e){!0===M&&($(c,A,C,e.offsetX,e.offsetY),A=0,C=0,M=!1)}function $(e,t,n,r,i){e.beginPath(),e.strokeStyle=s,e.lineWidth=10*T,e.moveTo(t/N,n/N),e.lineTo(r/N,i/N),e.stroke(),e.closePath()}function Q(){i.addEventListener("mousedown",D),i.addEventListener("mousemove",U),i.addEventListener("mouseup",G),x.push(["mousedown",D]),x.push(["mousemove",U]),x.push(["mouseup",G])}function H(e){O(e),M=!0}function J(e){!0===M&&(Y(c,A,C,e.offsetX,e.offsetY),M=!1)}function Z(){i.addEventListener("mousedown",H),i.addEventListener("mouseup",J),x.push(["mousedown",H]),x.push(["mouseup",J])}function V(e){O(e),M=!0}function ee(e){!0===M&&(!function(e,t,n,r,i){const c=r-t,s=i-n;e.beginPath(),e.strokeStyle=o.value,e.lineWidth=T,e.strokeRect(parseInt(t/N,10),parseInt(n/N,10),parseInt(c/N,10),parseInt(s/N,10)),e.closePath()}(c,A,C,e.offsetX,e.offsetY),M=!1)}function te(e){!0===M&&(!function(e,t,n,r,i){const c=r-t,s=i-n;e.fillStyle=o.value,e.fillRect(parseInt(t/N,10),parseInt(n/N,10),parseInt(c/N,10),parseInt(s/N,10))}(c,A,C,e.offsetX,e.offsetY),M=!1)}function ne(){i.addEventListener("mousedown",V),i.addEventListener("mouseup",ee),x.push(["mousedown",V]),x.push(["mouseup",ee])}function re(){i.addEventListener("mousedown",V),i.addEventListener("mouseup",te),x.push(["mousedown",V]),x.push(["mouseup",te])}function ie(e){O(e),M=!0}function oe(e){!0===M&&(!function(e,t,n,r,i){let c;r<t&&(c=r,r=t,t=c);i<n&&(c=i,i=n,n=c);e.strokeStyle=o.value,e.lineWidth=T,e.beginPath(),e.arc((r+t)/2/N,(i+n)/2/N,(r-t)/2/N,0,2*Math.PI),e.stroke(),e.closePath()}(c,A,C,e.offsetX,e.offsetY),M=!1)}function ce(e){!0===M&&(!function(e,t,n,r,i){let c;r<t&&(c=r,r=t,t=c);i<n&&(c=i,i=n,n=c);e.beginPath(),e.arc((r+t)/2/N,(i+n)/2/N,(r-t)/2/N,0,2*Math.PI),e.fillStyle=o.value,e.fill(),e.closePath()}(c,A,C,e.offsetX,e.offsetY),M=!1)}function se(){i.addEventListener("mousedown",ie),i.addEventListener("mouseup",oe),x.push(["mousedown",ie]),x.push(["mouseup",oe])}function ae(){i.addEventListener("mousedown",ie),i.addEventListener("mouseup",ce),x.push(["mousedown",ie]),x.push(["mouseup",ce])}function le(e){!0===M&&(!function(e,t,n,r,i){let c=!1;t<r&&(c=!0),e.strokeStyle=o.value,e.lineWidth=T,e.beginPath();const s=Math.abs(i-n)/2,a=s*s/(Math.sqrt((r-t)**2+(i-n)**2)/2),l=Math.sqrt(s*s-a*a),u=Math.acos(l/s);e.arc((r+t)/2/N,(i+n)/2/N,s/N,u,Math.PI+u,c),e.stroke(),e.closePath()}(c,A,C,e.offsetX,e.offsetY),M=!1)}function ue(){i.addEventListener("mousedown",ie),i.addEventListener("mouseup",le),x.push(["mousedown",ie]),x.push(["mouseup",le])}function de(){c.fillStyle=s,c.fillRect(0,0,i.width,i.height)}function fe(){for(let e=20*T;e>0;e-=1){const e=20*T,t=y(-e,e),n=y(-e,e);c.fillStyle=o.value,c.fillRect((A+t)/N,(C+n)/N,1,1)}}function he(e){O(e),M=!0,c.lineCap="round",c.lineJoin="round",q=setInterval(fe,50)}function me(e){!0===M&&O(e)}function ye(){!0===M&&(clearInterval(q),M=!1)}function ge(){i.addEventListener("mousedown",he),i.addEventListener("mousemove",me),i.addEventListener("mouseup",ye),x.push(["mousedown",he]),x.push(["mousemove",me]),x.push(["mouseup",ye])}K.addEventListener("click",function(e){if(e.target.parentElement===K)switch(x.forEach(e=>{i.removeEventListener(e[0],e[1])}),e.target.classList[1]){case"pen":_();break;case"fillAllPixels":z();break;case"eraser":Q();break;case"stroke":Z();break;case"rectange":ne();break;case"filledRectange":re();break;case"circle":se();break;case"filledCircle":ae();break;case"halfCircle":ue();break;case"clear":de();break;case"spray":ge()}});const ve=document.querySelector(".canvas-size-container");let we=32,pe=ve.children[0];function Le(e){we=e,i.width=we,i.height=we,N=i.clientWidth/i.width,c.fillStyle=s,c.fillRect(0,0,i.width,i.height),c.drawImage(u[d-1],0,0),g(),function(){c.fillStyle=s;const e=d;for(let e=0;e<u.length;e+=1){const t=u[e];d=e+1,c.fillRect(0,0,i.width,i.height),c.drawImage(t,0,0),g()}v(e)}(),c.fillRect(0,0,i.width,i.height)}document.onresize=function(){N=i.clientWidth/i.width},ve.addEventListener("click",function(e){e.target.parentElement===ve&&(pe.classList.remove("selected"),(pe=e.target).classList.add("selected")),Le(e.target.attributes[1].value)}),window.addEventListener("unload",function(){h.imgs=[],u.forEach(e=>{h.imgs.push(e.src)}),h.penSize=String(T),h.currentCanvasSize=String(we),localStorage.removeItem("stateObject"),localStorage.setItem("stateObject",JSON.stringify(h))}),window.addEventListener("load",function(){switch(F.classList.remove("selected"),pe.classList.remove("selected"),f.penSize){case"1":F=R.children[0],T=1,F.classList.add("selected");break;case"2":F=R.children[1],T=2,F.classList.add("selected");break;case"3":F=R.children[2],T=3,F.classList.add("selected");break;case"4":F=R.children[3],T=4,F.classList.add("selected");break;default:F=R.children[0],T=1,F.classList.add("selected")}switch(f.currentCanvasSize){case"32":(pe=ve.children[0]).classList.add("selected");break;case"64":(pe=ve.children[1]).classList.add("selected"),i.width=64,i.height=64;break;case"128":(pe=ve.children[2]).classList.add("selected"),i.width=128,i.height=128;break;default:(pe=ve.children[0]).classList.add("selected")}N=i.clientWidth/i.width,c.fillStyle=s,c.fillRect(0,0,i.width,i.height)});const be=document.querySelector(".coords");i.addEventListener("mousemove",function(e){be.innerText=`[${we}x${we}] ${parseInt(e.offsetX/N,10)}:${parseInt(e.offsetY/N,10)}`});const ke=document.querySelector(".downloadButton");ke.addEventListener("click",function(){const e=new GIFEncoder;e.setRepeat(0),e.setDelay(1e3/b.value),e.start();const t=document.createElement("canvas");t.width=we,t.height=we;const n=t.getContext("2d");for(let t=0;t<u.length;t+=1)n.clearRect(0,0,i.width,i.height),n.drawImage(u[t],0,0),e.addFrame(n);e.finish(),e.download("download.gif")}),document.onkeyup=function(e){"KeyP"===e.code?_():e.shiftKey&&"KeyN"===e.code?p(d):e.shiftKey&&"KeyB"===e.code?L(d):e.shiftKey&&"Equal"===e.code?32==we?ve.children[1].click():64==we&&ve.children[2].click():e.shiftKey&&"Minus"===e.code?64==we?ve.children[0].click():128==we&&ve.children[1].click():"BracketRight"===e.code?1==T?R.children[1].click():2==T?R.children[2].click():3==T&&R.children[3].click():"BracketLeft"===e.code?2==T?R.children[0].click():3==T?R.children[1].click():4==T&&R.children[2].click():e.ctrlKey&&"KeyS"===e.code?ke.click():e.ctrlKey&&"KeyF"===e.code?P.click():"ArrowUp"===e.code&&d<a.children.length-1?v(d+1):"ArrowDown"===e.code&&d>1?v(d-1):"KeyF"===e.code?z():"KeyE"===e.code?Q():"KeyS"===e.code?ge():"KeyT"===e.code?Z():"KeyR"===e.code?ne():"KeyG"===e.code?re():"KeyA"===e.code?se():"KeyD"===e.code?ae():"KeyH"===e.code?ue():"KeyC"===e.code?de():"KeyN"===e.code&&w()}},function(e,t,n){},function(e,t){GIFEncoder=function(){for(var e=0,t={};e<256;e++)t[e]=String.fromCharCode(e);function n(){this.bin=[]}n.prototype.getData=function(){for(var e="",n=this.bin.length,r=0;r<n;r++)e+=t[this.bin[r]];return e},n.prototype.writeByte=function(e){this.bin.push(e)},n.prototype.writeUTFBytes=function(e){for(var t=e.length,n=0;n<t;n++)this.writeByte(e.charCodeAt(n))},n.prototype.writeBytes=function(e,t,n){for(var r=n||e.length,i=t||0;i<r;i++)this.writeByte(e[i])};var r,i,o,c,s,a,l,u,d,f={},h=null,m=-1,y=0,g=!1,v=[],w=7,p=-1,L=!1,b=!0,k=!1,E=10,S="Generated by jsgif (https://github.com/antimatter15/jsgif/)",B=(f.setDelay=function(e){y=Math.round(e/10)},f.setDispose=function(e){e>=0&&(p=e)},f.setRepeat=function(e){e>=0&&(m=e)},f.setTransparent=function(e){h=e},f.setComment=function(e){S=e},f.addFrame=function(e,t){if(null===e||!g||null===c)throw new Error("Please call start method before calling addFrame");var n=!0;try{t?e instanceof ImageData?(s=e.data,sizeset&&r==e.width&&i==e.height||I(e.width,e.height)):e instanceof Uint8ClampedArray?e.length==r*i*4?s=e:(console.log("Please set the correct size: ImageData length mismatch"),n=!1):(console.log("Please provide correct input"),n=!1):(s=e.getImageData(0,0,e.canvas.width,e.canvas.height).data,k||I(e.canvas.width,e.canvas.height)),T(),P(),b&&(q(),A(),m>=0&&M()),F(),""!==S&&K(),x(),b||A(),N(),b=!1}catch(e){n=!1}return n},f.download=function(e){if(null===c||0==L)console.log("Please call start method and add frames and call finish method before calling download");else{e=void 0!==e?e.endsWith(".gif")?e:e+".gif":"download.gif";var t=document.createElement("a");t.download=e,t.href=URL.createObjectURL(new Blob([new Uint8Array(c.bin)],{type:"image/gif"})),t.click()}},f.finish=function(){if(!g)return!1;var e=!0;g=!1;try{c.writeByte(59),L=!0}catch(t){e=!1}return e},function(){o=0,s=null,a=null,l=null,d=null,L=!1,b=!0}),I=(f.setFrameRate=function(e){15!=e&&(y=Math.round(100/e))},f.setQuality=function(e){e<1&&(e=1),E=e},f.setSize=function(e,t){g&&!b||((r=e)<1&&(r=320),(i=t)<1&&(i=240),k=!0)}),P=(f.start=function(){B();var e=!0;L=!1,c=new n;try{c.writeUTFBytes("GIF89a")}catch(t){e=!1}return g=e},f.cont=function(){B();return L=!1,c=new n,g=!0},function(){var e=a.length,t=e/3;l=[];var n=new NeuQuant(a,e,E);d=n.process();for(var r=0,i=0;i<t;i++){var c=n.map(255&a[r++],255&a[r++],255&a[r++]);v[c]=!0,l[i]=c}a=null,u=8,w=7,null!==h&&(o=R(h))}),R=function(e){if(null===d)return-1;for(var t=(16711680&e)>>16,n=(65280&e)>>8,r=255&e,i=0,o=16777216,c=d.length,s=0;s<c;){var a=t-(255&d[s++]),l=n-(255&d[s++]),u=r-(255&d[s]),f=a*a+l*l+u*u,h=s/3;v[h]&&f<o&&(o=f,i=h),s++}return i},T=function(){var e=r,t=i;a=[];for(var n=s,o=0,c=0;c<t;c++)for(var l=0;l<e;l++){var u=c*e*4+4*l;a[o++]=n[u],a[o++]=n[u+1],a[o++]=n[u+2]}},F=function(){var e,t;c.writeByte(33),c.writeByte(249),c.writeByte(4),null===h?(e=0,t=0):(e=1,t=2),p>=0&&(t=7&p),t<<=2,c.writeByte(0|t|e),C(y),c.writeByte(o),c.writeByte(0)},K=function(){c.writeByte(33),c.writeByte(254),c.writeByte(S.length),c.writeUTFBytes(S),c.writeByte(0)},x=function(){c.writeByte(44),C(0),C(0),C(r),C(i),b?c.writeByte(0):c.writeByte(128|w)},q=function(){C(r),C(i),c.writeByte(240|w),c.writeByte(0),c.writeByte(0)},M=function(){c.writeByte(33),c.writeByte(255),c.writeByte(11),c.writeUTFBytes("NETSCAPE2.0"),c.writeByte(3),c.writeByte(1),C(m),c.writeByte(0)},A=function(){c.writeBytes(d);for(var e=768-d.length,t=0;t<e;t++)c.writeByte(0)},C=function(e){c.writeByte(255&e),c.writeByte(e>>8&255)},N=function(){new LZWEncoder(r,i,l,u).encode(c)};f.stream=function(){return c},f.setProperties=function(e,t){g=e,b=t};return f}},function(e,t){LZWEncoder=function(){var e,t,n,r,i,o,c,s,a,l,u,d,f={},h=[],m=[],y=0,g=!1,v=0,w=0,p=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],L=[],b=f.LZWEncoder=function(i,o,c,s){e=i,t=o,n=c,r=Math.max(2,s)},k=function(e,t){L[d++]=e,d>=254&&I(t)},E=function(e){S(5003),y=l+2,g=!0,T(l,e)},S=function(e){for(var t=0;t<e;++t)h[t]=-1},B=f.compress=function(e,t){var n,r,i,o,f,v;for(g=!1,s=P(c=a=e),u=(l=1<<e-1)+1,y=l+2,d=0,o=R(),v=0,n=5003;n<65536;n*=2)++v;v=8-v,S(5003),T(l,t);e:for(;-1!=(i=R());)if(n=(i<<12)+o,h[r=i<<v^o]!=n){if(h[r]>=0){f=5003-r,0===r&&(f=1);do{if((r-=f)<0&&(r+=5003),h[r]==n){o=m[r];continue e}}while(h[r]>=0)}T(o,t),o=i,y<4096?(m[r]=y++,h[r]=n):E(t)}else o=m[r];T(o,t),T(u,t)},I=(f.encode=function(n){n.writeByte(r),i=e*t,o=0,B(r+1,n),n.writeByte(0)},function(e){d>0&&(e.writeByte(d),e.writeBytes(L,0,d),d=0)}),P=function(e){return(1<<e)-1},R=function(){return 0===i?-1:(--i,255&n[o++])},T=function(e,t){for(v&=p[w],w>0?v|=e<<w:v=e,w+=c;w>=8;)k(255&v,t),v>>=8,w-=8;if((y>s||g)&&(g?(s=P(c=a),g=!1):s=12==++c?4096:P(c)),e==u){for(;w>0;)k(255&v,t),v>>=8,w-=8;I(t)}};return b.apply(this,arguments),f}},function(e,t){NeuQuant=function(){var e,t,n,r,i,o={},c=[],s=[],a=[],l=[],u=o.NeuQuant=function(e,o,c){var l,u;for(t=e,n=o,r=c,i=new Array(256),l=0;l<256;l++)i[l]=new Array(4),(u=i[l])[0]=u[1]=u[2]=(l<<12)/256,a[l]=256,s[l]=0},d=(o.map=function(e,t,n){var r,o,s,a,l,u,d;for(l=1e3,d=-1,o=(r=c[t])-1;r<256||o>=0;)r<256&&((s=(u=i[r])[1]-t)>=l?r=256:(r++,s<0&&(s=-s),(a=u[0]-e)<0&&(a=-a),(s+=a)<l&&((a=u[2]-n)<0&&(a=-a),(s+=a)<l&&(l=s,d=u[3])))),o>=0&&((s=t-(u=i[o])[1])>=l?o=-1:(o--,s<0&&(s=-s),(a=u[0]-e)<0&&(a=-a),(s+=a)<l&&((a=u[2]-n)<0&&(a=-a),(s+=a)<l&&(l=s,d=u[3]))));return d},o.process=function(){return function(){var i,o,c,s,a,u,d,y,g,v,w,p,L,b;for(n<1509&&(r=1),e=30+(r-1)/3,p=t,L=0,b=n,v=(w=n/(3*r))/100|0,y=1024,(d=(u=2048)>>6)<=1&&(d=0),i=0;i<d;i++)l[i]=y*(256*(d*d-i*i)/(d*d));for(g=n<1509?3:n%499!=0?1497:n%491!=0?1473:n%487!=0?1461:1509,i=0;i<w;)if(c=(255&p[L+0])<<4,s=(255&p[L+1])<<4,a=(255&p[L+2])<<4,o=m(c,s,a),h(y,o,c,s,a),0!==d&&f(d,o,c,s,a),(L+=g)>=b&&(L-=n),0===v&&(v=1),++i%v==0)for(y-=y/e,(d=(u-=u/30)>>6)<=1&&(d=0),o=0;o<d;o++)l[o]=y*(256*(d*d-o*o)/(d*d))}(),d(),function(){var e,t,n,r,o,s,a,l;for(a=0,l=0,e=0;e<256;e++){for(n=e,r=(o=i[e])[1],t=e+1;t<256;t++)(s=i[t])[1]<r&&(n=t,r=s[1]);if(s=i[n],e!=n&&(t=s[0],s[0]=o[0],o[0]=t,t=s[1],s[1]=o[1],o[1]=t,t=s[2],s[2]=o[2],o[2]=t,t=s[3],s[3]=o[3],o[3]=t),r!=a){for(c[a]=l+e>>1,t=a+1;t<r;t++)c[t]=e;a=r,l=e}}for(c[a]=l+255>>1,t=a+1;t<256;t++)c[t]=255}(),function(){for(var e=[],t=new Array(256),n=0;n<256;n++)t[i[n][3]]=n;for(var r=0,o=0;o<256;o++){var c=t[o];e[r++]=i[c][0],e[r++]=i[c][1],e[r++]=i[c][2]}return e}()},function(){var e;for(e=0;e<256;e++)i[e][0]>>=4,i[e][1]>>=4,i[e][2]>>=4,i[e][3]=e}),f=function(e,t,n,r,o){var c,s,a,u,d,f,h;for((a=t-e)<-1&&(a=-1),(u=t+e)>256&&(u=256),c=t+1,s=t-1,f=1;c<u||s>a;){if(d=l[f++],c<u){h=i[c++];try{h[0]-=d*(h[0]-n)/(1<<18),h[1]-=d*(h[1]-r)/(1<<18),h[2]-=d*(h[2]-o)/(1<<18)}catch(e){}}if(s>a){h=i[s--];try{h[0]-=d*(h[0]-n)/(1<<18),h[1]-=d*(h[1]-r)/(1<<18),h[2]-=d*(h[2]-o)/(1<<18)}catch(e){}}}},h=function(e,t,n,r,o){var c=i[t];c[0]-=e*(c[0]-n)/1024,c[1]-=e*(c[1]-r)/1024,c[2]-=e*(c[2]-o)/1024},m=function(e,t,n){var r,o,c,l,u,d,f,h,m,y;for(m=h=~(1<<31),f=d=-1,r=0;r<256;r++)(o=(y=i[r])[0]-e)<0&&(o=-o),(c=y[1]-t)<0&&(c=-c),o+=c,(c=y[2]-n)<0&&(c=-c),(o+=c)<h&&(h=o,d=r),(l=o-(s[r]>>12))<m&&(m=l,f=r),u=a[r]>>10,a[r]-=u,s[r]+=u<<10;return a[d]+=64,s[d]-=65536,f};return u.apply(this,arguments),o}},function(e,t){},function(e,t){e.exports.areArraysEqual=function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0},e.exports.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}]);