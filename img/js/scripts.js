$(document).ready(function() {
  $("form#celeb").submit(function(event) {
    event.preventDefault();
    var harry = $("#harry").val();
    var mood = $("#mood").val();
    var gtl = $("#gtl").val();
    if (harry === 'YES') {
    $('#trump').hide();
    $('#pauly').hide();
    $('#duster').hide();
    $('#darksided').show();
  } else if (mood === "I'M WALKING ON SUNSHINE!") {
    $('#pauly').hide();
    $('#trump').hide();
    $('#duster').show();
    $('#darksided').hide();
  } else if (gtl === 'GYM,TAN,LAUNDRY') {
    $('#duster').hide();
    $('#trump').hide();
    $('#pauly').show();
    $('#darksided').hide();
    } else {
    $('#darksided').hide();
    $('#trump').show();
    $('#duster').hide();
    $('#pauly').hide();
    }
  })
});
