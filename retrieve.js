function retrieveUrl(){
  var version = 'z'; //change to 'b' for large version
  var picUrls = _($('.rapidnofollow .pc_img')).map( 
    function(pic){ return pic.src.replace('_s.' , '_' + version + '.') 
  });
  var index = 1;
  var linesBetween = 4;
  _(picUrls).each( function(url) { 
     console.info(index);
  	console.info(url);
    printBlankLines(linesBetween);
    index++;
  });
}

function printBlankLines(lines){
  _(_.range(lines)).each(function(line){
    var spaces = _.range(line).map(function(){ return " "; }).join('');
    console.info(spaces);
  });
}