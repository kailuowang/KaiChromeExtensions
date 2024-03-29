retrieveUrl = (opts = {})->

  _.defaults(opts, {
    version: "medium"
    linesBetween: 4
    context: 'set'
    displayIndex: true
  })

  versionCode = if opts.version is "medium" then "z" else "b"
  selector = if opts.context is 'set' then '.rapidnofollow .pc_img' else '.batch_photo_img_div img'

  picUrls = _($(selector)).map((pic) ->
    pic.src.replace "_s.", "_" + versionCode + "."
  )

  picUrls = _(picUrls).filter (url) ->
    url.substr(-4) is ".jpg"

  index = 1
  output = ['']
  _(picUrls).each (url) ->
    output.push index if opts.displayIndex
    output.push url
    _.times(opts.linesBetween, -> output.push(' '))
    index++

  output.join "\n"




