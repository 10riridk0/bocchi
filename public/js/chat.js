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
                    $("#comments").prepend('<p>' + escapeHTML(res.comment_body) + '</p>');
                });
        });
    });
});
// $(function () {
//     $("#submit").click(function () {
//         var message = $("#message").val();
//         // サーバにリクエストする部分
//         var request = $.ajax({
//             type: "POST",
//             url: "/chat/message",
//             data: {
//                 body: message
//             }
//         });

//         request.done(function (msg) {
//             $.ajax({
//                 type: "GET",
//                 url: "/messages/letest",
//                 dataType: "json"
//             })
//                 .done(function (res) {
//                     $("messages").prepend("<p>" + escaoeHTML(res.body) + "</p>");
//                 });
//         });
//         // 通信完了までボタンを無効にする
//         // var button = $(this);
//         // button.attr("disabled", true);

//         // // 値を取得してJSONデータを作成
//         // var data = {
//         //     you: $("#message").val(),
//         // };

//         // $.ajax({
//         //         type: "get",
//         //         url: "../data/chatData.json",
//         //         data: JSON.stringify(data),
//         //         contentType: 'application/json',
//         //     })
//         //     .then(
//         //         function (data) {
//         //             alert("成功" + data);
//         //             $("#test").html(data);
//         //             button.attr("disabled", false);
//         //         },
//         //         function () {
//         //             alert("error! " + data[0]);
//         //         });
//         // $("#chat-main").html("<p>" + message + "</p>")
//         // var message = $("#message").val();
//         // $.ajax({
//         //     type: "GET",


//         // });
//     });
// });