# Type 'string' is not assignable to type 'number'
This bug demonstrates a common type error in TypeScript where a function expects a number array but receives a string array.  The solution shows how to properly type the function to accept both number and string arrays and how to handle the different types appropriately.

## Bug
The `combine` function in `bug.ts` is designed to concatenate two number arrays. However, if you pass string arrays, you'll encounter a type error because TypeScript strictly enforces type checking. 

## Solution
The solution in `bugSolution.ts` addresses this by using generics, allowing the `combine` function to accept arrays of any type. It also includes a check to verify that the input arrays contain only numbers or strings, handling both scenarios correctly. 