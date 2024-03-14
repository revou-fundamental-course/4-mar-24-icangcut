function calculateBMI() {
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100;
    var age = parseInt(document.getElementById("age").value);
  
    var bmi = weight / (height * height);
    var status = "";
  
    if (bmi < 18.5) {
      status = "Underweight";
      applyColor("blue");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Normal weight";
      applyColor("green");
    } else if (bmi >= 25 && bmi <= 29.9) {
      status = "Overweight";
      applyColor("orange");
    } else {
      status = "Obese";
      applyColor("red");
    }
  
    var resultText = "Your BMI: " + bmi.toFixed(2) + "<br>Status: " + status;
    document.getElementById("result").innerHTML = resultText;
  
    var table = document.getElementById("bmiTable");
    table.innerHTML = `
      <thead>
        <tr>
          <th>BMI Range</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&lt; 18.5</td>
          <td class="blue">Underweight</td>
        </tr>
        <tr>
          <td>18.5 - 24.9</td>
          <td class="green">Normal weight</td>
        </tr>
        <tr>
          <td>25 - 29.9</td>
          <td class="orange">Overweight</td>
        </tr>
        <tr>
          <td>&ge; 30</td>
          <td class="red">Obese</td>
        </tr>
      </tbody>
    `;
    table.style.display = "block";
  }
  
  function applyColor(colorClass) {
    var resultElement = document.getElementById("result");
    resultElement.className = colorClass;
  }
  