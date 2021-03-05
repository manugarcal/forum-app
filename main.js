
//Navbar
function hideIconBar() {
    let iconBar = document.querySelector("#iconBar");
    let navigation = document.querySelector("#navigation");
    iconBar.setAttribute("style", "display: none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    let iconBar = document.querySelector("#iconBar");
    let navigation = document.querySelector("#navigation");
    iconBar.setAttribute("style", "display: block;");
    navigation.classList.add("hide")
}