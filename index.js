let countHome = 0
let countGuest = 0

function addOneHome(){
    countHome++
    document.getElementById('score-home').textContent = countHome
}
function addTwoHome(){
    countHome+=2
    document.getElementById('score-home').textContent = countHome
}
function addThreeHome(){
    countHome+=3
    document.getElementById('score-home').textContent = countHome
}



function addOneGuest(){
    countGuest++
    document.getElementById('score-guest').textContent = countGuest
}
function addTwoGuest(){
    countGuest+=2
    document.getElementById('score-guest').textContent = countGuest
}
function addThreeGuest(){
    countGuest+=3
    document.getElementById('score-guest').textContent = countGuest
}