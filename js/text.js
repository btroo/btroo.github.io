var text = {
	helpGreeting: function(){
		var random = Math.floor((Math.random() * 3) + 1);
		console.log(random);
		switch(random){
			case 1:
				return "What's up?";
			case 2:
				return "Nice to meet you!"
			case 3:
				return "What it do?"
		}
	},
	help: function() {
		return this.helpGreeting() + "\n\n" 
		+ "Try one of the following commands:\n\n"
		+ "\tbrandon: a little about me\n\n" 
		+ "\twork: my work experience and positions i've held\n\n"
		+ "\tpositions: leadership stuff\n\n"
		+ "\tprojects: some projects\n\n"
		+ "\tfun: fun fact\n\n"
		+ "\tcontact: say hey\n"
	},
	notRight: "Oops, that's not a valid command... try '?'\n",
	brandon: "Stanford I like to code. I do a lot of JS and web dev. I do some NLP/ML research. \n"
					 + "I try to learn new stuff as much as possible. dancing is fun. I enjoy freestyling.\n" 
					 + "I pop and wave but try to incorporate other styles (i.e. bboy, turf, krump). \n"
					 + "I like to write too. Check out my <a href='http://blog.brandontruong.com'>blog</a>!\n"
					 + "Check out my work or projects for more info on tech stuff.\n",
	workObj: [
		{
			name: "Growth Hacker/Developer", 
			company: "Apptopia",
			url: "http://www.apptopia.com",
			time: "Summer 2014"
		},
		{
			name: "Full Stack Javascript Engineer",
			company: "AdmitHub",
			url: "http://www.admithub.com",
			time: "May 2014 -> Present"
		},
		{
			name: "Researcher",
			company: "UNT Dept. of Computer Science and Engineering",
			url: "http://www.cse.unt.edu/~ccaragea/research.html",
			time: "November 2013 -> Present"
		},
		{
			name: "CTO",
			company: "Rigg-r",
			url: "http://rigg-r.com"
		},
		{
			name: "Summer Web Developer",
			company: "Atomic Design & Consulting",
			url: "http://www.atomicdc.com",
			time: "Summer 2013"
		},
		{
			name: "Developer",
			company: "Signet Education",
			url: "https://signeteducation.com/",
			time: "Summer 2012"
		}
	],
	work: function(){
		var output = "My work exp:\n\n";
		this.workObj.forEach(function(item){
			output += ("\t" 
				+ item.name 
				+  " @ <a href='" 
				+ item.url
				+ "'>" 
				+ item.company 
				+ "</a>" 
				+ "\n\n");
		});

		return output;
	},
	positionsObj: [
	{
		position: "President",
		organization: "RESOLV",
		url: "http://resolv.club"
	},
	{
		position: "President (@ chs, tams)",
		organization: "DFC",
		url: "http://thedfcnetwork.com/"
	},
	{
		position: "Vice President",
		organization: "cso",
		url: "http://tamscompsci.com/"
	}
	],
	positions: function(){
		var output = "positions:\n\n";
		this.positionsObj.forEach(function(item){
			output += ("\t" 
				+ item.position 
				+  " of <a href='" 
				+ item.url
				+ "'>" 
				+ item.organization 
				+ "</a>" 
				+ "\n\n");
		});
		return output;
	},
	projObj: [
	{
		name: "Bayesian Classification of Tweets During Natural Disasters",
		url: "https://www.asis.org/asist2014/proceedings/submissions/posters/349poster.pdf"
		description: "I led an NLP/ML research project with Dr. Caragea at UNT."
	}
	{
		name: "EnergyPal",
		url: "https://play.google.com/store/apps/details?id=com.ionicframework.energypal312399",
		description: "Energy monitoring system. Won Grand Prize in Energy Vertical at NTx Apps Challenge."	
	},
	{
		name: "AdmitHub",
		url: "https://github.com/AndrewMagliozzi/Admit",
		description: "Get your college application reviewed by former admin officers"
	},
	{
		name: "Akin Programming Language",
		url: "https://github.com/btroo/Akin",
		description: "NLP based programming language"
	},
	{
		name: "RayRay",
		url: "https://github.com/btroo/rayray",
		description: "NLP tools for keyword identification (wip)"
	},
	{
		name: "Hexal",
		url: "http://brandontruong.us/hexal/",
		description: "Experimental color chooser"
	},
	{
		name: "Where's my car (20 over 20 hackathon)",
		url: "https://github.com/simplyianm/wheres-my-car",
		description: "Helps you find your car in a parking lot"
	},
	{
		name: "GitHub",
		url: "https://github.com/btroo",
		description: "Look at all my open source (some listed above)" 
	}
	], 		 
	projects: function(){
		var output = "some stuff I've worked on:\n\n";

		this.projObj.forEach(function(item){
			output += "\t"
			+ "<a href='"
			+ item.url
			+ "'>"
			+ item.name
			+ "</a>\n"
			+ "\t  "
			+ item.description
			+ "\n\n";
		});

		return output;
	},
	fun: function(){
	
		var facts = [
			"I have a fairly substantial music library.",
			"I love pho.",
			"I don't like sweets (sometimes in moderation it's okay).",
			"I'm a linux guy although I may make the move to mac life once I can get my hands on a mac",
			"I enjoy sitting in a cafe all day, writing or coding... with a black iced coffee, of course.",
			"I like shopping... but I am often found at the clearance rack for steals!",
			"I smile pretty much 100% of the time when i'm dancing. my friends knock me for it.",
			"C++ was my first programming language, but I barely remember anything regarding it now.",
			"A lot of my friends call me a bboy although I rarely bboy seriously.",
			"I have lived in Texas for my entire life. hopefully that'll change when college comes around."	,
			"I walk around my dorm in boxers even when it's cold."
		];

		var random = Math.floor((Math.random() * facts.length));
		return facts[random] + '\n';
	},
	contact: "say hey <a href='mailto:me@brandontruong.com'>here</a>\n"
}
