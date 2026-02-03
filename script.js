// 1. Welcome Program
let userName = prompt("Enter your name:");
alert("Hi " + userName + ", Welcome to JavaScript Training.");
console.log("Hi " + userName + ", Welcome to JavaScript Training.");


// 2. Console Methods Practice
console.log(500);
console.warn(500);
console.error(500);
console.clear();


// 3. Data Type Identification
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
let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);


// 5. Increment & Decrement
let x = 10;

console.log("Pre-Increment:", ++x);
console.log("Post-Increment:", x++);
console.log("After Post-Increment:", x);

console.log("Pre-Decrement:", --x);
console.log("Post-Decrement:", x--);
console.log("After Post-Decrement:", x);


// 6. Assignment Operators
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
let courses = ['HTML', 'CSS', 'JavaScript', 'React'];

console.log("First Element:", courses[0]);
console.log("Second Element:", courses[1]);
console.log("Last Element:", courses[courses.length - 1]);
console.log("Total Elements:", courses.length);


// 8. Modify Array
courses[courses.length] = "NodeJS"; // add element at end
console.log("After Adding:", courses);

courses.length = courses.length - 1; // remove last element
console.log("After Removing:", courses);


// 9. Student Object
let student = {
  name: "Rahul",
  age: 22,
  course: "JavaScript",
  city: "Bangalore"
};

console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.city);


// 10. Nested Object Practice
let company = {
  companyName: "Tech Solutions",
  trainer: {
    trainerName: "Anita",
    subject: "JavaScript"
  }
};

console.log(company.companyName);
console.log(company.trainer.trainerName);
console.log(company.trainer.subject);
