
// *** NOTES ***

// If you're returning an array of elements inside of React, which in this project I am with 
// the todos.map() function in the App.jsx file (which is also copied in this file in the example 
// below), you need to make sure that each element at the very top level has a key property with a 
// unique identifier, which in this project is unique to each one of the To-Do's.

//      EXAMPLE: (from App.jsx): {todos.map(todo => {
//                                  return (
//                                      <li key={todo.id}>
//                                          <label>
//                                              <input type="checkbox" checked={todo.completed} 
//                                              onChange={e => toggleTodo(todo.id, e.target.checked)} />
//                                              {todo.title}
//                                          </label>
//                                          <button className="btn btn-danger">Delete</button>
//                                      </li>
//                                  )
//                               })}

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

// The useEffect Hook doesn't return anything but it takes a function as it's argument and this 
// function for the useEffect is essentially saying to run this function every time the objects 
// inside the array of the second property change.

//      EXAMPLE: (from App.jsx): useEffect(() => {
//                                  localStorage.setItem("ITEM", JSON.stringify(todos))
//                               }, [todos])

// In the example above, everytime the todos change, you want to run the code that's inside the function, 
// and this code is just going to go to the local storage and you want to set the ITEMS property to the 
// JSON stringified version of the todos 
// 
// So essentially to break down what's really happening, the useEffect says to run the function (seen below) 
// that we pass to it, every single time any of the values in the todos array change.
//      Function (from above example): () => {localStorage.setItem("ITEM", JSON.stringify(todos))}

// So in this case anytime the todos change, this function gets called and this function is just taking the 
// todos and storing them inside of localStorage. 

// Essentially this code is now storing the information in localStorage but you aren't actually getting the 
// information from localStorage.

// To get your information from localStorage, you're going to have to call the useState Hook but instead of 
// passing it a default value you're going to pass it a function.

// The function version of useState works exactly the same since whatever you return from the function is your 
// default value.

// NOTE: Hooks in React need to be called at the top of your function. You cannot put a Hook conditionally.
//      EXAMPLE: if (true) {
//                  useEffect(() => {
//                      localStorage.setItem("ITEMS", JSON.stringify(todos))
//                  }, [todos])
//               } 

// If you do this then immediately your code is going to actually break and in your console you will get an error 
// that essentially says that you cannot render hooks conditionally. 
// 
// You cannot put Hooks inside of if statements, Loops, and you cannot put them after returns. They have to essentially 
// be put at the very top of your file and they have to always run the same number of hooks every single time and that's 
// just one of the rules of Hooks.



