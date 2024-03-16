const section_landpage = document.getElementById("section_landpage");
const section_config = document.getElementById("section_config");
const button_restart = document.getElementById("button_restart");
const button_collapse_sidebar = document.getElementById("button_collapse_sidebar");
const menu_siderbar = document.getElementById("menu_siderbar");
const button_close_sidebar = document.getElementById("button_close_sidebar");

const configDisplayStyle = window.getComputedStyle(section_config).display;
const landpageDisplayStyle = window.getComputedStyle(section_landpage).display;
const menuSiderbarDisplayStyle = window.getComputedStyle(menu_siderbar).display;

// BUTTONS: start and pause
const button_start = document.getElementById("button_start");
const button_pause = document.getElementById("button_pause");


// COLLAPSE MENU and CLOSE
button_collapse_sidebar.addEventListener("click", function() {
    if (menu_siderbar.style.display == "" || menu_siderbar.style.display == "none") {
        menu_siderbar.style.display = "flex";
    }
});
button_close_sidebar.addEventListener("click", function() {
    if (menu_siderbar.style.display === "flex") {
        menu_siderbar.style.display = "none";
    }
});


// CHANGE DISPLAY: click configuration -> hide main page, show configs
document.getElementById("button_config").addEventListener("click", function() {

    if (landpageDisplayStyle === "flex") {
        section_landpage.style.display = "none";
        section_config.style.display = "flex";
    }
});

// CHANGE DISPLAY: click site title -> hide configs, show main page
document.getElementById("site_title").addEventListener("click", function() {

    if (section_landpage.style.display == "none") {
        section_landpage.style.display = "flex";
        section_config.style.display = "none";
    }
});


// OPTION RESTART: pop-up
button_restart.addEventListener("click", function() {

    console.log('POP-UP')
    // REQUIRE: create a pop-up if really want to restart
    // Message: WARNING: all the text will be cleaned!

    button_start.style.backgroundColor = "#000000";
    button_pause.style.backgroundColor = "#000000";
});


// BUTTONS: start and pause -> change colors
button_start.addEventListener("click", function() {

    button_start.style.backgroundColor = "#228b22";
    button_pause.style.backgroundColor = "#000000";
});

button_pause.addEventListener("click", function() {

    button_pause.style.backgroundColor = "#ff6347";
    button_start.style.backgroundColor = "#000000";
});