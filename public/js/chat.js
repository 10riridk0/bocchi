function escaoeHTML(s) {
    return $('<div>').text(s).html();
}
$(function () {
    $("#submit-comment").click(function () {
        var comment = $("#comment-body").val();
        var request = $.ajax({
            type: "POST",
            url: "/chat/comment",
            data: {
                body: comment
            }
        });
        request.done(function (msg) {
            $.ajax({
                    type: "GET",
                    url: "/chat/comments/last",
                    dataType: "json"
                })
                .done(function (res) {
                    // ここに会話のアレ表示すれば優勝なんじゃないか.. 
                    $("#comments").prepend('<p>' + escapeHTML(res.body) + ' by ' + '</p>');
                });
        });
    });
});