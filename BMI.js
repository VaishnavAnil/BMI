function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Convert height from cm to meters

    var bmi = weight / (height * height);

    var resultElement = document.getElementById('result');

    if (!isNaN(bmi)) {
        resultElement.textContent = 'Your BMI is: ' + bmi.toFixed(2);
    } else {
        resultElement.textContent = 'Please enter valid weight and height values.';
    }
}