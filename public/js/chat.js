function escapeHTML(s) {
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
                    $("#comments").append('<div class="comment"><p>' + escapeHTML(res.comment_body) + '</p></div>');
                    $("#comments").append('<div class="reply"><p>' + escapeHTML(res.reply_body) + '</p></div>');
                    $("#comment-body").val('');
                });
        });
    });
});