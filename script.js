const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

/*
//change h1 when you click :))
const myHeading = document.querySelector('h1');
myHeading.onclick = function() {
    myHeading.textContent = 'Hello there!'; 
};
*/



let  myFood = ["Pizza", "Pasta", "Tofu", "Chickpeas", "Lentil Soup"];
 
function randomItem (myFood) {
    return myFood[Math.floor(Math.random()*myFood.length)];
};

console.log(randomItem(myFood));


  

// stop poking the button
/*document.querySelector('button').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/


//personalized welcome message change it from using a button to ...?
/*
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi' + ' ' + myName + '! ' + 'Are you hungry?';

    };
};



if(!localStorage.getItem('name')) {
    setUserName();

} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi' + ' ' + storedName +  '! ' +'Are you hungry?';
};

myButton.onclick = function() {
    setUserName();
};
*/



