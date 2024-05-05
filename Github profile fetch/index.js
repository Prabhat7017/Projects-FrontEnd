const url = "https://api.github.com/users/";
const root = document.documentElement.style;
const darkModeBtn = document.querySelector(".btn");
const modetext = document.querySelector("#mode-text");
const modeicon = document.querySelector("#modeicon");
const inputField = document.querySelector(".input");
const cross = document.querySelector(".cross");
const searchBtn = document.querySelector(".search-btn");
const errorMsg = document.querySelector(".error");
const userImg = document.querySelector(".user-img");
const user = document.querySelector(".name");
const username = document.querySelector(".username");
const joinedAt = document.querySelector(".createdAt");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const bio = document.querySelector(".bio");
const repo = document.querySelector("#repo");
const follower = document.querySelector("#follower");
const following = document.querySelector("#following");
const place = document.querySelector(".location");
const blog = document.querySelector(".blog");
const company = document.querySelector(".company");
const twitter = document.querySelector(".twitter");
let darkMode;

init();
function darkModeProperties() {
  root.setProperty("--lm-bg", "#141D2F");
  root.setProperty("--lm-bg-content", "#1E2A47");
  root.setProperty("--lm-text", "white");
  root.setProperty("--lm-text-alt", "white");
  root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
  modetext.innerText = "LIGHT";
  modeicon.src = "./assets/images/sun-icon.svg";
  root.setProperty("--lm-icon-bg", "brightness(1000%)");
  darkMode = true;
  console.log("darkmode changed to " + darkMode);
  localStorage.setItem("dark-mode", true);
  console.log("setting dark mode to false");
  console.log("setting dark mode to true");

}

//SWITCH TO LIGHT MODE - activateLightMode()
function lightModeProperties() {
  root.setProperty("--lm-bg", "#F6F8FF");
  root.setProperty("--lm-bg-content", "#FEFEFE");
  root.setProperty("--lm-text", "#4B6A9B");
  root.setProperty("--lm-text-alt", "#2B3442");
  root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
  modetext.innerText = "DARK";
  modeicon.src = "./assets/images/moon-icon.svg";
  root.setProperty("--lm-icon-bg", "brightness(100%)");
  darkMode = false;
  console.log("darkmode changed to " + darkMode);
  localStorage.setItem("dark-mode", false);
  console.log("setting dark mode to false");
}

function handleClick() {
  if (!darkMode) {
    darkModeProperties();
  } else {
    lightModeProperties();
  }
}
darkModeBtn.addEventListener("click", handleClick);

inputField.addEventListener("input", () => {
  if (inputField.value !== "") {
    cross.classList.add("active");
    cross.addEventListener("click", () => {
      inputField.value = "";
      cross.classList.remove("active");
      errorMsg.classList.remove("active");
    })
  } else {
    cross.classList.remove("active");
    errorMsg.classList.remove("active");
  }
});

function init() {
  github(url + "Prabhat7017");

  darkMode = false;

  const value = localStorage.getItem("dark-mode");
  if (value === null) {
    localStorage.setItem("dark-mode", darkmode);
    lightModeProperties();
  } else if (value == "true") {
    darkModeProperties();
  } else {
    lightModeProperties();
  }

}

async function github(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    render(data);
  }
  catch (err) {
    alert("OOPS Something went Wrong !");
  }
}

searchBtn.addEventListener("click", () => {
  github(url + inputField.value);
});

inputField.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (inputField.value)
      github(url + inputField.value);
  }
})

function render(data) {
  if (data.message === "Not Found") {

    errorMsg.classList.add("active");
    inputField.value = "";
    cross.classList.remove("active");
    inputField.addEventListener("input", () => {
      errorMsg.classList.remove("active");
    })
  } else {
    user.innerText = data.name;
    userImg.src = data.avatar_url;
    username.innerText = `@${data.login}`;
    let month = parseInt(data.created_at.substr(5, 2));
    month = months[month - 1];
    let day = data.created_at.substr(8, 2);
    let year = parseInt(data.created_at.substr(0, 4));
    joinedAt.innerText = `Joined ${day} ${month} ${year}`;
    username.href = data.html_url;
    bio.innerText = data.bio === null ? "This Profile has no bio" : data.bio;
    repo.innerText = data.public_repos;
    follower.innerText = data.followers;
    following.innerText = data.following;
    place.innerText = data.location === null ? "Not Available" : data.location;
    blog.innerText = data.blog === "" ? "Not Available" : data.blog;
    company.innerText = data.company === null ? "Not Available" : data.company;
    twitter.innerText = data.twitter_username === null ? "Not Available" : data.twitter_username;
    twitter.href = data.twitter_username === null ? "#" : "https://twitter.com/" + data.twitter_username;
    blog.href = data.blog === "" ? "#" : data.blog;

  }
}