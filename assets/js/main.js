const sidebarToggle = document.getElementById("sidebarHide");
const sidebar = document.querySelector(".mh-left-sidebar");

if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
    });
}

document.querySelectorAll("#mhOpenComments").forEach(toggle => {
    toggle.addEventListener("click", function () {
        const newsItem = this.closest(".mh-news-item"); 
        const commentsOptions = newsItem.querySelector(".mh-news-item-comments");
        commentsOptions.classList.toggle("opened");
    });
});
