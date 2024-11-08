// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// // Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// // Sample Output:
// 1;


const countWordOccurrences = (sentence:string,word:string):number=>{


    const makeSentenceLowerCased = sentence.toLowerCase()
    const makeWordLowerCased = word.toLowerCase()

   const sentenceSplitted = makeSentenceLowerCased.split(" ")

   const removeSpecialCharacter = sentenceSplitted.map((item:string)=>item.replace(/[^a-zA-Z0-9 ]/g, ""))

   let count:number = 0

   for (let i=0;i<removeSpecialCharacter.length;i++){
       if(removeSpecialCharacter[i]===makeWordLowerCased){
           count = count+1
       }
   }

   return count


}

// const result = countWordOccurrences("I love typescript", "typescript");

// console.log(result)