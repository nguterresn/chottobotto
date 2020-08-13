export function LoadWindowEvents() {
    DisplayHelper();
}

function DisplayHelper() {

    /* Starts working */
    document.getElementById("btn_bot").addEventListener('click', function () { 

        var all_options = document.querySelectorAll("#btn_div button");
        
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

    const all_text = document.querySelectorAll("#btn_div p");
    all_text[index].style.display = "block";
}

function ResetBot() {

    let all_text = document.querySelectorAll("#btn_div p");
    let all_buttons = document.querySelectorAll("#btn_div button");
    
    document.getElementById("btn_back").style.display = "none";
    
    for (let index = 0; index < all_text.length; index++) {
            
        all_text[index].style.display = "none";
    
        all_buttons[index].style.display = "initial";
            
    }
}
