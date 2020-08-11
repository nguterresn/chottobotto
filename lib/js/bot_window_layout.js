window.addEventListener('load', (event) => {
    CreateWindow();
});

function CreateWindow() {

    /* Bot button */
    var chottobotto = document.getElementById("chottobotto");
    /*  New window Div */
    var window = document.createElement("div");
    window.id = "window";
    chottobotto.appendChild(window);
    
    /* Settings :) */
    SetWindowPosition( window ); 
    SetWindowSize( window ); 
    SetWindowHover( window );
    SetWindowAesthetics ( window );
    SetWindowElements( window );

}

function SetWindowPosition( param ) {
    
    param.style.position = "relative";
    param.style.right = "200px";
    param.style.bottom = "450px";

}

function SetWindowSize( param ) {
    
    param.style.minWidth = "200px";
    param.style.minHeight = "400px"
}

function SetWindowHover ( param ) {
    param.style.cursor = "auto";
}

function SetWindowAesthetics ( param ) {

    param.style.borderRadius =  "15px";
    param.style.backgroundColor = "white";
    param.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
    param.style.display = "none";

}

function SetWindowElements ( param ) {

    /* Title */
    var title = document.createElement("h4");
    title.style.fontFamily = "Helvetica Neue";
    title.id = "title";
    title.innerHTML = "How may I help you?";
    param.appendChild(title);
      
    /* Btn div */
    var btn_div = document.createElement("div");
    btn_div.style.height = "100%";
    btn_div.id = "btn_div";
    param.appendChild(btn_div);

    /* back button */
    var back_btn = document.createElement("button");
    back_btn.style.height = "100%";
    back_btn.innerHTML = "Back";
    back_btn.className = "btn-back";
    back_btn.id = "btn_back";
    back_btn.style.display = "none";
    param.appendChild(back_btn);

}