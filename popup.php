<!-- popup -->

<div class="popup__overlay">
    <div class="close-button">
        <svg width="12px" height="12px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512">
            <path d="M507.331 411.33c-0.002-0.002-0.004-0.004-0.006-0.005l-155.322-155.325 155.322-155.325c0.002-0.002 0.004-0.003 0.006-0.005 1.672-1.673 2.881-3.627 3.656-5.708 2.123-5.688 0.912-12.341-3.662-16.915l-73.373-73.373c-4.574-4.573-11.225-5.783-16.914-3.66-2.080 0.775-4.035 1.984-5.709 3.655 0 0.002-0.002 0.003-0.004 0.005l-155.324 155.326-155.324-155.325c-0.002-0.002-0.003-0.003-0.005-0.005-1.673-1.671-3.627-2.88-5.707-3.655-5.69-2.124-12.341-0.913-16.915 3.66l-73.374 73.374c-4.574 4.574-5.784 11.226-3.661 16.914 0.776 2.080 1.985 4.036 3.656 5.708 0.002 0.001 0.003 0.003 0.005 0.005l155.325 155.324-155.325 155.326c-0.001 0.002-0.003 0.003-0.004 0.005-1.671 1.673-2.88 3.627-3.657 5.707-2.124 5.688-0.913 12.341 3.661 16.915l73.374 73.373c4.575 4.574 11.226 5.784 16.915 3.661 2.080-0.776 4.035-1.985 5.708-3.656 0.001-0.002 0.003-0.003 0.005-0.005l155.324-155.325 155.324 155.325c0.002 0.001 0.004 0.003 0.006 0.004 1.674 1.672 3.627 2.881 5.707 3.657 5.689 2.123 12.342 0.913 16.914-3.661l73.373-73.374c4.574-4.574 5.785-11.227 3.662-16.915-0.776-2.080-1.985-4.034-3.657-5.707z"></path>
        </svg>
    </div>
    <div class="popup__content">
        <article class="brief-content">
            <header>
                <h4>Отправить заявку</h4>
                <hr>
            </header>
            <form enctype="multipart/form-data" id="brief">
                <div class="brief__field-container brief__field-container-required ">
                    <input placeholder="Контактное лицо" id="contact_modal" name="BriefForm[contact]" type="text">
                    <span class="brief__field-required">*</span>
                </div>
                <div class="brief__field-container container-right">
                    <input placeholder="Компания" id="company" name="BriefForm[company]" type="text">
                </div>
                <div class="brief__field-container brief__field-container-required ">
                    <input placeholder="Телефон" id="phone" name="BriefForm[phone]" type="text">
                    <span class="brief__field-required">*</span>
                </div>
                <div class="brief__field-container brief__field-container-required   container-right ">
                    <input placeholder="E-mail" id="email" name="BriefForm[email]" type="email">
                    <span class="brief__field-required">*</span>
                </div>
                <div class="brief__field-container brief__field-container-required ">
                    <input min="0" placeholder="Бюджет проекта (руб.)" id="budget" name="BriefForm[budget]" type="number">
                </div>
                <div class="brief__field-container container-right">
                    <input id="ytattachment" type="hidden" value="" name="uploaded_file">
                    <input placeholder="Прикрепить файл с данными" id="attachment" name="uploaded_file" type="file">
                    <input placeholder="Прикрепить файл с данными" id="fileName" name="BriefForm[fileName]" type="text">
                    <span class="filesearch"></span>
                </div>
                <div class="brief__field-container container-wide ">
                    <ul class="brief__service-branch__services-list" id="services-service-branch-development" style="display: block;">
                        <li><input id="BriefForm_services_0" value="webdev" type="checkbox" name="BriefForm[services][]"><label for="BriefForm_services_0">Разработка сайта</label></li>
                        <li><input id="BriefForm_services_1" value="ownstyle" type="checkbox" name="BriefForm[services][]"><label for="BriefForm_services_1">Фирменный стиль</label></li>
                        <li><input id="BriefForm_services_2" value="logo" type="checkbox" name="BriefForm[services][]"><label for="BriefForm_services_2">Логотип</label></li>
                        <li><input id="BriefForm_services_3" value="poly" type="checkbox" name="BriefForm[services][]"><label for="BriefForm_services_3">Дизайн полиграфии</label></li>
                        <li><input id="BriefForm_services_4" value="outdoor" type="checkbox" name="BriefForm[services][]"><label for="BriefForm_services_4">Outdoor</label></li>
                        <li><input id="BriefForm_services_5" value="production" type="checkbox" name="BriefForm[services][]"><label for="BriefForm_services_5">Продакшн</label></li>
                    </ul>
                </div>
                <div class="brief__field-container container-wide ">
                    <textarea cols="40" rows="4" maxlength="10000" placeholder="Ваши пожелания" class="brief__field-desires" id="desires" name="BriefForm[desires]"></textarea>    </div>
                <div class="brief__form-errors"></div>
                <p class="brief-required-msg">*&nbsp;—&nbsp;поля, обязательные для заполнения</p>
                <input class="brief-submit" id="create" type="submit" name="yt0" value="Отправить">
            </form>
        </article>
    </div>
</div>

<!-- popup end -->
<script>
$(document).ready(function() {
    var header = $('.head'),
        zakazatBtn = $(".zakazat-btn");

    document.onscroll = function(e) {
        if (window.pageYOffset > 0) {
            $(header).addClass('mini');
        } else {
            $(header).removeClass('mini');
        }

        if (window.pageYOffset > 3500) {
            $(".info1").css("opacity", 1);
            $(".info1").css("margin", 0);
            setTimeout(function() {
                $(".info2").css("opacity", 1);
                $(".info2").css("margin", 0);
                setTimeout(function() {
                    $(".info3").css("opacity", 1);
                    $(".info3").css("margin", 0);
                }, 200);
            }, 200);
        }
    };

    //popup animation
    var popupVisible = 0,
        popupOverLay = $(".popup__overlay"),
        popupPromoOverlay = $(".promo-popup__overlay");

    $('.head__zakaz').click(function() {
        if (popupVisible) {
            popupOverLay.css("top", "-120%");
            popupVisible = 0;
            popupOverLay.css("bottom", "auto");
        }
        else {
            popupOverLay.css("bottom", "0");
            popupOverLay.css("top", "123px");
            popupVisible = 1;
        }
    });
    $('.close-button').click(function() {
        popupOverLay.css("top", "-120%");
        popupOverLay.css("bottom", "auto");
        popupVisible = 0;
    });

    $('.promo-head__zakaz').click(function() {
        if (popupVisible) {
            popupPromoOverlay.css("top", "-120%");
            popupVisible = 0;
            popupPromoOverlay.css("bottom", "auto");
        }
        else {
            popupPromoOverlay.css("bottom", "0");
            popupPromoOverlay.css("top", "123px");
            popupVisible = 1;
        }
    });
    $('.promo-close-button').click(function() {
        popupPromoOverlay.css("top", "-120%");
        popupPromoOverlay.css("bottom", "auto");
        popupVisible = 0;
    });
});
</script>