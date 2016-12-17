$(document).ready(function() {
  document.onscroll = function(e) {
    if(window.pageYOffset > 1980){
      $(".zakazat-btn").css("opacity", 0.5);
      $(".zakazat-btn").css("margin-right", 0);
      $(".zakazat-btn").css("visibility", "visible");
    }
    else{
      $(".zakazat-btn").css("opacity", 0);
      $(".zakazat-btn").css("margin-right", "-110px");
      $(".zakazat-btn").css("visibility", "hidden");
    }
  }

  // $("#brief").validate({
  //       rules: {
  //          'BriefForm[contact]': { required: true },
  //          'BriefForm[phone]': { required: true },
  //          'BriefForm[email]': { required: true, email: true }
  //       },
  //       submitHandler: function(form) {
  //         var form = $(form),
  //             data = {
  //     contact: form.find('#contact').val(),
  //         company: form.find('#company').val(),
  //         phone: form.find('#phone').val(),
  //         email: form.find('#email').val(),
  //         budget: form.find('#budget').val(),
  //         attachment: form.find('#attachment').val(),
  //         services0: form.find('#BriefForm_services_0').val(),
  //         services1: form.find('#BriefForm_services_1').val(),
  //         services2: form.find('#BriefForm_services_2').val(),
  //         services3: form.find('#BriefForm_services_3').val(),
  //         services4: form.find('#BriefForm_services_4').val(),
  //         services5: form.find('#BriefForm_services_5').val(),
  //         desires: form.find('#desires').val()
  //       };
    
  //   $.ajax({
  //     method: 'POST',
  //     url: 'send_form_email.php',
  //     data: data
  //   })
  //   .done(function( data ) {
  //       console.log('send');
  //       $('.close-button').click();
  //   });
  // },
  // invalidHandler: function(form, validator) {
  // }
  // });
})