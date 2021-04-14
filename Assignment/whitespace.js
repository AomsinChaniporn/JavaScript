function WhiteSpace(string) {
    string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
   return string;
}

console.log(WhiteSpace("SheWalksToTheBeach")) ;
console.log(WhiteSpace("MarvinTalksTooMuch"));
console.log(WhiteSpace("TheGreatestUpsetInHistory"));