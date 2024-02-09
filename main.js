
let hexColorValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let colors = document.getElementsByClassName('color');
let colorsArray = [...colors];
let generateBtn = document.getElementById('generateBtn');

let generatePallete = () => {
    colorsArray.forEach((element) => {
        let colorValue = "#";

        for (let i = 0; i < 6; i++)
            colorValue += hexColorValues[Math.floor(Math.random() * hexColorValues.length)];

        console.log(element.firstElementChild.innerHTML = `${colorValue}`);
        element.setAttribute("style", `background-color:${colorValue};`);
    });
}

generateBtn.addEventListener("click", () => {
    generatePallete();
});