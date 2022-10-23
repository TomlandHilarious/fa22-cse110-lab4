1. Line 12 will print "3". This is because `prices.length` in this example is 3 so i will increment 3 times and `var i = 0` sets the variable to have the function scope.
2. Line 13 will print "150". Because in the last iteration, `discountedPrice` will have 1/2 of 300 based on the input liist which is 150. Also the `var` initialization defines it to have the function scope.
3. Line 14 will print "150". Because in the last iteration, `finalPrice` will be updated based on `discountedPrice` (150 as 2 shows), which will still be 150 and `var` defines it to have the function scope.
4. This functino will return [50, 100, 150]. Because discounted has the function scope and contains all the final prices.
5. Line 12 will cause an error. This is because `let` defines i to only have the block scope so it is not accessible outside the loop.
6. Line 13 will cause an error. This is because `let` defines discountedPrice to only have the block scope so it is not accessible outside the loop.
7. Line 14 will print "150". Because even though `let` defines finalPrice, it is defined outside the loop but within the scope of the function.
8. This function will return [50, 100, 150]. Because the variable discounted has the function scope (`let` outside loop) and stores all the fianl prices. 
9. Line 11 will cause an error because i only has the block scope but not the function scope. It is not accessible outside the loop.
10. Line 12 will print "3" this is because length is defiend outside the loop but within the function and has the value of the length of the passed in list (3).
11. The function will return [50, 100, 150]. Because even though `const` defines discountedPrice to be a constant, it is getting redefined every loop so all these vlues get sotred inside the final discounted array.
12. 
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13.  
    A. '32'. 2 is mapped to '2' since integers map to their exact string representation
    B. 1. '3' is mapped to 3 from a string to its integer representation
    C. 3. null is converted to 0 since it maps to 0, 3 + 0 = 3.
    D. '3null'. null is mapped to "null" in string conversion.
    E. 4. true is mapped to 1.
    F. 0. false mapps to 0 and null maps to 0.
    G. '3undefined'. undefined maps to string 'undefined'.
    H. NaN. '3' maps to 3 and undefined maps to NaN.
14. 
    A. true. '2' maps to 2 and 2 > 1.
    B. false. strings are compared letter-by-letter. The first characters are compared as '2' < '1', which is false lexicographcially.
    C. true. '2' maps to 2 and 2 equals 2.
    D. false. === is strict equality operator which checks the equality without type conversion.
    E. false. true maps to 1 and 1 < 2.
    F. true. Boolean(value) has the conversion rule of converting values that are not empty to true. So 2 maps to true. And using strict equality check true is euqal to true.
15. == is a regular check, it checks equality with type conversion. === is a strict equality operator, it checks equality without type conversion. 
17. [2, 4, 6]. First the array [1,2,3] gets passed into the function modifyArray, and then doSomething is the callback function which doubles each number in the array.
18. 1
    4
    3
    2



