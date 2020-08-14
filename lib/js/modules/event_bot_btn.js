var mouseFlag = false;
var touchFlag = false;

export function LoadBtnEvents() {
    
    const cb = document.getElementById("chottobotto");
    const window = document.getElementById("window");
    const btn_bot = document.getElementById("btn_bot");

    OpenCloseWindow(window, btn_bot);
    DragElement(cb, btn_bot);
    DragElementTouch(cb, btn_bot);
}

function OpenCloseWindow( win, btn ) {

    /* whenever bot is clicked */
    btn.addEventListener('click', () => {

        if (mouseFlag) { mouseFlag = false; return; };
        //else if (touchFlag) { touchFlag = false; return;}

        /* Display and Hide Window */
        if (win.style.display === "none") {
            win.style.display = "block"; 

            //btn.classList.remove("animation-btn-reverse");
            //btn.classList.add("animation-btn");
            //win.classList.add("animation-window");

            ResetBot();

        }
        else {
            win.style.display = "none";

            //btn.classList.remove("animation-btn");
            //win.classList.remove("animation-window");

            //btn.classList.add("animation-btn-reverse");
            
        }

    });

    btn.addEventListener('touchstart', () => {

        //if (touchFlag) { mouseFlag = false; return; };

        /* Display and Hide Window */
        if (win.style.display === "none") {
            win.style.display = "block"; 

            //btn.classList.remove("animation-btn-reverse");
            //btn.classList.add("animation-btn");
            //win.classList.add("animation-window");

            ResetBot();

        }
        else {
            win.style.display = "none";

            //btn.classList.remove("animation-btn");
            //win.classList.remove("animation-window");

            //btn.classList.add("animation-btn-reverse");
            
        }

    })


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

function DragElementTouch(elmnt_div, elmnt_bot) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt_bot.addEventListener('touchstart', (e) => {
        e = e || window.event;
        //e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', (e) => {

        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        // set the element's new position:
        elmnt_div.style.top = (elmnt_div.offsetTop - pos2) + "px";
        elmnt_div.style.left = (elmnt_div.offsetLeft - pos1) + "px";

    }, { passive: false });

    document.addEventListener('touchend', (e) => {

    }) ;
  
}

function ResetBot() {

    let all_text = document.querySelectorAll("#btn_div p");
    let all_buttons = document.querySelectorAll("#btn_div button");
    
    document.getElementById("btn_back").style.display = "none";
    
    for (let index = 0; index < all_text.length; index++) {
            
        all_text[index].style.display = "none";
    
        all_buttons[index].style.display = "initial";
            
    }
}

