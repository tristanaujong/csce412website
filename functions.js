function switchStyles() {
    const themeLink = document.getElementById("theme");
    const body = document.body;

    if (themeLink.getAttribute("href") == "styles.css") {
        themeLink.setAttribute("href", "styles1.css");
        body.classList.remove("theme-default");
        body.classList.add("theme-alt");
        localStorage.setItem("theme", "styles1.css");
    } else {
        themeLink.setAttribute("href", "styles.css");
        body.classList.remove("theme-alt");
        body.classList.add("theme-default");
        localStorage.setItem("theme", "styles.css");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const themeLink = document.getElementById("theme");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        themeLink.setAttribute("href", savedTheme);

        if (savedTheme == "styles.css") {
            document.body.classList.add("theme-default");
        }
        else {
            document.body.classList.add("theme-alt");
        }
    }
    else {
        document.body.classList.add("theme-default");
    }
});