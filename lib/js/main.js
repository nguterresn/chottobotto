import * as Events from './modules/event_bot_display.js'

export default class Chottobotto {
    
    constructor() {

        /* RESPONSIVENESS OF THE DIV */
        this.sm = window.matchMedia("screen and (max-width: 576px)");
        this.md = window.matchMedia("screen and (max-width: 768px)");
        this.lg = window.matchMedia("screen and (max-width: 992px)");
        this.xl = window.matchMedia("screen and (max-width: 1200px)");
        this.xxl = window.matchMedia("screen and (max-width: 1443px)")
        this.xxxl = window.matchMedia("screen and (max-width: 1900px)");
        
        /* btn initialize */
        this.SetBotElement();
        this.SetBotPosition();
        this.SetBotSize();
        this.SetBotHover();
        this.SetBotAesthetic();
        this.SetBotText();

        /* #window initialize  */
        this.SetWindowElement();
        this.SetWindowPosition(); 
        this.SetWindowSize(); 
        this.SetWindowHover();
        this.SetWindowAesthetics ();
        this.SetWindowElements();

        Events.LoadBtnEvents();

    }

    /* Changes Window Title */
    ChangeTitle ( new_title ) {
        document.getElementById("title").innerText = new_title;
    }

    /* Adds new option */
    AddOption( options ) {

        var btn_div = document.getElementById("btn_div");
        var btn = document.createElement("button");
        btn.innerHTML = options.btn_text;
        btn.className = "btn-botto";
        btn_div.appendChild(btn);

        var txt = document.createElement("p");
        txt.innerHTML = options.area_text;
        txt.style.display = "none";
        txt.className = "text-botto";
        btn_div.appendChild(txt);
    }

    SetBotElement() {

        /* Bot div */
        const chottobotto = document.getElementById("chottobotto");
        const btn_bot = document.createElement("button");
        btn_bot.className = "btn-help";
        btn_bot.id = "btn_bot";
    
        chottobotto.appendChild(btn_bot);
        
    }
    
    SetBotPosition(pos_bot, pos_right) {
    
        /* main div */
        const bot = document.getElementById("chottobotto");
        bot.style.position = "fixed";
        pos_bot ? bot.style.bottom = pos_bot : bot.style.bottom = "20px";
        pos_right ? bot.style.right = pos_right :bot.style.right = "20px";

        const btn_bot = document.getElementById("btn_bot");
        btn_bot.style.position = "absolute";
        btn_bot.style.bottom = "0px";
        btn_bot.style.right = "0px";
    
    }
    
    SetBotSize (bot_height, bot_width) {
    
        /* Main container responsive */
        const bot = document.getElementById("chottobotto");

        bot_width ? bot.style.width = bot_width :
        this.sm.matches ? bot.style.width = "70vw" : 
        this.md.matches ? bot.style.width = "40vw" :
        this.lg.matches ? bot.style.width = "35vw" :
        this.xl.matches ? bot.style.width = "27vw" : 
        this.xxl.matches ? bot.style.width = "20vw" : 
        this.xxxl.matches ? bot.style.width = "20vw" : bot.style.width = "15vw";

        bot_height ? bot.style.height = bot_height :
        this.sm.matches ? bot.style.height = "50vh" : 
        this.md.matches ? bot.style.height = "50vh" :
        this.lg.matches ? bot.style.height = "40vh" :
        this.xl.matches ? bot.style.height = "40vh" :
        this.xxl.matches ? bot.style.height = "40vh" : 
        this.xxxl.matches ? bot.style.height = "40vh" : bot.style.height = "40vh";
 
        const btn_bot = document.getElementById("btn_bot");
        btn_bot.style.width = "auto";
        btn_bot.style.height = "auto";

        /* Text center */
        bot.style.textAlign = "center";
        bot.style.verticalAlign = "middle";
    
    }
    
    SetBotHover( pointerType ) {
        var bot = document.getElementById("btn_bot");
        pointerType == "pointer" || pointerType == "auto" || pointerType == "move" || pointerType == "default" ? 
        bot.style.cursor = pointerType :
        bot.style.cursor = "pointer";
    }
    
    SetBotAesthetic ( bg_color, shadow, border_radius ) {
    
        const btn_bot = document.getElementById("btn_bot");
    
        bg_color ? btn_bot.style.backgroundColor = bg_color : btn_bot.style.backgroundColor = "white";
        shadow ? btn_bot.style.boxShadow = shadow : btn_bot.style.boxShadow = "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)";
        border_radius ? btn_bot.style.borderRadius = border_radius : btn_bot.style.borderRadius = "1000px";
    
    }
    
    SetBotText ( options ) {
    
        const text = document.getElementById("btn_bot");

        options ? text.innerHTML = options.text_content : text.innerHTML = "Help";
        options ? text.style.color = options.text_color : text.style.color = "black";
        
        text.style.fontSize = "0.9rem";
        text.style.fontFamily =  "Helvetica Neue";
        text.style.fontWeight = "bold";
        
    }

    SetWindowElement() {

        /* Bot button */
        const chottobotto = document.getElementById("chottobotto");
        /*  New window Div */
        var window = document.createElement("div");
        window.id = "window";
        chottobotto.appendChild(window);
    
    }
    
    SetWindowPosition(pos_left, pos_bottom) {
    
        const btn_height = document.getElementById("btn_bot").offsetHeight;
        
        const window = document.getElementById("window");
        window.style.position = "absolute";

        pos_left ? window.style.left = pos_left : window.style.left = "0px";
        pos_bottom ? window.style.bottom = "calc(" + btn_height + "px + " + pos_bottom + "px)" : window.style.bottom = "calc(" + btn_height + "px + 5px)";

    }
    
    SetWindowSize(min_width, max_width) {
    
        const window = document.getElementById("window");
        min_width ? window.style.minWidth = min_width + "%" : window.style.minWidth = "80%";
        max_width ? window.style.maxWidth = max_width + "%" : window.style.maxWidth = "80%";
    
    }
    
    SetWindowHover (  ) {
        const window = document.getElementById("window");
        window.style.cursor = "auto";
    }
    
    SetWindowAesthetics ( bg_color, shadow, border_radius  ) {
    
        var window = document.getElementById("window");
        
        bg_color ? window.style.backgroundColor = bg_color : window.style.backgroundColor = "white";
        shadow ? window.style.boxShadow = shadow : window.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
        border_radius ? window.style.borderRadius =  border_radius : window.style.borderRadius =  "15px";
    
        window.style.display = "none";
    
    }
    
    SetWindowElements (  ) {
    
        var window = document.getElementById("window");
        /* Title */
        var title = document.createElement("h4");
        title.style.fontFamily = "Helvetica Neue";
        title.id = "title";
        title.innerHTML = "How may I help you?";
        window.appendChild(title);
          
        /* Btn div */
        var btn_div = document.createElement("div");
        btn_div.style.height = "100%";
        btn_div.id = "btn_div";
        window.appendChild(btn_div);
    
        /* back button */
        var back_btn = document.createElement("button");
        back_btn.style.height = "100%";
        back_btn.innerHTML = "Back";
        back_btn.className = "btn-back";
        back_btn.id = "btn_back";
        back_btn.style.display = "none";
        window.appendChild(back_btn);
    
    }


    

}
