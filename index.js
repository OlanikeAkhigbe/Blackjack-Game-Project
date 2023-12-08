let homePoints = 0
let guestPoints = 0
let goalHome = document.getElementById("score_home")
let goalGuest = document.getElementById("score_guest")


function add1_home() {

 homePoints += 1
 goalHome.textContent = homePoints
 console.log("homePoints")
 
}

function add2_home() {
    homePoints += 2
    goalHome.textContent = homePoints
    console.log("homePoints") 
}

function add3_home() {
    homePoints += 3
    goalHome.textContent = homePoints
    console.log("homePoints")
}

function add1_guest() {
    guestPoints += 1
    goalGuest.textContent = guestPoints
    console.log("guestPoints")
}

function add2_guest() {
    guestPoints += 2
    goalGuest.textContent = guestPoints
    console.log("guestPoints")
}

function add3_guest() {
    guestPoints += 3
    goalGuest.textContent = guestPoints
    console.log("guestPoints") 
}