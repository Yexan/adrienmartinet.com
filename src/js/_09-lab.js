/*!
 * Lab
 */
 
$(function(){


// $.each(projets, function(i,e){
  //     $('#project-list').append(
  //         '<div>'+
  //           '<h2><a href="./'+ e.url +'">'+ e.title +'</a></h2>'+
  //           '<p>'+ e.description +'</p>'+
  //           '<img src="'+ e.image +'">'+
  //         '</div>'
  //     );
  // });

  $.getJSON( "json/experiments.json", function( data ) {
    var items = [];
    $.each( data, function(i, e) {
      items.push(
        '<article class="experiment">' +
          '<h3>' + e.title + '</h3>' +
          '<div class="content">' +
            '<p class="date">' + e.date + '</p>' +
            '<p class="description">' + e.description + '</p>' +
            '<a href="' + e.url + '" target="_blank" class="btn material">Voir le projet</a>' +
          '</div>' +
        '</article>'
      );
    });

    $('#experiments').append(items.join(""));
  });



});