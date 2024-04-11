const button_collapse_sidebar = document.getElementById("button_collapse_sidebar");


// COLLAPSE MENU and CLOSE (with a click)
button_collapse_sidebar.addEventListener("click", function() {
    if (menu_siderbar.style.display == "" || menu_siderbar.style.display == "none") {
        menu_siderbar.style.display = "flex";

    } else {
        menu_siderbar.style.display = "none";
    }
});


// CLOSE COLLPSABLE MENU (require changes) ------ se der tempo
// window.onclick = function(event) {
//     if (!event.target.matches('.button_menu')) {
//         var menu = document.getElementById("menu_siderbar");
//         if (menu.style.display === "flex") {
//             menu.style.display = "none";
//         }
//     }
// }
















