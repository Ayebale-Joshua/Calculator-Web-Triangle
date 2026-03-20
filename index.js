const displayLabel = document.getElementById('display-label')
let hasDecimal = false
let hasBeenComputed = false
let answer = 0


function numberPressed(number){
    if (hasBeenComputed){
        displayLabel.value = number
        
    }

    else{
        if (displayLabel.value === '0'){
            displayLabel.value = number
        }

        else{
            displayLabel.value += number
        }

    }

}


function operatorPressed(operator){
    displayLabel.value += operator
    hasDecimal = false

    

}

function computePressed(){
    let result
    try{
        result = eval(displayLabel.value)
        displayLabel.value = result
        answer = result
    }
    catch{
        displayLabel.value = 'Error'
    }
    hasDecimal = false
    hasBeenComputed = true
}

function answerPressed(){
    displayLabel.value = answer
}

function deletePressed(){
    let expression = displayLabel.value
    let deletedExpression = expression.slice(0,expression.length -1)
    if (deletedExpression.length === 0){
        displayLabel.value = 0
    }
    else{
        displayLabel.value = deletedExpression
    }

    let condition = deletedExpression.charAt(deletedExpression.length-1)
    if ( condition === '+' || condition === '-' || condition === '/' || condition ==='*'||condition ==="." ){
        hasDecimal = true
    }
    else{
        hasDecimal = false
    }



}

function clearPressed(){
    displayLabel.value = 0
    hasBeenComputed = false
    hasDecimal = false
    
}


function decimalPressed(decimal){
    if (!hasDecimal){
        displayLabel.value += '.'
        hasDecimal = true
    }
}


function exponentPressed(){
    try{
        let result = eval(Number(displayLabel.value)/100)
        displayLabel.value = result
    }
    catch{
        displayLabel.value = 'Error'
    }
    
}