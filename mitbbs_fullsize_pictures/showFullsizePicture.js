
var togglePictures = function(){
    var images = $("img[onload='adjustimg(this)']")
    for (var i = 0; i < images.length; i++) {
        var image = $(images[i]);
        if(image.attr("width") === ""){
          image.attr("width", "597px")
        }else{
          image.attr("width", "");
        }
    }
}

togglePictures();
