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

        const win_container = document.getElementById("win_container");
        const btn_option = document.createElement("button");
        btn_option.innerHTML = options.btn_text;
        btn_option.className = "btn-botto";
        win_container.appendChild(btn_option);

        var txt_option = document.createElement("p");
        txt_option.innerHTML = options.area_text;
        txt_option.className = "text-botto";
        txt_option.style.display = "none";
        win_container.appendChild(txt_option);
    }

    SetBotElement() {

        // Bot div window 
        const cb = document.getElementById("chottobotto");

        //Button
        const btn_bot = document.createElement("button");
        btn_bot.id = "btn_bot";
        cb.appendChild(btn_bot);
        
    }
    
    SetBotPosition(pos_bot, pos_right) {
    
        const cb = document.getElementById("chottobotto");

        pos_bot ? cb.style.bottom = pos_bot : cb.style.bottom = "20px";
        pos_right ? cb.style.right = pos_right : cb.style.right = "20px";
    
    }
    
    SetBotSize (bot_height, bot_width) {
    
        /* Main container responsive */
        const cb = document.getElementById("chottobotto");

        bot_width ? cb.style.width = bot_width :
        this.sm.matches ? cb.style.width = "70vw" : 
        this.md.matches ? cb.style.width = "40vw" :
        this.lg.matches ? cb.style.width = "35vw" :
        this.xl.matches ? cb.style.width = "27vw" : 
        this.xxl.matches ? cb.style.width = "20vw" : 
        this.xxxl.matches ? cb.style.width = "20vw" : cb.style.width = "15vw";

        bot_height ? cb.style.height = bot_height :
        this.sm.matches ? cb.style.height = "50vh" : 
        this.md.matches ? cb.style.height = "50vh" :
        this.lg.matches ? cb.style.height = "40vh" :
        this.xl.matches ? cb.style.height = "40vh" :
        this.xxl.matches ? cb.style.height = "40vh" : 
        this.xxxl.matches ? cb.style.height = "40vh" : cb.style.height = "40vh";
    
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
    
        const btn_bot = document.getElementById("btn_bot");

        options ? btn_bot.innerHTML = options.text_content : btn_bot.innerHTML = "Help";
        options ? btn_bot.style.color = options.text_color : btn_bot.style.color = "black";
        
    }

    SetWindowElement() {

        /* Bot button */
        const cb = document.getElementById("chottobotto");
        /*  New window Div */
        const window = document.createElement("div");
        window.id = "window";
        window.style.display = "none";
        cb.appendChild(window);
    
    }
    
    SetWindowPosition(pos_left, pos_bottom) {
    
        const btn_height = document.getElementById("btn_bot").offsetHeight;
        const window = document.getElementById("window");

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
    
    SetWindowAesthetics ( bg_color, shadow, border_radius ) {
    
        var window = document.getElementById("window");
        
        bg_color ? window.style.backgroundColor = bg_color : window.style.backgroundColor = "white";
        shadow ? window.style.boxShadow = shadow : window.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
        border_radius ? window.style.borderRadius =  border_radius : window.style.borderRadius =  "15px";
    
    }
    
    SetWindowElements (  ) {
    
        var window = document.getElementById("window");
        var title = document.createElement("h4");
        title.innerHTML = "How may I help you?";
        title.id = "title";
        window.appendChild(title);
          
        /* Btn div */
        var win_container = document.createElement("div");
        win_container.style.height = "100%";
        win_container.id = "win_container";
        window.appendChild(win_container);
    
        /* back button */
        var btn_back = document.createElement("button");
        btn_back.style.height = "100%";
        btn_back.innerHTML = "Back";
        btn_back.id = "btn_back";
        btn_back.style.display = "none";
        window.appendChild(btn_back);
    
    }
}
