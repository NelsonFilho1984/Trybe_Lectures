
const mainHeader = document.getElementById("header-container");
mainHeader.style.backgroundColor = "green";

const emergencyTask = document.getElementsByClassName("emergency-tasks");
emergencyTask[0].style.backgroundColor = "yellow";

const emergencyTaskHeader = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTaskHeader.length; index += 1) {
  emergencyTaskHeader[index].style.backgroundColor = "black";
}

const commentEmergencyTask = document.querySelectorAll(".emergency-tasks p");
for (let index = 0; index < commentEmergencyTask.length; index += 1) {
  commentEmergencyTask[index].style.paddingTop = "30px";
}

const noEmergencyTask = document.querySelector(".no-emergency-tasks");
noEmergencyTask.style.backgroundColor = "grey";

const noEmergencyTaskHeader = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTaskHeader.length; index += 1) {
  noEmergencyTaskHeader[index].style.backgroundColor = "red";
}

const commentNoEmergency = document.querySelectorAll(".no-emergency-tasks p");
for(let index = 0; index < commentNoEmergency.length; index += 1) {
  commentNoEmergency[index].style.color = "white";
  commentNoEmergency[index].style.paddingTop = "30px";
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(35, 37, 37)";
