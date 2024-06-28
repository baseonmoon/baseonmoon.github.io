var audio = new Audio('./victory.mp3');

function soundClick(data) {
    const on = document.getElementById("on");
    const off = document.getElementById("off");
    if (data == "off") {
        console.log("off pressed")
        on.style.display = "block";
        off.style.display = "none";
        audio.pause();
        return;
    }

    console.log("on pressed")
    audio.play();
    on.style.display = "none";
    off.style.display = "block";
}
function infoButton() {
    console.log("buttton clicked");
    const divinfo = document.getElementById("projectinfo");
    const down = document.getElementById("down");
    const up = document.getElementById("up");
    console.log(divinfo.style.display)
    if (divinfo.style.display == "" || divinfo.style.display == "none") { 
        console.log("inn");
        divinfo.style.display = "block"; 
        up.style.display = "block";
        down.style.display = "none";
    }
    else {
        console.log("inn2");
        divinfo.style.display = "none";
        up.style.display = "none";
        down.style.display = "block";
    }

}