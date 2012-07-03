###
  FuckItJS v2.0.0-alpha

  Note: this is ALPHA software and may result in
  irreversible brain damage
###

$ ->

  $.ajaxSetup { cache: true }

  _FuckIt = window.FuckIt;

  FuckIt = (script) ->
    req = $.ajax {
      url: script,
      dataType: 'text'
    }

    success = (result) ->
      window.fuckedScript = result
      eval window.fuckedScript

    error = ->
      throw new Error "Could not load script: #{script}"

    req.then success, error

  window.onError = (error, url, line) ->
    if not window.fuckedScript then return

    parsed = window.fuckedScript.split "\n"
    parsed.splice line - 1, 1
    
    window.fuckedScript = parsed.join "\n"

    $.getScript 'FuckIt.js', () ->
      eval window.fuckedScript

    return true

  FuckIt.noConflict = () ->
    window.FuckIt = _FuckIt
    FuckIt

  FuckIt.moreConflict = () ->
    window[prop] = FuckIt for prop in window when prop isnt 'location'

  window.FuckIt = FuckIt;
