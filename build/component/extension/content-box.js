modulex.add("component/extension/content-box",["xtemplate/runtime"],function(t,n,e){var o,a,r,c=t("xtemplate/runtime");o=function(t){return t=function(t){{var n,e=this,o=e.root,a=e.buffer,r=e.scope,c=(e.name,e.pos),i=r.data,s=r.affix,l=o.nativeCommands,u=o.utils,f=u.callFn;u.callCommand,l.range,l.foreach,l.forin,l.each,l["with"],l["if"],l.set,l.include,l.parse,l.extend,l.block,l.macro,l["debugger"]}a.data+='<div class="',c.line=1;var d;d=f(e,r,{escape:1,params:["content"]},a,["getBaseCssClasses"]),a=a.writeEscaped(d),a.data+='">';var m=(n=s.content)!==t?n:(n=i.content)!==t?n:r.resolveLooseUp(["content"]);return a=a.write(m),a.data+="</div>",a},e.exports.TPL_NAME=e.id||e.name,t}(),a=function(t){var n=o,e=c,a=new e(n);return t=function(){return a.render.apply(a,arguments)}}(),r=function(t){function n(t){var n=t.get("contentEl");t.$contentEl=t.$contentEl=n,t.contentEl=t.contentEl=n&&n[0]}function e(){}var o=a;return e.prototype={__createDom:function(){n(this)},__decorateDom:function(){n(this)},getChildrenContainerEl:function(){return this.get("contentEl")},_onSetContent:function(t){var n=this.$contentEl;n.html(t),this.get("allowTextSelection")||n.unselectable()}},e.ATTRS={contentTpl:{value:o},contentEl:{selector:function(){return"."+this.getBaseCssClass("content")}},content:{parse:function(){return this.get("contentEl").html()}}},t=e}(),e.exports=r});