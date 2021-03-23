"use strict";

const projectsNamesList = document.querySelector("ul.projects-names");
const projectsNames = document.querySelectorAll("ul.projects-names li");
const allProjectsArticles = document.querySelectorAll(
  "article.project-article"
);
const projectsNamesArrows = document.querySelectorAll(
  `ion-icon[name|="arrow"]`
);
// console.log(projectsNamesArrows);
projectsNamesList.addEventListener("click", function (e) {
  const projectName = e.target;
  const id = e.target.dataset.id;
  const nameArrow = document.querySelector(`.arrow-${id}`);
  //   console.log(nameArrow);
  const projectArticle = document.querySelector(
    `article#article-${id}.project-article`
  );
  /* GUARD CLAUSE */
  if (!projectArticle) return;
  //   const idArrow = document.querySelector()
  console.log(id);
  allProjectsArticles.forEach((art) => art.classList.remove("active-article"));
  projectArticle.classList.add("active-article");
  projectsNamesArrows.forEach((arr) => arr.classList.remove("active-arrow"));
  nameArrow.classList.add("active-arrow");
  projectsNames.forEach((item) => item.classList.remove("active-name"));
  projectName.classList.add("active-name");
  console.log(projectArticle);
});

const smoothLinks = document.querySelectorAll(".s-link");
console.log(smoothLinks);
smoothLinks.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth" });
    console.log(id);
  });
});

console.log("welcome");
