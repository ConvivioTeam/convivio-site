!function e(t,n,r){function o(a,f){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!f&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(t,r,o,i,a,f,u,s,l){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=typeof e;if("base64"===t&&"string"===r)for(e=j(e);e.length%4!==0;)e+="=";var i;if("number"===r)i=F(e);else if("string"===r)i=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=F(e.length)}var a;o._useTypedArrays?a=o._augment(new Uint8Array(i)):(a=this,a.length=i,a._isBuffer=!0);var f;if(o._useTypedArrays&&"number"==typeof e.byteLength)a._set(e);else if(W(e))for(f=0;f<i;f++)o.isBuffer(e)?a[f]=e.readUInt8(f):a[f]=e[f];else if("string"===r)a.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(f=0;f<i;f++)a[f]=0;return a}function d(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var a=t.length;H(a%2===0,"Invalid hex string"),r>a/2&&(r=a/2);for(var f=0;f<r;f++){var u=parseInt(t.substr(2*f,2),16);H(!isNaN(u),"Invalid hex string"),e[n+f]=u}return o._charsWritten=2*f,f}function c(e,t,n,r){var i=o._charsWritten=X(z(t),e,n,r);return i}function h(e,t,n,r){var i=o._charsWritten=X(J(t),e,n,r);return i}function g(e,t,n,r){return h(e,t,n,r)}function p(e,t,n,r){var i=o._charsWritten=X(R(t),e,n,r);return i}function w(e,t,n,r){var i=o._charsWritten=X(P(t),e,n,r);return i}function y(e,t,n){return 0===t&&n===e.length?K.fromByteArray(e):K.fromByteArray(e.slice(t,n))}function b(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=Y(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+Y(o)}function v(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function m(e,t,n){return v(e,t,n)}function E(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=t;i<n;i++)o+=q(e[i]);return o}function I(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function A(e,t,n,r){r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(i=e[t],t+1<o&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<o&&(i|=e[t+1])),i}}function B(e,t,n,r){r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(t+2<o&&(i=e[t+2]<<16),t+1<o&&(i|=e[t+1]<<8),i|=e[t],t+3<o&&(i+=e[t+3]<<24>>>0)):(t+1<o&&(i=e[t+1]<<16),t+2<o&&(i|=e[t+2]<<8),t+3<o&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function _(e,t,n,r){r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=A(e,t,n,!0),a=32768&i;return a?(65535-i+1)*-1:i}}function L(e,t,n,r){r||(H("boolean"==typeof n,"missing or invalid endian"),H(void 0!==t&&null!==t,"missing offset"),H(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i=B(e,t,n,!0),a=2147483648&i;return a?(4294967295-i+1)*-1:i}}function U(e,t,n,r){return r||(H("boolean"==typeof n,"missing or invalid endian"),H(t+3<e.length,"Trying to read beyond buffer length")),Q.read(e,t,n,23,4)}function M(e,t,n,r){return r||(H("boolean"==typeof n,"missing or invalid endian"),H(t+7<e.length,"Trying to read beyond buffer length")),Q.read(e,t,n,52,8)}function k(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+1<e.length,"trying to write beyond buffer length"),V(t,65535));var i=e.length;if(!(n>=i))for(var a=0,f=Math.min(i-n,2);a<f;a++)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function C(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+3<e.length,"trying to write beyond buffer length"),V(t,4294967295));var i=e.length;if(!(n>=i))for(var a=0,f=Math.min(i-n,4);a<f;a++)e[n+a]=t>>>8*(r?a:3-a)&255}function S(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+1<e.length,"Trying to write beyond buffer length"),$(t,32767,-32768));var i=e.length;n>=i||(t>=0?k(e,t,n,r,o):k(e,65535+t+1,n,r,o))}function T(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+3<e.length,"Trying to write beyond buffer length"),$(t,2147483647,-2147483648));var i=e.length;n>=i||(t>=0?C(e,t,n,r,o):C(e,4294967295+t+1,n,r,o))}function x(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+3<e.length,"Trying to write beyond buffer length"),G(t,3.4028234663852886e38,-3.4028234663852886e38));var i=e.length;n>=i||Q.write(e,t,n,r,23,4)}function N(e,t,n,r,o){o||(H(void 0!==t&&null!==t,"missing value"),H("boolean"==typeof r,"missing or invalid endian"),H(void 0!==n&&null!==n,"missing offset"),H(n+7<e.length,"Trying to write beyond buffer length"),G(t,1.7976931348623157e308,-1.7976931348623157e308));var i=e.length;n>=i||Q.write(e,t,n,r,52,8)}function j(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function D(e,t,n){return"number"!=typeof e?n:(e=~~e,e>=t?t:e>=0?e:(e+=t,e>=0?e:0))}function F(e){return e=~~Math.ceil(+e),e<0?0:e}function O(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function W(e){return O(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function q(e){return e<16?"0"+e.toString(16):e.toString(16)}function z(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&r<=57343&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),a=0;a<i.length;a++)t.push(parseInt(i[a],16))}}return t}function J(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function P(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function R(e){return K.toByteArray(e)}function X(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function Y(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function V(e,t){H("number"==typeof e,"cannot write a non-number as a number"),H(e>=0,"specified a negative value for writing an unsigned value"),H(e<=t,"value is larger than maximum value for type"),H(Math.floor(e)===e,"value has a fractional component")}function $(e,t,n){H("number"==typeof e,"cannot write a non-number as a number"),H(e<=t,"value larger than maximum allowed value"),H(e>=n,"value smaller than minimum allowed value"),H(Math.floor(e)===e,"value has a fractional component")}function G(e,t,n){H("number"==typeof e,"cannot write a non-number as a number"),H(e<=t,"value larger than maximum allowed value"),H(e>=n,"value smaller than minimum allowed value")}function H(e,t){if(!e)throw new Error(t||"Failed assertion")}var K=e("base64-js"),Q=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=z(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=R(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(H(O(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var a=e[n];a.copy(r,i),i+=a.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var i=this.length-t;n?(n=Number(n),n>i&&(n=i)):n=i,r=String(r||"utf8").toLowerCase();var a;switch(r){case"hex":a=d(this,e,t,n);break;case"utf8":case"utf-8":a=c(this,e,t,n);break;case"ascii":a=h(this,e,t,n);break;case"binary":a=g(this,e,t,n);break;case"base64":a=p(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":a=w(this,e,t,n);break;default:throw new Error("Unknown encoding")}return a},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,n=void 0!==n?Number(n):n=r.length,n===t)return"";var o;switch(e){case"hex":o=E(r,t,n);break;case"utf8":case"utf-8":o=b(r,t,n);break;case"ascii":o=v(r,t,n);break;case"binary":o=m(r,t,n);break;case"base64":o=y(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=I(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){H(r>=n,"sourceEnd < sourceStart"),H(t>=0&&t<e.length,"targetStart out of bounds"),H(n>=0&&n<i.length,"sourceStart out of bounds"),H(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var a=r-n;if(a<100||!o._useTypedArrays)for(var f=0;f<a;f++)e[f+t]=this[f+n];else e._set(this.subarray(n,n+a),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=D(e,n,0),t=D(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,(void 0),(!0)),a=0;a<r;a++)i[a]=this[a+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(H(void 0!==e&&null!==e,"missing offset"),H(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return A(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return A(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return B(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return B(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(H(void 0!==e&&null!==e,"missing offset"),H(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){var n=128&this[e];return n?(255-this[e]+1)*-1:this[e]}},o.prototype.readInt16LE=function(e,t){return _(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return _(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return L(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return L(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return U(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return U(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return M(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return M(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(H(void 0!==e&&null!==e,"missing value"),H(void 0!==t&&null!==t,"missing offset"),H(t<this.length,"trying to write beyond buffer length"),V(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){k(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){k(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){C(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){C(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(H(void 0!==e&&null!==e,"missing value"),H(void 0!==t&&null!==t,"missing offset"),H(t<this.length,"Trying to write beyond buffer length"),$(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){S(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){S(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){T(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){T(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){x(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){x(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){N(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){N(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),H("number"==typeof e&&!isNaN(e),"value is not a number"),H(n>=t,"end < start"),n!==t&&0!==this.length){H(t>=0&&t<this.length,"start out of bounds"),H(n>=0&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=q(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var Z=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=Z.get,e.set=Z.set,e.write=Z.write,e.toString=Z.toString,e.toLocaleString=Z.toString,e.toJSON=Z.toJSON,e.copy=Z.copy,e.slice=Z.slice,e.readUInt8=Z.readUInt8,e.readUInt16LE=Z.readUInt16LE,e.readUInt16BE=Z.readUInt16BE,e.readUInt32LE=Z.readUInt32LE,e.readUInt32BE=Z.readUInt32BE,e.readInt8=Z.readInt8,e.readInt16LE=Z.readInt16LE,e.readInt16BE=Z.readInt16BE,e.readInt32LE=Z.readInt32LE,e.readInt32BE=Z.readInt32BE,e.readFloatLE=Z.readFloatLE,e.readFloatBE=Z.readFloatBE,e.readDoubleLE=Z.readDoubleLE,e.readDoubleBE=Z.readDoubleBE,e.writeUInt8=Z.writeUInt8,e.writeUInt16LE=Z.writeUInt16LE,e.writeUInt16BE=Z.writeUInt16BE,e.writeUInt32LE=Z.writeUInt32LE,e.writeUInt32BE=Z.writeUInt32BE,e.writeInt8=Z.writeInt8,e.writeInt16LE=Z.writeInt16LE,e.writeInt16BE=Z.writeInt16BE,e.writeInt32LE=Z.writeInt32LE,e.writeInt32BE=Z.writeInt32BE,e.writeFloatLE=Z.writeFloatLE,e.writeFloatBE=Z.writeFloatBE,e.writeDoubleLE=Z.writeDoubleLE,e.writeDoubleBE=Z.writeDoubleBE,e.fill=Z.fill,e.inspect=Z.inspect,e.toArrayBuffer=Z.toArrayBuffer,e}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")},{"base64-js":2,buffer:1,ieee754:3,oMfpAn:4}],2:[function(e,t,n){(function(e,t,r,o,i,a,f,u,s){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(e){"use strict";function t(e){var t=e.charCodeAt(0);return t===i||t===d?62:t===a||t===c?63:t<f?-1:t<f+10?t-f+26+26:t<s+26?t-s:t<u+26?t-u+26:void 0}function n(e){function n(e){s[d++]=e}var r,i,a,f,u,s;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=e.length;u="="===e.charAt(l-2)?2:"="===e.charAt(l-1)?1:0,s=new o(3*e.length/4-u),a=u>0?e.length-4:e.length;var d=0;for(r=0,i=0;r<a;r+=4,i+=3)f=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&f)>>16),n((65280&f)>>8),n(255&f);return 2===u?(f=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&f)):1===u&&(f=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(f>>8&255),n(255&f)),s}function r(e){function t(e){return l.charAt(e)}function n(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}var r,o,i,a=e.length%3,f="";for(r=0,i=e.length-a;r<i;r+=3)o=(e[r]<<16)+(e[r+1]<<8)+e[r+2],f+=n(o);switch(a){case 1:o=e[e.length-1],f+=t(o>>2),f+=t(o<<4&63),f+="==";break;case 2:o=(e[e.length-2]<<8)+e[e.length-1],f+=t(o>>10),f+=t(o>>4&63),f+=t(o<<2&63),f+="="}return f}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),a="/".charCodeAt(0),f="0".charCodeAt(0),u="a".charCodeAt(0),s="A".charCodeAt(0),d="-".charCodeAt(0),c="_".charCodeAt(0);e.toByteArray=n,e.fromByteArray=r}("undefined"==typeof n?this.base64js={}:n)}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{buffer:1,oMfpAn:4}],3:[function(e,t,n){(function(e,t,r,o,i,a,f,u,s){n.read=function(e,t,n,r,o){var i,a,f=8*o-r-1,u=(1<<f)-1,s=u>>1,l=-7,d=n?o-1:0,c=n?-1:1,h=e[t+d];for(d+=c,i=h&(1<<-l)-1,h>>=-l,l+=f;l>0;i=256*i+e[t+d],d+=c,l-=8);for(a=i&(1<<-l)-1,i>>=-l,l+=r;l>0;a=256*a+e[t+d],d+=c,l-=8);if(0===i)i=1-s;else{if(i===u)return a?NaN:(h?-1:1)*(1/0);a+=Math.pow(2,r),i-=s}return(h?-1:1)*a*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var a,f,u,s=8*i-o-1,l=(1<<s)-1,d=l>>1,c=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,g=r?1:-1,p=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(f=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),t+=a+d>=1?c/u:c*Math.pow(2,1-d),t*u>=2&&(a++,u/=2),a+d>=l?(f=0,a=l):a+d>=1?(f=(t*u-1)*Math.pow(2,o),a+=d):(f=t*Math.pow(2,d-1)*Math.pow(2,o),a=0));o>=8;e[n+h]=255&f,h+=g,f/=256,o-=8);for(a=a<<o|f,s+=o;s>0;e[n+h]=255&a,h+=g,a/=256,s-=8);e[n+h-g]|=128*p}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{buffer:1,oMfpAn:4}],4:[function(e,t,n){(function(e,n,r,o,i,a,f,u,s){function l(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=l,e.addListener=l,e.once=l,e.off=l,e.removeListener=l,e.removeAllListeners=l,e.emit=l,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")},{buffer:1,oMfpAn:4}],5:[function(e,t,n){(function(e,t,n,r,o,i,a,f,u){function s(e){for(var t=e.srcElement||e.target;t&&("undefined"==typeof t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;if(t&&t.href){var n=/\.(zip|rar|tar|gz|exe|dmg|pdf|doc.*|xls.*|ppt.*|pps.*|vcf|txt|csv|rtf|odt|pages|mp3|wav|wma|mov|avi|wmv|mpg|mp4|flv|png|jpg|jpeg|gif|tif|tiff|bmp|svg|eps|ai|psd)$/i,r=document.location.pathname+document.location.search,o=!1;t.href.match(n)?(t.href.indexOf(location.host)==-1?ga("send","event","Download external file",t.href,r):ga("send","event","Download file",t.pathname,r),o=!0):t.href.indexOf(location.host)==-1&&ga("send","event","External link",t.href,r),o&&(setTimeout(function(){window.open(t.href,"_blank")}.bind(t),500),e.preventDefault?e.preventDefault():e.returnValue=!1)}}window.addEventListener?window.addEventListener("load",function(){document.body.addEventListener("click",s,!1)},!1):window.attachEvent&&window.attachEvent("onload",function(){document.body.attachEvent("onclick",s)})}).call(this,e("oMfpAn"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_a04de7f3.js","/")},{buffer:1,oMfpAn:4}]},{},[5]);