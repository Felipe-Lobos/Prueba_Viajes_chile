

$(document).ready(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    $("#about-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-us").offset().top - 75
        }, "smooth");
    });

    $("#highlights-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#highlights").offset().top - 75
        }, "fast");
    });

    $("#contact-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 75
        }, "smooth");
    });

})
