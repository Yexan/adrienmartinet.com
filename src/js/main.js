/*!
 * Main
 *
 * Here you can put your js main code
 * Keep in mind that you can moduralize other component to re-use them on other projects
 */
$(function () {


  window.viewportUnitsBuggyfill.init();

  FastClick.attach(document.body);
  new WOW().init();


  // ADDS ACTIVE CLASS TO LINKS WHEN SECTION WITH THE SAME SELECTOR AS THE HREF IS REACHED (CLASS .LINK IS NEEDED ON ALL <a> TAGS)
  $(window).scroll(function () {

    var y = $(this).scrollTop();

    $('.link').each(function (event) {
      if (y >= $($(this).attr('href')).offset().top -80) {
        $('.link').not(this).removeClass('active');
        $(this).addClass('active');
      }
    });

  });



  var adrienM = "\n              _      _              __  __ \n     /\\      | |    (_)            |  \\/  |\n    /  \\   __| |_ __ _  ___ _ __   | \\  / |\n   / /\\ \\ / _` | '__| |/ _ \\ '_ \\  | |\\/| |\n  / ____ \\ (_| | |  | |  __/ | | | | |  | |\n /_/    \\_\\__,_|_|  |_|\\___|_| |_| |_|  |_|";

    console.log(adrienM);

});