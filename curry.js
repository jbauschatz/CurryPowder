
function $curry(fun) {
    // Partially apply the function with no parameters
    return $invokeCurried(fun, []);
}

function $invokeCurried(fun, partialArgs) {
    return function() {
        var passedArguments = [].slice.call(arguments); // Arguments supplied this invocation
        var totalArgs = partialArgs.concat(passedArguments); // Total arguments accumulated

        // If all arguments have been supplied, apply the function
        if (totalArgs.length >= fun.length) {
            return fun.apply(undefined, totalArgs);
        }

        // Partially apply the function with the new arguments
        return $invokeCurried(fun, totalArgs);
    };
}