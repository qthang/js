function myFunction(){if(1!=window.adblock){var t=document.createElement("div");t.id="levelmaxblock",t.innerHTML='<div class="inner"><div class="emoji emoji--sad"><div class="emoji__face"><div class="emoji__eyebrows"></div><div class="emoji__eyes"></div><div class="emoji__mouth"></div></div></div><div class="header"><h2>Đã phát hiện Chặn Quảng Cáo</h2></div><div class="isi"><p>Vui lòng hỗ trợ chúng tôi bằng cách tắt trình chặn quảng cáo của bạn</p><div class="tombol"><button class="2" onclick="window.location.reload()">Đã tắt! Tải lại trang</button></div></div></div>',document.body.append(t),document.body.style.overflow="hidden";var e=t.querySelectorAll("button");t.querySelector(".close");var c=t.querySelectorAll(".caranya > div");for(t=0;t<e.length;t++)e[t].addEventListener("click",(function(t){t.preventDefault(),t=this.getAttribute("class").split(" ")[0];for(var i=0;i<c.length;i++)c[i].classList.remove("active"),e[i].classList.remove("active");e[t-1].classList.add("active"),c[t-1].classList.add("active")}))}}
