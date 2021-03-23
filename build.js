////////////////////////////////THE CODE STARTS HERE///////////////////
//HEADING ANIMATIONS
setTimeout(() => {
  $(".main-heading-1").addClass("animate-heading-1");
  $(".main-heading-2").addClass("animate-heading-2");
  $(".main-heading-3").addClass("animate-heading-3");
}, 1000);

setTimeout(() => {
  $(".mainOfHeader-text").addClass("mainOfHeader-text-animate");
}, 1500);

setTimeout(() => {
  $(".mainOfHeader-btn").addClass("mainOfHeader-btn-animate");
}, 2000);

function controlSearchBar() {
  $(".browse-btn").hover(
    function () {
      $(".browse-input").addClass("browse-input-show");
    },
    function () {
      $(".browse-input").addClass("browse-input-show");
    }
  );
}
controlSearchBar();

$(document).on("keydown", function (e) {
  //   console.log(e.key);
  if (e.key === "Enter" && $(".browse-input").hasClass("browse-input-show")) {
    setTimeout(() => {
      $(".browse-input").removeClass("browse-input-show");
    }, 400);
    $(".browse-btn").off("mouseenter mouseleave");
    setTimeout(() => {
      controlSearchBar();
      $(".browse-btn").off(" mouseleave");
    }, 1000);
  }
});

$(".overlay").click(function () {
  $(".browse-input").removeClass("browse-input-show");
});

///PROJECTS SECTION ANIMATIONS & INTERACTIONS

//Initial State
$(`.projects__name-u-icon-1`).addClass("show-icon");
$(`.projects__name-u-1`).addClass("emphasize");
$(`.projects__details-u-1`).addClass("block");

const names = $(".projects__name-u");

for (let i = 0; i < names.length; i++) {
  names[i].addEventListener("click", function () {
    $(".projects__name-u-icon").removeClass("show-icon");
    $(`.projects__name-u-icon-${i + 1}`).addClass("show-icon");

    $(".projects__name-u").removeClass("emphasize");
    $(`.projects__name-u-${i + 1}`).addClass("emphasize");
    $(".projects__details-u").removeClass("block");
    $(`.projects__details-u-${i + 1}`).addClass("block");
  });
}

const allSections = $("section");
// console.log(sections);
const revSec = function (entries) {
  const [entry] = entries;
  console.log(entry);
};
const secObserver = new IntersectionObserver(revSec, {
  root: null,
  threshold: 0.2,
});
const s = $(".section-about");
// allSections.forEach((s) => secObserver.observe(s));

secObserver.observe(s);
