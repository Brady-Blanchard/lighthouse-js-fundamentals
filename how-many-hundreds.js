function howManyHundreds(num) {
  let hundred = 0;
  while (num > 99) {
    hundred += 1
    num -= 100  
  }
  return hundred
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);