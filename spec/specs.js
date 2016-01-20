
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

// describe('isCons', function(){
//   it("starts with a consonant", function(){
//     expect(isCons("bear")).to.equal("earbay")
//   });
// });
