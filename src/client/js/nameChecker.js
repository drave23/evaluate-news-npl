function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]
    console.log("fdssssssalse");

    if(names.includes(inputText)) {
       return true;
    }
    console.log("false");
    return false;
}

export { checkForName }
