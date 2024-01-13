function reverseString(shtring){
    if(!isNaN(shtring)){
        return 'Input is not a string';
    }
    else{
        return shtring.split('').reverse().join('');
    }
}

export default reverseString;