function range (start, end, step) {
  let array = []
  if(step > 0 && start <= end) {
    while(start <= end) {
      array.push(start);
      start += step;
    }
    return array;
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));