// ------------------ Fadein e fadeout ---------------------------

//Debounce do lodash - vai segurar a animação por algum tempo pra que ela posso entrar
function debounce (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        if (immediate && !timeout) func.apply(context, args);
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

(function () {
    var $target = $('.anime'),
        animationClass = 'anime-start';
    //offset = $(window).height() * 5/3;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - 400) {
                $(this).addClass(animationClass);

            } else (
                $(this).removeClass(animationClass)
            )
        })
    }

    animeScroll();

    $(document).scroll(debounce(function () {
        animeScroll();
    }, 25));// especificação em milissegundos 
}());
