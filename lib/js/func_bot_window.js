class Chottobotto {

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
        btn.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
        btn_div.appendChild(btn);

        var txt = document.createElement("p");
        txt.innerHTML = area_text;
        txt.style.display = "none";
        txt.className = "text-botto";
        btn_div.appendChild(txt);
    }

}
