function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null;
  }
  return a + b;
}

console.log(foo(undefined, 1)); // null
console.log(foo(1, undefined)); // null
console.log(foo(undefined, undefined)); // null

//More Robust Solution using typeof
function foo2(a,b){
  if(typeof a === 'undefined' || typeof b === 'undefined' || a === null || b === null){
    return null;
  }
  return a+b;
}
console.log(foo2(undefined,1)); // null
console.log(foo2(1,undefined)); // null
console.log(foo2(undefined, undefined)); // null