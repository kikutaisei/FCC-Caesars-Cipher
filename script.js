function rot13(str) {
  
    // Object to store all the letters of the alphabet
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
    // Variable to convert and store the parameter string into an array
    let originalArray = str.split("");
  
    // Array to store the decoded letters
    let decodedArray = [];
    
    // For loop through all the letters of the string to decode and push into the decodedArray array
    for (let i = 0; i < originalArray.length; i++){
      if (/[\W_]+/g.test(originalArray[i])){
        decodedArray.push(originalArray[i])
      }else{
        let originalLetterPosition = alphabet.indexOf(originalArray[i]) + 1;
        if (originalLetterPosition > 13){
          let decodedLetterPosition = (originalLetterPosition + 13 - 26) - 1;
          let decodedLetter = alphabet[decodedLetterPosition];
          decodedArray.push(decodedLetter);
        }else{
          let decodedLetterPosition = (originalLetterPosition + 13) - 1;
          let decodedLetter = alphabet[decodedLetterPosition];
          decodedArray.push(decodedLetter);
        }
      }
    }
  
    // Variable to convert and store the decoded array into a string
    let decodedString = decodedArray.join("");
    return decodedString;
  }
  
  rot13("SERR PBQR PNZC");