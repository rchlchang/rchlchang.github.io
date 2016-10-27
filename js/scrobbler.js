$(function() {
    $.ajax({
        type: "get",
        url: "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rchlchang&limit=1&api_key=923ef984260dfd875772fe62057c8540",
        dataType: "xml",
        success: function(data) {
            /* handle data here */
            $("#show_table").html(data);
        },
        error: function(xhr, status) {
            /* handle error here */
            $("#show_table").html(status);
        }
    });
});