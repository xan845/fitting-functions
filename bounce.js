// 1. Calculating Bounce
function isBounce(prices, supportLevel) {
  let isBouncing = false;
  
  // Iterate through the prices to find if price action is bouncing
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] >= supportLevel && prices[i + 1] < supportLevel) {
      isBouncing = true;
      break;
    }
  }
  
  return isBouncing;
}

const prices = [100, 95, 97, 99, 100, 105];
const supportLevel = 100;
console.log(isBounce(prices, supportLevel));  // Output: true




// 2. Calculating Bounce & the lenght of Bounce
function bounceLength(prices, supportLevel) {
  let bounceLength = 0;
  let touchingSupport = false;
  
  // Iterate through the prices to find if price action is bouncing and calculate bounce length
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= supportLevel) {
      touchingSupport = true;
      bounceLength++;
    } else if (touchingSupport) {
      break;
    }
  }
  
  return bounceLength;
}

const prices = [100, 95, 97, 99, 100, 105];
const supportLevel = 100;
console.log(bounceLength(prices, supportLevel));  // Output: 2
