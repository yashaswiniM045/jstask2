// 1. Welcome Program
//- Ask user name using prompt().
//- Show alert: Hi , Welcome to JavaScript Training.
//- Print the same message in console

let userName = prompt("Enter your name:");
alert("Hi " + userName + ", Welcome to JavaScript Training.");
console.log("Hi " + userName + ", Welcome to JavaScript Training.");


alert(welcomeMsg);
console.log(welcomeMsg);


// 2. Console Methods Practice
//- Print 500 using console.log(), console.warn(), console.error().
//- Use console.clear().

console.log(500);
console.warn(500);
console.error(500);
// This will clear the console history above it 
console.clear();


// 3. Data Type Identification
//- Create string, number, boolean, undefined, and null variables.
//- Print value and type using typeof.

let str = "JavaScript";
let num = 100;
let isLearning = true;
let notDefined;
let emptyValue = null;

console.log(str, typeof str);
console.log(num, typeof num);
console.log(isLearning, typeof isLearning);
console.log(notDefined, typeof notDefined);
console.log(emptyValue, typeof emptyValue);


// 4. Arithmetic Operations
//-Use let a = 20 and let b = 5.
//-Perform +, -, *, /, %, ** and print results.

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);


// 5. Increment & Decrement
//- Demonstrate pre-increment, post-increment, pre-decrement, post-decrement.
//- Print variables clearly.


let x = 10;

console.log("Pre-Increment:", ++x); //becomes 12, then prints 12
console.log("Post-Increment:", x++); //prints 10, then becomes 11
console.log("After Post-Increment:", x);

console.log("Pre-Decrement:", --x); //becomes 10, then prints 10
console.log("Post-Decrement:", x--); //prints 12, then becomes 11
console.log("After Post-Decrement:", x);


// 6. Assignment Operators
// - Use let num = 10.
//- Perform +=, -=, *=, /=, %= and print results.


let numValue = 10;

numValue += 5;
console.log("After += :", numValue);

numValue -= 3;
console.log("After -= :", numValue);

numValue *= 2;
console.log("After *= :", numValue);

numValue /= 4;
console.log("After /= :", numValue);

numValue %= 3;
console.log("After %= :", numValue);


// 7. Array Access
//- Create array ['HTML','CSS','JavaScript','React'].
//- Print first element, second element, last element (using length), and total elements.


let courses = ['HTML', 'CSS', 'JavaScript', 'React'];

console.log("First Element:", courses[0]);
console.log("Second Element:", courses[1]);
console.log("Last Element:", courses[courses.length - 1]);
console.log("Total Elements:", courses.length);


// 8. Modify Array
//- Add one element at end.
//- Remove last element.
//- Print updated array.


let courses = ['HTML', 'CSS', 'JavaScript', 'React'];

// Add one element at end
courses[courses.length] = "NodeJS";
console.log("After Adding:", courses);

// Remove last element
courses.length = courses.length - 1;
console.log("After Removing:", courses);


// 9. Student Object
//- Create object with name, age, course, city.
//- Print values using dot notation.


let student = {
  name: "Yashaswini",
  age: 22,
  course: "JavaScript",
  city: "Bangalore"
};

console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.city);


// 10. Nested Object Practice
//- Create company object with nested trainer object.
//- Print company name, trainer name, trainer subject.

let company = {
  companyName: "Stackly",
  trainer: {
    trainerName: "Naveen Kumar",
    subject: "JavaScript"
  }
};

console.log(company.companyName);
console.log(company.trainer.trainerName);
console.log(company.trainer.subject);
