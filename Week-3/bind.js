//call and apply function
function Student(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}
// instead of having the object called in individual function, 
// we call it once and reuse it multiple times.
const displayOutput = function (prefix, suffix) {
    console.log(`${prefix} ${this.firstName} ${this.lastName} ${suffix}`);
}
function Employee(firstName, lastName, designation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.designation = designation;
}
let student = new Student("John", "Doe", "Maths");
 //displayOutput(); undefined as it refers to global object window
displayOutput.call(student, "Hi!", "- From the call function"); // calling displayOutput function and stating the value of this
displayOutput.apply(student, ["Hi!", "- From the apply function"]);

console.log("");


let employee = new Employee("Shane", "Bond", "Coach");
//displayOutput.call(employee); calling displayOutput function and stating the value of this
displayOutput.call(employee, "Hi!", "- From the call function"); // calling displayOutput function and stating the value of this
displayOutput.apply(employee, ["Hi!", "- From the apply function"]);

console.log("");
console.log("Bind function Example");

//bind function
function divide(a,b){
    return this.a / this.b;
}

const divideBind = divide.bind({a: 45, b: 9});
console.log(divideBind());

