const clickNav = (item) => {
    $('html, body').animate({
        scrollTop: $(item).offset().top
    }, 1000);
};