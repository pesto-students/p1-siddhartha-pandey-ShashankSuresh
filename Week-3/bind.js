function Student(firstName, lastName, subject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}
function Employee(firstName, lastName, designation){
    this.firstName = firstName;
    this.lastName = lastName;
    employee.designation = designation;
}
let student = new Student("John", "Doe", "Maths");
let employee = new Employee("Shane", "Bond", "Coach");

const displayOutput = function(){
    console.log(`${this.firstName} ${this.lastName}`);
}

displayOutput.call(student);