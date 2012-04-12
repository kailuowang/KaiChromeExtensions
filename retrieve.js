function retrieveUrl(){
  var version = 'z'; //change to 'b' for large version
  var picUrls = _($('.rapidnofollow .pc_img')).map( 
    function(pic){ return pic.src.replace('_s.' , '_' + version + '.') 
  });
  var index = 1;
  var linesBetween = 4;
  _(picUrls).each( function(url) { 
  	console.log(index);
  	console.log(url);
  	_(linesBetween).times(function(){ console.log(' ' ); });
  	index++;
  });
  
}