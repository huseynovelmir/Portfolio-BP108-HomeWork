const button = document.querySelector(".darkLightMode");
const body = document.querySelector("body");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const mode = document.querySelector(".mode");
const from = document.querySelector(".form");
const input = document.querySelector("input");
const username = document.querySelector(".name");
const joindate = document.querySelector(".join");
const userUsername = document.querySelector(".username");
const userBio = document.querySelector(".userBio");
const userImg = document.querySelector(".userImg");
const repo = document.querySelector(".repo");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const local = document.querySelector(".local");
const twit = document.querySelector(".twit");
const site = document.querySelector(".site");
const organization = document.querySelector(".organization");
const icon = document.querySelector(".icon");

body.className = localStorage.getItem("mode");
mode.innerText = localStorage.getItem("title");
icon.classList = localStorage.getItem("icon");

button.addEventListener("click", () => {
  if (body.classList.contains("darkMode")) {
    localStorage.setItem("mode", "lightMode");
    localStorage.setItem("title", "DARK");
    localStorage.setItem("icon", "fa-regular fa-moon");
    body.className = localStorage.getItem("mode");
    mode.innerText = localStorage.getItem("title");
    icon.classList = localStorage.getItem("icon");
  } else {
    localStorage.setItem("mode", "darkMode");
    localStorage.setItem("title", "LIGHT");
    localStorage.setItem("icon", "fa-regular fa-sun");
    body.className = localStorage.getItem("mode");
    mode.innerText = localStorage.getItem("title");
    icon.classList = localStorage.getItem("icon");
  }
});

from.addEventListener("submit", (e) => {
  e.preventDefault();
  const users = async () => {
    const response = await fetch("https://api.github.com/users/" + input.value);
    const data = await response.json();
    let newdate = data.created_at;
    let date = new Date(newdate);

    function formatDate(date) {
      const options = { month: "short", day: "2-digit", year: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    }
    let formattedDate = formatDate(date);

    username.innerText = data.name;
    userUsername.innerText = `@${data.login}`;
    joindate.innerText = formattedDate;
    userBio.innerText = data.bio;
    userImg.src = data.avatar_url;
    repo.innerText = data.public_repos;
    followers.innerText = data.followers;
    following.innerText = data.following;
    local.innerText = data.location;

    if (data.location == null) {
      local.innerText = "Not Available";
      local.style.color = "#9a96a2";
    } else {
      local.innerText = data.location;
    }

    if (data.twitter_username == null) {
      twit.innerText = "Not Available";
      twit.style.color = "#9a96a2";
    } else {
      twit.innerText = data.twitter_username;
    }

    if (data.blog == "") {
      site.innerText = "Not Available";
      site.removeAttribute("href");
      site.style.color = "#9a96a2";
    } else {
      site.innerText = data.blog;
      site.value = data.blog;
    }

    if (data.company == null) {
      organization.innerText = "Not Available";
      organization.style.color = "#9a96a2";
    } else {
      organization.innerText = data.company;
    }
  };
  users();
});
