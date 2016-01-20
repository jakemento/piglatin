var isVowel = function(word) {
  if (word[0].match(/[aeiou]/)) {
    return true;
  }
};

var isCons = function(word) {
  if (word[0] !=~ /[aeiou]/) {
    return true;
  }
}

var addAy = function (word) {
  if (isVowel(word)) {
    return (word.concat("ay"));
  }
};

// var isVowel = function(word){
//     return word;
// };
//
// // var isCons = function(word){
// //   if (word) {
// //     return "earbay";
// //   }
// // };
// //
//
// var vowels = ['a', 'e', 'i', 'o', 'u']
