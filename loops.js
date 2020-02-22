function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
  return array
}
function whileLoop() {
  let i = 0
  while (i > 0) {
    console.log(i);
  }
}
function doWhileLoop(num) {
  let i = 0
  do {
    console.log("I run once regardless.")
    i++
  } while (i < num)
}
