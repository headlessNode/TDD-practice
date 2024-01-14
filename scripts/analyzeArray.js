function analyzeArray(numbers){
    let total = 0;
    let min = numbers[0];
    let max = numbers[0];
    let length = numbers.length;
    for(let i = 0; i<numbers.length; i++){
        total += numbers[i];
        if(numbers[i] > max){
            max = numbers[i];
        }
        if(numbers[i] < min){
            min = numbers[i];
        }
    }
    let average = (total/numbers.length);
    return {average, min, max, length};
}

export default analyzeArray;