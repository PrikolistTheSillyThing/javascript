const product_1_name        = "Tablet Space Y"
const product_1_price       = 1000
const product_1_diagonal    = 5.2
let   product_1_memory = +prompt("The memory of Space Y = ")
let   product_1_battery = +prompt("The battery of Space Y = ")

const product_2_name        = "Tablet Aero 11"
const product_2_price       = 900
const product_2_diagonal    = 4.9
let   product_2_memory = +prompt("The memory of Aero 11 = ")
let   product_2_battery = +prompt("The battery of Aero 11 = ")


let firstProdScreenBigger = product_2_diagonal < product_1_diagonal
let firstProductCheaper = product_1_price < product_2_price
let firstProductMoreMemory = product_2_memory < product_1_memory
let firstProductLessBattery = product_1_battery < product_2_battery

let screenCompareOut = "no"
let priceCompareOut = "no"
let memoryCompareOut = "no"
let batteryCompareOut = "no"



if ( firstProdScreenBigger ) {
    screenCompareOut = "yes"
}

if ( firstProductCheaper ) {
    priceCompareOut = "yes"
}

if ( firstProductMoreMemory ) {
    memoryCompareOut = "yes"
}

if ( firstProductLessBattery ) {
    batteryCompareOut = "yes"
}

result.innerHTML = "First tablet has bigger screen? <br>" + screenCompareOut + "<br>"  
result.innerHTML = result.innerHTML + "First tablet is cheaper? <br> \n" + priceCompareOut + "<br>"        
result.innerHTML = result.innerHTML + "First has more memory? <br> \n" + memoryCompareOut + "<br>"
result.innerHTML = result.innerHTML + "First tablet has less battery? <br> \n" + batteryCompareOut

