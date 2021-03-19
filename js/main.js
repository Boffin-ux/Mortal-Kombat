// $(document).ready(function () {
//     $('#app').vide({
//         mp4: 'video/video.mp4',
//         webm: 'video/video.webm',
//         ogv: 'video/video.ogv',
//         poster: 'img/cover-image.jpg'
//     });
// });

$(document).ready(function () {
    $(".modalbox").fancybox();
    $("#contact").submit(function () { return false; });
    $(".btn-primary").on("click", function () {
        $("#contact").fadeOut("fast", function () {
            $(this).before(`<p class="completed"><i><strong>Подписка оформлена!</strong></i></p>`);
            setTimeout("$.fancybox.close()", 1000);
        });
    });
});
