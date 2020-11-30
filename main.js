let panels = document.getElementsByClassName("panel");

for (const panel of panels) {
  panel.addEventListener("click", function () {
    activatePanel(panel);
  });
}

function activatePanel(panel) {
  let title = panel.firstElementChild;
  let panelContent = panel.lastElementChild;
  title.classList.toggle("active");
  if (panelContent.style.maxHeight) {
    panelContent.style.maxHeight = null;
    panelContent.style.marginBottom = null;
  } else {
    panelContent.style.maxHeight = panelContent.scrollHeight + "px";
    panelContent.style.marginBottom = "1em";
  }
}
