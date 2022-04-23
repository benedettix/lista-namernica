var itemInput = $('.item');
var text = "";
$('.add-item').on('click', function () {
    var newItem = itemInput.val();
    if(newItem != "") {
        text = '<tr>';
        text += '<td>' + newItem + '</td>';
        text += '<td><button class="btn btn-danger delete">Obrisi</button></td>';
        text += '</tr>';
        $('.item-list tbody').append(text);

        itemInput.val('').focus();
    }else {
        alert('Unesite namernicu');
    }
});

$('tbody').on('click', '.delete', function () {
    $(this).closest('tr').remove();
    itemInput.focus();
})

