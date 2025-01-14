function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will not be reached when a and b are undefined
  }
  return a + b;
}

console.log(foo(undefined, 1)); // NaN
console.log(foo(1, undefined)); // NaN
console.log(foo(undefined, undefined)); //NaN