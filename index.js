const inputContainer = document.querySelector(".inputs");

inputContainer.addEventListener("keyup", (e) => {
  if (e.key === "Backspace" || e.key === "Delete") {
    e.target.previousElementSibling?.focus();
  } else if (e.target.value != "" && !isNaN(Number(e.target.value))) {
    e.target?.nextElementSibling?.focus();
  }
});
