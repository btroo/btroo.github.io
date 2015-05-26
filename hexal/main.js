//Developed by Brandon Truong
jQuery.fn.centerHeight = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    return this;
}
jQuery.fn.centerWidth = function() {
	this.css("position","absolute");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
	return this;
}
jQuery.extend(jQuery.easing, { easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	}
});
var canvas = oCanvas.create({ 
    canvas: "#canvas", 
    background: "#BEBEBE", 
    fps: 60
});
var canvass = document.getElementById('canvas');
if(canvass.getContext){
	canvas.width = $(document).width();
	canvas.height = $(document).height();
}
if(canvas.width > canvas.height){
	$("#logo").css('width', 349*.0003*canvas.width);
	$("#logo").css('height', 100*.0003*canvas.width);
}
if(canvas.width < canvas.height){
	$("#logo").css('width', 349*.0008*canvas.height);
	$("#logo").css('height', 100*.0008*canvas.height);
}
$("#logo").centerWidth();
$("#introText").centerWidth();
var downX = parseFloat($('#logo').css('left')) + parseFloat($("#logo").css("width")) + canvas.height*349*.0001;

var neg1_ = 0,
	neg2_ = 0,
	neg3_ = 0,
	middle_ = 0,
	pos1_ = 0,
	pos2_ = 0,
	pos3_ = 0,
	blackbox_ = 0,
	whitebox_ = 0,
	downTriangle_ = 0;
var downTriangle =  canvas.display.polygon({
		rotation: 90,
		x: parseFloat(downX),
		y: 0,
		sides:3,
		radius: 100*.0008*canvas.height/2,
		fill: "#000",
		zIndex: 10000,
		opacity: 1
}); 

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
var inn = 0;
var swatch1_1 = canvas.display.rectangle({
	x: canvas.width*1/14,
	y: canvas.height*4/14,
	width: canvas.width*1.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch1_2 = canvas.display.rectangle({
	x: canvas.width*2.5/14,
	y: canvas.height*4/14,
	width: canvas.width*1/14,
	height: canvas.height/5,
	fill: "#ABABAB",
	zIndex: 100,
	opacity: 0
});
var swatch1_3 = canvas.display.rectangle({
	x: canvas.width*3.5/14,
	y: canvas.height*4/14,
	width: canvas.width*.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch2_1 = canvas.display.rectangle({
	x: canvas.width*5.5/14,
	y: canvas.height*4/14,
	width: canvas.width*1.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch2_2 = canvas.display.rectangle({
	x: canvas.width*7/14,
	y: canvas.height*4/14,
	width: canvas.width*1/14,
	height: canvas.height/5,
	fill: "#ABABAB",
	zIndex: 100,
	opacity: 0
});
var swatch2_3 = canvas.display.rectangle({
	x: canvas.width*8/14,
	y: canvas.height*4/14,
	width: canvas.width*.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch3_1 = canvas.display.rectangle({
	x: canvas.width*10/14,
	y: canvas.height*4/14,
	width: canvas.width*1.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch3_2 = canvas.display.rectangle({
	x: canvas.width*11.5/14,
	y: canvas.height*4/14,
	width: canvas.width*1/14,
	height: canvas.height/5,
	fill: "#ABABAB",
	zIndex: 100,
	opacity: 0
});
var swatch3_3 = canvas.display.rectangle({
	x: canvas.width*12.5/14,
	y: canvas.height*4/14,
	width: canvas.width*.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch4_1 = canvas.display.rectangle({
	x: canvas.width*1/14,
	y: canvas.height*8/14,
	width: canvas.width*1.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch4_2 = canvas.display.rectangle({
	x: canvas.width*2.5/14,
	y: canvas.height*8/14,
	width: canvas.width*1/14,
	height: canvas.height/5,
	fill: "#ABABAB",
	zIndex: 100,
	opacity: 0
});
var swatch4_3 = canvas.display.rectangle({
	x: canvas.width*3.5/14,
	y: canvas.height*8/14,
	width: canvas.width*.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch5_1 = canvas.display.rectangle({
	x: canvas.width*5.5/14,
	y: canvas.height*8/14,
	width: canvas.width*1.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch5_2 = canvas.display.rectangle({
	x: canvas.width*7/14,
	y: canvas.height*8/14,
	width: canvas.width*1/14,
	height: canvas.height/5,
	fill: "#ABABAB",
	zIndex: 100,
	opacity: 0
});
var swatch5_3 = canvas.display.rectangle({
	x: canvas.width*8/14,
	y: canvas.height*8/14,
	width: canvas.width*.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch6_1 = canvas.display.rectangle({
	x: canvas.width*10/14,
	y: canvas.height*8/14,
	width: canvas.width*1.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});
var swatch6_2 = canvas.display.rectangle({
	x: canvas.width*11.5/14,
	y: canvas.height*8/14,
	width: canvas.width*1/14,
	height: canvas.height/5,
	fill: "#ABABAB",
	zIndex: 100,
	opacity: 0
});
var swatch6_3 = canvas.display.rectangle({
	x: canvas.width*12.5/14,
	y: canvas.height*8/14,
	width: canvas.width*.5/14,
	height: canvas.height/5,
	fill: "#000",
	zIndex: 100,
	opacity: 0
});

var logo = canvas.display.image({
	x:canvas.width/2 - (504*.0005*canvas.width)/2,
	y:10,
	image: "hexal_logo.png",
	height: 216*.000005*canvas.width,
	width: 504*.0000005*canvas.width,
	opacity: 0
});
canvas.addChild(logo);

//restart button

var restart = canvas.display.rectangle({
	x: canvas.width - (canvas.width/15),
	y: canvas.height - 50,
	fill: "#0aa",
	height:20,
	width:canvas.width/15
});
//canvas.addChild(restart);
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
	fill: "#FF4545",
	clickable_value: 0,
	opacity: 1
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
var backText = canvas.display.text({
	x: canvas.width / 14,
	y: canvas.width / 14,
	origin: { x: "center", y: "top" },
	font: ".5em arial, san-serif",
	text: "BACK",
	fill: "#7D7A73",
	size:canvas.width/90,
	opacity:0
});


//drawing initial triangles


canvas.addChild(backText);
canvas.addChild(swatch1_1);
canvas.addChild(swatch1_2);
canvas.addChild(swatch1_3);
canvas.addChild(swatch2_1);
canvas.addChild(swatch2_2);
canvas.addChild(swatch2_3);
canvas.addChild(swatch3_1);
canvas.addChild(swatch3_2);
canvas.addChild(swatch3_3);
canvas.addChild(swatch4_1);
canvas.addChild(swatch4_2);
canvas.addChild(swatch4_3);
canvas.addChild(swatch5_1);
canvas.addChild(swatch5_2);
canvas.addChild(swatch5_3);
canvas.addChild(swatch6_1);
canvas.addChild(swatch6_2);
canvas.addChild(swatch6_3);
canvas.addChild(neg2);
canvas.addChild(neg3);
canvas.addChild(middle);
canvas.addChild(pos1);
canvas.addChild(pos2);
canvas.addChild(pos3);
canvas.addChild(neg1);
canvas.addChild(blackbox);
canvas.addChild(whitebox);
canvas.addChild(backText);

canvas.addChild(downTriangle);

downTriangle.bind("click tap", function() {
	$("#introText").fadeOut();
	canvas.redraw();
	if(downTriangle_==0){
		downTriangle.animate({
			y: 500 + this.radius/2
		}, {
			duration: 1200,
			easing: "swing",
			callback: function() {
				downTriangle_ = 1;
			}
		});
		$("#info").animate({marginTop:"+=500px"}, {duration: 1000, easing: "swing"});
	}
	else if(downTriangle_==1){
		$("#info").animate({marginTop:"-=500px"}, {duration: 1000, easing: "swing"});
		downTriangle.animate({
			y: 0
		}, {
			duration: 1200,
			easing: "swing",
			callback: function() {
				downTriangle_ = 0;
			}
		});
	}
});
//$("#info").css('background', "#FFF");
//$("#info").animate({marginTop:"+=500px"}, {duration: 1000, easing: "easeInOutBack"});
function goToCorner(shape) {
	if(shape!=neg1){neg1.fadeOut();}
	if(shape!=neg2){neg2.fadeOut();}
	if(shape!=neg3){neg3.fadeOut();}
	if(shape!=middle){middle.fadeOut();}
	if(shape!=pos1){pos1.fadeOut();}
	if(shape!=pos2){pos2.fadeOut();}
	if(shape!=pos3){pos3.fadeOut();}
	if(shape!=blackbox){blackbox.fadeOut();}
	if(shape!=whitebox){whitebox.fadeOut();}
	logo.fadeOut();
	shape.fadeIn(500);
	
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
				shape.radius = canvas.width/15;
				}
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
function fillSwatches(a1, a2, a3, b1, b2, b3, c1, c2, c3, d1, d2, d3, e1, e2, e3, f1, f2, f3){
	swatch1_1.fill = a1;
	swatch1_2.fill = a2;
	swatch1_3.fill = a3;
	swatch2_1.fill = b1;
	swatch2_2.fill = b2;
	swatch2_3.fill = b3;
	swatch3_1.fill = c1;
	swatch3_2.fill = c2;
	swatch3_3.fill = c3;
	swatch4_1.fill = d1;
	swatch4_2.fill = d2;
	swatch4_3.fill = d3;
	swatch5_1.fill = e1;
	swatch5_2.fill = e2;
	swatch5_3.fill = e3;
	swatch6_1.fill = f1;
	swatch6_2.fill = f2;
	swatch6_3.fill = f3;
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function swatchCreate(swatch, color, width, x_, y_, delay){
	/*
	swatch = canvas.display.rectangle({
		x: x_,
		y: y_,
		width: width,
		height: canvas.height/5,
		fill: color,
		zIndex: 100,
		opacity: 0
	});
	*/
	//canvas.addChild(swatch);
	//console.log("var " + swatch + " = canvas.display.rectangle({\nx: " + x_ + ",\ny: " + y_  + ",\nwidth: " + width + ",\nheight: canvas.height/5,\nfill: " + color + ",\nzIndex: 100,\nopacity: 0\n});");
	//console.log("canvas.addChild(" + swatch + ");");
	//console.log(swatch + ".fadeIn(500);");
	console.log(swatch + ".fill = '';");
}

function slideInEverything(shape) {
	baseColor = shape.fill;
	console.log(baseColor);
	coreColor1.y = canvas.width/14 - middle.radius/2;
	coreColor3.y = canvas.width/14 - middle.radius/2;
	var mask = canvas.display.rectangle({
		x: 0,
		y: 0,
		width: canvas.width/14,
		height: canvas.width*1.5/14,
		fill: "BEBEBE",
		zIndex: -1
	});


	canvas.addChild(coreColor1);	
	canvas.addChild(coreColor2);
	canvas.addChild(coreColor3);
	
	if(inn == 0){
		canvas.addChild(mask);
	}
	inn = 1;
	shape.zIndex = 100;
	backText.zIndex = 101;
	downTriangle.zIndex = 1000;
	backText.fill = "#7D7A73"
	if(shape != blackbox && shape != whitebox){
		rgb = hexToRgb(baseColor);
		//window.alert(rgb.r + ", " + rgb.g + "" + rgb.b); #7f.83a.83a.8
		//rgb.r = Math.round(rgb.r*1.2/2);
		//rgb.g = Math.round(rgb.g*1.2/2);
		//rgb.b = Math.round(rgb.b*1.2/2);
		
		//var darkerHex = rgbToHex(Math.round(255 - rgb.r*1.2/2), Math.round(255 - rgb.g*1.2/2), Math.round(255 - rgb.b*1.2/2));  complementary almost
		
		var mediumHex = rgbToHex(Math.round(rgb.r*1.8/2), Math.round(rgb.g*1.8/2), Math.round(rgb.b*1.8/2));
		var lighterHex = rgbToHex(Math.round((255-(255-rgb.r)/2)), Math.round((255-(255-rgb.g)/2)), Math.round((255-(255-rgb.b)/2)))
		if(rgb.r > rgb.g && rgb.r > rgb.b){
			var darkerHex = rgbToHex(Math.round(rgb.r/2+60), Math.round(rgb.g/2), Math.round(rgb.b/2));
		}
		else if(rgb.g > rgb.r && rgb.g > rgb.b){
			var darkerHex = rgbToHex(Math.round(rgb.r/2), Math.round(rgb.g/2+50), Math.round(rgb.b/2));
		}
		else if(rgb.b > rgb.r && rgb.b > rgb.g){
			var darkerHex = rgbToHex(Math.round(rgb.r/2), Math.round(rgb.g/2), Math.round(rgb.b/2+50));
		}
		else if(rgb.b == rgb.g){
			var darkerHex = rgbToHex(Math.round(rgb.r/2 + 40), Math.round(rgb.g/2), Math.round(rgb.b/2));
		}
		else if(rgb.r == rgb.g){ //yellow
			var darkerHex = rgbToHex(Math.round(rgb.r), Math.round(rgb.g), Math.round(rgb.b/2 + 40));
			mediumHex = rgbToHex(Math.round(rgb.r*1.9/2), Math.round(rgb.g*1.9/2), Math.round(rgb.b*1.8/2 + 20));
		}
		else if(rgb.r == rgb.b){
			var darkerHex = rgbToHex(Math.round(rgb.r), Math.round(rgb.g/2 + 40), Math.round(rgb.b));
		}
		coreColor1.fill = lighterHex;
		coreColor2.fill = darkerHex;
		coreColor3.fill = mediumHex;
		console.log(darkerHex);
		console.log(lighterHex);
	}else{
		coreColor1.fill = "#CECECE";
		coreColor2.fill = "#BABABA";
		coreColor3.fill = "#EBEBEB";
	}
	if(baseColor == '#FF4545'){ //r
		backText.fill = "#CECECE"
		fillSwatches("#181B1F", "#5D4E4F", "#E52E23", "#E6E8EC", "#ED8276", "#D2C4B0", "#504F54", "#6C1111", "#404D5C", "#6B2E27", "#32395B", "#D7A052", "#101010", "#E34B3F", "#ECD7B5", "#E48723", "#731722", "#F7F7F7");
	}
	else if(baseColor=='#FF944D'){//oj
		
		fillSwatches("#E95834", "#1F252A", "#245358", "#402000", "#23263D", "#EB591D", "#F29C83", "#7EC793", "#E1422B", "#1E222B", "#4D3D34", "#8D4B3C", "#BD6326", "#CCB734", "#211B16", "#554641", "#8B6C53", "#A6321D");
		backText.fill = "#CECECE"
	}	
	else if(baseColor=='#FFFF84'){//y
		fillSwatches("#DDBC36", "#399A9F", "#7A4121", "#4C4751", "#C6A638", "#847158", "#3A3B3E", "#7B501F", "#2C546D", "#7D7A73", "#E6C860", "#273247", "#E2B563", "#1E343E", "#1E1F23", "#433C36", "#D0B163", "#64301D");

	}	
	else if(baseColor=='#5CD65C'){//green
		fillSwatches("#327B4E", "#0B0F16", "#F08624", "#24262D", "#6C7F35", "#0A0A0B", "#3D3B31", "#1C2739", "#7D7570", "#E9EAF0", "#454230", "#D3CB83", "#191F3A", "#5EB6F6", "#427C33", "#E95175", "#494435", "#CED1E7");

	}
	else if(baseColor=='#7BCAE1'){//light blue
		fillSwatches("#245D60","#97B0BC","#9B6829","#4C281F","#2B6F5A","#917157","#0C2971","#53B69F","#FCE4B4","#1F1322","#6B9488","#EBEDD4","#4D936F","#C2C5D3","#90232B","#341138","#769986","#70407");

	}
	else if(baseColor=='#5983FF'){//blue
		fillSwatches("#3D4B59", "#292827", "#B4701F", "#935826", "#7BA7AC", "#CD862D", "#6EEBF8", "#F9DB2F", "#A096C2", "#121624", "#A62D8B", "#EDE0E7", "#21242E", "#252933", "#D8DCE8", "#393637", "#B6C2D4", "#1B1A23");
		backText.fill = "#CECECE"
	}
	else if(baseColor=='#9B4EE9'){//purp
		fillSwatches("#8D418B", "#BE1F21", "#815748", "#261323", "#0F121C", "#383F45", "#DDC1AA", "#702161", "#981F39", "#717171", "#928EA6", "#110F0F", "#2A1C50", "#878125", "#E0DFCC", "#403040", "#2C2B3D", "#C69A59");
		backText.fill = "#CECECE"
	}
	else if(baseColor=='#000'){//black
		fillSwatches("#AD6533", "#292B30", "#0A0B0C", "#101010", "#E34B3F", "#ECD7B5", "#0F131E", "#FEFFF8", "#DA9F48", "#040304", "#2C2B3D", "#C69A59", "#131618", "#B4AA9E", "#DE4C8B", "#044395", "#11161D", "#E7DCC9");
	}
	else if(baseColor=='#FFF'){//white
		fillSwatches("#DFE8DF", "#B983C7", "#F1BA80", "#1D2B3A", "#F9FEFF", "#465B75", "#6F442C", "#97948F", "#BBCDE1", "#FEFFF8", "#0F131E", "#DA9F48", "#E9EAF0", "#454230", "#D3CB83", "#656B7B", "#1D1E41", "#39A2BA");

	}
	
	canvas.redraw();
	coreColor1.delay(1500);
	coreColor2.delay(1550);
	coreColor3.delay(1600);
	coreColor1.animate({x: (canvas.width/14 + (middle.side / 2)), opacity: 1},{
			duration: 200, easing: "ease-in-out-cubic"
		}); 
	coreColor2.animate({x: (canvas.width/14 + (middle.side)), opacity: 1},{
			duration: 200, easing: "ease-in-out-cubic"
		}); 
	coreColor3.animate({x: (canvas.width/14 + (middle.side / 2)*3), opacity: 1},{
			duration: 200, easing: "ease-in-out-cubic"
		});
	backText.delay(1500);
	swatch1_1.delay(1500);
	swatch1_2.delay(1500);
	swatch1_3.delay(1500);
	swatch2_1.delay(1500);
	swatch2_2.delay(1500);
	swatch2_3.delay(1500);
	swatch3_1.delay(1500);
	swatch3_2.delay(1500);
	swatch3_3.delay(1500);
	swatch4_1.delay(1500);
	swatch4_2.delay(1500);
	swatch4_3.delay(1500);
	swatch5_1.delay(1500);
	swatch5_2.delay(1500);
	swatch5_3.delay(1500);
	swatch6_1.delay(1500);
	swatch6_2.delay(1500);
	swatch6_3.delay(1500);
	swatch1_1.fadeIn(500);
	swatch1_2.fadeIn(500);
	swatch1_3.fadeIn(500);
	swatch2_1.fadeIn(500);
	swatch2_2.fadeIn(500);
	swatch2_3.fadeIn(500);
	swatch3_1.fadeIn(500);
	swatch3_2.fadeIn(500);
	swatch3_3.fadeIn(500);
	swatch4_1.fadeIn(500);
	swatch4_2.fadeIn(500);
	swatch4_3.fadeIn(500);
	swatch5_1.fadeIn(500);
	swatch5_2.fadeIn(500);
	swatch5_3.fadeIn(500);
	swatch6_1.fadeIn(500);
	swatch6_2.fadeIn(500);
	swatch6_3.fadeIn(500);
	backText.fadeIn(500);
}
function bindInitialClick(x_, y_, radius_, fill_, rotation, sides, shape, shape_){
	backText.bind("click tap", function() {
		shape.trigger("click tap");
	});
	shape.bind("click tap", function firstanim(){
		$("#introText").fadeOut();
		if(shape.clickable_value == 2){
		}
		else if(shape_ == 0 && shape.x != canvas.width/14 && shape.y != canvas.width/14 && shape.opacity == 1){
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
			console.log(shape.fill);
			}
		else if(shape_ == 1 && shape.x == canvas.width/14 && shape.y == canvas.width/14){
				fadeInAll();
				
				swatch1_1.fadeOut(500);
				swatch1_2.fadeOut(500);
				swatch1_3.fadeOut(500);
				swatch2_1.fadeOut(500);
				swatch2_2.fadeOut(500);
				swatch2_3.fadeOut(500);
				swatch3_1.fadeOut(500);
				swatch3_2.fadeOut(500);
				swatch3_3.fadeOut(500);
				swatch4_1.fadeOut(500);
				swatch4_2.fadeOut(500);
				swatch4_3.fadeOut(500);
				swatch5_1.fadeOut(500);
				swatch5_2.fadeOut(500);
				swatch5_3.fadeOut(500);
				swatch6_1.fadeOut(500);
				swatch6_2.fadeOut(500);
				swatch6_3.fadeOut(500);
				backText.fadeOut(500);
				if(shape!=neg1){neg1.clickable_value = 0;}
				if(shape!=neg2){neg2.clickable_value = 0;}
				if(shape!=neg3){neg3.clickable_value = 0;}
				if(shape!=middle){middle.clickable_value = 0;}
				if(shape!=pos1){pos1.clickable_value = 0;}
				if(shape!=pos2){pos2.clickable_value = 0;}
				if(shape!=pos3){pos3.clickable_value = 0;}
				if(shape!=blackbox){blackbox.clickable_value = 0;}
				if(shape!=whitebox){whitebox.clickable_value = 0;}
				shape.animate({
					x: canvas.width*x_,
					y: canvas.height*y_,
					sides: sides,
					radius: canvas.width*radius_,
					rotation: rotation,
					fill: fill_},{
					duration: 800, easing: "ease-in-out-cubic",
					callback: function() {
						shape_ = 0;
						}
					});
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
							duration: 200, easing: "ease-in-out-cubic", 
							callback: function(){ }});
				
				
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
swatchCreate("swatch1_1", "#000",    "canvas.width*1.5/14",   "canvas.width*1/14",     "canvas.height*4/14", "2000");
swatchCreate("swatch1_2", "#ABABAB", "canvas.width*1/14",     "canvas.width*2.5/14", "canvas.height*4/14", "2000");
swatchCreate("swatch1_3", "#000",    "canvas.width*.5/14",    "canvas.width*3.5/14", "canvas.height*4/14", "2000");
swatchCreate("swatch2_1", "#000",    "canvas.width*1.5/14",   "canvas.width*5.5/14", "canvas.height*4/14", "2000");
swatchCreate("swatch2_2", "#ABABAB", "canvas.width*1/14",     "canvas.width*7/14", "canvas.height*4/14", "2000");
swatchCreate("swatch2_3", "#000",    "canvas.width*.5/14",    "canvas.width*8/14", "canvas.height*4/14", "2000");
swatchCreate("swatch3_1", "#000",    "canvas.width*1.5/14",   "canvas.width*10/14", "canvas.height*4/14", "2000");
swatchCreate("swatch3_2", "#ABABAB", "canvas.width*1/14",     "canvas.width*11.5/14",  "canvas.height*4/14", "2000");
swatchCreate("swatch3_3", "#000",    "canvas.width*.5/14",    "canvas.width*12.5/14",  "canvas.height*4/14", "2000");
swatchCreate("swatch4_1", "#000",    "canvas.width*1.5/14",   "canvas.width*1/14",    "canvas.height*8/14", "2000");
swatchCreate("swatch4_2", "#ABABAB", "canvas.width*1/14",     "canvas.width*2.5/14", "canvas.height*8/14", "2000");
swatchCreate("swatch4_3", "#000",    "canvas.width*.5/14",    "canvas.width*3.5/14", "canvas.height*8/14", "2000");
swatchCreate("swatch5_1", "#000",    "canvas.width*1.5/14",   "canvas.width*5.5/14","canvas.height*8/14", "2000");
swatchCreate("swatch5_2", "#ABABAB", "canvas.width*1/14",     "canvas.width*7/14","canvas.height*8/14", "2000");
swatchCreate("swatch5_3", "#000",    "canvas.width*.5/14",    "canvas.width*8/14","canvas.height*8/14", "2000");
swatchCreate("swatch6_1", "#000",    "canvas.width*1.5/14",   "canvas.width*10/14","canvas.height*8/14", "2000");
swatchCreate("swatch6_2", "#ABABAB", "canvas.width*1/14",     "canvas.width*11.5/14", "canvas.height*8/14", "2000");
swatchCreate("swatch6_3", "#000",    "canvas.width*.5/14",    "canvas.width*12.5/14", "canvas.height*8/14","2000");
