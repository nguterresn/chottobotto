var gv_title;

function LoadWindowEvents() {
    
    DisplayHelper();

}

function DisplayHelper() {

    /* Starts working */
    document.getElementById("btn_bot").addEventListener('click', function () { 

        all_options = document.querySelectorAll("#btn_div button");
        
            for (let index = 0; index < all_options.length; index++) {
                
                all_options[index].addEventListener("click", function () {
                    
                    CreateArea(all_options, all_options.length, index);

                });
                
            }

            document.getElementById("btn_back").addEventListener('click', function () {
                ResetBot();
            });

    });
}

function CreateArea(options, len, index) {

    for (let i = 0; i < len; i++) {
        options[i].style.display = "none";
    }

    document.getElementById("title").innerText = options[index].textContent;
    document.getElementById("btn_back").style.display = "initial";

    all_text = document.querySelectorAll("#btn_div p");
    all_text[index].style.display = "block";
}

/* Writing animation */
var i = 0;
function typeWriter(txt, option, speed) {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }