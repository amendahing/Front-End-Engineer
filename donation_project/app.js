//Cache the DOM
const amountNeeded_p = document.querySelector('#amount-needed > p')
const slider_div = document.getElementById('slider')
const slider_p = document.querySelector('#slider > p')
let donateBtn = document.getElementById('donate-btn')
let moneyinput = document.getElementById('money-input')

let currentAmount = 300;
let donationAmount = 0;

function submitDonation(){
    var input = document.getElementById('money-input').value
    if (input <= 700) {
        donationAmount = Number(input)
        let remainer = ((1000 - (currentAmount + donationAmount)))
        let totalAmount = currentAmount + donationAmount
        let percentage = (totalAmount/10).toString()
        amountNeeded_p.innerHTML = `$${remainer} still needed for this project`
        slider_div.style.width = `${percentage}%`
        slider_p.innerHTML = `$${totalAmount} raised`
    }
    else {
        alert('Please only enter amount up to $500. However, we appreciate the generosity! <3 ')
    }

}
