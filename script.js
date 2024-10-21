document.getElementById('convertBtn').addEventListener('click', function() {
    const temp = document.getElementById('temperature').value;
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    const resultElement = document.getElementById('result');

    // Validate if input is a number
    if (isNaN(temp)) {
        resultElement.innerHTML = "Please enter a valid number!";
        return;
    }

    let convertedTemp;

    // Convert temperature
    if (unitFrom === unitTo) {
        convertedTemp = temp; // No conversion needed if both units are the same
    } else if (unitFrom === 'celsius') {
        if (unitTo === 'fahrenheit') {
            convertedTemp = (temp * 9/5) + 32;
        } else if (unitTo === 'kelvin') {
            convertedTemp = parseFloat(temp) + 273.15;
        }
    } else if (unitFrom === 'fahrenheit') {
        if (unitTo === 'celsius') {
            convertedTemp = (temp - 32) * 5/9;
        } else if (unitTo === 'kelvin') {
            convertedTemp = (temp - 32) * 5/9 + 273.15;
        }
    } else if (unitFrom === 'kelvin') {
        if (unitTo === 'celsius') {
            convertedTemp = temp - 273.15;
        } else if (unitTo === 'fahrenheit') {
            convertedTemp = (temp - 273.15) * 9/5 + 32;
        }
    }

    // Display result
    resultElement.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${unitTo.charAt(0).toUpperCase() + unitTo.slice(1)}`;
});
