class Chottobotto {

    constructor() {
        
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

        LoadBtnEvents();
        LoadWindowEvents();
    }

    /* Changes Window Title */
    ChangeTitle ( new_title ) {

        gv_title = new_title;
        document.getElementById("title").innerText = new_title;
    }

    /* Adds new option */
    AddOption(btn_text, area_text) {

        var btn_div = document.getElementById("btn_div");
        var btn = document.createElement("button");
        btn.innerHTML = btn_text;
        btn.className = "btn-botto";
        btn_div.appendChild(btn);

        var txt = document.createElement("p");
        txt.innerHTML = area_text;
        txt.style.display = "none";
        txt.className = "text-botto";
        btn_div.appendChild(txt);
    }

    SetBotElement() {

        /* Bot div */
        const chottobotto = document.getElementById("chottobotto");
    
        /*  New window Div */
        const bot_div = document.createElement("div");
        bot_div.id = "bot_div";
    
        const btn_bot = document.createElement("button");
        btn_bot.className = "btn-help";
        btn_bot.id = "btn_bot";
    
        bot_div.appendChild(btn_bot);
        chottobotto.appendChild(bot_div);
        
    }
    
    SetBotPosition(pos_bot, pos_right) {
    
        const bot = document.getElementById("chottobotto");
        bot.style.position = "fixed";
        pos_bot ? bot.style.bottom = pos_bot : bot.style.bottom = "20px";
        pos_right ? bot.style.right = pos_right :bot.style.right = "20px";
    
    }
    
    SetBotSize ( bot_height, bot_width ) {
    
        const bot = document.getElementById("chottobotto");
        const btn_bot = document.getElementById("btn_bot");
    
        bot_height ? btn_bot.style.minHeight = bot_height : btn_bot.style.minHeight = "100%";
        bot_width ? btn_bot.style.minWidth = bot_width : btn_bot.style.minWidth = "100%";
    
        /* Text center */
        bot.style.textAlign = "center";
        bot.style.verticalAlign = "middle";
    
        /* must have the same value as height */
        //bot_height ? bot.style.lineHeight = bot_height : bot.style.lineHeight = "50px";
        
    
    }
    
    SetBotHover() {
        var bot = document.getElementById("btn_bot")
        bot.style.cursor = "pointer";
    }
    
    SetBotAesthetic ( bg_color, shadow, border_radius ) {
    
        const btn_bot = document.getElementById("btn_bot");
    
        bg_color ? btn_bot.style.backgroundColor = bg_color : btn_bot.style.backgroundColor = "white";
        shadow ? btn_bot.style.boxShadow = shadow : btn_bot.style.boxShadow = "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)";
        border_radius ? btn_bot.style.borderRadius = border_radius : btn_bot.style.borderRadius = "1000px";
    
    }
    
    SetBotText ( text_content, text_color ) {
    
        const text = document.getElementById("btn_bot");
    
        text_content ? text.innerHTML = text_content : text.innerHTML = "Heleeeep";
        text_color ? text.style.color = text_color : text.style.color = "black";
    
        text.style.fontSize = "100%";
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
    
    SetWindowPosition(pos_right, pos_bottom) {
    
        const btn_height = document.getElementById("bot_div").offsetHeight;
        const btn_width = document.getElementById("bot_div").offsetWidth;
        
        const window = document.getElementById("window");
        window.style.position = "fixed";
    
        pos_right ? window.style.right = "calc(" + btn_width + "px + " + pos_right + "px)" : window.style.right = "calc(" + btn_width + "px + 20px)";
        pos_bottom ? window.style.bottom = "calc(" + btn_height + "px + " + pos_bottom + "px)" : window.style.bottom = "calc(" + btn_height + "px + 20px)";
    }
    
    SetWindowSize( max_width ) {
    
        const window = document.getElementById("window");
        window.style.minWidth = "200px";
    
        max_width ? window.style.maxWidth = max_width : window.style.maxWidth = "300px";
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
