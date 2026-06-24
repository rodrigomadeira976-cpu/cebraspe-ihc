const screens = [...document.querySelectorAll(".screen")];
const navButtons = [...document.querySelectorAll("[data-target]")];
const bottomButtons = [...document.querySelectorAll(".bottom-nav button")];

function showScreen(id) {
  const target = document.getElementById(id);
  if (!target) return;

  screens.forEach(screen => screen.classList.toggle("is-active", screen.id === id));

  const step = target.dataset.step;
  bottomButtons.forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.nav === step);
  });

  window.scrollTo({ top: 0, behavior: "instant" });
  history.replaceState(null, "", `#${id}`);
}

navButtons.forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.target));
});

window.addEventListener("load", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    showScreen(hash);
  } else {
    showScreen("home");
  }
});
