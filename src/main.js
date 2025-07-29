import "./style.css";

const buttons = document.querySelectorAll("button[data-id]");
const tabs = document.querySelectorAll("[data-tab-id]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");

    // Сброс всех кнопок
    buttons.forEach((btn) => btn.setAttribute("data-active", "false"));

    // Активируем нажатую
    button.setAttribute("data-active", "true");

    // Сброс всех табов
    tabs.forEach((tab) => tab.setAttribute("data-active", "false"));

    // Показ нужного таба
    const targetTab = document.querySelector(`[data-tab-id="${id}"]`);
    if (targetTab) {
      targetTab.setAttribute("data-active", "true");
    }
  });
});
