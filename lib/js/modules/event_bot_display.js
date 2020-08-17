export function LoadBtnEvents() {
    
    const cb = document.getElementById("chottobotto");
    const window = document.getElementById("window");
    const btn_bot = document.getElementById("btn_bot");

    EventsElement(cb, btn_bot, window);
}

function OpenCloseWindow(win) {

    /* Display and Hide Window */
    if (win.style.display === "none") {
        win.style.display = "block"; 
        ResetBot();
    }
    else {
        win.style.display = "none";
    }

    const all_options = document.querySelectorAll("#btn_div button");
    const title = document.getElementById("title").innerText;
        
    /* Creats event 'click' for every button (Option) */
    for (let i = 0; i < all_options.length; i++) {
                
            all_options[i].addEventListener("click", () => {
                CreateArea(all_options, all_options.length, i);
            });
                
    }

    document.getElementById("btn_back").addEventListener('click', () => {
        ResetBot(title);
    });

}

function CreateArea(options, len, index) {

    for (let i = 0; i < len; i++) {
        options[i].style.display = "none";
    }

    document.getElementById("title").innerText = options[index].textContent;
    document.getElementById("btn_back").style.display = "initial";

    const all_text = document.querySelectorAll("#btn_div p");
    all_text[index].style.display = "block";
}

function ResetBot(last_title) {

    let all_text = document.querySelectorAll("#btn_div p");
    let all_buttons = document.querySelectorAll("#btn_div button");

    document.getElementById("btn_back").style.display = "none";
    if (last_title) document.getElementById("title").innerText = last_title;
    
    for (let index = 0; index < all_text.length; index++) {
            
        all_text[index].style.display = "none";
        all_buttons[index].style.display = "initial";
            
    }
}

// The preventDefault() method cancels the event if it is cancelable!
function EventsElement(elmnt_div, elmnt_bot, elmnt_window) {

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let holdStart, holdTime;

    elmnt_bot.addEventListener('pointerdown', PointerDown, false);
    elmnt_bot.ondragstart = () => false; //just in case pointercancel fires

    elmnt_bot.addEventListener('pointerout', () => { console.log("pointerout"); });
    elmnt_bot.addEventListener('pointerleave', () => { console.log("pointerleave"); });

    function PointerDown(e) {

        if (e.isPrimary) {

            // After a short period of time, the 
            // (mobile) browser will claim the pointermove event for "native" 
            // behavior like panning the page.
            // The designed, simple solution is to use the css property touch-action 
            // and set it to none on the container that has the event handler.

            e = e || window.event;
            e.preventDefault();

            holdStart = Date.now();
    
            // get the mouse cursor position at startup
            pos3 = e.clientX;
            pos4 = e.clientY;

            //Designates a specific element as the capture target of future pointer events.
            elmnt_bot.setPointerCapture(e.pointerId);
            // call a function whenever the cursor moves:
            elmnt_bot.addEventListener('pointermove', PointerMove, false);
            elmnt_bot.addEventListener('pointerup', PointerUp, false);
            //elmnt_bot.addEventListener('pointerout', PointerUp, false);

        }
    }

    function PointerMove(e) {

        e = e || window.event;
        e.preventDefault();

        console.log("dragging...");

        holdTime = Date.now() - holdStart;

        elmnt_bot.style.fontSize = "1.2rem";
        
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt_div.style.top = (elmnt_div.offsetTop - pos2) + "px";
        elmnt_div.style.left = (elmnt_div.offsetLeft - pos1) + "px";
    }

    function PointerUp(e) {
        
        // if pointermove was not triggered, then window is staying the same
        holdTime > 100 ? holdTime = 0 : OpenCloseWindow(elmnt_window);

        elmnt_bot.removeEventListener('pointermove', PointerMove, false);
        elmnt_bot.removeEventListener('pointerup', PointerUp, false);

        elmnt_bot.style.fontSize = "0.9rem";
    }
}
