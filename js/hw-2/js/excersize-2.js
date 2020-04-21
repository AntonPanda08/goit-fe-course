const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(' ');
  const wordsLength = message.split(' ').length;
  const result = message.split(' ').length * pricePerWord;
  console.log(result);
};

calculateEngravingPrice(
  'Proin sociis natoque et magnis parturient montes mus',
  10,
);
calculateEngravingPrice(
  'Proin sociis natoque et magnis parturient montes mus',
  20,
);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);
