// Instructions: How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

// rot13("EBG13 rknzcyr.") == "ROT13 example.";
// rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str) {
  let result = '';
  for (let i=0; i<str.length; i++){
    if ((str.charCodeAt(i)>=65 && str.charCodeAt(i)<= 77) || (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=109)){
      result += String.fromCharCode(str.charCodeAt(i)+13);
    } else if ((str.charCodeAt(i)>=78 && str.charCodeAt(i)<= 90) || (str.charCodeAt(i)>=110 && str.charCodeAt(i)<=122)){
      result += String.fromCharCode(str.charCodeAt(i)-13);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

let code = 'EBG13 rknzcyr.';

rot13(code);