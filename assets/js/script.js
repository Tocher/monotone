!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";function e(e,i){this.$el=t(e),this.options=t.extend(!0,{},this.defaults,i),this.isVisible=!1,this.$hoverElem=this.$el.find(this.options.hoverElem),this.transitionProp="all "+this.options.speed+"ms "+this.options.easing,this.support=this._supportsTransitions(),this._loadEvents()}e.prototype={defaults:{speed:300,easing:"ease",hoverDelay:0,inverse:!1,hoverElem:"div"},constructor:e,_supportsTransitions:function(){if("undefined"!=typeof Modernizr)return Modernizr.csstransitions;var t=document.body||document.documentElement,e=t.style,i="transition";if("string"==typeof e[i])return!0;var s=["Moz","webkit","Webkit","Khtml","O","ms"];i=i.charAt(0).toUpperCase()+i.substr(1);for(var o=0;o<s.length;o++)if("string"==typeof e[s[o]+i])return!0;return!1},_loadEvents:function(){this.$el.on("mouseenter.hoverdir mouseleave.hoverdir",t.proxy(function(t){this.direction=this._getDir({x:t.pageX,y:t.pageY}),"mouseenter"===t.type?this._showHover():this._hideHover()},this))},_showHover:function(){var e=this._getStyle(this.direction);this.support&&this.$hoverElem.css("transition",""),this.$hoverElem.hide().css(e.from),clearTimeout(this.tmhover),this.tmhover=setTimeout(t.proxy(function(){this.$hoverElem.show(0,t.proxy(function(){this.support&&this.$hoverElem.css("transition",this.transitionProp),this._applyAnimation(e.to)},this))},this),this.options.hoverDelay),this.isVisible=!0},_hideHover:function(){var t=this._getStyle(this.direction);this.support&&this.$hoverElem.css("transition",this.transitionProp),clearTimeout(this.tmhover),this._applyAnimation(t.from),this.isVisible=!1},_getDir:function(t){var e=this.$el.width(),i=this.$el.height(),s=(t.x-this.$el.offset().left-e/2)*(e>i?i/e:1),o=(t.y-this.$el.offset().top-i/2)*(i>e?e/i:1),r=Math.round((Math.atan2(o,s)*(180/Math.PI)+180)/90+3)%4;return r},_getStyle:function(t){var e,i,s={left:"0",top:"-100%"},o={left:"0",top:"100%"},r={left:"-100%",top:"0"},n={left:"100%",top:"0"},h={top:"0"},a={left:"0"};switch(t){case 0:case"top":e=this.options.inverse?o:s,i=h;break;case 1:case"right":e=this.options.inverse?r:n,i=a;break;case 2:case"bottom":e=this.options.inverse?s:o,i=h;break;case 3:case"left":e=this.options.inverse?n:r,i=a}return{from:e,to:i}},_applyAnimation:function(e){t.fn.applyStyle=this.support?t.fn.css:t.fn.animate,this.$hoverElem.stop().applyStyle(e,t.extend(!0,[],{duration:this.options.speed}))},show:function(t){this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"),this.isVisible||(this.direction=t||"top",this._showHover())},hide:function(t){this.rebuild(),this.isVisible&&(this.direction=t||"bottom",this._hideHover())},setOptions:function(e){this.options=t.extend(!0,{},this.defaults,this.options,e)},destroy:function(){this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"),this.$el.data("hoverdir",null)},rebuild:function(t){"object"==typeof t&&this.setOptions(t),this._loadEvents()}},t.fn.hoverdir=function(i,s){return this.each(function(){var o=t(this).data("hoverdir"),r="object"==typeof i&&i;o||(o=new e(this,r),t(this).data("hoverdir",o)),"string"==typeof i&&(o[i](s),"destroy"===i&&t(this).data("hoverdir",!1))})},t.fn.hoverdir.Constructor=e});

$(document).ready(function() {
    $('#projects-container > .project-item').hoverdir({hoverDelay: 0, hoverElem: '.hover-mask'});
    
    $("#brief").validate({
        rules: {
           'BriefForm[contact]': { required: true },
           'BriefForm[phone]': { required: true },
           'BriefForm[email]': { required: true, email: true }
        },
        submitHandler: function(form) {
          var form = $(form),
              data = {
          contact: form.find('#contact').val(),
          company: form.find('#company').val(),
          phone: form.find('#phone').val(),
          email: form.find('#email').val(),
          budget: form.find('#budget').val(),
          attachment: form.find('#attachment').val(),
          services0: form.find('#BriefForm_services_0').val(),
          services1: form.find('#BriefForm_services_1').val(),
          services2: form.find('#BriefForm_services_2').val(),
          services3: form.find('#BriefForm_services_3').val(),
          services4: form.find('#BriefForm_services_4').val(),
          services5: form.find('#BriefForm_services_5').val(),
          desires: form.find('#desires').val()
        };

    $.ajax({
      method: 'POST',
      url: '../send_form_email.php',
      data: data
    })
    .done(function( data ) {
        console.log('send');
        $('.close-button').click();
    });
  },
  invalidHandler: function(form, validator) {
  }
     });
   var popupVisible = 0;
   $('.head__zakaz').click(function(){
     if(popupVisible) {
       $(".popup__overlay").css("top", "-"+$(window).height()+"px");
       popupVisible = 0;
       $(".popup__overlay").css("bottom", "auto");
     }
     else {
       $(".popup__overlay").css("bottom", "0");
       $(".popup__overlay").css("top", "123px");
       popupVisible = 1;
     }
     })
     $('.close-button').click(function(){
       $(".popup__overlay").css("top", "-"+$(window).height()+"px");
       $(".popup__overlay").css("bottom", "auto");
       popupVisible = 0;
     })


});
