function getbmivalue() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    height = height * 0.3048;
    var bmi = weight / (height * height);
    var bmi = bmi.toFixed(2);
    var msg;
    if (bmi < 19) {
        msg = 'You are underweight.';
    }
    else if (bmi >= 19 && bmi <= 25) {
        msg = 'You are healthy.';
    }
    else {
        msg = 'You are overweight.';
    }
    document.getElementById('bmivalue').value = bmi;
    document.getElementById('output').innerHTML = msg;
}