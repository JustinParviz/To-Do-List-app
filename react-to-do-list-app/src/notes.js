
// *** NOTES ***

// If you're returning an array of elements inside of React, which in this project I am with 
// the map function in the App.jsx file on line #31, you need to make sure that each element
// at the very top level has a key property with a unique identifier, which in this project 
// is unique to each one of the To-Do's

// The reason that you need to do this inside of React is because hypothetically if you wanted 
// to edit, delete, or modify one of the To-Do's in the list but you didn't want to change any 
// of the other ones and you just wanted to change one, React needs to know which one changed 
// so it uses this key property to know which To-Do is changing.

//      EXAMPLE: If you change a To-Do that has a key ID of 7, it knows that whenever you change 
//               this To-Do with the ID of 7 to update the information for this particular element 
//               and to not bother touching any of the other elements.

// It's a performance optimization which makes it so that your code can run faster and better and 
// it's going to make sure that no weird bugs come up so it's really important to always remember 
// to put a key property, which is some type of unique identifier. 
// 
// Also it's generally a bad idea to use the index of the element in the array instead of a key 
// property with a unique identifier because if you delete elements in the array it could really 
// mess up different things in your code.







