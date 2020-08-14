var mouseFlag = false;

export function LoadBtnEvents() {
    
    const cb = document.getElementById("chottobotto");
    const window = document.getElementById("window");
    const btn_bot = document.getElementById("btn_bot");

    OpenCloseWindow(window, btn_bot);
    DragElement(cb, btn_bot);
    DragElementTouch(cb, btn_bot, window);
}

function OpenCloseWindow(win, btn) {

    /* whenever bot is clicked */
    btn.addEventListener('click', () => {

        if (mouseFlag) { mouseFlag = false; return; };

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

    });

}

function DragElement(elmnt_div, elmnt_bot) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    elmnt_bot.onmousedown = dragMouseDown;

    function dragMouseDown(e) {

        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {

        // flag to disable btn.addeventlistener('click');
        mouseFlag = true;

        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt_div.style.top = (elmnt_div.offsetTop - pos2) + "px";
        elmnt_div.style.left = (elmnt_div.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

/**
 * Handles touch events and moves div accordingly
 * @param {Object} elmnt_div 
 * @param {Object} elmnt_bot 
 * @param {Object} win 
 */
function DragElementTouch(elmnt_div, elmnt_bot, win) {
    
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let holdStart, holdTime;

    elmnt_bot.addEventListener('touchstart', (e) => {

        holdStart = Date.now();

        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;

    });

    document.addEventListener('touchmove', (e) => {
        e.preventDefault();

        /* measures time  */
        holdTime = Date.now() - holdStart;
        console.log(holdTime);

        // When time > 1000, it moves.

        if (holdTime > 200) {

            elmnt_bot.style.fontSize = "1.2rem";

           // calculate the new cursor position:
            pos1 = pos3 - e.touches[0].clientX;
            pos2 = pos4 - e.touches[0].clientY;
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
            // set the element's new position:
            elmnt_div.style.top = (elmnt_div.offsetTop - pos2) + "px";
            elmnt_div.style.left = (elmnt_div.offsetLeft - pos1) + "px"; 
        }

        

    }, { passive: false });

    document.addEventListener('touchend', (e) => {
        e.preventDefault();
        elmnt_bot.style.fontSize = "0.9rem";
    }) ;
  
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
    last_title ? document.getElementById("title").innerText = last_title : void(0);
    
    for (let index = 0; index < all_text.length; index++) {
            
        all_text[index].style.display = "none";
    
        all_buttons[index].style.display = "initial";
            
    }
}

