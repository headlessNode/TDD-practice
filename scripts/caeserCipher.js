function caeserCipher(shtring, shift){
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','.',',',';',':','!','?'];
    let stringArray = shtring.toUpperCase().split("");
    let cipheredString = "";
    for(let i=0; i<stringArray.length; i++){
        let encrpIndex = letters.indexOf(stringArray[i]);
        if(encrpIndex !== -1){
            cipheredString += letters[(encrpIndex + shift) % letters.length];
        }else{
            cipheredString += stringArray[i];
        }
    }
    return cipheredString;
}

export default caeserCipher;