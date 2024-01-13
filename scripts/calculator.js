const calculator = {
    add: function (a,b) {
        if(isNaN(a) && isNaN(b) || isNaN(a) || isNaN(b)){
            return 'Input is not a number'
        }
        else{
            return a + b;
        }
    },
    subtract: function(a,b) {
        if(isNaN(a) && isNaN(b) || isNaN(a) || isNaN(b)){
            return 'Input is not a number'
        }else{
            return a-b;
        }
    },
    multiply: function (a,b) {
        if(isNaN(a) && isNaN(b) || isNaN(a) || isNaN(b)){
            return 'Input is not a number'
        }else{
            return a * b;
        }
    },
    divide: function (a,b) {
        if(isNaN(a) && isNaN(b) || isNaN(a) || isNaN(b)){
            return 'Input is not a number'
        }
        else if(b === 0){
            return 'Cannot divide by zero'
        }
        else{
            return a / b;
        }
    },
}

export default calculator;