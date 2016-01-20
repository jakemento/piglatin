var isVowel = function(word) {
  if (word[0] =~ /[aeiou]/) {
    return true;
  }
};

var isCons = function(word) {
  if (word[0] !=~ /[aeiou]/) {
    return true;
  }
}



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
