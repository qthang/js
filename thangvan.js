!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",e.onerror=function(){myFunction(),window.adblock=!0};var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();
var lazyanalytics=!1;function gtag(){dataLayer.push(arguments)}window.addEventListener("scroll",(function(){(0!=document.documentElement.scrollTop&&!1===lazyanalytics||0!=document.body.scrollTop&&!1===lazyanalytics)&&(function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="//www.googletagmanager.com/gtag/js?id=UA-111745653-1",a.onerror=function(){myFunction(),window.adblock=!0};var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(a,t)}(),lazyanalytics=!0)}),!0),window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-111745653-1");
// Youtube Responsive
$("youtube").each(function(){$(this).append('<div class="youtube-wrap"><div class="youtube-inner"><iframe width="560" height="315" data-src="https://www.youtube.com/embed/'+ $(this).text() +'?rel=0&theme=dark&controls=1&showinfo=0&autohide=0" frameborder="0" allowfullscreen=""></iframe></div></div>');});function init() {var vidDefer = document.getElementsByTagName('iframe');for (var i = 0; i < vidDefer.length; i++) {if (vidDefer[i].getAttribute('data-src')) {vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));}}}window.onload = init;
