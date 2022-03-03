let arrayA = prompt("Please, enter the elements of the first array:"); 
let arrayB = prompt("Please, enter the elements of the second array:");
 
arrayA = arrayA.split(' '); 
arrayB = arrayB.split(' ');
 
let finalArray = [];
 
for (let i = 0; i < arrayA.length; i++) { 
finalArray[i] = arrayA[i]; 
} 
 
for (let i = 0; i < arrayB.length; i++) { 
finalArray[arrayA.length +  i] = arrayB[i]; 
}
 
alert(finalArray)



















/*var calculate = document.getElementById("calc");
const majuscule = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const minuscule = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var numarDeMajuscule = 0;
var numarDeMinuscule = 0;
calculate.addEventListener('click', () => {
    var text = document.getElementById('text').value
     for(let i = 0; i < text.length; i++ ){
        for(let j = 0; j < majuscule.length; j++){
            if (text[i] === majuscule[j]){
                numarDeMajuscule++;
            };
        }
        for(let k = 0; k < minuscule.length; k++){
            if (text[i] === minuscule[k]){
                numarDeMinuscule++;
            };
        };        
    };
    document.getElementById("majuscule").innerText = numarDeMajuscule;
    document.getElementById("minuscule").innerText = numarDeMinuscule;
});/*