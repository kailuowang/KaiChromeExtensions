function retrieveUrl(){
  var version = 'z'; //change to 'b' for large version
  var picUrls = _($('.rapidnofollow .pc_img')).map( 
    function(pic){ return pic.src.replace('_s.' , '_' + version + '.') 
  });
  var index = 1;
  var linesBetween = 4;
  var output = [];
  _(picUrls).each( function(url) { 
    output.push(index);
    output.push(url);
    printBlankLines(linesBetween, output);
    index++;
  });
  return output.join("\n")
  
}

function printBlankLines(lines, output){
  _(_.range(lines)).each(function(line){
    var spaces = _.range(line).map(function(){ return " "; }).join('');
    output.push(spaces);
  });
}