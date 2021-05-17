<script defer='defer' type='text/javascript'>
//<![CDATA[
function idbcomments(a) {
  var e;
  e = "<ul class='dsq-widget-list'>";
  for (var t = 0; numComments > t; t++) {
    var r, o, n, i;
    if (t == a.feed.entry.length) break;
    e += "<li class='dsq-widget-item'>";
    for (var d = a.feed.entry[t], s = 0; s < d.link.length; s++) "alternate" == d.link[s].rel && (r = d.link[s].href);
    for (var l = 0; l < d.author.length; l++) o = d.author[l].name.$t, n = d.author[l].gd$image.src;
    n = -1 != n.indexOf("/s1600/") ? n.replace("/s1600/", "/s" + avatarSize + "-c/") : -1 != n.indexOf("/s220/") ? n.replace("/s220/", "/s" + avatarSize + "-c/") : -1 != n.indexOf("/s512-c/") && 0 != n.indexOf("https:") ? "https:" + n.replace("/s512-c/", "/s" + avatarSize + "-c/") : -1 != n.indexOf("blogblog.com/img/b16-rounded.gif") ? "//1.bp.blogspot.com/-7bkcAKdpGXI/UrbyQRqvSKI/AAAAAAAAFmI/oBv_yMeYnMQ/s" + avatarSize + "/blogger.png" : -1 != n.indexOf("blogblog.com/img/openid16-rounded.gif") ? "//2.bp.blogspot.com/-VgnInuIUKBU/UrbzyXTYWRI/AAAAAAAAFmU/3f_Vfj3TI6A/s" + avatarSize + "/openid.png" : -1 != n.indexOf("blogblog.com/img/blank.gif") ? -1 != defaultAvatar.indexOf("gravatar.com") ? defaultAvatar + "&s=" + avatarSize : defaultAvatar : n, 1 == showAvatar && (i = 1 == roundAvatar ? "avatarRound" : "", e += '<div class="dsq-widget-user ' + i + '"><a title="Truy cập đến bình luận đó" href="' + r + '"><img class="' + i + '" src="' + n + '" alt="' + o + '" width="' + avatarSize + '" height="' + avatarSize + '"/>' + o + '</a></div>');
    var A = d.content.$t,
      v = A.replace(/(<([^>]+)>)/gi, ""),
      dd = d.gd$extendedProperty[1].value,
	  vv='';
	  moreLinktext='';
	  moreLinktext=r;
      moreLinktext = moreLinktext.slice(moreLinktext.lastIndexOf('/') + 1);
      moreLinktext = moreLinktext.slice(0, moreLinktext.lastIndexOf('?') + 0);

    "" != v && v.length > characters ? (v = v.substring(0, characters), v += "&hellip;") : v, e += "<span class='dsq-widget-comment'><p>" + v + "</p></span>",
  	vv += '<a href="' + r + '">' + moreLinktext + "</a>", vv +="&nbsp;·&nbsp;"+dd, e += "<p class='dsq-widget-meta'>" + vv + "</p>",
	e += "</li>"
  }
  e += "</ul>";
  var c = "";
  0 == hideCredits && (c = "display:block;"), e += "", document.write(e)
}
var numComments = 10, // số cmt
    showAvatar = 1, // hiện avatar hay không
    avatarSize = 38, // kích thước avatar
    roundAvatar = !0, // avatar có bo tròn không
    characters = 50, // số kí tự của nhận xét
    showMorelink = 1, // hiện link đọc thêm
    defaultAvatar = "https://4.bp.blogspot.com/-jmA-qIOJIFU/WfgKSYnhm5I/AAAAAAAAABQ/ElEIBlHd31gISODb3GlA9Z_JPRKiSzvYQCLcBGAs/s35/Logo-Bac-Si-Windows.png",
    hideCredits = !0,
    numComments = numComments || 10,
    avatarSize = avatarSize || 60,
    characters = characters || 25,
    defaultAvatar = defaultAvatar || "https://4.bp.blogspot.com/-jmA-qIOJIFU/WfgKSYnhm5I/AAAAAAAAABQ/ElEIBlHd31gISODb3GlA9Z_JPRKiSzvYQCLcBGAs/s35/Logo-Bac-Si-Windows.png",
    moreLinktext = moreLinktext || " More &raquo;",
    showAvatar = "undefined" == typeof showAvatar ? !0 : showAvatar,
    showMorelink = "undefined" == typeof showMorelink ? !1 : showMorelink,
    roundAvatar = "undefined" == typeof roundAvatar ? !0 : roundAvatar,
    hideCredits = "undefined" == typeof hideCredits ? !1 : roundAvatar;
//]]>
  
</script>
<!--<script src='/feeds/comments/default?alt=json&amp;callback=idbcomments' type='text/javascript'/>-->
<script defer='defer' type='text/javascript'>
//<![CDATA[
//document.write("<scr" + "ipt type=\"text/javascript\" src=\"https://qthang62.disqus.com/recent_comments_widget.js?num_items=25&hide_mods=0&hide_avatars=0&avatar_size=32&excerpt_length=180\"></scr" + "ipt>");
//]]>
</script>
