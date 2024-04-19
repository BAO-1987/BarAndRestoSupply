const filterList = document?.querySelector(".filter__nav");
const filterButtons = filterList?.querySelectorAll(".btn--filter");
const conferences = document?.querySelectorAll(".filter__content--portfolio");
const conferencesAll = document?.querySelector(".filter__content"); // 
const isPortfolioPage = conferences.length > 0;

let conferenceIndex = 0;

conferences ?.forEach((conference) => {
  conference.style.viewTransitionName = `conf-${++conferenceIndex}`;
});

if (isPortfolioPage) {
  filterEvents("cafe");
  updateActiveButton(filterList.querySelector('[data-filter="cafe"]'));
} else if (conferencesAll) { 
  conferencesAll.removeAttribute("hidden"); 
}

filterButtons?.forEach((button) => {
  button.addEventListener("click", (e) => {
    let confCategory = e.target.getAttribute("data-filter");

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterEvents(confCategory);
    }

    document?.startViewTransition(() => {
      updateActiveButton(e.target);
      filterEvents(confCategory);
    });
  });
});

function updateActiveButton(newButton) {
  filterList.querySelector(".active").classList.remove("active");
  newButton.classList.add("active");
}

function filterEvents(filter) {
  conferences.forEach((conference) => {
    let eventCategory = conference.getAttribute("data-category");

    if (filter === "all" || filter === eventCategory) {
      conference.removeAttribute("hidden");
    } else {
      conference.setAttribute("hidden", "");
    }
  });
}
