var loder = document.getElementById("preeloder");
window.addEventListener("load", function() {
    preloder.style.display = "none";
})

function showMenu() {
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.cross').classList.toggle('show');
    document.querySelector('.menu').classList.toggle('hide');
}