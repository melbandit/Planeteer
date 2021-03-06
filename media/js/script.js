// window.onload = function() {

// 	document.body.className = "animate";

// }
$(document).ready(function(){
	$('#scene').parallax();
	$('#scene2').parallax();


	$(".back-to-top").click(function(){
		console.log("scrollTo Works");
		$.scrollTo( $(".big-image"), 5000 );
		// $.scrollTo( 150, 2000 );//scroll to top: 150

	});
	$(".scrollTo__planet1").click(function(){
		console.log("scrollTo Works");
		$.scrollTo( $(".tunnel"), 2000 );
		// $.scrollTo( 150, 2000 );//scroll to top: 150

	});
//makes cloud pollution slowly disappear
	$('.clouds').click(function() {
         // $(this).css( "opacity", "-=0.1" );
         // if($( '.img3' ).css( "opacity") >=1)
        $( '.img1' ).css( "opacity", "-=0.2" );
		$( '.img2' ).css( "opacity", "-=0.3" );
		$( '.img3' ).css( "opacity", "-=0.5" );
		$( '.img4' ).css( "opacity", "-=0.4" );
	});

});



$(function () { // wait for document ready
	// init
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

});

$(function () { // wait for document ready
	var flightpath = {
		entry : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 10,	y: -20},
					{x: 30,	y: 10}
				]
		},
		looping : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 510,	y: 60},
					{x: 620,	y: -60},
					{x: 500,	y: -100},
					{x: 380,	y: -20},
					{x: 500,	y: 160},
					{x: 580,	y: -20},
					{x: 620,	y: -315}
				]
		},
		leave : {
			curviness: 1.25,
			autoRotate: true,
			values: [
					{x: 300,	y: -220},
					{x: 330,	y: -330},
					{x: $(window).width() + 200,	y: -100},
				]
		}
	};
	// init controller
	var controller = new ScrollMagic.Controller();

	// create tween
	var tween = new TimelineMax()
		.add(TweenMax.to($("#drunk_badguy"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
		.add(TweenMax.to($("#drunk_badguy"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
		.add(TweenMax.to($("#drunk_badguy"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 800, offset: 120})
		.setPin("#target")
		.setTween(tween)
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
})

var $header__logo= document.getElementById("header__logo");

//changing the menu to make smaller-need to update for this projects
$(window).on("scroll", function() {
		
	var position_alien = $(window).scrollTop();
	var position = $(window).scrollTop();
	var position_backTop = $(window).scrollTop();
	console.log( "position:" + $(window).scrollTop() );

	if ($(window).innerWidth() >= 0){	
		if(position >= 60){
			$("header").addClass("menu-small");
			$header__logo.src = "media/img/logos/EarthDayLogo_white.png";
			$header__logo.style.transitionDuration = "0.7s";
		}

		if(position < 60){
			// $(".logo").addClass(".logo-large");
			$("header").removeClass("menu-small");
			$header__logo.src = "media/img/logos/EarthDayLogo_blue.png";
			$header__logo.style.transitionDuration = "0.7s";
		}
	};

	if ($(window).innerWidth() >= 0){
		if(position_alien <= 200){
			$(".fixed-container").removeClass("position--tunnelOne");
			$(".alien").removeClass("alien--sprite__falling");
			$(".alien").addClass("alien--sprite__steady");
		}
		if(position_alien >= 200){
			$(".fixed-container").removeClass("position--planetOne");
			$(".fixed-container").addClass("position--tunnelOne");
			$(".alien").addClass("alien--sprite__falling");
			$(".alien").removeClass("alien--sprite__steady");
		}
		
		if(position_alien >= 2480){
			$(".fixed-container").removeClass("position--tunnelOne");
			$(".fixed-container").addClass("position--planetOne");
			$(".fixed-container").removeClass("position--tunnelTwo");
			$(".alien").removeClass("alien--sprite__falling");
			$(".alien").addClass("alien--sprite__steady");
		}
		if(position_alien >= 3601){
			$(".fixed-container").removeClass("position--planetOne");
			$(".fixed-container").removeClass("position--planetTwo");
			$(".fixed-container").addClass("position--tunnelTwo");
			$(".alien").addClass("alien--sprite__falling");
			$(".alien").removeClass("alien--sprite__steady");
		}
		if(position_alien >= 6030){
			$(".fixed-container").addClass("position--planetTwo");
			$(".fixed-container").removeClass("position--tunnelTwo");
			$(".fixed-container").removeClass("position--tunnelThree");
			$(".alien").addClass("alien--sprite__steady");
			$(".alien").removeClass("alien--sprite__falling");
		}
		if(position_alien >= 6920){
			$(".fixed-container").removeClass("position--planetTwo");
			$(".fixed-container").addClass("position--tunnelThree");
			$(".alien").addClass("alien--sprite__falling");
			$(".alien").removeClass("alien--sprite__steady");
		}
		if(position_alien <= 8808){
			$(".alien").removeClass("alien--sprite__behind");
		}

		if(position_alien >= 8808){
			$(".alien").addClass("alien--sprite__behind");
		}



	}

	if ($(window).innerWidth() >= 0){

		if(position_backTop <= 8070){
			$(".back-to-top").css({"left": "-180px"});
			
		} else{
			$(".back-to-top").css({"left": "0"});
		}
		
	}

	//Restart for bottles and clouds
	if ($(window).innerWidth() >= 0){
		//$beingDragged2 = .query;
		if(position >= 4756){
			$(".planet-fg").removeClass("hidden");
			$('.frame').addClass("hidden");
			TweenMax.to($(".draggable"), 0.5, {left: "0px", scale: '1'});
		}
		if(position >= 7935){
			$( '.img1' ).css( "opacity", "1" );
			$( '.img2' ).css( "opacity", "1" );
			$( '.img3' ).css( "opacity", "1" );
			$( '.img4' ).css( "opacity", "1" );
		}
		
	}



});

//gets rid of regular image of planet and shows layers that become draggable
$('.planet-fg').on("mouseenter", function(){
	$('.planet-fg').addClass("hidden");
	$('.frame').removeClass("hidden");
});

// $('.back-to-top p').on("hover", function(){
// 	$(".back-to-top").css({"left": "0"});
// });

new WOW().init();
