retrieveUrl = function(opts) {
  var index, output, picUrls, selector, versionCode;
  if (opts == null) {
    opts = {};
  }
  _.defaults(opts, {
    version: "medium",
    linesBetween: 4,
    context: 'set'
  });
  versionCode = opts.version === "medium" ? "z" : "b";
  selector = context === 'set' ? '.rapidnofollow .pc_img' : '.batch_photo_img_div img';
  picUrls = _($(selector)).map(function(pic) {
    return pic.src.replace("_s.", "_" + versionCode + ".");
  });
  index = 1;
  output = [''];
  _(picUrls).each(function(url) {
    output.push(index);
    output.push(url);
    _.times(opts.linesBetween, function() {
      return output.push(' ');
    });
    return index++;
  });
  return output.join("\n");
};