const body = document.querySelector("body");
const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `@ ${thisYear} Dinar Ibragimov. All rights reserved.`;
footer.appendChild(copyright);

// Style for my footer

Object.assign(footer.style, {
  background: "black",
  color: "green",
  textAlign: "center",
  fontWeight: "bold",
});

// List of skills
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "GitHub",
  "Git",
  "Unix Shell",
  "TCP/IP",
  "PowerShell",
  "Network",
];

const skillsSection = document.querySelector("#skills");

// Using DOM selection to query the skillsSection to select the <ul> element I created.
const skillList = skillsSection.querySelector("ul");

// Loop to iterate over my 'skills' array - kind of look trough it

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillList.appendChild(skill);
}
