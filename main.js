
let hexColorValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let noOfColors = 5;


// generate columns -->>

function generateColorHolders (noOfColors) {

    let colors = document.getElementsByClassName('color');
    let colorsArray = [...colors];
    if  (colors.length > 0) {
        colorsArray.forEach((element) => {
          element.remove();  
        })
    }

    for (let i = 0; i < noOfColors; i++) {
        let colorDiv = document.createElement('div');
        let colorNameDiv = document.createElement('div');
        let colorNameP = document.createElement('p');
        let copyIconImg = document.createElement('img');
        
        colorDiv.className = "color";
        colorNameDiv.className = "colornameContainer";
        copyIconImg.className = "copyIcon";
        
        copyIconImg.src = "public/copy.png";
        
        colorNameDiv.append(colorNameP, copyIconImg);
        colorDiv.appendChild(colorNameDiv);
        
        document.getElementById('wrapper').appendChild(colorDiv);
    }
}

// add colors in columns -->>

function generatePallete () {
    
    let colors = document.getElementsByClassName('color');
    let colorsArray = [...colors];
    
    colorsArray.forEach((element) => {
        let colorValue = "#";
        
        for (let i = 0; i < 6; i++)
        colorValue += hexColorValues[Math.floor(Math.random() * hexColorValues.length)];
    
    element.firstElementChild.firstElementChild.innerHTML = `${colorValue}`;
    element.setAttribute("style", `background-color:${colorValue};`);
});
}


// initially add columns and add colors to columns -->>

generateColorHolders(noOfColors);
generatePallete();

// generate color button -->>

document.getElementById('generateBtn').addEventListener("click", () => {
    generateColorHolders(noOfColors);
    generatePallete();
});

// color name copy icon -->>

let copyIcons = document.getElementsByClassName('copyIcon');
let copyIconArray = [...copyIcons];
copyIconArray.forEach((element) => {
    element.addEventListener('click', (element) => {
        let color = element.target.parentElement.firstElementChild.innerText;
        navigator.clipboard.writeText(color);
    })
});


// change no of colors

let colorNoInput = document.getElementById('colorNo');
colorNoInput.value = noOfColors;

colorNoInput.addEventListener('change', (event) => {

    noOfColors = event.target.value;
})