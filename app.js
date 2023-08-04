
function getColor() {
    const randomColor = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomColor.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('colorCode').innerHTML = randomCode;
}


//event Call
document.getElementById('btn').addEventListener('click',
    getColor
)


//Initial Call
getColor();

