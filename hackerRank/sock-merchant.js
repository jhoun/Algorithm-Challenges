// John works at a clothing store.He has a large pile of socks that he must pair by color for sale.Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
  let pairs = 0;
  ar.reduce((accum, currValue) => {
    if (accum.hasOwnProperty(currValue)) {
      accum[currValue] += 1;
    } else {
      accum[currValue] = 1;
    }
    if (accum[currValue] % 2 === 0) {
      pairs += 1;
    }
    return accum;
  }, {})
  return pairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])