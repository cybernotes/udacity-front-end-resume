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
// var work = { 
// 	"position" : "Libary Page",
// 	"employer" : "Village of Valley Stream",
// 	"years" : "2012- Present",
// 	"location" : "Valley Stream, NY"
// }
// var schooling = 
//  {
// 	"school" : "York College CUNY",
// 	"degree" : "Bachelors of Science",
// 	"years" : "2011-2015",
// 	"location" : "Jamaica, NY",
// 	"major" : "Communication Technology"
// };

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);

// var formattedPosition = HTMLworkTitle.replace("%data%", bio.position);
// var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// var formattedWorkYears = HTMLworkDates.replace("%data%", work.years);
// var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);

// var formattedSchoolName = HTMLschoolName.replace("%data%", schooling.school);
// var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schooling.degree);
// var formattedSchoolDates = HTMLschoolDates.replace("%data%", schooling.years);
// var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schooling.location);
// var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schooling.major);


$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedBiopic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcome);

// $("#workExperience").append(formattedPosition);
// $("#workExperience").append(formattedEmployer);
// $("#workExperience").append(formattedWorkYears);
// $("#workExperience").append(formattedWorkLocation);
// $("#education").append(formattedSchoolName);
// $("#education").append(formattedSchoolDegree);
// $("#education").append(formattedSchoolDates);
// $("#education").append(formattedSchoolMajor);

var work =
{
"jobs":
[
{
"employer" : "Village of Valley Stream",
"title" : "Library Page",
"location" : "Valley Stream,NY",
"dates" : "May 2015 - Present",
"description" : "Maintaining Library, Teach 3D Printing Classes"
},
{
"employer" : "York College CUNY",
"title" : "College Assistant",
"location" : "Jamaica, NY",
"dates" : "August 2014 - May 2015",
"description" : "Ran the Makerspace"	
},
{
"employer" : "York College CUNY",
"title" : "Career Services Office Assistant",
"location" : "Jamaica, NY",
"dates" : "Feburary 2014 - June 2014",
"description" :"Helped Students and office personnel"

}
]
};
// var projects =
// {
// "projects" :
// [
// {
// "title" : "Design",
// "description" : "Data Visualisation @ D3.js",
// "dates" : "18th March"
// },
// {
// "title" : "Development",
// "description" : "AIML @ python",
// "dates" : "31st March"
// }
// ]
// };
var education =
{
"schools":
[
{
"name" : "Laguardia Community Colege",
"city" : "Laguardia, NY",
"degree" : "Udacity NanoDegree",
"majors" : ["TechImpact Front-End Web Development"],
"dates" : 2017,
"url" : "www.laguardia.edu/techhire-opencode/"
},
{
"name" : "York College CUNY",
"city" : "Jamaica, NY",
"degree" : "Bachelors of Science",
"majors": "Communications Technology",
"dates": 2015,
"url": "www.york.cuny.edu"
},
],
"onlineCourses":
{
"title" : "Front-End Web Development",
"school" : "Udacity",
"dates" : 2017,
"url" : "udacity.com"
}
};
// bio.name.replace(/</g,"&2");
// bio.name.replace(/>/g,"&1");

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

if (bio.skills.length>0)
{	$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%" , bio.skills[0]);
$("#skills").append(formattedSkill); 
var formattedSkill = HTMLskills.replace("%data%" , bio.skills[1]);
$("#skills").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%" , bio.skills[2]);
$("#skills").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%" , bio.skills[3]);
$("#skills").append(formattedSkill);
}

forEach (work.jobs)
{
$("#workExperience").append(HTMLworkStart);

var formattedEmployer =	HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle =	HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle =	formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);

var formattedDates	=	HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);

var formattedDescription	=	HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}

if (education.schools.length>0){
    $("#education").append(HTMLschoolStart);
    for(var i=0;i<education.schools.length;i++){

var formattedshoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
var formattedshoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
$(".education-entry:last").append(formattedshoolName+formattedshoolDegree);

var formattedshoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
$(".education-entry:last").append(formattedshoolDates);

var formattedshoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
$(".education-entry:last").append(formattedshoolLocation);

var formattedshoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
$(".education-entry:last").append(formattedshoolMajor);

};
};


if (education.onlineCourses.length>0){
    $("#education").append(HTMLonlineClasses);
    for(var i=0;i<education.onlineCourses.length;i++){

var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
$(".education-entry:last").append(formattedonlineTitle+formattedonlineSchool);

var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
$(".education-entry:last").append(formattedonlineDates);

var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
$(".education-entry:last").append(formattedonlineURL);

};
};