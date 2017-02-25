$(document).ready(() => {
    $('.login-footer').click(() => {
        $('.loading-indicator').animate({
            marginBottom: 0
        }, () => {
            $('.login').slideUp('fast', () => {
                $('.loading-indicator').animate({
                    marginBottom: '-1000px'
                }, 'slow', () => {
                    window.location.href = 'index.html';
                });
            });
        });
    })

    $(window).resize(() => {
        $('.footer').css({
            height: () => window.innerHeight - 410
        })
    })
});
