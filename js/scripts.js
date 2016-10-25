var unlucky = []
var lucky = []
var dead = []

var Fortune = function(){
  if(unlucky.length > lucky.length && unlucky.length > dead.length) {
    return ".unlucky"
  }
  else if(lucky.length > unlucky.length && lucky.length > dead.length) {
    return ".lucky"
  }
  else if(unlucky.length === lucky.length && dead.length === 0){
    return ".boring"
  }
  else{
    return".dead"
  };
};


//
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    unlucky = [];
    lucky = [];
    dead = [];
    $(".unlucky").hide();
    $(".lucky").hide();
    $(".dead").hide();
    $(".boring").hide();
    $("input:checkbox[name=unlucky-events]:checked")
    .each(function() {
        var unluckyResponses = $(this).val();
        unlucky.push(unluckyResponses);
    });
    $("input:checkbox[name=lucky-events]:checked")
    .each(function() {
        var luckyResponses = $(this).val();
        lucky.push(luckyResponses);
    });
    $("input:checkbox[name=horrible-events]:checked")
    .each(function() {
        var horribleResponses = $(this).val();
        dead.push(horribleResponses);
    });

    $(".output").show();
    $(Fortune()).show();

    $("input:checkbox:checked")
    .each(function() {
        $(this).prop("checked", false);

    });
  });
});
