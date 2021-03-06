let maxSpeed;
let fps;
const ABSOLUTE_MAX = 500;
const eelText = "Where do eels come from?";
let index = 0;
let hue = 0;

function addNextLetter(index) {
    if (index == eelText.length) {
        const choice = getRandomInt(15);
        if (choice > 13) {
            index = 0;
            document.getElementById("eels").innerHTML += "<br>";

        } else if (choice > 10) {
            index--;
        } else {
            index = 0;
        }
    }
    if (index == 0) {
        maxSpeed = getRandomInt(ABSOLUTE_MAX);

        const newSpan = document.createElement('span');
        newSpan.style.marginLeft = `${getRandomInt(10)}rem`;
        newSpan.style.color = `hsla(${hue},100%, ${getRandomInt(50)+50}%, 0.8)`;
        newSpan.style.fontSize = `${Math.random() * 2 +1}rem`;

        document.getElementById("eels").append(newSpan);

        // console.log(newSpan.offsetTop + newSpan.offsetHeight);
        // console.log(window.innerHeight);
        if (newSpan.offsetTop > window.innerHeight) {
            // var youtube = document.getElementById("youtube");
            // var newone = youtube.cloneNode(true);
            // youtube.parentNode.replaceChild(newone, youtube);
            // var ny = document.getElementById("new-yorker");
            // newone = ny.cloneNode(true);
            // ny.parentNode.replaceChild(newone, ny);
            document.getElementById("eels").innerHTML = "";
            addNextLetter(index);
            return;
        }

    }
    document.getElementById("eels").lastChild.innerHTML += eelText[index];
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