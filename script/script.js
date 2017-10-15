/**
 * Created by tsugawa-r on 25/05/2017.
 */

'use strict';

$(document).ready(function() {
    var login_account = localStorage.getItem('hulu-ext-account');

    $(document).on('click', '.vod-mod-header__togglable-menu a', function(e) {
        var menu_string = e.target.innerHTML;
        console.log(e.target, menu_string);

        if (menu_string === 'プロフィール切り替え') {
            localStorage.removeItem('hulu-ext-account');
        }
    });

    $(document).on('click', '.vod-mod-profile__image', function(e) {
        if (!login_account) {
            var name = e.target.parentNode.parentNode.nextSibling.nextSibling.innerHTML;
            localStorage.setItem('hulu-ext-account', name);
        }
    });

    var title = 'ご利用されるプロフィールを選択してください。';
    var title_selector = $('.vod-mod-content p.vod-mod-sentence.vod-mod-center.is-shadow');
    var title_string = '';

    if (title_selector.length > 0) {
        title_string = title_selector[0].innerHTML;
    }

    if (title === title_string) {
        var accounts = $('.vod-mod-profile__name');
        var forms = $('form');
        for (var i = 0, l = accounts.length; i < l; i++) {
            if (login_account === accounts[i].innerHTML) {
                forms[i].submit();
                break;
            }
        }
    }
});
