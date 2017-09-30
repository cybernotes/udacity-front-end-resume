/*
This is empty on purpose! Your code to build the resume will go here.
 */
//  var awesomeThoughts= "I am Kayla and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
//  console.log(awesomeThoughts);
//  console.log(funThoughts);

var bio = {
	"name": "Kayla Serpa",
	"role" : "Front-End Web Developer",
	"welcomeMessage" : "Welcome to My Resume",
	"contacts": { "email" : "kaylarserpa@gmail.com", 
	"linkedin " : "linkedin.com/kaylaserpa/",
	"github": "https://github.com/cybernotes",
	"location": "Valley Stream, NY",
	"mobile" : "555.555.5555"},
	"skills" : ["JavaScript", "HTML", "GitHub", "Adobe Premiere", "Microsoft Office"],
	"bioPic" : "images/kayla.png"
};
var work = {
	"position" : "Libary Page",
	"employer" : "Village of Valley Stream",
	"years" : "2012- Present",
	"location" : "Valley Stream, NY"
};

var schooling = {
	"school" : "York College CUNY",
	"degree" : "Bachelors of Science"
	"years" : "2011-2015"
	"location" : "Jamaica, NY"
	"major" : "Communication Technology"
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);

var formattedPosition = HTMLworkTitle.replace("%data%", bio.position);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkYears = HTMLworkDates.replace("%data%", work.years);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);

var formattedSchoolName = HTMLschoolName.replace("%data%", schooling.school);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schooling.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", schooling.years);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schooling.location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schooling.major);


$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedBiopic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcome);

$("#workExperience").append(formattedPosition);
$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedWorkYears);
$("#workExperience").append(formattedWorkLocation);
$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDegree);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolMajor);