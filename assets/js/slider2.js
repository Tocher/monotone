jssor_1_slider_init = function() {

    var jssor_1_options = {
      $AutoPlay: true,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing

    function WindowSize() {
        var w = 0;
        var h = 0;
        if (window.innerWidth) {
            //w3c
            w = window.innerWidth;
            h = window.innerHeight;
        }
        else {
            //IE
            if (document.documentElement.clientWidth) {
                //strict mode
                w = document.documentElement.clientWidth;
                h = document.documentElement.clientHeight;
            }
            else {
                //quirks mode
                w = document.body.clientWidth;
                h = document.body.clientHeight;
            }
        }
        return { width: w, height: h };
    }
    
    function ScaleSlider() {
        var refSize = WindowSize().width;
        if (refSize) {
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    //responsive code end
};
jssor_1_slider_init();

