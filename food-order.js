let foodNames = [ "Pizza", "Salad", "Soup" ]
let foodPrices = [ 100.00, 75.00,    50.00 ]

let menu = `
###############
MENU
###############

`

for (let i=0; i < foodNames.length; i++) {
    menu += `${i+1}. ${foodNames[i]}\n`
}

menu += `choose: `

let option = parseInt(prompt(menu)) - 1

let optionDescription = `
    You've chosen
    "${foodNames[option]}"
    1 portion - ${foodPrices[option]}
    how many do you want? :
`

let portions = parseInt(prompt(optionDescription))

let cost = foodPrices[option] * portions

let orderDescription = `
    Your order: 
    "${foodNames[option]}": ${portions} x ${foodPrices[option]} = ${cost}
`

alert(orderDescription)

let delivery = confirm("Do you need delivery?")

if (delivery) {
    let yesDelivery = "free delivery starts at 500" 
    alert(yesDelivery)
    if (cost >= 500) {
        let freeDelivery = "The delivery will be free for you!"
        alert(freeDelivery)
    } else {
        let paidForDelivery = `The delivery will cost you ${cost+50}`
        alert(paidForDelivery) 
    }
    
} 
 else {
    let noDelivery = "come pick up your food!"
    alert(noDelivery)
}

