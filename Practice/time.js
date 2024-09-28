function calculateTime(n) {
  const startTime = Date.now();
  let sum = 0;
  for (i = 0; i < n; i++) {
    sum += i;
  }
  const endTime = Date.now();
  return (endTime - startTime) / 1000;
}
console.log("Time for sum from 1 to 100:", calculateTime(100));
console.log("Time for sum from 1 to 100:", calculateTime(100000));
console.log("Time for sum from 1 to 100:", calculateTime(1000000000));
