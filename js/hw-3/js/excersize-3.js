const findBestEmployee = function(employees) {
  const values = Object.values(employees);
  const keys = Object.keys(employees);
  let bestWork = values[0];
  let bestWorker = keys[0];
  for (let i = 0; i < values.length; i += 1) {
    if (bestWork < values[i]) {
      bestWork = values[i];
      if (bestWork) {
        bestWorker = keys[i];
        return bestWorker;
      }
    }
  }
  return bestWorker;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
