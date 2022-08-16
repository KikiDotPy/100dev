function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++){
    z.push(x * i);
  }

  return z;
}

const countBy = (x, n) =>
  [...Array(n)].map((_, idx) => ++idx * x);