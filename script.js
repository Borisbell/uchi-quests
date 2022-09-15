const tabs = document.querySelectorAll(".my-tabs .tabs li");
const sections = document.querySelectorAll(".my-tabs .tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    removeActiveTab();
    addActiveTab(tab);
  });
})