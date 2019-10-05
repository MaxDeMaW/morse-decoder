const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    // write your solution here
    var decodeText = String(expr);
    //1) get number of letters
    var lettersInExpression = String(expr).length / 10;
    var numberr = "";
    //receive empty string which will be final decrypt string 
    var str = "";
    //get symbol in number
    for (var i = 0; i < lettersInExpression; i++) {
        numberr = decodeText.substring(i * 10, i * 10 + 10);
        if (numberr == "**********") {
            str = str + " ";
        }
        else {
            str = str + DecryptNumber(numberr);
        }
    }
    return str;
}


function DecryptNumber(numberDecode) {
    //receive number without null (they are in begin)
    var numberWithoutNull = +numberDecode;
    //receive string without null (number to string)
    numberWithoutNull = String(numberWithoutNull);
    //receive empty string which will be final morze letter 
    var morzestr = "";
    //decrypte number to letter
    //split line to 2 symbols
    //receive morse value (each 2 symbols = 1 morse sign)
    for (var i = 0; i < 5; i++) {
        if (numberWithoutNull.substring(i * 2, i * 2 + 2) == "10") morzestr = morzestr + ".";
        if (numberWithoutNull.substring(i * 2, i * 2 + 2) == "11") morzestr = morzestr + "-";
    }
    //find a morse sign in MORSE_TABLE and get letter
    return MORSE_TABLE[morzestr];
}

module.exports = {
    decode
}