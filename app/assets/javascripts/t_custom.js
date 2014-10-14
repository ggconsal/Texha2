"use strict";
var menuDisabled = false;
jQuery(document).ready(function($){

  /************** Menu Content Opening *********************/
  $(".main_menu a").on('click',function(){
    var id =  $(this).attr('class');
    id = id.split('-');
    //$("#menu-container .content").hide();
    //$("#menu-container #menu-"+id[1]).show();
    //$("#menu-container .homepage").hide();
    return false;
  });
  

  $(".main_menu a.templatemo_homeservice").click(function(){
    $("#menu-container .portfolio").hide();
    $('#menu-container .services').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
      });
    return false;
  });
  
  $(".main_menu a.templatemo_page2").click(function( ){
    $('#menu-container .homepage').fadeOut(1000, function(){                    
        $('#menu-container .services').fadeIn(1000);
      });
  return false;
  });
  
  $(".main_menu a.templatemo_homeportfolio").click(function(){
    $('#menu-container .portfolio').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
      });
    return false;
  });

  $(".main_menu a.templatemo_page3").click(function(){    
    $('#menu-container .homepage').fadeOut(1000, function(){
        $('#menu-container .portfolio').fadeIn(1000);
      });
    return false;
  });
  
  $(".main_menu a.templatemo_hometestimonial").click(function(){
    $('#menu-container .testimonial').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
      });
    return false;
  });
  
  $(".main_menu a.templatemo_page4").click(function(){    
    $('#menu-container .homepage').fadeOut(1000, function(){
        $('#menu-container .testimonial').fadeIn(1000);
      });
    return false
  });
  $(".main_menu a.templatemo_homeabout").click(function(){
    $('#menu-container .about').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
      });
    return false;
  });

  $(".main_menu a.templatemo_page5").click(function(){    
    $('#menu-container .homepage').fadeOut(1000, function(){
        $('#menu-container .about').fadeIn(1000);
      });
    return false;
  });
  
  $(".main_menu a.templatemo_homecontact").click(function(){
    $('#menu-container .contact').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
      });
    return false;
  });

  $("#liestra").click(function(){
    $('#divcostos').hide;
    return false;
  });

  $('#new_contact').on("submit", function () {
    $('#msgOKbtn').fadeOut(500);
    var opts = {
      lines: 17, // la cantidad de líneas
      length: 23, // el tamaño de cada línea
      width: 1, // el grosor de las líneas
      radius: 8, // el radio del círculo
      corner: 1,
      rotate: 0,
      trail: 87, // el efecto luminosidad
      speed: 1, // la velocidad
      shadow: false, // habilitar o deshabilitar las sombras
      Hwaccel: false,
      color: '#300000' // el color en formato RGB
    };

    new Spinner(opts).spin(document.getElementById('msgOK'));
  });

  /************** Gallery Hover Effect *********************/
  $(".overlay").hide();

  $('.gallery-item').hover(
    function() {
      $(this).find('.overlay').addClass('animated fadeIn').show();
    },
    function() {
      $(this).find('.overlay').removeClass('animated fadeIn').hide();
    }
  );


  /************** LightBox *********************/
  $(function(){
    $('[data-rel="lightbox"]').lightbox();
  });


  $("a.menu-toggle-btn").click(function() {
    $(".responsive_menu").stop(true,true).slideToggle();
    return false;
  });
 
    $(".responsive_menu a").click(function(){
    $('.responsive_menu').hide();
  });

});

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

function initialize() {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(-34.5969816, -58.3742790)
    };
    var map = new google.maps.Map(document.getElementById('templatemo_map'),  mapOptions);
}
