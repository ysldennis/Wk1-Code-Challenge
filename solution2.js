function checkSpeed() {
    // Prompt the user to enter the speed of the car
    let speed = prompt("Enter the speed of the car (in km/h):");

    // Convert input to a number
    speed = Number(speed);

    // Check if the input is valid
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }

    // Define the speed limit
    const speedLimit = 70;

    // Check if speed is less than the speed limit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate the number of demerit points
        let demeritPoints = Math.floor((speed - speedLimit) / 5);

        // Print the total number of demerit points
        console.log("Points: " + demeritPoints);

        // Check if the driver gets more than 12 points
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

// Call the function to execute
checkSpeed();

    