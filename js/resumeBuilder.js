var data = "%data%";
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
    "biopic": "images/kayla.png"
};




function displayBio() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedMobile);
    $("#header").append(formattedEmail);
    $("#header").append(formattedGithub);
    $("#header").append(formattedLocation);
    $("#header").append(formattedWelcome);
    $("#footerContacts").append(formattedName);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var sk = 0; sk < bio.skills.length; sk++) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[sk]);
            $("#skills").append(formattedSkill);
        }

    }

}
displayBio();
//End of bio



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

function displayWork() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedEmployereTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployereTitle);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();
//End of Work



var projects = {
    projects: [{
        "title": "Build a Portfolio Site",
        "dates": "July 2017",
        "description": "Created a mockup of a portfolio site",
        "images": "images/food1.jpg"
    }]
};
projects.display = function() {
    if (projects.projects.length > 0) {
        for (var p = 0; p < projects.projects.length; p++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[p].title).replace("#", projects.projects[p].url);
            var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[p].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[p].description);
            var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[p].images);
            $("project-entry:last").append(formattedProjectImage);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            // if (projects.images.length > 0) {
            //   for (var pIm = 0; pIm < projects.images.length; pIm++) {
            //
            //   }
            //
            // }

        }
    }
};
projects.display();
//End of projects



var education = {
    "schools": [{
            "name": "Laguardia Community Colege",
            "city": "Laguardia, NY",
            "degree": "Udacity NanoDegree",
            "majors": "TechImpact Front-End Web Development",
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
};



function displaySchool() {
    if (education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);
        for (var s = 0; s < education.schools.length; s++) {
            var formattedSchoolName = HTMLschoolName.replace(data, education.schools[s].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[s].degree);
            var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[s].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[s].city);
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[s].majors);
            $("#education ").append(formattedSchoolName);
            $("#education").append(formattedSchoolDegree);
            $("#education").append(formattedSchoolDates);
            $("#education").append(formattedSchoolMajor);

        }
    }
}

displaySchool();
//End of School

function displayOnlineSchool() {
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {

            var formattedonlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
            var formattedonlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
            $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);

            var formattedonlineDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedonlineDates);

            var formattedonlineURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedonlineURL);

        }
    }
}

displayOnlineSchool();
//End of online courses

$("#mapDiv").append(googleMap);