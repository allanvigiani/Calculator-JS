function calculate(type, value){
    //type - Action or Value
    //value - Number or Operator
    if (type === 'action') {

        if (value === 'c') {
            //Clear display
            document.getElementById('result').value = '';

        } 

        if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.') {

            document.getElementById('result').value += value;

        }

        if (value === '='){

            var value_expression = eval(document.getElementById('result').value);
            document.getElementById('result').value = value_expression;

        }


    } else if (type === 'value'){

        document.getElementById('result').value += value;

    }

}