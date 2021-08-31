
function importFiles() {
    $('#navbar').load('imports/navbar.html');
}
$(function () {
    var includes = $('#navbar'  )
    $.each(includes, function () {
        var file = 'views/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})