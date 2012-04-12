var retrieveUrl;
retrieveUrl = function(opts) {
  var index, output, picUrls, versionCode;
  if (opts == null) {
    opts = {};
  }
  _.defaults(opts, {
    version: "medium",
    lineBetween: 4
  });
  versionCode = opts.version === "medium" ? "z" : "b";
  picUrls = _($(".rapidnofollow .pc_img")).map(function(pic) {
    return pic.src.replace("_s.", "_" + versionCode + ".");
  });
  index = 1;
  output = [];
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