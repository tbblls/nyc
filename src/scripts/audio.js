
$(document).ready(function(){

  $.getJSON('data/audio.json')
  .done(function( data ){
    console.log(data);
    var html = data.audio.reverse()
                         .map((audioGroup) => {
                            var talksHtml = audioGroup.talks.map((talk) => {
                              var name  = "<h3>"+talk.name+"</h3>";
                              var audio = "<div class='row'><audio src='{source}' preload='none'/><div class='download'><a href='{link}'>download</a></div></div>";
                              var source = "../assets/audio/{year}/{fileName}"
                                            .replace("{year}", audioGroup.year)
                                            .replace("{fileName}", talk.fileName);

                              audio = audio.replace("{source}", source)
                                           .replace("{link}", source);

                              return name + audio;
                            });
                  return "<h2>"+audioGroup.year+"</h2>" + talksHtml.join("");
                });


    $("#content").html(html.join(""));

    audiojs.events.ready(function() {
      var as = audiojs.createAll();
    });


  })
  .fail(function(error) {
    console.log( 'error', error );
    $("#content").html("<h1>Sorry an error has occured while loading NYC talks. Please try again soon!</h1>");
  });

});
