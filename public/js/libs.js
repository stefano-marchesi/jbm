/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return M(new(M(function(){},{prototype:a})),b)}function e(a){return L(arguments,function(b){b!==a&&L(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var c=[];return b.forEach(a,function(a,b){c.push(b)}),c}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return M({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return L(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function m(a,b){var c=K(a),d=c?[]:{};return L(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function n(a,b){var c=K(a)?[]:{};return L(a,function(a,d){c[d]=b(a,d)}),c}function o(a,b){var d=1,f=2,i={},j=[],k=i,m=M(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,I(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);L(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return J(a)&&a.then&&a.$$promises}if(!J(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return L(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!G(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;L(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!J(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=m;var n=a.defer(),r=n.promise,s=r.$$promises={},t=M({},d),u=1+q.length/3,v=!1;if(G(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,l(f.$$inheritedValues,p)),M(s,f.$$promises),f.$$values?(v=e(t,l(f.$$values,p)),r.$$inheritedValues=l(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=l(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function p(a,b,c){this.fromConfig=function(a,b,c){return G(a.template)?this.fromString(a.template,b):G(a.templateUrl)?this.fromUrl(a.templateUrl,b):G(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return H(a)?a(b):a},this.fromUrl=function(c,d){return H(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function q(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new O.Param(b,c,d,e),p[b]}function g(a,b,c){var d=["",""],e=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return e;switch(c){case!1:d=["(",")"];break;case!0:d=["?(",")?"];break;default:d=["("+c+"|",")?"]}return e+d[0]+b+d[1]}function h(c,e){var f,g,h,i,j;return f=c[2]||c[3],j=b.params[f],h=a.substring(m,c.index),g=e?c[4]:c[4]||("*"==c[1]?".*":null),i=O.type(g||"string")||d(O.type("string"),{pattern:new RegExp(g)}),{id:f,regexp:g,segment:h,type:i,cfg:j}}b=M({params:{}},J(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new O.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function r(a){M(this,a)}function s(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(a){return this.pattern.test(a)}function i(){return{strict:t,caseInsensitive:p}}function j(a){return H(a)||K(a)&&H(a[a.length-1])}function k(){for(;x.length;){var a=x.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name],o.invoke(a.def))}}function l(a){M(this,a||{})}O=this;var o,p=!1,t=!0,u=!1,v={},w=!0,x=[],y={string:{encode:a,decode:e,is:f,pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return G(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,is:b.identity,equals:b.equals,pattern:/.*/}};s.$$getDefaultValue=function(a){if(!j(a.value))return a.value;if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value)},this.caseInsensitive=function(a){return G(a)&&(p=a),p},this.strictMode=function(a){return G(a)&&(t=a),t},this.defaultSquashPolicy=function(a){if(!G(a))return u;if(a!==!0&&a!==!1&&!I(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return u=a,a},this.compile=function(a,b){return new q(a,M(i(),b))},this.isMatcher=function(a){if(!J(a))return!1;var b=!0;return L(q.prototype,function(c,d){H(c)&&(b=b&&G(a[d])&&H(a[d]))}),b},this.type=function(a,b,c){if(!G(b))return v[a];if(v.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return v[a]=new r(M({name:a},b)),c&&(x.push({name:a,def:c}),w||k()),this},L(y,function(a,b){v[b]=new r(M({name:b},a))}),v=d(v,{}),this.$get=["$injector",function(a){return o=a,w=!1,k(),L(y,function(a,b){v[b]||(v[b]=new r(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=J(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=j(a.value)?a.value:function(){return a.value},a}function i(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof r?b.type:new r(b.type):"config"===d?v.any:v.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return M(b,c,d).array}function l(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!G(c)||null==c)return u;if(c===!0||I(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=K(a.replace)?a.replace:[],I(e)&&f.push({from:e,to:c}),g=n(f,function(a){return a.from}),m(i,function(a){return-1===h(g,a.from)}).concat(f)}function q(){if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn)}function s(a){function b(a){return function(b){return b.from===a}}function c(a){var c=n(m(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),G(a)?w.type.decode(a):q()}function t(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=i(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=l(d,y),A=p(d,x,y,z);M(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:s,dynamic:c,config:d,toString:t})},l.prototype={$$new:function(){return d(this,M(new l,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(l.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),L(b,function(b){L(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return L(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return L(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var b,c,d,e=!0,f=this;return L(this.$$keys(),function(g){d=f[g],c=a[g],b=!c&&d.isOptional,e=e&&(b||!!d.type.is(c))}),e},$$parent:c},this.ParamSet=l}function t(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return G(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(I(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){var e=o&&d.url()===o;if(o=c,e)return!0;var g,h=j.length;for(g=0;h>g;g++)if(b(j[g]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){d.url(a.format(b||{})),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!H(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(I(a)){var b=a;a=function(){return b}}else if(!H(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=I(b);if(I(a)&&(a=d.compile(a)),!h&&!H(b)&&!K(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),M(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:I(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),M(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function u(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){if(!a)return c;var d=I(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=l(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var m=y[e];return!m||!d&&(d||m!==a&&m.self!==a)?c:m}function m(a,b){z[a]||(z[a]=[]),z[a].push(b)}function o(a){for(var b=z[a]||[];b.length;)p(b.shift())}function p(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!I(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(y.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):I(b.parent)?b.parent:J(b.parent)&&I(b.parent.name)?b.parent.name:"";if(e&&!y[e])return m(e,b.self);for(var f in B)H(B[f])&&(b[f]=B[f](b,B.$delegates[f]));return y[c]=b,!b[A]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){x.$current.navigable==b&&j(a,c)||x.transitionTo(b,a,{inherit:!0,location:!1})}]),o(c),b}function q(a){return a.indexOf("*")>-1}function r(a){var b=a.split("."),c=x.$current.name.split(".");if("**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function s(a,b){return I(a)&&!G(b)?B[a]:H(b)&&I(a)?(B[a]&&!B.$delegates[a]&&(B.$delegates[a]=B[a]),B[a]=b,this):this}function t(a,b){return J(a)?b=a:b.name=a,p(b),this}function u(a,e,f,h,m,o,p){function s(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),B;if(!g.retry)return null;if(f.$retry)return p.update(),C;var h=x.transition=e.when(g.retry);return h.then(function(){return h!==x.transition?u:(b.options.$retry=!0,x.transitionTo(b.to,b.toParams,b.options))},function(){return B}),p.update(),h}function t(a,c,d,g,i,j){var l=d?c:k(a.params.$$keys(),c),n={$stateParams:l};i.resolve=m.resolve(a.resolve,n,i.resolve,a);var o=[i.resolve.then(function(a){i.globals=a})];return g&&o.push(g),L(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return f.load(d,{view:c,locals:n,params:l,notify:j.notify})||""}],o.push(m.resolve(e,n,i.resolve,a).then(function(f){if(H(c.controllerProvider)||K(c.controllerProvider)){var g=b.extend({},e,n);f.$$controller=h.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,i[d]=f}))}),e.all(o).then(function(){return i})}var u=e.reject(new Error("transition superseded")),z=e.reject(new Error("transition prevented")),B=e.reject(new Error("transition aborted")),C=e.reject(new Error("transition failed"));return w.locals={resolve:null,globals:{$stateParams:{}}},x={params:{},current:w.self,$current:w,transition:null},x.reload=function(){return x.transitionTo(x.current,o,{reload:!0,inherit:!1,notify:!0})},x.go=function(a,b,c){return x.transitionTo(a,b,M({inherit:!0,relative:x.$current},c))},x.transitionTo=function(b,c,f){c=c||{},f=M({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=x.$current,m=x.params,n=j.path,q=l(b,f.relative);if(!G(q)){var r={to:b,toParams:c,options:f},y=s(r,j.self,m,f);if(y)return y;if(b=r.to,c=r.toParams,f=r.options,q=l(b,f.relative),!G(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[A])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(o,c||{},x.$current,q)),!q.params.$$validates(c))return C;c=q.params.$$values(c),b=q;var B=b.path,D=0,E=B[D],F=w.locals,H=[];if(!f.reload)for(;E&&E===n[D]&&E.ownParams.$$equals(c,m);)F=H[D]=E.locals,D++,E=B[D];if(v(b,j,F,f))return b.self.reloadOnSearch!==!1&&p.update(),x.transition=null,e.when(x.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,m).defaultPrevented)return p.update(),z;for(var I=e.when(F),J=D;J<B.length;J++,E=B[J])F=H[J]=d(F),I=t(E,c,E===b,I,F,f);var K=x.transition=I.then(function(){var d,e,g;if(x.transition!==K)return u;for(d=n.length-1;d>=D;d--)g=n[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<B.length;d++)e=B[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return x.transition!==K?u:(x.$current=b,x.current=b.self,x.params=c,N(x.params,o),x.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,m),p.update(!0),x.current)},function(d){return x.transition!==K?u:(x.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,m,d),g.defaultPrevented||p.update(),e.reject(d))});return K},x.is=function(a,b,d){d=M({relative:x.$current},d||{});var e=l(a,d.relative);return G(e)?x.$current!==e?!1:b?j(e.params.$$values(b),o):!0:c},x.includes=function(a,b,d){if(d=M({relative:x.$current},d||{}),I(a)&&q(a)){if(!r(a))return!1;a=x.$current.name}var e=l(a,d.relative);return G(e)?G(x.$current.includes[e.name])?b?j(e.params.$$values(b),o,g(b)):!0:!1:c},x.href=function(a,b,d){d=M({lossy:!0,inherit:!0,absolute:!1,relative:x.$current},d||{});var e=l(a,d.relative);if(!G(e))return null;d.inherit&&(b=i(o,b||{},x.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys(),b||{}),{absolute:d.absolute}):null},x.get=function(a,b){if(0===arguments.length)return n(g(y),function(a){return y[a].self});var c=l(a,b||x.$current);return c&&c.self?c.self:null},x}function v(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var w,x,y={},z={},A="abstract",B={parent:function(a){if(G(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):w},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=M({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(I(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||w).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new O.ParamSet;return L(a.params||{},function(a,c){b[c]||(b[c]=new O.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?M(a.parent.params.$$new(),a.ownParams):new O.ParamSet},views:function(a){var b={};return L(G(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?M({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};w=p({name:"",url:"^",views:null,"abstract":!0}),w.navigable=null,this.decorator=s,this.state=t,this.$get=u,u.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function v(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=M(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function w(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function x(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=z(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function y(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=z(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function z(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function A(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function B(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function C(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=A(g.uiSref,a.current.name),j=null,k=B(f)||a.$current,l=null,m="A"===f.prop("tagName"),n="FORM"===f[0].nodeName,o=n?"action":"href",p=!0,q={relative:k,inherit:!0},r=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in r&&(q[a]=r[a])});var s=function(c){if(c&&(j=b.copy(c)),p){l=a.href(i.state,j,q);var d=h[1]||h[0];return d&&d.$$setStateInfo(i.state,j),null===l?(p=!1,!1):void g.$set(o,l)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&s(a)},!0),j=b.copy(e.$eval(i.paramExpr))),s(),n||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,q)});b.preventDefault();var g=m&&!l?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function D(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(j):d.removeClass(j)}function g(){return"undefined"!=typeof e.uiSrefActiveEq?h&&a.is(h.name,i):h&&a.includes(h.name,i)}var h,i,j;j=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$setStateInfo=function(b,c){h=a.get(b,B(d)),i=c,f()},b.$on("$stateChangeSuccess",f)}]}}function E(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function F(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var G=b.isDefined,H=b.isFunction,I=b.isString,J=b.isObject,K=b.isArray,L=b.forEach,M=b.extend,N=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),o.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",o),p.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",p);var O;q.prototype.concat=function(a,b){var c={caseInsensitive:O.caseInsensitive(),strict:O.strictMode(),squash:O.defaultSquashPolicy()};return new q(this.sourcePath+a+this.sourceSearch,M(c,b),this)},q.prototype.toString=function(){return this.source},q.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/,"-")}var d=b(a).split(/-(?!\\)/),e=n(d,b);return n(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},q.prototype.parameters=function(a){return G(a)?this.params[a]||null:this.$$paramNames},q.prototype.validates=function(a){return this.params.$$validates(a)},q.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],o=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),o),q=p?m.squash:!1,r=m.type.encode(o);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=K(r)?n(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else I(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;K(r)||(r=[r]),r=n(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},r.prototype.is=function(){return!0},r.prototype.encode=function(a){return a},r.prototype.decode=function(a){return a},r.prototype.equals=function(a,b){return a==b},r.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},r.prototype.pattern=/.*/,r.prototype.toString=function(){return"{Type:"+this.name+"}"},r.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return K(a)?a:G(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=n(c,a);return b===!0?0===m(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",s),b.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),t.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",t),u.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",u),v.$inject=[],b.module("ui.router.state").provider("$view",v),b.module("ui.router.state").provider("$uiViewScroll",w),x.$inject=["$state","$injector","$uiViewScroll","$interpolate"],y.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",x),b.module("ui.router.state").directive("uiView",y),C.$inject=["$state","$timeout"],D.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",C).directive("uiSrefActive",D).directive("uiSrefActiveEq",D),E.$inject=["$state"],F.$inject=["$state"],b.module("ui.router.state").filter("isState",E).filter("includedByState",F)}(window,window.angular);
/**
 * @license AngularJS v1.3.0
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngAria
 * @description
 *
 * The `ngAria` module provides support for adding <abbr title="Accessible Rich Internet Applications">ARIA</abbr>
 * attributes that convey state or semantic information about the application in order to allow assistive technologies
 * to convey appropriate information to persons with disabilities.
 *
 * <div doc-module-components="ngAria"></div>
 *
 * # Usage
 * To enable the addition of the ARIA tags, just require the module into your application and the tags will
 * hook into your ng-show/ng-hide, input, textarea, button, select and ng-required directives and adds the
 * appropriate ARIA attributes.
 *
 * Currently, the following ARIA attributes are implemented:
 *
 * + aria-hidden
 * + aria-checked
 * + aria-disabled
 * + aria-required
 * + aria-invalid
 * + aria-multiline
 * + aria-valuenow
 * + aria-valuemin
 * + aria-valuemax
 * + tabindex
 *
 * You can disable individual ARIA attributes by using the {@link ngAria.$ariaProvider#config config} method.
 */

 /* global -ngAriaModule */
var ngAriaModule = angular.module('ngAria', ['ng']).
                        provider('$aria', $AriaProvider);

/**
 * @ngdoc provider
 * @name $ariaProvider
 *
 * @description
 *
 * Used for configuring ARIA attributes.
 *
 * ## Dependencies
 * Requires the {@link ngAria} module to be installed.
 */
function $AriaProvider() {
  var config = {
    ariaHidden : true,
    ariaChecked: true,
    ariaDisabled: true,
    ariaRequired: true,
    ariaInvalid: true,
    ariaMultiline: true,
    ariaValue: true,
    tabindex: true
  };

  /**
   * @ngdoc method
   * @name $ariaProvider#config
   *
   * @param {object} config object to enable/disable specific ARIA attributes
   *
   *  - **ariaHidden** – `{boolean}` – Enables/disables aria-hidden tags
   *  - **ariaChecked** – `{boolean}` – Enables/disables aria-checked tags
   *  - **ariaDisabled** – `{boolean}` – Enables/disables aria-disabled tags
   *  - **ariaRequired** – `{boolean}` – Enables/disables aria-required tags
   *  - **ariaInvalid** – `{boolean}` – Enables/disables aria-invalid tags
   *  - **ariaMultiline** – `{boolean}` – Enables/disables aria-multiline tags
   *  - **ariaValue** – `{boolean}` – Enables/disables aria-valuemin, aria-valuemax and aria-valuenow tags
   *  - **tabindex** – `{boolean}` – Enables/disables tabindex tags
   *
   * @description
   * Enables/disables various ARIA attributes
   */
  this.config = function(newConfig) {
    config = angular.extend(config, newConfig);
  };

  function camelCase(input) {
    return input.replace(/-./g, function(letter, pos) {
      return letter[1].toUpperCase();
    });
  }


  function watchExpr(attrName, ariaAttr, negate) {
    var ariaCamelName = camelCase(ariaAttr);
    return function(scope, elem, attr) {
      if (config[ariaCamelName] && !attr[ariaCamelName]) {
        scope.$watch(attr[attrName], function(boolVal) {
          if (negate) {
            boolVal = !boolVal;
          }
          elem.attr(ariaAttr, boolVal);
        });
      }
    };
  }

  /**
   * @ngdoc service
   * @name $aria
   *
   * @description
   *
   * Contains helper methods for applying ARIA attributes to HTML
   *
   * ## Dependencies
   * Requires the {@link ngAria} module to be installed.
   */
  this.$get = function() {
    return {
      config: function (key) {
        return config[camelCase(key)];
      },
      $$watchExpr: watchExpr
    };
  };
}

var ngAriaTabindex = ['$aria', function($aria) {
  return function(scope, elem, attr) {
    if ($aria.config('tabindex') && !elem.attr('tabindex')) {
      elem.attr('tabindex', 0);
    }
  };
}];

ngAriaModule.directive('ngShow', ['$aria', function($aria) {
  return $aria.$$watchExpr('ngShow', 'aria-hidden', true);
}])
.directive('ngHide', ['$aria', function($aria) {
  return $aria.$$watchExpr('ngHide', 'aria-hidden', false);
}])
.directive('ngModel', ['$aria', function($aria) {

  function shouldAttachAttr (attr, elem) {
    return $aria.config(attr) && !elem.attr(attr);
  }

  function getShape (attr, elem) {
    var type = attr.type,
        role = attr.role;

    return ((type || role) === 'checkbox' || role === 'menuitemcheckbox') ? 'checkbox' :
           ((type || role) === 'radio'    || role === 'menuitemradio') ? 'radio' :
           (type === 'range'              || role === 'progressbar' || role === 'slider') ? 'range' :
           (type || role) === 'textbox'   || elem[0].nodeName === 'TEXTAREA' ? 'multiline' : '';
  }

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, elem, attr, ngModel) {
      var shape = getShape(attr, elem);
      var needsTabIndex = shouldAttachAttr('tabindex', elem);

      function ngAriaWatchModelValue() {
        return ngModel.$modelValue;
      }

      function getRadioReaction() {
        if (needsTabIndex) {
          needsTabIndex = false;
          return function ngAriaRadioReaction(newVal) {
            var boolVal = newVal === attr.value;
            elem.attr('aria-checked', boolVal);
            elem.attr('tabindex', 0 - !boolVal);
          };
        } else {
          return function ngAriaRadioReaction(newVal) {
            elem.attr('aria-checked', newVal === attr.value);
          };
        }
      }

      function ngAriaCheckboxReaction(newVal) {
        elem.attr('aria-checked', !!newVal);
      }

      switch (shape) {
        case 'radio':
        case 'checkbox':
          if (shouldAttachAttr('aria-checked', elem)) {
            scope.$watch(ngAriaWatchModelValue, shape === 'radio' ?
                getRadioReaction() : ngAriaCheckboxReaction);
          }
          break;
        case 'range':
          if ($aria.config('ariaValue')) {
            if (attr.min && !elem.attr('aria-valuemin')) {
              elem.attr('aria-valuemin', attr.min);
            }
            if (attr.max && !elem.attr('aria-valuemax')) {
              elem.attr('aria-valuemax', attr.max);
            }
            if (!elem.attr('aria-valuenow')) {
              scope.$watch(ngAriaWatchModelValue, function ngAriaValueNowReaction(newVal) {
                elem.attr('aria-valuenow', newVal);
              });
            }
          }
          break;
        case 'multiline':
          if (shouldAttachAttr('aria-multiline', elem)) {
            elem.attr('aria-multiline', true);
          }
          break;
      }

      if (needsTabIndex) {
        elem.attr('tabindex', 0);
      }

      if (ngModel.$validators.required && shouldAttachAttr('aria-required', elem)) {
        scope.$watch(function ngAriaRequiredWatch() {
          return ngModel.$error.required;
        }, function ngAriaRequiredReaction(newVal) {
          elem.attr('aria-required', !!newVal);
        });
      }

      if (shouldAttachAttr('aria-invalid', elem)) {
        scope.$watch(function ngAriaInvalidWatch() {
          return ngModel.$invalid;
        }, function ngAriaInvalidReaction(newVal) {
          elem.attr('aria-invalid', !!newVal);
        });
      }
    }
  };
}])
.directive('ngDisabled', ['$aria', function($aria) {
  return $aria.$$watchExpr('ngDisabled', 'aria-disabled');
}])
.directive('ngClick', ngAriaTabindex)
.directive('ngDblclick', ngAriaTabindex);


})(window, window.angular);

/**
 * @license AngularJS v1.3.0
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/* jshint maxlen: false */

/**
 * @ngdoc module
 * @name ngAnimate
 * @description
 *
 * The `ngAnimate` module provides support for JavaScript, CSS3 transition and CSS3 keyframe animation hooks within existing core and custom directives.
 *
 * <div doc-module-components="ngAnimate"></div>
 *
 * # Usage
 *
 * To see animations in action, all that is required is to define the appropriate CSS classes
 * or to register a JavaScript animation via the myModule.animation() function. The directives that support animation automatically are:
 * `ngRepeat`, `ngInclude`, `ngIf`, `ngSwitch`, `ngShow`, `ngHide`, `ngView` and `ngClass`. Custom directives can take advantage of animation
 * by using the `$animate` service.
 *
 * Below is a more detailed breakdown of the supported animation events provided by pre-existing ng directives:
 *
 * | Directive                                                                                                | Supported Animations                                                     |
 * |----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
 * | {@link ng.directive:ngRepeat#animations ngRepeat}                                                        | enter, leave and move                                                    |
 * | {@link ngRoute.directive:ngView#animations ngView}                                                       | enter and leave                                                          |
 * | {@link ng.directive:ngInclude#animations ngInclude}                                                      | enter and leave                                                          |
 * | {@link ng.directive:ngSwitch#animations ngSwitch}                                                        | enter and leave                                                          |
 * | {@link ng.directive:ngIf#animations ngIf}                                                                | enter and leave                                                          |
 * | {@link ng.directive:ngClass#animations ngClass}                                                          | add and remove (the CSS class(es) present)                               |
 * | {@link ng.directive:ngShow#animations ngShow} & {@link ng.directive:ngHide#animations ngHide}            | add and remove (the ng-hide class value)                                 |
 * | {@link ng.directive:form#animation-hooks form} & {@link ng.directive:ngModel#animation-hooks ngModel}    | add and remove (dirty, pristine, valid, invalid & all other validations) |
 * | {@link module:ngMessages#animations ngMessages}                                                          | add and remove (ng-active & ng-inactive)                                 |
 * | {@link module:ngMessages#animations ngMessage}                                                           | enter and leave                                                          |
 *
 * You can find out more information about animations upon visiting each directive page.
 *
 * Below is an example of how to apply animations to a directive that supports animation hooks:
 *
 * ```html
 * <style type="text/css">
 * .slide.ng-enter, .slide.ng-leave {
 *   -webkit-transition:0.5s linear all;
 *   transition:0.5s linear all;
 * }
 *
 * .slide.ng-enter { }        /&#42; starting animations for enter &#42;/
 * .slide.ng-enter.ng-enter-active { } /&#42; terminal animations for enter &#42;/
 * .slide.ng-leave { }        /&#42; starting animations for leave &#42;/
 * .slide.ng-leave.ng-leave-active { } /&#42; terminal animations for leave &#42;/
 * </style>
 *
 * <!--
 * the animate service will automatically add .ng-enter and .ng-leave to the element
 * to trigger the CSS transition/animations
 * -->
 * <ANY class="slide" ng-include="..."></ANY>
 * ```
 *
 * Keep in mind that, by default, if an animation is running, any child elements cannot be animated
 * until the parent element's animation has completed. This blocking feature can be overridden by
 * placing the `ng-animate-children` attribute on a parent container tag.
 *
 * ```html
 * <div class="slide-animation" ng-if="on" ng-animate-children>
 *   <div class="fade-animation" ng-if="on">
 *     <div class="explode-animation" ng-if="on">
 *        ...
 *     </div>
 *   </div>
 * </div>
 * ```
 *
 * When the `on` expression value changes and an animation is triggered then each of the elements within
 * will all animate without the block being applied to child elements.
 *
 * ## Are animations run when the application starts?
 * No they are not. When an application is bootstrapped Angular will disable animations from running to avoid
 * a frenzy of animations from being triggered as soon as the browser has rendered the screen. For this to work,
 * Angular will wait for two digest cycles until enabling animations. From there on, any animation-triggering
 * layout changes in the application will trigger animations as normal.
 *
 * In addition, upon bootstrap, if the routing system or any directives or load remote data (via $http) then Angular
 * will automatically extend the wait time to enable animations once **all** of the outbound HTTP requests
 * are complete.
 *
 * ## CSS-defined Animations
 * The animate service will automatically apply two CSS classes to the animated element and these two CSS classes
 * are designed to contain the start and end CSS styling. Both CSS transitions and keyframe animations are supported
 * and can be used to play along with this naming structure.
 *
 * The following code below demonstrates how to perform animations using **CSS transitions** with Angular:
 *
 * ```html
 * <style type="text/css">
 * /&#42;
 *  The animate class is apart of the element and the ng-enter class
 *  is attached to the element once the enter animation event is triggered
 * &#42;/
 * .reveal-animation.ng-enter {
 *  -webkit-transition: 1s linear all; /&#42; Safari/Chrome &#42;/
 *  transition: 1s linear all; /&#42; All other modern browsers and IE10+ &#42;/
 *
 *  /&#42; The animation preparation code &#42;/
 *  opacity: 0;
 * }
 *
 * /&#42;
 *  Keep in mind that you want to combine both CSS
 *  classes together to avoid any CSS-specificity
 *  conflicts
 * &#42;/
 * .reveal-animation.ng-enter.ng-enter-active {
 *  /&#42; The animation code itself &#42;/
 *  opacity: 1;
 * }
 * </style>
 *
 * <div class="view-container">
 *   <div ng-view class="reveal-animation"></div>
 * </div>
 * ```
 *
 * The following code below demonstrates how to perform animations using **CSS animations** with Angular:
 *
 * ```html
 * <style type="text/css">
 * .reveal-animation.ng-enter {
 *   -webkit-animation: enter_sequence 1s linear; /&#42; Safari/Chrome &#42;/
 *   animation: enter_sequence 1s linear; /&#42; IE10+ and Future Browsers &#42;/
 * }
 * @-webkit-keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * @keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * </style>
 *
 * <div class="view-container">
 *   <div ng-view class="reveal-animation"></div>
 * </div>
 * ```
 *
 * Both CSS3 animations and transitions can be used together and the animate service will figure out the correct duration and delay timing.
 *
 * Upon DOM mutation, the event class is added first (something like `ng-enter`), then the browser prepares itself to add
 * the active class (in this case `ng-enter-active`) which then triggers the animation. The animation module will automatically
 * detect the CSS code to determine when the animation ends. Once the animation is over then both CSS classes will be
 * removed from the DOM. If a browser does not support CSS transitions or CSS animations then the animation will start and end
 * immediately resulting in a DOM element that is at its final state. This final state is when the DOM element
 * has no CSS transition/animation classes applied to it.
 *
 * ### Structural transition animations
 *
 * Structural transitions (such as enter, leave and move) will always apply a `0s none` transition
 * value to force the browser into rendering the styles defined in the setup (.ng-enter, .ng-leave
 * or .ng-move) class. This means that any active transition animations operating on the element
 * will be cut off to make way for the enter, leave or move animation.
 *
 * ### Class-based transition animations
 *
 * Class-based transitions refer to transition animations that are triggered when a CSS class is
 * added to or removed from the element (via `$animate.addClass`, `$animate.removeClass`,
 * `$animate.setClass`, or by directives such as `ngClass`, `ngModel` and `form`).
 * They are different when compared to structural animations since they **do not cancel existing
 * animations** nor do they **block successive transitions** from rendering on the same element.
 * This distinction allows for **multiple class-based transitions** to be performed on the same element.
 *
 * In addition to ngAnimate supporting the default (natural) functionality of class-based transition
 * animations, ngAnimate also decorates the element with starting and ending CSS classes to aid the
 * developer in further styling the element throughout the transition animation. Earlier versions
 * of ngAnimate may have caused natural CSS transitions to break and not render properly due to
 * $animate temporarily blocking transitions using `0s none` in order to allow the setup CSS class
 * (the `-add` or `-remove` class) to be applied without triggering an animation. However, as of
 * **version 1.3**, this workaround has been removed with ngAnimate and all non-ngAnimate CSS
 * class transitions are compatible with ngAnimate.
 *
 * There is, however, one special case when dealing with class-based transitions in ngAnimate.
 * When rendering class-based transitions that make use of the setup and active CSS classes
 * (e.g. `.fade-add` and `.fade-add-active` for when `.fade` is added) be sure to define
 * the transition value **on the active CSS class** and not the setup class.
 *
 * ```css
 * .fade-add {
 *   /&#42; remember to place a 0s transition here
 *      to ensure that the styles are applied instantly
 *      even if the element already has a transition style &#42;/
 *   transition:0s linear all;
 *
 *   /&#42; starting CSS styles &#42;/
 *   opacity:1;
 * }
 * .fade-add.fade-add-active {
 *   /&#42; this will be the length of the animation &#42;/
 *   transition:1s linear all;
 *   opacity:0;
 * }
 * ```
 *
 * The setup CSS class (in this case `.fade-add`) also has a transition style property, however, it
 * has a duration of zero. This may not be required, however, incase the browser is unable to render
 * the styling present in this CSS class instantly then it could be that the browser is attempting
 * to perform an unnecessary transition.
 *
 * This workaround, however, does not apply to  standard class-based transitions that are rendered
 * when a CSS class containing a transition is applied to an element:
 *
 * ```css
 * .fade {
 *   /&#42; this works as expected &#42;/
 *   transition:1s linear all;
 *   opacity:0;
 * }
 * ```
 *
 * Please keep this in mind when coding the CSS markup that will be used within class-based transitions.
 * Also, try not to mix the two class-based animation flavors together since the CSS code may become
 * overly complex.
 *
 * ### CSS Staggering Animations
 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
 * curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be
 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
 *
 * ```css
 * .my-animation.ng-enter {
 *   /&#42; standard transition code &#42;/
 *   -webkit-transition: 1s linear all;
 *   transition: 1s linear all;
 *   opacity:0;
 * }
 * .my-animation.ng-enter-stagger {
 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
 *   -webkit-transition-delay: 0.1s;
 *   transition-delay: 0.1s;
 *
 *   /&#42; in case the stagger doesn't work then these two values
 *    must be set to 0 to avoid an accidental CSS inheritance &#42;/
 *   -webkit-transition-duration: 0s;
 *   transition-duration: 0s;
 * }
 * .my-animation.ng-enter.ng-enter-active {
 *   /&#42; standard transition styles &#42;/
 *   opacity:1;
 * }
 * ```
 *
 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
 * will also be reset if more than 10ms has passed after the last animation has been fired.
 *
 * The following code will issue the **ng-leave-stagger** event on the element provided:
 *
 * ```js
 * var kids = parent.children();
 *
 * $animate.leave(kids[0]); //stagger index=0
 * $animate.leave(kids[1]); //stagger index=1
 * $animate.leave(kids[2]); //stagger index=2
 * $animate.leave(kids[3]); //stagger index=3
 * $animate.leave(kids[4]); //stagger index=4
 *
 * $timeout(function() {
 *   //stagger has reset itself
 *   $animate.leave(kids[5]); //stagger index=0
 *   $animate.leave(kids[6]); //stagger index=1
 * }, 100, false);
 * ```
 *
 * Stagger animations are currently only supported within CSS-defined animations.
 *
 * ## JavaScript-defined Animations
 * In the event that you do not want to use CSS3 transitions or CSS3 animations or if you wish to offer animations on browsers that do not
 * yet support CSS transitions/animations, then you can make use of JavaScript animations defined inside of your AngularJS module.
 *
 * ```js
 * //!annotate="YourApp" Your AngularJS Module|Replace this or ngModule with the module that you used to define your application.
 * var ngModule = angular.module('YourApp', ['ngAnimate']);
 * ngModule.animation('.my-crazy-animation', function() {
 *   return {
 *     enter: function(element, done) {
 *       //run the animation here and call done when the animation is complete
 *       return function(cancelled) {
 *         //this (optional) function will be called when the animation
 *         //completes or when the animation is cancelled (the cancelled
 *         //flag will be set to true if cancelled).
 *       };
 *     },
 *     leave: function(element, done) { },
 *     move: function(element, done) { },
 *
 *     //animation that can be triggered before the class is added
 *     beforeAddClass: function(element, className, done) { },
 *
 *     //animation that can be triggered after the class is added
 *     addClass: function(element, className, done) { },
 *
 *     //animation that can be triggered before the class is removed
 *     beforeRemoveClass: function(element, className, done) { },
 *
 *     //animation that can be triggered after the class is removed
 *     removeClass: function(element, className, done) { }
 *   };
 * });
 * ```
 *
 * JavaScript-defined animations are created with a CSS-like class selector and a collection of events which are set to run
 * a javascript callback function. When an animation is triggered, $animate will look for a matching animation which fits
 * the element's CSS class attribute value and then run the matching animation event function (if found).
 * In other words, if the CSS classes present on the animated element match any of the JavaScript animations then the callback function will
 * be executed. It should be also noted that only simple, single class selectors are allowed (compound class selectors are not supported).
 *
 * Within a JavaScript animation, an object containing various event callback animation functions is expected to be returned.
 * As explained above, these callbacks are triggered based on the animation event. Therefore if an enter animation is run,
 * and the JavaScript animation is found, then the enter callback will handle that animation (in addition to the CSS keyframe animation
 * or transition code that is defined via a stylesheet).
 *
 *
 * ### Applying Directive-specific Styles to an Animation
 * In some cases a directive or service may want to provide `$animate` with extra details that the animation will
 * include into its animation. Let's say for example we wanted to render an animation that animates an element
 * towards the mouse coordinates as to where the user clicked last. By collecting the X/Y coordinates of the click
 * (via the event parameter) we can set the `top` and `left` styles into an object and pass that into our function
 * call to `$animate.addClass`.
 *
 * ```js
 * canvas.on('click', function(e) {
 *   $animate.addClass(element, 'on', {
 *     to: {
 *       left : e.client.x + 'px',
 *       top : e.client.y + 'px'
 *     }
 *   }):
 * });
 * ```
 *
 * Now when the animation runs, and a transition or keyframe animation is picked up, then the animation itself will
 * also include and transition the styling of the `left` and `top` properties into its running animation. If we want
 * to provide some starting animation values then we can do so by placing the starting animations styles into an object
 * called `from` in the same object as the `to` animations.
 *
 * ```js
 * canvas.on('click', function(e) {
 *   $animate.addClass(element, 'on', {
 *     from: {
 *        position: 'absolute',
 *        left: '0px',
 *        top: '0px'
 *     },
 *     to: {
 *       left : e.client.x + 'px',
 *       top : e.client.y + 'px'
 *     }
 *   }):
 * });
 * ```
 *
 * Once the animation is complete or cancelled then the union of both the before and after styles are applied to the
 * element. If `ngAnimate` is not present then the styles will be applied immediately.
 *
 */

angular.module('ngAnimate', ['ng'])

  /**
   * @ngdoc provider
   * @name $animateProvider
   * @description
   *
   * The `$animateProvider` allows developers to register JavaScript animation event handlers directly inside of a module.
   * When an animation is triggered, the $animate service will query the $animate service to find any animations that match
   * the provided name value.
   *
   * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
   *
   * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
   *
   */
  .directive('ngAnimateChildren', function() {
    var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
    return function(scope, element, attrs) {
      var val = attrs.ngAnimateChildren;
      if (angular.isString(val) && val.length === 0) { //empty attribute
        element.data(NG_ANIMATE_CHILDREN, true);
      } else {
        scope.$watch(val, function(value) {
          element.data(NG_ANIMATE_CHILDREN, !!value);
        });
      }
    };
  })

  //this private service is only used within CSS-enabled animations
  //IE8 + IE9 do not support rAF natively, but that is fine since they
  //also don't support transitions and keyframes which means that the code
  //below will never be used by the two browsers.
  .factory('$$animateReflow', ['$$rAF', '$document', function($$rAF, $document) {
    var bod = $document[0].body;
    return function(fn) {
      //the returned function acts as the cancellation function
      return $$rAF(function() {
        //the line below will force the browser to perform a repaint
        //so that all the animated elements within the animation frame
        //will be properly updated and drawn on screen. This is
        //required to perform multi-class CSS based animations with
        //Firefox. DO NOT REMOVE THIS LINE.
        var a = bod.offsetWidth + 1;
        fn();
      });
    };
  }])

  .config(['$provide', '$animateProvider', function($provide, $animateProvider) {
    var noop = angular.noop;
    var forEach = angular.forEach;
    var selectors = $animateProvider.$$selectors;
    var isArray = angular.isArray;
    var isString = angular.isString;
    var isObject = angular.isObject;

    var ELEMENT_NODE = 1;
    var NG_ANIMATE_STATE = '$$ngAnimateState';
    var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
    var NG_ANIMATE_CLASS_NAME = 'ng-animate';
    var rootAnimateState = {running: true};

    function extractElementNode(element) {
      for(var i = 0; i < element.length; i++) {
        var elm = element[i];
        if (elm.nodeType == ELEMENT_NODE) {
          return elm;
        }
      }
    }

    function prepareElement(element) {
      return element && angular.element(element);
    }

    function stripCommentsFromElement(element) {
      return angular.element(extractElementNode(element));
    }

    function isMatchingElement(elm1, elm2) {
      return extractElementNode(elm1) == extractElementNode(elm2);
    }

    $provide.decorator('$animate',
        ['$delegate', '$$q', '$injector', '$sniffer', '$rootElement', '$$asyncCallback', '$rootScope', '$document', '$templateRequest',
 function($delegate,   $$q,   $injector,   $sniffer,   $rootElement,   $$asyncCallback,   $rootScope,   $document,   $templateRequest) {

      $rootElement.data(NG_ANIMATE_STATE, rootAnimateState);

      // Wait until all directive and route-related templates are downloaded and
      // compiled. The $templateRequest.totalPendingRequests variable keeps track of
      // all of the remote templates being currently downloaded. If there are no
      // templates currently downloading then the watcher will still fire anyway.
      var deregisterWatch = $rootScope.$watch(
        function() { return $templateRequest.totalPendingRequests; },
        function(val, oldVal) {
          if (val !== 0) return;
          deregisterWatch();

          // Now that all templates have been downloaded, $animate will wait until
          // the post digest queue is empty before enabling animations. By having two
          // calls to $postDigest calls we can ensure that the flag is enabled at the
          // very end of the post digest queue. Since all of the animations in $animate
          // use $postDigest, it's important that the code below executes at the end.
          // This basically means that the page is fully downloaded and compiled before
          // any animations are triggered.
          $rootScope.$$postDigest(function() {
            $rootScope.$$postDigest(function() {
              rootAnimateState.running = false;
            });
          });
        }
      );

      var globalAnimationCounter = 0;
      var classNameFilter = $animateProvider.classNameFilter();
      var isAnimatableClassName = !classNameFilter
              ? function() { return true; }
              : function(className) {
                return classNameFilter.test(className);
              };

      function classBasedAnimationsBlocked(element, setter) {
        var data = element.data(NG_ANIMATE_STATE) || {};
        if (setter) {
          data.running = true;
          data.structural = true;
          element.data(NG_ANIMATE_STATE, data);
        }
        return data.disabled || (data.running && data.structural);
      }

      function runAnimationPostDigest(fn) {
        var cancelFn, defer = $$q.defer();
        defer.promise.$$cancelFn = function() {
          cancelFn && cancelFn();
        };
        $rootScope.$$postDigest(function() {
          cancelFn = fn(function() {
            defer.resolve();
          });
        });
        return defer.promise;
      }

      function parseAnimateOptions(options) {
        // some plugin code may still be passing in the callback
        // function as the last param for the $animate methods so
        // it's best to only allow string or array values for now
        if (isObject(options)) {
          if (options.tempClasses && isString(options.tempClasses)) {
            options.tempClasses = options.tempClasses.split(/\s+/);
          }
          return options;
        }
      }

      function resolveElementClasses(element, cache, runningAnimations) {
        runningAnimations = runningAnimations || {};

        var lookup = {};
        forEach(runningAnimations, function(data, selector) {
          forEach(selector.split(' '), function(s) {
            lookup[s]=data;
          });
        });

        var hasClasses = Object.create(null);
        forEach((element.attr('class') || '').split(/\s+/), function(className) {
          hasClasses[className] = true;
        });

        var toAdd = [], toRemove = [];
        forEach(cache.classes, function(status, className) {
          var hasClass = hasClasses[className];
          var matchingAnimation = lookup[className] || {};

          // When addClass and removeClass is called then $animate will check to
          // see if addClass and removeClass cancel each other out. When there are
          // more calls to removeClass than addClass then the count falls below 0
          // and then the removeClass animation will be allowed. Otherwise if the
          // count is above 0 then that means an addClass animation will commence.
          // Once an animation is allowed then the code will also check to see if
          // there exists any on-going animation that is already adding or remvoing
          // the matching CSS class.
          if (status === false) {
            //does it have the class or will it have the class
            if (hasClass || matchingAnimation.event == 'addClass') {
              toRemove.push(className);
            }
          } else if (status === true) {
            //is the class missing or will it be removed?
            if (!hasClass || matchingAnimation.event == 'removeClass') {
              toAdd.push(className);
            }
          }
        });

        return (toAdd.length + toRemove.length) > 0 && [toAdd.join(' '), toRemove.join(' ')];
      }

      function lookup(name) {
        if (name) {
          var matches = [],
              flagMap = {},
              classes = name.substr(1).split('.');

          //the empty string value is the default animation
          //operation which performs CSS transition and keyframe
          //animations sniffing. This is always included for each
          //element animation procedure if the browser supports
          //transitions and/or keyframe animations. The default
          //animation is added to the top of the list to prevent
          //any previous animations from affecting the element styling
          //prior to the element being animated.
          if ($sniffer.transitions || $sniffer.animations) {
            matches.push($injector.get(selectors['']));
          }

          for(var i=0; i < classes.length; i++) {
            var klass = classes[i],
                selectorFactoryName = selectors[klass];
            if (selectorFactoryName && !flagMap[klass]) {
              matches.push($injector.get(selectorFactoryName));
              flagMap[klass] = true;
            }
          }
          return matches;
        }
      }

      function animationRunner(element, animationEvent, className, options) {
        //transcluded directives may sometimes fire an animation using only comment nodes
        //best to catch this early on to prevent any animation operations from occurring
        var node = element[0];
        if (!node) {
          return;
        }

        if (options) {
          options.to = options.to || {};
          options.from = options.from || {};
        }

        var classNameAdd;
        var classNameRemove;
        if (isArray(className)) {
          classNameAdd = className[0];
          classNameRemove = className[1];
          if (!classNameAdd) {
            className = classNameRemove;
            animationEvent = 'removeClass';
          } else if (!classNameRemove) {
            className = classNameAdd;
            animationEvent = 'addClass';
          } else {
            className = classNameAdd + ' ' + classNameRemove;
          }
        }

        var isSetClassOperation = animationEvent == 'setClass';
        var isClassBased = isSetClassOperation
                           || animationEvent == 'addClass'
                           || animationEvent == 'removeClass'
                           || animationEvent == 'animate';

        var currentClassName = element.attr('class');
        var classes = currentClassName + ' ' + className;
        if (!isAnimatableClassName(classes)) {
          return;
        }

        var beforeComplete = noop,
            beforeCancel = [],
            before = [],
            afterComplete = noop,
            afterCancel = [],
            after = [];

        var animationLookup = (' ' + classes).replace(/\s+/g,'.');
        forEach(lookup(animationLookup), function(animationFactory) {
          var created = registerAnimation(animationFactory, animationEvent);
          if (!created && isSetClassOperation) {
            registerAnimation(animationFactory, 'addClass');
            registerAnimation(animationFactory, 'removeClass');
          }
        });

        function registerAnimation(animationFactory, event) {
          var afterFn = animationFactory[event];
          var beforeFn = animationFactory['before' + event.charAt(0).toUpperCase() + event.substr(1)];
          if (afterFn || beforeFn) {
            if (event == 'leave') {
              beforeFn = afterFn;
              //when set as null then animation knows to skip this phase
              afterFn = null;
            }
            after.push({
              event : event, fn : afterFn
            });
            before.push({
              event : event, fn : beforeFn
            });
            return true;
          }
        }

        function run(fns, cancellations, allCompleteFn) {
          var animations = [];
          forEach(fns, function(animation) {
            animation.fn && animations.push(animation);
          });

          var count = 0;
          function afterAnimationComplete(index) {
            if (cancellations) {
              (cancellations[index] || noop)();
              if (++count < animations.length) return;
              cancellations = null;
            }
            allCompleteFn();
          }

          //The code below adds directly to the array in order to work with
          //both sync and async animations. Sync animations are when the done()
          //operation is called right away. DO NOT REFACTOR!
          forEach(animations, function(animation, index) {
            var progress = function() {
              afterAnimationComplete(index);
            };
            switch(animation.event) {
              case 'setClass':
                cancellations.push(animation.fn(element, classNameAdd, classNameRemove, progress, options));
                break;
              case 'animate':
                cancellations.push(animation.fn(element, className, options.from, options.to, progress));
                break;
              case 'addClass':
                cancellations.push(animation.fn(element, classNameAdd || className,     progress, options));
                break;
              case 'removeClass':
                cancellations.push(animation.fn(element, classNameRemove || className,  progress, options));
                break;
              default:
                cancellations.push(animation.fn(element, progress, options));
                break;
            }
          });

          if (cancellations && cancellations.length === 0) {
            allCompleteFn();
          }
        }

        return {
          node : node,
          event : animationEvent,
          className : className,
          isClassBased : isClassBased,
          isSetClassOperation : isSetClassOperation,
          applyStyles : function() {
            if (options) {
              element.css(angular.extend(options.from || {}, options.to || {}));
            }
          },
          before : function(allCompleteFn) {
            beforeComplete = allCompleteFn;
            run(before, beforeCancel, function() {
              beforeComplete = noop;
              allCompleteFn();
            });
          },
          after : function(allCompleteFn) {
            afterComplete = allCompleteFn;
            run(after, afterCancel, function() {
              afterComplete = noop;
              allCompleteFn();
            });
          },
          cancel : function() {
            if (beforeCancel) {
              forEach(beforeCancel, function(cancelFn) {
                (cancelFn || noop)(true);
              });
              beforeComplete(true);
            }
            if (afterCancel) {
              forEach(afterCancel, function(cancelFn) {
                (cancelFn || noop)(true);
              });
              afterComplete(true);
            }
          }
        };
      }

      /**
       * @ngdoc service
       * @name $animate
       * @kind object
       *
       * @description
       * The `$animate` service provides animation detection support while performing DOM operations (enter, leave and move) as well as during addClass and removeClass operations.
       * When any of these operations are run, the $animate service
       * will examine any JavaScript-defined animations (which are defined by using the $animateProvider provider object)
       * as well as any CSS-defined animations against the CSS classes present on the element once the DOM operation is run.
       *
       * The `$animate` service is used behind the scenes with pre-existing directives and animation with these directives
       * will work out of the box without any extra configuration.
       *
       * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
       *
       * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
       * ## Callback Promises
       * With AngularJS 1.3, each of the animation methods, on the `$animate` service, return a promise when called. The
       * promise itself is then resolved once the animation has completed itself, has been cancelled or has been
       * skipped due to animations being disabled. (Note that even if the animation is cancelled it will still
       * call the resolve function of the animation.)
       *
       * ```js
       * $animate.enter(element, container).then(function() {
       *   //...this is called once the animation is complete...
       * });
       * ```
       *
       * Also note that, due to the nature of the callback promise, if any Angular-specific code (like changing the scope,
       * location of the page, etc...) is executed within the callback promise then be sure to wrap the code using
       * `$scope.$apply(...)`;
       *
       * ```js
       * $animate.leave(element).then(function() {
       *   $scope.$apply(function() {
       *     $location.path('/new-page');
       *   });
       * });
       * ```
       *
       * An animation can also be cancelled by calling the `$animate.cancel(promise)` method with the provided
       * promise that was returned when the animation was started.
       *
       * ```js
       * var promise = $animate.addClass(element, 'super-long-animation').then(function() {
       *   //this will still be called even if cancelled
       * });
       *
       * element.on('click', function() {
       *   //tooo lazy to wait for the animation to end
       *   $animate.cancel(promise);
       * });
       * ```
       *
       * (Keep in mind that the promise cancellation is unique to `$animate` since promises in
       * general cannot be cancelled.)
       *
       */
      return {
        /**
         * @ngdoc method
         * @name $animate#animate
         * @kind function
         *
         * @description
         * Performs an inline animation on the element which applies the provided `to` and `from` CSS styles to the element.
         * If any detected CSS transition, keyframe or JavaScript matches the provided `className` value then the animation
         * will take on the provided styles. For example, if a transition animation is set for the given className then the
         * provided `from` and `to` styles will be applied alongside the given transition. If a JavaScript animation is
         * detected then the provided styles will be given in as function paramters.
         *
         * ```js
         * ngModule.animation('.my-inline-animation', function() {
         *   return {
         *     animate : function(element, className, from, to, done) {
         *       //styles
         *     }
         *   }
         * });
         * ```
         *
         * Below is a breakdown of each step that occurs during the `animate` animation:
         *
         * | Animation Step                                                                                                    | What the element class attribute looks like                |
         * |-------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
         * | 1. $animate.animate(...) is called                                                                                | class="my-animation"                                       |
         * | 2. $animate waits for the next digest to start the animation                                                      | class="my-animation ng-animate"                            |
         * | 3. $animate runs the JavaScript-defined animations detected on the element                                        | class="my-animation ng-animate"                            |
         * | 4. the className class value is added to the element                                                              | class="my-animation ng-animate className"                  |
         * | 5. $animate scans the element styles to get the CSS transition/animation duration and delay                       | class="my-animation ng-animate className"                  |
         * | 6. $animate blocks all CSS transitions on the element to ensure the .className class styling is applied right away| class="my-animation ng-animate className"                  |
         * | 7. $animate applies the provided collection of `from` CSS styles to the element                                   | class="my-animation ng-animate className"                  |
         * | 8. $animate waits for a single animation frame (this performs a reflow)                                           | class="my-animation ng-animate className"                  |
         * | 9. $animate removes the CSS transition block placed on the element                                                | class="my-animation ng-animate className"                  |
         * | 10. the className-active class is added (this triggers the CSS transition/animation)                              | class="my-animation ng-animate className className-active" |
         * | 11. $animate applies the collection of `to` CSS styles to the element which are then handled by the transition    | class="my-animation ng-animate className className-active" |
         * | 12. $animate waits for the animation to complete (via events and timeout)                                         | class="my-animation ng-animate className className-active" |
         * | 13. The animation ends and all generated CSS classes are removed from the element                                 | class="my-animation"                                       |
         * | 14. The returned promise is resolved.                                                                             | class="my-animation"                                       |
         *
         * @param {DOMElement} element the element that will be the focus of the enter animation
         * @param {object} from a collection of CSS styles that will be applied to the element at the start of the animation
         * @param {object} to a collection of CSS styles that the element will animate towards
         * @param {string=} className an optional CSS class that will be added to the element for the duration of the animation (the default class is `ng-inline-animate`)
         * @param {object=} options an optional collection of options that will be picked up by the CSS transition/animation
         * @return {Promise} the animation callback promise
        */
        animate : function(element, from, to, className, options) {
          className = className || 'ng-inline-animate';
          options = parseAnimateOptions(options) || {};
          options.from = to ? from : null;
          options.to   = to ? to : from;

          return runAnimationPostDigest(function(done) {
            return performAnimation('animate', className, stripCommentsFromElement(element), null, null, noop, options, done);
          });
        },

        /**
         * @ngdoc method
         * @name $animate#enter
         * @kind function
         *
         * @description
         * Appends the element to the parentElement element that resides in the document and then runs the enter animation. Once
         * the animation is started, the following CSS classes will be present on the element for the duration of the animation:
         *
         * Below is a breakdown of each step that occurs during enter animation:
         *
         * | Animation Step                                                                                                    | What the element class attribute looks like              |
         * |-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
         * | 1. $animate.enter(...) is called                                                                                  | class="my-animation"                                     |
         * | 2. element is inserted into the parentElement element or beside the afterElement element                          | class="my-animation"                                     |
         * | 3. $animate waits for the next digest to start the animation                                                      | class="my-animation ng-animate"                          |
         * | 4. $animate runs the JavaScript-defined animations detected on the element                                        | class="my-animation ng-animate"                          |
         * | 5. the .ng-enter class is added to the element                                                                    | class="my-animation ng-animate ng-enter"                 |
         * | 6. $animate scans the element styles to get the CSS transition/animation duration and delay                       | class="my-animation ng-animate ng-enter"                 |
         * | 7. $animate blocks all CSS transitions on the element to ensure the .ng-enter class styling is applied right away | class="my-animation ng-animate ng-enter"                 |
         * | 8. $animate waits for a single animation frame (this performs a reflow)                                           | class="my-animation ng-animate ng-enter"                 |
         * | 9. $animate removes the CSS transition block placed on the element                                                | class="my-animation ng-animate ng-enter"                 |
         * | 10. the .ng-enter-active class is added (this triggers the CSS transition/animation)                              | class="my-animation ng-animate ng-enter ng-enter-active" |
         * | 11. $animate waits for the animation to complete (via events and timeout)                                         | class="my-animation ng-animate ng-enter ng-enter-active" |
         * | 12. The animation ends and all generated CSS classes are removed from the element                                 | class="my-animation"                                     |
         * | 13. The returned promise is resolved.                                                                             | class="my-animation"                                     |
         *
         * @param {DOMElement} element the element that will be the focus of the enter animation
         * @param {DOMElement} parentElement the parent element of the element that will be the focus of the enter animation
         * @param {DOMElement} afterElement the sibling element (which is the previous element) of the element that will be the focus of the enter animation
         * @param {object=} options an optional collection of options that will be picked up by the CSS transition/animation
         * @return {Promise} the animation callback promise
        */
        enter : function(element, parentElement, afterElement, options) {
          options = parseAnimateOptions(options);
          element = angular.element(element);
          parentElement = prepareElement(parentElement);
          afterElement = prepareElement(afterElement);

          classBasedAnimationsBlocked(element, true);
          $delegate.enter(element, parentElement, afterElement);
          return runAnimationPostDigest(function(done) {
            return performAnimation('enter', 'ng-enter', stripCommentsFromElement(element), parentElement, afterElement, noop, options, done);
          });
        },

        /**
         * @ngdoc method
         * @name $animate#leave
         * @kind function
         *
         * @description
         * Runs the leave animation operation and, upon completion, removes the element from the DOM. Once
         * the animation is started, the following CSS classes will be added for the duration of the animation:
         *
         * Below is a breakdown of each step that occurs during leave animation:
         *
         * | Animation Step                                                                                                    | What the element class attribute looks like              |
         * |-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
         * | 1. $animate.leave(...) is called                                                                                  | class="my-animation"                                     |
         * | 2. $animate runs the JavaScript-defined animations detected on the element                                        | class="my-animation ng-animate"                          |
         * | 3. $animate waits for the next digest to start the animation                                                      | class="my-animation ng-animate"                          |
         * | 4. the .ng-leave class is added to the element                                                                    | class="my-animation ng-animate ng-leave"                 |
         * | 5. $animate scans the element styles to get the CSS transition/animation duration and delay                       | class="my-animation ng-animate ng-leave"                 |
         * | 6. $animate blocks all CSS transitions on the element to ensure the .ng-leave class styling is applied right away | class="my-animation ng-animate ng-leave”                 |
         * | 7. $animate waits for a single animation frame (this performs a reflow)                                           | class="my-animation ng-animate ng-leave"                 |
         * | 8. $animate removes the CSS transition block placed on the element                                                | class="my-animation ng-animate ng-leave”                 |
         * | 9. the .ng-leave-active class is added (this triggers the CSS transition/animation)                               | class="my-animation ng-animate ng-leave ng-leave-active" |
         * | 10. $animate waits for the animation to complete (via events and timeout)                                         | class="my-animation ng-animate ng-leave ng-leave-active" |
         * | 11. The animation ends and all generated CSS classes are removed from the element                                 | class="my-animation"                                     |
         * | 12. The element is removed from the DOM                                                                           | ...                                                      |
         * | 13. The returned promise is resolved.                                                                             | ...                                                      |
         *
         * @param {DOMElement} element the element that will be the focus of the leave animation
         * @param {object=} options an optional collection of styles that will be picked up by the CSS transition/animation
         * @return {Promise} the animation callback promise
        */
        leave : function(element, options) {
          options = parseAnimateOptions(options);
          element = angular.element(element);

          cancelChildAnimations(element);
          classBasedAnimationsBlocked(element, true);
          return runAnimationPostDigest(function(done) {
            return performAnimation('leave', 'ng-leave', stripCommentsFromElement(element), null, null, function() {
              $delegate.leave(element);
            }, options, done);
          });
        },

        /**
         * @ngdoc method
         * @name $animate#move
         * @kind function
         *
         * @description
         * Fires the move DOM operation. Just before the animation starts, the animate service will either append it into the parentElement container or
         * add the element directly after the afterElement element if present. Then the move animation will be run. Once
         * the animation is started, the following CSS classes will be added for the duration of the animation:
         *
         * Below is a breakdown of each step that occurs during move animation:
         *
         * | Animation Step                                                                                                   | What the element class attribute looks like            |
         * |------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
         * | 1. $animate.move(...) is called                                                                                  | class="my-animation"                                   |
         * | 2. element is moved into the parentElement element or beside the afterElement element                            | class="my-animation"                                   |
         * | 3. $animate waits for the next digest to start the animation                                                     | class="my-animation ng-animate"                        |
         * | 4. $animate runs the JavaScript-defined animations detected on the element                                       | class="my-animation ng-animate"                        |
         * | 5. the .ng-move class is added to the element                                                                    | class="my-animation ng-animate ng-move"                |
         * | 6. $animate scans the element styles to get the CSS transition/animation duration and delay                      | class="my-animation ng-animate ng-move"                |
         * | 7. $animate blocks all CSS transitions on the element to ensure the .ng-move class styling is applied right away | class="my-animation ng-animate ng-move”                |
         * | 8. $animate waits for a single animation frame (this performs a reflow)                                          | class="my-animation ng-animate ng-move"                |
         * | 9. $animate removes the CSS transition block placed on the element                                               | class="my-animation ng-animate ng-move”                |
         * | 10. the .ng-move-active class is added (this triggers the CSS transition/animation)                              | class="my-animation ng-animate ng-move ng-move-active" |
         * | 11. $animate waits for the animation to complete (via events and timeout)                                        | class="my-animation ng-animate ng-move ng-move-active" |
         * | 12. The animation ends and all generated CSS classes are removed from the element                                | class="my-animation"                                   |
         * | 13. The returned promise is resolved.                                                                            | class="my-animation"                                   |
         *
         * @param {DOMElement} element the element that will be the focus of the move animation
         * @param {DOMElement} parentElement the parentElement element of the element that will be the focus of the move animation
         * @param {DOMElement} afterElement the sibling element (which is the previous element) of the element that will be the focus of the move animation
         * @param {object=} options an optional collection of styles that will be picked up by the CSS transition/animation
         * @return {Promise} the animation callback promise
        */
        move : function(element, parentElement, afterElement, options) {
          options = parseAnimateOptions(options);
          element = angular.element(element);
          parentElement = prepareElement(parentElement);
          afterElement = prepareElement(afterElement);

          cancelChildAnimations(element);
          classBasedAnimationsBlocked(element, true);
          $delegate.move(element, parentElement, afterElement);
          return runAnimationPostDigest(function(done) {
            return performAnimation('move', 'ng-move', stripCommentsFromElement(element), parentElement, afterElement, noop, options, done);
          });
        },

        /**
         * @ngdoc method
         * @name $animate#addClass
         *
         * @description
         * Triggers a custom animation event based off the className variable and then attaches the className value to the element as a CSS class.
         * Unlike the other animation methods, the animate service will suffix the className value with {@type -add} in order to provide
         * the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if no CSS transitions
         * or keyframes are defined on the -add-active or base CSS class).
         *
         * Below is a breakdown of each step that occurs during addClass animation:
         *
         * | Animation Step                                                                                     | What the element class attribute looks like                      |
         * |----------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
         * | 1. $animate.addClass(element, 'super') is called                                                   | class="my-animation"                                             |
         * | 2. $animate runs the JavaScript-defined animations detected on the element                         | class="my-animation ng-animate"                                  |
         * | 3. the .super-add class is added to the element                                                    | class="my-animation ng-animate super-add"                        |
         * | 4. $animate waits for a single animation frame (this performs a reflow)                            | class="my-animation ng-animate super-add"                        |
         * | 5. the .super and .super-add-active classes are added (this triggers the CSS transition/animation) | class="my-animation ng-animate super super-add super-add-active" |
         * | 6. $animate scans the element styles to get the CSS transition/animation duration and delay        | class="my-animation ng-animate super-add"                        |
         * | 7. $animate waits for the animation to complete (via events and timeout)                           | class="my-animation super super-add super-add-active"            |
         * | 8. The animation ends and all generated CSS classes are removed from the element                   | class="my-animation super"                                       |
         * | 9. The super class is kept on the element                                                          | class="my-animation super"                                       |
         * | 10. The returned promise is resolved.                                                              | class="my-animation super"                                       |
         *
         * @param {DOMElement} element the element that will be animated
         * @param {string} className the CSS class that will be added to the element and then animated
         * @param {object=} options an optional collection of styles that will be picked up by the CSS transition/animation
         * @return {Promise} the animation callback promise
        */
        addClass : function(element, className, options) {
          return this.setClass(element, className, [], options);
        },

        /**
         * @ngdoc method
         * @name $animate#removeClass
         *
         * @description
         * Triggers a custom animation event based off the className variable and then removes the CSS class provided by the className value
         * from the element. Unlike the other animation methods, the animate service will suffix the className value with {@type -remove} in
         * order to provide the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if
         * no CSS transitions or keyframes are defined on the -remove or base CSS classes).
         *
         * Below is a breakdown of each step that occurs during removeClass animation:
         *
         * | Animation Step                                                                                                   | What the element class attribute looks like                      |
         * |------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
         * | 1. $animate.removeClass(element, 'super') is called                                                              | class="my-animation super"                                       |
         * | 2. $animate runs the JavaScript-defined animations detected on the element                                       | class="my-animation super ng-animate"                            |
         * | 3. the .super-remove class is added to the element                                                               | class="my-animation super ng-animate super-remove"               |
         * | 4. $animate waits for a single animation frame (this performs a reflow)                                          | class="my-animation super ng-animate super-remove"               |
         * | 5. the .super-remove-active classes are added and .super is removed (this triggers the CSS transition/animation) | class="my-animation ng-animate super-remove super-remove-active" |
         * | 6. $animate scans the element styles to get the CSS transition/animation duration and delay                      | class="my-animation super ng-animate super-remove"               |
         * | 7. $animate waits for the animation to complete (via events and timeout)                                         | class="my-animation ng-animate super-remove super-remove-active" |
         * | 8. The animation ends and all generated CSS classes are removed from the element                                 | class="my-animation"                                             |
         * | 9. The returned promise is resolved.                                                                             | class="my-animation"                                             |
         *
         *
         * @param {DOMElement} element the element that will be animated
         * @param {string} className the CSS class that will be animated and then removed from the element
         * @param {object=} options an optional collection of styles that will be picked up by the CSS transition/animation
         * @return {Promise} the animation callback promise
        */
        removeClass : function(element, className, options) {
          return this.setClass(element, [], className, options);
        },

        /**
         *
         * @ngdoc method
         * @name $animate#setClass
         *
         * @description Adds and/or removes the given CSS classes to and from the element.
         * Once complete, the done() callback will be fired (if provided).
         *
         * | Animation Step                                                                                                                       | What the element class attribute looks like                                          |
         * |--------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
         * | 1. $animate.removeClass(element, ‘on’, ‘off’) is called                                                                              | class="my-animation super off”                                                       |
         * | 2. $animate runs the JavaScript-defined animations detected on the element                                                           | class="my-animation super ng-animate off”                                            |
         * | 3. the .on-add and .off-remove classes are added to the element                                                                      | class="my-animation ng-animate on-add off-remove off”                                |
         * | 4. $animate waits for a single animation frame (this performs a reflow)                                                              | class="my-animation ng-animate on-add off-remove off”                                |
         * | 5. the .on, .on-add-active and .off-remove-active classes are added and .off is removed (this triggers the CSS transition/animation) | class="my-animation ng-animate on on-add on-add-active off-remove off-remove-active” |
         * | 6. $animate scans the element styles to get the CSS transition/animation duration and delay                                          | class="my-animation ng-animate on on-add on-add-active off-remove off-remove-active" |
         * | 7. $animate waits for the animation to complete (via events and timeout)                                                             | class="my-animation ng-animate on on-add on-add-active off-remove off-remove-active" |
         * | 8. The animation ends and all generated CSS classes are removed from the element                                                     | class="my-animation on"                                                              |
         * | 9. The returned promise is resolved.                                                                                                 | class="my-animation on"                                                              |
         *
         * @param {DOMElement} element the element which will have its CSS classes changed
         *   removed from it
         * @param {string} add the CSS classes which will be added to the element
         * @param {string} remove the CSS class which will be removed from the element
         *   CSS classes have been set on the element
         * @param {object=} options an optional collection of styles that will be picked up by the CSS transition/animation
         * @return {Promise} the animation callback promise
         */
        setClass : function(element, add, remove, options) {
          options = parseAnimateOptions(options);

          var STORAGE_KEY = '$$animateClasses';
          element = angular.element(element);
          element = stripCommentsFromElement(element);

          if (classBasedAnimationsBlocked(element)) {
            return $delegate.$$setClassImmediately(element, add, remove, options);
          }

          // we're using a combined array for both the add and remove
          // operations since the ORDER OF addClass and removeClass matters
          var classes, cache = element.data(STORAGE_KEY);
          var hasCache = !!cache;
          if (!cache) {
            cache = {};
            cache.classes = {};
          }
          classes = cache.classes;

          add = isArray(add) ? add : add.split(' ');
          forEach(add, function(c) {
            if (c && c.length) {
              classes[c] = true;
            }
          });

          remove = isArray(remove) ? remove : remove.split(' ');
          forEach(remove, function(c) {
            if (c && c.length) {
              classes[c] = false;
            }
          });

          if (hasCache) {
            if (options && cache.options) {
              cache.options = angular.extend(cache.options || {}, options);
            }

            //the digest cycle will combine all the animations into one function
            return cache.promise;
          } else {
            element.data(STORAGE_KEY, cache = {
              classes : classes,
              options : options
            });
          }

          return cache.promise = runAnimationPostDigest(function(done) {
            var parentElement = element.parent();
            var elementNode = extractElementNode(element);
            var parentNode = elementNode.parentNode;
            // TODO(matsko): move this code into the animationsDisabled() function once #8092 is fixed
            if (!parentNode || parentNode['$$NG_REMOVED'] || elementNode['$$NG_REMOVED']) {
              done();
              return;
            }

            var cache = element.data(STORAGE_KEY);
            element.removeData(STORAGE_KEY);

            var state = element.data(NG_ANIMATE_STATE) || {};
            var classes = resolveElementClasses(element, cache, state.active);
            return !classes
              ? done()
              : performAnimation('setClass', classes, element, parentElement, null, function() {
                  if (classes[0]) $delegate.$$addClassImmediately(element, classes[0]);
                  if (classes[1]) $delegate.$$removeClassImmediately(element, classes[1]);
                }, cache.options, done);
          });
        },

        /**
         * @ngdoc method
         * @name $animate#cancel
         * @kind function
         *
         * @param {Promise} animationPromise The animation promise that is returned when an animation is started.
         *
         * @description
         * Cancels the provided animation.
        */
        cancel : function(promise) {
          promise.$$cancelFn();
        },

        /**
         * @ngdoc method
         * @name $animate#enabled
         * @kind function
         *
         * @param {boolean=} value If provided then set the animation on or off.
         * @param {DOMElement=} element If provided then the element will be used to represent the enable/disable operation
         * @return {boolean} Current animation state.
         *
         * @description
         * Globally enables/disables animations.
         *
        */
        enabled : function(value, element) {
          switch(arguments.length) {
            case 2:
              if (value) {
                cleanup(element);
              } else {
                var data = element.data(NG_ANIMATE_STATE) || {};
                data.disabled = true;
                element.data(NG_ANIMATE_STATE, data);
              }
            break;

            case 1:
              rootAnimateState.disabled = !value;
            break;

            default:
              value = !rootAnimateState.disabled;
            break;
          }
          return !!value;
         }
      };

      /*
        all animations call this shared animation triggering function internally.
        The animationEvent variable refers to the JavaScript animation event that will be triggered
        and the className value is the name of the animation that will be applied within the
        CSS code. Element, parentElement and afterElement are provided DOM elements for the animation
        and the onComplete callback will be fired once the animation is fully complete.
      */
      function performAnimation(animationEvent, className, element, parentElement, afterElement, domOperation, options, doneCallback) {
        var noopCancel = noop;
        var runner = animationRunner(element, animationEvent, className, options);
        if (!runner) {
          fireDOMOperation();
          fireBeforeCallbackAsync();
          fireAfterCallbackAsync();
          closeAnimation();
          return noopCancel;
        }

        animationEvent = runner.event;
        className = runner.className;
        var elementEvents = angular.element._data(runner.node);
        elementEvents = elementEvents && elementEvents.events;

        if (!parentElement) {
          parentElement = afterElement ? afterElement.parent() : element.parent();
        }

        //skip the animation if animations are disabled, a parent is already being animated,
        //the element is not currently attached to the document body or then completely close
        //the animation if any matching animations are not found at all.
        //NOTE: IE8 + IE9 should close properly (run closeAnimation()) in case an animation was found.
        if (animationsDisabled(element, parentElement)) {
          fireDOMOperation();
          fireBeforeCallbackAsync();
          fireAfterCallbackAsync();
          closeAnimation();
          return noopCancel;
        }

        var ngAnimateState  = element.data(NG_ANIMATE_STATE) || {};
        var runningAnimations     = ngAnimateState.active || {};
        var totalActiveAnimations = ngAnimateState.totalActive || 0;
        var lastAnimation         = ngAnimateState.last;
        var skipAnimation = false;

        if (totalActiveAnimations > 0) {
          var animationsToCancel = [];
          if (!runner.isClassBased) {
            if (animationEvent == 'leave' && runningAnimations['ng-leave']) {
              skipAnimation = true;
            } else {
              //cancel all animations when a structural animation takes place
              for(var klass in runningAnimations) {
                animationsToCancel.push(runningAnimations[klass]);
              }
              ngAnimateState = {};
              cleanup(element, true);
            }
          } else if (lastAnimation.event == 'setClass') {
            animationsToCancel.push(lastAnimation);
            cleanup(element, className);
          }
          else if (runningAnimations[className]) {
            var current = runningAnimations[className];
            if (current.event == animationEvent) {
              skipAnimation = true;
            } else {
              animationsToCancel.push(current);
              cleanup(element, className);
            }
          }

          if (animationsToCancel.length > 0) {
            forEach(animationsToCancel, function(operation) {
              operation.cancel();
            });
          }
        }

        if (runner.isClassBased
            && !runner.isSetClassOperation
            && animationEvent != 'animate'
            && !skipAnimation) {
          skipAnimation = (animationEvent == 'addClass') == element.hasClass(className); //opposite of XOR
        }

        if (skipAnimation) {
          fireDOMOperation();
          fireBeforeCallbackAsync();
          fireAfterCallbackAsync();
          fireDoneCallbackAsync();
          return noopCancel;
        }

        runningAnimations     = ngAnimateState.active || {};
        totalActiveAnimations = ngAnimateState.totalActive || 0;

        if (animationEvent == 'leave') {
          //there's no need to ever remove the listener since the element
          //will be removed (destroyed) after the leave animation ends or
          //is cancelled midway
          element.one('$destroy', function(e) {
            var element = angular.element(this);
            var state = element.data(NG_ANIMATE_STATE);
            if (state) {
              var activeLeaveAnimation = state.active['ng-leave'];
              if (activeLeaveAnimation) {
                activeLeaveAnimation.cancel();
                cleanup(element, 'ng-leave');
              }
            }
          });
        }

        //the ng-animate class does nothing, but it's here to allow for
        //parent animations to find and cancel child animations when needed
        element.addClass(NG_ANIMATE_CLASS_NAME);
        if (options && options.tempClasses) {
          forEach(options.tempClasses, function(className) {
            element.addClass(className);
          });
        }

        var localAnimationCount = globalAnimationCounter++;
        totalActiveAnimations++;
        runningAnimations[className] = runner;

        element.data(NG_ANIMATE_STATE, {
          last : runner,
          active : runningAnimations,
          index : localAnimationCount,
          totalActive : totalActiveAnimations
        });

        //first we run the before animations and when all of those are complete
        //then we perform the DOM operation and run the next set of animations
        fireBeforeCallbackAsync();
        runner.before(function(cancelled) {
          var data = element.data(NG_ANIMATE_STATE);
          cancelled = cancelled ||
                        !data || !data.active[className] ||
                        (runner.isClassBased && data.active[className].event != animationEvent);

          fireDOMOperation();
          if (cancelled === true) {
            closeAnimation();
          } else {
            fireAfterCallbackAsync();
            runner.after(closeAnimation);
          }
        });

        return runner.cancel;

        function fireDOMCallback(animationPhase) {
          var eventName = '$animate:' + animationPhase;
          if (elementEvents && elementEvents[eventName] && elementEvents[eventName].length > 0) {
            $$asyncCallback(function() {
              element.triggerHandler(eventName, {
                event : animationEvent,
                className : className
              });
            });
          }
        }

        function fireBeforeCallbackAsync() {
          fireDOMCallback('before');
        }

        function fireAfterCallbackAsync() {
          fireDOMCallback('after');
        }

        function fireDoneCallbackAsync() {
          fireDOMCallback('close');
          doneCallback();
        }

        //it is less complicated to use a flag than managing and canceling
        //timeouts containing multiple callbacks.
        function fireDOMOperation() {
          if (!fireDOMOperation.hasBeenRun) {
            fireDOMOperation.hasBeenRun = true;
            domOperation();
          }
        }

        function closeAnimation() {
          if (!closeAnimation.hasBeenRun) {
            if (runner) { //the runner doesn't exist if it fails to instantiate
              runner.applyStyles();
            }

            closeAnimation.hasBeenRun = true;
            if (options && options.tempClasses) {
              forEach(options.tempClasses, function(className) {
                element.removeClass(className);
              });
            }

            var data = element.data(NG_ANIMATE_STATE);
            if (data) {

              /* only structural animations wait for reflow before removing an
                 animation, but class-based animations don't. An example of this
                 failing would be when a parent HTML tag has a ng-class attribute
                 causing ALL directives below to skip animations during the digest */
              if (runner && runner.isClassBased) {
                cleanup(element, className);
              } else {
                $$asyncCallback(function() {
                  var data = element.data(NG_ANIMATE_STATE) || {};
                  if (localAnimationCount == data.index) {
                    cleanup(element, className, animationEvent);
                  }
                });
                element.data(NG_ANIMATE_STATE, data);
              }
            }
            fireDoneCallbackAsync();
          }
        }
      }

      function cancelChildAnimations(element) {
        var node = extractElementNode(element);
        if (node) {
          var nodes = angular.isFunction(node.getElementsByClassName) ?
            node.getElementsByClassName(NG_ANIMATE_CLASS_NAME) :
            node.querySelectorAll('.' + NG_ANIMATE_CLASS_NAME);
          forEach(nodes, function(element) {
            element = angular.element(element);
            var data = element.data(NG_ANIMATE_STATE);
            if (data && data.active) {
              forEach(data.active, function(runner) {
                runner.cancel();
              });
            }
          });
        }
      }

      function cleanup(element, className) {
        if (isMatchingElement(element, $rootElement)) {
          if (!rootAnimateState.disabled) {
            rootAnimateState.running = false;
            rootAnimateState.structural = false;
          }
        } else if (className) {
          var data = element.data(NG_ANIMATE_STATE) || {};

          var removeAnimations = className === true;
          if (!removeAnimations && data.active && data.active[className]) {
            data.totalActive--;
            delete data.active[className];
          }

          if (removeAnimations || !data.totalActive) {
            element.removeClass(NG_ANIMATE_CLASS_NAME);
            element.removeData(NG_ANIMATE_STATE);
          }
        }
      }

      function animationsDisabled(element, parentElement) {
        if (rootAnimateState.disabled) {
          return true;
        }

        if (isMatchingElement(element, $rootElement)) {
          return rootAnimateState.running;
        }

        var allowChildAnimations, parentRunningAnimation, hasParent;
        do {
          //the element did not reach the root element which means that it
          //is not apart of the DOM. Therefore there is no reason to do
          //any animations on it
          if (parentElement.length === 0) break;

          var isRoot = isMatchingElement(parentElement, $rootElement);
          var state = isRoot ? rootAnimateState : (parentElement.data(NG_ANIMATE_STATE) || {});
          if (state.disabled) {
            return true;
          }

          //no matter what, for an animation to work it must reach the root element
          //this implies that the element is attached to the DOM when the animation is run
          if (isRoot) {
            hasParent = true;
          }

          //once a flag is found that is strictly false then everything before
          //it will be discarded and all child animations will be restricted
          if (allowChildAnimations !== false) {
            var animateChildrenFlag = parentElement.data(NG_ANIMATE_CHILDREN);
            if (angular.isDefined(animateChildrenFlag)) {
              allowChildAnimations = animateChildrenFlag;
            }
          }

          parentRunningAnimation = parentRunningAnimation ||
                                   state.running ||
                                   (state.last && !state.last.isClassBased);
        }
        while(parentElement = parentElement.parent());

        return !hasParent || (!allowChildAnimations && parentRunningAnimation);
      }
    }]);

    $animateProvider.register('', ['$window', '$sniffer', '$timeout', '$$animateReflow',
                           function($window,   $sniffer,   $timeout,   $$animateReflow) {
      // Detect proper transitionend/animationend event names.
      var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;

      // If unprefixed events are not supported but webkit-prefixed are, use the latter.
      // Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
      // Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
      // but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
      // Register both events in case `window.onanimationend` is not supported because of that,
      // do the same for `transitionend` as Safari is likely to exhibit similar behavior.
      // Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
      // therefore there is no reason to test anymore for other vendor prefixes: http://caniuse.com/#search=transition
      if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
        CSS_PREFIX = '-webkit-';
        TRANSITION_PROP = 'WebkitTransition';
        TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
      } else {
        TRANSITION_PROP = 'transition';
        TRANSITIONEND_EVENT = 'transitionend';
      }

      if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
        CSS_PREFIX = '-webkit-';
        ANIMATION_PROP = 'WebkitAnimation';
        ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
      } else {
        ANIMATION_PROP = 'animation';
        ANIMATIONEND_EVENT = 'animationend';
      }

      var DURATION_KEY = 'Duration';
      var PROPERTY_KEY = 'Property';
      var DELAY_KEY = 'Delay';
      var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
      var ANIMATION_PLAYSTATE_KEY = 'PlayState';
      var NG_ANIMATE_PARENT_KEY = '$$ngAnimateKey';
      var NG_ANIMATE_CSS_DATA_KEY = '$$ngAnimateCSS3Data';
      var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
      var CLOSING_TIME_BUFFER = 1.5;
      var ONE_SECOND = 1000;

      var lookupCache = {};
      var parentCounter = 0;
      var animationReflowQueue = [];
      var cancelAnimationReflow;
      function clearCacheAfterReflow() {
        if (!cancelAnimationReflow) {
          cancelAnimationReflow = $$animateReflow(function() {
            animationReflowQueue = [];
            cancelAnimationReflow = null;
            lookupCache = {};
          });
        }
      }

      function afterReflow(element, callback) {
        if (cancelAnimationReflow) {
          cancelAnimationReflow();
        }
        animationReflowQueue.push(callback);
        cancelAnimationReflow = $$animateReflow(function() {
          forEach(animationReflowQueue, function(fn) {
            fn();
          });

          animationReflowQueue = [];
          cancelAnimationReflow = null;
          lookupCache = {};
        });
      }

      var closingTimer = null;
      var closingTimestamp = 0;
      var animationElementQueue = [];
      function animationCloseHandler(element, totalTime) {
        var node = extractElementNode(element);
        element = angular.element(node);

        //this item will be garbage collected by the closing
        //animation timeout
        animationElementQueue.push(element);

        //but it may not need to cancel out the existing timeout
        //if the timestamp is less than the previous one
        var futureTimestamp = Date.now() + totalTime;
        if (futureTimestamp <= closingTimestamp) {
          return;
        }

        $timeout.cancel(closingTimer);

        closingTimestamp = futureTimestamp;
        closingTimer = $timeout(function() {
          closeAllAnimations(animationElementQueue);
          animationElementQueue = [];
        }, totalTime, false);
      }

      function closeAllAnimations(elements) {
        forEach(elements, function(element) {
          var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
          if (elementData) {
            forEach(elementData.closeAnimationFns, function(fn) {
              fn();
            });
          }
        });
      }

      function getElementAnimationDetails(element, cacheKey) {
        var data = cacheKey ? lookupCache[cacheKey] : null;
        if (!data) {
          var transitionDuration = 0;
          var transitionDelay = 0;
          var animationDuration = 0;
          var animationDelay = 0;

          //we want all the styles defined before and after
          forEach(element, function(element) {
            if (element.nodeType == ELEMENT_NODE) {
              var elementStyles = $window.getComputedStyle(element) || {};

              var transitionDurationStyle = elementStyles[TRANSITION_PROP + DURATION_KEY];
              transitionDuration = Math.max(parseMaxTime(transitionDurationStyle), transitionDuration);

              var transitionDelayStyle = elementStyles[TRANSITION_PROP + DELAY_KEY];
              transitionDelay  = Math.max(parseMaxTime(transitionDelayStyle), transitionDelay);

              var animationDelayStyle = elementStyles[ANIMATION_PROP + DELAY_KEY];
              animationDelay   = Math.max(parseMaxTime(elementStyles[ANIMATION_PROP + DELAY_KEY]), animationDelay);

              var aDuration  = parseMaxTime(elementStyles[ANIMATION_PROP + DURATION_KEY]);

              if (aDuration > 0) {
                aDuration *= parseInt(elementStyles[ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY], 10) || 1;
              }
              animationDuration = Math.max(aDuration, animationDuration);
            }
          });
          data = {
            total : 0,
            transitionDelay: transitionDelay,
            transitionDuration: transitionDuration,
            animationDelay: animationDelay,
            animationDuration: animationDuration
          };
          if (cacheKey) {
            lookupCache[cacheKey] = data;
          }
        }
        return data;
      }

      function parseMaxTime(str) {
        var maxValue = 0;
        var values = isString(str) ?
          str.split(/\s*,\s*/) :
          [];
        forEach(values, function(value) {
          maxValue = Math.max(parseFloat(value) || 0, maxValue);
        });
        return maxValue;
      }

      function getCacheKey(element) {
        var parentElement = element.parent();
        var parentID = parentElement.data(NG_ANIMATE_PARENT_KEY);
        if (!parentID) {
          parentElement.data(NG_ANIMATE_PARENT_KEY, ++parentCounter);
          parentID = parentCounter;
        }
        return parentID + '-' + extractElementNode(element).getAttribute('class');
      }

      function animateSetup(animationEvent, element, className, styles) {
        var structural = ['ng-enter','ng-leave','ng-move'].indexOf(className) >= 0;

        var cacheKey = getCacheKey(element);
        var eventCacheKey = cacheKey + ' ' + className;
        var itemIndex = lookupCache[eventCacheKey] ? ++lookupCache[eventCacheKey].total : 0;

        var stagger = {};
        if (itemIndex > 0) {
          var staggerClassName = className + '-stagger';
          var staggerCacheKey = cacheKey + ' ' + staggerClassName;
          var applyClasses = !lookupCache[staggerCacheKey];

          applyClasses && element.addClass(staggerClassName);

          stagger = getElementAnimationDetails(element, staggerCacheKey);

          applyClasses && element.removeClass(staggerClassName);
        }

        element.addClass(className);

        var formerData = element.data(NG_ANIMATE_CSS_DATA_KEY) || {};
        var timings = getElementAnimationDetails(element, eventCacheKey);
        var transitionDuration = timings.transitionDuration;
        var animationDuration = timings.animationDuration;

        if (structural && transitionDuration === 0 && animationDuration === 0) {
          element.removeClass(className);
          return false;
        }

        var blockTransition = styles || (structural && transitionDuration > 0);
        var blockAnimation = animationDuration > 0 &&
                             stagger.animationDelay > 0 &&
                             stagger.animationDuration === 0;

        var closeAnimationFns = formerData.closeAnimationFns || [];
        element.data(NG_ANIMATE_CSS_DATA_KEY, {
          stagger : stagger,
          cacheKey : eventCacheKey,
          running : formerData.running || 0,
          itemIndex : itemIndex,
          blockTransition : blockTransition,
          closeAnimationFns : closeAnimationFns
        });

        var node = extractElementNode(element);

        if (blockTransition) {
          blockTransitions(node, true);
          if (styles) {
            element.css(styles);
          }
        }

        if (blockAnimation) {
          blockAnimations(node, true);
        }

        return true;
      }

      function animateRun(animationEvent, element, className, activeAnimationComplete, styles) {
        var node = extractElementNode(element);
        var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
        if (node.getAttribute('class').indexOf(className) == -1 || !elementData) {
          activeAnimationComplete();
          return;
        }

        var activeClassName = '';
        var pendingClassName = '';
        forEach(className.split(' '), function(klass, i) {
          var prefix = (i > 0 ? ' ' : '') + klass;
          activeClassName += prefix + '-active';
          pendingClassName += prefix + '-pending';
        });

        var style = '';
        var appliedStyles = [];
        var itemIndex = elementData.itemIndex;
        var stagger = elementData.stagger;
        var staggerTime = 0;
        if (itemIndex > 0) {
          var transitionStaggerDelay = 0;
          if (stagger.transitionDelay > 0 && stagger.transitionDuration === 0) {
            transitionStaggerDelay = stagger.transitionDelay * itemIndex;
          }

          var animationStaggerDelay = 0;
          if (stagger.animationDelay > 0 && stagger.animationDuration === 0) {
            animationStaggerDelay = stagger.animationDelay * itemIndex;
            appliedStyles.push(CSS_PREFIX + 'animation-play-state');
          }

          staggerTime = Math.round(Math.max(transitionStaggerDelay, animationStaggerDelay) * 100) / 100;
        }

        if (!staggerTime) {
          element.addClass(activeClassName);
          if (elementData.blockTransition) {
            blockTransitions(node, false);
          }
        }

        var eventCacheKey = elementData.cacheKey + ' ' + activeClassName;
        var timings = getElementAnimationDetails(element, eventCacheKey);
        var maxDuration = Math.max(timings.transitionDuration, timings.animationDuration);
        if (maxDuration === 0) {
          element.removeClass(activeClassName);
          animateClose(element, className);
          activeAnimationComplete();
          return;
        }

        if (!staggerTime && styles) {
          if (!timings.transitionDuration) {
            element.css('transition', timings.animationDuration + 's linear all');
            appliedStyles.push('transition');
          }
          element.css(styles);
        }

        var maxDelay = Math.max(timings.transitionDelay, timings.animationDelay);
        var maxDelayTime = maxDelay * ONE_SECOND;

        if (appliedStyles.length > 0) {
          //the element being animated may sometimes contain comment nodes in
          //the jqLite object, so we're safe to use a single variable to house
          //the styles since there is always only one element being animated
          var oldStyle = node.getAttribute('style') || '';
          if (oldStyle.charAt(oldStyle.length-1) !== ';') {
            oldStyle += ';';
          }
          node.setAttribute('style', oldStyle + ' ' + style);
        }

        var startTime = Date.now();
        var css3AnimationEvents = ANIMATIONEND_EVENT + ' ' + TRANSITIONEND_EVENT;
        var animationTime     = (maxDelay + maxDuration) * CLOSING_TIME_BUFFER;
        var totalTime         = (staggerTime + animationTime) * ONE_SECOND;

        var staggerTimeout;
        if (staggerTime > 0) {
          element.addClass(pendingClassName);
          staggerTimeout = $timeout(function() {
            staggerTimeout = null;

            if (timings.transitionDuration > 0) {
              blockTransitions(node, false);
            }
            if (timings.animationDuration > 0) {
              blockAnimations(node, false);
            }

            element.addClass(activeClassName);
            element.removeClass(pendingClassName);

            if (styles) {
              if (timings.transitionDuration === 0) {
                element.css('transition', timings.animationDuration + 's linear all');
              }
              element.css(styles);
              appliedStyles.push('transition');
            }
          }, staggerTime * ONE_SECOND, false);
        }

        element.on(css3AnimationEvents, onAnimationProgress);
        elementData.closeAnimationFns.push(function() {
          onEnd();
          activeAnimationComplete();
        });

        elementData.running++;
        animationCloseHandler(element, totalTime);
        return onEnd;

        // This will automatically be called by $animate so
        // there is no need to attach this internally to the
        // timeout done method.
        function onEnd() {
          element.off(css3AnimationEvents, onAnimationProgress);
          element.removeClass(activeClassName);
          element.removeClass(pendingClassName);
          if (staggerTimeout) {
            $timeout.cancel(staggerTimeout);
          }
          animateClose(element, className);
          var node = extractElementNode(element);
          for (var i in appliedStyles) {
            node.style.removeProperty(appliedStyles[i]);
          }
        }

        function onAnimationProgress(event) {
          event.stopPropagation();
          var ev = event.originalEvent || event;
          var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();

          /* Firefox (or possibly just Gecko) likes to not round values up
           * when a ms measurement is used for the animation */
          var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));

          /* $manualTimeStamp is a mocked timeStamp value which is set
           * within browserTrigger(). This is only here so that tests can
           * mock animations properly. Real events fallback to event.timeStamp,
           * or, if they don't, then a timeStamp is automatically created for them.
           * We're checking to see if the timeStamp surpasses the expected delay,
           * but we're using elapsedTime instead of the timeStamp on the 2nd
           * pre-condition since animations sometimes close off early */
          if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
            activeAnimationComplete();
          }
        }
      }

      function blockTransitions(node, bool) {
        node.style[TRANSITION_PROP + PROPERTY_KEY] = bool ? 'none' : '';
      }

      function blockAnimations(node, bool) {
        node.style[ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY] = bool ? 'paused' : '';
      }

      function animateBefore(animationEvent, element, className, styles) {
        if (animateSetup(animationEvent, element, className, styles)) {
          return function(cancelled) {
            cancelled && animateClose(element, className);
          };
        }
      }

      function animateAfter(animationEvent, element, className, afterAnimationComplete, styles) {
        if (element.data(NG_ANIMATE_CSS_DATA_KEY)) {
          return animateRun(animationEvent, element, className, afterAnimationComplete, styles);
        } else {
          animateClose(element, className);
          afterAnimationComplete();
        }
      }

      function animate(animationEvent, element, className, animationComplete, options) {
        //If the animateSetup function doesn't bother returning a
        //cancellation function then it means that there is no animation
        //to perform at all
        var preReflowCancellation = animateBefore(animationEvent, element, className, options.from);
        if (!preReflowCancellation) {
          clearCacheAfterReflow();
          animationComplete();
          return;
        }

        //There are two cancellation functions: one is before the first
        //reflow animation and the second is during the active state
        //animation. The first function will take care of removing the
        //data from the element which will not make the 2nd animation
        //happen in the first place
        var cancel = preReflowCancellation;
        afterReflow(element, function() {
          //once the reflow is complete then we point cancel to
          //the new cancellation function which will remove all of the
          //animation properties from the active animation
          cancel = animateAfter(animationEvent, element, className, animationComplete, options.to);
        });

        return function(cancelled) {
          (cancel || noop)(cancelled);
        };
      }

      function animateClose(element, className) {
        element.removeClass(className);
        var data = element.data(NG_ANIMATE_CSS_DATA_KEY);
        if (data) {
          if (data.running) {
            data.running--;
          }
          if (!data.running || data.running === 0) {
            element.removeData(NG_ANIMATE_CSS_DATA_KEY);
          }
        }
      }

      return {
        animate : function(element, className, from, to, animationCompleted, options) {
          options = options || {};
          options.from = from;
          options.to = to;
          return animate('animate', element, className, animationCompleted, options);
        },

        enter : function(element, animationCompleted, options) {
          options = options || {};
          return animate('enter', element, 'ng-enter', animationCompleted, options);
        },

        leave : function(element, animationCompleted, options) {
          options = options || {};
          return animate('leave', element, 'ng-leave', animationCompleted, options);
        },

        move : function(element, animationCompleted, options) {
          options = options || {};
          return animate('move', element, 'ng-move', animationCompleted, options);
        },

        beforeSetClass : function(element, add, remove, animationCompleted, options) {
          options = options || {};
          var className = suffixClasses(remove, '-remove') + ' ' +
                          suffixClasses(add, '-add');
          var cancellationMethod = animateBefore('setClass', element, className, options.from);
          if (cancellationMethod) {
            afterReflow(element, animationCompleted);
            return cancellationMethod;
          }
          clearCacheAfterReflow();
          animationCompleted();
        },

        beforeAddClass : function(element, className, animationCompleted, options) {
          options = options || {};
          var cancellationMethod = animateBefore('addClass', element, suffixClasses(className, '-add'), options.from);
          if (cancellationMethod) {
            afterReflow(element, animationCompleted);
            return cancellationMethod;
          }
          clearCacheAfterReflow();
          animationCompleted();
        },

        beforeRemoveClass : function(element, className, animationCompleted, options) {
          options = options || {};
          var cancellationMethod = animateBefore('removeClass', element, suffixClasses(className, '-remove'), options.from);
          if (cancellationMethod) {
            afterReflow(element, animationCompleted);
            return cancellationMethod;
          }
          clearCacheAfterReflow();
          animationCompleted();
        },

        setClass : function(element, add, remove, animationCompleted, options) {
          options = options || {};
          remove = suffixClasses(remove, '-remove');
          add = suffixClasses(add, '-add');
          var className = remove + ' ' + add;
          return animateAfter('setClass', element, className, animationCompleted, options.to);
        },

        addClass : function(element, className, animationCompleted, options) {
          options = options || {};
          return animateAfter('addClass', element, suffixClasses(className, '-add'), animationCompleted, options.to);
        },

        removeClass : function(element, className, animationCompleted, options) {
          options = options || {};
          return animateAfter('removeClass', element, suffixClasses(className, '-remove'), animationCompleted, options.to);
        }
      };

      function suffixClasses(classes, suffix) {
        var className = '';
        classes = isArray(classes) ? classes : classes.split(/\s+/);
        forEach(classes, function(klass, i) {
          if (klass && klass.length > 0) {
            className += (i > 0 ? ' ' : '') + klass + suffix;
          }
        });
        return className;
      }
    }]);
  }]);


})(window, window.angular);

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
angular.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.theming.palette","material.core.theming","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.content","material.components.dialog","material.components.divider","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.textField","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.whiteframe"]),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,n){e.decorator("$$rAF",["$delegate",t]),n.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")}function t(e){return e.throttle=function(t){var n,r,o,a;return function(){n=arguments,a=this,o=t,r||(r=!0,e(function(){o.apply(a,n),r=!1}))}},e}angular.module("material.core",["material.core.theming"]).config(e),e.$inject=["$provide","$mdThemingProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t){function n(e){return r?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var r=/webkit/i.test(t.vendorPrefix);return{KEY_CODE:{ENTER:13,ESCAPE:27,SPACE:32,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9},CSS:{TRANSITIONEND:"transitionend"+(r?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(r?" webkitAnimationEnd":""),TRANSFORM:n("transform"),TRANSFORM_ORIGIN:n("transformOrigin"),TRANSITION:n("transition"),TRANSITION_DURATION:n("transitionDuration"),ANIMATION_PLAY_STATE:n("animationPlayState"),ANIMATION_DURATION:n("animationDuration"),ANIMATION_NAME:n("animationName"),ANIMATION_TIMING:n("animationTimingFunction"),ANIMATION_DIRECTION:n("animationDirection")},MEDIA:{sm:"(max-width: 600px)","gt-sm":"(min-width: 600px)",md:"(min-width: 600px) and (max-width: 960px)","gt-md":"(min-width: 960px)",lg:"(min-width: 960px) and (max-width: 1200px)","gt-lg":"(min-width: 1200px)"},MEDIA_PRIORITY:["gt-lg","lg","gt-md","md","gt-sm","sm"]}}angular.module("material.core").factory("$mdConstant",e),e.$inject=["$$rAF","$sniffer"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){function e(e,t){function n(){return[].concat(b)}function r(){return b.length}function o(e){return b.length&&e>-1&&e<b.length}function a(e){return e?o(m(e)+1):!1}function i(e){return e?o(m(e)-1):!1}function c(e){return o(e)?b[e]:null}function d(e,t){return b.filter(function(n){return n[e]===t})}function l(e,t){return e?(angular.isNumber(t)||(t=b.length),b.splice(t,0,e),m(e)):-1}function s(e){u(e)&&b.splice(m(e),1)}function m(e){return b.indexOf(e)}function u(e){return e&&m(e)>-1}function f(){return b.length?b[0]:null}function p(){return b.length?b[b.length-1]:null}function h(e,n,r,a){r=r||g;for(var i=m(n);;){if(!o(i))return null;var c=i+(e?-1:1),d=null;if(o(c)?d=b[c]:t&&(d=e?p():f(),c=m(d)),null===d||c===a)return null;if(r(d))return d;angular.isUndefined(a)&&(a=c),i=c}}var g=function(){return!0};e&&!angular.isArray(e)&&(e=Array.prototype.slice.call(e)),t=!!t;var b=e||[];return{items:n,count:r,inRange:o,contains:u,indexOf:m,itemAt:c,findBy:d,add:l,remove:s,first:f,last:p,next:angular.bind(null,h,!1),previous:angular.bind(null,h,!0),hasPrevious:i,hasNext:a}}angular.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){function e(e,t,n){function r(e){var t=m[e];angular.isUndefined(t)&&(t=m[e]=o(e));var n=f[t];return angular.isUndefined(n)&&(n=a(t)),n}function o(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=u[e]=n.matchMedia(e);return t.addListener(i),f[t.media]=!!t.matches}function i(e){t.$evalAsync(function(){f[e.media]=!!e.matches})}function c(e){return u[e]}function d(t,n){for(var r=0;r<e.MEDIA_PRIORITY.length;r++){var o=e.MEDIA_PRIORITY[r];if(u[m[o]].matches){var a=s(t,n+"-"+o);if(t[a])return t[a]}}return t[s(t,n)]}function l(t,n,r){var o=[];return t.forEach(function(t){var a=s(n,t);n[a]&&o.push(n.$observe(a,angular.bind(void 0,r,null)));for(var i in e.MEDIA){if(a=s(n,t+"-"+i),!n[a])return;o.push(n.$observe(a,angular.bind(void 0,r,i)))}}),function(){o.forEach(function(e){e()})}}function s(e,t){return p[t]||(p[t]=e.$normalize(t))}var m={},u={},f={},p={};return r.getResponsiveAttribute=d,r.getQuery=c,r.watchResponsiveAttributes=l,r}angular.module("material.core").factory("$mdMedia",e),e.$inject=["$mdConstant","$rootScope","$window"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";var e=["0","0","0"];angular.module("material.core").factory("$mdUtil",["$cacheFactory","$document","$timeout","$q","$window","$mdConstant",function(t,n,r,o,a,i){function c(e){return e[0]||e}var d;return d={now:window.performance?angular.bind(window.performance,window.performance.now):Date.now,clientRect:function(e,t,n){var r=c(e);t=c(t||r.offsetParent||document.body);var o=r.getBoundingClientRect(),a=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:o.left-a.left+t.scrollLeft,top:o.top-a.top+t.scrollTop,width:o.width,height:o.height}},offsetRect:function(e,t){return d.clientRect(e,t,!0)},floatingScrollbars:function(){if(void 0===this.floatingScrollbars.cached){var e=angular.element('<div style="z-index: -1; position: absolute; height: 1px; overflow-y: scroll"><div style="height: 2px;"></div></div>');n[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(e){var t=e[0]||e;document.addEventListener("click",function r(e){e.target===t&&e.$focus&&(t.focus(),e.stopImmediatePropagation(),e.preventDefault(),t.removeEventListener("click",r))},!0);var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!1,!0,window,{},0,0,0,0,!1,!1,!1,!1,0,null),n.$material=!0,n.$focus=!0,t.dispatchEvent(n)},transitionEndPromise:function(e,t){function n(t){t&&t.target!==e[0]||(e.off(i.CSS.TRANSITIONEND,n),a.resolve())}t=t||{};var a=o.defer();return e.on(i.CSS.TRANSITIONEND,n),t.timeout&&r(n,t.timeout),a.promise},fakeNgModel:function(){return{$fake:!0,$setTouched:angular.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:angular.noop}},debounce:function(e,t,n,o){var a;return function(){var i=n,c=Array.prototype.slice.call(arguments);r.cancel(a),a=r(function(){a=void 0,e.apply(i,c)},t||10,o)}},throttle:function(e,t){var n;return function(){var r=this,o=arguments,a=d.now();(!n||a-n>t)&&(e.apply(r,o),n=a)}},time:function(e){var t=d.now();return e(),d.now()-t},nextUid:function(){for(var t,n=e.length;n;){if(n--,t=e[n].charCodeAt(0),57==t)return e[n]="A",e.join("");if(90!=t)return e[n]=String.fromCharCode(t+1),e.join("");e[n]="0"}return e.unshift("0"),e.join("")},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,t){t=t.toUpperCase();do if(e.nodeName===t)return e;while(e=e.parentNode);return null}}}]),angular.element.prototype.focus=angular.element.prototype.focus||function(){return this.length&&this[0].focus(),this},angular.element.prototype.blur=angular.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n){function r(e,n,r){var o=e[0];o.hasAttribute(n)||c(o,n)||(r=angular.isString(r)?r.trim():"",r.length?e.attr(n,r):t.warn('ARIA: Attribute "',n,'", required for accessibility, is missing on node:',o))}function o(t,n,o){e(function(){r(t,n,o())})}function a(e,t){o(e,t,function(){return i(e)})}function i(e){return e.text().trim()}function c(e,t){function r(e){var t=e.currentStyle?e.currentStyle:n.getComputedStyle(e);return"none"===t.display}var o=e.hasChildNodes(),a=!1;if(o)for(var i=e.childNodes,c=0;c<i.length;c++){var d=i[c];1===d.nodeType&&d.hasAttribute(t)&&(r(d)||(a=!0))}return a}return{expect:r,expectAsync:o,expectWithText:a}}angular.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log","$window"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o,a){this.compile=function(i){var c=i.templateUrl,d=i.template||"",l=i.controller,s=i.controllerAs,m=i.resolve||{},u=i.locals||{},f=i.transformTemplate||angular.identity,p=i.bindToController;return angular.forEach(m,function(e,t){m[t]=angular.isString(e)?n.get(e):n.invoke(e)}),angular.extend(m,u),m.$template=c?t.get(c,{cache:a}).then(function(e){return e.data}):e.when(d),e.all(m).then(function(e){var t=f(e.$template),n=i.element||angular.element("<div>").html(t.trim()).contents(),a=r(n);return{locals:e,element:n,link:function(t){if(e.$scope=t,l){var r=o(l,e);p&&angular.extend(r,e),n.data("$ngControllerController",r),n.children().data("$ngControllerController",r),s&&(t[s]=r)}return a(t)}}})}}angular.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t){var n;for(var r in d)n=d[r],"start"===e&&n.cancel(),n[e](t,g)}function t(t){if(!g){var n=+Date.now();b&&!o(t,b)&&n-b.endTime<1500||(g=c(t),e("start",t))}}function n(t){g&&o(t,g)&&(i(t,g),e("move",t))}function r(t){g&&o(t,g)&&(i(t,g),g.endTime=+Date.now(),e("end",t),b=g,g=null)}function o(e,t){return e&&t&&e.type.charAt(0)===t.type}function a(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}function i(e,t){var n=a(e),r=t.x=n.pageX,o=t.y=n.pageY;t.distanceX=r-t.startX,t.distanceY=o-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"up":t.distanceY<0?"down":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function c(e){var t=a(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}var d,l="mousedown touchstart pointerdown",s="mousemove touchmove pointermove",m="mouseup mouseleave touchend touchcancel pointerup pointercancel";document.contains||(document.contains=function(e){return document.body.contains(e)});var u=navigator.userAgent||navigator.vendor||window.opera,f=u.match(/iPad/i)||u.match(/iPhone/i)||u.match(/iPod/i),p=u.match(/Android/i),h=f||p;h&&document.addEventListener("click",function(e){var t=0===e.clientX&&0===e.clientY;window.jQuery||t||e.$material||(e.preventDefault(),e.stopPropagation())},!0),angular.element(document).on(l,t).on(s,n).on(m,r).on("$$mdGestureReset",function(){b=g=null});var g,b;angular.module("material.core").run(["$mdGesture",function(){}]).factory("$mdGesture",["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){function r(t,n){var r=new e(t);return angular.extend(r,n),d[t]=r,a}function o(e,t,n){var r=d[t.replace(/^\$md./,"")];if(!r)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(d).join(", "));return r.registerElement(e,n)}d={},h&&r("click",{options:{maxDistance:6},onEnd:function(e,t){t.distance<this.state.options.maxDistance&&this.dispatchEvent(e,"click")}}),r("press",{onStart:function(e){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e){this.dispatchEvent(e,"$md.pressup")}}),r("hold",{options:{maxDistance:6,delay:500},onCancel:function(){n.cancel(this.state.timeout)},onStart:function(e,t){return this.state.registeredParent?(this.state.pos={x:t.x,y:t.y},this.state.timeout=n(angular.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1),void 0):this.cancel()},onMove:function(e,t){e.preventDefault();var n=this.state.pos.x-t.x,r=this.state.pos.y-t.y;Math.sqrt(n*n+r*r)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}),r("drag",{options:{minDistance:6,horizontal:!0},onStart:function(){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,r;e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,r=Math.abs(t.distanceY)>1.5*this.state.options.minDistance):(n=Math.abs(t.distanceY)>this.state.options.minDistance,r=Math.abs(t.distanceX)>1.5*this.state.options.minDistance),n?(this.state.dragPointer=c(e),i(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):r&&this.cancel())},dispatchDragMove:t.throttle(function(e){this.state.isRunning&&(i(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e){this.state.dragPointer&&(i(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}),r("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){if(Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance){var n="left"==t.directionX?"$md.swipeleft":"$md.swiperight";this.dispatchEvent(e,n)}}});var a;return a={handler:r,register:o}}]).factory("$$MdGestureHandler",["$$rAF",function(){function e(e){this.name=e,this.state={}}function t(e,t,n){n=n||g;var r=new angular.element.Event(t);r.$material=!0,r.pointer=n,r.srcEvent=e,angular.extend(r,{clientX:n.x,clientY:n.y,screenX:n.x,screenY:n.y,pageX:n.x,pageY:n.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),angular.element(n.target).trigger(r)}function n(e,t,n){n=n||g;var r;"click"===t?(r=document.createEvent("MouseEvents"),r.initMouseEvent("click",!0,!0,window,e.detail,n.x,n.y,n.x,n.y,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget||null)):(r=document.createEvent("CustomEvent"),r.initCustomEvent(t,!0,!0,{})),r.$material=!0,r.pointer=n,r.srcEvent=e,n.target.dispatchEvent(r)}return e.prototype={onStart:angular.noop,onMove:angular.noop,onEnd:angular.noop,onCancel:angular.noop,options:{},dispatchEvent:"undefined"!=typeof window.jQuery&&angular.element===window.jQuery?t:n,start:function(e,t){if(!this.state.isRunning){var n=this.getNearestParent(e.target),r=n&&n.$mdGesture[this.name]||{};this.state={isRunning:!0,options:angular.extend({},this.options,r),registeredParent:n},this.onStart(e,t)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}},registerElement:function(e,t){function n(){delete e[0].$mdGesture[r.name],e.off("$destroy",n)}var r=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),n}},e}])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(){function e(e){function t(e){return c.optionsFactory=e.options,c.methods=(e.methods||[]).concat(a),d}function n(e,t){return i[e]=t,d}function r(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return c.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},d}function o(t,n,r){function o(e){return e&&e._options&&(e=e._options),s.show(angular.extend({},l,e))}function a(t,n){var o={};return o[e]=m,r.invoke(t||function(){return n},{},o)}var d,l,s=t(),m={hide:s.hide,cancel:s.cancel,show:o};return d=c.methods||[],l=a(c.optionsFactory,{}),angular.forEach(i,function(e,t){m[t]=e}),angular.forEach(c.presets,function(e,t){function n(e){this._options=angular.extend({},r,e)}var r=a(e.optionsFactory,{}),o=(e.methods||[]).concat(d);if(angular.extend(r,{$type:t}),angular.forEach(o,function(e){n.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var i="show"+t.charAt(0).toUpperCase()+t.slice(1);m[i]=function(e){var n=m[t](e);return m.show(n)}}m[t]=function(t){return arguments.length&&e.argOption&&!angular.isObject(t)&&!angular.isArray(t)?(new n)[e.argOption](t):new n(t)}}),m}var a=["onHide","onShow","onRemove"],i={},c={presets:{}},d={setDefaults:t,addPreset:r,addMethod:n,$get:o};return d.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),o.$inject=["$$interimElement","$animate","$injector"],d}function t(e,t,n,r,o,a,i,c,d){function l(e){return e&&angular.isString(e)?e.replace(/\{\{/g,s).replace(/}}/g,m):e}var s=i.startSymbol(),m=i.endSymbol(),u="{{"===s&&"}}"===m,f=u?angular.identity:l;return function(){function i(e){if(p.length)return u.cancel().then(function(){return i(e)});var t=new m(e);return p.push(t),t.show().then(function(){return t.deferred.promise})}function l(e){var t=p.shift();return t&&t.remove().then(function(){t.deferred.resolve(e)})}function s(e){var n=p.shift();return t.when(n&&n.remove().then(function(){n.deferred.reject(e)}))}function m(i){var l,s,m,p,h;return i=i||{},i=angular.extend({preserveScope:!1,scope:i.scope||n.$new(i.isolateScope),onShow:function(e,t,n){return a.enter(t,n.parent)},onRemove:function(e,n){return n&&a.leave(n)||t.when()}},i),i.template&&(i.template=f(i.template)),l={options:i,deferred:t.defer(),show:function(){var n;return n=i.skipCompile?t(function(e){e({locals:{},link:function(){return i.element}})}):c.compile(i),p=n.then(function(n){function a(){i.hideDelay&&(s=r(u.cancel,i.hideDelay))}angular.extend(n.locals,l.options),m=n.link(i.scope),angular.isFunction(i.parent)?i.parent=i.parent(i.scope,m,i):angular.isString(i.parent)&&(i.parent=angular.element(e[0].querySelector(i.parent))),(i.parent||{}).length||(i.parent=o.find("body"),i.parent.length||(i.parent=o)),i.themable&&d(m);var c=i.onShow(i.scope,m,i);return t.when(c).then(function(){(i.onComplete||angular.noop)(i.scope,m,i),a()})},function(e){p=!0,l.deferred.reject(e)})},cancelTimeout:function(){s&&(r.cancel(s),s=void 0)},remove:function(){return l.cancelTimeout(),h=t.when(p).then(function(){var e=m?i.onRemove(i.scope,m,i):!0;return t.when(e).then(function(){i.preserveScope||i.scope.$destroy(),h=!0})})}}}var u,p=[];return u={show:i,hide:l,cancel:s}}}return e.$get=t,t.$inject=["$document","$q","$rootScope","$timeout","$rootElement","$animate","$interpolate","$mdCompiler","$mdTheming"],e}angular.module("material.core").provider("$$interimElement",e)}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t){function n(e){return e&&""!==e}var r,o=[],a={};return r={notFoundError:function(t){e.error("No instance found for handle",t)},getInstances:function(){return o},get:function(e){if(!n(e))return null;var t,r,a;for(t=0,r=o.length;r>t;t++)if(a=o[t],a.$$mdHandle===e)return a;return null},register:function(e,t){function n(){var t=o.indexOf(e);-1!==t&&o.splice(t,1)}function r(){var n=a[t];n&&(n.resolve(e),delete a[t])}return t?(e.$$mdHandle=t,o.push(e),r(),n):angular.noop},when:function(e){if(n(e)){var o=t.defer(),i=r.get(e);return i?o.resolve(i):a[e]=o,o.promise}return t.reject("Invalid `md-component-id` value.")}}}angular.module("material.core").factory("$mdComponentRegistry",e),e.$inject=["$log","$q"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e){return{controller:angular.noop,link:function(t,n,r){r.hasOwnProperty("mdInkRippleCheckbox")?e.attachCheckboxBehavior(t,n):e.attachButtonBehavior(t,n)}}}function t(e,t){function n(e,t,n){return a(e,t,angular.extend({fullRipple:!0,isMenuItem:t.hasClass("md-menu-item"),center:!1,dimBackground:!0},n))}function r(e,t,n){return a(e,t,angular.extend({center:!0,dimBackground:!1,fitRipple:!0},n))}function o(e,t,n){return a(e,t,angular.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},n))}function a(n,r,o){function a(){var e=r.data("$mdRippleContainer");return e?e:(e=angular.element('<div class="md-ripple-container">'),r.append(e),r.data("$mdRippleContainer",e),e)}function i(e){function t(e){var t="#"===e.charAt(0)?e.substr(1):e,n=t.length/3,r=t.substr(0,n),o=t.substr(n,n),a=t.substr(2*n);return 1===n&&(r+=r,o+=o,a+=a),"rgba("+parseInt(r,16)+","+parseInt(o,16)+","+parseInt(a,16)+",0.1)"}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,"0.1)"):0===e.indexOf("rgb")?n(e):0===e.indexOf("#")?t(e):void 0}function c(e,n){g.splice(g.indexOf(e),1),0===g.length&&a().css({backgroundColor:""}),t(function(){e.remove()},n,!1)}function d(e){var t=g.indexOf(e),n=b[t]||{},r=g.length>1?!1:E,a=g.length>1?!1:$;r||n.animating||a?e.addClass("md-ripple-visible"):e&&(e.removeClass("md-ripple-visible"),o.outline&&e.css({width:f+"px",height:f+"px",marginLeft:-1*f+"px",marginTop:-1*f+"px"}),c(e,o.outline?450:650))}function l(n,c){function l(e){var t=angular.element('<div class="md-ripple" data-counter="'+h++ +'">');return g.unshift(t),b.unshift({animating:!0}),u.append(t),e&&t.css(e),t}function s(e,t){var n,r,a,i=u.prop("offsetWidth"),c=u.prop("offsetHeight");return o.isMenuItem?r=Math.sqrt(Math.pow(i,2)+Math.pow(c,2)):o.outline?(a=M.getBoundingClientRect(),e-=a.left,t-=a.top,i=Math.max(e,i-e),c=Math.max(t,c-t),r=2*Math.sqrt(Math.pow(i,2)+Math.pow(c,2))):(n=o.fullRipple?1.1:.8,r=Math.sqrt(Math.pow(i,2)+Math.pow(c,2))*n,o.fitRipple&&(r=Math.min(c,i,r))),r}function m(e,t,n){function r(e){return e.replace("rgba","rgb").replace(/,[^\),]+\)/,")")}var a,i={backgroundColor:r(T),borderColor:r(T),width:e+"px",height:e+"px"};return o.outline?(i.width=0,i.height=0):i.marginLeft=i.marginTop=e*-.5+"px",o.center?i.left=i.top="50%":(a=M.getBoundingClientRect(),i.left=Math.round((t-a.left)/u.prop("offsetWidth")*100)+"%",i.top=Math.round((n-a.top)/u.prop("offsetHeight")*100)+"%"),i}T=i(r.attr("md-ink-ripple"))||i(e.getComputedStyle(o.colorElement[0]).color||"rgb(0, 0, 0)");var u=a(),p=s(n,c),v=m(p,n,c),E=l(v),$=g.indexOf(E),A=b[$]||{};return f=p,A.animating=!0,t(function(){o.dimBackground&&u.css({backgroundColor:T}),E.addClass("md-ripple-placed md-ripple-scaled"),o.outline?E.css({borderWidth:.5*p+"px",marginLeft:p*-.5+"px",marginTop:p*-.5+"px"}):E.css({left:"50%",top:"50%"}),d(E),t(function(){A.animating=!1,d(E)},o.outline?450:225,!1)},0,!1),E}function s(e){u()&&(l(e.pointer.x,e.pointer.y),$=!0)}function m(){$=!1;var e=g[g.length-1];t(function(){d(e)},0,!1)}function u(){function e(e){return e&&e.hasAttribute&&e.hasAttribute("disabled")}var t=M.parentNode,n=t&&t.parentNode,r=n&&n.parentNode;return!(e(M)||e(t)||e(n)||e(r))}if(r.controller("mdNoInk"))return angular.noop;o=angular.extend({colorElement:r,mousedown:!0,hover:!0,focus:!0,center:!1,mousedownPauseTime:150,dimBackground:!1,outline:!1,fullRipple:!0,isMenuItem:!1,fitRipple:!1},o);var f,p=r.controller("mdInkRipple")||{},h=0,g=[],b=[],v=r.attr("md-highlight"),E=!1,$=!1,M=r[0],A=r.attr("md-ripple-size"),T=i(r.attr("md-ink-ripple"))||i(e.getComputedStyle(o.colorElement[0]).color||"rgb(0, 0, 0)");switch(A){case"full":o.fullRipple=!0;break;case"partial":o.fullRipple=!1}return o.mousedown&&r.on("$md.pressdown",s).on("$md.pressup",m),p.createRipple=l,v&&n.$watch(v,function(e){E=e,E&&!g.length&&t(function(){l(0,0)},0,!1),angular.forEach(g,d)}),function(){r.off("$md.pressdown",s).off("$md.pressup",m),a().remove()}}return{attachButtonBehavior:n,attachCheckboxBehavior:r,attachTabBehavior:o,attach:a}}function n(){return function(){return{controller:angular.noop}}}angular.module("material.core").factory("$mdInkRipple",t).directive("mdInkRipple",e).directive("mdNoInk",n()).directive("mdNoBar",n()).directive("mdNoStretch",n()),e.$inject=["$mdInkRipple"],t.$inject=["$window","$timeout"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";angular.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900 A700",contrastStrongLightColors:"500 600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700 800"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200",contrastStrongLightColors:"300 400"},grey:{0:"#ffffff",50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1000:"#000000",A100:"#ffffff",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300",contrastStrongLightColors:"400 500"}})}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e){function t(e,t){return t=t||{},d[e]=o(e,t),s}function n(e,t){return o(e,angular.extend({},d[e]||{},t))}function o(e,t){var n=T.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function a(e,t){if(t=t||"default",l[e])return l[e];var n="string"==typeof t?l[t]:t,r=new i(e);return n&&angular.forEach(n.colors,function(e,t){r.colors[t]={name:e.name,hues:angular.extend({},e.hues)}}),l[e]=r,r}function i(e){function t(e){if(e=0===arguments.length?!0:!!e,e!==n.isDark){n.isDark=e,n.foregroundPalette=n.isDark?f:u,n.foregroundShadow=n.isDark?p:h;var t=n.isDark?A:M,r=n.isDark?M:A;return angular.forEach(t,function(e,t){var o=n.colors[t],a=r[t];if(o)for(var i in o.hues)o.hues[i]===a[i]&&(o.hues[i]=e[i])}),n}}var n=this;n.name=e,n.colors={},n.dark=t,t(!1),E.forEach(function(e){var t=(n.isDark?A:M)[e];n[e+"Palette"]=function(r,o){var a=n.colors[e]={name:r,hues:angular.extend({},t,o)};return Object.keys(a.hues).forEach(function(e){if(!t[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",n.name).replace("%3",r).replace("%4",Object.keys(t).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(t){if(-1==T.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",t).replace("%2",n.name).replace("%3",e).replace("%4",r).replace("%5",T.join(", ")))}),n},n[e+"Color"]=function(){var t=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+e+"Color() has been deprecated. Use $mdThemingProviderTheme."+e+"Palette() instead."),n[e+"Palette"].apply(n,t)}})}function m(e,t){function n(e){return void 0===e||""===e?!0:void 0!==l[e]}function r(t,n){void 0===n&&(n=t,t=void 0),void 0===t&&(t=e),r.inherit(n,n)}return r.inherit=function(r,o){function a(e){n(e)||t.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var o=r.data("$mdThemeName");o&&r.removeClass("md-"+o+"-theme"),r.addClass("md-"+e+"-theme"),r.data("$mdThemeName",e)}var i=o.controller("mdTheme"),c=r.attr("md-theme-watch");if((b||angular.isDefined(c))&&"false"!=c){var d=e.$watch(function(){return i&&i.$mdTheme||g},a);r.on("$destroy",d)}else{var l=i&&i.$mdTheme||g;a(l)}},r.registered=n,r.defaultTheme=function(){return g},r}d={},l={};var g="default",b=!1;return angular.extend(d,e),m.$inject=["$rootScope","$log"],s={definePalette:t,extendPalette:n,theme:a,setDefaultTheme:function(e){g=e},alwaysWatchTheme:function(e){b=e},$get:m,_LIGHT_DEFAULT_HUES:M,_DARK_DEFAULT_HUES:A,_PALETTES:d,_THEMES:l,_parseRules:r,_rgba:c}}function t(e,t,n){return{priority:100,link:{pre:function(r,o,a){var i={$setTheme:function(t){e.registered(t)||n.warn("attempted to use unregistered theme '"+t+"'"),i.$mdTheme=t}};o.data("$mdThemeController",i),i.$setTheme(t(a.mdTheme)(r)),a.$observe("mdTheme",i.$setTheme)}}}}function n(e){return e}function r(e,t,n){a(e,t),n=n.replace(/THEME_NAME/g,e.name);var r=[],o=e.colors[t],i=new RegExp(".md-"+e.name+"-theme","g"),l=new RegExp("('|\")?{{\\s*("+t+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),s=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?\s*\}\}'?"?/g,m=d[o.name];return n=n.replace(s,function(t,n,r,o){return"foreground"===n?"shadow"==r?e.foregroundShadow:e.foregroundPalette[r]||e.foregroundPalette["1"]:(0===r.indexOf("hue")&&(r=e.colors[n].hues[r]),c((d[e.colors[n].name][r]||"").value,o))}),angular.forEach(o.hues,function(t,o){var a=n.replace(l,function(e,n,r,o,a){return c(m[t]["color"===o?"value":"contrast"],a)});"default"!==o&&(a=a.replace(i,".md-"+e.name+"-theme.md-"+o)),r.push(a)}),r.join("")}function o(e){function t(e){var t=e.contrastDefaultColor,n=e.contrastLightColors||[],r=e.contrastStrongLightColors||[],o=e.contrastDarkColors||[];"string"==typeof n&&(n=n.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof o&&(o=o.split(" ")),delete e.contrastDefaultColor,delete e.contrastLightColors,delete e.contrastStrongLightColors,delete e.contrastDarkColors,angular.forEach(e,function(a,c){function d(){return"light"===t?o.indexOf(c)>-1?g:r.indexOf(c)>-1?v:b:n.indexOf(c)>-1?r.indexOf(c)>-1?v:b:g}if(!angular.isObject(a)){var l=i(a);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",a).replace("%2",e.name).replace("%3",c));e[c]={value:l,contrast:d()}}})}var n=e.has("$MD_THEME_CSS")?e.get("$MD_THEME_CSS"):"";angular.forEach(d,t);var o=n.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.length}).map(function(e){return e.trim()+"}"}),a={};E.forEach(function(e){a[e]=""});var c=new RegExp("md-("+E.join("|")+")","g");o.forEach(function(e){for(var t,n=(e.match(c),0);t=E[n];n++)if(e.indexOf(".md-"+t)>-1)return a[t]+=e;for(n=0;t=E[n];n++)if(e.indexOf(t)>-1)return a[t]+=e;return a[$]+=e});var s="";if(angular.forEach(l,function(e){E.forEach(function(t){s+=r(e,t,a[t]+"")}),e.colors.primary.name==e.colors.accent.name&&console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec.")}),!m){var u=document.createElement("style");u.innerHTML=s;var f=document.getElementsByTagName("head")[0];f.insertBefore(u,f.firstElementChild),m=!0}}function a(e,t){if(!d[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(d).join(", ")))}function i(e){if(angular.isArray(e)&&3==e.length)return e;if(/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==e.charAt(0)&&(e=e.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(e)){var t=e.length/3,n=e.substr(0,t),r=e.substr(t,t),o=e.substr(2*t);return 1===t&&(n+=n,r+=r,o+=o),[parseInt(n,16),parseInt(r,16),parseInt(o,16)]}}function c(e,t){return 4==e.length&&(e=angular.copy(e),t?e.pop():t=e.pop()),t&&("number"==typeof t||"string"==typeof t&&t.length)?"rgba("+e.join(",")+","+t+")":"rgb("+e.join(",")+")"}angular.module("material.core.theming",["material.core.theming.palette"]).directive("mdTheme",t).directive("mdThemable",n).provider("$mdTheming",e).run(o);var d,l,s,m,u={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.26)",4:"rgba(0,0,0,0.12)"},f={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.3)",4:"rgba(255,255,255,0.12)"},p="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",h="",g=i("rgba(0,0,0,0.87)"),b=i("rgba(255,255,255,0.87"),v=i("rgb(255,255,255)"),E=["primary","accent","warn","background"],$="primary",M={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"}},A={background:{"default":"500","hue-1":"300","hue-2":"600","hue-3":"800"}};E.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};M[e]||(M[e]=t),A[e]||(A[e]=t)});var T=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"];e.$inject=["$mdColorPalette"],t.$inject=["$mdTheming","$interpolate","$log"],n.$inject=["$mdTheming"],o.$inject=["$injector"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";angular.module("material.components.autocomplete",["material.core","material.components.icon"])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e){return e}angular.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",e),e.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(){return{restrict:"E"}}function t(e){function t(e,t,o,a,i,c,d,l,s,m){function u(n,r,a){h=i('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(n),h.on("click",function(){o(d.cancel)}),c.inherit(h,a.parent),e.enter(h,a.parent,null);var s=new p(r,a.parent);return a.bottomSheet=s,a.targetEvent&&angular.element(a.targetEvent.target).blur(),c.inherit(s.element,a.parent),a.disableParentScroll&&(a.lastOverflow=a.parent.css("overflow"),a.parent.css("overflow","hidden")),e.enter(s.element,a.parent).then(function(){var e=angular.element(r[0].querySelector("button")||r[0].querySelector("a")||r[0].querySelector("[ng-click]"));e.focus(),a.escapeToClose&&(a.rootElementKeyupCallback=function(e){e.keyCode===t.KEY_CODE.ESCAPE&&o(d.cancel)},l.on("keyup",a.rootElementKeyupCallback))})}function f(t,n,r){var o=r.bottomSheet;return e.leave(h),e.leave(o.element).then(function(){r.disableParentScroll&&(r.parent.css("overflow",r.lastOverflow),delete r.lastOverflow),o.cleanup(),r.targetEvent&&angular.element(r.targetEvent.target).focus()})}function p(e,a){function i(){e.css(t.CSS.TRANSITION_DURATION,"0ms")}function c(n){var o=n.pointer.distanceY;5>o&&(o=Math.max(-r,o/2)),e.css(t.CSS.TRANSFORM,"translate3d(0,"+(r+o)+"px,0)")}function l(r){if(r.pointer.distanceY>0&&(r.pointer.distanceY>20||Math.abs(r.pointer.velocityY)>n)){var a=e.prop("offsetHeight")-r.pointer.distanceY,i=Math.min(a/r.pointer.velocityY*.75,500);e.css(t.CSS.TRANSITION_DURATION,i+"ms"),o(d.cancel)}else e.css(t.CSS.TRANSITION_DURATION,""),e.css(t.CSS.TRANSFORM,"")}var s=m.register(a,"drag",{horizontal:!1});return a.on("$md.dragstart",i).on("$md.drag",c).on("$md.dragend",l),{element:e,cleanup:function(){s(),a.off("$md.dragstart",i).off("$md.drag",c).off("$md.dragend",l)}}}var h;return{themable:!0,targetEvent:null,onShow:u,onRemove:f,escapeToClose:!0,disableParentScroll:!0}}var n=.5,r=80;return t.$inject=["$animate","$mdConstant","$timeout","$$rAF","$compile","$mdTheming","$mdBottomSheet","$rootElement","$rootScope","$mdGesture"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","targetEvent"],options:t})}angular.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",t),t.$inject=["$$interimElementProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n){function r(e){return angular.isDefined(e.href)||angular.isDefined(e.ngHref)}function o(e,t){return r(t)?'<a class="md-button" ng-transclude></a>':'<button class="md-button" ng-transclude></button>'}function a(o,a,i){var c=a[0];t(a),e.attachButtonBehavior(o,a);var d=c.textContent.trim();d||n.expect(a,"aria-label"),r(i)&&angular.isDefined(i.ngDisabled)&&o.$watch(i.ngDisabled,function(e){a.attr("tabindex",e?-1:0)})}return{restrict:"EA",replace:!0,transclude:!0,template:o,link:a}}angular.module("material.components.button",["material.core"]).directive("mdButton",e),e.$inject=["$mdInkRipple","$mdTheming","$mdAria"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e){return{restrict:"E",link:function(t,n){e(n)}}}angular.module("material.components.card",["material.core"]).directive("mdCard",e),e.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o,a){function i(t,i){return i.type="checkbox",i.tabIndex=0,t.attr("role",i.type),function(t,i,d,l){function s(e){e.which===r.KEY_CODE.SPACE&&(e.preventDefault(),m(e))}function m(e){i[0].hasAttribute("disabled")||t.$apply(function(){f=!f,l.$setViewValue(f,e&&e.type),l.$render()})}function u(){f=l.$viewValue,f?i.addClass(c):i.removeClass(c)}l=l||a.fakeNgModel();var f=!1;o(i),d.ngChecked&&t.$watch(t.$eval.bind(t,d.ngChecked),l.$setViewValue.bind(l)),n.expectWithText(i,"aria-label"),e.link.pre(t,{on:angular.noop,0:{}},d,[l]),i.on("click",m).on("keypress",s),l.$render=u}}e=e[0];var c="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:i}}angular.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdInkRipple","$mdAria","$mdConstant","$mdTheming","$mdUtil"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e){function n(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",n],link:function(n,r){r[0];e(r),n.$broadcast("$mdContentLoaded",r),t(r[0])}}}function t(e){angular.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}angular.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t){return{restrict:"E",link:function(n,r){t(r),e(function(){var e=r[0].querySelector("md-content");e&&e.scrollHeight>e.clientHeight&&r.addClass("md-content-overflow")})}}}function t(e){function t(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}">',"<md-content>","<h2>{{ dialog.title }}</h2>","<p>{{ dialog.content }}</p>","</md-content>",'<div class="md-actions">','<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()">',"{{ dialog.cancel }}","</md-button>",'<md-button ng-click="dialog.hide()" class="md-primary">',"{{ dialog.ok }}","</md-button>","</div>","</md-dialog>"].join(""),controller:function(){this.hide=function(){e.hide(!0)},this.abort=function(){e.cancel()}},controllerAs:"dialog",bindToController:!0,theme:t.defaultTheme()}}function n(e,t,n,r,o,a,i,c,d,l,s,m){function u(n,o,i){function l(){var e=o[0].querySelector(".dialog-close");if(!e){var t=o[0].querySelectorAll(".md-actions button");e=t[t.length-1]}return angular.element(e)}i.parent=angular.element(i.parent),i.popInTarget=angular.element((i.targetEvent||{}).target);var s=l();if(p(o.find("md-dialog")),i.hasBackdrop){var u=i.parent[0]==a[0].body&&a[0].documentElement&&a[0].scrollTop?angular.element(a[0].documentElement):i.parent,f=u.prop("scrollTop");i.backdrop=angular.element('<md-backdrop class="md-dialog-backdrop md-opaque">'),d.inherit(i.backdrop,i.parent),r.enter(i.backdrop,i.parent),o.css("top",f+"px")}return i.disableParentScroll&&(i.lastOverflow=i.parent.css("overflow"),i.parent.css("overflow","hidden")),h(o,i.parent,i.popInTarget&&i.popInTarget.length&&i.popInTarget).then(function(){i.escapeToClose&&(i.rootElementKeyupCallback=function(t){t.keyCode===c.KEY_CODE.ESCAPE&&e(m.cancel)},t.on("keyup",i.rootElementKeyupCallback)),i.clickOutsideToClose&&(i.dialogClickOutsideCallback=function(t){t.target===o[0]&&e(m.cancel)},o.on("click",i.dialogClickOutsideCallback)),s.focus()})}function f(e,n,o){return o.backdrop&&r.leave(o.backdrop),o.disableParentScroll&&(o.parent.css("overflow",o.lastOverflow),delete o.lastOverflow),o.escapeToClose&&t.off("keyup",o.rootElementKeyupCallback),o.clickOutsideToClose&&n.off("click",o.dialogClickOutsideCallback),g(n,o.parent,o.popInTarget&&o.popInTarget.length&&o.popInTarget).then(function(){o.scope.$destroy(),n.remove(),o.popInTarget&&o.popInTarget.focus()})}function p(e){e.attr({role:"dialog"});var t=e.find("md-content");0===t.length&&(t=e),o.expectAsync(e,"aria-label",function(){var e=t.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")})}function h(e,t,n){var r=e.find("md-dialog");return t.append(e),b(r,n),l(function(){r.addClass("transition-in").css(c.CSS.TRANSFORM,"")}),i.transitionEndPromise(r)}function g(e,t,n){var r=e.find("md-dialog");return r.addClass("transition-out").removeClass("transition-in"),b(r,n),i.transitionEndPromise(r)}function b(e,t){if(t){var n=t[0].getBoundingClientRect(),r=e[0].getBoundingClientRect(),o=Math.min(.5,n.width/r.width),a=Math.min(.5,n.height/r.height);e.css(c.CSS.TRANSFORM,"translate3d("+(-r.left+n.left+n.width/2-r.width/2)+"px,"+(-r.top+n.top+n.height/2-r.height/2)+"px,0) scale("+o+","+a+")")}}return{hasBackdrop:!0,isolateScope:!0,onShow:u,onRemove:f,clickOutsideToClose:!0,escapeToClose:!0,targetEvent:null,disableParentScroll:!0,transformTemplate:function(e){return'<div class="md-dialog-container">'+e+"</div>"}}}return t.$inject=["$mdDialog","$mdTheming"],n.$inject=["$timeout","$rootElement","$compile","$animate","$mdAria","$document","$mdUtil","$mdConstant","$mdTheming","$$rAF","$q","$mdDialog"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent"],options:n}).addPreset("alert",{methods:["title","content","ariaLabel","ok","theme"],options:t}).addPreset("confirm",{methods:["title","content","ariaLabel","ok","cancel","theme"],options:t})}angular.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",t),e.$inject=["$$rAF","$mdTheming"],t.$inject=["$$interimElementProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(){}function t(t){return{restrict:"E",link:t,controller:[e]}}angular.module("material.components.divider",["material.core"]).directive("mdDivider",t),t.$inject=["$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,n,r,o){function a(t,a,i,c){function d(){for(var e in n.MEDIA)o(e),o.getQuery(n.MEDIA[e]).addListener(M);return o.watchResponsiveAttributes(["md-cols","md-row-height"],i,s)}function l(){A();for(var e in n.MEDIA)o.getQuery(n.MEDIA[e]).removeListener(M)}function s(e){null==e?c.invalidateLayout():o(e)&&c.invalidateLayout()}function m(){var e=p(),n=g(),o=E(),i=v(),c=b(),d=r(n,h(),p()).map(function(t,r){return{grid:{element:a,style:f(n,r,c,o,i)},tiles:t.map(function(t,a){return{element:angular.element(e[a]),style:u(t.position,t.spans,n,r,c,o,i)}})}}).reflow().performance();t.mdOnLayout({$event:{performance:d}})}function u(e,t,n,r,o,a,i){var c=1/n*100,d=1===n?0:(n-1)/n,l=T({share:c,gutterShare:d,gutter:o}),s={left:w({unit:l,offset:e.col,gutter:o}),width:k({unit:l,span:t.col,gutter:o}),paddingTop:"",marginTop:"",top:"",height:""};switch(a){case"fixed":s.top=w({unit:i,offset:e.row,gutter:o}),s.height=k({unit:i,span:t.row,gutter:o});break;case"ratio":var m=c*(1/i),u=T({share:m,gutterShare:d,gutter:o});s.paddingTop=k({unit:u,span:t.row,gutter:o}),s.marginTop=w({unit:u,offset:e.row,gutter:o});break;case"fit":var f=1===r?0:(r-1)/r,m=1/r*100,u=T({share:m,gutterShare:f,gutter:o});s.top=w({unit:u,offset:e.row,gutter:o}),s.height=k({unit:u,span:t.row,gutter:o})}return s}function f(e,t,n,r,o){var a={height:"",paddingBottom:""};switch(r){case"fixed":a.height=k({unit:o,span:t,gutter:n});break;case"ratio":var i=1===e?0:(e-1)/e,c=1/e*100,d=c*(1/o),l=T({share:d,gutterShare:i,gutter:n});a.paddingBottom=k({unit:l,span:t,gutter:n});break;case"fit":}return a}function p(){return c.tiles.map(function(e){return e.element})}function h(){return c.tiles.map(function(e){return{row:parseInt(o.getResponsiveAttribute(e.attrs,"md-rowspan"),10)||1,col:parseInt(o.getResponsiveAttribute(e.attrs,"md-colspan"),10)||1}})}function g(){var e=parseInt(o.getResponsiveAttribute(i,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e}function b(){return $(o.getResponsiveAttribute(i,"md-gutter")||1)}function v(){var e=o.getResponsiveAttribute(i,"md-row-height");switch(E()){case"fixed":return $(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function E(){var e=o.getResponsiveAttribute(i,"md-row-height");return"fit"==e?"fit":-1!==e.indexOf(":")?"ratio":"fixed"}function $(e){return/\D$/.test(e)?e:e+"px"}a.attr("role","list"),c.layoutDelegate=m;var M=angular.bind(c,c.invalidateLayout),A=d();t.$on("$destroy",l);var T=e("{{ share }}% - ({{ gutter }} * {{ gutterShare }})"),w=e("calc(({{ unit }}) * {{ offset }} + {{ offset }} * {{ gutter }})"),k=e("calc(({{ unit }}) * {{ span }} + ({{ span }} - 1) * {{ gutter }})")}return{restrict:"E",controller:t,scope:{mdOnLayout:"&"},link:a}}function t(e){this.invalidated=!1,this.$timeout_=e,this.tiles=[],this.layoutDelegate=angular.noop}function n(e){function t(t,n){var a,i,c,d,l,s,i;return d=e.time(function(){i=r(t,n)}),a={layoutInfo:function(){return i},map:function(t){return l=e.time(function(){var e=a.layoutInfo();c=t(e.positioning,e.rowCount)}),a},reflow:function(t){return s=e.time(function(){var e=t||o;e(c.grid,c.tiles)}),a},performance:function(){return{tileCount:n.length,layoutTime:d,mapTime:l,reflowTime:s,totalTime:d+l+s}}}}function n(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function r(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var i=0,s=0;s-i<t.col;)c>=e?r():(i=l.indexOf(0,c),-1!==i&&-1!==(s=a(i+1))?c=s+1:(i=s=0,r()));return o(i,t.col,t.row),c=i+t.col,{col:i,row:d}}function r(){c=0,d++,o(0,e,-1)}function o(e,t,n){for(var r=e;e+t>r;r++)l[r]=Math.max(l[r]+n,0)}function a(e){var t;for(t=e;t<l.length;t++)if(0!==l[t])return t;return t===l.length?t:void 0}function i(){for(var t=[],n=0;e>n;n++)t.push(0);return t}var c=0,d=0,l=i();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:d+Math.max.apply(Math,l)}}var o=n;return t.animateWith=function(e){o=angular.isFunction(e)?e:n},t}function r(e){function t(t,n,r,o){n.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],r,angular.bind(o,o.invalidateLayout));o.addTile(n,r,t.$parent.$index),t.$on("$destroy",function(){a(),o.removeTile(n,r)})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},link:t}}function o(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}angular.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",r).directive("mdGridTileFooter",o).directive("mdGridTileHeader",o).factory("$mdGridLayout",n),e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia","$mdUtil"],t.$inject=["$timeout"],t.prototype={addTile:function(e,t,n){var r={element:e,attrs:t};angular.isUndefined(n)?this.tiles.push(r):this.tiles.splice(n,0,r),this.invalidateLayout()},removeTile:function(e,t){var n=this._findTileIndex(t);-1!==n&&(this.tiles.splice(n,1),this.invalidateLayout())},invalidateLayout:function(){this.invalidated||(this.invalidated=!0,this.$timeout_(angular.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate()}finally{this.invalidated=!1}},_findTileIndex:function(e){for(var t=0;t<this.tiles.length;t++)if(this.tiles[t].attrs==e)return t;return-1}},n.$inject=["$mdUtil"],r.$inject=["$mdMedia"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n){function r(e,t){return t.mdFontIcon?'<span class="md-font" ng-class="fontIcon"></span>':""}function o(r,o,a){function i(){var e=o.parent();return e.attr("aria-label")||e.text()?!0:e.parent().attr("aria-label")||e.parent().text()?!0:!1}t(o);var c=a.alt||r.fontIcon||r.svgIcon,d=a.$normalize(a.$attr.mdSvgIcon||a.$attr.mdSvgSrc||"");""==a.alt||i()?n.expect(o,"aria-hidden","true"):(n.expect(o,"aria-label",c),n.expect(o,"role","img")),d&&a.$observe(d,function(t){o.empty(),t&&e(t).then(function(e){o.append(e)})})}return{scope:{fontIcon:"@mdFontIcon",svgIcon:"@mdSvgIcon",svgSrc:"@mdSvgSrc"},restrict:"E",template:r,link:o}}angular.module("material.components.icon",["material.core"]).directive("mdIcon",e),e.$inject=["$mdIcon","$mdTheming","$mdAria"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(){}function t(e,t){this.url=e,this.iconSize=t||r.defaultIconSize}function n(e,t,n,r,o){function a(t){return function(n){return h[t]=m(n)?n:new u(n,e[t]),h[t].clone()}}function i(t){var r=e[t];return r?d(r.url).then(function(e){return new u(e,r)}):n.reject(t)}function c(t){function r(e){var r=t.slice(t.lastIndexOf(":")+1),o=e.querySelector("#"+r);return o?new u(o,a):n.reject(t)}var o=t.substring(0,t.lastIndexOf(":"))||"$default",a=e[o];return a?d(a.url).then(r):n.reject(t)}function d(e){return t.get(e,{cache:o}).then(function(e){for(var t=angular.element(e.data),n=0;n<t.length;++n)if("svg"==t[n].nodeName)return t[n]})}function l(e){var t;return angular.isString(e)&&(t="icon "+e+" not found",r.warn(t)),n.reject(t||e)}function s(e){var t=angular.isString(e)?e:e.message||e.data||e.statusText;return r.warn(t),n.reject(t)}function m(e){return angular.isDefined(e.element)&&angular.isDefined(e.config)}function u(e,t){"svg"!=e.tagName&&(e=angular.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]),e=angular.element(e),e.attr("xmlns")||e.attr("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=t,this.prepare()}function f(){var t=this.config?this.config.iconSize:e.defaultIconSize,n=angular.element(this.element);n.attr({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:n.attr("viewBox")||"0 0 "+t+" "+t}).css({"pointer-events":"none",display:"block"}),this.element=n}function p(){return angular.element(this.element[0].cloneNode(!0))}var h={},g=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;return u.prototype={clone:p,prepare:f},function(e){return e=e||"",h[e]?n.when(h[e].clone()):g.test(e)?d(e).then(a(e)):(-1==e.indexOf(":")&&(e="$default:"+e),i(e).catch(c).catch(l).catch(s).then(a(e)))}}angular.module("material.components.icon").provider("$mdIcon",e);var r={defaultIconSize:24};e.prototype={icon:function(e,n,o){return-1==e.indexOf(":")&&(e="$default:"+e),r[e]=new t(n,o),this},iconSet:function(e,n,o){return r[e]=new t(n,o),this},defaultIconSet:function(e,n){var o="$default";return r[o]||(r[o]=new t(e,n)),r[o].iconSize=n||r.defaultIconSize,this},defaultIconSize:function(e){return r.defaultIconSize=e,this},preloadIcons:function(e){var t=this,n=[{id:"tabs-arrow",url:"tabs-arrow.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="tabs-arrow"><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'},{id:"close",url:"close.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="close"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'},{id:"cancel",url:"cancel.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="cancel"><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'}];n.forEach(function(n){t.icon(n.id,n.url),e.put(n.url,n.svg)})},$get:["$http","$q","$log","$templateCache",function(e,t,o,a){return this.preloadIcons(a),new n(r,e,t,o,a)}]}}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){function e(e,t){function n(t,n){e(n)}function r(e,n,r){var o=this;o.isErrorGetter=r.mdIsError&&t(r.mdIsError),o.element=n,o.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},o.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},o.setInvalid=function(e){n.toggleClass("md-input-invalid",!!e)},e.$watch(function(){return o.label&&o.input},function(e){e&&!o.label.attr("for")&&o.label.attr("for",o.input.attr("id"))})}return r.$inject=["$scope","$element","$attrs"],{restrict:"E",link:n,controller:r}}function t(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,r){r&&!n.mdNoFloat&&(r.label=t,e.$on("$destroy",function(){r.label=null}))}}}function n(e,t){function n(n,r,o,a){function i(e){return l.setHasValue(!s.$isEmpty(e)),e}function c(){l.setHasValue(r.val().length>0||(r[0].validity||{}).badInput)}function d(){function o(e){return l(),e}function a(){d.style.height="auto",d.scrollTop=0;var e=i();e&&(d.style.height=e+"px")}function i(){var e=d.scrollHeight-d.offsetHeight;return d.offsetHeight+(e>0?e:0)}function c(){d.scrollTop=0;var e=d.scrollHeight-d.offsetHeight,t=d.offsetHeight+e;d.style.height=t+"px"}var d=r[0],l=e.debounce(a,1);s?(s.$formatters.push(o),s.$viewChangeListeners.push(o)):l(),r.on("keydown input",l),r.on("scroll",c),angular.element(t).on("resize",l),n.$on("$destroy",function(){angular.element(t).off("resize",l)})}var l=a[0],s=a[1]||e.fakeNgModel(),m=angular.isDefined(o.readonly);if(l){if(l.input)throw new Error("<md-input-container> can only have *one* <input> or <textarea> child element!");l.input=r,r.addClass("md-input"),r.attr("id")||r.attr("id","input_"+e.nextUid()),"textarea"===r[0].tagName.toLowerCase()&&d();var u=!1,f=l.isErrorGetter||function(){return s.$invalid&&(u||s.$touched)};n.$watch(f,l.setInvalid),s.$parsers.push(i),s.$formatters.push(i),r.on("input",c),m||r.on("focus",function(){u=!0,l.setFocused(!0),n.$evalAsync()}).on("blur",function(){l.setFocused(!1),c()}),n.$on("$destroy",function(){l.setFocused(!1),l.setHasValue(!1),l.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel"],link:n}}function r(e){function t(t,n,r,o){function a(e){return l.text((n.val()||e||"").length+"/"+i),e}var i,c=o[0],d=o[1],l=angular.element('<div class="md-char-counter">');r.$set("ngTrim","false"),d.element.append(l),c.$formatters.push(a),c.$viewChangeListeners.push(a),n.on("input keydown",function(){a()}),t.$watch(r.mdMaxlength,function(t){i=t,angular.isNumber(t)&&t>0?(l.parent().length||e.enter(l,d.element,angular.element(d.element[0].lastElementChild)),a()):e.leave(l)}),c.$validators["md-maxlength"]=function(e,t){return!angular.isNumber(i)||0>i?!0:(e||n.val()||t||"").length<=i}}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:t}}function o(){function e(e,t,n,r){if(r&&!angular.isDefined(r.element.attr("md-no-float"))){var o=n.placeholder;t.removeAttr("placeholder"),r.element.append('<div class="md-placeholder">'+o+"</div>")}}return{restrict:"A",require:"^^?mdInputContainer",link:e}}angular.module("material.components.input",["material.core"]).directive("mdInputContainer",e).directive("label",t).directive("input",n).directive("textarea",n).directive("mdMaxlength",r).directive("placeholder",o),e.$inject=["$mdTheming","$parse"],n.$inject=["$mdUtil","$window"],r.$inject=["$animate"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(){return{restrict:"E",link:function(e,t){t.attr({role:"list"})}}}function t(){return{restrict:"E",link:function(e,t){t.attr({role:"listitem"})}}}angular.module("material.components.list",["material.core"]).directive("mdList",e).directive("mdItem",t).directive("mdListItem",t)}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n){function r(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),o}function o(e,r,o){n(r);var d,l,s,m,u=r[0],f=u.querySelectorAll(".md-fill, .md-mask.md-full"),p=u.querySelectorAll(".md-fill.md-fix"),h=o.mdDiameter||48,g=h/48;u.style[t.CSS.TRANSFORM]="scale("+g.toString()+")",o.$observe("value",function(e){for(l=a(e),s=i[l],m=c[l],r.attr("aria-valuenow",l),d=0;d<f.length;d++)f[d].style[t.CSS.TRANSFORM]=s;for(d=0;d<p.length;d++)p[d].style[t.CSS.TRANSFORM]=m})}function a(e){return e>100?100:0>e?0:Math.ceil(e||0)}for(var i=new Array(101),c=new Array(101),d=0;101>d;d++){var l=d/100,s=Math.floor(180*l);i[d]="rotate("+s.toString()+"deg)",c[d]="rotate("+(2*s).toString()+"deg)"}return{restrict:"E",template:'<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',compile:r}}angular.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",e),e.$inject=["$$rAF","$mdConstant","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,n,r){function o(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),a}function a(o,a,c){r(a);var d=a[0].querySelector(".md-bar1").style,l=a[0].querySelector(".md-bar2").style,s=angular.element(a[0].querySelector(".md-container"));c.$observe("value",function(e){if("query"!=c.mdMode){var r=i(e);a.attr("aria-valuenow",r),l[n.CSS.TRANSFORM]=t[r]}}),c.$observe("mdBufferValue",function(e){d[n.CSS.TRANSFORM]=t[i(e)]}),e(function(){s.addClass("md-ready")})}function i(e){return e>100?100:0>e?0:Math.ceil(e||0)}return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:o}}angular.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$$rAF","$mdConstant","$mdTheming"];var t=function(){function e(e){var t=e/100,n=(e-100)/2;return"translateX("+n.toString()+"%) scale("+t.toString()+", 1)"}for(var t=new Array(101),n=0;101>n;n++)t[n]=e(n);return t}()}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n){function r(r,o,a,i){function c(n){switch(n.keyCode){case t.KEY_CODE.LEFT_ARROW:case t.KEY_CODE.UP_ARROW:n.preventDefault(),d.selectPrevious();break;case t.KEY_CODE.RIGHT_ARROW:case t.KEY_CODE.DOWN_ARROW:n.preventDefault(),d.selectNext();break;case t.KEY_CODE.ENTER:var r=angular.element(e.getClosest(o[0],"form"));r.length>0&&r.triggerHandler("submit")}}n(o);var d=i[0],l=i[1]||e.fakeNgModel();d.init(l),o.attr({role:"radiogroup",tabIndex:o.attr("tabindex")||"0"}).on("keydown",c)}function o(e){this._radioButtonRenderFns=[],this.$element=e}function a(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=angular.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return i(this.$element,1)},selectPrevious:function(){return i(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function i(t,n){var r=e.iterator(t[0].querySelectorAll("md-radio-button"),!0);if(r.count()){var o=function(e){return!angular.element(e).attr("disabled")},a=t[0].querySelector("md-radio-button.md-checked"),i=r[0>n?"previous":"next"](a,o)||r.first();angular.element(i).triggerHandler("click")}}return o.prototype=a(),{restrict:"E",controller:["$element",o],require:["mdRadioGroup","?ngModel"],link:{pre:r}}}function t(e,t,n){function r(r,a,i,c){function d(e){a[0].hasAttribute("disabled")||r.$apply(function(){c.setViewValue(i.value,e&&e.type)})}function l(){var e=c.getViewValue()==i.value;e!==m&&(m=e,a.attr("aria-checked",e),e?(a.addClass(o),c.setActiveDescendant(a.attr("id"))):a.removeClass(o))}function s(n,r){function o(){return i.id||"radio_"+t.nextUid()}r.ariaId=o(),n.attr({id:r.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var m;n(a),s(a,r),c.add(l),i.$observe("value",l),a.on("click",d).on("$destroy",function(){c.remove(l)})}var o="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:r}}angular.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",t),e.$inject=["$mdUtil","$mdConstant","$mdTheming"],t.$inject=["$mdAria","$mdUtil","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o){function a(r,a){var i=r.find("md-select-label").remove();i.length||(i=angular.element("<md-select-label><span></span></md-select-label>")),i.append('<span class="md-select-icon" aria-hidden="true"></span>'),i.addClass("md-select-label"),i.attr("id","select_label_"+t.nextUid()),r.find("md-content").length||r.append(angular.element("<md-content>").append(r.contents())),a.mdOnOpen&&r.find("md-content").prepend(angular.element("<md-progress-circular>").attr("md-mode","indeterminate").attr("ng-hide","$$loadingAsyncDone").wrap("<div>").parent());var c='<div class="md-select-menu-container"><md-select-menu '+(angular.isDefined(a.multiple)?"multiple":"")+">"+r.html()+"</md-select-menu></div>";return r.empty().append(i),n(r),function(n,r,a,i){function d(){if(f){var e=f.find("md-select-menu").controller("mdSelectMenu");h.setLabelText(e.selectedLabels())}}function l(){f=angular.element(c);var e=f.find("md-select-menu");e.data("$ngModelController",g),e.data("$mdSelectController",h),p=n.$new(),f=o(f)(p)}function s(e){var t=[32,13,38,40];-1!=t.indexOf(e.keyCode)&&(e.preventDefault(),m(e))}function m(){n.$evalAsync(function(){u=!0,e.show({scope:p,preserveScope:!0,skipCompile:!0,element:f,target:r[0],hasBackdrop:!0,loadingAsync:a.mdOnOpen?n.$eval(a.mdOnOpen):!1}).then(function(){u=!1})})}var u,f,p,h=i[0],g=i[1],b=r.find("md-select-label"),v=0!==b.text().length;l();var E=g.$render;g.$render=function(){E(),d()},h.setLabelText=function(e){if(!v){h.setIsPlaceholder(!e);var t=e||a.placeholder||"",n=v?b:b.children().eq(0);n.text(t)}},h.setIsPlaceholder=function(e){e?b.addClass("md-placeholder"):b.removeClass("md-placeholder")},n.$$postDigest(d),a.$observe("disabled",function(e){"string"==typeof e&&(e=!0),e?(r.attr("tabindex",-1),r.off("click",m),r.off("keydown",s)):(r.attr("tabindex",0),r.on("click",m),r.on("keydown",s))}),a.disabled||a.ngDisabled||(r.attr("tabindex",0),r.on("click",m),r.on("keydown",s)),r.attr({role:"combobox",id:"select_"+t.nextUid(),"aria-haspopup":!0,"aria-expanded":"false","aria-labelledby":b.attr("id")}),n.$on("$destroy",function(){u?e.cancel().then(function(){f.remove()}):f.remove()})}}r.startSymbol(),r.endSymbol();return{restrict:"E",require:["mdSelect","ngModel"],compile:a,controller:function(){}}}function t(e,t,n){function r(e,r,o,a){function i(){r.attr({id:"select_menu_"+t.nextUid(),role:"listbox","aria-multiselectable":l.isMultiple?"true":"false"})}function c(e){(13==e.keyCode||32==e.keyCode)&&d(e)}function d(n){var r=t.getClosest(n.target,"md-option"),o=r&&angular.element(r).data("$mdOptionController");if(r&&o){var a=l.hashGetter(o.value),i=angular.isDefined(l.selected[a]);e.$apply(function(){l.isMultiple?i?l.deselect(a):l.select(a,o.value):i||(l.deselect(Object.keys(l.selected)[0]),l.select(a,o.value)),l.refreshViewValue()})}}var l=a[0],s=a[1];n(r),r.on("click",d),r.on("keypress",c),s&&l.init(s),i()}function o(t,n,r){function o(){var e=d.ngModel.$modelValue||d.ngModel.$viewValue;if(angular.isArray(e)){var t=Object.keys(d.selected),n=e.map(d.hashGetter),r=t.filter(function(e){return-1===n.indexOf(e)});r.forEach(d.deselect),n.forEach(function(t,n){d.select(t,e[n])})}}function i(){var e=d.ngModel.$viewValue||d.ngModel.$modelValue;Object.keys(d.selected).forEach(d.deselect),d.select(d.hashGetter(e),e)}var d=this;d.isMultiple=angular.isDefined(n.multiple),d.selected={},d.options={},d.init=function(r){function a(e,t){return angular.isArray(e||t||[])}if(d.ngModel=r,r.$options&&r.$options.trackBy){var l={},s=e(r.$options.trackBy);d.hashGetter=function(e,n){return l.$value=e,s(n||t,l)}}else d.hashGetter=function(e){return angular.isObject(e)?"$$object_"+(e.$$mdSelectId||(e.$$mdSelectId=++c)):e};d.isMultiple?(r.$validators["md-multiple"]=a,r.$render=o,t.$watchCollection(n.ngModel,function(e){a(e)&&o(e)})):r.$render=i},d.selectedLabels=function(){var e=a(r[0].querySelectorAll("md-option[selected]"));return e.length?e.map(function(e){return e.textContent}).join(", "):""},d.select=function(e,t){var n=d.options[e];n&&n.setSelected(!0),d.selected[e]=t},d.deselect=function(e){var t=d.options[e];t&&t.setSelected(!1),delete d.selected[e]},d.addOption=function(e,t){if(angular.isDefined(d.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+t.value+'" found.');d.options[e]=t,angular.isDefined(d.selected[e])&&(d.select(e,t.value),d.refreshViewValue())},d.removeOption=function(e){delete d.options[e]},d.refreshViewValue=function(){var e,t=[];for(var n in d.selected)(e=d.options[n])?t.push(e.value):t.push(d.selected[n]);d.ngModel.$setViewValue(d.isMultiple?t:t[0])}}return o.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu","?ngModel"],controller:o,link:{pre:r}}}function n(e,t){function n(e,t){return e.append(angular.element('<div class="md-text">').append(e.contents())),void 0===t.tabindex&&e.attr("tabindex",0),r}function r(n,r,o,a){function i(e,t){var r=l.hashGetter(t,n),o=l.hashGetter(e,n);d.hashKey=o,d.value=e,l.removeOption(r,d),l.addOption(o,d)}function c(){r.attr({role:"option","aria-selected":"false",id:"select_option_"+t.nextUid()})}var d=a[0],l=a[1];if(angular.isDefined(o.ngValue))n.$watch(o.ngValue,i);else{if(!angular.isDefined(o.value))throw new Error("Expected either ngValue or value attr");i(o.value)}o.$observe("selected",function(e){angular.isDefined(e)&&(e?(l.isMultiple||l.deselect(Object.keys(l.selected)[0]),l.select(d.hashKey,d.value)):l.deselect(d.hashKey),l.refreshViewValue(),l.ngModel.$render())}),e.attachButtonBehavior(n,r),c(),n.$on("$destroy",function(){l.removeOption(d.hashKey,d)})}function o(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return o.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:o,compile:n}}function r(){function e(e,t){var n=e.find("label");n.length||(n=angular.element("<label>"),e.prepend(n)),t.label&&n.text(t.label)}return{restrict:"E",compile:e}}function o(e){function t(e,t,o,c,d,l){function s(n,r,i){function s(){i.selectEl.attr("aria-labelledby",i.target.attr("id")),i.target.attr("aria-owns",i.selectEl.attr("id")),i.target.attr("aria-expanded","true")}function m(){function o(e){var t=a(f),n=t.indexOf(i.focusedNode);-1===n?n=0:"next"===e&&n<t.length-1?n++:"prev"===e&&n>0&&n--;var r=i.focusedNode=t[n];r&&r.focus()}function d(){o("next")}function l(){o("prev")}function s(){i.restoreFocus=!0,n.$evalAsync(function(){e.hide(m.ngModel.$viewValue)})}if(!i.isRemoved){var m=i.selectEl.controller("mdSelectMenu")||{};r.addClass("md-clickable"),i.backdrop&&i.backdrop.on("click",function(t){t.preventDefault(),t.stopPropagation(),i.restoreFocus=!1,n.$apply(e.cancel)}),i.selectEl.on("keydown",function(r){switch(r.keyCode){case t.KEY_CODE.SPACE:case t.KEY_CODE.ENTER:var o=c.getClosest(r.target,"md-option");o&&(i.selectEl.triggerHandler({type:"click",target:o}),r.preventDefault());break;case t.KEY_CODE.TAB:case t.KEY_CODE.ESCAPE:r.preventDefault(),i.restoreFocus=!0,n.$apply(e.cancel)}}),i.selectEl.on("keydown",function(e){switch(e.keyCode){case t.KEY_CODE.UP_ARROW:return l();case t.KEY_CODE.DOWN_ARROW:return d()}}),m.isMultiple||(i.selectEl.on("click",s),i.selectEl.on("keydown",function(e){(32==e.keyCode||13==e.keyCode)&&s()}))}}if(!i.target)throw new Error('$mdSelect.show() expected a target element in options.target but got "'+i.target+'"!');angular.extend(i,{isRemoved:!1,target:angular.element(i.target),parent:angular.element(i.parent),selectEl:r.find("md-select-menu"),contentEl:r.find("md-content"),backdrop:i.hasBackdrop&&angular.element('<md-backdrop class="md-select-backdrop">')}),s(),r.removeClass("md-leave");var f=i.selectEl[0].getElementsByTagName("md-option");return i.loadingAsync&&i.loadingAsync.then&&i.loadingAsync.then(function(){n.$$loadingAsyncDone=!0,o(function(){o(function(){i.isRemoved||u(n,r,i)})})}),i.disableParentScroll&&(i.disableTarget=i.parent.find("md-content"),i.disableTarget.length||(i.disableTarget=i.parent),i.lastOverflow=i.disableTarget.css("overflow"),i.disableTarget.css("overflow","hidden")),l(m,75,!1),i.backdrop&&(d.inherit(i.backdrop,i.parent),i.parent.append(i.backdrop)),i.parent.append(r),o(function(){o(function(){i.isRemoved||u(n,r,i)})}),c.transitionEndPromise(i.selectEl,{timeout:350})}function m(e,t,n){n.isRemoved=!0,t.addClass("md-leave").removeClass("md-clickable"),n.target.attr("aria-expanded","false"),n.disableParentScroll&&c.floatingScrollbars()&&(n.disableTarget.css("overflow",n.lastOverflow),delete n.lastOverflow,delete n.disableTarget);var r=n.selectEl.controller("mdSelect");return r&&r.setLabelText(n.selectEl.controller("mdSelectMenu").selectedLabels()),c.transitionEndPromise(t,{timeout:350}).then(function(){t.removeClass("md-active"),n.parent[0].removeChild(t[0]),n.backdrop&&n.backdrop.remove(),n.restoreFocus&&n.target.focus()})}function u(e,a,d){var l,s=a[0],m=d.target[0],u=d.parent[0],f=d.selectEl[0],p=d.contentEl[0],h=u.getBoundingClientRect(),g=c.clientRect(m,u),b=!1,v={left:u.scrollLeft+i,top:u.scrollTop+i,bottom:h.height+u.scrollTop-i,right:h.width-i},E={top:g.top-v.top,left:g.left-v.left,right:v.right-(g.left+g.width),bottom:v.bottom-(g.top+g.height)},$=h.width-2*i,M=p.scrollHeight>p.offsetHeight,A=f.querySelector("md-option[selected]"),T=f.getElementsByTagName("md-option"),w=f.getElementsByTagName("md-optgroup");l=A?A:w.length?w[0]:T.length?T[0]:p.firstElementChild||p,p.offsetWidth>$&&(p.style["max-width"]=$+"px"),b&&(p.style["min-width"]=g.width+"px"),M&&f.classList.add("md-overflow");var k=f.getBoundingClientRect(),y=r(l);if(l){var x=window.getComputedStyle(l);y.paddingLeft=parseInt(x.paddingLeft,10)||0,y.paddingRight=parseInt(x.paddingRight,10)||0}var C=l;if("MD-OPTGROUP"===(C.tagName||"").toUpperCase()&&(C=T[0]||p.firstElementChild||p),C&&(d.focusedNode=C,C.focus()),M){var N=p.offsetHeight/2;p.scrollTop=y.top+y.height/2-N,E.top<N?p.scrollTop=Math.min(y.top,p.scrollTop+N-E.top):E.bottom<N&&(p.scrollTop=Math.max(y.top+y.height-k.height,p.scrollTop-N+E.bottom))}var _,S,H;b?(_=g.left,S=g.top+g.height,H="50% 0",S+k.height>v.bottom&&(S=g.top-k.height,H="50% 100%")):(_=g.left+y.left-y.paddingLeft,S=g.top+g.height/2-y.height/2-y.top+p.scrollTop,H=y.left+g.width/2+"px "+(y.top+y.height/2-p.scrollTop)+"px 0px",s.style.minWidth=g.width+y.paddingLeft+y.paddingRight+"px");var D=s.getBoundingClientRect();s.style.left=n(v.left,_,v.right-D.width)+"px",s.style.top=n(v.top,S,v.bottom-D.height)+"px",f.style[t.CSS.TRANSFORM_ORIGIN]=H,f.style[t.CSS.TRANSFORM]="scale("+Math.min(g.width/k.width,1)+","+Math.min(g.height/k.height,1)+")",o(function(){a.addClass("md-active"),f.style[t.CSS.TRANSFORM]=""})}return{parent:"body",onShow:s,onRemove:m,hasBackdrop:!0,disableParentScroll:c.floatingScrollbars(),themable:!0}}function n(e,t,n){return Math.min(n,Math.max(t,e))}function r(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}return t.$inject=["$mdSelect","$mdConstant","$$rAF","$mdUtil","$mdTheming","$timeout"],e("$mdSelect").setDefaults({methods:["target"],options:t})}function a(e){for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t}var i=8,c=0;angular.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",e).directive("mdSelectMenu",t).directive("mdOption",n).directive("mdOptgroup",r).provider("$mdSelect",o),e.$inject=["$mdSelect","$mdUtil","$mdTheming","$interpolate","$compile","$parse"],t.$inject=["$parse","$mdUtil","$mdTheming"],n.$inject=["$mdInkRipple","$mdUtil"],o.$inject=["$$interimElementProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t){return function(n){var r="SideNav '"+n+"' is not available!",o=e.get(n);return o||e.notFoundError(n),{isOpen:function(){return o&&o.isOpen()},isLockedOpen:function(){return o&&o.isLockedOpen()},toggle:function(){return o?o.toggle():t.reject(r)},open:function(){return o?o.open():t.reject(r)},close:function(){return o?o.close():t.reject(r)}}}}function t(e,t,n,r,o,a,i,c,d,l){function s(s,m,u,f){function p(e,n){s.isLockedOpen=e,e===n?m.toggleClass("md-locked-open",!!e):t[e?"addClass":"removeClass"](m,"md-locked-open"),T.toggleClass("md-locked-open",!!e)}function h(e){var n=m.parent();return n[e?"on":"off"]("keydown",b),T[e?"on":"off"]("click",v),e&&(E=l[0].activeElement),$=d.all([t[e?"enter":"leave"](T,n),t[e?"removeClass":"addClass"](m,"md-closed").then(function(){s.isOpen&&m.focus()})])}function g(t){if(s.isOpen==t)return d.when(!0);var n=d.defer();return s.isOpen=t,e(function(){$.then(function(e){s.isOpen||(E&&E.focus(),E=null),n.resolve(e)})},0,!1),n.promise}function b(e){var t=e.keyCode===a.KEY_CODE.ESCAPE;return t?v(e):d.when(!0)}function v(e){return e.preventDefault(),e.stopPropagation(),f.close()}var E=null,$=d.when(!0),M=n(u.mdIsLockedOpen),A=function(){return M(s.$parent,{$media:function(e){return r.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),o(e)},$mdMedia:o})},T=i('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(s);m.on("$destroy",f.destroy),c.inherit(T,m),s.$watch(A,p),s.$watch("isOpen",h),f.$toggleOpen=g}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),s}}}function n(e,t,n,r,o){var a=this;a.$toggleOpen=function(){return o.when(e.isOpen)},a.isOpen=function(){return!!e.isOpen},a.isLockedOpen=function(){return!!e.isLockedOpen},a.open=function(){return a.$toggleOpen(!0)},a.close=function(){return a.$toggleOpen(!1)},a.toggle=function(){return a.$toggleOpen(!e.isOpen)},a.destroy=r.register(a,n.mdComponentId)}angular.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",t).controller("$mdSidenavController",n),e.$inject=["$mdComponentRegistry","$q"],t.$inject=["$timeout","$animate","$parse","$log","$mdMedia","$mdConstant","$compile","$mdTheming","$q","$document"],n.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o,a,i,c){function d(e){return e.attr({tabIndex:0,role:"slider"}),n.expect(e,"aria-label"),l}function l(n,d,l,s){function m(){b(),M(),g()}function u(e){G=parseFloat(e),d.attr("aria-valuemin",e),m()}function f(e){z=parseFloat(e),d.attr("aria-valuemax",e),m()}function p(e){W=parseFloat(e),g()}function h(e){d.attr("aria-disabled",!!e)}function g(){if(angular.isDefined(l.mdDiscrete)){var e=Math.floor((z-G)/W);if(!X){var n=t.getComputedStyle(V[0]);X=angular.element('<canvas style="position:absolute;">'),Q=X[0].getContext("2d"),Q.fillStyle=n.backgroundColor||"black",V.append(X)}var r=v();X[0].width=r.width,X[0].height=r.height;for(var o,a=0;e>=a;a++)o=Math.floor(r.width*(a/e)),Q.fillRect(o-1,0,2,r.height)}}function b(){Z=B[0].getBoundingClientRect()}function v(){return U(),Z}function E(e){if(!d[0].hasAttribute("disabled")){var t;e.keyCode===o.KEY_CODE.LEFT_ARROW?t=-W:e.keyCode===o.KEY_CODE.RIGHT_ARROW&&(t=W),t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),n.$evalAsync(function(){$(s.$viewValue+t)}))}}function $(e){s.$setViewValue(A(T(e)))}function M(){isNaN(s.$viewValue)&&(s.$viewValue=s.$modelValue);var e=(s.$viewValue-G)/(z-G);n.modelValue=s.$viewValue,d.attr("aria-valuenow",s.$viewValue),w(e),L.text(s.$viewValue)}function A(e){return angular.isNumber(e)?Math.max(G,Math.min(z,e)):void 0}function T(e){return angular.isNumber(e)?Math.round(e/W)*W:void 0}function w(e){q.css("width",100*e+"%"),F.css("left",100*e+"%"),d.toggleClass("md-min",0===e)}function k(e){if(!j()){d.addClass("active"),d[0].focus(),b();var t=O(D(e.pointer.x)),r=A(T(t));n.$apply(function(){$(r),w(R(r))})}}function y(e){if(!j()){d.removeClass("dragging active");var t=O(D(e.pointer.x)),r=A(T(t));n.$apply(function(){$(r),M()})}}function x(e){j()||(J=!0,e.stopPropagation(),d.addClass("dragging"),_(e))}function C(e){J&&(e.stopPropagation(),_(e))}function N(e){J&&(e.stopPropagation(),J=!1)}function _(e){et?H(e.pointer.x):S(e.pointer.x)}function S(e){n.$evalAsync(function(){$(O(D(e)))})}function H(e){var t=O(D(e)),n=A(T(t));w(D(e)),L.text(n)}function D(e){return Math.max(0,Math.min(1,(e-Z.left)/Z.width))}function O(e){return G+e*(z-G)}function R(e){return(e-G)/(z-G)}a(d),s=s||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]};var I=l.ngDisabled&&c(l.ngDisabled),j=I?function(){return I(n.$parent)}:angular.noop,P=angular.element(d[0].querySelector(".md-thumb")),L=angular.element(d[0].querySelector(".md-thumb-text")),F=P.parent(),B=angular.element(d[0].querySelector(".md-track-container")),q=angular.element(d[0].querySelector(".md-track-fill")),V=angular.element(d[0].querySelector(".md-track-ticks")),U=r.throttle(b,5e3);l.min?l.$observe("min",u):u(0),l.max?l.$observe("max",f):f(100),l.step?l.$observe("step",p):p(1);var Y=angular.noop;l.ngDisabled&&(Y=n.$parent.$watch(l.ngDisabled,h)),i.register(d,"drag"),d.on("keydown",E).on("$md.pressdown",k).on("$md.pressup",y).on("$md.dragstart",x).on("$md.drag",C).on("$md.dragend",N),setTimeout(m);var K=e.throttle(m);angular.element(t).on("resize",K),n.$on("$destroy",function(){angular.element(t).off("resize",K),Y()}),s.$render=M,s.$viewChangeListeners.push(M),s.$formatters.push(A),s.$formatters.push(T);var G,z,W,X,Q,Z={};b();var J=!1,et=angular.isDefined(l.mdDiscrete)}return{scope:{},require:"?ngModel",template:'<div class="md-slider-wrapper">        <div class="md-track-container">          <div class="md-track"></div>          <div class="md-track md-track-fill"></div>          <div class="md-track-ticks"></div>        </div>        <div class="md-thumb-container">          <div class="md-thumb"></div>          <div class="md-focus-thumb"></div>          <div class="md-focus-ring"></div>          <div class="md-sign">            <span class="md-thumb-text"></span>          </div>          <div class="md-disabled-thumb"></div>        </div>      </div>',compile:d}}angular.module("material.components.slider",["material.core"]).directive("mdSlider",e),e.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o){function a(e){function n(e,t){t.addClass("md-sticky-clone"),t.css("top",p+"px");var n={element:e,clone:t};return f.items.push(n),m.parent().prepend(n.clone),u(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),u()}}function o(){f.items.forEach(a),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=m.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}d(e)}function a(e){var t=e.element[0];for(e.top=0,e.left=0;t&&t!==m[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t=t.offsetParent;e.height=e.element.prop("offsetHeight"),e.clone.css("margin-left",e.left+"px")}function i(){var e=m.prop("scrollTop"),t=e>(i.prevScrollTop||0);i.prevScrollTop=e,0===e?d(null):t&&f.next?f.next.top-e<=0?d(f.next):f.current&&(f.next.top-e<=f.next.height?s(f.current,f.next.top-f.next.height-e):s(f.current,null)):!t&&f.current&&(e<f.current.top&&d(f.prev),f.current&&f.next&&(e>=f.next.top-f.current.height?s(f.current,f.next.top-e-f.current.height):s(f.current,null)))}function d(e){if(f.current!==e){f.current&&(s(f.current,null),l(f.current,null)),e&&l(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],l(f.next,"next"),l(f.prev,"prev")}}function l(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function s(e,n){e&&(null===n||void 0===n?e.translateY&&(e.translateY=null,e.clone.css(t.CSS.TRANSFORM,"")):(e.translateY=n,e.clone.css(t.CSS.TRANSFORM,"translate3d("+e.left+"px,"+n+"px,0)")))}var m=e.$element,u=r.throttle(o);c(m),m.on("$scrollstart",u),m.on("$scroll",i);var f,p=m.prop("offsetTop");return f={prev:null,current:null,next:null,items:[],add:n,refreshElements:o}}function i(){var t,n=angular.element("<div>");e[0].body.appendChild(n[0]);for(var r=["sticky","-webkit-sticky"],o=0;o<r.length;++o)if(n.css({position:r[o],top:0,"z-index":2}),n.css("position")==r[o]){t=r[o];break}return n.remove(),t}function c(e){function t(){+o.now()-a>i?(n=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),r(t))}var n,a,i=200;e.on("scroll touchmove",function(){n||(n=!0,r(t),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),a=+o.now()})}var d=i();return function(e,t,n){var r=t.controller("mdContent");if(r)if(d)t.css({position:d,top:0,"z-index":2});else{var o=r.$element.data("$$sticky");o||(o=a(r),r.$element.data("$$sticky",o));var i=o.add(t,n||t.clone());e.$on("$destroy",i)}}}angular.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$document","$mdConstant","$compile","$$rAF","$mdUtil"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n){return{restrict:"E",replace:!0,transclude:!0,template:'<h2 class="md-subheader"><span class="md-subheader-content"></span></h2>',compile:function(r,o,a){var i=r[0].outerHTML;return function(r,o){function c(e){return angular.element(e[0].querySelector(".md-subheader-content"))}n(o),a(r,function(e){c(o).append(e)}),a(r,function(a){var d=t(angular.element(i))(r);n(d),c(d).append(a),e(r,o,d)})}}}}angular.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";var e=angular.module("material.components.swipe",[]);["SwipeLeft","SwipeRight"].forEach(function(t){var n="md"+t,r="$md."+t.toLowerCase();e.directive(n,["$parse",function(e){function t(t,o,a){var i=e(a[n]);o.on(r,function(e){t.$apply(function(){i(t,{$event:e})})})}return{restrict:"A",link:t}}])})}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o,a,i,c){function d(e,t){var r=l.compile(e,t);return e.addClass("md-dragging"),function(e,t,d,l){function s(n){p(e)||(n.stopPropagation(),t.addClass("md-dragging"),b={width:h.prop("offsetWidth")},t.removeClass("transition"))}function m(e){if(b){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/b.width,n=l.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),h.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),b.translate=n}}function u(e){if(b){e.stopPropagation(),t.removeClass("md-dragging"),h.css(o.CSS.TRANSFORM,"");var n=l.$viewValue?b.translate<.5:b.translate>.5;n&&f(!l.$viewValue),b=null}}function f(t){e.$apply(function(){l.$setViewValue(t),l.$render()})}l=l||n.fakeNgModel();var p=a(d.ngDisabled),h=angular.element(t[0].querySelector(".md-thumb-container")),g=angular.element(t[0].querySelector(".md-container"));i(function(){t.removeClass("md-dragging")}),r(e,t,d,l),angular.isDefined(d.ngDisabled)&&e.$watch(p,function(e){t.attr("tabindex",e?-1:0)}),c.register(g,"drag"),g.on("$md.dragstart",s).on("$md.drag",m).on("$md.dragend",u);var b}}var l=e[0];return{restrict:"E",transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:d}}angular.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","$mdTheming","$mdUtil","$document","$mdConstant","$parse","$$rAF","$mdGesture"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";angular.module("material.components.tabs",["material.core","material.components.icon"])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r){return{restrict:"E",replace:!0,scope:{fid:"@?mdFid",label:"@?",value:"=ngModel"},compile:function(o,a){return r.warn("<md-text-float> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"),angular.isUndefined(a.mdFid)&&(a.mdFid=t.nextUid()),{pre:function(e,t,r){var o=n(r.ngDisabled);e.isDisabled=function(){return o(e.$parent)},e.inputType=r.type||"text"},post:e}},template:'<md-input-group tabindex="-1"> <label for="{{fid}}" >{{label}}</label> <md-input id="{{fid}}" ng-disabled="isDisabled()" ng-model="value" type="{{inputType}}"></md-input></md-input-group>'}}function t(e){return{restrict:"CE",controller:["$element",function(t){e.warn("<md-input-group> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"),this.setFocused=function(e){t.toggleClass("md-input-focused",!!e)},this.setHasValue=function(e){t.toggleClass("md-input-has-value",e)}}]}}function n(e,t){return{restrict:"E",replace:!0,template:"<input >",require:["^?mdInputGroup","?ngModel"],link:function(e,n,r,o){function a(e){return e=angular.isUndefined(e)?n.val():e,angular.isDefined(e)&&null!==e&&""!==e.toString().trim()}if(o[0]){t.warn("<md-input> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer");var i=o[0],c=o[1];e.$watch(e.isDisabled,function(e){n.attr("aria-disabled",!!e),n.attr("tabindex",!!e)}),n.attr("type",r.type||n.parent().attr("type")||"text"),c&&c.$formatters.push(function(e){return i.setHasValue(a(e)),e}),n.on("input",function(){i.setHasValue(a())}).on("focus",function(){i.setFocused(!0)}).on("blur",function(){i.setFocused(!1),i.setHasValue(a())}),e.$on("$destroy",function(){i.setFocused(!1),i.setHasValue(!1)})}}}}angular.module("material.components.textField",["material.core"]).directive("mdInputGroup",t).directive("mdInput",n).directive("mdTextFloat",e),e.$inject=["$mdTheming","$mdUtil","$parse","$log"],t.$inject=["$log"],n.$inject=["$mdUtil","$log"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(){return{restrict:"E"}}function t(e){function t(e,t,r){function o(o,a,c){return n=c.content,a.addClass(c.position.split(" ").map(function(e){return"md-"+e}).join(" ")),c.parent.addClass(i(c.position)),c.onSwipe=function(t){a.addClass("md-"+t.type.replace("$md.","")),e(r.cancel)},a.on("$md.swipeleft $md.swiperight",c.onSwipe),t.enter(a,c.parent)}function a(e,n,r){return n.off("$md.swipeleft $md.swiperight",r.onSwipe),r.parent.removeClass(i(r.position)),t.leave(n)}function i(e){return"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom")}return{onShow:o,onRemove:a,position:"bottom left",themable:!0,hideDelay:3e3}}var n,r=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule"],options:t}).addPreset("simple",{argOption:"content",methods:["content","action","highlightAction","theme"],options:["$mdToast","$mdTheming",function(e,t){var r={template:['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">',"<span flex>{{ toast.content }}</span>",'<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">',"{{ toast.action }}","</md-button>","</md-toast>"].join(""),controller:["$scope",function(t){var r=this;t.$watch(function(){return n},function(){r.content=n}),this.resolve=function(){e.hide()}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0};return r}]}).addMethod("updateContent",function(e){n=e});return t.$inject=["$timeout","$animate","$mdToast"],r}angular.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",t),t.$inject=["$$interimElementProvider"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r){return{restrict:"E",controller:angular.noop,link:function(o,a,i){function c(){function r(t,n){a.parent()[0]===n.parent()[0]&&(s&&s.off("scroll",p),n.on("scroll",p),n.attr("scroll-shrink","true"),s=n,e(c))}function c(){l=a.prop("offsetHeight"),s.css("margin-top",-l*f+"px"),d()}function d(e){var n=e?e.target.scrollTop:u;h(),m=Math.min(l/f,Math.max(0,m+n-u)),a.css(t.CSS.TRANSFORM,"translate3d(0,"+-m*f+"px,0)"),s.css(t.CSS.TRANSFORM,"translate3d(0,"+(l-m)*f+"px,0)"),u=n}var l,s,m=0,u=0,f=i.mdShrinkSpeedFactor||.5,p=e.throttle(d),h=n.debounce(c,5e3);o.$on("$mdContentLoaded",r)}r(a),angular.isDefined(i.mdScrollShrink)&&c()}}}angular.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o,a,i,c,d){function l(l,u,f){function p(t){p.value=!!t,p.queued||(t?(p.queued=!0,e(function(){l.visible=p.value,p.queued=!1},l.delay)):e(function(){l.visible=!1}))}function h(){v.attr("aria-describedby",u.attr("id")),T.append(u),b(),c.addClass(u,"md-show"),c.addClass(E,"md-show"),c.addClass($,"md-show")}function g(){v.removeAttr("aria-describedby"),d.all([c.removeClass($,"md-show"),c.removeClass(E,"md-show"),c.removeClass(u,"md-show")]).then(function(){l.visible||u.detach()})}function b(){function e(){var e="left"===M||"right"===M?2*Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height/2,2)):2*Math.sqrt(Math.pow(r.width/2,2)+Math.pow(r.height,2)),t="left"===M?{left:100,top:50}:"right"===M?{left:0,top:50}:"top"===M?{left:50,top:100}:{left:50,top:0};E.css({width:e+"px",height:e+"px",left:t.left+"%",top:t.top+"%"})}function t(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,T.prop("scrollWidth")-r.width-m),t.left=Math.max(t.left,m),t.top=Math.min(t.top,T.prop("scrollHeight")-r.height-m),t.top=Math.max(t.top,m),t}function n(e){return"left"===e?{left:a.left-r.width-m,top:a.top+a.height/2-r.height/2}:"right"===e?{left:a.left+a.width+m,top:a.top+a.height/2-r.height/2}:"top"===e?{left:a.left+a.width/2-r.width/2,top:a.top-r.height-m}:{left:a.left+a.width/2-r.width/2,top:a.top+a.height+m}}var r=o.offsetRect(u,T),a=o.offsetRect(v,T),i=n(M);M?i=t(i):i.top>T.prop("scrollHeight")-r.height-m&&(i=t(n("top"))),u.css({top:i.top+"px",left:i.left+"px"}),e()}a(u);for(var v=u.parent(),E=angular.element(u[0].getElementsByClassName("md-background")[0]),$=angular.element(u[0].getElementsByClassName("md-content")[0]),M=f.mdDirection;"none"==t.getComputedStyle(v[0])["pointer-events"];)v=v.parent();for(var A=u.parent()[0];A&&A!==i[0]&&A!==document.body&&(!A.tagName||"md-content"!=A.tagName.toLowerCase());)A=A.parentNode;var T=angular.element(A||document.body);angular.isDefined(f.mdDelay)||(l.delay=s),u.detach(),u.attr("role","tooltip"),u.attr("id",f.id||"tooltip_"+o.nextUid()),v.on("focus mouseenter touchstart",function(){p(!0)}),v.on("blur mouseleave touchend touchcancel",function(){r[0].activeElement!==v[0]&&p(!1)}),l.$watch("visible",function(e){e?h():g()});var w=n.throttle(function(){l.visible&&b()});angular.element(t).on("resize",w),l.$on("$destroy",function(){l.visible=!1,u.remove(),angular.element(t).off("resize",w)})}var s=0,m=8;return{restrict:"E",transclude:!0,template:'<div class="md-background"></div><div class="md-content" ng-transclude></div>',scope:{visible:"=?mdVisible",delay:"=?mdDelay"},link:l}}angular.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";angular.module("material.components.whiteframe",[])}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o){function a(){d(),i()}function i(){var e=angular.element(w.ul),t=angular.element(w.input),n=e.attr("id")||"ul_"+r.nextUid();e.attr("id",n),t.attr("aria-owns",n)}function c(e){if(e){var t={};return M.itemName&&(t[M.itemName]=e),t}}function d(){var t=parseInt(e.delay,10)||0;e.$watch("searchText",t?r.debounce(l,t):l),e.$watch("selectedItem",function(t,n){e.itemChange&&t!==n&&e.itemChange(c(t))})}function l(t,n){if(M.index=-1,!t||t.length<Math.max(parseInt(e.minLength,10),1))return M.loading=!1,M.matches=[],M.hidden=g(),m(),void 0;var r=t.toLowerCase();k&&k.cancel&&(k.cancel(),k=null),!e.noCache&&y[r]?(M.matches=y[r],m()):M.fetch(t),M.hidden=g(),e.textChange&&t!==n&&e.textChange(c(e.selectedItem))}function s(t){function r(n){y[a]=n,t===e.searchText&&(k=null,M.loading=!1,M.matches=n,M.hidden=g(),m())}var o=e.$parent.$eval(T),a=t.toLowerCase();angular.isArray(o)?r(o):(M.loading=!0,k=n.when(o).then(r))}function m(){if(!M.hidden)switch(M.matches.length){case 0:return M.messages.splice(0);case 1:return M.messages.push({display:"There is 1 match available."});default:return M.messages.push({display:"There are "+M.matches.length+" matches available."})}}function u(){M.messages.push({display:b()})}function f(){x||(M.hidden=!0)}function p(e){switch(e.keyCode){case o.KEY_CODE.DOWN_ARROW:if(M.loading)return;e.preventDefault(),M.index=Math.min(M.index+1,M.matches.length-1),$(),u();break;case o.KEY_CODE.UP_ARROW:if(M.loading)return;e.preventDefault(),M.index=Math.max(0,M.index-1),$(),u();break;case o.KEY_CODE.ENTER:if(M.loading||M.index<0)return;e.preventDefault(),E(M.index);break;case o.KEY_CODE.ESCAPE:M.matches=[],M.hidden=!0,M.index=-1;break;case o.KEY_CODE.TAB:}}function h(){e.searchText="",E(-1),w.input.focus()}function g(){return 1===M.matches.length&&e.searchText===v(M.matches[0])}function b(){return v(M.matches[M.index])}function v(t){return t&&e.itemText?e.itemText(c(t)):t}function E(t){e.selectedItem=M.matches[t],e.searchText=v(e.selectedItem)||e.searchText,M.hidden=!0,M.index=-1,M.matches=[]}function $(){var e=41*M.index,t=e+41,n=225.5;e<w.ul.scrollTop?w.ul.scrollTop=e:t>w.ul.scrollTop+n&&(w.ul.scrollTop=t-n)}var M=this,A=e.itemsExpr.split(/ in /i),T=A[1],w={main:t[0],ul:t[0].getElementsByTagName("ul")[0],input:t[0].getElementsByTagName("input")[0]},k=null,y={},x=!1;return M.scope=e,M.parent=e.$parent,M.itemName=A[0],M.matches=[],M.loading=!1,M.hidden=!0,M.index=0,M.keydown=p,M.blur=f,M.clear=h,M.select=E,M.getCurrentDisplayValue=b,M.fetch=r.debounce(s),M.messages=[],M.listEnter=function(){x=!0},M.listLeave=function(){x=!1},M.mouseUp=function(){w.input.focus()},a()}angular.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e),e.$inject=["$scope","$element","$q","$mdUtil","$mdConstant"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(){return{template:'        <md-autocomplete-wrap role="listbox">          <input type="text"              ng-disabled="isDisabled"              ng-model="searchText"              ng-keydown="$mdAutocompleteCtrl.keydown($event)"              ng-blur="$mdAutocompleteCtrl.blur()"              placeholder="{{placeholder}}"              aria-label="{{placeholder}}"              aria-autocomplete="list"              aria-haspopup="true"              aria-activedescendant=""              aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>          <button              type="button"              ng-if="searchText"              ng-click="$mdAutocompleteCtrl.clear()">            <md-icon md-svg-icon="cancel"></md-icon>            <span class="visually-hidden">Clear</span>          </button>          <md-progress-linear              ng-if="$mdAutocompleteCtrl.loading"              md-mode="indeterminate"></md-progress-linear>        </md-autocomplete-wrap>        <ul role="presentation"            ng-mouseenter="$mdAutocompleteCtrl.listEnter()"            ng-mouseleave="$mdAutocompleteCtrl.listLeave()"            ng-mouseup="$mdAutocompleteCtrl.mouseUp()">          <li ng-repeat="(index, item) in $mdAutocompleteCtrl.matches"              ng-class="{ selected: index === $mdAutocompleteCtrl.index }"              ng-show="searchText && !$mdAutocompleteCtrl.hidden"              ng-click="$mdAutocompleteCtrl.select(index)"              ng-transclude              md-autocomplete-list-item="$mdAutocompleteCtrl.itemName">          </li>        </ul>        <aria-status            class="visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages">{{message.display}}</p>        </aria-status>',transclude:!0,controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{searchText:"=mdSearchText",selectedItem:"=mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=mdNoCache",itemChange:"&mdSelectedItemChange",textChange:"&mdSearchTextChange",isDisabled:"=ngDisabled",minLength:"=mdMinLength",delay:"=mdDelay"}}}angular.module("material.components.autocomplete").directive("mdAutocomplete",e)}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n){function r(e){return e?e.replace(/[\*\[\]\(\)\{\}\\\^\$]/g,"\\$&"):e}var o=t.attr("md-highlight-text"),a=n(t.text())(e),i=e.$watch(o,function(e){var n=new RegExp("^"+r(e),"i"),o=a.replace(n,'<span class="highlight">$&</span>');t.html(o)});t.on("$destroy",function(){i()})}angular.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.$inject=["$scope","$element","$interpolate"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(){return{terminal:!0,scope:!1,controller:"MdHighlightCtrl"}}angular.module("material.components.autocomplete").directive("mdHighlightText",e)}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t){function n(n,r,o,a){var i=a.parent.$new(!1,a.parent),c=a.scope.$eval(o.mdAutocompleteListItem);i[c]=n.item,e(r.contents())(i),r.attr({role:"option",id:"item_"+t.nextUid()})}return{require:"^?mdAutocomplete",terminal:!0,link:n,scope:!1}}angular.module("material.components.autocomplete").directive("mdAutocompleteListItem",e),e.$inject=["$compile","$mdUtil"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e){function t(t,r,o,a){function i(){var e=d.getSelectedItem(),o=!e||d.count()<2||c;if(r.css("display",o?"none":"block"),!o&&t.pagination&&t.pagination.tabData){var a=d.getSelectedIndex(),i=t.pagination.tabData.tabs[a]||{left:0,right:0,width:0},l=r.parent().prop("offsetWidth")-i.right,s=["md-transition-left","md-transition-right","md-no-transition"],m=n>a?0:a>n?1:2;r.removeClass(s.join(" ")).addClass(s[m]).css({left:i.left+"px",right:l+"px"}),n=a}}var c=!!a[0],d=a[1],l=e.throttle(i);d.inkBarElement=r,t.$on("$mdTabsPaginationChanged",l)}var n=0;return{restrict:"E",require:["^?mdNoBar","^mdTabs"],link:t}}angular.module("material.components.tabs").directive("mdTabsInkBar",e),e.$inject=["$$rAF"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o,a){function i(i,d,l,s){function m(e,t){if(e){var n=b(e);T.active&&n!==T.page?(t&&t.element.blur(),v(n).then(function(){A=!1,e.element.focus()})):e.element.focus()}}function u(e){var t=T.tabData,n=Math.max(0,Math.min(t.pages.length-1,T.page+e)),r=t.pages[n][e>0?"firstTabIndex":"lastTabIndex"],o=s.itemAt(r);A=!0,m(o)}function f(){function e(){M.css("width","9999px"),angular.forEach(a.tabs,function(e){angular.element(e.element).css("margin-left",e.filler+"px")}),v(b(s.getSelectedItem()))}function t(){p(0),M.css("width",""),r.css("width",""),r.css("margin-left",""),T.page=null,T.active=!1}function n(){return l||i.$watch(function(){o(function(){d[0].offsetParent&&(angular.isFunction(l)&&l(),$(),l=null)},0,!1)})}if(d.prop("offsetParent")){var r=d.find("md-tab");t();var a=T.tabData=g(),c=T.active=a.pages.length>1;c&&e(),i.$evalAsync(function(){i.$broadcast("$mdTabsPaginationChanged")})}else var l=n()}function p(t){function n(t){t.target===M[0]&&(M.off(e.CSS.TRANSITIONEND,n),o.resolve())}if(s.pagingOffset===t)return r.when();var o=r.defer();return s.$$pagingOffset=t,M.css(e.CSS.TRANSFORM,"translate3d("+t+"px,0,0)"),M.on(e.CSS.TRANSITIONEND,n),o.promise}function h(){switch(i.stretchTabs){case"never":return!1;case"always":return!0;default:return a("sm")}}function g(e){function t(){var e=1===m.length?r:o,t=Math.min(Math.floor(e/l),E.length),n=Math.floor(e/t);return a.css("width",n+"px"),g(!0)}var n,r=d.parent().prop("offsetWidth"),o=r-c-1,a=angular.element(E),i=0,l=0,s=[],m=[];return a.css("max-width",""),angular.forEach(E,function(e,t){var a=Math.min(o,e.offsetWidth),c={element:e,left:i,width:a,right:i+a,filler:0};c.page=Math.ceil(c.right/(1===m.length&&t===E.length-1?r:o))-1,c.page>=m.length?(c.filler=o*c.page-c.left,c.right+=c.filler,c.left+=c.filler,n={left:c.left,firstTabIndex:t,lastTabIndex:t,tabs:[c]},m.push(n)):(n.lastTabIndex=t,n.tabs.push(c)),i=c.right,l=Math.max(l,a),s.push(c)}),a.css("max-width",o+"px"),!e&&h()?t():{width:i,max:l,tabs:s,pages:m,tabElements:E}}function b(e){var t=s.indexOf(e);if(-1===t)return 0;var n=T.tabData;return n?n.tabs[t].page:0}function v(e){if(e!==T.page){var t=T.tabData.pages.length-1;return 0>e&&(e=0),e>t&&(e=t),T.hasPrev=e>0,T.hasNext=t>e,T.page=e,i.$broadcast("$mdTabsPaginationChanged"),p(-T.tabData.pages[e].left)}}var E=d[0].getElementsByTagName("md-tab"),$=n.throttle(f),M=d.children(),A=!1,T=i.pagination={page:-1,active:!1,clickNext:function(){A||u(1)},clickPrevious:function(){A||u(-1)}};i.$on("$mdTabsChanged",$),angular.element(t).on("resize",$),i.$on("$destroy",function(){angular.element(t).off("resize",$)}),i.$watch(function(){return s.tabToFocus},m)}var c=64;return{restrict:"A",require:"^mdTabs",link:i}}angular.module("material.components.tabs").directive("mdTabsPagination",e),e.$inject=["$mdConstant","$window","$$rAF","$$q","$timeout","$mdMedia"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o,a,i,c){function d(){return b(e.$parent)}function l(t,n){h.content.length&&(h.contentContainer.append(h.content),h.contentScope=e.$parent.$new(),t.append(h.contentContainer),r(h.contentContainer)(h.contentScope),n===!0&&c(function(){a.disconnectScope(h.contentScope)},0,!1))}function s(){o.leave(h.contentContainer).then(function(){h.contentScope&&h.contentScope.$destroy(),h.contentScope=null})}function m(e){h.contentContainer[e?"addClass":"removeClass"]("md-transition-rtl")}function u(n){a.reconnectScope(h.contentScope),t.addClass("active").attr({"aria-selected":!0,tabIndex:0}).on("$md.swipeleft $md.swiperight",p),m(n),o.removeClass(h.contentContainer,"ng-hide"),e.onSelect()}function f(n){a.disconnectScope(h.contentScope),t.removeClass("active").attr({"aria-selected":!1,tabIndex:-1}).off("$md.swipeleft $md.swiperight",p),m(n),o.addClass(h.contentContainer,"ng-hide"),e.onDeselect()}function p(t){e.$apply(function(){/left/.test(t.type)?g.select(g.next()):g.select(g.previous())})}var h=this,g=t.controller("mdTabs");h.contentContainer=angular.element('<div class="md-tab-content ng-hide">'),h.element=t,h.isDisabled=d,h.onAdd=l,h.onRemove=s,h.onSelect=u,h.onDeselect=f;var b=i(n.ngDisabled)}angular.module("material.components.tabs").controller("$mdTab",e),e.$inject=["$scope","$element","$attrs","$compile","$animate","$mdUtil","$parse","$timeout"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n,r,o){function a(a,i){var c=a.find("md-tab-label");c.length?c.remove():c=angular.isDefined(i.label)?angular.element("<md-tab-label>").html(i.label):angular.element("<md-tab-label>").append(a.contents().remove());var d=a.contents().remove();return function(a,i,l,s){function m(){var e=c.clone();i.append(e),t(e)(a.$parent),v.content=d.clone()}function u(){a.$apply(function(){E.select(v),E.focus(v)})}function f(e){e.keyCode==r.KEY_CODE.SPACE||e.keyCode==r.KEY_CODE.ENTER?(i.triggerHandler("click"),e.preventDefault()):e.keyCode===r.KEY_CODE.LEFT_ARROW?a.$evalAsync(function(){E.focus(E.previous(v))}):e.keyCode===r.KEY_CODE.RIGHT_ARROW&&a.$evalAsync(function(){E.focus(E.next(v))})}function p(){a.$watch("$parent.$index",function(e){E.move(v,e)})}function h(){function e(e){var t=E.getSelectedItem()===v;e&&!t?E.select(v):!e&&t&&E.deselect(v)}var t=a.$parent.$watch("!!("+l.mdActive+")",e);a.$on("$destroy",t)}function g(){function e(e){i.attr("aria-disabled",e);var t=E.getSelectedItem()===v;t&&e&&E.select(E.next()||E.previous())}a.$watch(v.isDisabled,e)}function b(){var e=l.id||"tab_"+n.nextUid();if(i.attr({id:e,role:"tab",tabIndex:-1}),d.length){var t="content_"+e;i.attr("aria-controls")||i.attr("aria-controls",t),v.contentContainer.attr({id:t,role:"tabpanel","aria-labelledby":e})}}var v=s[0],E=s[1];o(i.addClass.bind(i,"md-tab-themed"),0,!1),a.$watch(function(){return l.label},function(){o(function(){E.scope.$broadcast("$mdTabsChanged")},0,!1)}),m(),b(),e.attachTabBehavior(a,i,{colorElement:E.inkBarElement}),E.add(v),a.$on("$destroy",function(){E.remove(v)}),i.on("$destroy",function(){o(function(){E.scope.$broadcast("$mdTabsChanged")},0,!1)}),angular.isDefined(l.ngClick)||i.on("click",u),i.on("keydown",f),angular.isNumber(a.$parent.$index)&&p(),angular.isDefined(l.mdActive)&&h(),g()}}return{restrict:"E",require:["mdTab","^mdTabs"],controller:"$mdTab",scope:{onSelect:"&mdOnSelect",onDeselect:"&mdOnDeselect",label:"@"},compile:a}}angular.module("material.components.tabs").directive("mdTab",e),e.$inject=["$mdInkRipple","$compile","$mdUtil","$mdConstant","$timeout"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e,t,n){function r(){return b(e.selectedIndex)}function o(){return e.selectedIndex}function a(t,n){p.add(t,n),angular.isDefined(t.element.attr("md-active"))||-1!==e.selectedIndex&&angular.isNumber(e.selectedIndex)&&e.selectedIndex!==h.indexOf(t)?t.onAdd(h.contentArea,!0):(t.onAdd(h.contentArea,!1),h.select(t)),e.$broadcast("$mdTabsChanged")}function i(t,n){if(p.contains(t)&&!n){var o=r()===t,a=u()||m();s(t),p.remove(t),t.onRemove(),e.$broadcast("$mdTabsChanged"),o&&d(a)}}function c(t,n){var o=r()===t;p.remove(t),p.add(t,n),o&&d(t),e.$broadcast("$mdTabsChanged")}function d(t,n){!t||t.isSelected||t.isDisabled()||p.contains(t)&&(angular.isDefined(n)||(n=g(t)<e.selectedIndex),s(r(),n),e.selectedIndex=g(t),t.isSelected=!0,t.onSelect(n),e.$broadcast("$mdTabsChanged"))}function l(e){h.tabToFocus=e}function s(t,n){t&&t.isSelected&&p.contains(t)&&(e.selectedIndex=-1,t.isSelected=!1,t.onDeselect(n))}function m(e,t){return p.next(e||r(),t||f)}function u(e,t){return p.previous(e||r(),t||f)}function f(e){return e&&!e.isDisabled()}var p=n.iterator([],!1),h=this;h.$element=t,h.scope=e;var g=(h.contentArea=angular.element(t[0].querySelector(".md-tabs-content")),h.inRange=p.inRange,h.indexOf=p.indexOf),b=h.itemAt=p.itemAt;h.count=p.count,h.getSelectedItem=r,h.getSelectedIndex=o,h.add=a,h.remove=i,h.move=c,h.select=d,h.focus=l,h.deselect=s,h.next=m,h.previous=u,e.$on("$destroy",function(){s(r());for(var e=p.count()-1;e>=0;e--)i(p[e],!0)})}angular.module("material.components.tabs").controller("$mdTabs",e),e.$inject=["$scope","$element","$mdUtil","$timeout"]}(),/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
function(){"use strict";function e(e){function t(t,n,r,o,a){function i(){n.attr("role","tablist")}function c(){t.$watch("selectedIndex",function(e,t){if(t!=e){var n=t>e;if(o.deselect(o.itemAt(t),n),o.inRange(e)){for(var r=o.itemAt(e);r&&r.isDisabled();)r=e>t?o.next(r):o.previous(r);o.select(r,n)}}})}t.stretchTabs=r.hasOwnProperty("mdStretchTabs")?r.mdStretchTabs||"always":"auto",e(n),i(),c(),a(t.$parent,function(e){angular.element(n[0].querySelector(".md-header-items")).append(e)})}return{restrict:"E",controller:"$mdTabs",require:"mdTabs",transclude:!0,scope:{selectedIndex:"=?mdSelected"},template:'<section class="md-header" ng-class="{\'md-paginating\': pagination.active}"><button class="md-paginator md-prev" ng-if="pagination.active && pagination.hasPrev" ng-click="pagination.clickPrevious()" aria-hidden="true"><md-icon md-svg-icon="tabs-arrow"></md-icon></button><div class="md-header-items-container" md-tabs-pagination><div class="md-header-items"><md-tabs-ink-bar></md-tabs-ink-bar></div></div><button class="md-paginator md-next" ng-if="pagination.active && pagination.hasNext" ng-click="pagination.clickNext()" aria-hidden="true"><md-icon md-svg-icon="tabs-arrow"></md-icon></button></section><section class="md-tabs-content"></section>',link:t}}angular.module("material.components.tabs").directive("mdTabs",e),e.$inject=["$mdTheming"]}(),function(){angular.module("material.core").constant("$MD_THEME_CSS","md-autocomplete {  background: '{{background-50}}'; }  md-autocomplete button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete button:after {    background: '{{background-600-0.3}}'; }  md-autocomplete ul {    background: '{{background-50}}'; }    md-autocomplete ul li {      border-top: 1px solid '{{background-400}}';      color: '{{background-900}}'; }      md-autocomplete ul li .highlight {        color: '{{background-600}}'; }      md-autocomplete ul li:hover, md-autocomplete ul li.selected {        background: '{{background-200}}'; }md-backdrop.md-opaque.md-THEME_NAME-theme {  background-color: '{{foreground-4-0.5}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }md-toolbar .md-button.md-THEME_NAME-theme.md-fab {  background-color: white; }.md-button.md-THEME_NAME-theme {  border-radius: 3px; }  .md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):focus {    background-color: '{{background-500-0.2}}'; }  .md-button.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {      color: '{{primary-contrast}}';      background-color: '{{primary-color}}'; }      .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):focus {        background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):focus {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-raised {    color: '{{background-contrast}}';    background-color: '{{background-50}}'; }    .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):focus {      background-color: '{{background-200}}'; }  .md-button.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {      color: '{{warn-contrast}}';      background-color: '{{warn-color}}'; }      .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):focus {        background-color: '{{warn-700}}'; }  .md-button.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {      color: '{{accent-contrast}}';      background-color: '{{accent-color}}'; }      .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):focus {        background-color: '{{accent-700}}'; }  .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {    color: '{{foreground-3}}';    background-color: transparent;    cursor: not-allowed; }md-card.md-THEME_NAME-theme {  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-3}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }md-icon.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }md-icon.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }md-icon.md-THEME_NAME-theme.md-danger {  color: '{{danger-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  fill: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  fill: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], [disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-4}}' 0%, '{{foreground-4}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-4}}' 100%); }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {  border-color: '{{foreground-3}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {  border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme:focus:not(:empty) {  border-color: '{{foreground-1}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label.md-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-label {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-label {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-label {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-label.md-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme .md-select-label {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-label.md-placeholder {    color: '{{foreground-2}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  background-color: '{{primary-50}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    background-color: '{{primary-100}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    background-color: '{{accent-50}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      background-color: '{{accent-100}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  border-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-hue-3}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-switch.md-THEME_NAME-theme:focus .md-label:not(:empty) {  border-color: '{{foreground-1}}';  border-style: dotted; }md-tabs.md-THEME_NAME-theme .md-header {  background-color: transparent; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent .md-header {  background-color: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]) {  color: '{{accent-100}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]).active {    color: '{{accent-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-primary .md-header {  background-color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab:not([disabled]) {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab:not([disabled]).active {    color: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab:focus {    color: '{{primary-contrast}}';    background-color: '{{primary-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab.active {    color: '{{primary-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab .md-ripple-container {    color: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-warn .md-header {  background-color: '{{warn-color}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]) {  color: '{{warn-100}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]).active {    color: '{{warn-contrast}}'; }md-tabs.md-THEME_NAME-theme md-tabs-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme md-tab:focus {    color: '{{foreground-1}}'; }  md-tabs.md-THEME_NAME-theme md-tab.active {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  text-shadow: '{{foreground-shadow}}'; }  md-input-group.md-THEME_NAME-theme input::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme input::-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-ms-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme label {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused input, md-input-group.md-THEME_NAME-theme.md-input-focused textarea {  border-color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused label {  color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent input, md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent textarea {  border-color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-has-value:not(.md-input-focused) label {  color: '{{foreground-2}}'; }md-input-group.md-THEME_NAME-theme .md-input[disabled] {  border-bottom-color: '{{foreground-4}}';  color: '{{foreground-3}}'; }md-toast.md-THEME_NAME-theme {  background-color: '{{foreground-1}}';  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }")}();
/**
 * @license
 * lodash 3.2.0 (Custom Build) lodash.com/license | Underscore.js 1.7.0 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=n===n,e=t===t;if(n>t||!r||typeof n=="undefined"&&e)return 1;if(n<t||!e||typeof t=="undefined"&&r)return-1}return 0}function t(n,t,r){if(t!==t)return p(n,r);r=(r||0)-1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function r(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function e(n){return typeof n=="string"?n:null==n?"":n+""}function u(n){return n.charCodeAt(0)}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););return r
}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(t,r){for(var e=-1,u=t.a,o=r.a,i=u.length;++e<i;){var f=n(u[e],o[e]);if(f)return f}return t.b-r.b}function c(n){return Wt[n]}function l(n){return Nt[n]}function s(n){return"\\"+Lt[n]}function p(n,t,r){var e=n.length;for(t=r?t||e:(t||0)-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return n&&typeof n=="object"||false}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n)
}function g(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=B,o[++u]=r);return o}function v(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ut[n]}function m(_){function Wt(n){if(h(n)&&!(So(n)||n instanceof Ut)){if(n instanceof Nt)return n;if(Uu.call(n,"__chain__")&&Uu.call(n,"__wrapped__"))return he(n)}return new Nt(n)}function Nt(n,t,r){this.__wrapped__=n,this.__actions__=r||[],this.__chain__=!!t
}function Ut(n){this.__wrapped__=n,this.__actions__=null,this.__dir__=1,this.__dropCount__=0,this.__filtered__=false,this.__iteratees__=null,this.__takeCount__=so,this.__views__=null}function Ft(){this.__data__={}}function Lt(n){var t=n?n.length:0;for(this.data={hash:to(null),set:new Zu};t--;)this.push(n[t])}function Bt(n,t){var r=n.data;return(typeof t=="string"||Xe(t)?r.set.has(t):r.hash[t])?0:-1}function zt(n,t){var r=-1,e=n.length;for(t||(t=wu(e));++r<e;)t[r]=n[r];return t}function Mt(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););return n
}function qt(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Pt(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Kt(n,t){for(var r=-1,e=n.length,u=wu(e);++r<e;)u[r]=t(n[r],r,n);return u}function Vt(n){for(var t=-1,r=n.length,e=lo;++t<r;){var u=n[t];u>e&&(e=u)}return e}function Yt(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Zt(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);
return r}function Gt(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;return false}function Jt(n,t){return typeof n=="undefined"?t:n}function Xt(n,t,r,e){return typeof n!="undefined"&&Uu.call(e,r)?n:t}function Ht(n,t,r){var e=Fo(t);if(!r)return nr(t,n,e);for(var u=-1,o=e.length;++u<o;){var i=e[u],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(typeof f!="undefined"||i in n)||(n[i]=a)}return n}function Qt(n,t){for(var r=-1,e=n.length,u=oe(e),o=t.length,i=wu(o);++r<o;){var f=t[r];u?(f=parseFloat(f),i[r]=ee(f,e)?n[f]:w):i[r]=n[f]
}return i}function nr(n,t,r){r||(r=t,t={});for(var e=-1,u=r.length;++e<u;){var o=r[e];t[o]=n[o]}return t}function tr(n,t,r){var e=typeof n;if("function"==e){if(e=typeof t!="undefined"){var e=Wt.support,u=!(e.funcNames?n.name:e.funcDecomp);if(!u){var o=Wu.call(n);e.funcNames||(u=!dt.test(o)),u||(u=kt.test(o)||He(n),bo(n,u))}e=u}n=e?Nr(n,t,r):n}else n=null==n?vu:"object"==e?br(n):typeof t=="undefined"?jr(n+""):xr(n+"",t);return n}function rr(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),typeof f!="undefined")return f;
if(!Xe(n))return n;if(e=So(n)){if(f=ne(n),!t)return zt(n,f)}else{var a=Lu.call(n),c=a==K;if(a!=Y&&a!=z&&(!c||u))return Tt[a]?re(n,a,t):u?n:{};if(f=te(c?{}:n),!t)return nr(n,f,Fo(n))}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Mt:_r)(n,function(e,u){f[u]=rr(e,t,r,u,n,o,i)}),f}function er(n,t,r,e){if(typeof n!="function")throw new Ou($);return Gu(function(){n.apply(w,Rr(r,e))},t)}function ur(n,r){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=Qr(),f=i==t,a=f&&200<=r.length&&xo(r),c=r.length;
a&&(i=Bt,f=false,r=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(r[l]===a)continue n;u.push(a)}else 0>i(r,a)&&u.push(a);return u}function or(n,t){var r=n?n.length:0;if(!oe(r))return _r(n,t);for(var e=-1,u=pe(n);++e<r&&false!==t(u[e],e,u););return n}function ir(n,t){var r=n?n.length:0;if(!oe(r))return gr(n,t);for(var e=pe(n);r--&&false!==t(e[r],r,e););return n}function fr(n,t){var r=true;return or(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ar(n,t){var r=[];return or(n,function(n,e,u){t(n,e,u)&&r.push(n)
}),r}function cr(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function lr(n,t,r,e){e=(e||0)-1;for(var u=n.length,o=-1,i=[];++e<u;){var f=n[e];if(h(f)&&oe(f.length)&&(So(f)||Ye(f))){t&&(f=lr(f,t,r));var a=-1,c=f.length;for(i.length+=c;++a<c;)i[++o]=f[a]}else r||(i[++o]=f)}return i}function sr(n,t,r){var e=-1,u=pe(n);r=r(n);for(var o=r.length;++e<o;){var i=r[e];if(false===t(u[i],i,u))break}return n}function pr(n,t,r){var e=pe(n);r=r(n);for(var u=r.length;u--;){var o=r[u];
if(false===t(e[o],o,e))break}return n}function hr(n,t){sr(n,t,ou)}function _r(n,t){return sr(n,t,Fo)}function gr(n,t){return pr(n,t,Fo)}function vr(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];Je(n[i])&&(o[++u]=i)}return o}function yr(n,t,r){var e=-1,u=typeof t=="function",o=n?n.length:0,i=oe(o)?wu(o):[];return or(n,function(n){var o=u?t:null!=n&&n[t];i[++e]=o?o.apply(n,r):w}),i}function dr(n,t,r,e,u,o){if(n===t)return 0!==n||1/n==1/t;var i=typeof n,f=typeof t;if("function"!=i&&"object"!=i&&"function"!=f&&"object"!=f||null==n||null==t)n=n!==n&&t!==t;
else n:{var i=dr,f=So(n),a=So(t),c=D,l=D;f||(c=Lu.call(n),c==z?c=Y:c!=Y&&(f=ru(n))),a||(l=Lu.call(t),l==z?l=Y:l!=Y&&ru(t));var s=c==Y,a=l==Y,l=c==l;if(!l||f||s)if(c=s&&Uu.call(n,"__wrapped__"),a=a&&Uu.call(t,"__wrapped__"),c||a)n=i(c?n.value():n,a?t.value():t,r,e,u,o);else if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?Zr:Jr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false;else n=Gr(n,t,c)}return n}function mr(n,t,r,e,u){var o=t.length;if(null==n)return!o;
for(var i=-1,f=!u;++i<o;)if(f&&e[i]?r[i]!==n[t[i]]:!Uu.call(n,t[i]))return false;for(i=-1;++i<o;){var a=t[i];if(f&&e[i])a=Uu.call(n,a);else{var c=n[a],l=r[i],a=u?u(c,l,a):w;typeof a=="undefined"&&(a=dr(l,c,u,true))}if(!a)return false}return true}function wr(n,t){var r=[];return or(n,function(n,e,u){r.push(t(n,e,u))}),r}function br(n){var t=Fo(n),r=t.length;if(1==r){var e=t[0],u=n[e];if(ie(u))return function(n){return null!=n&&n[e]===u&&Uu.call(n,e)}}for(var o=wu(r),i=wu(r);r--;)u=n[t[r]],o[r]=u,i[r]=ie(u);return function(n){return mr(n,t,o,i)
}}function xr(n,t){return ie(t)?function(r){return null!=r&&r[n]===t}:function(r){return null!=r&&dr(t,r[n],null,true)}}function Ar(n,t,r,e,u){var o=oe(t.length)&&(So(t)||ru(t));return(o?Mt:_r)(t,function(t,i,f){if(h(t)){e||(e=[]),u||(u=[]);n:{t=e;for(var a=u,c=t.length,l=f[i];c--;)if(t[c]==l){n[i]=a[c],i=void 0;break n}c=n[i],f=r?r(c,l,i,n,f):w;var s=typeof f=="undefined";s&&(f=l,oe(l.length)&&(So(l)||ru(l))?f=So(c)?c:c?zt(c):[]:No(l)||Ye(l)?f=Ye(c)?eu(c):No(c)?c:{}:s=false),t.push(l),a.push(f),s?n[i]=Ar(f,l,r,t,a):(f===f?f!==c:c===c)&&(n[i]=f),i=void 0
}return i}a=n[i],f=r?r(a,t,i,n,f):w,(l=typeof f=="undefined")&&(f=t),!o&&typeof f=="undefined"||!l&&(f===f?f===a:a!==a)||(n[i]=f)}),n}function jr(n){return function(t){return null==t?w:t[n]}}function kr(n,t){return n+Pu(co()*(t-n+1))}function Er(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Rr(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=typeof r=="undefined"||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=wu(u);++e<u;)r[e]=n[e+t];return r}function Ir(n,t){var r;
return or(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Or(n,r){var e=-1,u=Qr(),o=n.length,i=u==t,f=i&&200<=o,a=f&&xo(),c=[];a?(u=Bt,i=false):(f=false,a=r?[]:c);n:for(;++e<o;){var l=n[e],s=r?r(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;r&&a.push(s),c.push(l)}else 0>u(a,s)&&((r||f)&&a.push(s),c.push(l))}return c}function Cr(n,t){for(var r=-1,e=t.length,u=wu(e);++r<e;)u[r]=n[t[r]];return u}function Tr(n,t){var r=n;r instanceof Ut&&(r=r.value());for(var e=-1,u=t.length;++e<u;){var r=[r],o=t[e];
Vu.apply(r,o.args),r=o.func.apply(o.thisArg,r)}return r}function Sr(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=_o){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)?e=o+1:u=o}return u}return Wr(n,t,vu,r)}function Wr(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=typeof t=="undefined";u<o;){var a=Pu((u+o)/2),c=r(n[a]),l=c===c;(i?l||e:f?l&&(e||typeof c!="undefined"):e?c<=t:c<t)?u=a+1:o=a}return oo(o,ho)}function Nr(n,t,r){if(typeof n!="function")return vu;if(typeof t=="undefined")return n;
switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Ur(n){return Du.call(n,0)}function Fr(n,t,r){for(var e=r.length,u=-1,o=uo(n.length-e,0),i=-1,f=t.length,a=wu(o+f);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function Lr(n,t,r){for(var e=-1,u=r.length,o=-1,i=uo(n.length-u,0),f=-1,a=t.length,c=wu(i+a);++o<i;)c[o]=n[o];
for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function $r(n,t){return function(r,e,u){var o=t?t():{};if(e=Hr(e,u,3),So(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else or(r,function(t,r,u){n(o,t,e(t,r,u),u)});return o}}function Br(n){return function(){var t=arguments.length,r=arguments[0];if(2>t||null==r)return r;if(3<t&&ue(arguments[1],arguments[2],arguments[3])&&(t=2),3<t&&"function"==typeof arguments[t-2])var e=Nr(arguments[--t-1],arguments[t--],5);else 2<t&&"function"==typeof arguments[t-1]&&(e=arguments[--t]);
for(var u=0;++u<t;){var o=arguments[u];o&&n(r,o,e)}return r}}function zr(n,t){function r(){return(this instanceof r?e:n).apply(t,arguments)}var e=Mr(n);return r}function Dr(n){return function(t){var r=-1;t=pu(fu(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Mr(n){return function(){var t=wo(n.prototype),r=n.apply(t,arguments);return Xe(r)?r:t}}function qr(n,t){return function(r,e,o){o&&ue(r,e,o)&&(e=null);var i=Hr(),f=null==e;if(i===tr&&f||(f=false,e=i(e,o,3)),f){if(e=So(r),e||!tu(r))return n(e?r:se(r));
e=u}return Xr(r,e,t)}}function Pr(n,t,r,e,u,o,i,f,a,c){function l(){for(var b=arguments.length,j=b,k=wu(b);j--;)k[j]=arguments[j];if(e&&(k=Fr(k,e,u)),o&&(k=Lr(k,o,i)),_||y){var j=l.placeholder,E=g(k,j),b=b-E.length;if(b<c){var O=f?zt(f):null,b=uo(c-b,0),C=_?E:null,E=_?null:E,T=_?k:null,k=_?null:k;return t|=_?R:I,t&=~(_?I:R),v||(t&=~(x|A)),k=Pr(n,t,r,T,C,k,E,O,a,b),k.placeholder=j,k}}if(j=p?r:this,h&&(n=j[m]),f)for(O=k.length,b=oo(f.length,O),C=zt(k);b--;)E=f[b],k[b]=ee(E,O)?C[E]:w;return s&&a<k.length&&(k.length=a),(this instanceof l?d||Mr(n):n).apply(j,k)
}var s=t&C,p=t&x,h=t&A,_=t&k,v=t&j,y=t&E,d=!h&&Mr(n),m=n;return l}function Kr(n,t,r){return n=n.length,t=+t,n<t&&ro(t)?(t-=n,r=null==r?" ":r+"",lu(r,Mu(t/r.length)).slice(0,t)):""}function Vr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=wu(f+c);++a<c;)l[a]=e[a];for(;f--;)l[a++]=arguments[++t];return(this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Mr(n);return u}function Yr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ou($);var c=e?e.length:0;if(c||(t&=~(R|I),e=u=null),c-=u?u.length:0,t&I){var l=e,s=u;
e=u=null}var p=!a&&Ao(n);if(r=[n,t,r,e,u,l,s,o,i,f],p&&true!==p){e=r[1],t=p[1],f=e|t,o=C|O,u=x|A,i=o|u|j|E;var l=e&C&&!(t&C),s=e&O&&!(t&O),h=(s?r:p)[7],_=(l?r:p)[8];o=f>=o&&f<=i&&(e<O||(s||l)&&h.length<=_),(!(e>=O&&t>u||e>u&&t>=O)||o)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Fr(u,e,p[4]):zt(e),r[4]=u?g(r[3],B):zt(p[4])),(e=p[5])&&(u=r[5],r[5]=u?Lr(u,e,p[6]):zt(e),r[6]=u?g(r[5],B):zt(p[6])),(e=p[7])&&(r[7]=zt(e)),t&C&&(r[8]=null==r[8]?p[8]:oo(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]
}return r[9]=null==f?a?0:n.length:uo(f-c,0)||0,(p?bo:jo)(t==x?zr(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?Pr.apply(w,r):Vr.apply(w,r),r)}function Zr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length,l=true;if(a!=c&&(!u||c<=a))return false;for(;l&&++f<a;){var s=n[f],p=t[f],l=w;if(e&&(l=u?e(p,s,f):e(s,p,f)),typeof l=="undefined")if(u)for(var h=c;h--&&(p=t[h],!(l=s&&s===p||r(s,p,e,u,o,i))););else l=s&&s===p||r(s,p,e,u,o,i)}return!!l}function Gr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;
case V:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case Z:case G:return n==t+""}return false}function Jr(n,t,r,e,u,o,i){var f=Fo(n),a=f.length,c=Fo(t).length;if(a!=c&&!u)return false;for(var l,c=-1;++c<a;){var s=f[c],p=Uu.call(t,s);if(p){var h=n[s],_=t[s],p=w;e&&(p=u?e(_,h,s):e(h,_,s)),typeof p=="undefined"&&(p=h&&h===_||r(h,_,e,u,o,i))}if(!p)return false;l||(l="constructor"==s)}return l||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false
}function Xr(n,t,r){var e=r?so:lo,u=e,o=u;return or(n,function(n,i,f){i=t(n,i,f),((r?i<u:i>u)||i===e&&i===o)&&(u=i,o=n)}),o}function Hr(n,t,r){var e=Wt.callback||_u,e=e===_u?tr:e;return r?e(n,t,r):e}function Qr(n,r,e){var u=Wt.indexOf||de,u=u===de?t:u;return n?u(n,r,e):u}function ne(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&Uu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function te(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Eu),new n
}function re(n,t,r){var e=n.constructor;switch(t){case J:return Ur(n);case M:case q:return new e(+n);case X:case H:case Q:case nt:case tt:case rt:case et:case ut:case ot:return t=n.buffer,new e(r?Ur(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Z:var u=new e(n.source,yt.exec(n));u.lastIndex=n.lastIndex}return u}function ee(n,t){return n=+n,t=null==t?vo:t,-1<n&&0==n%1&&n<t}function ue(n,t,r){if(!Xe(r))return false;var e=typeof t;return"number"==e?(e=r.length,e=oe(e)&&ee(t,e)):e="string"==e&&t in r,e&&r[t]===n
}function oe(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=vo}function ie(n){return n===n&&(0===n?0<1/n:!Xe(n))}function fe(n,t){n=pe(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function ae(n,t){var r={};return hr(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function ce(n){var t;if(!h(n)||Lu.call(n)!=Y||!(Uu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return hr(n,function(n,t){r=t}),typeof r=="undefined"||Uu.call(n,r)
}function le(n){for(var t=ou(n),r=t.length,e=r&&n.length,u=Wt.support,u=e&&oe(e)&&(So(n)||u.nonEnumArgs&&Ye(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&ee(f,e)||Uu.call(n,f))&&i.push(f)}return i}function se(n){return null==n?[]:oe(n.length)?Xe(n)?n:Eu(n):iu(n)}function pe(n){return Xe(n)?n:Eu(n)}function he(n){return n instanceof Ut?n.clone():new Nt(n.__wrapped__,n.__chain__,zt(n.__actions__))}function _e(n,t,r){return n&&n.length?((r?ue(n,t,r):null==t)&&(t=1),Rr(n,0>t?0:t)):[]}function ge(n,t,r){var e=n?n.length:0;
return e?((r?ue(n,t,r):null==t)&&(t=1),t=e-(+t||0),Rr(n,0,0>t?0:t)):[]}function ve(n,t,r){var e=-1,u=n?n.length:0;for(t=Hr(t,r,3);++e<u;)if(t(n[e],e,n))return e;return-1}function ye(n){return n?n[0]:w}function de(n,r,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?uo(u+e,0):e||0;else if(e)return e=Sr(n,r),n=n[e],(r===r?r===n:n!==n)?e:-1;return t(n,r,e)}function me(n){return _e(n,1)}function we(n,r,e,u){if(!n||!n.length)return[];typeof r!="boolean"&&null!=r&&(u=e,e=ue(n,r,u)?null:r,r=false);
var o=Hr();if((o!==tr||null!=e)&&(e=o(e,u,3)),r&&Qr()==t){r=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=r?r(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=Or(n,e);return n}function be(n){for(var t=-1,r=(n&&n.length&&Vt(Kt(n,Nu)))>>>0,e=wu(r);++t<r;)e[t]=Kt(n,jr(t));return e}function xe(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||So(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Ae(n){return n=Wt(n),n.__chain__=true,n}function je(n,t,r){return t.call(r,n)
}function ke(n,t,r){var e=n?n.length:0;return oe(e)||(n=iu(n),e=n.length),e?(r=typeof r=="number"?0>r?uo(e+r,0):r||0:0,typeof n=="string"||!So(n)&&tu(n)?r<e&&-1<n.indexOf(t,r):-1<Qr(n,t,r)):false}function Ee(n,t,r){var e=So(n)?qt:fr;return(typeof t!="function"||typeof r!="undefined")&&(t=Hr(t,r,3)),e(n,t)}function Re(n,t,r){var e=So(n)?Pt:ar;return t=Hr(t,r,3),e(n,t)}function Ie(n,t,r){return So(n)?(t=ve(n,t,r),-1<t?n[t]:w):(t=Hr(t,r,3),cr(n,t,or))}function Oe(n,t,r){return typeof t=="function"&&typeof r=="undefined"&&So(n)?Mt(n,t):or(n,Nr(t,r,3))
}function Ce(n,t,r){if(typeof t=="function"&&typeof r=="undefined"&&So(n))for(r=n.length;r--&&false!==t(n[r],r,n););else n=ir(n,Nr(t,r,3));return n}function Te(n,t,r){var e=So(n)?Kt:wr;return t=Hr(t,r,3),e(n,t)}function Se(n,t,r,e){return(So(n)?Yt:Er)(n,Hr(t,e,4),r,3>arguments.length,or)}function We(n,t,r,e){return(So(n)?Zt:Er)(n,Hr(t,e,4),r,3>arguments.length,ir)}function Ne(n,t,r){return(r?ue(n,t,r):null==t)?(n=se(n),t=n.length,0<t?n[kr(0,t-1)]:w):(n=Ue(n),n.length=oo(0>t?0:+t||0,n.length),n)}function Ue(n){n=se(n);
for(var t=-1,r=n.length,e=wu(r);++t<r;){var u=kr(0,t);t!=u&&(e[t]=e[u]),e[u]=n[t]}return e}function Fe(n,t,r){var e=So(n)?Gt:Ir;return(typeof t!="function"||typeof r!="undefined")&&(t=Hr(t,r,3)),e(n,t)}function Le(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ou($);var e=n;n=t,t=e}return function(){return 0<--n?r=t.apply(this,arguments):t=null,r}}function $e(n,t){var r=x;if(2<arguments.length)var e=Rr(arguments,2),u=g(e,$e.placeholder),r=r|R;return Yr(n,r,t,e,u)}function Be(n,t){var r=x|A;
if(2<arguments.length)var e=Rr(arguments,2),u=g(e,Be.placeholder),r=r|R;return Yr(t,r,n,e,u)}function ze(n,t,r){return r&&ue(n,t,r)&&(t=null),n=Yr(n,k,null,null,null,null,null,t),n.placeholder=ze.placeholder,n}function De(n,t,r){return r&&ue(n,t,r)&&(t=null),n=Yr(n,E,null,null,null,null,null,t),n.placeholder=De.placeholder,n}function Me(n,t,r){function e(){var r=t-(To()-c);0>=r||r>t?(f&&qu(f),r=p,f=s=p=w,r&&(h=To(),a=n.apply(l,i),s||f||(i=l=null))):s=Gu(e,r)}function u(){s&&qu(s),f=s=p=w,(g||_!==t)&&(h=To(),a=n.apply(l,i),s||f||(i=l=null))
}function o(){if(i=arguments,c=To(),l=this,p=g&&(s||!v),false===_)var r=v&&!s;else{f||v||(h=c);var o=_-(c-h),y=0>=o||o>_;y?(f&&(f=qu(f)),h=c,a=n.apply(l,i)):f||(f=Gu(u,o))}return y&&s?s=qu(s):s||t===_||(s=Gu(e,t)),r&&(y=true,a=n.apply(l,i)),!y||s||f||(i=l=null),a}var i,f,a,c,l,s,p,h=0,_=false,g=true;if(typeof n!="function")throw new Ou($);if(t=0>t?0:t,true===r)var v=true,g=false;else Xe(r)&&(v=r.leading,_="maxWait"in r&&uo(+r.maxWait||0,t),g="trailing"in r?r.trailing:g);return o.cancel=function(){s&&qu(s),f&&qu(f),f=s=p=w
},o}function qe(){var n=arguments,t=n.length-1;if(0>t)return function(n){return n};if(!qt(n,Je))throw new Ou($);return function(){for(var r=t,e=n[r].apply(this,arguments);r--;)e=n[r].call(this,e);return e}}function Pe(n,t){function r(){var e=r.cache,u=t?t.apply(this,arguments):arguments[0];if(e.has(u))return e.get(u);var o=n.apply(this,arguments);return e.set(u,o),o}if(typeof n!="function"||t&&typeof t!="function")throw new Ou($);return r.cache=new Pe.Cache,r}function Ke(n){var t=Rr(arguments,1),r=g(t,Ke.placeholder);
return Yr(n,R,null,t,r)}function Ve(n){var t=Rr(arguments,1),r=g(t,Ve.placeholder);return Yr(n,I,null,t,r)}function Ye(n){return oe(h(n)?n.length:w)&&Lu.call(n)==z||false}function Ze(n){return n&&1===n.nodeType&&h(n)&&-1<Lu.call(n).indexOf("Element")||false}function Ge(n){return h(n)&&typeof n.message=="string"&&Lu.call(n)==P||false}function Je(n){return typeof n=="function"||false}function Xe(n){var t=typeof n;return"function"==t||n&&"object"==t||false}function He(n){return null==n?false:Lu.call(n)==K?Bu.test(Wu.call(n)):h(n)&&wt.test(n)||false
}function Qe(n){return typeof n=="number"||h(n)&&Lu.call(n)==V||false}function nu(n){return h(n)&&Lu.call(n)==Z||false}function tu(n){return typeof n=="string"||h(n)&&Lu.call(n)==G||false}function ru(n){return h(n)&&oe(n.length)&&Ct[Lu.call(n)]||false}function eu(n){return nr(n,ou(n))}function uu(n){return vr(n,ou(n))}function ou(n){if(null==n)return[];Xe(n)||(n=Eu(n));for(var t=n.length,t=t&&oe(t)&&(So(n)||mo.nonEnumArgs&&Ye(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=wu(t),o=0<t;++e<t;)u[e]=e+"";
for(var i in n)o&&ee(i,t)||"constructor"==i&&(r||!Uu.call(n,i))||u.push(i);return u}function iu(n){return Cr(n,Fo(n))}function fu(n){return(n=e(n))&&n.replace(bt,c)}function au(n){return(n=e(n))&&jt.test(n)?n.replace(At,"\\$&"):n}function cu(n,t,r){return r&&ue(n,t,r)&&(t=0),ao(n,t)}function lu(n,t){var r="";if(n=e(n),t=+t,1>t||!n||!ro(t))return r;do t%2&&(r+=n),t=Pu(t/2),n+=n;while(t);return r}function su(n,t,r){var u=n;return(n=e(n))?(r?ue(u,t,r):null==t)?n.slice(v(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n
}function pu(n,t,r){return r&&ue(n,t,r)&&(t=null),n=e(n),n.match(t||Rt)||[]}function hu(n){try{return n.apply(w,Rr(arguments,1))}catch(t){return Ge(t)?t:new xu(t)}}function _u(n,t,r){return r&&ue(n,t,r)&&(t=null),h(n)?yu(n):tr(n,t)}function gu(n){return function(){return n}}function vu(n){return n}function yu(n){return br(rr(n,true))}function du(n,t,r){if(null==r){var e=Xe(t),u=e&&Fo(t);((u=u&&u.length&&vr(t,u))?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=vr(t,Fo(t)));var o=true,e=-1,i=Je(n),f=u.length;
!1===r?o=false:Xe(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=zt(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return r=[this.value()],Vu.apply(r,arguments),t.apply(n,r)}}(a))}return n}function mu(){}_=_?Dt.defaults($t.Object(),_,Dt.pick($t,Ot)):$t;var wu=_.Array,bu=_.Date,xu=_.Error,Au=_.Function,ju=_.Math,ku=_.Number,Eu=_.Object,Ru=_.RegExp,Iu=_.String,Ou=_.TypeError,Cu=wu.prototype,Tu=Eu.prototype,Su=(Su=_.window)&&Su.document,Wu=Au.prototype.toString,Nu=jr("length"),Uu=Tu.hasOwnProperty,Fu=0,Lu=Tu.toString,$u=_._,Bu=Ru("^"+au(Lu).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),zu=He(zu=_.ArrayBuffer)&&zu,Du=He(Du=zu&&new zu(0).slice)&&Du,Mu=ju.ceil,qu=_.clearTimeout,Pu=ju.floor,Ku=He(Ku=Eu.getPrototypeOf)&&Ku,Vu=Cu.push,Yu=Tu.propertyIsEnumerable,Zu=He(Zu=_.Set)&&Zu,Gu=_.setTimeout,Ju=Cu.splice,Xu=He(Xu=_.Uint8Array)&&Xu,Hu=He(Hu=_.WeakMap)&&Hu,Qu=function(){try{var n=He(n=_.Float64Array)&&n,t=new n(new zu(10),0,1)&&n
}catch(r){}return t}(),no=He(no=wu.isArray)&&no,to=He(to=Eu.create)&&to,ro=_.isFinite,eo=He(eo=Eu.keys)&&eo,uo=ju.max,oo=ju.min,io=He(io=bu.now)&&io,fo=He(fo=ku.isFinite)&&fo,ao=_.parseInt,co=ju.random,lo=ku.NEGATIVE_INFINITY,so=ku.POSITIVE_INFINITY,po=ju.pow(2,32)-1,ho=po-1,_o=po>>>1,go=Qu?Qu.BYTES_PER_ELEMENT:0,vo=ju.pow(2,53)-1,yo=Hu&&new Hu,mo=Wt.support={};!function(n){mo.funcDecomp=!He(_.WinRTError)&&kt.test(m),mo.funcNames=typeof Au.name=="string";try{mo.dom=11===Su.createDocumentFragment().nodeType
}catch(t){mo.dom=false}try{mo.nonEnumArgs=!Yu.call(arguments,1)}catch(r){mo.nonEnumArgs=true}}(0,0),Wt.templateSettings={escape:ht,evaluate:_t,interpolate:gt,variable:"",imports:{_:Wt}};var wo=function(){function n(){}return function(t){if(Xe(t)){n.prototype=t;var r=new n;n.prototype=null}return r||_.Object()}}(),bo=yo?function(n,t){return yo.set(n,t),n}:vu;Du||(Ur=zu&&Xu?function(n){var t=n.byteLength,r=Qu?Pu(t/go):0,e=r*go,u=new zu(t);if(r){var o=new Qu(u,0,r);o.set(new Qu(n,0,r))}return t!=e&&(o=new Xu(u,e),o.set(new Xu(n,e))),u
}:gu(null));var xo=to&&Zu?function(n){return new Lt(n)}:gu(null),Ao=yo?function(n){return yo.get(n)}:mu,jo=function(){var n=0,t=0;return function(r,e){var u=To(),o=N-(u-t);if(t=u,0<o){if(++n>=W)return r}else n=0;return bo(r,e)}}(),ko=$r(function(n,t,r){Uu.call(n,r)?++n[r]:n[r]=1}),Eo=$r(function(n,t,r){Uu.call(n,r)?n[r].push(t):n[r]=[t]}),Ro=$r(function(n,t,r){n[r]=t}),Io=qr(Vt),Oo=qr(function(n){for(var t=-1,r=n.length,e=so;++t<r;){var u=n[t];u<e&&(e=u)}return e},true),Co=$r(function(n,t,r){n[r?0:1].push(t)
},function(){return[[],[]]}),To=io||function(){return(new bu).getTime()},So=no||function(n){return h(n)&&oe(n.length)&&Lu.call(n)==D||false};mo.dom||(Ze=function(n){return n&&1===n.nodeType&&h(n)&&!No(n)||false});var Wo=fo||function(n){return typeof n=="number"&&ro(n)};(Je(/x/)||Xu&&!Je(Xu))&&(Je=function(n){return Lu.call(n)==K});var No=Ku?function(n){if(!n||Lu.call(n)!=Y)return false;var t=n.valueOf,r=He(t)&&(r=Ku(t))&&Ku(r);return r?n==r||Ku(n)==r:ce(n)}:ce,Uo=Br(Ht),Fo=eo?function(n){if(n)var t=n.constructor,r=n.length;
return typeof t=="function"&&t.prototype===n||typeof n!="function"&&r&&oe(r)?le(n):Xe(n)?eo(n):[]}:le,Lo=Br(Ar),$o=Dr(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t)}),Bo=Dr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()});8!=ao(It+"08")&&(cu=function(n,t,r){return(r?ue(n,t,r):null==t)?t=0:t&&(t=+t),n=su(n),ao(n,t||(mt.test(n)?16:10))});var zo=Dr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Do=Dr(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))
});return Nt.prototype=wo(Wt.prototype),Ut.prototype=wo(Nt.prototype),Ut.prototype.constructor=Ut,Ft.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Ft.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Ft.prototype.has=function(n){return"__proto__"!=n&&Uu.call(this.__data__,n)},Ft.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Lt.prototype.push=function(n){var t=this.data;typeof n=="string"||Xe(n)?t.set.add(n):t.hash[n]=true
},Pe.Cache=Ft,Wt.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ou($);var r=n;n=t,t=r}return n=ro(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Wt.ary=function(n,t,r){return r&&ue(n,t,r)&&(t=null),t=n&&null==t?n.length:uo(+t||0,0),Yr(n,C,null,null,null,null,t)},Wt.assign=Uo,Wt.at=function(n){return oe(n?n.length:0)&&(n=se(n)),Qt(n,lr(arguments,false,false,1))},Wt.before=Le,Wt.bind=$e,Wt.bindAll=function(n){for(var t=n,r=1<arguments.length?lr(arguments,false,false,1):uu(n),e=-1,u=r.length;++e<u;){var o=r[e];
t[o]=Yr(t[o],x,t)}return t},Wt.bindKey=Be,Wt.callback=_u,Wt.chain=Ae,Wt.chunk=function(n,t,r){t=(r?ue(n,t,r):null==t)?1:uo(+t||1,1),r=0;for(var e=n?n.length:0,u=-1,o=wu(Mu(e/t));r<e;)o[++u]=Rr(n,r,r+=t);return o},Wt.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Wt.constant=gu,Wt.countBy=ko,Wt.create=function(n,t,r){var e=wo(n);return r&&ue(n,t,r)&&(t=null),t?nr(t,e,Fo(t)):e},Wt.curry=ze,Wt.curryRight=De,Wt.debounce=Me,Wt.defaults=function(n){if(null==n)return n;
var t=zt(arguments);return t.push(Jt),Uo.apply(w,t)},Wt.defer=function(n){return er(n,1,arguments,1)},Wt.delay=function(n,t){return er(n,t,arguments,2)},Wt.difference=function(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(So(r)||Ye(r))break}return ur(r,lr(arguments,false,true,++n))},Wt.drop=_e,Wt.dropRight=ge,Wt.dropRightWhile=function(n,t,r){var e=n?n.length:0;if(!e)return[];for(t=Hr(t,r,3);e--&&t(n[e],e,n););return Rr(n,0,e+1)},Wt.dropWhile=function(n,t,r){var e=n?n.length:0;if(!e)return[];
var u=-1;for(t=Hr(t,r,3);++u<e&&t(n[u],u,n););return Rr(n,u)},Wt.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&ue(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=typeof e=="undefined"||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Wt.filter=Re,Wt.flatten=function(n,t,r){var e=n?n.length:0;return r&&ue(n,t,r)&&(t=false),e?lr(n,t):[]},Wt.flattenDeep=function(n){return n&&n.length?lr(n,true):[]},Wt.flow=function(){var n=arguments,t=n.length;
if(!t)return function(n){return n};if(!qt(n,Je))throw new Ou($);return function(){for(var r=0,e=n[r].apply(this,arguments);++r<t;)e=n[r].call(this,e);return e}},Wt.flowRight=qe,Wt.forEach=Oe,Wt.forEachRight=Ce,Wt.forIn=function(n,t,r){return(typeof t!="function"||typeof r!="undefined")&&(t=Nr(t,r,3)),sr(n,t,ou)},Wt.forInRight=function(n,t,r){return t=Nr(t,r,3),pr(n,t,ou)},Wt.forOwn=function(n,t,r){return(typeof t!="function"||typeof r!="undefined")&&(t=Nr(t,r,3)),_r(n,t)},Wt.forOwnRight=function(n,t,r){return t=Nr(t,r,3),pr(n,t,Fo)
},Wt.functions=uu,Wt.groupBy=Eo,Wt.indexBy=Ro,Wt.initial=function(n){return ge(n,1)},Wt.intersection=function(){for(var n=[],r=-1,e=arguments.length,u=[],o=Qr(),i=o==t;++r<e;){var f=arguments[r];(So(f)||Ye(f))&&(n.push(f),u.push(i&&120<=f.length&&xo(r&&f)))}var e=n.length,i=n[0],a=-1,c=i?i.length:0,l=[],s=u[0];n:for(;++a<c;)if(f=i[a],0>(s?Bt(s,f):o(l,f))){for(r=e;--r;){var p=u[r];if(0>(p?Bt(p,f):o(n[r],f)))continue n}s&&s.push(f),l.push(f)}return l},Wt.invert=function(n,t,r){r&&ue(n,t,r)&&(t=null),r=-1;
for(var e=Fo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?Uu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Wt.invoke=function(n,t){return yr(n,t,Rr(arguments,2))},Wt.keys=Fo,Wt.keysIn=ou,Wt.map=Te,Wt.mapValues=function(n,t,r){var e={};return t=Hr(t,r,3),_r(n,function(n,r,u){e[r]=t(n,r,u)}),e},Wt.matches=yu,Wt.matchesProperty=function(n,t){return xr(n+"",rr(t,true))},Wt.memoize=Pe,Wt.merge=Lo,Wt.mixin=du,Wt.negate=function(n){if(typeof n!="function")throw new Ou($);return function(){return!n.apply(this,arguments)
}},Wt.omit=function(n,t,r){if(null==n)return{};if(typeof t!="function"){var e=Kt(lr(arguments,false,false,1),Iu);return fe(n,ur(ou(n),e))}return t=Nr(t,r,3),ae(n,function(n,r,e){return!t(n,r,e)})},Wt.once=function(n){return Le(n,2)},Wt.pairs=function(n){for(var t=-1,r=Fo(n),e=r.length,u=wu(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u},Wt.partial=Ke,Wt.partialRight=Ve,Wt.partition=Co,Wt.pick=function(n,t,r){return null==n?{}:typeof t=="function"?ae(n,Nr(t,r,3)):fe(n,lr(arguments,false,false,1))},Wt.pluck=function(n,t){return Te(n,jr(t))
},Wt.property=function(n){return jr(n+"")},Wt.propertyOf=function(n){return function(t){return null==n?w:n[t]}},Wt.pull=function(){var n=arguments[0];if(!n||!n.length)return n;for(var t=0,r=Qr(),e=arguments.length;++t<e;)for(var u=0,o=arguments[t];-1<(u=r(n,o,u));)Ju.call(n,u,1);return n},Wt.pullAt=function(t){var r=t||[],e=lr(arguments,false,false,1),u=e.length,o=Qt(r,e);for(e.sort(n);u--;){var i=parseFloat(e[u]);if(i!=f&&ee(i)){var f=i;Ju.call(r,i,1)}}return o},Wt.range=function(n,t,r){r&&ue(n,t,r)&&(t=r=null),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;
var e=-1;t=uo(Mu((t-n)/(r||1)),0);for(var u=wu(t);++e<t;)u[e]=n,n+=r;return u},Wt.rearg=function(n){var t=lr(arguments,false,false,1);return Yr(n,O,null,null,null,t)},Wt.reject=function(n,t,r){var e=So(n)?Pt:ar;return t=Hr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Wt.remove=function(n,t,r){var e=-1,u=n?n.length:0,o=[];for(t=Hr(t,r,3);++e<u;)r=n[e],t(r,e,n)&&(o.push(r),Ju.call(n,e--,1),u--);return o},Wt.rest=me,Wt.shuffle=Ue,Wt.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&ue(n,t,r)&&(t=0,r=e),Rr(n,t,r)):[]
},Wt.sortBy=function(n,t,e){var u=-1,o=n?n.length:0,i=oe(o)?wu(o):[];return e&&ue(n,t,e)&&(t=null),t=Hr(t,e,3),or(n,function(n,r,e){i[++u]={a:t(n,r,e),b:u,c:n}}),r(i,f)},Wt.sortByAll=function(n){var t=arguments;3<t.length&&ue(t[1],t[2],t[3])&&(t=[n,t[1]]);var e=-1,u=n?n.length:0,o=lr(t,false,false,1),i=oe(u)?wu(u):[];return or(n,function(n){for(var t=o.length,r=wu(t);t--;)r[t]=null==n?w:n[o[t]];i[++e]={a:r,b:e,c:n}}),r(i,a)},Wt.spread=function(n){if(typeof n!="function")throw new Ou($);return function(t){return n.apply(this,t)
}},Wt.take=function(n,t,r){return n&&n.length?((r?ue(n,t,r):null==t)&&(t=1),Rr(n,0,0>t?0:t)):[]},Wt.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?ue(n,t,r):null==t)&&(t=1),t=e-(+t||0),Rr(n,0>t?0:t)):[]},Wt.takeRightWhile=function(n,t,r){var e=n?n.length:0;if(!e)return[];for(t=Hr(t,r,3);e--&&t(n[e],e,n););return Rr(n,e+1)},Wt.takeWhile=function(n,t,r){var e=n?n.length:0;if(!e)return[];var u=-1;for(t=Hr(t,r,3);++u<e&&t(n[u],u,n););return Rr(n,0,u)},Wt.tap=function(n,t,r){return t.call(r,n),n
},Wt.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ou($);return false===r?e=false:Xe(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),St.leading=e,St.maxWait=+t,St.trailing=u,Me(n,t,St)},Wt.thru=je,Wt.times=function(n,t,r){if(n=+n,1>n||!ro(n))return[];var e=-1,u=wu(oo(n,po));for(t=Nr(t,r,1);++e<n;)e<po?u[e]=t(e):t(e);return u},Wt.toArray=function(n){var t=n?n.length:0;return oe(t)?t?zt(n):[]:iu(n)},Wt.toPlainObject=eu,Wt.transform=function(n,t,r,e){var u=So(n)||ru(n);
return t=Hr(t,e,4),null==r&&(u||Xe(n)?(e=n.constructor,r=u?So(n)?new e:[]:wo(Je(e)&&e.prototype)):r={}),(u?Mt:_r)(n,function(n,e,u){return t(r,n,e,u)}),r},Wt.union=function(){return Or(lr(arguments,false,true))},Wt.uniq=we,Wt.unzip=be,Wt.values=iu,Wt.valuesIn=function(n){return Cr(n,ou(n))},Wt.where=function(n,t){return Re(n,br(t))},Wt.without=function(n){return ur(n,Rr(arguments,1))},Wt.wrap=function(n,t){return t=null==t?vu:t,Yr(t,R,null,[n],[])},Wt.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];
if(So(r)||Ye(r))var e=e?ur(e,r).concat(ur(r,e)):r}return e?Or(e):[]},Wt.zip=function(){for(var n=arguments.length,t=wu(n);n--;)t[n]=arguments[n];return be(t)},Wt.zipObject=xe,Wt.backflow=qe,Wt.collect=Te,Wt.compose=qe,Wt.each=Oe,Wt.eachRight=Ce,Wt.extend=Uo,Wt.iteratee=_u,Wt.methods=uu,Wt.object=xe,Wt.select=Re,Wt.tail=me,Wt.unique=we,du(Wt,Wt),Wt.attempt=hu,Wt.camelCase=$o,Wt.capitalize=function(n){return(n=e(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Wt.clone=function(n,t,r,e){return typeof t!="boolean"&&null!=t&&(e=r,r=ue(n,t,e)?null:t,t=false),r=typeof r=="function"&&Nr(r,e,1),rr(n,t,r)
},Wt.cloneDeep=function(n,t,r){return t=typeof t=="function"&&Nr(t,r,1),rr(n,true,t)},Wt.deburr=fu,Wt.endsWith=function(n,t,r){n=e(n),t+="";var u=n.length;return r=(typeof r=="undefined"?u:oo(0>r?0:+r||0,u))-t.length,0<=r&&n.indexOf(t,r)==r},Wt.escape=function(n){return(n=e(n))&&pt.test(n)?n.replace(lt,l):n},Wt.escapeRegExp=au,Wt.every=Ee,Wt.find=Ie,Wt.findIndex=ve,Wt.findKey=function(n,t,r){return t=Hr(t,r,3),cr(n,t,_r,true)},Wt.findLast=function(n,t,r){return t=Hr(t,r,3),cr(n,t,ir)},Wt.findLastIndex=function(n,t,r){var e=n?n.length:0;
for(t=Hr(t,r,3);e--;)if(t(n[e],e,n))return e;return-1},Wt.findLastKey=function(n,t,r){return t=Hr(t,r,3),cr(n,t,gr,true)},Wt.findWhere=function(n,t){return Ie(n,br(t))},Wt.first=ye,Wt.has=function(n,t){return n?Uu.call(n,t):false},Wt.identity=vu,Wt.includes=ke,Wt.indexOf=de,Wt.isArguments=Ye,Wt.isArray=So,Wt.isBoolean=function(n){return true===n||false===n||h(n)&&Lu.call(n)==M||false},Wt.isDate=function(n){return h(n)&&Lu.call(n)==q||false},Wt.isElement=Ze,Wt.isEmpty=function(n){if(null==n)return true;var t=n.length;
return oe(t)&&(So(n)||tu(n)||Ye(n)||h(n)&&Je(n.splice))?!t:!Fo(n).length},Wt.isEqual=function(n,t,r,e){return r=typeof r=="function"&&Nr(r,e,3),!r&&ie(n)&&ie(t)?n===t:(e=r?r(n,t):w,typeof e=="undefined"?dr(n,t,r):!!e)},Wt.isError=Ge,Wt.isFinite=Wo,Wt.isFunction=Je,Wt.isMatch=function(n,t,r,e){var u=Fo(t),o=u.length;if(r=typeof r=="function"&&Nr(r,e,3),!r&&1==o){var i=u[0];if(e=t[i],ie(e))return null!=n&&e===n[i]&&Uu.call(n,i)}for(var i=wu(o),f=wu(o);o--;)e=i[o]=t[u[o]],f[o]=ie(e);return mr(n,u,i,f,r)
},Wt.isNaN=function(n){return Qe(n)&&n!=+n},Wt.isNative=He,Wt.isNull=function(n){return null===n},Wt.isNumber=Qe,Wt.isObject=Xe,Wt.isPlainObject=No,Wt.isRegExp=nu,Wt.isString=tu,Wt.isTypedArray=ru,Wt.isUndefined=function(n){return typeof n=="undefined"},Wt.kebabCase=Bo,Wt.last=function(n){var t=n?n.length:0;return t?n[t-1]:w},Wt.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?uo(e+r,0):oo(r||0,e-1))+1;else if(r)return u=Sr(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Wt.max=Io,Wt.min=Oo,Wt.noConflict=function(){return _._=$u,this},Wt.noop=mu,Wt.now=To,Wt.pad=function(n,t,r){n=e(n),t=+t;var u=n.length;return u<t&&ro(t)?(u=(t-u)/2,t=Pu(u),u=Mu(u),r=Kr("",u,r),r.slice(0,t)+n+r):n},Wt.padLeft=function(n,t,r){return(n=e(n))&&Kr(n,t,r)+n},Wt.padRight=function(n,t,r){return(n=e(n))&&n+Kr(n,t,r)},Wt.parseInt=cu,Wt.random=function(n,t,r){r&&ue(n,t,r)&&(t=r=null);var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=co(),oo(n+r*(t-n+parseFloat("1e-"+((r+"").length-1))),t)):kr(n,t)
},Wt.reduce=Se,Wt.reduceRight=We,Wt.repeat=lu,Wt.result=function(n,t,r){return t=null==n?w:n[t],typeof t=="undefined"&&(t=r),Je(t)?t.call(n):t},Wt.runInContext=m,Wt.size=function(n){var t=n?n.length:0;return oe(t)?t:Fo(n).length},Wt.snakeCase=zo,Wt.some=Fe,Wt.sortedIndex=function(n,t,r,e){var u=Hr(r);return u===tr&&null==r?Sr(n,t):Wr(n,t,u(r,e,1))},Wt.sortedLastIndex=function(n,t,r,e){var u=Hr(r);return u===tr&&null==r?Sr(n,t,true):Wr(n,t,u(r,e,1),true)},Wt.startCase=Do,Wt.startsWith=function(n,t,r){return n=e(n),r=null==r?0:oo(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r
},Wt.template=function(n,t,r){var u=Wt.templateSettings;r&&ue(n,t,r)&&(t=r=null),n=e(n),t=Ht(Ht({},r||t),u,Xt),r=Ht(Ht({},t.imports),u.imports,Xt);var o,i,f=Fo(r),a=Cr(r,f),c=0;r=t.interpolate||xt;var l="__p+='";r=Ru((t.escape||xt).source+"|"+r.source+"|"+(r===gt?vt:xt).source+"|"+(t.evaluate||xt).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Et,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t
}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(it,""):l).replace(ft,"$1").replace(at,"$1;"),l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=hu(function(){return Au(f,p+"return "+l).apply(w,a)}),t.source=l,Ge(t))throw t;return t},Wt.trim=su,Wt.trimLeft=function(n,t,r){var u=n;return(n=e(n))?n.slice((r?ue(u,t,r):null==t)?v(n):o(n,t+"")):n
},Wt.trimRight=function(n,t,r){var u=n;return(n=e(n))?(r?ue(u,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n},Wt.trunc=function(n,t,r){r&&ue(n,t,r)&&(t=null);var u=T;if(r=S,null!=t)if(Xe(t)){var o="separator"in t?t.separator:o,u="length"in t?+t.length||0:u;r="omission"in t?e(t.omission):r}else u=+t||0;if(n=e(n),u>=n.length)return n;if(u-=r.length,1>u)return r;if(t=n.slice(0,u),null==o)return t+r;if(nu(o)){if(n.slice(u).search(o)){var i,f=n.slice(0,u);for(o.global||(o=Ru(o.source,(yt.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;
t=t.slice(0,null==i?u:i)}}else n.indexOf(o,u)!=u&&(o=t.lastIndexOf(o),-1<o&&(t=t.slice(0,o)));return t+r},Wt.unescape=function(n){return(n=e(n))&&st.test(n)?n.replace(ct,d):n},Wt.uniqueId=function(n){var t=++Fu;return e(n)+t},Wt.words=pu,Wt.all=Ee,Wt.any=Fe,Wt.contains=ke,Wt.detect=Ie,Wt.foldl=Se,Wt.foldr=We,Wt.head=ye,Wt.include=ke,Wt.inject=Se,du(Wt,function(){var n={};return _r(Wt,function(t,r){Wt.prototype[r]||(n[r]=t)}),n}(),false),Wt.sample=Ne,Wt.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return Ne(t,n)
}):Ne(this.value())},Wt.VERSION=b,Mt("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Wt[n].placeholder=Wt}),Mt(["filter","map","takeWhile"],function(n,t){var r=t==U,e=t==L;Ut.prototype[n]=function(n,u){var o=this.clone(),i=o.__filtered__,f=o.__iteratees__||(o.__iteratees__=[]);return o.__filtered__=i||r||e&&0>o.__dir__,f.push({iteratee:Hr(n,u,3),type:t}),o}}),Mt(["drop","take"],function(n,t){var r="__"+n+"Count__",e=n+"While";Ut.prototype[n]=function(e){e=null==e?1:uo(Pu(e)||0,0);
var u=this.clone();if(u.__filtered__){var o=u[r];u[r]=t?oo(o,e):o+e}else(u.__views__||(u.__views__=[])).push({size:e,type:n+(0>u.__dir__?"Right":"")});return u},Ut.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()},Ut.prototype[n+"RightWhile"]=function(n,t){return this.reverse()[e](n,t).reverse()}}),Mt(["first","last"],function(n,t){var r="take"+(t?"Right":"");Ut.prototype[n]=function(){return this[r](1).value()[0]}}),Mt(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");
Ut.prototype[n]=function(){return this[r](1)}}),Mt(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?br:jr;Ut.prototype[n]=function(n){return this[r](e(n))}}),Ut.prototype.compact=function(){return this.filter(vu)},Ut.prototype.dropWhile=function(n,t){var r;return n=Hr(n,t,3),this.filter(function(t,e,u){return r||(r=!n(t,e,u))})},Ut.prototype.reject=function(n,t){return n=Hr(n,t,3),this.filter(function(t,r,e){return!n(t,r,e)})},Ut.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=0>n?this.takeRight(-n):this.drop(n);
return typeof t!="undefined"&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r},Ut.prototype.toArray=function(){return this.drop(0)},_r(Ut.prototype,function(n,t){var r=Wt[t],e=/^(?:first|last)$/.test(t);Wt.prototype[t]=function(){function t(n){return n=[n],Vu.apply(n,o),r.apply(Wt,n)}var u=this.__wrapped__,o=arguments,i=this.__chain__,f=!!this.__actions__.length,a=u instanceof Ut,c=a&&!f;return e&&!i?c?n.call(u):r.call(Wt,this.value()):a||So(u)?(u=n.apply(c?u:new Ut(this),o),e||!f&&!u.__actions__||(u.__actions__||(u.__actions__=[])).push({func:je,args:[t],thisArg:Wt}),new Nt(u,i)):this.thru(t)
}}),Mt("concat join pop push shift sort splice unshift".split(" "),function(n){var t=Cu[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|shift)$/.test(n);Wt.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),Ut.prototype.clone=function(){var n=this.__actions__,t=this.__iteratees__,r=this.__views__,e=new Ut(this.__wrapped__);return e.__actions__=n?zt(n):null,e.__dir__=this.__dir__,e.__dropCount__=this.__dropCount__,e.__filtered__=this.__filtered__,e.__iteratees__=t?zt(t):null,e.__takeCount__=this.__takeCount__,e.__views__=r?zt(r):null,e
},Ut.prototype.reverse=function(){if(this.__filtered__){var n=new Ut(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Ut.prototype.value=function(){var n=this.__wrapped__.value();if(!So(n))return Tr(n,this.__actions__);var t,r=this.__dir__,e=0>r;t=n.length;for(var u=this.__views__,o=0,i=-1,f=u?u.length:0;++i<f;){var a=u[i],c=a.size;switch(a.type){case"drop":o+=c;break;case"dropRight":t-=c;break;case"take":t=oo(t,o+c);break;case"takeRight":o=uo(o,t-c)}}t={start:o,end:t},i=t.start,f=t.end,t=f-i,u=this.__dropCount__,o=oo(t,this.__takeCount__),e=e?f:i-1,f=(i=this.__iteratees__)?i.length:0,a=0,c=[];
n:for(;t--&&a<o;){for(var e=e+r,l=-1,s=n[e];++l<f;){var p=i[l],h=p.iteratee(s,e,n),p=p.type;if(p==F)s=h;else if(!h){if(p==U)continue n;break n}}u?u--:c[a++]=s}return c},Wt.prototype.chain=function(){return Ae(this)},Wt.prototype.commit=function(){return new Nt(this.value(),this.__chain__)},Wt.prototype.plant=function(n){for(var t,r=this;r instanceof Nt;){var e=he(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Wt.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Ut?(this.__actions__.length&&(n=new Ut(this)),new Nt(n.reverse(),this.__chain__)):this.thru(function(n){return n.reverse()
})},Wt.prototype.toString=function(){return this.value()+""},Wt.prototype.run=Wt.prototype.toJSON=Wt.prototype.valueOf=Wt.prototype.value=function(){return Tr(this.__wrapped__,this.__actions__)},Wt.prototype.collect=Wt.prototype.map,Wt.prototype.head=Wt.prototype.first,Wt.prototype.select=Wt.prototype.filter,Wt.prototype.tail=Wt.prototype.rest,Wt}var w,b="3.2.0",x=1,A=2,j=4,k=8,E=16,R=32,I=64,O=128,C=256,T=30,S="...",W=150,N=16,U=0,F=1,L=2,$="Expected a function",B="__lodash_placeholder__",z="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Y="[object Object]",Z="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nt="[object Int16Array]",tt="[object Int32Array]",rt="[object Uint8Array]",et="[object Uint8ClampedArray]",ut="[object Uint16Array]",ot="[object Uint32Array]",it=/\b__p\+='';/g,ft=/\b(__p\+=)''\+/g,at=/(__e\(.*?\)|\b__t\))\+'';/g,ct=/&(?:amp|lt|gt|quot|#39|#96);/g,lt=/[&<>"'`]/g,st=RegExp(ct.source),pt=RegExp(lt.source),ht=/<%-([\s\S]+?)%>/g,_t=/<%([\s\S]+?)%>/g,gt=/<%=([\s\S]+?)%>/g,vt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,yt=/\w*$/,dt=/^\s*function[ \n\r\t]+\w/,mt=/^0[xX]/,wt=/^\[object .+?Constructor\]$/,bt=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,xt=/($^)/,At=/[.*+?^${}()|[\]\/\\]/g,jt=RegExp(At.source),kt=/\bthis\b/,Et=/['\n\r\u2028\u2029\\]/g,Rt=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]{2,}(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),It=" \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",Ot="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window WinRTError".split(" "),Ct={};
Ct[X]=Ct[H]=Ct[Q]=Ct[nt]=Ct[tt]=Ct[rt]=Ct[et]=Ct[ut]=Ct[ot]=true,Ct[z]=Ct[D]=Ct[J]=Ct[M]=Ct[q]=Ct[P]=Ct[K]=Ct["[object Map]"]=Ct[V]=Ct[Y]=Ct[Z]=Ct["[object Set]"]=Ct[G]=Ct["[object WeakMap]"]=false;var Tt={};Tt[z]=Tt[D]=Tt[J]=Tt[M]=Tt[q]=Tt[X]=Tt[H]=Tt[Q]=Tt[nt]=Tt[tt]=Tt[V]=Tt[Y]=Tt[Z]=Tt[G]=Tt[rt]=Tt[et]=Tt[ut]=Tt[ot]=true,Tt[P]=Tt[K]=Tt["[object Map]"]=Tt["[object Set]"]=Tt["[object WeakMap]"]=false;var St={leading:false,maxWait:0,trailing:false},Wt={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Nt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ut={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Ft={"function":true,object:true},Lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$t=Ft[typeof window]&&window!==(this&&this.window)?window:this,Bt=Ft[typeof exports]&&exports&&!exports.nodeType&&exports,Ft=Ft[typeof module]&&module&&!module.nodeType&&module,zt=Bt&&Ft&&typeof global=="object"&&global;
!zt||zt.global!==zt&&zt.window!==zt&&zt.self!==zt||($t=zt);var zt=Ft&&Ft.exports===Bt&&Bt,Dt=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($t._=Dt, define(function(){return Dt})):Bt&&Ft?zt?(Ft.exports=Dt)._=Dt:Bt._=Dt:$t._=Dt}).call(this);
/*global angular*/
/*eslint no-loop-func:0, func-names:0*/

(function withAngular(angular) {
  'use strict';

  angular.module('720kb.socialshare', [])
  .directive('socialshare', ['$window', '$location', function manageDirective ($window, $location) {

    return {
      'restrict': 'A',
      'link': function linkingFunction ($scope, element, attr) {

        var key,
          attributeName,
          properties = {},
          propDefaults = {
          'url': '',
          'provider': '',
          'text': '',
          'media': '',
          'hashtags': '',
          'via': '',
          'popupHeight': 500,
          'popupWidth': 500
        };

        // Observe the values in each of the properties so that if they're updated elsewhere,
        // they are updated in this directive.
        for (key in propDefaults) {
          if (propDefaults.hasOwnProperty(key)) {
            attributeName = 'socialshare' + key.substring(0, 1).toUpperCase() + key.substring(1);
            if (attr[attributeName]) {
              (function (keyName) {
                attr.$observe(attributeName, function (value) {
                  properties[keyName] = value;
                });
              }(key));
            } else {
              // Use the default
              properties[key] = propDefaults[key];
            }
          }
        }

        properties.eventTrigger = attr.socialshareTrigger || 'click';

        $scope.facebookShare = function manageFacebookShare (data) {

          $window.open(
            '//www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(data.url)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.twitterShare = function manageTwitterShare (data) {
          var urlString = '//www.twitter.com/intent/tweet?';

          if (data.text) {
            urlString += 'text=' + encodeURIComponent(data.text);
          }

          if (data.via) {
            urlString += '&via=' + encodeURI(data.via);
          }

          if (data.hashtags) {
            urlString += '&hashtags=' + encodeURI(data.hashtags);
          }

          // Default to the current page if a URL isn't specified
          urlString += '&url=' + encodeURIComponent(data.url || $location.absUrl());

          $window.open(
            urlString,
            'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight
          );

        };

        $scope.googlePlusShare = function manageGooglePlusShare (data) {

          $window.open(
            '//plus.google.com/share?url=' + encodeURIComponent(data.url)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.redditShare = function manageRedditShare (data) {

          $window.open(
            '//www.reddit.com/submit?url=' + encodeURIComponent(data.url) + '&title=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.stumbleuponShare = function manageStumbleuponShare (data) {

          $window.open(
            '//www.stumbleupon.com/submit?url=' + encodeURIComponent(data.url) + '&title=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.linkedinShare = function manageLinkedinShare (data) {

          $window.open(
            '//www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(data.url) + '&title=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.pinterestShare = function managePinterestShare (data) {

          $window.open(
            '//www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(data.url) + '&media=' + encodeURI(data.media) + '&description=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.diggShare = function manageDiggShare (data) {

          $window.open(
            '//www.digg.com/submit?url=' + encodeURIComponent(data.url) + '&title=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.tumblrShare = function manageTumblrShare (data) {
          //tumblr doesnt likes http:// or https:// actually its a mistery
          $window.open(
            '//www.tumblr.com/share/link?url=' + encodeURIComponent(data.url.replace('http://', '').replace('https://')) + '&description=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.vkShare = function manageVkShare (data) {

         $window.open(
            '//www.vk.com/share.php?url=' + encodeURIComponent(data.url)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.deliciousShare = function manageDeliciousShare (data) {

          $window.open(
            '//www.delicious.com/save?v=5&noui&jump=close&url=' + encodeURIComponent(data.url) + '&title=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        element.bind(properties.eventTrigger, function onEventTriggered() {

          switch (properties.provider) {
            case 'facebook':

              $scope.facebookShare(properties);
              break;

            case 'google+':

              $scope.googlePlusShare(properties);
              break;

            case 'twitter':

              $scope.twitterShare(properties);
              break;

            case 'stumbleupon':

              $scope.stumbleuponShare(properties);
              break;

            case 'reddit':

              $scope.redditShare(properties);
              break;

            case 'pinterest':

              $scope.pinterestShare(properties);
              break;

            case 'linkedin':

              $scope.linkedinShare(properties);
              break;

            case 'digg':

              $scope.diggShare(properties);
              break;

            case 'tumblr':

              $scope.tumblrShare(properties);
              break;

            case 'delicious':

              $scope.deliciousShare(properties);
              break;

            case 'vk':

              $scope.vkShare(properties);
              break;

            default: return;
          }
        });
      }
    };
  }]);
}(angular));

/*! 3.2.4 */
!function(){function a(a,b){window.XMLHttpRequest.prototype[a]=b(window.XMLHttpRequest.prototype[a])}function b(a,b,c,d,g,h){function j(){return"input"===b[0].tagName.toLowerCase()&&b.attr("type")&&"file"===b.attr("type").toLowerCase()}function k(b){if(!p){p=!0;try{var j=b.__files_||b.target&&b.target.files,k=[],l=[],m=g(c.ngAccept);for(i=0;i<j.length;i++){var n=j.item(i);f(a,m,n,b)?k.push(n):l.push(n)}e(g,h,a,d,c,c.ngFileChange||c.ngFileSelect,k,l,b),0==k.length&&(b.target.value=k),b.target&&b.target.getAttribute("__ngf_gen__")&&angular.element(b.target).remove()}finally{p=!1}}}function l(b){c.ngMultiple&&b.attr("multiple",g(c.ngMultiple)(a)),c.accept&&b.attr("accept",c.accept),c.ngCapture&&b.attr("capture",g(c.ngCapture)(a)),c.ngDisabled&&b.attr("disabled",g(c.ngDisabled)(a)),b.bind("change",k)}function m(){if(!b.attr("disabled")){for(var a=angular.element('<input type="file">'),c=0;c<b[0].attributes.length;c++){var d=b[0].attributes[c];a.attr(d.name,d.value)}return j()?(b.replaceWith(a),b=a):(a.css("width","0px").css("height","0px").css("position","absolute").css("padding",0).css("margin",0).css("overflow","hidden").attr("tabindex","-1").css("opacity",0).attr("__ngf_gen__",!0),b.__ngf_ref_elem__&&b.__ngf_ref_elem__.remove(),b.__ngf_ref_elem__=a,b.parent()[0].insertBefore(a[0],b[0]),b.css("overflow","hidden")),l(a),a}}function n(b){e(g,h,a,d,c,c.ngFileChange||c.ngFileSelect,[],[],b,!0)}function o(a){var c=m(a);c&&(n(a),c[0].click()),j()&&(b.bind("click",o),a.preventDefault())}var p=!1;window.FileAPI&&window.FileAPI.ngfFixIE?window.FileAPI.ngfFixIE(b,m,k,n):b.bind("click",o)}function c(a,b,c,g,h,j,k){function l(a,b,c){var d=!0,e=c.dataTransfer.items;if(null!=e)for(i=0;i<e.length&&d;i++)d=d&&("file"==e[i].kind||""==e[i].kind)&&f(a,s,e[i],c);var g=h(b.dragOverClass)(a,{$event:c});return g&&(g.delay&&(r=g.delay),g.accept&&(g=d?g.accept:g.reject)),g||b.dragOverClass||"dragover"}function m(b,c,d,e){function g(c){f(a,s,c,b)?l.push(c):m.push(c)}function h(a,b,c){if(null!=b)if(b.isDirectory){var d=(c||"")+b.name;g({name:b.name,type:"directory",path:d});var e=b.createReader(),f=[];o++;var j=function(){e.readEntries(function(d){try{if(d.length)f=f.concat(Array.prototype.slice.call(d||[],0)),j();else{for(i=0;i<f.length;i++)h(a,f[i],(c?c:"")+b.name+"/");o--}}catch(e){o--,console.error(e)}},function(){o--})};j()}else o++,b.file(function(a){try{o--,a.path=(c?c:"")+a.name,g(a)}catch(b){o--,console.error(b)}},function(){o--})}var l=[],m=[],n=b.dataTransfer.items,o=0;if(n&&n.length>0&&"file"!=k.protocol())for(i=0;i<n.length;i++){if(n[i].webkitGetAsEntry&&n[i].webkitGetAsEntry()&&n[i].webkitGetAsEntry().isDirectory){var p=n[i].webkitGetAsEntry();if(p.isDirectory&&!d)continue;null!=p&&h(l,p)}else{var q=n[i].getAsFile();null!=q&&g(q)}if(!e&&l.length>0)break}else{var r=b.dataTransfer.files;if(null!=r)for(i=0;i<r.length&&(g(r.item(i)),e||!(l.length>0));i++);}var t=0;!function u(a){j(function(){if(o)10*t++<2e4&&u(10);else{if(!e&&l.length>1){for(i=0;"directory"==l[i].type;)i++;l=[l[i]]}c(l,m)}},a||0)}()}var n=d();if(c.dropAvailable&&j(function(){a.dropAvailable?a.dropAvailable.value=n:a.dropAvailable=n}),!n)return 1==h(c.hideOnDropNotAvailable)(a)&&b.css("display","none"),void 0;var o,p=null,q=h(c.stopPropagation),r=1,s=h(c.ngAccept),t=h(c.ngDisabled);b[0].addEventListener("dragover",function(d){if(!t(a)){if(d.preventDefault(),q(a)&&d.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var e=d.dataTransfer.effectAllowed;d.dataTransfer.dropEffect="move"===e||"linkMove"===e?"move":"copy"}j.cancel(p),a.actualDragOverClass||(o=l(a,c,d)),b.addClass(o)}},!1),b[0].addEventListener("dragenter",function(b){t(a)||(b.preventDefault(),q(a)&&b.stopPropagation())},!1),b[0].addEventListener("dragleave",function(){t(a)||(p=j(function(){b.removeClass(o),o=null},r||1))},!1),b[0].addEventListener("drop",function(d){t(a)||(d.preventDefault(),q(a)&&d.stopPropagation(),b.removeClass(o),o=null,m(d,function(b,f){e(h,j,a,g,c,c.ngFileChange||c.ngFileDrop,b,f,d)},0!=h(c.allowDir)(a),c.multiple||h(c.ngMultiple)(a)))},!1)}function d(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a}function e(a,b,c,d,e,f,g,h,i,j){function k(){d&&(a(e.ngModel).assign(c,g),b(function(){d&&d.$setViewValue(null!=g&&0==g.length?null:g)})),e.ngModelRejected&&a(e.ngModelRejected).assign(c,h),f&&a(f)(c,{$files:g,$rejectedFiles:h,$event:i})}j?k():b(function(){k()})}function f(a,b,c,d){var e=b(a,{$file:c,$event:d});if(null==e)return!0;if(angular.isString(e)){var f=new RegExp(g(e),"gi");e=null!=c.type&&c.type.match(f)||null!=c.name&&c.name.match(f)}return e}function g(a){if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])return a.substring(1,a.length-1);var b=a.split(","),c="";if(b.length>1)for(i=0;i<b.length;i++)c+="("+g(b[i])+")",i<b.length-1&&(c+="|");else 0==a.indexOf(".")&&(a="*"+a),c="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",c=c.replace(/\\\*/g,".*").replace(/\\\?/g,".");return c}var h,i;window.XMLHttpRequest&&!window.XMLHttpRequest.__isFileAPIShim&&a("setRequestHeader",function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}});var j=angular.module("angularFileUpload",[]);j.version="3.2.4",j.service("$upload",["$http","$q","$timeout",function(a,b,c){function d(d){d.method=d.method||"POST",d.headers=d.headers||{},d.transformRequest=d.transformRequest||function(b,c){return window.ArrayBuffer&&b instanceof window.ArrayBuffer?b:a.defaults.transformRequest[0](b,c)};var e=b.defer(),f=e.promise;return d.headers.__setXHR_=function(){return function(a){a&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e.notify?e.notify(a):f.progress_fn&&c(function(){f.progress_fn(a)})},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e.notify?e.notify(a):f.progress_fn&&c(function(){f.progress_fn(a)}))},!1))}},a(d).then(function(a){e.resolve(a)},function(a){e.reject(a)},function(a){e.notify(a)}),f.success=function(a){return f.then(function(b){a(b.data,b.status,b.headers,d)}),f},f.error=function(a){return f.then(null,function(b){a(b.data,b.status,b.headers,d)}),f},f.progress=function(a){return f.progress_fn=a,f.then(null,null,function(b){a(b)}),f},f.abort=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),f},f.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(f,arguments),a.apply(f,arguments)}}(d.xhrFn),f},f}this.upload=function(a){return a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?"[object Array]"===Object.prototype.toString.call(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(b){var c=new FormData,d={};for(h in a.fields)a.fields.hasOwnProperty(h)&&(d[h]=a.fields[h]);if(b&&(d.data=b),a.formDataAppender)for(h in d)d.hasOwnProperty(h)&&a.formDataAppender(c,h,d[h]);else for(h in d)if(d.hasOwnProperty(h)){var e=d[h];void 0!==e&&("[object String]"===Object.prototype.toString.call(e)?c.append(h,e):a.sendObjectsAsJsonBlob&&"object"==typeof e?c.append(h,new Blob([e],{type:"application/json"})):c.append(h,JSON.stringify(e)))}if(null!=a.file){var f=a.fileFormDataName||"file";if("[object Array]"===Object.prototype.toString.call(a.file)){var g="[object String]"===Object.prototype.toString.call(f);for(i=0;i<a.file.length;i++)c.append(g?f:f[i],a.file[i],a.fileName&&a.fileName[i]||a.file[i].name)}else c.append(f,a.file,a.fileName||a.file.name)}return c}),d(a)},this.http=function(a){return d(a)}}]),j.directive("ngFileSelect",["$parse","$timeout","$compile",function(a,c,d){return{restrict:"AEC",require:"?ngModel",link:function(e,f,g,h){b(e,f,g,h,a,c,d)}}}]),j.directive("ngFileDrop",["$parse","$timeout","$location",function(a,b,d){return{restrict:"AEC",require:"?ngModel",link:function(e,f,g,h){c(e,f,g,h,a,b,d)}}}]),j.directive("ngNoFileDrop",function(){return function(a,b){d()&&b.css("display","none")}}),j.directive("ngFileDropAvailable",["$parse","$timeout",function(a,b){return function(c,e,f){if(d()){var g=a(f.ngFileDropAvailable);b(function(){g(c)})}}}]);var k=angular.module("ngFileUpload",[]);for(h in j)j.hasOwnProperty(h)&&(k[h]=j[h])}();