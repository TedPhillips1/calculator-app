const button = Array.from(document.getElementsByClassName("button"))
const prevOperand = document.querySelector(".previous-operand")
const currOperand = document.querySelector(".current-operand")

button.map( button => {
    button.addEventListener('click', determineInnerText)
})
   
function determineInnerText (event) {
    switch(event.target.innerText){
        case 'AC':
            currOperand.innerText = '';
            prevOperand.innerText = '';
            break;
        case 'DEL':
            currOperand.innerText = currOperand.innerText.slice(0, -1);
            break;
        case '=':
            currOperand.innerText = getResult(prevOperand.innerText+currOperand.innerText)
            prevOperand.innerText=''
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            addToPrevOperand()
        default:
            console.log(event.target.innerText)
            currOperand.innerText += event.target.innerText;
            break;
    }
}

export function addToPrevOperand(){
    prevOperand.innerText = prevOperand.innerText.concat("", currOperand.innerText)
    currOperand.innerText = ' '
}

export function getResult(string){
    let resultArray = string.split('')
    let calculationArray = resultArray.map((char)=>{
        switch (char) {
            case 'x':
                return '*';
            case '÷':
                return '/';
            case '^':
                return '**'
            default:
                return char;
        }
    })
    let result;
    try {
        result = eval(calculationArray.join(''))
    } catch(err){
        return "Invalid Syntax"
    }
    return result
}