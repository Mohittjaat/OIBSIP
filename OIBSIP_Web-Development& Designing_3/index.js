const tempInput = document.getElementById("tempInput");
const unitInput = document.getElementById("unitInput");
const convertBtn = document.getElementById("convertBtn");
const resultArea = document.getElementById("resultArea");

function round(num) {
  return Math.round(num * 100) / 100;
}

function convertTemperature(value, unit) {
  const temp = parseFloat(value);
  if (isNaN(temp)) {
    resultArea.innerHTML = "❌ Please enter a valid number.";
    return;
  }

  let c, f, k;

  switch (unit) {
    case "celsius":
      c = temp;
      f = (temp * 9) / 5 + 32;
      k = temp + 273.15;
      break;
    case "fahrenheit":
      c = (temp - 32) * (5 / 9);
      f = temp;
      k = c + 273.15;
      break;
    case "kelvin":
      k = temp;
      c = temp - 273.15;
      f = (c * 9) / 5 + 32;
      break;
  }

  resultArea.innerHTML = `
    <div>🌡️ <strong>Celsius:</strong> ${round(c)} °C</div>
    <div>🌡️ <strong>Fahrenheit:</strong> ${round(f)} °F</div>
    <div>🌡️ <strong>Kelvin:</strong> ${round(k)} K</div>
  `;
}

convertBtn.addEventListener("click", () => {
  convertTemperature(tempInput.value, unitInput.value);
});
