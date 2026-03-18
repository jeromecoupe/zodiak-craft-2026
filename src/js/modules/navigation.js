const body = document.querySelector("body");
const mobilemenu = document.querySelector(".js-mobilemenu");
const triggers = document.querySelectorAll(".js-menutrigger");

const classes = {
  open: "is-open",
  active: "has-menu",
};

const init = () => {
  triggers.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      mobilemenu.classList.toggle(classes.open);
      body.classList.toggle(classes.active);
    });
  });
};

export { init };
