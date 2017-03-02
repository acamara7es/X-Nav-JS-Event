colorText = document.getElementById('color');
colorText.value = "FFFFFF";
cambiar_color(colorText.value);
colorText.addEventListener('input', color_event);

function color_event(e) {
    var color = this.value;
    cambiar_color(color);
}

function cambiar_color(color) {
    if (color.length != 3 && color.length != 6) {
        console.log("VISIBLE");
        document.getElementById("warning").className = "visible";
    } else {
        console.log("invisible");
        document.getElementById("warning").className = "invisible";
        document.body.setAttribute("style", "background-color:#" + color);
        colorText.setAttribute("style", "background-color:#" + color);
    }
}
