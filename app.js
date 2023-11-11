function myTestFunction() {
    const elem = document.getElementById("demo");
    elem.textContent = "Hello World!"
}

/*toggle between hiding and showing the dropdown content */
function dropDownMenuToggle() {
    var myDropdown = document.getElementById("mainMenuDropDown");
    if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
    }
    else if (!myDropdown.classList.contains('show')) {
        document.getElementById("mainMenuDropDown").classList.toggle('show');
    }
    
}
// 
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("mainMenuDropDown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
    else if (e.target.matches('.dropbtn')){
        myDropdown.classList.add('show');
    }
}

window.onresize = function resizeCheck(){
    const mq = window.matchMedia( "(min-width: 700px)" );
    if (mq.matches) {
        var myDropdown = document.getElementById("mainMenuDropDown");
        myDropdown.classList.remove('show');
        //    alert("window width >= 700px");
    }
}
