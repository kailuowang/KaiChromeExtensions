var retrieveUrl;
retrieveUrl = function(opts) {
  var index, output, picUrls, selector, versionCode;
  if (opts == null) {
    opts = {};
  }
  _.defaults(opts, {
    version: "medium",
    linesBetween: 4,
    context: 'set',
    displayIndex: true
  });
  versionCode = opts.version === "medium" ? "z" : "b";
  selector = opts.context === 'set' ? '.rapidnofollow .pc_img' : '.batch_photo_img_div img';
  picUrls = _($(selector)).map(function(pic) {
    return pic.src.replace("_s.", "_" + versionCode + ".");
  });
  picUrls = _(picUrls).filter(function(url) {
    return url.substr(-4) === ".jpg";
  });
  index = 1;
  output = [''];
  _(picUrls).each(function(url) {
    if (opts.displayIndex) {
      output.push(index);
    }
    output.push(url);
    _.times(opts.linesBetween, function() {
      return output.push(' ');
    });
    return index++;
  });
  return output.join("\n");
};