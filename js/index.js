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

// Handle Message Form Submit

const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");

const messageForm = document.forms["leave_message"];

// Hiding the messages section  if there are no messages
if (messageList.children.length === 0) {
  messageSection.style.display = "none";
}

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Retrieving values from the form fields
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  console.log("Name:", userName);
  console.log("Email:", userEmail);
  console.log("Message:", userMessage);

  // Showing the messages section when a new message is added
  messageSection.style.display = "block";

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
        <a href="mailto:${userEmail}">${userName}</a>
        <span>: ${userMessage}</span> 
    `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();

    // Hiding messages section if there are no messages
    if (messageList.children.length === 0) {
      messageSection.style.display = "none";
    }
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  event.target.reset();
});
