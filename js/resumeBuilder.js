/*var awesomeThoughts = "I'm hareendra and I'm awesome";
var funThoughts = awesomeThoughts.replace("awesome","fun");
$("#main").append(funThoughts);*/
var bio = {
  "name" : "Hareendra Seneviratne",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "+94715249388",
    "email" : "hareendras@gmail.com",
    "github" : "github",
    "twitter" : "twitter",
    "location" : "Colombo"
  },
  "welcomeMessage" : "Welcome ",
  "pictureURL" : "#",

  "skills" : ["java","javascript","mongo"],
  "bioPic" : "#"


};
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

//var formattedContact = HTMLcontactGeneric.replace("%contact%",bio.contacts.mobile);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//$("#header").append(formattedContact);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
/*
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
*/

var work = {
  "workStart" : "2012-10-12",
  "workEmployer" : "Millenniumi Information Technologies",
  "workTitle" : "Implementation engineer",
  "workDates" : "",
  "workLocation" : "Colombo",
  "workDescription" : "implementing Finacle products"


};

/*
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
*/

var education = {
  "schoolStart"

};
