exports.required=(dataNonValidate, dataRequired)=>{
    let invalid = "";
    for(let dataR in dataRequired){
        if(typeof(dataNonValidate[dataR]) === "undefined" || dataNonValidate[dataR] === ""){
            invalid += dataR+", ";
        }
    }
    invalid += "is required";
    return invalid;
}