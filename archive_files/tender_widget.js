




/*
     FILE ARCHIVED ON 16:18:40 Oct 14, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:18:40 Oct 14, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/

var domReady=(function(){var fns=[],fn,f=false,doc=document,testEl=doc.documentElement,hack=testEl.doScroll,domContentLoaded='DOMContentLoaded',addEventListener='addEventListener',onreadystatechange='onreadystatechange',loaded=/^loade|c/.test(doc.readyState),ready
function flush(f){loaded=1
while(f=fns.shift())f()}
doc[addEventListener]&&doc[addEventListener](domContentLoaded,fn=function(){doc.removeEventListener(domContentLoaded,fn,f)
flush()},f)
hack&&doc.attachEvent(onreadystatechange,(fn=function(){if(/^c/.test(doc.readyState)){doc.detachEvent(onreadystatechange,fn)
flush()}}))
return(ready=hack?function(fn){self!=top?loaded?fn():fns.push(fn):function(){try{testEl.doScroll('left')}catch(e){return setTimeout(function(){ready(fn)},50)}
fn()}()}:function(fn){loaded?fn():fns.push(fn)});})();;(function(){window.Tender=window.Tender||{};function queryValueFor(url,name){var name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]"),regexS="[\\?&]"+name+"=([^&#]*)",regex=new RegExp(regexS),results=regex.exec(url)
if(results==null)return"";return results[1];}
var getHost=function(){var parseURL=(function(a){return function(b){a.href=b;return{"protocol":a.protocol,"host":a.host};}})(document.createElement("a"))
var scripts=document.getElementsByTagName("script");for(var i=0;i<scripts.length;i++){var script=scripts[i].src;if(script.match(/(tender_)?widget\.js(\?.*)?$/)){var link=parseURL(script);var host=link['protocol']+'//'+link['host']+'/';}}
return host;}
var getOptions=function(){var query={}
var scripts=document.getElementsByTagName("script");for(var i=0;i<scripts.length;i++){var script=scripts[i].src;if(script.match(/tender_widget\.js(\?.*)?$/)){query['location']=queryValueFor(script,'location')
query['category']=queryValueFor(script,'category_id')}}
return query;}
var visible=false;var initialized=false;var host=getHost();var options=getOptions()
if(!host||host=="")host="//help.tenderapp.com/";var showWidget=function(){if(!initialized)initialize();else show();}
Tender.showWidget=showWidget;var show=function(){document.getElementById('tender_window').style.display='';document.getElementById('tender_toggler').style.display='none';visible=true;}
var hide=function(){document.getElementById('tender_window').style.display='none';if(!Tender.hideToggle)document.getElementById('tender_toggler').style.display='';visible=false;}
var initialize=function(){var element=document.createElement('div');var url=host+'widget/discussion/new?r='+Math.random();if(Tender.home=='kb'||Tender.hide_discussion)
url=host+'widget/faqs?';if(Tender.sso)url+="&sso="+encodeURIComponent(Tender.sso)
if(Tender.widgetEmail)url+='&email='+encodeURIComponent(Tender.widgetEmail)
if(Tender.forcePrivate===true)url+='&private=1';if(Tender.hide_kb)url+="&hide_kb=1";if(Tender.hide_discussion)url+="&hide_discussion=1";if(Tender.category)url+="&category="+encodeURIComponent(Tender.category)
if(Tender.title)url+="&title="+encodeURIComponent(Tender.title)
if(Tender.body)url+="&body="+encodeURIComponent(Tender.body)
url+='&referrer='+escape(document.location)
var wrapper='<div id="tender_window"><a href="#" id="tender_closer">Close</a><div id="tender_frame"><iframe src="'+url+'" scrolling="no" frameborder="0" width="100%" height="100%"></iframe></div></div>';element.innerHTML=wrapper;var iframe=element.getElementsByTagName('iframe')[0];document.body.appendChild(element);var close_link=document.getElementById('tender_closer');close_link.onclick=function(){hide();return false;};Tender.observer=function(event){event=event||window.event;var keycode=event.charCode||event.keyCode;if(keycode==27||event.data=="TenderCloseWidget"){document.getElementById('tender_closer').onclick();}}
if(document.addEventListener){document.body.addEventListener('keyup',Tender.observer,false);document.addEventListener('message',Tender.observer,false);}
else if(document.attachEvent){document.body.attachEvent('onkeyup',Tender.observer);document.attachEvent('message',Tender.observer,false);}
initialized=true;show();}
styles="#tender_window{ position: absolute; top: 20px; left: 10px; right: 10px; margin: auto; max-width:680px; height:715px; padding:3px; background:url("+host+"images/widget/overlay_back.png); z-index:9999; }";styles+="#tender_window iframe{ border:none; width:100%; height:100%; } ";styles+="#tender_window #tender_frame{ width:100%; height:100%; background:url("+host+"images/widget/loader.gif) 50% 50% no-repeat #fff; } ";styles+="#tender_closer{ position:absolute; top:18px; right:18px; color:#fff; font-family:Helvetica, Arial, sans-serif; font-size:12px; font-weight:bold; text-decoration:none; border:none; } ";styles+="#tender_closer{ color: #80B3CC }";styles+="#tender_toggler{ position:absolute; top:100px; right:0px; width:33px; height:105px; padding:3px 0 3px 3px; background:url("+host+"images/widget/overlay_back.png); } ";styles+="#tender_toggler_link{ display:block; width:100%; height:100%; text-decoration:none; border:none; text-indent:-9999px; background: #006699 url("+host+"images/widget/tab_text_"+(options['location']||"right")+".gif) !important; } "
if(options['location']=='left'){styles+="#tender_toggler{ top:100px; left:0px; width:33px; height:105px; padding:3px 3px 3px 0;  } ";}else if(options['location']=='top'){styles+="#tender_toggler{ top:0; left:100px; width:105px; height:33px; padding:0 3px 3px 3px;";}else if(options['location']=='bottom'){styles+="#tender_toggler{ bottom:0; top:inherit; left:100px; width:105px; height:33px; padding:3px 3px 0 3px;";}
domReady(function(){var toggler=document.createElement('div');toggler.innerHTML='<div id="tender_toggler"><a href="#" id="tender_toggler_link">Help &amp; Support</a></div>';document.body.appendChild(toggler);document.getElementById('tender_toggler_link').onclick=function(){showWidget();return false;}
if(Tender.widgetToggles){for(var i=0;i<Tender.widgetToggles.length;i++){var toggle=Tender.widgetToggles[i];if(toggle==null)continue;toggle.onclick=function(){showWidget();return false;}}}
if(Tender.hideToggle){var t=document.getElementById('tender_toggler');t.style.display='none';}
var style=document.createElement('style');style.setAttribute("type","text/css");style.setAttribute("charset","utf-8");try{style.appendChild(document.createTextNode(styles));document.getElementsByTagName("head").item(0).appendChild(style);}catch(e){}
if(document.createStyleSheet){document.createStyleSheet(host+'tender_widget_styles.css');}});})();