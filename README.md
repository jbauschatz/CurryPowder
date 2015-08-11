# CurryPowder
Curry Javascript functions to allow partial function application.

## Usage
Curry a function by calling $curry on it.

```
function multiply(a, b) {
    return a * b;
}

var multiplyBy5 = $curry(multiply)(5);
multiplyBy5(3); // 15
multiplyBy5(6); // 18
```

A curried function can be "partially applied", which means passing it fewer arguments than it requires.

Parameters can be supplied to this partial function any number at a time. This is especially handy with functions of several arguments.

```
function complicatedFunction(a, b, c, d) {
    return (a + b) / (c + d); // this is a completely arbitrary example
}

// Capture the parameters commonly used
var simplifiedFunction = $curry(complicatedFunction)(3, 4.5, 6);

// Subsequent calls only supply the last parameter
simplifiedFunction(5);
simplifiedFunction(6);
simplifiedFunction(7);
```
In this exmple the commonly used parameters are captured by partially applying the function, potentially clarifying the code.
