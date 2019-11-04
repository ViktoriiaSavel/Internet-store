!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"render",value:function(){return'\n        <div class="container">\n            <form name="addProducts">\n                <div class="form-group row">\n                <label for="code" class="col-sm-2 col-form-label">Code</label>\n                    <div class="col-sm-10">\n                        <input type="text" class="form-control" id="productCode" placeholder="Code">\n                    </div>\n                </div>\n                <div class="form-group row">\n                <label for="name" class="col-sm-2 col-form-label">Name</label>\n                    <div class="col-sm-10">\n                        <input type="text" class="form-control" id="productName" placeholder="Name">\n                    </div>\n                </div>\n                <div class="form-group row">\n                <label for="goodsPrice" class="col-sm-2 col-form-label">Price</label>\n                    <div class="col-sm-10">\n                        <input type="text" class="form-control" id="productPrice" placeholder="Price">\n                    </div>\n                </div>\n                <div class="form-group row">\n                    <div class="col-sm-2">Available</div>\n                    <div class="col-sm-10">\n                        <div class="form-check">\n                            <input class="form-check-input" type="checkbox" id="productAvailable">\n                        </div>\n                    </div>\n                </div>\n                <div class="form-group row">\n                <label for="goodsImage" class="col-sm-2 col-form-label">Image</label>\n                    <div class="col-sm-10">\n                        <input type="text" class="form-control" id="productImage" placeholder="Paste image URL">\n                    </div>\n                </div>\n                <div class="form-group row">\n                <label for="goodsDescription" class="col-sm-2 col-form-label">Description</label>\n                    <div class="col-sm-10">\n                        <input type="text" class="form-control" id="productDescription" placeholder="Description">\n                    </div>\n                </div>\n                <button type="submit" class="btn btn-primary">Save</button>\n        </form>\n        </div>\n        '}},{key:"afterRender",value:function(){document.forms.addProducts.addEventListener("submit",(function(t){t.preventDefault();var e=t.target.elements.productCode.value,n=t.target.elements.productName.value,r=t.target.elements.productPrice.value,o=t.target.elements.productAvailable.value,i=t.target.elements.productImage.value,a=t.target.elements.productDescription.value;if(!(e&&n&&r&&o&&i&&a))return console.log("Please fill in all fields of the form!")}))}}])&&r(e.prototype,n),o&&r(e,o),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"render",value:function(){return"\n            <div>GoodsListComponent</div>\n        "}}])&&i(e.prototype,n),r&&i(e,r),t}(),c="http(s)://5dc00a2895f4b90014ddc13b.mockapi.io/store";function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"get",value:function(t){return new Promise((function(e,n){fetch(t).then((function(t){return t.json()})).then((function(t){return e(t)})).catch((function(t){return n(t)}))}))}},{key:"post",value:function(t,e,n){return new Promise((function(n,r){fetch(t,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return n(t)})).catch((function(t){return r(t)}))}))}}])&&u(e.prototype,n),r&&u(e,r),t}();function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"getProducts",value:function(){var e=new l;return console.log(t),new Promise((function(t,n){e.get("".concat(c,"/products")).then((function(e){console.log(e),t(e)})).catch((function(t){return n(t)}))}))}}])&&s(e.prototype,n),r&&s(e,r),t}();function d(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._productsTableService=new f}var e,n,r,o,i;return e=t,(n=[{key:"beforeRender",value:(o=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._productsTableService.getProducts();case 2:this._products=t.sent,console.log(this._products);case 4:case"end":return t.stop()}}),t,this)})),i=function(){var t=this,e=arguments;return new Promise((function(n,r){var i=o.apply(t,e);function a(t){d(i,n,r,a,c,"next",t)}function c(t){d(i,n,r,a,c,"throw",t)}a(void 0)}))},function(){return i.apply(this,arguments)})},{key:"render",value:function(){return'   \n        <div class="container">   \n            <table class="table">\n                <thead class="thead-dark">\n                    <tr>\n                        <th scope="col">Code</th>\n                        <th scope="col">Name</th>\n                        <th scope="col">Description</th>\n                        <th scope="col">Price, $</th>\n                        <th scope="col">Available</th>\n                        <th scope="col">Image</th>\n                        <th scope="col">Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th scope="row">1</th>\n                        <td>Desk</td>\n                        <td>Wooden Desk</td>\n                        <td>900</td>\n                        <td>true</td>\n                        <td><a href="https://cdn20.pamono.com/p/g/4/8/480322_7tuep2o7lr/vintage-wooden-desk-1930s-1.jpg">Click to view</a></td>\n                        <td>Edit, Delete</td>\n                    </tr>\n                    <tr>\n                        <th scope="row">2</th>\n                        <td>Desk</td>\n                        <td>Wooden Desk</td>\n                        <td>900</td>\n                        <td>true</td>\n                        <td><a href="https://cdn20.pamono.com/p/g/4/8/480322_7tuep2o7lr/vintage-wooden-desk-1930s-1.jpg">Click to view</a></td>\n                        <td>Edit, Delete</td>\n                    </tr>\n                   \n                </tbody>\n          </table></div>\n        '}}])&&h(e.prototype,n),r&&h(e,r),t}();function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"render",value:function(){return"\n            <div>404</div>\n        "}}])&&v(e.prototype,n),r&&v(e,r),t}();n(1);function y(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}var g={"/productstable":new p,"/addproduct":new o,"/productslist":new a,"**":new m},b=function(){var t,e=(t=regeneratorRuntime.mark((function t(){var e,n,r,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=location.hash.slice(1).toLowerCase(),n=document.querySelector("app-container"),o=(r=g[e]||g["**"]).beforeRender,i=r.render,r.afterRender,t.t0=o,!t.t0){t.next=8;break}return t.next=8,o();case 8:n.innerHTML=i();case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,c,"next",t)}function c(t){y(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();window.addEventListener("load",b),window.addEventListener("hashchange",b)},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r=s;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?h:f,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s="suspendedStart",f="suspendedYield",d="executing",h="completed",p={};function v(){}function m(){}function y(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==n&&r.call(w,i)&&(g=w);var x=y.prototype=v.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function P(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,a){var c=l(t[n],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return m.prototype=x.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(P.prototype),P.prototype[a]=function(){return this},t.AsyncIterator=P,t.async=function(e,n,r,o){var i=new P(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}]);