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

//REVEALING ITEMS 'ABOUT SECTION'
const aboutSection = document.querySelector("section.section-about");
const showAboutItems = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  const aboutSectionItems = aboutSection.querySelectorAll("div");
  aboutSectionItems.forEach((el, i) => {
    setTimeout(() => {
      el.classList.remove("small-Opaque");
    }, i * 50);
  });
  observer.unobserve();
};
const aboutSectionObserver = new IntersectionObserver(showAboutItems, {
  root: null,
  threshold: 0.8,
});
aboutSectionObserver.observe(aboutSection);

//REVEALING COMPANY SECTION ITEMS
const companySection = document.querySelector("section#company");
const companyStats = document.querySelectorAll("article.company__stats ul li");
const companyExplore = document.querySelector("article.company__explore");
const showCompanyStats = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  companyStats.forEach((el, i) => {
    setTimeout(() => {
      el.classList.remove("down-Opaque");
    }, i * 150);
    setTimeout(() => {
      companyExplore.classList.remove("small-Opaque");
    }, 1300);
  });
  observer.unobserve();
};
const companySectionObserver = new IntersectionObserver(showCompanyStats, {
  root: null,
  threshold: 0.5,
});
companySectionObserver.observe(companySection);

//REVEAL PROJECTS ITEMS
const projectsSection = document.querySelector("#projects");
const projectsItems = document.querySelectorAll("#projects > *");
const showProjectsItems = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  projectsItems.forEach((el, i) => {
    setTimeout(() => {
      el.classList.remove("down-Opaque-contact");
    }, i * 150);
  });
  observer.unobserve();
};
const projectsSectionObserver = new IntersectionObserver(showProjectsItems, {
  root: null,
  threshold: 0.8,
});
projectsSectionObserver.observe(projectsSection);

//REVEAL CONTACT SECTION
const contactSection = document.querySelector("#contact");
const contactItems = document.querySelectorAll("#contact figure,form");
const showContactSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  contactItems.forEach((el) => el.classList.remove("down-Opaque-contact"));
  observer.unobserve();
};
const contactSectionObserver = new IntersectionObserver(showContactSection, {
  root: null,
  threshold: 0.5,
});
contactSectionObserver.observe(contactSection);

//REVEAL FOOTER
const footer = document.querySelector("footer");
const footerItems = document.querySelectorAll("footer > *");
const showFooterSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  footerItems.forEach((el) => el.classList.remove("small-Opaque"));
  observer.unobserve();
};
const footerSectionObserver = new IntersectionObserver(showFooterSection, {
  root: null,
  threshold: 0.3,
});
footerSectionObserver.observe(footer);
