1. Line 9 prints "values added: 20". 
2. Line 13 prints "final result: 20".
3. Line 9 prints "values added: 20".
4. Line 13 will returns an error that says result is not defined. Because `let` keyword only defines the scope of the variable to be within the `if` condition and it is not accessable outside `if`.
5. Line 9 prints "values added: 0".
6. An error gets returned. Line 7 will give an error that says can't reassign the constant. Line 9 will not even execute.
7. An error gets returned. Line 7 will give an error that says can't reassign the constant. Line 13 will not even execute. Also, Line 13 is out of the scope of `const` range.