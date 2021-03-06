jQuery.ajaxPrefilter(function (options, originalOptions, jqXHR) {
  var timeoutId = setTimeout(function(){
      $('#loader').show();    
  }, 500);
  jqXHR.always(function () {
    clearTimeout(timeoutId);
  });
  options.error = function() {
    Backbone.history.navigate('error', {
        trigger: true
    });
  }
});