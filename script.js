let maxSpeed;
let fps;
const ABSOLUTE_MAX = 100;
const eelText = "Where do eels come from? ";
let index = 0;
let hue = 0;
let spanId = 0;


function addNextLetter(index) {
    if (index == eelText.length) {
        const choice = getRandomInt(15);
        if (choice == 14) {
            index = 0;
            document.getElementById(spanId).innerHTML += "<br>";

        } else {
            index = 0;
        }
    }
    if (index == 0) {
        maxSpeed = getRandomInt(ABSOLUTE_MAX);
        spanId++;
        document.getElementById("eels").innerHTML += `<a href="https://www.ted.com/talks/lucy_cooke_no_one_can_figure_out_how_eels_have_sex" id="${spanId}"
          style="color:hsla(${hue},100%, ${getRandomInt(50)+50}%, 0.8);"> </a>`;
        document.getElementById(spanId).style.marginLeft = `${getRandomInt(10)}rem`;
    }
    document.getElementById(spanId).innerHTML = `${document.getElementById(spanId).innerHTML}${eelText[index]}`;
    index++;
    hue += getRandomInt(50);
    fps = getRandomInt(maxSpeed);

    setTimeout(() => {
        addNextLetter(index);
    }, 1000 / fps);

}
addNextLetter(index);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}