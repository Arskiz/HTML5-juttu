let avattu = false;
let Counter = 0;
let currentNumber = 0;
let oldPasswords = [];
//Tehtävä 7
function demoa(){
    document.getElementById("t6h1").className = 'muutos';
}

// NAVIGOINTI
function NavOpen(){
    
    if(!avattu)
    {
        avattu = true;
        NavMenu.style.display = "block";
    }
    else
    {
        avattu = false;
        NavMenu.style.display = "none";
    }
}

//Responsiivinen sivu
function MakePassword(){
    let resultText = document.getElementById("Result");
    let counter = document.getElementById("Counter");
    
    currentNumber = (generateRandomIntegerInRange(0, 1000000000, 3));
        resultText.textContent = "Tulos: " + currentNumber;
        oldPasswords.push(currentNumber);
        currentNumber = 0;
    Counter += 1;
    counter.textContent = "Salasanoja generoitu: " + Counter;


}

function generateRandomIntegerInRange(min, max, multiplier) {
    return Math.floor(Math.random() * (max - min + 1 * multiplier)) + min;
}

function showOldPasswords(){
    if(oldPasswords.length != 0){
        console.log("Vanhat Salasanat:")
        console.log(oldPasswords);
    }
    else
    {
        console.log("Et ole tehnyt yhtään vielä!")
    }
    
}