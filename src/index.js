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
    var str = "";

    //get symbol in number
    for (var i = 0; i < lettersInExpression; i++) {
        numberr = decodeText.substring(i * 10, i * 10 + 10);
        if (numberr == "**********") {

            str = str + " ";
        }
        else {
            str = str + DecodeNumber(numberr);
        }
    }

    // numberr = decodeText.substring(0, 10);
    // str = str + DecodeNumber(numberr);
    
    // numberr = decodeText.substring(10, 20);
    // str = str + DecodeNumber(numberr);

    return str;
}

function DecodeNumber(numberDecode) {
    //строку перевести в число без первоначальных нулей
    var numberWithoutNull = +numberDecode;
    numberWithoutNull = String(numberWithoutNull);
    var morzestr = "";
    //число перевести в морзе
    //пройтись по числу, разбить на 2 символа
    //получить морзе значение буквы
    for (var i = 0; i < 5; i++) {

        if (numberWithoutNull.substring(i * 2, i * 2 + 2) == "10") morzestr = morzestr + ".";
        if (numberWithoutNull.substring(i * 2, i * 2 + 2) == "11") morzestr = morzestr + "-";
    }

    //найти значение морзе в объекте и получить букву

    return MORSE_TABLE[morzestr];
}

module.exports = {
    decode
}