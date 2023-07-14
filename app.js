function onoff(){
    var image = document.getElementById('off');
    if (image.src.match("on.gif")) {
      image.src = "off.gif";
    } else {
      image.src = "on.gif";
    }
  }
