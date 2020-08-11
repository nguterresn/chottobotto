window.addEventListener('load', (event) => {
    LoadBtnEvents();
});

function LoadBtnEvents() {
    
    var window = document.getElementById("window");
    var chottobotto_text = document.getElementById("chottobotto_text");

    OpenCloseWindow( window, chottobotto_text );
}

function OpenCloseWindow( win, btn ) {

    btn.addEventListener('click', function () {
        if (win.style.display === "none") {
            win.style.display = "block";
        }
        else {
            win.style.display = "none";
        }
    });
    

}