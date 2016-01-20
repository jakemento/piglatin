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

var moveCons = function (word) {

  if (isCons(word)) {
    var string = word.slice(0,2);
    word = word.slice(2);
    return((word.concat(string))+("ay"));
  }
  if (isCons(word)) {
    var string = word.slice(0,3);
    word = word.slice(3);
    return((word.concat(string))+("ay"));
  }
  if (isCons(word)) {
    var string = word.slice(0,1);
    word = word.slice(1);
    return((word.concat(string))+("ay"));
  }
};

var addAy3 = function (word) {

  if (isCons(word)) {
    var string = word.slice(0,2);
    word = word.slice(2);
    return((word.concat(string))+("ay"));
  }

  if (isCons(word)) {
    var string = word.slice(0,3);
    word = word.slice(3);
    return((word.concat(string))+("ay"));
  }
};
