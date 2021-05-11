var getlink = $('#getlink'),
    gotolink = $('gotolink'),
    url = '';

function update_progress(pct) {

    if (!isNaN(pct)) {
        if (pct > 101) {
            pct = 101
        }; // Too High
        if (pct < 0) {
            pct = 0
        }; // Too Low
        var offset = ((-parseFloat(pct) / 100) * 220) - 220; // Getting offset for the SVG

        $('.progress-bar').attr('stroke-dashoffset', offset);
        $('.progress-label').text(Number(Math.round(pct + 'e2') + 'e-2') + '%'); // Rounds to two decimal places
    };

    // Check for finish
		var tt = luu2[0].innerHTML;
        tt = tt.split("%");
        var luut = parseInt(tt[0], 10)
    var timerxong;
    if (pct === 101 && luut>=99) {
        timerxong = setTimeout(function() {
            $('.progress-bar').css('transition', '0.4s cubic-bezier(0.5,0,0.2,1)');
        }, 1000);
    } else {
        clearTimeout(timerxong);
    }
    (pct === 101 && luut>=99) ? (complete()) : (incomplete());
    //if(pct === 90) glink();
};

// Complete and Error States
function complete() {
    $('.phantram').addClass('hidden').removeClass('error');
    $('.quangcaoan').addClass('hidden')
    $('#getlink').prop("disabled", !1);
    $('#getlink').removeClass("hidden");
    var request = !1;
    $('#getlink').click(function() {
            0 == request && (gotolinkcountdown(), request = !0),
                $("html, body").animate({
                    scrollTop: eval($('#gotolink').offset().top - 120)
                }, 500),
                glink()
        }),
        $('#gotolink').on("click", function() {
            //var query = window.location.search.substring(1);
            //const params = new URLSearchParams(query)
            //var h = params.get('url');
            if (url.length > 0) {
                try {
                    //let url = new URL(decodeURIComponent(h.substr(0)));
                    let u = new URL(url);
                    u.searchParams.set('utm_source', 'qthang');
                    window.location.href = u;
                } catch (e) {
                    console.error(e.message);
                    return;
                }
            } else {
                alert('Getlink bị lỗi! Tải lại trang này hoặc sử dụng link khác.');
            }
        });
};

function glink() {
    var query = window.location.search.substring(1);
    const params = new URLSearchParams(query);
    var ur = atob(params.get('url'));
    var p = ur.split('&')[0];
    var n = ur.split('&')[1];
    var lastChar = n.substr(n.length - 1);
    if (lastChar == "/") {
        n = n.substring(0, n.lastIndexOf("/"));
    }
    n = n.substring(n.lastIndexOf("/") + 1);
    console.log(p);
    console.log(n);;
    if (n.length >= 6) {
        url = ur.split('&')[1];
        console.log("n>=6:" + url);
    } else {
        var thoigian = new Date();
        var gio = thoigian.getHours();
        console.log("Giờ hiện tại: " + gio);

        if (duphong === false) {
            var link = "https://link.qthang.net/getdata.php?p=https://www.qthang.net" + p + "&n=" + n;
        } else {
            var link = "https://qthang.000webhostapp.com/getdata.php?p=https://www.qthang.net" + p + "&n=" + n;
        }
        console.log("Link đang dùng: " + link);
        getJSON(link, function(data) {
                //alert('Data was collected successfully.');
                url = data[0].OLink;
                console.log("Link get: " + url);
            },
            function(status) {
                alert("Can not connect to server! Contact Web Admin.");
            });
    }

}

var getJSON = function(url, successHandler, errorHandler) {
    var xhr = typeof XMLHttpRequest != 'undefined' ?
        new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', url, true);
    xhr.onreadystatechange = function() {
        var status;
        var data;
        // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
        if (xhr.readyState == 4) { // `DONE`
            status = xhr.status;
            if (status == 200) {
                data = JSON.parse(xhr.responseText);
                successHandler && successHandler(data);
            } else {
                errorHandler && errorHandler(status);
            }
        }
    };
    xhr.send();
};


function incomplete() {
    $('.container').removeClass('flipped complete');
};

function error() {
    $('.container').addClass('flipped error').removeClass('complete');
};

function no_error() {
    $('.container').removeClass('flipped error');
};

function gotolinkcountdown() {
    var o = 5;
    $('#gotolink').removeClass("hidden");
    var n = setInterval(function() {
        var e = o -= 1;
        $('#gotolink').html('<span class="fa fa-cog fa-spin"></span> Please Wait...'),
            e < 1 && (
                $('#gotolink').prop("disabled", !1),
                $('#gotolink').html('<span class="fa fa-check"></span> Go to Link')
            ), e < 0 && (
                clearInterval(n),
                $('.quangcaoan').removeClass("hidden")

            )
    }, 1e3)
}

// For testing
function test() {
    setTimeout(function() {
        // your code here
        $('.progress-bar').css('transition', '0.12s ease');
        //for(var i = 0; i <= 100; i++) { timer_thing(i); };
        timers = [];

        prtimer1(0);

        //setTimeout(function(){ $('.progress-bar').css('transition', '0.4s cubic-bezier(0.5,0,0.2,1)'); }, 10100);

    }, 1500);

};


//function timer_thing(i) { setTimeout(function(){ update_progress(i) }, (100 * i)); };
test();

//function prtimer
var luu;
var luu2 = document.getElementsByClassName("progress-label");

function pauseTimer() {
    console.log('p-pause:' + pause1);
    console.log('p-resume:' + resume1);
    console.log(luu);
    if (luu == undefined || resume1 == true) {
        pause1 = true;
        var t = luu2[0].innerHTML;
        t = t.split("%");
        luu = parseInt(t[0], 10) - 1;

        // clear all timers in the array
        while (idd--) {
            window.clearTimeout(idd); // will do nothing if no timeout with id is present
        }

        console.log(luu);
    } else {
        resume1 = false;
    }

};

function resumeTimer() {
    console.log(luu);
    console.log('r-pause:' + pause1);
    console.log('r-resume:' + resume1);

    if (luu > 0 && luu != undefined) {
        resume1 = true;
        console.log(luu + "--" + resume1);
		setTimeout(function() {
        	prtimer1(luu);
		}, 800);
    }

}

//start.addEventListener("click", function () {
//    prtimer1(0);
//}, false);

window.addEventListener('blur', pauseTimer, false);

//resume.addEventListener("click", resumeTimer, false);
window.addEventListener('focus', resumeTimer, false);

var pause1 = false;
var resume1 = false;
var idd;

function prtimer1(s) {
    console.log(s + 'pr');
    for (i = 0; i <= (150 - s); i++) {
        timer_thing(i);
    };
}

function timer_thing(i) {
    var luu1;
    if (resume1 == true) {
        luu1 = i + luu;
    } else {
        luu1 = i
    };
    idd = setTimeout(function() {
        update_progress(luu1)
    }, (150 * i));

};
