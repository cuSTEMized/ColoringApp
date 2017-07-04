$(function() {
  document.addEventListener('deviceready', this.onDeviceReady, false);
  document.body.onload = function(){ onDeviceReady() };

  function onDeviceReady() {
    // Create palette box
    hair_colors = ['#2b2518','#925e30','#e2b72d','#b5330a']
    skin_tones = ["#7b4720", "#ad7039", "#daa159", "#f7c568", "#fbdd9b"]
    shirt_colors = ["#d62e1f","#ef803c","#f2d75a","#81d957","#4389db","#75edf3","#be8aee","#ea7e7d"]
    colors = shirt_colors.concat(hair_colors).concat(skin_tones)

    for (var i = 0; i < colors.length; i++) {
        d = $("#paletteBox").html()
        $("#paletteBox").html(d + '<input type="radio" name="color" value="' + colors[i] +'" id="' + i + '"/><label class="colorBox" for="' + i + '" style="background-color:' + colors[i] + '"></label>')
    }
    d = $("#paletteBox").html()
    //document.getElementById("paletteBox").innerHTML = d + '<input checked=true type="radio" name="color" value="black" id="defaultColor"/><label class="colorBox" for="defaultColor" style="background-color:black"></label>'

    // Set color
    color = colors[0];
    $('input:radio[name=color]').change(function () {
        color = $(this).val();
        console.log(color);
    });

    $("path, polygon, circle, rect").on('click touchstart',function(){
        //console.log($(this).attr("id"))
        if($(this).attr("id")==null) {
      $(this).css({fill: color})
        }
    });

    // Color on drag
    var isDown = false;
    $(document).bind( "mousedown touchstart", function(e){
        isDown = true;
    }).bind( "mouseup touchend", function(e){
        isDown = false;    // When mouse goes up, set isDown to false
    });
    $("path, polygon, circle, rect").bind( "mouseover hover", function(e){
        if(isDown) {
      if($(this).attr("id")==null) {
          $(this).css({fill: color})
      }
        }
    });
  };


  // @TODO: tap vs. click

  // Modal screen triggers
  modal_triggers = ["#about"]
  for (var i = 0; i < modal_triggers.length; i++) {
    $(modal_triggers[i]).on("click", function() {
      $(".modal").addClass("modal-is-visible")
      $(".cover").addClass("modal-is-visible")
    });
  }

});
