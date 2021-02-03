const colors = ["cyan", "yellow", "pink", "rgba(50,70,800)", "#E2CFFF", "#33FFD7", "red", "rgba(120,15,400)", "#FF5733", "orange", "#FCC370", "#70E3FC", "#FFD2F2", "#CFCFCF", "#000000"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get random number based on example array above
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}