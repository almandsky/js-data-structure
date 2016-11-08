function generateArray(length) {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    array[i] = i + 1;
  }
  return array;
}

function shuffle(arrayInput) {
  const array = arrayInput.concat();
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter -= 1;

    // And swap the last element with it
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

const sortedArray = generateArray(10000);
const testArray1 = shuffle(sortedArray);
const testArray2 = shuffle(sortedArray);

module.exports = {
  sortedArray,
  testArray1,
  testArray2
};
