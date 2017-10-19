/*
This is empty on purpose! Your code to build the resume will go here.
 */
//  var awesomeThoughts= "I am Kayla and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
//  console.log(awesomeThoughts);
//  console.log(funThoughts);

var bio = {
  "name": "Kayla Serpa",
  "role": "Front-End Web Developer",
  "welcomeMessage": "Welcome to My Resume",
  "contacts": {
    "email": "kaylarserpa@gmail.com",
    "linkedin ": "linkedin.com/kaylaserpa/",
    "github": "https://github.com/cybernotes",
    "location": "Valley Stream, NY",
    "mobile": "555.555.5555"
  },
  "skills": ["JavaScript", "HTML", "GitHub", "Adobe Premiere", "Microsoft Office"],
  "bioPic": "images/kayla.png"
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
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
//var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);

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
//$("#header").append(formattedWelcome);

// $("#workExperience").append(formattedPosition);
// $("#workExperience").append(formattedEmployer);
// $("#workExperience").append(formattedWorkYears);
// $("#workExperience").append(formattedWorkLocation);
// $("#education").append(formattedSchoolName);
// $("#education").append(formattedSchoolDegree);
// $("#education").append(formattedSchoolDates);
// $("#education").append(formattedSchoolMajor);

var work = {
  "jobs": [{
      "employer": "Village of Valley Stream",
      "title": "Library Page",
      "location": "Valley Stream,NY",
      "dates": "May 2015 - Present",
      "description": "Maintaining Library, Teach 3D Printing Classes"
    },
    {
      "employer": "York College CUNY",
      "title": "College Assistant",
      "location": "Jamaica, NY",
      "dates": "August 2014 - May 2015",
      "description": "Ran the Makerspace"
    },
    {
      "employer": "York College CUNY",
      "title": "Career Services Office Assistant",
      "location": "Jamaica, NY",
      "dates": "Feburary 2014 - June 2014",
      "description": "Helped Students and office personnel"

    }
  ]
};
var projects = {
  projects: [{
    "title": "Build a Portfolio Site",
    "dates": "July 2017",
    "description": "Created a mockup of a portfolio site",
    //"images": ["", ""]
  }]
};
projects.display = function() {
  if (projects.projects.length > 0) {
    for (var i in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);




    }
  }
};
//projects.display = function() {
// for (i in projects.projects) {
//   $("#project").append(HTMLprojectStart);
//   var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
//   $("#project-entry").append(formattedTitle);
//   var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
//   $("#project-entry").append(formattedDates);
//   var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
//   $("#project-entry").append(formattedDescription);

// if (projects.projects[i].images.length > 0) {
//   for (image in projects.projects[i].images) {
//     var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
//     $("#project").append(formattedImage);
//   };
// };

// };
// };
//projects.display();
var education = {
  "schools": [{
      "name": "Laguardia Community Colege",
      "city": "Laguardia, NY",
      "degree": "Udacity NanoDegree",
      "majors": ["TechImpact Front-End Web Development"],
      "dates": 2017,
      "url": "www.laguardia.edu/techhire-opencode/"
    },
    {
      "name": "York College CUNY",
      "city": "Jamaica, NY",
      "degree": "Bachelors of Science",
      "majors": "Communications Technology",
      "dates": 2015,
      "url": "www.york.cuny.edu"
    },
  ],
  "onlineCourses": {
    "title": "Front-End Web Development",
    "school": "Udacity",
    "dates": 2017,
    "url": "udacity.com"
  }
}
projects.display();


function displaySchool() {
  if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $("#education ").append(formattedSchoolName);
      $("#education").append(formattedSchoolDegree);
      $("#education").append(formattedSchoolDates);
      $("#education").append(formattedSchoolMajor);

    }
  }
}

displaySchool();

//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//$("#header").append(formattedName);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

function displayWork() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployereTitle = formattedEmployer + formattedTitle;
    //formattedEmployerTitle is a concatenation串联 of formattedEmployer and formattedTitle
    $(".work-entry:last").append(formattedEmployereTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();




function displayOnlineSchool() {
  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {

      var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);

      var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      $(".education-entry:last").append(formattedonlineDates);

      var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
      $(".education-entry:last").append(formattedonlineURL);

    }
  }
}

displayOnlineSchool();

$("#mapDiv").append(googleMap);
// function inName(name) {
//   name = name.trim().split(" ");
//   console.log(name);
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//   return name[0] + " " + name[1];
// };
//
// $('#main').append(internationalizeButton);
