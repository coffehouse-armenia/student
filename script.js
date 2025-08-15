let abouts = document.getElementById("abouts")
let thesitecontinue = document.getElementById("thesitecontinue")
let about1 = document.getElementById("about1");
let about2 = document.getElementById("about2");
let about3 = document.getElementById("about3");

let count = 0;

// Media query to check for max width 600px
let mediaQuery = window.matchMedia("(max-width: 600px)");

if (mediaQuery.matches) {
    abouts.addEventListener('click', function () {
        if (count === 0) {
            about2.style.width = "100%";
            about3.style.width = "100%";

            about2.style.border = "0";
            about3.style.border = "0";

            about2.style.top = "150px";
            about3.style.top = "300px";

            thesitecontinue.style.top = "480px";
            count = 1;
        } else {
            count = 0;
            about2.style.width = "90%";
            about3.style.width = "80%";

            about2.style.border = "2px solid #4c4c4c";
            about3.style.border = "2px solid #4c4c4c";

            about2.style.top = "25px";
            about3.style.top = "45px";

            thesitecontinue.style.top = "220px";
        }
    });
}
