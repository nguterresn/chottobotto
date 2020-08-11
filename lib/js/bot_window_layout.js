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
    title.innerHTML = "How may I help you?";
    param.appendChild(title);
      

    /* First Option */
    var firstOption = document.createElement("div");
    firstOption.style.height = "100%";
    param.appendChild(firstOption);

    var firstOption_btn = document.createElement("button");
    firstOption_btn.innerHTML = "First option.";
    firstOption_btn.className = "btn-botto";
    firstOption.appendChild(firstOption_btn);

    var secondOption_btn = document.createElement("button");
    secondOption_btn.innerHTML = "Second option.";
    secondOption_btn.className = "btn-botto";
    firstOption.appendChild(secondOption_btn);

    var thirdOption_btn = document.createElement("button");
    thirdOption_btn.innerHTML = "Third option.";
    thirdOption_btn.className = "btn-botto";
    firstOption.appendChild(thirdOption_btn);

}