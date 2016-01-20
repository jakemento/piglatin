
describe('isVowel', function(){
  it("determines a inputed word starts with a vowel", function(){
    expect(isVowel("apple")).to.equal(true)
  });
});


describe('isCons', function(){
  it("determines if a word starts with a consonant", function(){
    expect(isCons("dog")).to.equal(true)
  });
});

describe('addAy', function(){
  it("adds ay to words that start with a vowel", function(){
    expect(addAy("eagle")).to.equal("eagleay")
  });
});

describe('moveCons', function(){
  it("moves all of the first consecutive consonants to the end and adds ay to the new word", function(){
    expect(moveCons("bring")).to.equal("ingbray")
  });
});

describe('addAy3', function(){
  it("add cons and u to the end of a word", function(){
    expect(addAy3("quiet")).to.equal("ietquay")
  });
});

// describe('isCons', function(){
//   it("starts with a consonant", function(){
//     expect(isCons("bear")).to.equal("earbay")
//   });
// });
