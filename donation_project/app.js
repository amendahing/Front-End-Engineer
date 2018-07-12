//Cache the DOM
const amountNeeded_p = document.querySelector('#amount-needed > p')
const slider_div = document.getElementById('slider')
let donateBtn = document.getElementById('donate-btn')
let moneyinput = document.getElementById('money-input')

let currentAmount = 500;
let donationAmount = 0;

function submitDonation(){
    var input = document.getElementById('money-input').value
    donationAmount = Number(input)
    let remainer = ((1000 - (currentAmount + donationAmount)))
    let totalAmount = currentAmount + donationAmount
    let percentage = (totalAmount/10).toString()
    amountNeeded_p.innerHTML = `$${remainer} still needed for this project`
    slider_div.style.width = `${percentage}%`
}

function sliderTransition(){


}
