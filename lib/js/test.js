import Chottobotto from './main.js'

window.addEventListener('load', () => {

    const cb = new Chottobotto();

    cb.ChangeTitle("What's the problem?");

    /*
    cb.SetBotText({
        text_content: "HELLLP",
        text_color: "black"
    });

    cb.SetBotHover("auto"); 
*/
    cb.AddOption({
       btn_text: "Prices",
       area_text: "Our prices are on the tab in the upper right corner. You can check them or send us an email."
    });

    cb.AddOption({
        btn_text: "Availability", 
        area_text: "Our company is open 24/7, we are some crazyyy f*ing dudes."
    });
    
});
