'use strict';

$(function () {
    // Loads header and footer on each page

    $.get(
        'partials/header.html',
        function (response) {
            $("#header").html(response);
    });

    $.get(
        'partials/footer.html',
        function (response) {
            $("#footer").html(response);
    });
});
