$(document).ready(function() {
    var portfolioItems = $('.portfolio__item');

    portfolioItems.click(function(e) {
        portfolioItems.each(function(t, el) {
            $(el).removeClass('active');
        });
        $(this).addClass('active');
    });

    $('.container > .container__item').hoverdir({hoverDelay: 0, hoverElem: '.container__hidden-item'});
    $('.types__items > .types__item').hoverdir({hoverDelay: 0, hoverElem: '.types__hidden-item'});

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
    
    
    // Валидация формы (jquery + jquery.valid + bootstrap)
    /*
    $("#create").click(function(e) {
    	e.preventDefault();
    	$("#brief").validate();
    });
    */
$("#promo-brief").validate({
	rules: {
		'BriefForm[contact]': { required: true },
		'BriefForm[phone]': { required: true },
		'BriefForm[email]': { required: true, email: true }
	},
	submitHandler: function(form) {
		var form = $(form),
		    data = {
			contact: form.find('#promo-contact').val(),
			vk: form.find('#promo-vk').val(),
			phone: form.find('#promo-phone').val(),
			company: form.find('#promo-company').val(),
			instagram: form.find('#promo-insta').val(),
			email: form.find('#promo-email').val(),
			desires: form.find('#promo-desires').val()
		    };

		$.ajax({
			method: 'POST',
			url: 'send_form_email_promo.php',
			data: data
		})
		.done(function( data ) {
			$('.promo-close-button').click();
		});
	}
});
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
			url: 'send_form_email.php',
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
   

  //todo подгрузка работ
  
  //смотреть больше работ
  // $('.portfolio__show-button').click(function(){
  //     $('.hidden-portfolio').addClass('hidden-portfolio_visible');
  //     setTimeout(function(){
  //       $('.portfolio__show-button').css("display","none");
  //     }, 500);
  //   });
});
