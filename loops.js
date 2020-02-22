function forLoop(array) {
  for (let i = 0; i != 26; i++) {
    array.push(`I am ${i} strange loop${i < 2 ? '' : 's'}.`)
  }
  return array
}
