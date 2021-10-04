function getRandomInt(s, e) {
    return Math.floor(Math.random() * (e - s + 1)) + s
}

function shuffleArray(s) {
    var e, a, t = s.length;
    if (0 === t) return !1;
    for (; --t;) e = Math.floor(Math.random() * (t + 1)), a = s[t], s[t] = s[e], s[e] = a;
    return s
}

cat1 = "Featured", imgr = new Array, imgr[0] = "https://1.bp.blogspot.com/-MrFHVtO9IhE/YU8misZ92tI/AAAAAAAAAQE/Hm1HaNDEq9csNo4szT9rRMDnawukljitACLcBGAsYHQ/w478-h359/picture_not_available%2B%25281%2529.png", showRandomImg = !0, aBold = !0, summaryPost = 150, summaryTitle = 50, postnum1 = 1, postnum4 = 8, postnum5 = 8, $(document).ready(function() {
    $(".owl_carouselle").owlCarousel({
        autoplay: !0,
        loop: !0,
        lazyLoad: !0,
        nav: !1,
        dots: !0,
        video: !0,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        smartSpeed: 1200,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});
// -------------------------------------------------------------------------
function replaceText() {
    if (!document.getElementById) {
        return;
    }
    bodyText = document.getElementById("outer-wrapper");
    theText = bodyText.innerHTML;
    theText = theText.replace(/s72-c/gi, "s400");
    bodyText.innerHTML = theText;
}
replaceText();

function myDrop() {
    document.getElementById("outer-wrapper").classList.toggle("blur-efect");
    document.getElementById("menu").classList.toggle("show");

}

// -------------------------------------------------------------------------


$(document).scroll(function() {
    return $(document).scrollTop() > 300 ? $('.ignielToTop').addClass('show') : $('.ignielToTop').removeClass('show')
}), $('.ignielToTop').click(function() {
    return $('html,body').animate({

        scrollTop: '0'
    });
});


