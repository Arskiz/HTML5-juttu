let avattu = false;

//Tehtävä 6
function demoa(){
    document.getElementById("t6h1").className = 'muutos';
}

// NAVIGOINTI
function NavOpen(){
    let Menu = document.getElementById("NavMenu");
    
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