window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    CreateBot();
});

function CreateBot () {

    var chottobotto = document.getElementById("chottobotto");

    SetBotPosition(chottobotto);
    SetBotSize(chottobotto);
    SetBotColor(chottobotto);
    SetBotText(chottobotto);

    /* Events */
    ClickBotEvent (chottobotto);

} 

function SetBotPosition( bot ) {

    /* Position of background div */
    bot.style.position = "absolute";
    bot.style.bottom = "30px";
    bot.style.right = "30px";
}

function SetBotSize ( bot ) {

    var minHeight = "50px";
    var minWidth = "50px";

    /* Size */
    bot.style.minWidth = "50px";
    bot.style.minHeight = minHeight;

    bot.style.borderRadius = "25px";

    /* Text center */
    bot.style.textAlign = "center";
    bot.style.verticalAlign = "middle";
    /* must have the same value as height */
    bot.style.lineHeight = minHeight;
}

function  SetBotColor ( bot ) {

    bot.style.backgroundColor = "black";
   // bot.style.color = "white";
}

function SetBotText ( bot ) {

    var text = document.createElement("span");
    text.innerHTML = "BOT";
    text.style.color = "white";
    text.style.fontSize = "1em";
    
    bot.appendChild(text);

}

function ClickBotEvent( bot ) {

    
}