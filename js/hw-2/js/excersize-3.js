const findLongestWord = function(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (let i = 1; i < words.length; i += 1) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }

  return longestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
