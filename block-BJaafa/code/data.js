let mainData = [
  {
    type: `string method`,
    name: "charAt()",
    parameter: "(index) defaults to 0 - (number data type)",
    return: "character at specific index in the string (string data type)",
    example: `let name = "Arya Stark";
    name.charAt(2); //"y"
    let sentance = "A quick brown fox jumped over a lazy dog";
    sentance(4); // "i"
    let houseName = "Starks";
    houseName.charAt(0); // "S"`,
    about: `"charAt" accepts a index (number data type) and return the character on that index in the string.`,
  },

  {
    type: `string method`,
    name: `toUpperCase()`,
    parameter: `it does not accepts any parameter.`,
    return: ` string converted to uppercase.`,
    example: `let name = "Arya Stark";
    name.toUpperCase(); //"ARYA STARK"

    let houseName = "Starks";
    houseName.toUpperCase(); // "STARKS"`,
    about: `"toUpperCase" accepts no prameter but returns string in upper case.`,
  },
  {
    type: `string method`,
    name: `toLowerCase()`,
    parameter: `it didnt accepts any parameter.`,
    return: `string in lower case.`,
    example: ` let name = "Arya Stark";
    name.toLowerCase(); //"arya stark"

    let houseName = "Starks";
    houseName.toLowerCase(); // "starks"`,
    about: `"toLowerCase" accepts no parameter but returns string in lower case.`,
  },
  {
    type: `string method`,
    name: `trim()`,
    parameter: `accepts no parameter.`,
    return: `string with removed white space from start and end.`,
    example: `let name = "   Arya Stark   ";
    name.trim(); //"Arya Stark"

    let houseName = "   Starks    ";
    houseName.trim(); // "Starks"`,
    about: `"trim" accepts no prameter but returns string with removed white spaces from start and end.`,
  },
  {
    type: `string method`,
    name: `trimEnd()`,
    parameter: `accepts no parameter.`,
    return: `string with removed white space from end.`,
    example: `let name = "   Arya Stark   ";
    name.trimEnd(); //"   Arya Stark"
  
    let houseName = "   Starks    ";
    houseName.trimEnd(); // "   Starks"`,
    about: `"trimEnd" accepts no prameter but returns string with removed white spaces from end.`,
  },
  {
    type: `string method`,
    name: `trimStart()`,
    parameter: `accepts no parameter.`,
    return: `string with removed white space from start.`,
    example: ` let name = "   Arya Stark   ";
    name.trimStart(); //"Arya Stark   "
  
    let houseName = "   Starks    ";
    houseName.trimStart(); // "Starks   "`,
    about: `"trimStart" accepts no prameter but returns string with removed white spaces from start.`,
  },
  {
    type: `string method`,
    name: `concat()`,
    parameter: `it accepts multiple strings to concat to given string.`,
    return: `String formed by concating given strings.`,
    example: `  let name = "Arya Stark";

    let houseName = "Starks";
    houseName.concat(" of house ", houseName); // "Arya Stark of house Starks"`,
    about: `"concat" accepts the number of strings and return the string formed by concating them to given string.`,
  },
  {
    type: `string method`,
    name: `endsWith`,
    parameter: `(searchString)-characters which is to be searchedat end of string.`,
    return: `true if characters are matched or false if not.`,
    example: ` let name = "Arya Stark";
    name.endsWith(a, 4); //"true"

    let houseName = "Starks";
    houseName.endsWith(s); // "true"`,
    about: `"endsWith" accepts searchStr and length and return true if matched and false if not matched.`,
  },
  {
    type: `string method`,
    name: `includes()`,
    parameter: `(searchString)-the string to be searched.(position)-default=0 position at which to begin search.`,
    return: `true if string is matched or false if not matched.`,
    example: `let name = "Arya Stark";
    name.includes("tar"); //"true"

    let houseName = "Starks";
    houseName.includes("ar", 2); // "true"`,
    about: `"includes" accepts 2 parameters out of which 1 is optional which will be matched with string and returns true and false.`,
  },
  {
    type: `string method`,
    name: `indexOf()`,
    parameter: `(given value) used to find index - (position:default=0)the position at which to start search`,
    return: `the index of requuired characters`,
    example: `let name = "Arya Stark";
    name.indexOf("ya"); //"2"

    let houseName = "Starks";
    houseName.indexOf("r", 2); // "3"`,
    about: ` "indexOf" accepts a value to find index of that value and optional 2nd parameter to start search for value. and return the index of required value.`,
  },
  {
    type: `string method`,
    name: `lastIndexOf()`,
    parameter: `(searchValue)the value to be searched for- (indexFrom:optional:default:infinity) the value is searched backword from provided index.`,
    return: `theindex of last occurance of value and -1 if not found`,
    example: `  let name = "Arya Stark";
    name.lastIndexOf("arya"); //"-1"

    let houseName = "Starks";
    houseName.lastIndexOf("a", 4); // "2"`,
    about: `"lastIndexOf" accepts the value to search for and return last occurance index of value in string.`,
  },
  {
    type: `string method`,
    name: `padEnd`,
    parameter: `(targetLength) the targeted length of string - (paddString:optional:default-" ")this is added at end od string if needed to achive max length.`,
    return: `the string with given length by adding chars in end.`,
    example: `let name = "Arya Stark";
    name.padEnd(12); //"Arya Stark   "
    "
    let houseName = "Starks";
    houseName.padEnd(10,"ab"); // "Starksababa"`,
    about: `"padEnd" accepts the targetted length of string and return the string of that length with extra char added in end.`,
  },
  {
    type: `string method`,
    name: `padStart()`,
    parameter: `(targetLength) the targeted length of string - (paddString:optional:default-" ")this is added at end od string if needed to achive max length.`,
    return: ` the string with given length by adding chars in start.`,
    example: `let name = "Arya Stark";
    name.padStart(12); //"   Arya Stark"
    "
    let houseName = "Starks";
    houseName.padStart(10,"ab"); // "ababaStarks"`,
    about: `"padStart" accepts the targetted length of string and return the string of that length with extra char added in start.`,
  },
];
