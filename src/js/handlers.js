const handlers = (() => {
  const toggleSidebar = () => {
    const nav = document.querySelector("nav");
    const toggle_btn = document.getElementById("toggle-btn");
    const content = document.getElementById("main-container");

    toggle_btn.onclick = function () {
      nav.classList.toggle("hide");
      content.classList.toggle("expand");
    };
  };

  return {
    toggleSidebar,
  };
})();
export default handlers;
