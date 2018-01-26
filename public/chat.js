$(function () {
    $("#submit").click(function () {
        var message = $("#message").val();
        $("#chat-main").html("<p>" + message + "</p>")
        // var message = $("#message").val();
        // $.ajax({
        //     type: "GET",

        // });
    });
});