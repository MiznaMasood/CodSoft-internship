function deleteChar(){
    var input = document.getElementById("inputFields")
    input.value = input.value.slice(0, -1)
}

function getValue(data){
    var input = document.getElementById("inputFields");
    input.value += data;
    console.log(data)
}


function clrAll(){
    var input = document.getElementById("inputFields")
    input.value = "";
}

function equalTo(){
    var input = document.getElementById("inputFields").value;
    var result = evaluateExpression(input);
    document.getElementById("inputFields").value = result;
}

function squre(){
    var input = document.getElementById("inputFields")
    input.value = input.value * input.value
}

function evaluateExpression(expression) {
    try {
        // Use eval() to evaluate the expression
        return eval(expression);
    } catch (error) {
        // Handle any errors (e.g., division by zero)
        console.error("Error evaluating expression:", error);
        return "Error";
    }
}
