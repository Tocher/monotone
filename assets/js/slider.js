$(document).ready(function() {

var jssor_1_SlideoTransitions = [
  [{b:5500,d:3000,o:-1,r:240,e:{r:2}}],
  [{b:-1,d:1,o:-1,r:-150},{b:7500,d:1600,o:1,r:150,e:{r:3}}],
  [{b:10000,d:2000,x:-379,e:{x:7}}],
  [{b:10000,d:2000,x:-379,e:{x:7}}],
  [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:9100,d:900,x:-1400,y:-663,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:10000,d:1600,x:-200,o:-1,e:{x:16}}]
];

  var options = {
      $SlideDuration: 800,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
      $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)
      $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
      $Idle: 1500                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
  };

  var jssor_slider1 = new $JssorSlider$("slider1_container", options);

//responsive code begin
//you can remove responsive code if you don't want the slider to scale along with window
function ScaleSlider() {
    var windowWidth = $(window).width();

    if (windowWidth) {
        var windowHeight = $(window).height();
        var originalWidth = jssor_slider1.$OriginalWidth();
        var originalHeight = jssor_slider1.$OriginalHeight();

        if (originalWidth / windowWidth > originalHeight / windowHeight) {
            jssor_slider1.$ScaleHeight(windowHeight);
        }
        else {
            jssor_slider1.$ScaleWidth(windowWidth);
        }
    }
    else
        window.setTimeout(ScaleSlider, 30);
}

ScaleSlider();

$(window).bind("load", ScaleSlider);
$(window).bind("resize", ScaleSlider);
$(window).bind("orientationchange", ScaleSlider);
//responsive code end


// hand animation
var hand = $('.ui-help__icon'),
  handArea = $('.ui-help__area'),
  handFrame = 0,
  handGrabSpeed = 30,
  handMoveSpeed = 600;
  
function handDown() {
  if (handFrame === 15) {
      handLeft();
      return;
  }
  
  hand.css('top', -50 * handFrame + 'px');
  handFrame++;
  setTimeout(handDown, handGrabSpeed);
};

function handUp() {
  hand.css('top', -50 * handFrame + 'px');
  handFrame--;
  
  if (handFrame === 0) {
      handRight();
      return;
  }
  setTimeout(handUp, handGrabSpeed);
};
  
function handLeft() {
  handArea.animate({
      left: '-300px'
  }, handMoveSpeed, handUp);
};

function handRight() {
  handArea.animate({
      left: '-200px'
  }, handMoveSpeed, handDown);
};

handDown();

});

