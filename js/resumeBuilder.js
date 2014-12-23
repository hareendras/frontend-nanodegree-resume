/*var awesomeThoughts = "I'm hareendra and I'm awesome";
var funThoughts = awesomeThoughts.replace("awesome","fun");
$("#main").append(funThoughts);*/
var bio = {
  name : "Hareendra Seneviratne",
  role : "Web Developer",
  contact : "No 349 Dalupotha Negombo",
  pictureURL : "#",
  welcomeMessage : "Welcome ",
  skills : ["java","javascript","mongo"]

};
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%",bio.contact);
var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedwelcomeMessage);
$("#topContacts").append(formattedContact);
