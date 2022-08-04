const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    

    let muh = "";

    for (let i=0; i < expr.length; i++ ) {
    
    muh += (expr.slice(i*10, ((i+1)*10))+ " ");
    
    muh = muh.replace("10", ".");
    muh = muh.replace("11", "-");
    }
    
    for (let b = 0; b < muh.length; b++) {
    
    muh = muh.replace("0", "");
    arr = muh.split(" ");
    arr = arr.splice('');
    modified = arr.filter(function(a) {return a !== ""});
    }
    let str = "";
    
    for (let j = 0; j < modified.length; j++) {
       
    str += MORSE_TABLE[modified[j]];
    str = str.replace("undefined", " ");
    
    }
    return str;
        } 


module.exports = {
    decode
}