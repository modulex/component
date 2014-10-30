modulex.add("component/control",["xtemplate/runtime","util","node","event-dom/gesture/basic","event-dom/gesture/tap","base","ua","feature"],function(e,t,n){var r,s,a,o,i=e("xtemplate/runtime"),l=e("util"),u=e("node"),d=e("event-dom/gesture/basic"),c=e("event-dom/gesture/tap"),h=e("base"),f=e("ua"),g=e("feature");r=function(e){var t,n=0,r={},s={};return e=t={__instances:s,addComponent:function(e){s[e.get("id")]=e},removeComponent:function(e){delete s[e.get("id")]},getComponent:function(e){return s[e]},createComponent:function(e,n){var r,s;if(e){if(!e.isControl&&n&&(e.prefixCls||(e.prefixCls=n.get("prefixCls")),!e.xclass&&e.prefixXClass&&(e.xclass=e.prefixXClass,e.xtype&&(e.xclass+="-"+e.xtype))),!e.isControl&&(s=e.xclass)){if(r=t.getConstructorByXClass(s),!r)throw new Error("can not find class by xclass desc : "+s);e=new r(e)}e.isControl&&n&&e.setInternal("parent",n)}return e},getConstructorByXClass:function(e){var t,n,s,a=e.split(/\s+/),o=-1,i=null;for(n=0;n<a.length;n++)s=r[a[n]],s&&(t=s.priority)>o&&(o=t,i=s.constructor);return i},setConstructorByXClass:function(e,t){r[e]={constructor:t,priority:n++}}}}(),s=function(e){return e=function(e){function t(e,t){{var n=e.data;e.affix}t.data+="\r\n ",u.line=4;var r=n;return t=t.writeEscaped(r),t.data+="\r\n",t}function n(e,t,n){var r=e.data,a=e.affix;t.data+="\r\n ",u.line=9;var o=(s=a.xindex)!==n?s:(s=r.xindex)!==n?s:e.resolveLooseUp(["xindex"]);t=t.writeEscaped(o),t.data+='="';var i=r;return t=t.writeEscaped(i),t.data+='"\r\n',t}function r(e,t,n){var r=e.data,a=e.affix;t.data+="\r\n ",u.line=14;var o=(s=a.xindex)!==n?s:(s=r.xindex)!==n?s:e.resolveLooseUp(["xindex"]);t=t.writeEscaped(o),t.data+=":";var i=r;return t=t.writeEscaped(i),t.data+=";\r\n",t}{var s,a=this,o=a.root,i=a.buffer,l=a.scope,u=(a.runtime,a.name,a.pos),d=l.data,c=l.affix,h=o.nativeCommands,f=o.utils,g=f.callFn,v=(f.callCommand,h.range,h.foreach,h.forin,h.each);h["with"],h["if"],h.set,h.include,h.parse,h.extend,h.block,h.macro,h["debugger"]}i.data+='<div id="';var p=(s=c.id)!==e?s:(s=d.id)!==e?s:l.resolveLooseUp(["id"]);i=i.writeEscaped(p),i.data+='"\r\n class="',u.line=2;var C;C=g(a,l,{escape:1},i,["getBaseCssClasses"]),i=i.writeEscaped(C),i.data+="\r\n",u.line=3,u.line=3;var m=(s=c.elCls)!==e?s:(s=d.elCls)!==e?s:l.resolveLooseUp(["elCls"]);i=v.call(a,l,{params:[m],fn:t},i),i.data+='\r\n"\r\n\r\n',u.line=8,u.line=8;var y=(s=c.elAttrs)!==e?s:(s=d.elAttrs)!==e?s:l.resolveLooseUp(["elAttrs"]);i=v.call(a,l,{params:[y],fn:n},i),i.data+='\r\n\r\nstyle="\r\n',u.line=13,u.line=13;var b=(s=c.elStyle)!==e?s:(s=d.elStyle)!==e?s:l.resolveLooseUp(["elStyle"]);return i=v.call(a,l,{params:[b],fn:r},i),i.data+='\r\n">',i},n.exports.TPL_NAME=n.id||n.name,e}(),a=function(e){var t=s,n=i,r=new n(t);return e=function(){return r.render.apply(r,arguments)}}(),o=function(e){function t(e){return e||(e=[""]),"string"==typeof e&&(e=e.split(/\s+/)),e}function n(e,t,n){for(var r,s="",a=0,o=n.length,i=e+t;o>a;a++)r=n[a],r=r?"-"+r:r,s+=" "+i+r;return s}function s(e){return"number"==typeof e&&(e+="px"),e}function o(e){var t,n,r,s=this,a=s.getAttrs();for(n in a)t=a[n],t.parse&&(r=t.parse.call(s,e),void 0!==r&&s.setInternal(n,r))}function i(e,t){for(var n=e.split(/\s+/),r=[],s=0,a=n.length;a>s;s++){var o=v.trim(n[s]);o&&v.startsWith(o,t)&&r.push(o.substring(t.length))}return r.join(" ")}var v=l,p=u,C=d,m=c,y=r,b=h,x=a,I=f,_=g,w=b.prototype.__getHook,B="</div>",S=_.isTouchGestureSupported(),U=v.noop,D=v.trim,E=document,M=e=b.extend({isControl:!0,bindInternal:U,syncInternal:U,initializer:function(){var e,t,n=this,r=n.getAttrs();n.renderData={},n.childrenElSelectors={},n.renderCommands={getBaseCssClasses:function(e,t){return n.getBaseCssClasses(t&&t.params&&t.params[0])},getBaseCssClass:function(){return n.getBaseCssClass(arguments[1].params[0])}};for(e in r)t=r[e],t.selector&&(n.childrenElSelectors[e]=t.selector)},beforeCreateDom:function(e){var t,n,r,a,o,i,l,u=this,d=u.get("elAttrs"),c=u.getAttrs(),h=u.get("elStyle"),f=u.get("elCls");for(o in c)i=c[o],i.render&&(e[o]=u.get(o));t=e.width,n=e.height,r=e.visible,l=e.zIndex,t&&(h.width=s(t)),n&&(h.height=s(n)),l&&(h["z-index"]=l),r||f.push(u.getBaseCssClasses("hidden")),(a=u.get("disabled"))&&(f.push(u.getBaseCssClasses("disabled")),d["aria-disabled"]="true"),u.get("highlighted")&&f.push(u.getBaseCssClasses("hover"))},createDom:function(){var e=this,t=e.renderTpl(x)+e.renderTpl(e.get("contentTpl"))+B;e.$el=p(t),e.el=e.$el[0],e.fillChildrenElsBySelectors()},decorateDom:function(e){var t=this;t.$el=e,t.el=e[0],t.fillChildrenElsBySelectors(),o.call(t,e)},renderUI:function(){var e=this;y.addComponent(e);var t=e.$el;if(e.get("allowTextSelection")||t.unselectable(),!e.get("srcNode")){var n=e.get("render"),r=e.get("elBefore");r?t.insertBefore(r,void 0):n?t.appendTo(n,void 0):t.appendTo(E.body,void 0)}},bindUI:function(){var e=this;if(e.get("focusable")){var t=e.getKeyEventTarget();t.on("focus",e.handleFocus,e).on("blur",e.handleBlur,e).on("keydown",e.handleKeydown,e),I.ieMode<9&&t.attr("hideFocus",!0),t.attr("tabindex",e.get("disabled")?"-1":"0")}e.get("handleGestureEvents")&&e.$el.on("mouseenter",e.handleMouseEnter,e).on("mouseleave",e.handleMouseLeave,e).on("contextmenu",e.handleContextMenu,e).on(C.START,e.handleMouseDown,e).on(C.END,e.handleMouseUp,e).on(m.TAP,e.handleClick,e)},syncUI:U,create:function(){var e=this;if(!e.get("created")){e.fire("beforeCreateDom");var t=e.get("srcNode");t&&e.decorateDom(t),e.beforeCreateDom(e.renderData,e.renderCommands,e.childrenElSelectors),t||e.createDom(),e.__callPluginsMethod("pluginCreateDom"),e.fire("afterCreateDom"),e.setInternal("created",!0)}return e},render:function(){var e=this;return e.get("rendered")||(e.create(),e.fire("beforeRenderUI"),e.renderUI(),e.__callPluginsMethod("pluginRenderUI"),e.fire("afterRenderUI"),e.fire("beforeBindUI"),M.superclass.bindInternal.call(e),e.bindUI(),e.__callPluginsMethod("pluginBindUI"),e.fire("afterBindUI"),e.fire("beforeSyncUI"),M.superclass.syncInternal.call(e),e.syncUI(),e.__callPluginsMethod("pluginSyncUI"),e.fire("afterSyncUI"),e.setInternal("rendered",!0)),e},plug:function(e){var t,n=this,r=n.get("plugins");return n.callSuper(e),t=r[r.length-1],n.get("rendered")?(t.pluginCreateDom&&t.pluginCreateDom(n),t.pluginRenderUI&&t.pluginCreateDom(n),t.pluginBindUI&&t.pluginBindUI(n),t.pluginSyncUI&&t.pluginSyncUI(n)):n.get("created")&&t.pluginCreateDom&&t.pluginCreateDom(n),n},getKeyEventTarget:function(){return this.$el},handleMouseEnter:function(e){this.get("disabled")||this.handleMouseEnterInternal(e)},handleMouseEnterInternal:function(e){this.set("highlighted",!!e)},handleMouseLeave:function(e){this.get("disabled")||this.handleMouseLeaveInternal(e)},handleMouseLeaveInternal:function(e){var t=this;t.set("active",!1),t.set("highlighted",!e)},handleMouseDown:function(e){this.get("disabled")||this.handleMouseDownInternal(e)},handleMouseDownInternal:function(e){var t,n=this,r=1===e.which;(r||S)&&(n.get("activeable")&&n.set("active",!0),n.get("focusable")&&e.target!==n.getKeyEventTarget()[0]&&n.focus(),n.get("allowTextSelection")||"mouse"!==e.gestureType||(t=e.target.nodeName,t=t&&t.toLowerCase(),"input"!==t&&"textarea"!==t&&"button"!==t&&e.preventDefault()))},handleMouseUp:function(e){this.get("disabled")||this.handleMouseUpInternal(e)},handleMouseUpInternal:function(e){var t=this;t.get("active")&&(1===e.which||S)&&t.set("active",!1)},handleContextMenu:function(e){this.get("disabled")||this.handleContextMenuInternal(e)},handleContextMenuInternal:function(){},handleFocus:function(){this.get("disabled")||this.handleFocusInternal()},handleFocusInternal:function(){this.focus(),this.fire("focus")},handleBlur:function(){this.get("disabled")||this.handleBlurInternal()},handleBlurInternal:function(){this.blur(),this.fire("blur")},handleKeydown:function(e){var t=this;return!this.get("disabled")&&t.handleKeyDownInternal(e)?(e.halt(),!0):void 0},handleKeyDownInternal:function(e){return e.keyCode===p.Event.KeyCode.ENTER?this.handleClickInternal(e):void 0},handleClick:function(e){this.get("disabled")||this.handleClickInternal(e)},handleClickInternal:function(){var e=this;e.get("focusable")&&e.focus()},$:function(e){return this.$el.all(e)},$one:function(e){return this.$el.one(e)},fillChildrenElsBySelectors:function(e){var t,n,r=this,s=r.$el;e=e||r.childrenElSelectors;for(t in e){n=e[t];var a=n.call(r,s);"string"==typeof a&&(a=r.$one(a)),r.setInternal(t,a)}},renderTpl:function(e,t,n){var r=this;return t=t||r.renderData,n=n||r.renderCommands,e(t,{commands:n})},getComponentConstructorByNode:function(e,t){var n=t[0].className;return n?(n=i(n,e),y.getConstructorByXClass(n)):null},getComponentCssClasses:function(){var e=this;if(e.componentCssClasses)return e.componentCssClasses;for(var t,n=e.constructor,r=[];n&&!n.prototype.hasOwnProperty("isControl");)t=n.xclass,t&&r.push(t),n=n.superclass&&n.superclass.constructor;return e.componentCssClasses=r,r},getBaseCssClasses:function(e){e=t(e);for(var r=this.getComponentCssClasses(),s=0,a="",o=r.length,i=this.get("prefixCls");o>s;s++)a+=n(i,r[s],e);return D(a)},getBaseCssClass:function(e){return D(n(this.get("prefixCls"),this.getComponentCssClasses()[0],t(e)))},createComponent:function(e,t){return y.createComponent(e,t||this)},show:function(){var e=this;return e.render(),e.set("visible",!0),e},hide:function(){var e=this;return e.set("visible",!1),e},focus:function(){this.get("focusable")&&this.set("focused",!0)},blur:function(){this.get("focusable")&&this.set("focused",!1)},move:function(e,t){this.set({x:e,y:t})},_onSetWidth:function(e){this.$el.width(e)},_onSetHeight:function(e){this.$el.height(e)},_onSetContent:function(e){var t=this.$el;t.html(e),this.get("allowTextSelection")||t.unselectable()},_onSetVisible:function(e){var t=this,n=t.$el,r=t.getBaseCssClasses("hidden");e?n.removeClass(r):n.addClass(r),this.fire(e?"show":"hide")},_onSetHighlighted:function(e){var t=this,n=t.getBaseCssClasses("hover"),r=t.$el;r[e?"addClass":"removeClass"](n)},_onSetDisabled:function(e){var t=this,n=t.getBaseCssClasses("disabled"),r=t.$el;r[e?"addClass":"removeClass"](n).attr("aria-disabled",e),t.get("focusable")&&t.getKeyEventTarget().attr("tabindex",e?-1:0)},_onSetActive:function(e){var t=this,n=t.getBaseCssClasses("active");t.$el[e?"addClass":"removeClass"](n).attr("aria-pressed",!!e)},_onSetZIndex:function(e){this.$el.css("z-index",e)},_onSetFocused:function(e){var t=this.getKeyEventTarget()[0];if(e)try{t.focus()}catch(n){}else t.ownerDocument.activeElement===t&&t.ownerDocument.body.focus();var r=this,s=r.$el,a=r.getBaseCssClasses("focused");s[e?"addClass":"removeClass"](a)},_onSetX:function(e){this.$el.offset({left:e})},_onSetY:function(e){this.$el.offset({top:e})},destructor:function(e){var t=this;y.removeComponent(t),e!==!1&&t.$el&&t.$el.remove()}},{__hooks__:{beforeCreateDom:w("__beforeCreateDom"),createDom:w("__createDom"),decorateDom:w("__decorateDom"),renderUI:w("__renderUI"),bindUI:w("__bindUI"),syncUI:w("__syncUI")},name:"control",ATTRS:{contentTpl:{value:function(e){return e.content}},content:{parse:function(e){return e.html()},render:1,sync:0,value:""},width:{render:1,sync:0},height:{render:1,sync:0},elCls:{render:1,valueFn:function(){return[]},setter:function(e){return"string"==typeof e&&(e=e.split(/\s+/)),e||[]}},elStyle:{render:1,valueFn:function(){return{}}},elAttrs:{render:1,valueFn:function(){return{}}},x:{},y:{},xy:{setter:function(e){var t=this,n=v.makeArray(e);return n.length&&(void 0!==n[0]&&t.set("x",n[0]),void 0!==n[1]&&t.set("y",n[1])),e},getter:function(){return[this.get("x"),this.get("y")]}},zIndex:{render:1,sync:0},visible:{render:1,sync:0,value:!0},activeable:{value:!0},focused:{},active:{value:!1},highlighted:{render:1,sync:0,value:!1},disabled:{render:1,sync:0,value:!1,parse:function(e){return e.hasClass(this.getBaseCssClass("disabled"))}},rendered:{value:!1},created:{value:!1},render:{},id:{render:1,parse:function(e){var t=e.attr("id");return t||(t=v.guid("ks-component"),e.attr("id",t)),t},valueFn:function(){return v.guid("ks-component")}},elBefore:{},el:{getter:function(){return this.$el}},srcNode:{setter:function(e){return p(e)}},handleGestureEvents:{value:!1},focusable:{value:!1},allowTextSelection:{value:!0},prefixCls:{render:1,value:"ks-"},prefixXClass:{},parent:{setter:function(e,t){(t=this.get("parent"))&&this.removeTarget(t),e&&this.addTarget(e)}}}});return M.extend=function T(){var e,t=v.makeArray(arguments),n=this,r=t.length,s=t[r-1];s&&(e=s.xclass)&&(s.name=e);var a=b.extend.apply(n,arguments);return a.extend=T,e&&y.setConstructorByXClass(e,a),a},M.Manager=y,e}(),n.exports=o});