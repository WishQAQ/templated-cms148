/// <reference path="jquery-1.4.2.min.js" />
/// <reference path="jquery.easing.1.3.js" />

/*------focus-------*/
$("#focusBar").hover(
	function () {
	    $("#focusBar .arrL").stop(false, true);
	    $("#focusBar .arrR").stop(false, true);
	    $("#focusBar .arrL").animate({ left: 0 }, { duration: 500 });
	    $("#focusBar .arrR").animate({ right: 0 }, { duration: 500 });
	}, function () {
	    $("#focusBar .arrL").stop(false, true);
	    $("#focusBar .arrR").stop(false, true);
	    $("#focusBar .arrL").animate({ left: -52 }, { duration: 500 });
	    $("#focusBar .arrR").animate({ right: -52 }, { duration: 500 });
	}
);

var timerFID;

function nextPage() {
    changeFocus(true);
}

function prePage() {
    changeFocus(false);
}

var currentFocusI = 1;
var changeingFocus = false;

function changeFocus(dir) {
    if ($("#focusBar li").length <= 1) return;
    if (changeingFocus) return;
    changeingFocus = true;

    $("#focusIndex" + nextI).stop(false, true);
    $("#focusIndex" + nextI + " .focusL").stop(false, true);
    $("#focusIndex" + nextI + " .focusR").stop(false, true);

    var nextI = dir ? currentFocusI + 1 : currentFocusI - 1;
    nextI = nextI > $("#focusBar li").length ? 1 : (nextI < 1 ? $("#focusBar li").length : nextI);
    //var focusWidth = $(document.body).outerWidth()>1000?1000:$(document.body).outerWidth();
    $("#focusIndex" + currentFocusI).css("width", $(document.body).outerWidth());
    $("#focusIndex" + nextI).css("width", $(document.body).outerWidth());
    if (dir) {
        $("#focusIndex" + nextI).css("left", $(document.body).outerWidth());
        $("#focusIndex" + nextI + " .focusL").css("left", $(document.body).outerWidth() / 2);
        $("#focusIndex" + nextI + " .focusR").css("left", $(document.body).outerWidth() / 2);
        $("#focusIndex" + currentFocusI).show();
        $("#focusIndex" + nextI).show();

        $("#focusIndex" + currentFocusI + " .focusL").animate({
            left: -($(document.body).outerWidth() / 2 + 1900)
        }, 300, 'easeInExpo');
        $("#focusIndex" + currentFocusI + " .focusR").animate({
            left: -($(document.body).outerWidth() / 2 + 1900)
        }, 950, 'easeInExpo', function () {
            $("#focusIndex" + nextI + " .focusL").animate({
                left: -950
            }, 1000, 'easeInOutCirc');
            $("#focusIndex" + nextI + " .focusR").animate({
                left: -950
            }, 1200, 'easeInOutCirc');

            $("#focusIndex" + currentFocusI).animate({
                left: -$(document.body).outerWidth()
            }, 1000, 'easeOutExpo');
            $("#focusIndex" + nextI).animate({
                left: 0
            }, 1000, 'easeOutExpo', function () {
                $("#focusIndex" + currentFocusI).hide();
                currentFocusI = nextI;
                changeingFocus = false;
            });
        });
    } else {
        $("#focusIndex" + nextI).css("left", -$(document.body).outerWidth());
        $("#focusIndex" + nextI + " .focusL").css("left", -($(document.body).outerWidth() / 2 + 1900));
        $("#focusIndex" + nextI + " .focusR").css("left", -($(document.body).outerWidth() / 2 + 1900));
        $("#focusIndex" + currentFocusI).show();
        $("#focusIndex" + nextI).show();

        $("#focusIndex" + currentFocusI + " .focusR").animate({
            left: $(document.body).outerWidth() / 2
        }, 300, 'easeInExpo');
        $("#focusIndex" + currentFocusI + " .focusL").animate({
            left: $(document.body).outerWidth() / 2
        }, 950, 'easeInExpo', function () {
            $("#focusIndex" + nextI + " .focusL").animate({
                left: -950
            }, 1200, 'easeInOutCirc');
            $("#focusIndex" + nextI + " .focusR").animate({
                left: -950
            }, 1000, 'easeInOutCirc');

            $("#focusIndex" + currentFocusI).animate({
                left: $(document.body).outerWidth()
            }, 1000, 'easeOutExpo');
            $("#focusIndex" + nextI).animate({
                left: 0
            }, 1000, 'easeOutExpo', function () {
                $("#focusIndex" + currentFocusI).hide();
                currentFocusI = nextI;
                changeingFocus = false;
            });
        });
    }
}

function starFocustAm() {
    timerFID = setInterval("timer_tickF()", 6000);
}

function stopFocusAm() {
    clearInterval(timerFID);
}

function timer_tickF() {
    changeFocus(true);
}
starFocustAm();