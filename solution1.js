function getStudentGrade() {
    //prompt user to enter student's marks
    let marks = prompt("Enter the student's marks (0-100):");

    //convert input to numbers
    marks = Number(marks);

    //check if the input is valid
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return;
    }

    //establish the grade based on the marks
    if (marks > 79) {
        console.log("The student's grade is: A");
    } else if (marks >= 60 && marks <= 79) {
        console.log("The student's grade is: B");
    } else if (marks >= 50 && marks < 60) {
        console.log("The student's grade is: C");
    } else if (marks >= 40 && marks < 50) {
        console.log("The student's grade is: D");
    } else {
        console.log("The student's grade is: E");
    }
}
//call the function
getStudentGrade();
