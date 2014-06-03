	$('#blackOut').css('display', 'none');
	$('#downloadThankYou').css('display', 'none');
	
$(document).ready(function(){

	doFlexslider();
	
	//zeppelinAnimation();
/*
	$('#pelican1').sprite({fps: 12, no_of_frames: 6});
	$('#pelican2').sprite({fps: 12, no_of_frames: 6});
	$('#pelican3').sprite({fps: 12, no_of_frames: 6});
	pelicanThree();
*/
	ameobaMe();
		
	blog();

  	setTimeout(function() { makeClouds(); addingCloudAnimationListener(); }, 300);
  	
  	console.log("Web Design & Development by Jesse Chapo");
	console.log("Built with: JQuery, HTML5 Boiler Plate, Jekyll, Flexslider.js & Google Web Fonts. Delivered through S3 & Cloudfront.");
	console.log("Best viewed through a Webkit browser.");
});	



////////////////////////////////////////////////////
// HIGHLIGHTING THE CURRENT PAGE IN NAVIGATION
////////////////////////////////////////////////////
$(function(){
       $("#navigation ul li a").each(function(){
               if (this.href == window.location) {
                       $(this).addClass("navSelected");
               }
       });
});


////////////////////////////////////////////////////
// BLOG ACTIONS
////////////////////////////////////////////////////

function blog() {
	$('.post').hover( function() {
		jQuery(this).find('.postDescription').stop().animate({'opacity': 1}, {duration: 500, queue: true});
	});
	
	$('.post').mouseout( function() {
		$('.postDescription').stop().animate({'opacity': 0}, {duration: 300, queue: true});
	});
	
	// MODAL OPEN
	$('.downloadButton').click( function() {
		$('#blackOut').animate({'opacity': 1}, {duration: 500, queue: false}).css('display', 'block');
		$('#downloadThankYou').animate({'opacity': 1}, {duration: 500, queue: false}).css('display', 'block');
	});
	
	// MODAL CLOSE
	$('#modalCloseButton').click( function() {
		$('#blackOut').animate({'opacity': 0}, {duration: 500, queue: false}).css('display', 'none');
		$('#downloadThankYou').animate({'opacity': 0}, {duration: 500, queue: false}).css('display', 'none');
	});
	
};



////////////////////////////////////////////////////
// FLEXSLIDER
////////////////////////////////////////////////////

function doFlexslider() {
    $('.flexslider').flexslider({
		controlsContainer: "#portfolioBox",
		controlNav: true,
		manualControls: "#paginationWrapper div",
		directionNav: true,
		nextText: "next",
		prevText: "Previous"
  });
};



////////////////////////////////////////////////////
// AMEOBA DIVS
////////////////////////////////////////////////////


function ameobaMe() {
	var corner1 = 146, corner2 = 195, corner3 = 166, corner4 = 159, corner5 = 242, corner6 = 237, corner7 = 230, corner8 = 151;
	var onjulate;
	
    $('#portraitImg').hover( function() {
		$('#portraitTooltip').animate({'top': 295}, {duration: 600, queue: false}).animate({'opacity': 1}, {duration: 600, queue: false});
		var counter = 0;
		corner1 = 146, corner2 = 195, corner3 = 166, corner4 = 159, corner5 = 242, corner6 = 237, corner7 = 230, corner8 = 151;	
		onjulate =	setInterval( function() {
			for (i=1; i<=8; i++) {
				//var current = eval('corner'+(i+1));
				//var previous = eval('corner'+i);
				//var next = eval('corner'+(i+2));
				//if ( i == 7 ) {
				//	next = corner1;
				//}
				//if ( i == 8 ) {
				//	current = corner1;
				//	next = corner2;
				//}
				//console.log(corner1, corner2, corner3, corner4, corner5, corner6, corner7, corner8);
			
				//var flux = Math.floor(Math.random() * 10);
				//console.log(flux);
				var fluxA = .5;
				var fluxB = 2;
				
				if (counter == 16) {
					fluxA *= -1;
					fluxB *= -1;
					counter = 0;
				} else { counter++; }
			
			
				if ( i == 1 && corner1 <= corner8 ) {
					corner1 += fluxA;
					corner8 -= fluxA;
					assignBorderRadius();
				} else if ( i == 1 ) {
					corner1 -= fluxB;
					corner2 += fluxB;
					assignBorderRadius();
				}
			
				if ( i == 2 && corner2 <= corner1 ) {
					corner2 += fluxA;
					corner1 -= fluxA;
					assignBorderRadius();
				} else if ( i == 2 ) {
					corner2 -= fluxB;
					corner3 += fluxB;
					assignBorderRadius();
				}
			
				if ( i == 3 && corner3 <= corner2 ) {
					corner3 += fluxA;
					corner2 -= fluxA;
					assignBorderRadius();
				} else if ( i == 3 ) {
					corner3 -= fluxB;
					corner4 += fluxB;
					assignBorderRadius();
				}
			
				if ( i == 4 && corner4 <= corner3 ) {
					corner4 += fluxA;
					corner3 -= fluxA;
					assignBorderRadius();
				} else if ( i == 4 ) {
					corner4 -= fluxB;
					corner5 += fluxB;
					assignBorderRadius();
				}
			
				if ( i == 5 && corner5 <= corner4 ) {
					corner5 += fluxA;
					corner4 -= fluxA;
					assignBorderRadius();
				} else if ( i == 5 ) {
					corner5 -= fluxB;
					corner6 += fluxB;
					assignBorderRadius();
				}
			
				if ( i == 6 && corner6 <= corner5 ) {
					corner6 += fluxA;
					corner5 -= fluxA;
					assignBorderRadius();
				} else if ( i == 6 ) {
					corner6 -= fluxB;
					corner7 += fluxB;
					assignBorderRadius();
				}
			
				if ( i == 7 && corner7 <= corner6 ) {
					corner7 += fluxA;
					corner6 -= fluxA;
					assignBorderRadius();
				} else if ( i == 7 ) {
					corner7 -= fluxB;
					corner8 += fluxB;
					assignBorderRadius();
				}
			
				if ( i == 8 && corner8 <= corner7 ) {
					corner8 += fluxA;
					corner7 -= fluxA;
					assignBorderRadius();
				} else if ( i == 8 ) {
					corner8 -= fluxB;
					corner1 += fluxB;
					assignBorderRadius();
				}

			}
		}, 5);
	}, function (){
		$('#portraitTooltip').animate({'top': 275}, {duration: 600, queue: false}).animate({'opacity': 0}, {duration: 600, queue: false});
		clearInterval(onjulate);
		onjulateBack =	setInterval( function() {
			
			if ( corner1 < 146 ) { corner1++; }
			if ( corner2 < 195 ) { corner2++; };
			if ( corner3 < 166 ) { corner3++; };
			if ( corner4 < 159 ) { corner4++; };
			if ( corner5 < 242 ) { corner5++; };
			if ( corner6 < 237 ) { corner6++; };
			if ( corner7 < 230 ) { corner7++; };
			if ( corner8 < 151 ) { corner8++; };
			
			if ( corner1 > 146 ) { corner1--; };
			if ( corner2 > 195 ) { corner2--; };
			if ( corner3 > 166 ) { corner3--; };
			if ( corner4 > 159 ) { corner4--; };
			if ( corner5 > 242 ) { corner5--; };
			if ( corner6 > 237 ) { corner6--; };
			if ( corner7 > 230 ) { corner7--; };
			if ( corner8 > 151 ) { corner8--; };
			
			assignBorderRadius();

			if ( corner1 == 146 && corner2 == 195 && corner3 == 166 && corner4 == 159 && corner5 == 242 && corner6 == 237 && corner7 == 230 && corner8 == 151 ) { clearInterval(onjulateBack); };
			
		}, 5);
		
	});
	
	function assignBorderRadius() {
		
		$('#chapolitoPortrait').css({
			'border-top-right-radius': corner1 + 'px ' + corner2 + 'px',
			'border-bottom-right-radius': corner3 + 'px ' + corner4 + 'px',
			'border-bottom-left-radius': corner5 + 'px ' + corner6 + 'px',
			'border-top-left-radius': corner7 + 'px ' + corner8 + 'px'
		});
		
		$('#portraitImg').css({
			'border-top-right-radius': corner1 + 'px ' + corner2 + 'px',
			'border-bottom-right-radius': corner3 + 'px ' + corner4 + 'px',
			'border-bottom-left-radius': corner5 + 'px ' + corner6 + 'px',
			'border-top-left-radius': corner7 + 'px ' + corner8 + 'px'
		});
		
	}

};
 


////////////////////////////////////////////////////
// CR SPLINES - not used, switched to CSS Animations
////////////////////////////////////////////////////

/*
function pelicanThree() {
	$("#pelican3").animate({'opacity': 1}, {queue: false, duration: 3000}).animate({ crSpline: $.crSpline.buildSequence([[1010, 335], [460, 310], [-75, 325]])}, {queue: false, duration: 6990}, pelicanThree).animate({'left': 1010}, {queue: true, duration: 10});
	setInterval(function() { $('#pelicanWrapper').animate({'opacity': 0}, {queue: false, duration: 1000}); }, 7000);
}
*/

/*
function zeppelinAnimation() {
	$("#zeppelin").animate({ crSpline: $.crSpline.buildSequence([[774, 85], [790, 78], [785, 90], [770, 80], [774, 85]])}, 8000, zeppelinAnimation); 
	$("#zeppelinCloudFront").animate({ crSpline: $.crSpline.buildSequence([[795, 145], [799, 138], [792, 140], [790, 150], [795, 145]])}, 10000, zeppelinAnimation); 
	$("#zeppelinCloudBack").animate({ crSpline: $.crSpline.buildSequence([[732, 65], [735, 68], [731, 72], [726, 67], [729, 62], [732, 65]])}, 5000, zeppelinAnimation); 
	


	//$("#pelican").animate({'opacity': 1}, {queue: false, duration: 1000});
	//setTimeout(function() { $('#pelicanWrapper').animate({'opacity': 0}, {queue: false, duration: 1000}); }, 7000);
	//setTimeout(function() { $('#pelicanWrapper').animate({'opacity': 1}, {queue: false, duration: 1000}); }, 1);
	//$("#pelican1").animate({'opacity': 1}, {duration: 3000, queue: false}).animate({ crSpline: $.crSpline.buildSequence([[1000, 330], [480, 300], [-80, 320]])}, {duration: 8000, queue: false}, zeppelinAnimation);
	//$("#pelican2").animate({'opacity': 1}, {duration: 3000, queue: false}).animate({ crSpline: $.crSpline.buildSequence([[1005, 340], [430, 290], [-70, 315]])}, {duration: 8500, queue: false}, zeppelinAnimation);
	
	//.fadeTo({queue: false, duration: 1000}, 1)
	
	$("#pelican1").delay(5000, "scaleDown").queue("scaleDown", function(next) { 
		$(this).animate({'height': 12}, {duration: 3000, queue: false})
		.animate({'width': 21}, {duration: 3000, queue: false});
		//.animate({'opacity': 0}, {duration: 3000, queue: false}) 
		next();
	})
	.dequeue("scaleDown")
	.animate({'width': 42}, {duration: 3000, queue: false})
	.animate({'height': 24}, {duration: 3000, queue: false}); 
	//.animate({'opacity': 1}, {duration: 3000, queue: false})
	
	
	//$("#pelican1").animate({'width': 42}, {queue: false, duration: 2000}).animate({'height': 24}, {queue: false, duration: 2000}).delay(2000).animate({'width': 21}, {queue: false, duration: 2000}).animate({'height': 12}, {queue: false, duration: 2000});
	setInterval(function() {
		var pelicanDimensions = 7 * $("#pelican1").width() + 'px ' + $("#pelican1").height() + 'px ';
		//console.log(pelicanDimensions);
		$("#pelican1").css('background-size', pelicanDimensions);
	}, 40);
	
}
*/


////////////////////////////////////////////////////
// BACKGROUND CLOUDS
////////////////////////////////////////////////////

function makeClouds() {		
	
	////////////////////////////////////////////////////
	//Generate Initial Clouds
	////////////////////////////////////////////////////

	var docWidth = $(document).width();
	var docHeight = $('html').height();
	
	//var numHeightSlices = Math.floor(docHeight/650);
	//var numWidthSlices = Math.floor(docWidth/650);
	
	//var heightSlice = docHeight / numHeightSlices;
	//var widthSlice = docWidth / numWidthSlices;

	//var maxCloudCount = (numHeightSlices + numWidthSlices) * 6;
	

	//var tempHeight = 0;
	//var tempWidth = 0;

	var cloudCount = 0;
	
	var startPosition = [283, 124, 139, 106, 321, 410];
	
	var heightDimensions = ['84px', '56px', '61px', '46px', '108px', '106px'];
	
	var widthDimensions = ['283px ', '124px ', '139px ', '106px ', '321px ', '410px '];

	var backgroundStart = ['0px -106px', '-286px -106px', '-271px -298px', '0px -298px', '0px -190px', '0px 0px'];
	

	for (var cloudBatch = 1; cloudBatch <= 1; cloudBatch++) {  
		for (var cloudNum = 1; cloudNum <= 6; cloudNum++) {  
		
			cloudCount++;                               
					
			var posy = Math.floor(Math.random() * docWidth);
			var posx = Math.floor(Math.random() * docHeight);

			// make the start point smaller if it will place the image outside of the document (avoiding scrollbar)
			if (posx >= (docHeight - 108)) { posx -= 108; };
			if (posy > (docWidth - startPosition[cloudNum-1])) { posy = docWidth - startPosition[cloudNum-1]; };
			
			// turn the y-coordinate start position into a percent so that the CSS animation works
			// var percentx = Math.floor(100 * (posx/docHeight));
			var percenty = Math.floor(100 * (posy/docWidth)) + 0.1;

			// write the cloud to the html file
			$('<div>', {id: 'cloud'+cloudCount}).css({
				'left': percenty+'%',
				'top': posx+'px',
				'background-position': backgroundStart[cloudNum-1],
				//'background': 'url(/img/cloud'+cloudNum+'.png)',
				'width': widthDimensions[cloudNum-1],
				'height': heightDimensions[cloudNum-1],
				'class': cloudNum+'c',
				'-webkit-animation-duration': (cloudCount+12)+'s',
				//'-moz-animation-duration': (cloudCount+12)+'s',
				'-o-animation-duration': (cloudCount+12)+'s'
			}).append(cloudNum).appendTo('#clouds').fadeTo(1000, 1);			
		}
	}

	/*
	//EVENLY PLACE THE CLOUDS WITHIN GRID "SLICES"

	for (var w = 1; w <= numWidthSlices ; w++) { 	

		tempWidth += widthSlice;
		tempHeight = 0;
	
		for (var h = 1; h <= numHeightSlices ; h++) { 
	
			tempHeight += heightSlice;

			for (var cloudNum = 1; cloudNum <= 6; cloudNum++) {  
	
				cloudCount++;                               
						
				var posy = Math.floor(tempWidth-(Math.random() * (widthSlice-20)));
				var posx = Math.floor(tempHeight-(Math.random() * (heightSlice-20)));
	
				// make the start point smaller if it will place the image outside of the document (avoiding scrollbar)
				if (posx >= (docHeight - 108)) {posx -= 108};
				if (posy > startPosition(cloudNum)) {posy = startPosition(cloudNum)};
				
				// turn the y-coordinate start position into a percent so that the CSS animation works
				// var percentx = Math.floor(100 * (posx/docHeight));
				var percenty = Math.floor(100 * (posy/docWidth));

			
				var hDimension = determineHDimensions(cloudNum);
				var wDimension = determineWDimensions(cloudNum);
			
				var dimensions = wDimension+hDimension;
			
				var backgroundStart = determineBackgroundStart(cloudNum);

				// write the cloud to the html file
				$('<div>', {id: 'cloud'+cloudCount}).css({
					'left': percenty+'%',
					'top': posx+'px',
					'background-position': backgroundStart,
					'width': wDimension,
					'height': hDimension,
					'class': cloudNum+'c',
					'-webkit-animation-duration': (cloudCount+8)+'s'
				}).append(cloudNum).appendTo('#clouds').fadeTo(1000, 1);


			}
		}
	}
	*/






	////////////////////////////////////////////////////
	//Animate Clouds
	////////////////////////////////////////////////////
/*
	for (var a = 1; a <= cloudCount; a++) { 
			var leftoff = $('#cloud'+a).position();
			//console.log(leftoff.left);
			
		function determineSpeed(clNum) {
			
			if ( leftoff.left < (docWidth/2) ) { 
				var ranTimeFast =  5000 + Math.floor((Math.random() * (15000)));
				//console.log('fast');
				return ranTimeFast; 

			} else { 
				var ranTimeSlow = 20000 + Math.floor((Math.random() * (50000)));
				//console.log('slow');
				return ranTimeSlow; 
			}
		};

		tweenCloud(a);
		
		function tweenCloud(cloudNumber){
			
			var speed = determineSpeed(cloudNumber);
			//console.log(speed);
			
			var fadeTime = .2 * speed;
			var randomHeight = Math.floor((Math.random() * (docHeight-108)));
			var gap = $('#cloud'+cloudNumber).html();
			var startPixel = startPosition(gap);
			
			//console.log('start : ',startPixel, gap);
			
			setTimeout(function() { $('#cloud'+cloudNumber).animate({'opacity': 0}, {queue: false, duration: fadeTime}); }, fadeTime * 4);
			
			$('#cloud'+cloudNumber).animate({'opacity': 1}, {queue: false, duration: fadeTime}).animate({'left': '0px'}, speed, "linear", function() {
				$('#cloud'+cloudNumber).animate({'left': startPixel+'px', "top": randomHeight}, 1);
				tweenCloud(cloudNumber);
			});
			
		
		}
	}	
	*/	
}	


var eArray = new Array(); // Array will hold DOM objects with Event Listeners.

//Add Event listeners to all of the cloud divs
var addingCloudAnimationListener = function() {

	for (var cloudDivNum = 0; cloudDivNum <= 11; cloudDivNum++) { 

      	var e = document.getElementById("cloud"+(cloudDivNum+1));

      	e.addEventListener("webkitAnimationIteration", listener, false);
      	e.addEventListener("animationiteration", listener, false);

      	eArray[cloudDivNum] = e;

	};
}

//listen for iteration of css animation loop and then reset the animation-name so that it starts from the right side after the first iteration
var listener = function(e) {
	
	switch(e.type) {
      
        case "webkitAnimationIteration":
			var sibNumber = $(this).parent().children(this.nodeName).index(this);
			$("#cloud"+(sibNumber+1)).css({
				'-webkit-animation-name': 'cloudAnimation',
				//'-moz-animation-name': 'cloudAnimation',
				'-o-animation-name': 'cloudAnimation'
			});
			eArray[sibNumber].removeEventListener("webkitAnimationIteration", listener, false)
			eArray[sibNumber].removeEventListener("animationiteration", listener, false);

		   	break;

		case "animationiteration":
			var sibNumber = $(this).parent().children(this.nodeName).index(this);
			$("#cloud"+(sibNumber+1)).css({
				'-webkit-animation-name': 'cloudAnimation',
				//'-moz-animation-name': 'cloudAnimation',
				'-o-animation-name': 'cloudAnimation'
			});
			eArray[sibNumber].removeEventListener("webkitAnimationIteration", listener, false)
			eArray[sibNumber].removeEventListener("animationiteration", listener, false);

		   	break;
    }
}


	


