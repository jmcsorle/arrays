var siblings = ["Jim", "Georgia", "Bruce", "Mike"];

//Push Method for the "siblings" array:
// The push method changes the length of the original array by adding one or more elements to the end and returning the new length of the array.
//The following 3 lines of code creates a new variable called "siblingCount". The push method is applied to the right side of the operation as follows: var siblingCount = siblings.push("String of Name to be Added"). Multiple names could be added, but this example just shows how to add one name. The console logs will return the new count of the number of elements in the sibling array and will show all of the elements in the array.

var siblingCount = siblings.push("Bonnie");
console.log(siblingCount);
console.log(siblings);


var ages = [69, 68, 66, 64];

//Slice Method for the "ages" array:
// The slice method returns a "shallow copy" of a portion of an array into a new array object that is selected from "start" to "end," where "end" is not included in the new representation (shallow copy) of the array.
// I believe that a "shallow copy" essentially means that the copy and the original are connected and that if you change a value of an element in a shallow copy of an array, it will change that same element value in the original as well. I may be misunderstanding the definition, but that is what I thin it means.
// "start" and "end" represent the index of an element in an array. The outcome (list / order) of the original array is not modified, but if you were to change the value of one of the elements, then I believe the value of the element in the original array would also be changed because it's a "shallow copy".
//In the following line of code, the first integer in the slice is 1 and the last integer in the slice is 3. The values for integers 1 and 2 will be returned because the slice command will not return the value of the last integer in the slice. The console should show [68, 66]

console.log(ages.slice(1, 3));


var genderMale = [true, false, true, true];

//Pop Method for the "genderMale" array:
// The pop method removes the last element from the array and returns that element. This method also changes the length of the array.
// The following two lines of code will remove "true" from the "genderMale" array and return "true" to show that it was removed. It will then return the remaing three elements of the "genderMale" array. 

console.log(genderMale.pop());
console.log(genderMale);

//Understanding of Integers
// Every piece of data in an array is called an element and every element has a position in an array. These positions are called "integers." Integer positions start at 0, so an array with 5 elements would have the following integer positions: 0, 1, 2, 3, 4.
//The following code shows the work I completed on integer positions during the arrays assignment:

// Declare a variable named friends that stores an Array of 5 Strings, each a friend's name.
// Access the third element.
// Access the last element.
// Access the first element.

var friends = ["John", "Judy", "Betty", "Sharron", "Whitney"];
console.log(friends[2]);
console.log(friends[4]);
console.log(friends[0]);