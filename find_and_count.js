// Try this if you are comfortable with linear search.

// int a[] = [13, 11, 13,4, 10, 9, 1];
// int x[] = [11, 13, 4, 17];
// Your program should print
// 11 is found 1 time
// 13 is found 2 times
// 4 is found 1 time
// 17 is NOT found

const y = [13, 11, 13, 4, 10, 9, 1];
const x = [11, 13, 4, 17];
const count = {};
for (let i = 0; i < y.length; i++) {
  if (count[y[i]] === undefined) {
    count[y[i]] = 1;
  } else {
    count[y[i]]++;
  }
}
for (let i = 0; i < x.length; i++) {
  if (count[x[i]] !== undefined) {
    console.log(`${x[i]} is found ${count[x[i]]} time`);
  } else {
    console.log(`${x[i]} NOT found`);
  }
}