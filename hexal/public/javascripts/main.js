var canvass = document.getElementById('canvas');
if(canvass.getContext){
	canvas.width = $(document).width();
	canvas.height = $(document).height();
}
var canvas = oCanvas.create({ 
    canvas: "#canvas", 
    background: "#DEDEDE", 
    fps: 60
});

var neg1_ = 0,
	neg2_ = 0,
	neg3_ = 0,
	middle_ = 0,
	pos1_ = 0,
	pos2_ = 0,
	pos3_ = 0,
	blackbox_ = 0,
	whitebox_ = 0;
//-----------------------------------------------------------------drawing the stuff
//logo
var coreColor1 = canvas.display.polygon({
		rotation: 90,
		x: 0,
		y: canvas.width/14,
		sides:3,
		radius: canvas.width/15,
		fill: "#CECECE",
		zIndex: 0,
		opacity: 1
}); 
var coreColor2 = canvas.display.polygon({
		rotation: 150,
		x: 0,
		y: canvas.width / 14,
		sides:3,
		radius: canvas.width/15,
		fill: "#BABABA",
		zIndex: 0,
		opacity: 1
}); 
var coreColor3 = canvas.display.polygon({
		rotation: 90,
		x: 0,
		y: canvas.width/14,
		sides:3,
		radius: canvas.width/15,
		fill: "#EBEBEB",
		zIndex: 0,
		opacity: 1
}); 

var logo = canvas.display.image({
	x:canvas.width/2 - (504*.0005*canvas.width)/2,
	y:canvas.height/10000,
	image: "./public/images/hexal_logo.png",
	height: 216*.0005*canvas.width,
	width: 504*.0005*canvas.width
});
canvas.addChild(logo);
//restart button

var restart = canvas.display.rectangle({
	x: canvas.width - (canvas.width/15),
	y: canvas.height - 50,
	fill: "0aa",
	height:20,
	width:canvas.width/15
});
canvas.addChild(restart);
//----to the left

var neg1 = canvas.display.polygon({
	x: canvas.width*13/30,
	y: canvas.height/2.5,
	sides: 3,
	radius: canvas.width/15,
	rotation: 90,
	fill: "#FFFF84",
	clickable_value: 0
});

var neg2 = canvas.display.polygon({
	x: canvas.width*11/30,
	y: canvas.height/2,
	sides: 3,
	radius: canvas.width/15,
	rotation: 270,
	fill: "#FF944D",
	clickable_value: 0
});

var neg3 = canvas.display.polygon({
	x: canvas.width*9/30,
	y: canvas.height/2.5,
	sides: 3,
	radius: canvas.width/15,
	rotation: 90,
	fill: "#FF7575",
	clickable_value: 0
});
//----middle
var middle = canvas.display.polygon({
	x: canvas.width/2,
	y: canvas.height/2,
	sides: 3,
	radius: canvas.width/15,
	rotation: 270,
	fill: "#5CD65C",
	zIndex: "front",
	clickable_value: 0
});


//----to the right

var pos1 = canvas.display.polygon({
	x: canvas.width*17/30,
	y: canvas.height/2.5,
	sides: 3,
	radius: canvas.width/15,
	rotation: 90,
	fill: "#7BCAE1",
	clickable_value: 0
});

var pos2 = canvas.display.polygon({
	x: canvas.width*19/30,
	y: canvas.height/2,
	sides: 3,
	radius: canvas.width/15,
	rotation: 270,
	fill: "#5983FF",
	clickable_value: 0
});

var pos3 = canvas.display.polygon({
	x: canvas.width*21/30,
	y: canvas.height/2.5,
	sides: 3,
	radius: canvas.width/15,
	rotation: 90,
	fill: "#9B4EE9",
	clickable_value: 0
});

//boxes
var blackbox = canvas.display.polygon({
	x: canvas.width*4.35/10,
	y: canvas.height/1.4,
	sides: 4,
	radius: canvas.width/14,
	rotation: 45,
	fill: "#000",
	clickable_value: 0
});
var whitebox = canvas.display.polygon({
	x: canvas.width*5.65/10,
	y: canvas.height/1.4,
	sides: 4,
	radius: canvas.width/14,
	rotation: 45,
	fill: "#FFF",
	clickable_value: 0
});


//drawing initial triangles
canvas.addChild(blackbox);
canvas.addChild(whitebox);
canvas.addChild(neg1);
canvas.addChild(neg2);
canvas.addChild(neg3);
canvas.addChild(middle);
canvas.addChild(pos1);
canvas.addChild(pos2);
canvas.addChild(pos3);


//---------------------------------------adding clickables
restart.bind("click tap", function() {
	logo.fadeIn();
	blackbox.fadeIn();
	whitebox.fadeIn();
	neg1.fadeIn();
	neg2.fadeIn();
	neg3.fadeIn();
	middle.fadeIn();
	pos1.fadeIn();
	pos2.fadeIn();
	pos3.fadeIn();
	blackbox.animate({
		x: canvas.width*4.35/10,
		y: canvas.height/1.4,
		sides: 4,
		radius: canvas.width/14,
		rotation: 45,
		fill: "#000"}, 
		{
		duration: 1000, easing: "ease-in-out-cubic",
		callback: function() {
			blackbox_ = 0;
		}
	});


	whitebox.animate({
		x: canvas.width*5.65/10,
		y: canvas.height/1.4,
		sides: 4,
		radius: canvas.width/14,
		rotation: 45,
		fill: "#FFF"},{
		duration: 1000, easing: "ease-in-out-cubic",
		callback: function() {
			whitebox_ = 0;
		}
	});

	neg1.animate({
		x: canvas.width*13/30,
		y: canvas.height/2.5,
		sides: 3,
		radius: canvas.width/15,
		rotation: 90,
		fill: "#FFFF84"},{
		duration: 1000, easing: "ease-in-out-cubic",
		callback: function() {
			neg1_ = 0;
		}
	});


	neg2.animate({
		x: canvas.width*11/30,
		y: canvas.height/2,
		sides: 3,
		radius: canvas.width/15,
		rotation: 270,
		fill: "#FF944D"},{
		duration: 1000, easing: "ease-in-out-cubic",
		callback: function() {
			neg2_ = 0
		}
	});

	neg3.animate({
		x: canvas.width*9/30,
		y: canvas.height/2.5,
		sides: 3,
		radius: canvas.width/15,
		rotation: 90,
		fill: "#FF7575"},{
		duration: 1000, easing: "ease-in-out-cubic",
		callback: function() {
			neg3_ = 0
		}
	});

	middle.animate({
		x: canvas.width/2,
		y: canvas.height/2,
		sides: 3,
		radius: canvas.width/15,
		rotation: 270,
		fill: "#5CD65C"},{
		duration: 1000, easing: "ease-in-out-cubic",
		callback: function() {
			middle_ = 0;
		}
	});
	
	pos1.animate({
		x: canvas.width*17/30,
		y: canvas.height/2.5,
		sides: 3,
		radius: canvas.width/15,
		rotation: 90,
		fill: "#7BCAE1"},
		{
		duration: 1000, easing: "ease-in-out-cubic",
		callback: function() {
			pos1_ = 0;
		}
	});

	
	pos2.animate({
		x: canvas.width*19/30,
		y: canvas.height/2,
		sides: 3,
		radius: canvas.width/15,
		rotation: 270,
		fill: "#5983FF"},{
		duration: 1000, easing: "ease-in-out-cubic",
		callback: function() {
			pos2_ = 0;
		}
	});

	
	pos3.animate({
		x: canvas.width*21/30,
		y: canvas.height/2.5,
		sides: 3,
		radius: canvas.width/15,
		rotation: 90,
		fill: "#9B4EE9"},{
		duration: 1000, easing: "ease-in-out-cubic",
		callback: function() {
			pos3_ = 0;
		}
	}); 
});

function goToCorner(shape) {
	if(shape != neg1){neg1.fadeOut();}
	if(shape!=neg2){neg2.fadeOut();}
	if(shape!=neg3){neg3.fadeOut();}
	if(shape!=middle){middle.fadeOut();}
	if(shape!=pos1){pos1.fadeOut();}
	if(shape!=pos2){pos2.fadeOut();}
	if(shape!=pos3){pos3.fadeOut();}
	if(shape!=blackbox){blackbox.fadeOut();}
	if(shape!=whitebox){whitebox.fadeOut();}
	logo.fadeOut();
	shape.fadeIn();
	shape.delay(100);
	shape.animate({
			rotation: 150,
			x: canvas.width / 14,
			y: canvas.width / 14,
			sides:3,
			radius: canvas.width/15
		}, 
		{
			duration: 1000,
			easing: "ease-in-out-cubic",
			callback: function () {
				shape.rotation = 150; 
				shape.x = canvas.width/14; 
				shape.y = canvas.width/14; 
				shape.radius = canvas.width/15;}
	});
}

function fadeInAll(){
	logo.fadeIn();
	blackbox.fadeIn();
	whitebox.fadeIn();
	neg1.fadeIn();
	neg2.fadeIn();
	neg3.fadeIn();
	middle.fadeIn();
	pos1.fadeIn();
	pos2.fadeIn();
	pos3.fadeIn();
}

function slideInEverything(shape) {
	baseColor = shape.fill;
	console.log(baseColor);
	var rectangle = canvas.display.rectangle({
		x: 0,
		y: 0,
		width: canvas.width/14,
		height: canvas.width/14  + shape.side/2,
		fill: "#DEDEDE",
		zIndex: 1
	});
	coreColor1.y = canvas.width/14 - middle.radius/2;
	coreColor3.y = canvas.width/14 - middle.radius/2;
	
	canvas.addChild(coreColor1);
	canvas.addChild(coreColor2);
	canvas.addChild(coreColor3);
	canvas.addChild(rectangle)
	shape.zIndex = 100;
	
	canvas.redraw();
	coreColor1.delay(2000);
	coreColor2.delay(2050);
	coreColor3.delay(2100);
	coreColor1.animate({x: (canvas.width/14 + (middle.side / 2)), opacity: 1},{
				duration: 200, easing: "ease-in-out-cubic"
				}); 
	coreColor2.animate({x: (canvas.width/14 + (middle.side)), opacity: 1},{
				duration: 200, easing: "ease-in-out-cubic"
				}); 
	coreColor3.animate({x: (canvas.width/14 + (middle.side / 2)*3), opacity: 1},{
				duration: 200, easing: "ease-in-out-cubic"
				}); 
}

function bindInitialClick(x_, y_, radius_, fill_, rotation, sides, shape, shape_){
	shape.bind("click tap", function firstanim(){
		
		if(shape.clickable_value == 2){
			
		}
		else if(shape_ == 0 && shape.x != canvas.width/14 && shape.y != canvas.width/14){
			shape_ = 1;
			if(shape!=neg1){neg1.clickable_value = 2;}
			if(shape!=neg2){neg2.clickable_value = 2;}
			if(shape!=neg3){neg3.clickable_value = 2;}
			if(shape!=middle){middle.clickable_value = 2;}
			if(shape!=pos1){pos1.clickable_value = 2;}
			if(shape!=pos2){pos2.clickable_value = 2;}
			if(shape!=pos3){pos3.clickable_value = 2;}
			if(shape!=blackbox){blackbox.clickable_value = 2;}
			if(shape!=whitebox){whitebox.clickable_value = 2;}

			
			goToCorner(shape);
			slideInEverything(shape);
			
			}
		else if(shape_ == 1 && shape.x == canvas.width/14 && shape.y == canvas.width/14){
				fadeInAll();
				
				if(shape!=neg1){neg1.clickable_value = 0;}
				if(shape!=neg2){neg2.clickable_value = 0;}
				if(shape!=neg3){neg3.clickable_value = 0;}
				if(shape!=middle){middle.clickable_value = 0;}
				if(shape!=pos1){pos1.clickable_value = 0;}
				if(shape!=pos2){pos2.clickable_value = 0;}
				if(shape!=pos3){pos3.clickable_value = 0;}
				if(shape!=blackbox){blackbox.clickable_value = 0;}
				if(shape!=whitebox){whitebox.clickable_value = 0;}
				coreColor1.delay(600);
				coreColor2.delay(650);
				coreColor3.delay(700);
				coreColor1.animate({x: 0, opacity: 1},{
							duration: 200, easing: "ease-in-out-cubic"
							}); 
				coreColor2.animate({x: 0, opacity: 1},{
							duration: 200, easing: "ease-in-out-cubic"
							}); 
				coreColor3.animate({x: 0, opacity: 1},{
							duration: 200, easing: "ease-in-out-cubic"
							});
				shape.animate({
				x: canvas.width*x_,
				y: canvas.height*y_,
				sides: sides,
				radius: canvas.width*radius_,
				rotation: rotation,
				fill: fill_},{
				duration: 1000, easing: "ease-in-out-cubic",
				callback: function() {
					
					shape_ = 0;
					
					}
				});
			}
		});
}


bindInitialClick(13/30, 1/2.5, 1/15, "#FFFF84", 90, 3, neg1, neg1_);

bindInitialClick(11/30, 1/2, 1/15, "#FF944D", 270, 3, neg2, neg2_)

bindInitialClick(9/30, 1/2.5, 1/15, "#FF7575", 90, 3, neg3, neg3_)

bindInitialClick(1/2, 1/2, 1/15, "#5CD65C", 270, 3, middle, middle_);

bindInitialClick(17/30, 1/2.5, 1/15, "#7BCAE1", 90, 3, pos1, pos1_);

bindInitialClick(19/30, 1/2, 1/15, "#5983FF", 270, 3, pos2, pos2_);

bindInitialClick(21/30, 1/2.5, 1/15, "#9B4EE9", 90, 3, pos3, pos3_);

bindInitialClick(4.35/10, 1/1.4, 1/14, "#000", 45, 4, blackbox, blackbox_);

bindInitialClick(5.65/10, 1/1.4, 1/14, "#FFF", 45, 4, whitebox, whitebox_);



//-----------------After initial choice */


