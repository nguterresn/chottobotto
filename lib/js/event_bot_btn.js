window.addEventListener('load', (event) => {
    LoadBtnEvents();
});

function LoadBtnEvents() {
    
    var window = document.getElementById("window");
    var chottobotto_text = document.getElementById("chottobotto_text");

    OpenCloseWindow(window, chottobotto_text);
}

function OpenCloseWindow( win, btn ) {

    /* whenever bot is clicked */
    btn.addEventListener('click', function () {

        /* Display and Hide Window */
        if (win.style.display === "none") {
            win.style.display = "block"; 

            ResetBot();

        }
        else {
            win.style.display = "none";
        }

    });

}


function ResetBot() {

    all_text = document.querySelectorAll("#btn_div p");
    all_buttons = document.querySelectorAll("#btn_div button");

    document.getElementById("title").innerText = gv_title;
    document.getElementById("btn_back").style.display = "none";

    for (let index = 0; index < all_text.length; index++) {
        
        all_text[index].style.display = "none";

        all_buttons[index].style.display = "initial";
        
    }

}

