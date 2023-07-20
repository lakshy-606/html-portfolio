$("h1").css("color","red");

$(document).keypress(function(event){
    var txt = event.key;
    $("h1").text(txt);
});
