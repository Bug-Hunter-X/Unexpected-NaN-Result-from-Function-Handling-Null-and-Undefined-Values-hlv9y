# Unexpected NaN Result from Function Handling Null and Undefined Values

This code demonstrates a common JavaScript error where a function designed to handle `null` values does not correctly handle `undefined` values, leading to `NaN` results.

The `foo` function intends to return `null` if either `a` or `b` is `null`. However, it incorrectly assumes that `null` and `undefined` are treated identically with loose equality (==). When either `a` or `b` is `undefined`, the function attempts arithmetic, leading to `NaN`.

The solution involves explicitly checking for both `null` and `undefined` using strict equality (===) or using a more robust check, such as the following:

- Using `typeof` to check for `'undefined'` or `'object'` to handle both `null` and `undefined`
- Using optional chaining (?.) to handle cases where a property or variable might be undefined

This example highlights the importance of using strict equality and handling `undefined` and `null` values explicitly for correct function behavior.