//Code challenge typescript solution:
// // “In the programming language of your choice,
// // write a program that parses a sentence and replaces
// // each word with the following: first letter, number of
// // distinct characters between first and last character,
// // and last letter. Words are separated by spaces or
// // non-alphabetic characters and these separators should
// // be maintained in their original form and location in
// // the answer. 
//This solution would be similar to a nodeJs solution

function wordReplacer(phrase: string): string {

    //Creates a list of words in the frases. Avoid repeated elements
    const words = new Set(phrase.split(/[^a-zA-Z]/g));
    
    //Reduce runs through the words 
    const newPhraseToReturn = Array.from(words).reduce((currentPhrase, word) => {
        if(word.length>2) {
            //Transform and replace word in phrase
            const innerCharacterSize = new Set(word.slice(1,-1)).size;
            const newWord = word[0] + innerCharacterSize + word.slice(-1);
            const wordToReplageRegx = new RegExp(word,'gi');
            console.log(wordToReplageRegx)
            return currentPhrase.replace(wordToReplageRegx, newWord);
        }
        return currentPhrase;
    },phrase
    );
    return newPhraseToReturn;
}

//Alternative
//This alternative function solves an issue with the first. 
//In an attempt to avoid having to replace every word each time
//I create a problem where any repeated word would be returned to the 
//new notation no matter the letter case. Only taking the first appearance

function wordReplacerV2(phrase: string): string {

    //Creates a list of words in the frases. Avoid repeated elements
    const words = phrase.split(/[^a-zA-Z]/g);
    
    //Reduce runs through the words 
    const newPhraseToReturn = words.reduce((currentPhrase, word) => {
        if(word.length>2) {
            //Transform and replace word in phrase
            const innerCharacterSize = new Set(word.slice(1,-1)).size;
            const newWord = word[0] + innerCharacterSize + word.slice(-1);
            return currentPhrase.replace(word, newWord);
        }
        return currentPhrase;
    },phrase
    );
    return newPhraseToReturn;
}