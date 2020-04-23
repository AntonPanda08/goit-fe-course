// const checkForSpam = function(message) {
//   const lowerCaseMessage = message.toLowerCase();
//   const stopWords =
//     lowerCaseMessage.includes('sale') || lowerCaseMessage.includes('spam');

//   return stopWords;
// };
// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

const checkForSpam = function(message) {
  const lowerCaseMessage = message.toLowerCase();
  let stopWords;
  if (
    (stopWords =
      lowerCaseMessage.includes('sale') || lowerCaseMessage.includes('spam'))
  ) {
    return stopWords;
  }

  return stopWords;
};
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
