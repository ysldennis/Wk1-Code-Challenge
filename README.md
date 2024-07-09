Challenge-1
The `getStudentGrade` function is a simple JavaScript program that prompts the user to input student marks and outputs the corresponding grade based on the input. The grades are assigned according to the following criteria:

- **A**: Marks greater than 79
- **B**: Marks between 60 and 79 (inclusive)
- **C**: Marks between 50 and 59 (inclusive)
- **D**: Marks between 40 and 49 (inclusive)
- **E**: Marks less than 40

## Technologies and Methods Used

### JavaScript

JavaScript is the core technology used in this function. It is a versatile programming language primarily used for web development to create interactive and dynamic content on web pages.

### Methods and Concepts

1. **`prompt` Function**:
   - The `prompt` function is used to display a dialog box that prompts the user to input some data. In this case, it asks the user to enter the student's marks.
   - Example: `let marks = prompt("Enter the student's marks (0-100):");`

2. **Type Conversion**:
   - The `Number` function is used to convert the user input, which is a string by default, into a numerical value.
   - Example: `marks = Number(marks);`

3. **Input Validation**:
   - The function checks if the input is a valid number within the range of 0 to 100. This is done using the `isNaN` function to check if the value is not a number and conditional statements to check the range.
   - Example:
     ```javascript
     if (isNaN(marks) || marks < 0 || marks > 100) {
         console.log("Invalid input. Please enter a number between 0 and 100.");
         return;
     }
     ```

4. **Conditional Statements**:
   - The function uses `if...else if...else` statements to determine the grade based on the marks entered by the user. Different ranges of marks correspond to different grades.

   

