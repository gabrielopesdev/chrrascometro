// Carne - 400gr por pessoa (+6 horas - 650 gr por pessoa)
//Cerveja - 1200ml por pessoa(+6 horas 2000ml por pessoa)
// Refrigerante/agua - 1000ml por pessoa(+6 horas 1500ml) 
//crianças valem por 0,5

const inputAdult = document.querySelector('#adult-input')
const inputChildren = document.querySelector('#children-input')
const inputTime = document.querySelector('#time-input')

var result = document.querySelector('#result')

function calcular() {

    var elements = [inputAdult.value, inputChildren.value, inputTime.value]
    
    let totalMeat = 0
    let totalBear = 0
    let totalDrink = 0


    function meatPP(elements) {

        if (elements[2] >= 6) {

            return 650

        } else {

            return 400

        }
    }

    function drinkPP(elements) {

        if (elements[2] >= 6) {

            return 1500

        } else {

            return 1000
            
        }
    }

    function bearPP(elements) {

        if (elements[2] >= 6) {

            return 2000

        } else {

            return 1200
            
        }
    }

    totalMeat = meatPP(elements[0]) * elements[0] + (meatPP(elements[0]) / 2 * elements[1])
    totalDrink = drinkPP(elements[0]) * elements[0] + (drinkPP(elements[0]) / 2 * elements[1])
    totalBear = bearPP(elements[0]) * elements[0]

    result.innerHTML = `<p>${totalMeat / 1000} Kg de carne</p>`
    result.innerHTML += `<p>${Math.ceil(totalDrink / 2000)} garrafas de bebida</p>`
    result.innerHTML += `<p>${Math.ceil(totalBear / 355)} Latas de cerveja</p>`

}