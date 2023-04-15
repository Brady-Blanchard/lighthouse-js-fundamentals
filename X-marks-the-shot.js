const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let location = [0,0]
  for(const move of moves) {
    switch(move) {
    case "north":
      location[1] += 1;
      break;
    case "south":
      location[1] -= 1;
      break;
    case "east":
      location[0] += 1;
      break;
    case "west":
      location[0] -= 1;
    }
  }
  return location
}

console.log(finalPosition(moves));