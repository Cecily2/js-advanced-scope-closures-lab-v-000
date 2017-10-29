function produceDrivingRange(blockRange){
  return function(blockOne, blockTwo){
    blockOneNumber = blockOne.slice(0,-2)
    blockTwoNumber = blockTwo.slice(0,-2)
    distance = Math.abs(blockOneNumber - blockTwoNumber)
    if(distance < blockRange){
      return `within range by ${blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(cost){
    return cost * percent
  }
}