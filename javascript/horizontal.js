var thead = document.querySelector(".horizontal");
window.onscroll = function() {
    thead.style["-webkit-transform"] = "translateY(" + window.scrollY + "px)";
    thead.style.transform = "translateY(" + window.scrollY + "px)";
};