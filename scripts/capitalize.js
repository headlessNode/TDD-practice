function capitalize(shtring){
    if(!isNaN(shtring)){
        return 'Input is a number'
    }else{
        return shtring.substring(0, 1).toUpperCase() + shtring.substring(1);
    }
}

export default capitalize;