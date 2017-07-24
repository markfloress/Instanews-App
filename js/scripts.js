

$(function(){

  $('.selection').on('change', function() {
    var sectionName = $(this).val();
    var url = 'https://api.nytimes.com/svc/topstories/v2/';
        url += sectionName;
        url += '.json';
        url += '?' + $.param({'api-key': '3fc490bb28d84fe080a965aee4f72b45'
                });

    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(result) {

      $.each(result.results, function( key, value ){

        var storyAbstract = value.abstract;
        var storyUrl = value.url;
        var storyPhoto = value.multimedia[4].url;
         
        var style = "background-image:url('" + storyPhoto + "')";
        var storyListItem = '<li class="story-items"><a href="' + storyUrl + '" target="_blank">';
            storyListItem += '<div class="photo" style="' + style + '"><p class="list-text">';
            storyListItem += storyAbstract;
            storyListItem += '</p></div></a></li>';


        $('.article-list').append(story-items);
      });

    }).fail(function(err) {
      throw err;
    });

  }); 


});
