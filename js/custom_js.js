
$('.user_pannel_btn').click(function(){
    $('.user_pannel').show();
});
$(document).on('click', function(){
    $('.user_pannel').hide();
});
$('.user_pannel_btn, .user_pannel').on('click', function(e){
    e.stopPropagation();
});
