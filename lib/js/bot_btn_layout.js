window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    CreateBot();
});

function CreateBot () {

    var chottobotto = document.getElementById("chottobotto");

    SetBotPosition(chottobotto);
    SetBotSize(chottobotto);
    SetBotHover(chottobotto);
    SetBotAesthetic(chottobotto);
    SetBotText(chottobotto);

} 

function SetBotPosition( bot ) {

    /* Position of background div */
    bot.style.position = "fixed";
    bot.style.position = "-webkit-sticky";
    bot.style.bottom = "3%";
    bot.style.right = "3%";
}

function SetBotSize ( bot ) {

    var minHeight = "50px";

    /* Size */
    bot.style.minWidth = "50px";
    bot.style.maxWidth = "50px";
    bot.style.minHeight = minHeight;
    bot.style.maxHeight = "50px";

    /* Text center */
    bot.style.textAlign = "center";
    bot.style.verticalAlign = "middle";
    /* must have the same value as height */
    bot.style.lineHeight = minHeight;

}

function SetBotHover( bot ) {
    bot.style.cursor = "pointer";
}

function SetBotAesthetic ( bot ) {

    bot.style.backgroundColor = "#ecf0f1";
    bot.style.boxShadow = "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)";
    bot.style.borderRadius = "25px";
}

function SetBotText ( bot ) {

    var text = document.createElement("span");
    text.innerHTML = "Help";
    text.style.color = "black";
    text.style.fontSize = "1em";
    text.style.fontFamily =  "Helvetica Neue";
    text.style.fontWeight = "bold";
    text.id = "chottobotto_text";
    
    bot.appendChild(text);

}
